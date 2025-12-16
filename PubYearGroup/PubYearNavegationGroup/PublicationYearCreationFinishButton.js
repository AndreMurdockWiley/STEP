/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PublicationYearCreationFinishButton",
  "type" : "BusinessAction",
  "setupGroups" : [ "PubYearNavegationGroup" ],
  "name" : "Publication Year Creation/Finish Button",
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
    "libraryId" : "JournalFunctions",
    "libraryAlias" : "journalLibrary"
  }, {
    "libraryId" : "PublicationYearFunctions",
    "libraryAlias" : "pubLibrary"
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
exports.operation0 = function (UI,NODE,genericFunctions,journalLibrary,pubLibrary) {
var newYear = NODE.getValue("JournalPublicationYear").getSimpleValue();
var journal = NODE.getParent();
var journalMediaCode = NODE.getValue("JournalMediaCode").getSimpleValue()
var severity = "ACKNOWLEDGEMENT";
var headline = "Year succesfully created!";
var body = "Year " + newYear + " has been created.";
var year = pubLibrary.createYear(NODE, newYear);

UI.showAlert(severity,headline,body);

if(NODE.getObjectType().getID() == "JournalPrintMedia"){
	UI.navigate("PrintPublicationYearScreen", year);
}
else if(NODE.getObjectType().getID() == "JournalDigitalMedia"){
	UI.navigate("DigitalPublicationYearScreen", year);
}
}