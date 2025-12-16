/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "IssueCreationFinishButton",
  "type" : "BusinessAction",
  "setupGroups" : [ "IssuesNavegationGroup" ],
  "name" : "Issue Creation/Finish Button",
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
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (UI,NODE,LOG,genericFunctions,issueLibrary) {
var continuousNumbering = NODE.getValue("ContinuousNumbering").getSimpleValue();
var copyToOnline = NODE.getValue("CopyToOnline").getSimpleValue();
var numberOfIssues = 0;
var issueType = "";
var issueNumber = 0;
var pubSequence = "";
var volumeNumber = "";
var printIssue = "";
var printJournal = NODE.getParent();
var digitalIssue = "";
var digitalJournal = "";
var severity = "ACKNOWLEDGEMENT";
var headline = "Issues succesfully created!";
var body = "Created requested issues for existing volumes.";
var workflowInstance = "";
var urlDomain = "https://wiley-test-step.mdm.stibosystems.com/webui/";
var urlPre = "WileyProdWebUI#screen=IssueWorkflowMediaTaskList&stateflow=VolumeIssueCreationWF&onlyMine=Group&state=State-9&displayMode=-85593087.0&filter.-85593087=-2113821771.";
var urlContent = NODE.getValue("JournalGroupCode").getSimpleValue();
var urlPost = "&sort.-85593087=-363169767.Ascending&contextID=Context1&workspaceID=Main&caafcffbffcb.vr=0x100";
var url = urlPre + urlContent + urlPost;
	
NODE.queryChildren().forEach(function(volume){
	numberOfIssues = parseInt(volume.getValue("NumberOfIssues").getSimpleValue());
	issueType = volume.getValue("CreateIssueTypeIDL").getSimpleValue();
	
	for (var i = 0; i < numberOfIssues; i++){
		pubSequence = printJournal.getValue("StartingPubSequenceMedia").getSimpleValue();
		
		switch(true){
			case (issueType == "Standard Issue"):
				if (continuousNumbering == "Yes"){
					issueNumber = parseInt(printJournal.getValue("StartingIssueNumber").getSimpleValue());
				} else {
					issueNumber = parseInt(volume.getValue("StartingIssueNumberVolume").getSimpleValue());
				}
				break;
			case (issueType == "Supplement"):
				if (continuousNumbering == "Yes"){
					issueNumber = parseInt(printJournal.getValue("StartingSupplementNoYear").getSimpleValue());
				} else {
					issueNumber = parseInt(volume.getValue("StartingSupplementNoVolume").getSimpleValue());
				}
				break;
		}
		
		printIssue = issueLibrary.createIssue(volume, issueNumber, issueType, pubSequence);
		
		if (copyToOnline == "Yes" && issueType == "Standard Issue"){
			digitalIssue = issueLibrary.issueCopyToOnline(printIssue);
		}
	}

	if (digitalIssue != ""){
		digitalJournal = digitalIssue.getParent().getParent().getParent();
		workflowInstance = digitalJournal.getWorkflowInstanceByID("JournalCreationWFV3Backup");
		
		//Managing On Workflow processes
		if (workflowInstance){
			//genericFunctions.submitFromWorkflow(digitalJournal,"JournalCreationWFV3Backup");
			try {
				var myTask = digitalJournal.getTaskByID("JournalCreationWFV3Backup","State-7");
				var myTriggerResult = myTask.triggerByID("Finalize","Generic Function Submit");
			} catch (e) {
				LOG.info("ERROR IN TRIGGER FOR WORKFLOW: " + e);
			}
		}
	}
	
	return true;
});

UI.showAlert(severity,headline, body);

//Managing On Workflow processes
workflowInstance = printJournal.getWorkflowInstanceByID("JournalCreationWFV3Backup");

if (workflowInstance){
	//genericFunctions.submitFromWorkflow(printJournal,"JournalCreationWFV3Backup");
	try {
		var myTask = printJournal.getTaskByID("JournalCreationWFV3Backup","State-7");
		var myTriggerResult = myTask.triggerByID("Finalize","Generic Function Submit");
	} catch (e) {
		LOG.info("ERROR IN TRIGGER FOR WORKFLOW: " + e);
	}		
	UI.navigateUrl(url, false);
} else{
	if(NODE.getObjectType().getID() == "JournalPrintPublicationYear"){
		UI.navigate("PrintPublicationYearScreen", NODE);
	} else if(NODE.getObjectType().getID() == "JournalDigitalPublicationYear"){
		UI.navigate("DigitalPublicationYearScreen", NODE);
	}
}
}