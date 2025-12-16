/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "IssueMergeCreationWithCopyToOnline",
  "type" : "BusinessAction",
  "setupGroups" : [ "IssuesUpsertGroup" ],
  "name" : "Issue Merge Creation With Copy To Online",
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
  }, {
    "contract" : "AttributeValidatedContextParameterStringBinding",
    "alias" : "copyToOnline",
    "parameterClass" : "com.stibo.core.domain.businessrule.attributecontextparameter.AttributeValidatedContextParameter",
    "value" : "<AttributeValidatedContextParameter>\n  <Parameters>\n    <Parameter ID=\"Attribute\" Type=\"java.lang.String\">CopyToOnline</Parameter>\n    <Parameter ID=\"ID\" Type=\"java.lang.String\">Copy To Online</Parameter>\n  </Parameters>\n</AttributeValidatedContextParameter>",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (UI,copyToOnline,genericFunctions,volumeLibrary,issueLibrary) {
var uiSelection = UI.getSelection();
var printIssue1 = uiSelection.get(0);
var printIssue2 = uiSelection.get(1);
var issue1Number = parseInt(printIssue1.getValue("IssueFromIssueNumber").getSimpleValue());
var issue2Number = parseInt(printIssue2.getValue("IssueFromIssueNumber").getSimpleValue());
var currentIssue = "";
var currentIssueNumber = "";
var volume = printIssue1.getParent();
var pubyear = volume.getParent();
var journalMedia = pubyear.getParent();
var pubSequence = journalMedia.getValue("StartingPubSequenceMedia").getSimpleValue();
var digitalIssue = "";
var issueRunDateValidity = "";
var mergeIssue = "";
var digitalIssue1 = "";
var digitalIssue2 = "";
var severity = "";
var headline = "";
var body = "";

//Checking if there are issues with Run Date populated
issueRunDateValidity = volumeLibrary.validateIssuesRunDate(volume, issue1Number, issue2Number, copyToOnline);

if (issueRunDateValidity == true){
	severity = "ACKNOWLEDGEMENT";
	headline = "Issues successfully merged!";
	body = "Issues have been successfully merged.";
	
	//Updating the status of all issues in between to merged
	for (var i = 0; i < volume.getChildren().size(); i ++){
		currentIssue = volume.getChildren().get(i);
		currentIssueNumber = parseInt(currentIssue.getValue("IssueFromIssueNumber").getSimpleValue());
		currentIssueType = currentIssue.getValue("IssueType").getSimpleValue();
		
		if ((currentIssueNumber > issue1Number && currentIssueNumber < issue2Number) && currentIssueType == "Standard Issue"){
			currentIssue.getValue("IssueStatus").setSimpleValue("Merged");
			//Initiating Issue into the Issue creation workflow for publishing downstreams
			genericFunctions.removeFromWorkflow(currentIssue, "VolumeIssueCreationWF");
			currentIssue.startWorkflowByID("VolumeIssueCreationWF", null);
			
			//Managing Copy To Online
			if (copyToOnline == "Y"){
				digitalIssue = issueLibrary.findDigitalIssue(currentIssue);
				digitalIssue.getValue("IssueStatus").setSimpleValue("Merged");
				//Initiating Issue into the Issue creation workflow for publishing downstreams
				genericFunctions.removeFromWorkflow(digitalIssue, "VolumeIssueCreationWF");
				digitalIssue.startWorkflowByID("VolumeIssueCreationWF", null);
			}
		}
	}

	UI.showAlert(severity,headline,body);

	//Creating the merge issue
	mergeIssue = issueLibrary.mergeIssues(printIssue1, printIssue2, pubSequence);

	//Managing Copy To Online
	if (copyToOnline == "Y"){
		digitalIssue1 = issueLibrary.findDigitalIssue(printIssue1);
		digitalIssue2 = issueLibrary.findDigitalIssue(printIssue2);
		issueLibrary.mergeIssues(digitalIssue1, digitalIssue2, pubSequence);
	}
} else {
	severity = "ERROR";
	headline = "Unable to merge!";
	body = "There are issues with Issue Run Date populated.";
	
	UI.showAlert(severity,headline,body)
}
}