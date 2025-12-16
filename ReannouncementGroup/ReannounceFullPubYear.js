/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "ReannounceFullPubYear",
  "type" : "BusinessAction",
  "setupGroups" : [ "ReannouncementGroup" ],
  "name" : "Reannounce Full Pub Year",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "PublicationYearUtilityLibrary",
    "libraryAlias" : "pubLibrary"
  } ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "UI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (LOG,NODE,UI,pubLibrary) {
var nodeChildren = NODE.getChildren();
var headline = "Reannouncement succesfully executed!";
var body = "Year " + NODE.getName() + " has been deleted since all it's volumes have been moved.";
var severity = "ACKNOWLEDGEMENT";
var parentNode = NODE.getParent();
var newYear = NODE.getValue("PHPublicationYear").getSimpleValue();
var newPubYear = pubLibrary.createYear(parentNode,newYear);
var parentJournalMediaTypeId = NODE.getParent().getObjectType().getID();
var nodeIssueChildren = [];
var nodeDelete = "";

for (var i = 0; i < nodeChildren.size(); i++){
	nodeIssueChildren = nodeChildren.get(i).getChildren();

	for (var x = 0; x < nodeIssueChildren.size(); x++){
		nodeIssueChildren.get(x).getValue("IssueReportingYear").setSimpleValue(newYear);
	}
	
	nodeChildren.get(i).setParent(newPubYear);
	NODE.approve();
}

if (NODE.getChildren().size() == 0){
	nodeDelete = NODE.delete();
	nodeDelete.approve();

	UI.showAlert(severity,headline,body);
	
	if(parentJournalMediaTypeId == "JournalPrintMedia"){
		UI.navigate("PrintJournalNodeDetails", parentNode);
	} else if(parentJournalMediaTypeId == "JournalDigitalMedia"){
		UI.navigate("DigitalJournalNodeDetails", parentNode);
	}
}
}