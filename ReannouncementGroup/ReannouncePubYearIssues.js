/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "ReannouncePubYearIssues",
  "type" : "BusinessAction",
  "setupGroups" : [ "ReannouncementGroup" ],
  "name" : "Reannounce Pub Year Issues",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "PublicationYearFunctions",
    "libraryAlias" : "pubLibrary"
  } ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
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
    "contract" : "WebUiContextBind",
    "alias" : "UI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "AttributeValidatedContextParameterStringBinding",
    "alias" : "volumeNumber",
    "parameterClass" : "com.stibo.core.domain.businessrule.attributecontextparameter.AttributeValidatedContextParameter",
    "value" : "<AttributeValidatedContextParameter>\n  <Parameters>\n    <Parameter ID=\"Attribute\" Type=\"java.lang.String\">IssueVolumeNumber</Parameter>\n    <Parameter ID=\"ID\" Type=\"java.lang.String\">volumeNumber</Parameter>\n  </Parameters>\n</AttributeValidatedContextParameter>",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (LOG,NODE,UI,volumeNumber,pubLibrary) {
var reParentFlag = false;
var selection = UI.getSelection().iterator();
while (selection.hasNext()) {
  var NODE = selection.next();
  var currentPubYear = NODE.getParent().getParent();
  var pubname = currentPubYear.getName();
  var headline = "Reannouncement succesfully executed!";
  var severity = "ACKNOWLEDGEMENT";
  var volumeNum = volumeNumber;

  var volumesList = currentPubYear.getChildren().toArray();
  for (var i in volumesList) {
    var volume = volumesList[i];
    if (volume.getValue("IssueVolumeNumber").getSimpleValue() == volumeNum) {
      NODE.setParent(volume);
      reParentFlag = true;
    }
  }

  if (reParentFlag == false) {
    UI.showAlert("ERROR", "Reannouncement not succesfull!", "Entered Volume " + volumeNum + " does not exist In the publication Year " + pubname);
    log.info("not");
    break;
  }

}

if (reParentFlag == true) {
  UI.showAlert("ACKNOWLEDGEMENT", "Succesfull!", "Reannouncement succesfully executed!");

}
}