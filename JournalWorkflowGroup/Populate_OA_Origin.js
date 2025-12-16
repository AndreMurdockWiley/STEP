/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Populate_OA_Origin",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalWorkflowGroup" ],
  "name" : "Populate_OA_Origin",
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
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,log) {
var RevModel = node.getValue("ProductRevenueModel").getSimpleValue();
var EEO = node.getValue("JournalEEOContentFlipDate").getSimpleValue();

if ((RevModel == 'OA') && (EEO != null)){
	node.getValue("JournalOAOrigin").setSimpleValue("Flipped");
	//log.info("JournalOAOrigin" + JournalOAOrigin);
}

if((RevModel == 'OA') && (EEO == null)){
	node.getValue("JournalOAOrigin").setSimpleValue("Born Gold");
	//log.info("JournalOAOrigin" + JournalOAOrigin);
}
if(RevModel != 'OA'){
	node.getValue("JournalOAOrigin").setSimpleValue(null);
	//log.info("JournalOAOrigin" + JournalOAOrigin);
}
}