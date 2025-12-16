/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "GroupIssue_Message_Joiner",
  "type" : "BusinessAction",
  "setupGroups" : [ "Outbound_Integration_Rules" ],
  "name" : "GroupIssue_Message_Joiner",
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
    "contract" : "OutboundBusinessProcessorJoinerResultBindContract",
    "alias" : "joinerResult",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "OutboundBusinessProcessorJoinerSourceBindContract",
    "alias" : "joinerSource",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (joinerResult,joinerSource) {
function appendFromGroup(messageGroup) {
    var seen = [];
    var first = true;
    while (joinerSource.hasNext(messageGroup)) {
        var messageString = joinerSource.getNextMessage(messageGroup);
        var hash = messageString.hashCode();
        if (seen.indexOf(hash) == -1) {
            seen.push(hash);
            if (first) {
                first = false;
            } else {
                joinerResult.appendToMessage(",");
            }
            joinerResult.appendToMessage(messageString);
        }
    }
}

joinerResult.appendToMessage("{\"classification\":{\"updates\":[");
appendFromGroup("updates");
joinerResult.appendToMessage("],\"deletes\":[");
appendFromGroup("deletes");
joinerResult.appendToMessage("]}}");
}