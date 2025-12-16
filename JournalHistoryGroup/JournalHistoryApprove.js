/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JournalHistoryApprove",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalHistoryGroup" ],
  "name" : "Journal History Approve",
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
    "contract" : "ManagerBindContract",
    "alias" : "manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "objJH",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "JournalHistoryProducts",
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
exports.operation0 = function (node,manager,objJH,log) {
var objType = node.getObjectType().getID();
log.info("ObjectType =" + objType);
if(objType == "JournalHistoryProducts" || "Journal") {
	var JournalHistRefs = manager.getReferenceTypeHome().getReferenceTypeByID("Journal_History_Reference");
	var myJournalHistoryReferences =node.getReferences(JournalHistRefs).toArray();
	log.info("My History =" + JournalHistRefs);

	for(var j=0; j<myJournalHistoryReferences.length;j++){
		
		var refType = myJournalHistoryReferences[j].getTarget();
		log.info("My History2 =" + myJournalHistoryReferences);
		
		if(JournalHistRefs == "Journal_History_Reference") {
		log.info("My History3 =" + refType);
		                  

//log.info("My refTarget =" + refTarget);
//log.info("My refType =" + refType);
//log.info("My Node =" + node.getID());

refType.approve();
		}
	}
	//JournalHistRefs.approve();
}
}