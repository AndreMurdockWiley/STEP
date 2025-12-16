/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PubYearForCopyToOnlineCreationNextButton",
  "type" : "BusinessAction",
  "setupGroups" : [ "PubYearNavegationGroup" ],
  "name" : "Pub Year For Copy To Online Creation/Next Button",
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
  }, {
    "contract" : "AttributeValidatedContextParameterStringBinding",
    "alias" : "copyToOnline",
    "parameterClass" : "com.stibo.core.domain.businessrule.attributecontextparameter.AttributeValidatedContextParameter",
    "value" : "<AttributeValidatedContextParameter>\n  <Parameters>\n    <Parameter ID=\"Attribute\" Type=\"java.lang.String\">CopyToOnline</Parameter>\n    <Parameter ID=\"ID\" Type=\"java.lang.String\">Copy to Online</Parameter>\n  </Parameters>\n</AttributeValidatedContextParameter>",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (UI,NODE,copyToOnline,genericFunctions,journalLibrary,pubLibrary) {
var newYear = NODE.getValue("JournalPublicationYear").getSimpleValue();
var journal = NODE.getParent();
var journalMediaCode = NODE.getValue("JournalMediaCode").getSimpleValue()
var severity = "ACKNOWLEDGEMENT";
var headline = "Year " + newYear + " has been created.";
var body = "Continuing Process with Volume Creation.";
var screenID = "VolumesCreationScreen";
var year = pubLibrary.createYear(NODE, newYear);

year.getValue("CopyToOnline").setLOVValueByID(copyToOnline);

if (copyToOnline == "Y" && (journalMediaCode == "Print" && journalLibrary.journalCopyToOnlineValidity(journal) == true)){
	pubLibrary.yearCopyToOnline(year);
}

UI.showAlert(severity,headline,body);
UI.navigate(screenID, year);
}