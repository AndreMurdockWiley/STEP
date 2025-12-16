/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Copy_ISSN_to_Data_Manual",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "Copy ISSN to Data Manual",
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
var printObject = null; 
var digitalObject = null; 
var printOnline = node.getValue("ProductMediaType").getSimpleValue(); 


	if(printOnline == 'Online'){
		digitalObject = child;
	}
	else if(printOnline == 'Print'){
		printObject = child;
	}
	return true;

//log.info("Digital Object = " + digitalObject.getID());
//log.info("Print Object = " + printObject.getID());
var dataContainerType = node.getDataContainerByTypeID("ISSNHistory_DataContainer");
if(printObject){
	var newPrintDataContainer = dataContainerType.addDataContainer().createDataContainerObject('');
	var printISSN = printObject.getValue("IDLPrintJournalISSN").getSimpleValue();
	newPrintDataContainer.getValue("JournalIssnHistory").setSimpleValue(printISSN);
	//log.info("Hello World");
}
if(digitalObject){
	var newDigitalDataContainer = dataContainerType.addDataContainer().createDataContainerObject('');
	var digitalISSN = digitalObject.getValue("IDLDigitalJournalISSN").getSimpleValue();
	newDigitalDataContainer.getValue("JournalIssnHistory").setSimpleValue(digitalISSN);
	//log.info("Hello Digital World " + digitalISSN);
}
}