/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "IssueTemplateLogicPrint",
  "type" : "BusinessAction",
  "setupGroups" : [ "IssuesGroup" ],
  "name" : "Issue Template Logic Print",
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
    "contract" : "ManagerBindContract",
    "alias" : "manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (log,manager,node) {
node.getValue("Cross-PlantMaterialStatus").setSimpleValue('P');
node.getValue("DistributionChannel").setSimpleValue('00');
node.getValue("ForecastModel").setSimpleValue('J');
node.getValue("IndustrySector").setSimpleValue('N');
node.getValue("SchedulingMarginKeyforFloats").setSimpleValue('000');
node.getValue("TransportationGroup").setSimpleValue('0001');

}