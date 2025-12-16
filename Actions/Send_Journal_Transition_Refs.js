/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Send_Journal_Transition_Refs",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "Send Journal Transition Refs",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalHistoryProducts", "Journal" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : true,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "LookupTableHomeBindContract",
    "alias" : "lookupTableHome",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
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
    "contract" : "ReferenceTypeBindContract",
    "alias" : "JOURNAL_TO_JOURNAL_TRANSITION",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "JOURNAL_TO_JOURNAL_TRANSITION",
    "description" : null
  }, {
    "contract" : "ReferenceTypeBindContract",
    "alias" : "HISTORY_TO_HISTORY_TRANSITION",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "HISTORY_TO_HISTORY_TRANSITION",
    "description" : null
  }, {
    "contract" : "BusinessActionBindContract",
    "alias" : "Test_Trigger_Rule_Journal_Refs_Send",
    "parameterClass" : "com.stibo.core.domain.impl.businessrule.FrontBusinessActionImpl",
    "value" : "Test_Trigger_Rule_Journal_Refs_Send",
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "webUI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (lookupTableHome,node,manager,JOURNAL_TO_JOURNAL_TRANSITION,HISTORY_TO_HISTORY_TRANSITION,Test_Trigger_Rule_Journal_Refs_Send,webUI) {
var selectedNodes = webUI.getSelection();

for (var i = 0; i < selectedNodes.size(); i++) {
    var Obj = selectedNodes.get(i).getObjectType().getID();
    var nodeID = selectedNodes.get(i).getID();

    if (Obj == "JournalHistoryProducts") {
        var node2 = selectedNodes.get(i);
        Test_Trigger_Rule_Journal_Refs_Send.execute(node2);
    }

    if (Obj == "Journal") {
        var node2 = selectedNodes.get(i);
        Test_Trigger_Rule_Journal_Refs_Send.execute(node2);

    }
}
}