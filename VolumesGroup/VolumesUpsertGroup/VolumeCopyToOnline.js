/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "VolumeCopyToOnline",
  "type" : "BusinessAction",
  "setupGroups" : [ "VolumesUpsertGroup" ],
  "name" : "Volume Copy To Online",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
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
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (UI,pubLibrary,issueLibrary,volumeLibrary) {
var uiSelection = UI.getSelection();
var printVolume = "";
var printPubYear = "";
var printIssue = "";

for(var i=0; i < uiSelection.size(); i++) {
	printVolume = uiSelection.get(i);
	printPubYear = printVolume.getParent();
	
	pubLibrary.yearCopyToOnline(printPubYear);
	volumeLibrary.volumeCopyToOnline(printVolume);
	
	for(var j=0; j < printVolume.getChildren().size(); j++) {
		printIssue = printVolume.getChildren().get(j);
		
		issueLibrary.issueCopyToOnline(printIssue);
	}
}

UI.showAlert("INFO", "Volume(s) succesfully copied to the Online Journal.", "");
}