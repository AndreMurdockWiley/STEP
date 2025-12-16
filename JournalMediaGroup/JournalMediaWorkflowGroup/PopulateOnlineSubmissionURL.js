/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PopulateOnlineSubmissionURL",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalMediaWorkflowGroup" ],
  "name" : "Populate Online Submission URL",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : true,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "web",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,web) {
var REX = node.getValue("JournalREXSiteName").getSimpleValue();
//log.info("REX" + REX);
var submission = node.getValue("JournalEditorialSubmissionSystem").getSimpleValue();
//log.info("submission" + submission);
var OnlineURL = node.getValue("JournalSubmissionUrlValue").getSimpleValue();
//log.info("OnlineURL" + OnlineURL);
var PrevSubSys = node.getValue("PrevSubmissionSys_PIM").getSimpleValue();
log.info("PrevSubSys" + PrevSubSys);
var str="https://submission.wiley.com/journal/";
//str.toString();
if (submission == "Research Exchange Submission"){
	if(REX){
	//		REX.toString();	
		var cmb1= str + REX;
		var value1=node.getValue("JournalSubmissionUrlValue").setSimpleValue(cmb1);
		
		//log.info("value1"+node.getValue("JournalSubmissionUrlValue").getSimpleValue());
	}

if(!REX || REX == null){
	var JounalGRPCode = node.getValue("JournalGroupCode").getSimpleValue();
	//JounalGRPCode.toString();
	//log.info("JounalGRPCode" + JounalGRPCode);
	var cmb2= str + JounalGRPCode;
	var value2=node.getValue("JournalSubmissionUrlValue").setSimpleValue(cmb2);
	//log.info("value2" + node.getValue("JournalSubmissionUrlValue").getSimpleValue());
	if (submission == "Research Exchange Submission" && PrevSubSys != "Research Exchange Submission"){
	web.showAlert("WARNING","Submission URL has been created using Journal Group Code because REX Site Name was Null. To update Submission URL please add a REX Site Name");
}
}
}
var submission = node.getValue("JournalEditorialSubmissionSystem").getSimpleValue();
//log.info("submission" + submission);
var PrevSubSys = node.getValue("PrevSubmissionSys_PIM").getSimpleValue();
//log.info("PrevSubSys" + PrevSubSys);

node.getValue("PrevSubmissionSys_PIM").setSimpleValue(submission);
//log.info("PrevValue" + node.getValue("PrevSubmissionSys_PIM").getSimpleValue());
	

}