/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "IssueMergeCreation",
  "type" : "BusinessAction",
  "setupGroups" : [ "IssuesUpsertGroup" ],
  "name" : "Issue Merge Creation",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "GenericFunctions",
    "libraryAlias" : "genericFunctions"
  }, {
    "libraryId" : "VolumeFunctions",
    "libraryAlias" : "volumeLibrary"
  }, {
    "libraryId" : "IssueFunctions",
    "libraryAlias" : "issueLibrary"
  } ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
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
exports.operation0 = function (UI,genericFunctions,volumeLibrary,issueLibrary) {
var uiSelection = UI.getSelection();
var issue1 = uiSelection.get(0);
var issue2 = uiSelection.get(1);
var issue1Number = parseInt(issue1.getValue("IssueFromIssueNumber").getSimpleValue());
var issue2Number = parseInt(issue2.getValue("IssueFromIssueNumber").getSimpleValue());
var currentIssue = "";
var currentIssueNumber = "";
var volume = issue1.getParent();
var pubyear = volume.getParent();
var journalMedia = pubyear.getParent();
var pubSequence = journalMedia.getValue("StartingPubSequenceMedia").getSimpleValue();
var severity = "";
var headline = "";
var body = "";
var issueRunDateValidity = true;

//Checking if there are issues with Run Date populated
issueRunDateValidity = volumeLibrary.validateIssuesRunDate(volume, issue1Number, issue2Number, "N");

if (issueRunDateValidity == true){
	severity = "ACKNOWLEDGEMENT";
	headline = "Issues successfully merged!";
	body = "Issues have been successfully merged.";
	
	//Updating the status of all issues in between to merged
	for (var i = 0; i < volume.getChildren().size(); i++){
		currentIssue = volume.getChildren().get(i);
		currentIssueNumber = parseInt(currentIssue.getValue("IssueFromIssueNumber").getSimpleValue());
		currentIssueType = currentIssue.getValue("IssueType").getSimpleValue();
		
		if ((currentIssueNumber > issue1Number && currentIssueNumber < issue2Number) && currentIssueType == "Standard Issue"){
			currentIssue.getValue("IssueStatus").setSimpleValue("Merged");
			//Initiating Issue into the Issue creation workflow for publishing downstreams
			genericFunctions.removeFromWorkflow(currentIssue, "VolumeIssueCreationWF");
			currentIssue.startWorkflowByID("VolumeIssueCreationWF", null);
		}
	}

	//Creating the merge issue
	issueLibrary.mergeIssues(issue1, issue2, pubSequence);
	
	UI.showAlert(severity,headline,body);
} else {
	severity = "ERROR";
	headline = "Unable to merge!";
	body = "There are issues with Issue Run Date populated.";
	
	UI.showAlert(severity,headline,body)
}
}