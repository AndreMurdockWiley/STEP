/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "RebillingTabPopulation",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Rebilling Tab Population",
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
var subType = NODE.getParent().getValue("ProductRenewalSubscriptionType").getSimpleValue();
var productActivated = NODE.getValue("ProductActivated").getSimpleValue();

if(subType == "Open Access" && productActivated == "Activated"){
	UI.showAlert("ACKNOWLEDGMENT", "Subscription Type is changed to OA. Review Rebilling Tab.");
	return true;
}

}