/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BackfilesDCDateConversion",
  "type" : "BusinessAction",
  "setupGroups" : [ "BackfilesUpsertGroup" ],
  "name" : "Backfiles DC Date Conversion",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Backfiles" ],
  "allObjectTypesValid" : false,
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
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,LOG,genericFunctions) {
/**
 * 
 * This rule does the following:
 * - Gets the data containers of the current object
 * - Iterates through them and transforms both start and end date to ISO format from an String date.
 * 
 */

var dataContainers = genericFunctions.getDataContainerObjects(NODE,"JournalBackfileContentDataContainer");
var iter = dataContainers.iterator();
var dc = "";
var startDateString = "";
var endDateString = "";

while (iter.hasNext()) {
	dc = iter.next().getDataContainerObject();
	startDateString = dc.getValue("JANISJournalBackfileContentStart").getSimpleValue();
	endDateString = dc.getValue("JANISJournalBackfileContentEnd").getSimpleValue();

	//LOG.info("startDateString " + startDateString);
	//LOG.info("endDateString " + endDateString);
	
	dc.getValue("JournalBackfileContentStartDate").setSimpleValue(genericFunctions.dateConverter(startDateString, LOG));
	dc.getValue("JournalBackfileContentEndDate").setSimpleValue(genericFunctions.dateConverter(endDateString, LOG));
}
}