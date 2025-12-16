/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CollectionUpgradeProcessState",
  "type" : "BusinessAction",
  "setupGroups" : [ "CollectionUpsertGroup" ],
  "name" : "Collection Upgrade Process State",
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
  "pluginId" : "RepublishEventQueueOperation",
  "parameters" : [ {
    "id" : "HasEventQueue",
    "type" : "com.stibo.core.domain.haseventqueue.HasEventQueue",
    "value" : "step://eventprocessor?id=CollectionUpgradeProcess"
  } ],
  "pluginType" : "Operation"
}
*/

/*===== business rule plugin definition =====
{
  "pluginId" : "BulkUpdateTriggerStateFlowEvent",
  "parameters" : [ {
    "id" : "currentStateID",
    "type" : "java.lang.String",
    "value" : "State-7"
  }, {
    "id" : "eventID",
    "type" : "java.lang.String",
    "value" : "MoveToEnd"
  }, {
    "id" : "processNote",
    "type" : "java.lang.String",
    "value" : ""
  }, {
    "id" : "stateFlowID",
    "type" : "java.lang.String",
    "value" : "CollectionCreationWF"
  } ],
  "pluginType" : "Operation"
}
*/
