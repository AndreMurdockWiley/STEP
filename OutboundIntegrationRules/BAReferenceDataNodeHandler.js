/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BAReferenceDataNodeHandler",
  "type" : "BusinessAction",
  "setupGroups" : [ "Outbound_Integration_Rules" ],
  "name" : "Reference Data Node Handler Json Extract",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "JSON_Reference_Entity_Classification_lib",
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
exports.operation0 = function (nodeHandlerSource,nodeHandlerResult,executionReportLogger,stepManager,node,utilityLib) {
var simpleEventType = nodeHandlerSource.getSimpleEventType();
if(simpleEventType == null) {
	executionReportLogger.logInfo("No event information available in node handler");
} else {
	executionReportLogger.logInfo("Event with ID '" + simpleEventType.getID() + "' passed to node handler");
}
var node = nodeHandlerSource.getNode();
if(node != null && node instanceof com.stibo.core.domain.impl.FrontClassificationImpl || node instanceof com.stibo.core.domain.impl.entity.FrontEntityImpl) {
	executionReportLogger.logInfo("Node handler handling product with URL: " + node.getURL());
	var mesg = {};
	if(nodeHandlerSource.isDeleted()) {
		mesg.objectTypeIDisdeleted = nodeHandlerSource.getNode().getObjectType().getID() + '';
		nodeHandlerResult.addMessage("deletes", JSON.stringify(mesg));
	} else {
		mesg.stepID = nodeHandlerSource.getNode().getID() + "";
		mesg.stepName = nodeHandlerSource.getNode().getName() + "";
		mesg.parentID = nodeHandlerSource.getNode().getParent().getID() + '';
		mesg.objectTypeID = nodeHandlerSource.getNode().getObjectType().getID() + '';
		mesg.objectTypeName = nodeHandlerSource.getNode().getObjectType().getName() + '';
		mesg.objectType = nodeHandlerSource.getNode().getObjectType() + '';
		var node = nodeHandlerSource.getNode();
		var values = utilityLib.getAllValuesAsJSON(node);
		mesg.values = values;
		nodeHandlerResult.addMessage("updates", JSON.stringify(mesg));
	}
} else {
	executionReportLogger.logInfo("Node handler handling product with URL: " + node.getURL());
	var mesg = {};
	if(nodeHandlerSource.isDeleted()) {
		nodeHandlerResult.addMessage("deletes", JSON.stringify(mesg));
	} else {
		var mesg = {};
		var mesg2 = {};
		mesg.stepLOVID = nodeHandlerSource.getNode().getID() + "";
		mesg.stepLOVName = nodeHandlerSource.getNode().getName() + "";
		var node = nodeHandlerSource.getNode();
	/*	if(mesg.stepLOVID == "Ownership_LOV") {
		var lovid = "Ownership_LOV";
		var lovvalueids = utilityLib.getLOVValueIDsfromLOV(stepManager, lovid);
		mesg.lovvalueids = String(lovvalueids);
		var lovvals = utilityLib.getLOVValuesfromLOV(stepManager, lovid)
		mesg.lovvals = String(lovvals);
		nodeHandlerResult.addMessage("LovUpdates", JSON.stringify(mesg));
		} 
		if (mesg.stepLOVID == "JRNHOMWRH_LOV") {
		var lovid2 = "JRNHOMWRH_LOV";
		var lovval2 = utilityLib.getLOVValuesfromLOV(stepManager, lovid2)
		mesg.lovval2 = String(lovval2);
		var lovval2id = utilityLib.getLOVValueIDsfromLOV(stepManager, lovid2)
		mesg.lovval2id = String(lovval2id);
		nodeHandlerResult.addMessage("LovUpdates", JSON.stringify(mesg));
		}
		if(mesg.stepLOVID == "Ownership_LOV") {
		var lovid = "Ownership_LOV";
		var lovvalueids = utilityLib.getLOVValueIDsfromLOV(stepManager, lovid);
		mesg.lovvalueids = String(lovvalueids);
		var lovvals = utilityLib.getLOVValuesfromLOV(stepManager, lovid)
		mesg.lovvals = String(lovvals);
		nodeHandlerResult.addMessage("LovUpdates", JSON.stringify(mesg));
		}
		if (mesg.stepLOVID == "PUBSRCCODE_LOV") {
		var lovid3 = "PUBSRCCODE_LOV";
		var lovval3 = utilityLib.getLOVValuesfromLOV(stepManager, lovid3)
		mesg.lovval3 = String(lovval3);
		var lovval3id = utilityLib.getLOVValueIDsfromLOV(stepManager, lovid3)
		mesg.lovval3id = String(lovval3id);
		nodeHandlerResult.addMessage("LovUpdates", JSON.stringify(mesg));
		}*/
		
		if(mesg.stepLOVID == "MatGrp4OneSourcePrdLvl1Code_LOV") {
		var lovid4 = "MatGrp4OneSourcePrdLvl1Code_LOV";
		var lovvalueids4 = utilityLib.getLOVValueIDsfromLOV(stepManager, lovid4);
		mesg.lovvalueids4 = String(lovvalueids4);
		var lovvals4 = utilityLib.getLOVValuesfromLOV(stepManager, lovid4)
		mesg.lovvals4 = String(lovvals4);
		nodeHandlerResult.addMessage("LovUpdates", JSON.stringify(mesg));
		}
	}
//	}
//	}
}
}