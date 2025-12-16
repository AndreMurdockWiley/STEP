/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JournalPackageFunctions",
  "type" : "BusinessLibrary",
  "setupGroups" : [ "Libraries" ],
  "name" : "Journal Package Functions",
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
	var sequentialMatNo = materialNumber.getValue("MultiJournalPackageSystemMatNo").getSimpleValue();

     sequentialMatNo++;

	materialNumber.getValue("MultiJournalPackageSystemMatNo").setSimpleValue(sequentialMatNo);

	return sequentialMatNo;
}

/*===== business library exports - this part will not be imported to STEP =====*/
exports.sequentialMatNoIncrement = sequentialMatNoIncrement