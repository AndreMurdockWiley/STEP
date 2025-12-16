/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Issue_Creation",
  "type" : "BusinessAction",
  "setupGroups" : [ "WileyPOCRules" ],
  "name" : "Publishing - Volume Creation",
  "description" : "BA for Wiley Demo",
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
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
    "contract" : "LoggerBindContract",
    "alias" : "log",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "step",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "ui",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,log,step,ui) {
function 

function createIssue(parent,issues){
	for (var j=1;j<=issues;j++) {
		if(parent.getValue("JournalMediaCode").getSimpleValue() == "Print"){
			var issueTypeID = "JournalPrintIssues";
		}else{
			var issueTypeID = "JournalDigitalIssues";
		}
		var issue = parent.createProduct('',issueTypeID);
		issue.setName("Issue " + j);
		//issue.getValue("WIL_SortNumber").setSimpleValue(j);
		log.info("Created " + issue.getName());
		//insert additional actions for the ISSUE object here.
	}
}

function createVolume(parent,volumes,startVolumes,issues){
	for (var i=0;i<volumes;i++) {
		if(parent.getValue("JournalMediaCode").getSimpleValue() == "Print"){
			var volumeTypeID = "JournalPrintVolumes";
		}else{
			var volumeTypeID = "JournalDigitalVolumes";
		}
		var newVolNum = ((i*1) + (startVolumes*1));
		var volume = step.getProductHome().getProductByID(parent.getID()+"_"+newVolNum);
		if(!volume){
			var volume = parent.createProduct('',volumeTypeID);
			volume.setName("Volume " + newVolNum);
			//volume.getValue("WIL_SortNumber").setSimpleValue(newVolNum);
			log.info("Created " +volume.getName());
			volume.getValue("IssueVolumeNumber").setSimpleValue(newVolNum);
			//volume.getValue("VolumeGroupVolumesInPubSet").setSimpleValue(numberOfVolumes);
		}
		//insert additional actions for the VOLUME object here.
		if(issues>0){
			createIssue(volume,issues);
		}
	}
}
function createYear(parent,volumes,startVolumes,issues, yearInput){
		if(parent.getValue("JournalMediaCode").getSimpleValue() == "Print"){
			var pubYearTypeID = "JournalPrintPublicationYear";
		}else{
			var pubYearTypeID = "JournalDigitalPublicationYear";
		}
	var year = step.getProductHome().getProductByID(parent.getID()+"_"+yearInput);
		if(!year){
			var year = parent.createProduct('',pubYearTypeID);
			year.setName(yearInput);
			log.info("Created " +year.getName());
			year.getValue("VolumeGroupPubSet").setSimpleValue(startingVol);
		}
		createVolume(year,numberOfVolumes,startingVol,numberOfIssues);
}
var numberOfVolumes = node.getValue("JournalNumberOfVolumes").getSimpleValue();
var numberOfIssues = node.getValue("NumberOfIssues").getSimpleValue();
var startingVol = node.getValue("JournalStartingVolume").getSimpleValue();
var yearInput = node.getValue("JournalPublicationYear").getSimpleValue();



if(node.getName().length()==4){
	createVolume(node,numberOfVolumes,startingVol,numberOfIssues);
} else {
	createYear(node,numberOfVolumes,startingVol,numberOfIssues, yearInput);
}

node.getValue("JournalNumberOfVolumes").setSimpleValue('');
node.getValue("NumberOfIssues").setSimpleValue('');
node.getValue("JournalStartingVolume").setSimpleValue('');
node.getValue("JournalPublicationYear").setSimpleValue('');
//node.getValue("IDLJournalPublicationSet").setSimpleValue('');

var screenID = "PrintJournalNodeDetails";
var headline = "Bulk Volume Creation Completed.";
var severity = "ACKNOWLEDGEMENT";

ui.navigate(screenID,node);
ui.showAlert(severity,headline,'')

}