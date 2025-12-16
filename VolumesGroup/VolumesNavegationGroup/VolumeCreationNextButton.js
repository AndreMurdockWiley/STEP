/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "VolumeCreationNextButton",
  "type" : "BusinessAction",
  "setupGroups" : [ "VolumesNavegationGroup" ],
  "name" : "Volume Creation/Next Button",
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
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (UI,NODE,genericFunctions,volumeLibrary) {
var copyToOnline = NODE.getValue("CopyToOnline").getSimpleValue();
var journalMedia = NODE.getParent();
var numberOfVolumes = NODE.getValue("JournalNumberOfVolumes").getSimpleValue();
var startingVol = NODE.getValue("JournalMediaNumberOfVolumes").getSimpleValue();
var volume = "";
var severity = "ACKNOWLEDGEMENT";
var headline = "Created " + numberOfVolumes + " volumes.";
var body = "Continuing Process with Issue Creation.";
var screenID = "IssuesCreationMainScreen";

for (var i = 0; i < numberOfVolumes; i++){
	volume = volumeLibrary.createVolume(NODE, startingVol);
	startingVol = journalMedia.getValue("JournalStartingVolume").getSimpleValue();

	//Populatingplaceholder IDL attributes for issue creation
	volume.getValue("CreateIssueTypeIDL").setSimpleValue("Standard Issue");

	if (copyToOnline == "Yes"){
		volumeLibrary.volumeCopyToOnline(volume);
	}
}

//Clean placeholder attributes for next volume creation
genericFunctions.wipePublishingAttributes(journalMedia);

UI.showAlert(severity,headline, body);
UI.navigate(screenID, NODE);

}