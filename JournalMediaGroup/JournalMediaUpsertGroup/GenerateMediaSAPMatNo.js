/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "GenerateMediaSAPMatNo",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalMediaUpsertGroup" ],
  "name" : "Generate Media SAP Mat No",
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
var journalGroupCode = NODE.getValue("JournalGroupCode").getSimpleValue();

if (journalGroupCode.length() < 4) {
	journalGroupCode = genericFunctions.pad(journalGroupCode, 4);
}

var myChilds = NODE.getChildren();

for(var i=0; i<myChilds.size();i++) {
	var journalMediaCode = genericFunctions.mediaCodeTransformation(myChilds.get(i).getValue("JournalMediaCode").getSimpleValue());

	//LOG.info(journalGroupCode + journalMediaCode);
	myChilds.get(i).getValue("ProductSAPMaterialNumber").setSimpleValue(journalGroupCode + journalMediaCode);
}	
}