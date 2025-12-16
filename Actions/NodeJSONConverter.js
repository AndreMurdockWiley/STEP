/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "NodeJSONConverter",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "NodeJSONConverter",
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
    "contract" : "LoggerBindContract",
    "alias" : "log",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "OutboundBusinessProcessorNodeHandlerResultBindContract",
    "alias" : "nodeHandlerResult",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "OutboundBusinessProcessorNodeHandlerSourceBindContract",
    "alias" : "nodeHandlerSource",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "OutboundBusinessProcessorExecutionReportLoggerBindContract",
    "alias" : "executionReportLogger",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (log,nodeHandlerResult,nodeHandlerSource,executionReportLogger) {
var simpleEventType = nodeHandlerSource.getSimpleEventType();
if (simpleEventType == null) {
  log.logInfo("No event information available in node handler");
} else {
  executionReportLogger.logInfo("Event with ID '" + simpleEventType.getID()+ "' passed to node handler");
}
var node = nodeHandlerSource.getNode();

if (node != null && node instanceof com.stibo.core.domain.Product) 
{
  executionReportLogger.logInfo("Node handler handling product with URL: " + node.getURL());
  var mesg = {"first" : "1","second" : "2"};
//  mesg.stepid = node.getID() + "";
//  mesg.ean = node.getName()+ "";
//  node.getValues();
//  if (nodeHandlerSource.isDeleted()) {
//    nodeHandlerResult.addMessage("delete", JSON.stringify(mesg));	
//  } else {
//    mesg.category = node.getParent() == null ? null : node.getParent().getID() + "";
//    mesg.shortDescription = node.getName()+ "";
    //mesg.manufacturerName = node.getValue("ManufacturerName").getSimpleValue()+ "";
    //mesg.color = node.getValue("Color").getSimpleValue()+ "";
    nodeHandlerResult.addMessage("upsert", JSON.stringify(mesg));	
  //}
}
}