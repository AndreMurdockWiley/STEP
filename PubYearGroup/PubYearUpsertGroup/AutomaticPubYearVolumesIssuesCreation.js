/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "AutomaticPubYearVolumesIssuesCreation",
  "type" : "BusinessAction",
  "setupGroups" : [ "PubYearUpsertGroup" ],
  "name" : "Automatic Pub Year/Volumes/Issues Creation",
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
    "contract" : "WebUiContextBind",
    "alias" : "UI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "eventQueuePRODAT",
    "parameterClass" : "com.stibo.core.domain.impl.eventprocessor.EventProcessorImpl",
    "value" : "step://eventprocessor?id=AutoPubYearVolumesIssuesCreation_Event",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (UI,eventQueuePRODAT,pubLibrary,issueLibrary,volumeLibrary) {
var uiSelection = UI.getSelection();


log.info("********* START AutomaticPubYearVolumesIssuesCreation *********");
for (var i = 0; i < uiSelection.size(); i++){

	
	journalMedia = uiSelection.get(i);
	var continuousNumbering = journalMedia.getValue("JournalContinuousNumbering").getSimpleValue();
	var JournalVolumeIntervalOffset = journalMedia.getValue("JournalVolumeIntervalOffset").getSimpleValue();
	var MergedIssue = journalMedia.getValue("JournalMergedIssues").getSimpleValue();
	if(continuousNumbering=="" || continuousNumbering==null)
	{
		journalMedia.getValue("JournalContinuousNumbering").setSimpleValue("No");
	}
	else
	{
		log.info("*********Continuous Numbering is not empty *********");
	}
	if(MergedIssue=="" || MergedIssue==null)
	{
		journalMedia.getValue("JournalMergedIssues").setSimpleValue("No");
	}
	else
	{
		log.info("*********Print or Digital Issue disparity is not empty *********");
	}
	
	var continuousNumbering1 = journalMedia.getValue("JournalContinuousNumbering").getSimpleValue();
	var MergedIssue1 = journalMedia.getValue("JournalMergedIssues").getSimpleValue();
	
	if(MergedIssue1 == "No"){

	journalMedia.getValue("Copy_Continuous_Number").setSimpleValue(continuousNumbering1);
	journalMedia.getValue("Copy_Volume_Interval_offset").setSimpleValue(JournalVolumeIntervalOffset);
	
	eventQueuePRODAT.republish(journalMedia);
	}
	else {
		throw "As this journal has merged issues in the latest publication year, so Auto Creation is not possible. Kindly act on it manually."
	}
}

log.info("*********END BR AutomaticPubYearVolumesIssuesCreation *********");
UI.showAlert("INFO", "Automatic Creation has been completed Successfully for selected products!", "");
}