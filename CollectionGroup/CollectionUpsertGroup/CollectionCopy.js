/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CollectionCopy",
  "type" : "BusinessAction",
  "setupGroups" : [ "CollectionUpsertGroup" ],
  "name" : "Collection Copy",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "CollectionFunctions",
    "libraryAlias" : "collectionLibrary"
  } ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
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
    "alias" : "collectionYear",
    "parameterClass" : "com.stibo.core.domain.businessrule.attributecontextparameter.AttributeValidatedContextParameter",
    "value" : "<AttributeValidatedContextParameter>\n  <Parameters>\n    <Parameter ID=\"Attribute\" Type=\"java.lang.String\">CollectionYear</Parameter>\n    <Parameter ID=\"ID\" Type=\"java.lang.String\">Collection Year</Parameter>\n  </Parameters>\n</AttributeValidatedContextParameter>",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,UI,collectionYear,collectionLibrary) {
var copiedCollection = collectionLibrary.copyCollection(NODE, collectionYear);
var severity = "ACKNOWLEDGEMENT";
var headline = "Collection succesfully copied!";

UI.showAlert(severity, headline, "");

UI.navigate("CollectionNodeDetailsScreen", copiedCollection);
}
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessConditionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ListOfValuesBindContract",
    "alias" : "IssueType_LOV",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "IssueType_LOV",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Precondition"
}
*/
exports.precondition0 = function (node,manager,IssueType_LOV,collectionLibrary) {
var issueType = node.getValue("IssueType").getSimpleValue();
var issueSapMaterialNum = node.getValue("IssueSAPMaterialNumber").getSimpleValue();
var journalNumberOfVolumes = node.getValue("IssueVolumeNumber").getSimpleValue();
var journalNumberOfVolumesPadded = pad(journalNumberOfVolumes, 4);
var numberOfIssuesPadded = "";
var journalMediaCode = node.getValue("JournalMediaCode").getSimpleValue();
var SAPMat = '';
var maxIssueNumber = "1";
var issueNumber = "";

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

if (journalMediaCode == "Print"){
	journalMediaCode = "P";
} else {
	journalMediaCode = "D";
}


if (issueType == IssueType_LOV.getListOfValuesValueByID("ST").getValue()){
	numberOfIssuesPadded = pad(maxIssueNumber, 7);

	 SAPMat = issueSapMaterialNum.substring(0,4) + journalNumberOfVolumesPadded + numberOfIssuesPadded + journalMediaCode;
} else if (issueType == IssueType_LOV.getListOfValuesValueByID("SU").getValue()){
	numberOfIssuesPadded = pad(maxIssueNumber, 6);

	 SAPMat = issueSapMaterialNum.substring(0,4) + journalNumberOfVolumesPadded + "S" + numberOfIssuesPadded + journalMediaCode;
}
	
var checkSAPMat = manager.getNodeHome().getObjectByKey("IssueSAPMaterialIdKey",SAPMat);
if(checkSAPMat == null){
	return true;
}
return "An issue already exists with this Volume and issue number";
}