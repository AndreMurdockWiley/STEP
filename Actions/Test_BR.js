/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Test_BR",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "Test_BR",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "GenericFunctions",
    "libraryAlias" : "genericFunctions"
  } ]
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
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,genericFunctions) {

deleteIssue(node);

function deleteIssue(issue){
	genericFunctions.removeFromWorkflow(issue,"VolumeIssueCreationWF");

	var deleteNode=issue.delete();
	logger.info(deleteNode)
	if(deleteNode){
		deleteNode.approve();
	}
}

}