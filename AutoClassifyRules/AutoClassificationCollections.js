/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "AutoClassificationCollections",
  "type" : "BusinessAction",
  "setupGroups" : [ "AutoClassifyRules" ],
  "name" : "Auto Classification Collections",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalCollectionsOffering" ],
  "allObjectTypesValid" : false,
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
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
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
exports.operation0 = function (LOG,NODE,MANAGER,collectionLibrary) {
var collectionType = NODE.getValue("CollectionType").getSimpleValue();
logger.info(collectionType );
var collectionStatus = NODE.getValue("CollectionStatus").getSimpleValue();
logger.info(collectionStatus)
var collectionTypeId = collectionLibrary.collectionTypeConverter(collectionType);
logger.info(collectionTypeId +  "  collectionTypeId");
var collectionTypeProduct = MANAGER.getProductHome().getProductByID(collectionTypeId);
logger.info(collectionTypeProduct + "  collectionTypeProduct");
var collectionYear = "";
var collectionYearProduct = "";
var collectionSubType = "";
var collectionSubTypeProduct = "";
var parentObjectId = "";
var parentObject = "";

if( collectionType == "Other Database" || collectionType == "Rescue Account Collections") {
	NODE.setParent(collectionTypeProduct);
} 
/*else if (collectionType == "Database Model Collections") {
	collectionYear = NODE.getValue("CollectionYear").getSimpleValue();
	NODE.setName("Database Model" + " " + collectionYear );
	NODE.getValue("CollectionSubType").setSimpleValue("Standard");
	NODE.getValue("CollectionStatus").setValue("Active");
	NODE.getValue("ProductTitle").setSimpleValue(NODE.getName());
	parentObjectId = collectionTypeId + "_" + collectionYear + "_" + "Standard";
	logger.info(parentObjectId +  " parentObjectId");
	parentObject = MANAGER.getProductHome().getProductByID(parentObjectId);
	logger.info(parentObject);
	if (!parentObject){
		collectionYearProduct = collectionLibrary.createCollectionYear(collectionTypeProduct, collectionYear);
		collectionSubTypeProduct = collectionLibrary.createCollectionSubType(collectionYearProduct, "Standard");
		parentObject = collectionSubTypeProduct;
	} 
	
	NODE.setParent(parentObject);
	
} */
else if( collectionType == "Specific" || collectionType == "Backfile Collection") {
	if(collectionStatus == "Inactive"){
	var parentObject = MANAGER.getProductHome().getProductByID("ARCH");
           logger.info(parentObject);
           NODE.setParent(parentObject);
	}else if(collectionStatus == "Active"){
		NODE.setParent(collectionTypeProduct);
		
	}
}
else {
	collectionYear = NODE.getValue("CollectionYear").getSimpleValue();
	collectionSubType = NODE.getValue("CollectionSubType").getSimpleValue();
	parentObjectId = collectionTypeId + "_" + collectionYear + "_" + collectionSubType;
	logger.info(parentObjectId +  " parentObjectId");
	parentObject = MANAGER.getProductHome().getProductByID(parentObjectId);
	logger.info(parentObject);
	
	if (!parentObject){
		collectionYearProduct = collectionLibrary.createCollectionYear(collectionTypeProduct, collectionYear);
		collectionSubTypeProduct = collectionLibrary.createCollectionSubType(collectionYearProduct, collectionSubType);
		parentObject = collectionSubTypeProduct;
	} 
	
	NODE.setParent(parentObject);
} 

}