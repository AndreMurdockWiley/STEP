/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CheckBundleCode",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Check Bundle Code",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
  "allObjectTypesValid" : true,
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
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,LOG,genericFunctions) {
var dataContainers = genericFunctions.getDataContainerObjects(NODE,"BundleGroup_BundleCode_DataContainer");
var keyArray = [];
var uniqueKeyInd = "";
var iter = dataContainers.iterator();
//var valueflag = true;
while (iter.hasNext()) {
	var dc = iter.next().getDataContainerObject();
	var key = dc.getValue("ProductBundleCode").getSimpleValue();
	var group = dc.getValue("ProductBundleGroupID").getSimpleValue();
	if (key !="" && group != "") {
		uniqueKeyInd = true;
	}
	
	/*Comment off
	//LOG.info("Key " + key);
	if(!(keyArray.indexOf(key) > 0))
		uniqueKeyInd = true;
		LOG.info("Key " + key);
		}
	//keyArray.push(key);
	//LOG.info(keyArray);*/
}
if(uniqueKeyInd == true){
	return true;
} else{
	return false;
}

}