/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BackfileGenerateAttributesButtonValidity",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Backfile Generate Attributes Button Validity",
  "description" : null,
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
  "pluginId" : "JavaScriptBusinessConditionWithBinds",
  "binds" : [ {
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
exports.operation0 = function (NODE) {
var productSAPMaterialNumber = NODE.getValue("ProductSAPMaterialNumber").getSimpleValue();
var journalGroupCode = NODE.getValue("JournalGroupCode").getSimpleValue();

if ((productSAPMaterialNumber == "" || productSAPMaterialNumber == null) && (journalGroupCode == "" || journalGroupCode == null)){
	return true;
} else {
	return false;
}

}