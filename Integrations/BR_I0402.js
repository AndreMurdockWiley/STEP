/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BR_I0402",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "BR_I0402",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "Generic_Search_Functions",
    "libraryAlias" : "genericSearch"
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
    "contract" : "InboundBusinessProcessorImporterSourceBindContract",
    "alias" : "inboundMessage",
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
    "contract" : "InboundBusinessProcessorExecutionReportLoggerBindContract",
    "alias" : "reportLogger",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (manager,inboundMessage,log,reportLogger,genericSearch) {
try {
var prodMessage = JSON.parse(inboundMessage.getMessage());
var sap_material_id = prodMessage.sap_material_id;
var issue_run_date = prodMessage.issues_print_run_mailing_date;
var node = manager.getNodeHome();
log.info("TESTING IN PROCESSING SAP FEED : " );
log.info("JSON payload: "+inboundMessage.getMessage());
validateInboundMessage(sap_material_id,issue_run_date);
searchUpdateObjectwithKey(sap_material_id);
log.info("TESTING IN PROCESSING SAP FEED : " );

} catch (e) {
	var myErrorObj = manager.getProductHome().getProductByID("Active_Errors").createProduct(null,"Error_Record");
	myErrorObj.getValue("Error_Description").setSimpleValue(e);
	//myErrorObj.getValue("Error_JournalProductCode").setSimpleValue(journalCd);
	//myErrorObj.getValue("Error_IssueDoi").setSimpleValue(issue_doi.split("/")[0]);
	//myErrorObj.getValue("Error_ProductionIdentifier").setSimpleValue(issue_production_identifier);
	myErrorObj.getValue("Error_IssueRunDate").setSimpleValue(issue_run_date);
	myErrorObj.getValue("Error_SAP_Number").setSimpleValue(sap_material_id);
	myErrorObj.setName(myErrorObj.getID());
	var dateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	var now = dateFormat.format(new Date());	
	myErrorObj.getValue("Error_Timestamp").setSimpleValue(now);
/*	if(journalNodeFound != null){
		myErrorObj.createReference(journalNodeFound,"ErrorObject2ImportNodeReference");	
		var journalMediaObjectsFound = journalNodeFound.getChildren().iterator();
		while (journalMediaObjectsFound.hasNext()) {
			var MediabjectNode = journalMediaObjectsFound.next();
			myErrorObj.createReference(MediabjectNode,"ErrorObject2ImportNodeReference");	
		}
		
	}*/
	
	var wfObj = manager.getWorkflowHome().getWorkflowByID("Error_Review_WF");
	var wfInst = myErrorObj.getWorkflowInstance(wfObj);
	var wfTask = wfInst.getTaskByID("New_Error");
	myErrorObj.getValue("Error_JSON_Load").setSimpleValue(inboundMessage.getMessage());
	wfTask.triggerByID("toSAP","to SAP error State");
	
    log.info("ERROR IN PROCESSING SAP FEED : " + e);
}




function validateInboundMessage(sap_material_id,issue_run_date)
{
	if(!sap_material_id || !issue_run_date)
	{
		throw new java.lang.RuntimeException("No SAP Materail Number or run date passed to the IIEP");
		return false;
	}
	if(issue_run_date.length != 8)
	{
		reportLogger.logWarning("Issues Run Date incorrect format - "+issue_run_date);
		throw new java.lang.RuntimeException("Issues Run Date incorrect format");
		return false;
	}
}

function searchUpdateObjectwithKey(sap_material_id)
{
	var issue_sap_material_id_key = "IssueSAPMaterialIdKey";
	var prod = genericSearch.search_object_using_key(node,issue_sap_material_id_key,sap_material_id);
	if(!prod)
	{	
		throw new Error("No SAP Number found for Issue object with SAP Materail Number:" + sap_material_id);
		return false;
	}
	var issue_run_date_Id = "IssueRunDate";
	var simpleDateFormat = new java.text.SimpleDateFormat("yyyyMMdd");
	var attrDateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd");
	log.info("issue run date:"+issue_run_date);
	var runDateFixed = new Date(simpleDateFormat.parse(issue_run_date));
	log.info("date updated:"+attrDateFormat.format(runDateFixed));
	log.info("Product.."+prod);
	prod.getValue(issue_run_date_Id).setValue(attrDateFormat.format(runDateFixed));
	stepID = prod.getID();
	objectTypeName = prod.getObjectType().getID();
	IssueJpcmsId = prod.getValue("IssueJpcmsId").getSimpleValue();
	Created_Timestamp = prod.getValue("CreationDate").getSimpleValue();
	IssueSAPMaterialNumber = prod.getValue("IssueSAPMaterialNumber").getSimpleValue();
	Updated_Timestamp = prod.getValue("LastUpdated").getSimpleValue();
	prod.getValue("IssuesStatus").setSimpleValue("Success");
	prod.getValue("IssuesStatusMessage").setSimpleValue("I0402 Update completed");
	prod.approve();
	//prod.getValue(issue_run_date_Id).setValue("2021-01-01");
}


function getCurrentDate(){
	var now = new Date();
	var dateTime = null;
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var day = now.getDate();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	
	if(month.toString().length ==1){
		var month = '0'+month;
	}if(day.toString().length ==1){
		var day = '0'+day;
	}if(hour.toString().length ==1){
		var hour = '0'+hour;
	}if(minute.toString().length ==1){
		var minute = '0'+minute;
	}if(second.toString().length ==1){
		var second = '0'+second;
	}

	dateTime = year + '-' + month + '-' + day + ' ' + hour + '.' + minute + '.' + second;

	//logger.info(dateTime)

	return dateTime;
	
}

}