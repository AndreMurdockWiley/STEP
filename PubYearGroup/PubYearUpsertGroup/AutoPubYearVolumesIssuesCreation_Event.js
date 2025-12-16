/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "AutoPubYearVolumesIssuesCreation_Event",
  "type" : "BusinessAction",
  "setupGroups" : [ "PubYearUpsertGroup" ],
  "name" : "Automatic Pub Year/Volumes/Issues Creation (EventProcessor)",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "JournalDigitalMedia" ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "PublicationYearFunctions",
    "libraryAlias" : "pubLibrary"
  }, {
    "libraryId" : "IssueFunctions",
    "libraryAlias" : "issueLibrary"
  }, {
    "libraryId" : "VolumeFunctions",
    "libraryAlias" : "volumeLibrary"
  } ]
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
    "contract" : "ManagerBindContract",
    "alias" : "step",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,step,pubLibrary,issueLibrary,volumeLibrary) {
var journalMedia = "";
var journalMediaStatusAtrID = "ProductStatus";
var productStatus = "";
var journalFinanceProductType = "";
var currentYear = "";
var currentVolume = "";
var currentIssue = "";
var newYear = "";
var newVolume = "";
var startingVolume = "";
var startingIssue = "";
var issueType = "";
var issueStatus = "";
var issueNumber = "";
var volumeNumber = "";
var pubSequence = "";
var continuousNumbering = node.getValue("Copy_Continuous_Number").getSimpleValue();
var volumeInterval = node.getValue("Copy_Volume_Interval_offset").getSimpleValue();
var multiVolumeJournals = node.getValue("MultiVolumeJournals").getSimpleValue();
var volumeCountMedia = node.getValue("MediaVolumeCount").getSimpleValue();
//var volumeCountMedia = 2;
var parentJournal = node.getParent();
var manualAGA = node.getValue("ManualAGA").getSimpleValue();
if(volumeInterval == null || volumeInterval == ""){
	volumeInterval = 0;
}
log.info("********* START AutomaticPubYearVolumesIssuesCreation *********");


	
journalMedia = node;

log.info("-------Execution BR on node :---------"+journalMedia.getID());

productStatus = journalMedia.getValue(journalMediaStatusAtrID).getSimpleValue();

if(productStatus == "Not Yet Published" || productStatus == "Current publication"){
	journalFinanceProductType = journalMedia.getValue("JournalFinanceProductType").getSimpleValue();
	
	if (journalFinanceProductType == "Rolling" || journalFinanceProductType == "Calendar"){
		currentYear = pubLibrary.getLastPublicationYear(journalMedia);			
		startingVolume = journalMedia.getValue("JournalStartingVolume").getSimpleValue();
		
		if (continuousNumbering == "Yes"){
			startingIssue = journalMedia.getValue("StartingIssueNumber").getSimpleValue();
		} else {
			startingIssue = "1";
			
		}
		newYear = pubLibrary.createYear(journalMedia, journalMedia.getValue("JournalPublicationYear").getSimpleValue());
		
		if(currentYear != null){
			var volumeSize = currentYear.getChildren().size();
			log.info("volumeSize: " + volumeSize);
			log.info("volumeCountMedia: " + volumeCountMedia);
			if(volumeSize>1 && multiVolumeJournals == "Yes" && volumeSize == volumeCountMedia ){
				for (var j = 0; j < currentYear.getChildren().size(); j++){
					currentVolume = currentYear.getChildren().get(j);
					volumeNumber = startingVolume;
					log.info("volnum1: " + volumeNumber);
					if( /*volumeSize == 1 &&*/ volumeInterval > 0){
						volumeNumber = (volumeNumber - 1) + parseInt(volumeInterval);
						log.info("volnum1: " + volumeNumber);
					}
					newVolume = volumeLibrary.createVolume(newYear, volumeNumber);
					startingVolume = parseInt(startingVolume) + 1;
					
					if (continuousNumbering == "No"){					
						startingIssue = "1";					
					}
				if (volumeSize != 1 && continuousNumbering == "No"){					
						startingIssue = "1";					
					}
					
					
					for (var x = 0; x < currentVolume.getChildren().size(); x++){
						currentIssue = currentVolume.getChildren().get(x);
						issueType = currentIssue.getValue("IssueType").getSimpleValue();
						issueStatus = currentIssue.getValue("IssueStatus").getSimpleValue();

						if (issueStatus == "Merged"){
							issueStatus = "Not Yet Published";
						}
					
						if (issueType == "Standard Issue"){
							if (issueStatus == "Current publication" || issueStatus == "Not Yet Published"){
								issueNumber = startingIssue;
								pubSequence = journalMedia.getValue("StartingPubSequenceMedia").getSimpleValue();
								issueLibrary.createIssue(newVolume, issueNumber, issueType, pubSequence,manualAGA);
								startingIssue = parseInt(startingIssue) + 1;
							}
						}
					}
				}
		}
		
				else if(volumeCountMedia>volumeSize){
					for(k=0;k<volumeCountMedia;k++){
				//for (var j = 0; j < currentYear.getChildren().size(); j++){
					currentVolume = currentYear.getChildren().get(0);
					volumeNumber = startingVolume;
					log.info("volnum2: " + volumeNumber);
					if( /*volumeSize == 1 &&*/ volumeInterval > 0){
						volumeNumber = (volumeNumber - 1) + parseInt(volumeInterval);
						log.info("volnum2: " + volumeNumber);
					}
					newVolume = volumeLibrary.createVolume(newYear, volumeNumber);
					startingVolume = parseInt(startingVolume) + 1;
					
					if (continuousNumbering == "No"){					
						startingIssue = "1";					
					}
				if (volumeSize != 1 && continuousNumbering == "No"){					
						startingIssue = "1";					
					}
					
					
					for (var x = 0; x < currentVolume.getChildren().size(); x++){
						currentIssue = currentVolume.getChildren().get(x);
						issueType = currentIssue.getValue("IssueType").getSimpleValue();
						issueStatus = currentIssue.getValue("IssueStatus").getSimpleValue();

						if (issueStatus == "Merged"){
							issueStatus = "Not Yet Published";
						}
					
						if (issueType == "Standard Issue"){
							if (issueStatus == "Current publication" || issueStatus == "Not Yet Published"){
								issueNumber = startingIssue;
								pubSequence = journalMedia.getValue("StartingPubSequenceMedia").getSimpleValue();
								issueLibrary.createIssue(newVolume, issueNumber, issueType, pubSequence,manualAGA);
								startingIssue = parseInt(startingIssue) + 1;
							}
						}
					}
				//}
				}}
				
				else if(volumeCountMedia<volumeSize){
					for(k=0;k<volumeCountMedia;k++){
				//for (var j = 0; j < currentYear.getChildren().size(); j++){
					currentVolume = currentYear.getChildren().get(0);
					volumeNumber = startingVolume;
					log.info("volnum2: " + volumeNumber);
					if( /*volumeSize == 1 &&*/ volumeInterval > 0){
						volumeNumber = (volumeNumber - 1) + parseInt(volumeInterval);
						log.info("volnum2: " + volumeNumber);
					}
					newVolume = volumeLibrary.createVolume(newYear, volumeNumber);
					startingVolume = parseInt(startingVolume) + 1;
					
					if (continuousNumbering == "No"){					
						startingIssue = "1";					
					}
				if (volumeSize != 1 && continuousNumbering == "No"){					
						startingIssue = "1";					
					}
					
					
					for (var x = 0; x < currentVolume.getChildren().size(); x++){
						currentIssue = currentVolume.getChildren().get(x);
						issueType = currentIssue.getValue("IssueType").getSimpleValue();
						issueStatus = currentIssue.getValue("IssueStatus").getSimpleValue();

						if (issueStatus == "Merged"){
							issueStatus = "Not Yet Published";
						}
					
						if (issueType == "Standard Issue"){
							if (issueStatus == "Current publication" || issueStatus == "Not Yet Published"){
								issueNumber = startingIssue;
								pubSequence = journalMedia.getValue("StartingPubSequenceMedia").getSimpleValue();
								issueLibrary.createIssue(newVolume, issueNumber, issueType, pubSequence,manualAGA);
								startingIssue = parseInt(startingIssue) + 1;
							}
						}
					}
				//}
				}}
		
		else{
			currentVolume = currentYear.getChildren().get(0);
					volumeNumber = startingVolume;
					log.info("volnum: " + volumeNumber);
					if( /*volumeSize == 1 &&*/ volumeInterval > 0){
						volumeNumber = (volumeNumber - 1) + parseInt(volumeInterval);
						log.info("volnum: " + volumeNumber);
					}
					newVolume = volumeLibrary.createVolume(newYear, volumeNumber);
					startingVolume = parseInt(startingVolume) + 1;
					
					if (continuousNumbering == "No"){					
						startingIssue = "1";					
					}
				if (volumeSize != 1 && continuousNumbering == "No"){					
						startingIssue = "1";					
					}
					
					
					for (var x = 0; x < currentVolume.getChildren().size(); x++){
						currentIssue = currentVolume.getChildren().get(x);
						issueType = currentIssue.getValue("IssueType").getSimpleValue();
						issueStatus = currentIssue.getValue("IssueStatus").getSimpleValue();

						if (issueStatus == "Merged"){
							issueStatus = "Not Yet Published";
						}
					
						if (issueType == "Standard Issue"){
							if (issueStatus == "Current publication" || issueStatus == "Not Yet Published"){
								issueNumber = startingIssue;
								pubSequence = journalMedia.getValue("StartingPubSequenceMedia").getSimpleValue();
								issueLibrary.createIssue(newVolume, issueNumber, issueType, pubSequence,manualAGA);
								startingIssue = parseInt(startingIssue) + 1;
							}
						}
					}
		}	
		
		
	}}
}
node.getValue("Copy_Continuous_Number").setSimpleValue(null);
node.getValue("Copy_Volume_Interval_offset").setSimpleValue(null);
}