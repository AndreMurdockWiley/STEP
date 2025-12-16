/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "I040X_Node_Handler_Backfile",
  "type" : "BusinessAction",
  "setupGroups" : [ "Outbound_Integration_Rules" ],
  "name" : "I040X Node Handler Backfile",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "Integrations_Utility_Library",
    "libraryAlias" : "utilityLib"
  } ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "OutboundBusinessProcessorNodeHandlerSourceBindContract",
    "alias" : "nodeHandlerSource",
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
    "contract" : "OutboundBusinessProcessorExecutionReportLoggerBindContract",
    "alias" : "executionReportLogger",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "stepManager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (nodeHandlerSource,nodeHandlerResult,executionReportLogger,stepManager,utilityLib) {

var simpleEventType = nodeHandlerSource.getSimpleEventType();
var referenceTypesToInclude = []; //comma separated strings
//var classificationRefTypes = ["ProductToCostCenterReferenceLink"];
var classificationRefTypes = [];

if (simpleEventType == null) {
  executionReportLogger.logInfo("No event information available in node handler");
} else {
  executionReportLogger.logInfo("Event with ID '" + simpleEventType.getID()+ "' passed to node handler");
}
var node = nodeHandlerSource.getNode();
if (node != null && node instanceof com.stibo.core.domain.Product) {
  executionReportLogger.logInfo("Node handler handling product with URL: " + node.getURL());
  var mesg = {};
  mesg.stepid = node.getID() + "";
  if (nodeHandlerSource.isDeleted()) {
    nodeHandlerResult.addMessage("deletes", JSON.stringify(mesg));	
  } else {
  	// Get basic node details
  	var mesg = utilityLib.initialNodeJSON(node);	

  	// Add local attributes to JSON String
  	//var values = utilityLib.getAllValuesAsJSON(node,stepManager);  	  
	//mesg.values = values;

	//Get Child Objects for the Parent node
	//mesg.children = utilityLib.getChildObjects(node);
	// Add local attributes to JSON String
  	var values1 =utilityLib.getAllValuesAsJSON(node,stepManager)
	var values2 =utilityLib.getReferencedByToValuesAsJSON(node, "Journal_to_Backfile_Reference", true, null, stepManager);
	var values={};
	for(var key in values1){
		values[key] = values1[key];
	}	
	
	for(var key in values2){
		if(key != "ProductSAPMaterialNumber"){
			values[key] = values2[key];
		}
		
	}
	
	mesg.values = values;
	 executionReportLogger.logInfo("Node handler handling product with URL: " + values2);
	
	// Add node references to the JSON String
	mesg.references=utilityLib.getReferencesAsJSON(node, "ProductToExternalDataPartnersRefLink", true, null, stepManager);
	mesg.referencedby=utilityLib.getReferencedByToValuesAsJSONHistory(node, "Journal_to_Backfile_Reference", true, null, stepManager);
	
	//Add Alternate Hierarhy reference info to the JSON String
	mesg.classificationRef=utilityLib.getClassificationRefAsJSON(node, classificationRefTypes, true);

	mesg.containers=utilityLib.getDataContainers(node);
	

	nodeHandlerResult.addMessage("updates", JSON.stringify(mesg));
  }
}

}