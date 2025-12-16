/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CopyIssnToDataContainer",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "Copy Issn To Data Container",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "JournalDigitalMedia" ],
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
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "log",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,log,manager) {
var objTypeID = node.getObjectType().getID();
var dataContainerType = node.getParent().getDataContainerByTypeID("ISSNHistory_DataContainer");

if(objTypeID == 'JournalDigitalMedia'){
	var newDigitalDataContainer = dataContainerType.addDataContainer().createDataContainerObject('');
	var digitalISSN = node.getValue("ProductIssn").getSimpleValue();
	newDigitalDataContainer.getValue("JournalIssnHistory").setSimpleValue(digitalISSN);
}
else if(objTypeID == 'JournalPrintMedia'){
	var newPrintDataContainer = dataContainerType.addDataContainer().createDataContainerObject('');
	var printISSN = node.getValue("ProductIssn").getSimpleValue();
	newPrintDataContainer.getValue("JournalIssnHistory").setSimpleValue(printISSN);
}

}