/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_SyncMediaNameTitle",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalWorkflowGroup" ],
  "name" : "BA_SyncMediaNameTitle",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
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
exports.operation0 = function (node) {
var journalName = node.getName();
var journalHeader = node.getValue("ProductTitle").getSimpleValue();
var childrenArr = node.getChildren().toArray();
for( var i=0; i<childrenArr.length; i++){
	var children = childrenArr[i].getName();
	var childrenTitle = childrenArr[i].getValue("ProductFullTitle").getSimpleValue();
	log.info(children);
	if(children != journalName){
		childrenArr[i].setName(journalName);
	}
	if(journalHeader != childrenTitle){
		childrenArr[i].getValue("ProductFullTitle").setSimpleValue(journalHeader);
	}
}
}