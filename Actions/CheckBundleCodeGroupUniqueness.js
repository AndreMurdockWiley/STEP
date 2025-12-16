/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CheckBundleCodeGroupUniqueness",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "Check Bundle Code Group Uniqueness",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : true,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "log",
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
exports.operation0 = function (node,log,manager,UI) {
function getDataContainerObjects(node,containerID){
                var dcWrapper = node.getDataContainerByTypeID(containerID);
                var dcs = null;
                if (dcWrapper instanceof com.stibo.core.domain.datacontainer.SingleDataContainer) {
                                dcs = new java.util.HashSet();
                                if (dcWrapper.getDataContainerObject()) {
                                                dcs.add(dcWrapper);
                                }
                } else {
                                dcs = dcWrapper.getDataContainers();
                }
                return dcs;
}
var dataContainers = getDataContainerObjects(node,"BundleGroup_BundleCode_DataContainer");
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
	log.info(keyArray);
}
if(uniqueKeyInd){
	//return true;
} else{
	UI.showAlert("ERROR", "Value Pair of Bundle Code, Bundle Group, and Subscription Type is duplicated, please fix.");
}

}