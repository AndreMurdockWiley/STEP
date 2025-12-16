/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "OtherProductsFunctions",
  "type" : "BusinessLibrary",
  "setupGroups" : [ "Libraries" ],
  "name" : "Other Products Functions",
  "description" : null,
  "scope" : null,
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : null,
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessLibrary",
  "binds" : [ ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
function sequentialMatNoIncrement(materialNumber){
	var sequentialMatNo = materialNumber.getValue("OPAndBackfileSystemMatNo").getSimpleValue();

     sequentialMatNo++;

	materialNumber.getValue("OPAndBackfileSystemMatNo").setSimpleValue(sequentialMatNo);

	return sequentialMatNo;
}

/*===== business library exports - this part will not be imported to STEP =====*/
exports.sequentialMatNoIncrement = sequentialMatNoIncrement