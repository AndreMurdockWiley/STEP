/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "GroupIssue_Node_Handler",
  "type" : "BusinessAction",
  "setupGroups" : [ "Outbound_Integration_Rules" ],
  "name" : "GroupIssue Node Handler",
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
exports.operation0 = function (nodeHandlerSource,nodeHandlerResult,executionReportLogger,stepManager) {
var simpleEventType = nodeHandlerSource.getSimpleEventType();

if (simpleEventType == null) {
    executionReportLogger.logInfo("No event information available in node handler");
}
else {
    executionReportLogger.logInfo("Event with ID '" + simpleEventType.getID() + "' passed to node handler");
}

var node = nodeHandlerSource.getNode();

if (node != null && node instanceof com.stibo.core.domain.Classification) {
    executionReportLogger.logInfo("Node handler handling product with URL: " + node.getURL());

    var mesg = {};
    mesg.stepid = node.getID() + "";

    if (nodeHandlerSource.isDeleted()) {
        nodeHandlerResult.addMessage("deletes", JSON.stringify(mesg));
    }
    else {
        // Get basic node details
        var mesg = initialNodeJSON(node);

        // Add local attributes to JSON String
        var values = getAllValuesAsJSON(node, stepManager);
        mesg.values = values;

        nodeHandlerResult.addMessage("updates", JSON.stringify(mesg));
    }
}

function initialNodeJSON(inputNode) {
    var json = {};
    json.stepID = inputNode.getID() + "";
//    json.stepName = inputNode.getName() + "";
//    json.parentID = inputNode.getParent().getID() + '';
//    json.objectTypeID = inputNode.getObjectType().getID() + '';
//    json.objectTypeName = inputNode.getObjectType().getName() + '';
    return json;
}

function getAllValuesAsJSON(inputNode, manager) {
    var values = {};
    var validAttributeArray = getValidAttributes(inputNode, manager);
    // log.info("Valid attr length"+validAttributeArray.length);
    validAttributeArray.sort();
    validAttributeArray.forEach(function (attr) {
        values[attr] = getAttributeValue(inputNode, attr);
    });
    return values;
}

function getAttributeValue(node, attributeID) {
    var valueObject = node.getValue(attributeID);

    if (valueObject.getAttribute().isMultiValued()) {
        var array = [];
        for (var value in Iterator(valueObject.getValues())) {
            array.push(value.getSimpleValue() + "");
        }
        return array;
    }

    if (valueObject.getAttribute().hasLOV() && valueObject.getSimpleValue() != null) {
        var singleValLovArray = [];
        if (valueObject.getAttribute().getListOfValues().isUsingValueIDs()) {
            lovValues = {};
            var valuesID = valueObject.getID() + '';
            var valuesName = valueObject.getSimpleValue() + '';
            lovValues.id = valuesID;
            lovValues.name = valuesName;
            singleValLovArray.push(lovValues);
            return lovValues;
        }
    }

    var attributeValue = valueObject.getSimpleValue();

    return attributeValue ? attributeValue + "" : "";
}

function getValidAttributes(inputNode, manager) {
    var attributeIDs = [];

    var myAttGroup = manager.getAttributeGroupHome().getAttributeGroupByID("AG_Group_Issue_OIEP_Attributes").getAttributes().toArray();

    for (var i = 0; i < myAttGroup.length; i++) {
        if (isAttributeValidForNode(inputNode, myAttGroup[i].getID(), manager)) {
            attributeIDs.push(myAttGroup[i].getID());
        }
    }
    return attributeIDs;
}

function isAttributeValidForNode(sourceObject, attributeID, manager) {
    sourceObject = sourceObject.getObjectType();
    var attributeObject = manager.getAttributeHome().getAttributeByID(attributeID);

    if (attributeObject) {
        var validObjectTypes = attributeObject.getValidForObjectTypes();

        if (validObjectTypes.contains(sourceObject)) {
            return true;
        }
    }
    return false;
}
}