/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "GetLastApprovedDate",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "GetLastApprovedDate",
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
exports.operation0 = function (node,manager,log) {
var approvedNode;
manager.executeInWorkspace("Approved",function(approvedNodeManager){
	approvedNode = approvedNodeManager.getProductHome().getProductByID(node.getID());
	log.info("approvedNode" + approvedNode);
})

var revisions =approvedNode.getRevisions().toArray();
var latestRevision= revisions[0];
log.info("latestRevision" + latestRevision);
var createDate = latestRevision.getCreatedDate();
log.info("createDate" + createDate);
var formate = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
var formatteddate = formate.format(createDate);
log.info("formatteddate " + formatteddate)
node.getValue("LastUpdatedNew").setSimpleValue(formatteddate);



}