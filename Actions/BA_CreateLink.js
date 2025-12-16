/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_CreateLink",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "BA_CreateLink",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalHistoryProducts", "Journal" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
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
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (lookupTableHome,node,manager,JOURNAL_TO_JOURNAL_TRANSITION,HISTORY_TO_HISTORY_TRANSITION) {
var Obj = node.getObjectType().getID();
if (Obj == "JournalHistoryProducts") {
    var transType = manager.getReferenceTypeHome().getReferenceTypeByID("HISTORY_TO_HISTORY_TRANSITION");
    var myTran = node.getReferences(transType).toArray();
    var sourceNodeID = node.getID();
    log.info("sourceNodeID---> "+sourceNodeID);
    for (var j = 0; j < myTran.length; j++) {
        log.info("1 -------- " + myTran[j]);
        var transitionTypeValue = myTran[j].getValue("HistoryTransitionType").getSimpleValue();
        var transitionYear = myTran[j].getValue("HistoryTransitionYear").getSimpleValue();
        log.info("HistoryTransitionType =" + transitionTypeValue);
        var transitionTypeValueToBeSet = lookupTableHome.getLookupTableValue("TransitionTypeTable", transitionTypeValue);
        log.info("transitionTypeValueToBeSet =" + transitionTypeValueToBeSet);

        var node2 = myTran[j].getTarget();
        try {
            var node2ref = node2.createReference(node, HISTORY_TO_HISTORY_TRANSITION.getID());
            node2ref.getValue("HistoryTransitionType").setSimpleValue(transitionTypeValueToBeSet);
            node2ref.getValue("HistoryTransitionYear").setSimpleValue(transitionYear);
            log.info("2 -------- " + node2ref);
        } catch (e) {
            var myTran2 = node2.getReferences(transType).toArray();
            log.info("Length "+myTran2.length);
            for (var k = 0; k < myTran2.length; k++) {
            	if(sourceNodeID == myTran2[k].getTarget().getID()){
            		myTran2[k].getValue("HistoryTransitionType").setSimpleValue(transitionTypeValueToBeSet);
            		myTran2[k].getValue("HistoryTransitionYear").setSimpleValue(transitionYear);
            	}
            }

        }
    }
}
if (Obj == "Journal") {
    var transType = manager.getReferenceTypeHome().getReferenceTypeByID("JOURNAL_TO_JOURNAL_TRANSITION");
    var myTran = node.getReferences(transType).toArray();
    var sourceNodeID = node.getID();
    log.info("sourceNodeID---> "+sourceNodeID);
    for (var j = 0; j < myTran.length; j++) {
        log.info("1 -------- " + myTran[j]);
        var transitionTypeValue = myTran[j].getValue("JournalTransitionType").getSimpleValue();
        var transitionYear = myTran[j].getValue("JournalTransitionYear").getSimpleValue();
        log.info("JournalTransitionType =" + transitionTypeValue);
        var transitionTypeValueToBeSet = lookupTableHome.getLookupTableValue("TransitionTypeTable", transitionTypeValue);
        log.info("transitionTypeValueToBeSet =" + transitionTypeValueToBeSet);

        var node2 = myTran[j].getTarget();
        try {
            var node2ref = node2.createReference(node, JOURNAL_TO_JOURNAL_TRANSITION.getID());
            node2ref.getValue("JournalTransitionType").setSimpleValue(transitionTypeValueToBeSet);
            node2ref.getValue("JournalTransitionYear").setSimpleValue(transitionYear);
            log.info("2 -------- " + node2ref);
        } catch (e) {
            var myTran2 = node2.getReferences(transType).toArray();
            log.info("Length "+myTran2.length);
            for (var k = 0; k < myTran2.length; k++) {
            	if(sourceNodeID == myTran2[k].getTarget().getID()){
            		myTran2[k].getValue("JournalTransitionType").setSimpleValue(transitionTypeValueToBeSet);
            		myTran2[k].getValue("JournalTransitionYear").setSimpleValue(transitionYear);
            	}
            }

        }
    }
}

}