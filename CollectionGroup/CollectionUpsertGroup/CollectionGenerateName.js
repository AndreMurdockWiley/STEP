/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CollectionGenerateName",
  "type" : "BusinessAction",
  "setupGroups" : [ "CollectionUpsertGroup" ],
  "name" : "Collection Generate Name",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "CollectionFunctions",
    "libraryAlias" : "collectionLibrary"
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
    "contract" : "ManagerBindContract",
    "alias" : "MANAGER",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,MANAGER,collectionLibrary) {
var collectionTypeId = collectionLibrary.collectionTypeConverter(NODE.getValue("CollectionType").getSimpleValue());
logger.info(collectionTypeId +  "collectionTypeId");
//logger.info(NODE.getValue("CollectionType").getSimpleValue());
var collectionYearName = "";
var collectionTypeProduct = "";
var collectionYearProduct = "";

if(collectionTypeId != "SPEC" ) {
	if(collectionTypeId != "OTHER"){
		if( collectionTypeId != "RESC") {
	            if( collectionTypeId != "BACK") {
	collectionYearName = NODE.getValue("CollectionYear").getSimpleValue();
	logger.info(collectionYearName);
	collectionTypeProduct = MANAGER.getProductHome().getProductByID(collectionTypeId);
	collectionYearProduct = collectionLibrary.createCollectionYear(collectionTypeProduct, collectionYearName);
	logger.info(collectionYearProduct);
	
	if (collectionTypeId == "NURS"){
		collectionTypeId = "MN";
	}
	
	//Generate No-Specific Collection Attributes
	collectionLibrary.generateStandardCollectionAttributes(NODE, collectionYearName, collectionTypeId);
	collectionLibrary.generateCommonCollectionAttributes(NODE, collectionTypeProduct, collectionYearName);
	
	}
} 
	
}
} else {
	//Generate Specific Collection Attributes
	collectionLibrary.generateSpecificCollectionAttributes(NODE);
} 
}