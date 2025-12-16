/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "OtherProductCollectionSetPricingModel",
  "type" : "BusinessAction",
  "setupGroups" : [ "OtherProductCollectionRules" ],
  "name" : "Other Product Collection Set Pricing Model",
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
  "pluginId" : "JavaScriptBusinessActionWithBinds",
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
exports.operation0 = function (NODE,LOG) {
var collectionType = NODE.getValue("OtherProductCollectionType").getSimpleValue();

		if (collectionType == "Group Pricing Non FTE")  {
                        NODE.getValue("OtherProductCollectionPricingModel").setLOVValueByID("PMNFTE");
        } if (collectionType =="Group Pricing FTE") {
                        NODE.getValue("OtherProductCollectionPricingModel").setLOVValueByID("PMFTE");
                    }

LOG.info(collectionType);
}