/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CheckBundleCodeBundleGroup",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Check Bundle Code Bundle Group",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "GenericFunctions",
    "libraryAlias" : "genericFunctions"
  } ]
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
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
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
exports.operation0 = function (NODE,LOG,UI,genericFunctions) {
var dataContainers = genericFunctions.getDataContainerObjects(NODE,"BundleGroup_BundleCode_DataContainer");
var keyArray = [];
var uniqueKeyInd = true;
var iter = dataContainers.iterator();
while (iter.hasNext()) {
	var dc = iter.next().getDataContainerObject();
	var key = dc.getValue("ProductBundleCode").getSimpleValue() + dc.getValue("ProductBundleGroup").getSimpleValue() + dc.getValue("ProductBundleSubscriptionType").getSimpleValue();
	if(!(keyArray.indexOf(key) == -1)){
		uniqueKeyInd = false;
		}
	keyArray.push(key);
	//LOG.info(keyArray);
}
if(uniqueKeyInd){
	return true;
} else{
	UI.showAlert("ERROR", "Value Pair of Bundle Code, Bundle Group, and Subscription Type is duplicated, please fix.");
}

}