/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "VolumeCreationFinishButton",
  "type" : "BusinessAction",
  "setupGroups" : [ "VolumesNavegationGroup" ],
  "name" : "Volume Creation/Finish Button",
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
var headline = "Volumes succesfully created!";
var body = "Created " + numberOfVolumes + " volumes.";

for (var i = 0; i < numberOfVolumes; i++){
	volume = volumeLibrary.createVolume(NODE, startingVol);
	startingVol = journalMedia.getValue("JournalStartingVolume").getSimpleValue();
	
	if (copyToOnline == "Yes"){
		volumeLibrary.volumeCopyToOnline(volume);
	}
}

//Clean placeholder attributes for creations
genericFunctions.wipePublishingAttributes(journalMedia);

UI.showAlert(severity,headline, body);

if(NODE.getObjectType().getID() == "JournalPrintPublicationYear"){
	UI.navigate("PrintPublicationYearScreen", NODE);
}
else if(NODE.getObjectType().getID() == "JournalDigitalPublicationYear"){
	UI.navigate("DigitalPublicationYearScreen", NODE);
}
}