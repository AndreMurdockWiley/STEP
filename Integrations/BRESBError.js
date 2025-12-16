/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BRESBError",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "BR ESB Errors",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "GenericFunctions",
    "libraryAlias" : "genericFunctions"
  } ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "ManagerBindContract",
    "alias" : "manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "log",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "MailHomeBindContract",
    "alias" : "MAILHOME",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (manager,node,log,MAILHOME,genericFunctions) {
{
//var prodMessage = JSON.parse(inboundMessage.getMessage());
//var sap_material_id = prodMessage.sap_material_id;
//var issue_run_date = prodMessage.issues_print_run_mailing_date;
var v_code =  node.getValue("EditorialContactCode").getSimpleValue();      
var v_id = node.getName();
var v_name = node.getID();    
var node1 = manager.getNodeHome();
var parentID = node.getParent().getID();
var v_vch =  node.getValue("JournalVCHIdentifier").getSimpleValue();
//log.info("JSON payload: "+inboundMessage.getMessage());
//validateInboundMessage(sap_material_id,issue_run_date);
//searchUpdateObjectwithKey(sap_material_id);

if (parentID == "JournalAssociateManagingEditor" || parentID == "JournalOperationsAssistant" || parentID == "JournalManagingEditor") {

 		return false;
	}

if (v_code.length() > 4)
{
		throw new java.lang.RuntimeException("Editorial Code is Longer than Required 4 Digits for Janis ");
		return false;
	} 

	

} catch (e) {
	var journalEffectiveDate = node.getValue("JournalMediaFuturePrintStatusEffectDate").getSimpleValue();
	var today = genericFunctions.getToday("yyyy-MM-dd");

log.info("journalEffectiveDate " + journalEffectiveDate);
log.info("today " + today);

if (journalEffectiveDate ==null) {
	var emailTo = "datasolutions@wiley.com";
	var productTitle = node.getValue("ProductTitle").getSimpleValue();
	var emailSubject = "Editorial Code is longer than 4 Digits for Janis " + v_id;
	var emailBody = "The Editorial Code " + v_name + " has a value longer than 4 Digits."
                   "\nThis is the Editorial"
                   + node.getValue("EditorialContactCode").getSimpleValue() + "\nDate " + today;
                   
	
	//node.getValue("JournalMediaFuturePrintStatusEffectDate").setSimpleValue("");

	log.info("inside");
	
	genericFunctions.sendEmail(MAILHOME, emailTo, emailSubject, emailBody);
}
	var myErrorObj = manager.getProductHome().getProductByID("Active_Errors").createProduct(null,"Error_Record");
	myErrorObj.getValue("Error_Description").setSimpleValue(e);
	myErrorObj.getValue("Error_EditorialCode").setSimpleValue(v_code);
	myErrorObj.getValue("Error_EditorialID").setSimpleValue(v_id);
	myErrorObj.getValue("Error_EditorialName").setSimpleValue(v_name);
	myErrorObj.setName(myErrorObj.getID());
	var dateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	var now = dateFormat.format(new Date());	
	myErrorObj.getValue("Error_Timestamp").setSimpleValue(now);
	var wfObj = manager.getWorkflowHome().getWorkflowByID("Error_Review_WF");
	var wfInst = myErrorObj.getWorkflowInstance(wfObj);
	var wfTask = wfInst.getTaskByID("New_Error");
	myErrorObj.getValue("Error_JSON_Load").setSimpleValue(v_vch);
	wfTask.triggerByID("toESB","to ESB error State");
	
    log.info("ERROR IN Editorial Code : " + e);
}





}