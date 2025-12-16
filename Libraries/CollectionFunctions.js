/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CollectionFunctions",
  "type" : "BusinessLibrary",
  "setupGroups" : [ "Libraries" ],
  "name" : "Collection Functions",
  "description" : null,
  "scope" : null,
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : null,
  "dependencies" : [ {
    "libraryId" : "GenericFunctions",
    "libraryAlias" : "genericFunctions"
  } ]
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
function createCollectionYear(collectionTypeProduct, collectionYearName){
	var collectionTypeId = collectionTypeProduct.getID();
	var collectionYearId = collectionTypeId + "_" + collectionYearName;
	var collectionYearProduct = "";
	
	//Checking if the year already exist
	collectionYearProduct = genericFunctions.queryForObjTypeBelowById(collectionTypeProduct, "JournalCollectionsYear", collectionYearId);
	
	//This way, if the year already exist, it will return it, otherwise, It will be created
	if(!collectionYearProduct){
		collectionYearProduct = collectionTypeProduct.createProduct(collectionYearId, "JournalCollectionsYear");
		collectionYearProduct.setName(collectionYearName);
		collectionYearProduct.approve();
	}
	
	return collectionYearProduct;
}

function createCollectionSubType(collectionYearProduct, collectionSubTypeName){
	var collectionYearId = collectionYearProduct.getID();
	var collectionTypeName = collectionYearProduct.getParent().getName();
	var collectionSubTypeId = collectionYearId + "_" + collectionSubTypeName;
	var collectionSubTypeProduct = "";
	
	//Checking if the sub type already exist
	collectionSubTypeProduct = genericFunctions.queryForObjTypeBelowById(collectionYearProduct, "JournalCollectionsSubType", collectionSubTypeId);

	//This way, if the sub type already exist, it will return it, otherwise, It will be created
	if(!collectionSubTypeProduct){
		collectionSubTypeProduct = collectionYearProduct.createProduct(collectionSubTypeId, "JournalCollectionsSubType");
		collectionSubTypeProduct.setName(collectionTypeName + " " + collectionSubTypeName);
		collectionSubTypeProduct.approve();
	}
	
	return collectionSubTypeProduct;
}

function createCollection(collectionSubTypeProduct, collectionSubType, yearFromUpgrade){
	var collectionProduct = "";
	var collectionObjectType = "JournalCollectionsOffering";
	var collectionYearProduct = collectionSubTypeProduct.getParent();
	var collectionTypeProduct = collectionYearProduct.getParent();
	var collectionYearName = collectionYearProduct.getName();
	var collectionTypeId = collectionTypeProduct.getID();
	var collectionCode = "";
	//Switching collection types values
			if (collectionTypeId == "NURS"){
				collectionTypeId = "MN";
			}
			if (collectionTypeId == "HSS"){
		collectionTypeId = "SSH";
			}
	//Checking if the collection already exist
	switch(true){
		case (collectionSubType == "Standard"):
			if (collectionSubTypeProduct.getChildren().size() > 0){
				collectionProduct = collectionSubTypeProduct.getChildren().get(0);
			}
			break;
		case (collectionSubType == "Upgrade"):
			
			
			collectionCode = collectionYearName + collectionTypeId.substring(0, 3) + yearFromUpgrade.substring(2) + "U";
			collectionProduct = genericFunctions.queryForObjTypeBelowWithValue(collectionSubTypeProduct, collectionObjectType, "CollectionCode", collectionCode);
			break;
	}
	
	//This way, if the collection already exist, it will return it, otherwise, It will be created
	if(!collectionProduct){
		//Creating a new Collection
		collectionProduct = collectionSubTypeProduct.createProduct("", collectionObjectType);

		//Populate Type-Specific Attributes
		generateTypeSpecificCollectionAttributes(collectionProduct, collectionYearProduct, collectionTypeProduct, collectionTypeId, collectionYearName,
			collectionSubType, yearFromUpgrade, collectionCode);

		//Populate Common Attributes
		generateCommonCollectionAttributes(collectionProduct, collectionTypeProduct, collectionYearName);
	}
	
	return collectionProduct;
}

/*function generateCommonCollectionAttributes(collectionProduct, collectionTypeProduct, collectionYearName){
	var collectionTypeName = collectionTypeProduct.getName();
	
	collectionProduct.getValue("CollectionType").setSimpleValue(collectionTypeName);
	collectionProduct.getValue("CollectionStatus").setSimpleValue("Active");
	collectionProduct.getValue("ProductTitle").setSimpleValue(collectionProduct.getName());
	collectionProduct.getValue("CollectionYear").setSimpleValue(collectionYearName);
}*/
/*function generateCommonCollectionAttributes(collectionProduct, collectionTypeProduct, collectionYearName){
	var collectionTypeName = collectionTypeProduct.getName();
	
	collectionProduct.getValue("CollectionType").setSimpleValue(collectionTypeName);
	var fetchvalueID = collectionProduct.getValue("CollectionType").getLOVValue().getID();
	
	if(fetchvalueID == "HSS"){
		collectionProduct.setName("SSH" + " " + collectionYearName + " Collection");
	}
	
	collectionProduct.getValue("CollectionStatus").setSimpleValue("Active");
	var fetchname = collectionProduct.getName();
	
	collectionProduct.getValue("ProductTitle").setSimpleValue(collectionProduct.getName());
	
	collectionProduct.getValue("CollectionYear").setSimpleValue(collectionYearName);
}*/
function generateCommonCollectionAttributes(collectionProduct, collectionTypeProduct, collectionYearName){
	var collectionTypeName = collectionTypeProduct.getName();
	
//	logger.info(collectionTypeName + "          collectionTypeName"); //The Social Sciences & Humanities Standard Collection
	collectionProduct.getValue("CollectionType").setSimpleValue(collectionTypeName);
	//collectionProduct.getValue("CollectionType").setSimpleValue(collectionTypeName);
	collectionProduct.getValue("CollectionYear").setSimpleValue(collectionYearName);
	collectionProduct.getValue("CollectionStatus").setSimpleValue("Active");
	//logger.info(collectionProduct.getName() +       "           getName ");
	var fetchvalueID = collectionProduct.getValue("CollectionType").getLOVValue().getID();
	var fetchcollectiontype = collectionProduct.getValue("CollectionSubType").getSimpleValue();
	//logger.info(fetchcollectiontype + "         fetchcollectiontype");
	if(fetchvalueID == "NURS" && fetchcollectiontype == "Standard") {
		collectionProduct.setName("M&N" + " " + collectionYearName + " Collection");
		
		
	}else if(fetchvalueID == "NURS" && fetchcollectiontype == "Upgrade"){
		logger.info("Upgrade here");
		collectionProduct.setName(collectionYearName + " " + "M&N" + " Collection Upgrade from " + yearFromUpgrade + " List");
		
	}
	
	collectionProduct.getValue("ProductTitle").setSimpleValue(collectionProduct.getName());
	
	
}
	
function generateTypeSpecificCollectionAttributes(collectionProduct, collectionYearProduct, collectionTypeProduct, collectionTypeId, collectionYearName,
			collectionSubType, yearFromUpgrade, collectionCode){
	
	switch(true){
		case (collectionSubType == "Standard"):
			generateStandardCollectionAttributes(collectionProduct, yearFromUpgrade, collectionTypeId);
			break;
		case (collectionSubType == "Upgrade"):
			generateUpgradeCollectionAttributes(collectionProduct, yearFromUpgrade, collectionTypeId, collectionYearName, collectionCode);
			break;
	}
}

function generateStandardCollectionAttributes(collectionProduct, yearFromUpgrade, collectionTypeId){
	//collectionProduct.getValue("CollectionCode").setSimpleValue(collectionTypeId + yearFromUpgrade);
	
	//Switching collection types values
	//if (collectionTypeId == "MN"){
		//collectionTypeId = "M&N";
	//}
	//Inorder to fetch the product Title and Name starting with SSH
	//if (collectionTypeId == "HSS"){
	//collectionProduct.setName("SSH" + " " + yearFromUpgrade + " Collection");
	//}
	if (collectionTypeId == "HSS"){
		collectionTypeId = "SSH";
	}

	if(collectionTypeId != "WATP"){
	
	
		collectionProduct.getValue("CollectionCode").setSimpleValue(collectionTypeId + yearFromUpgrade);
	collectionProduct.setName(collectionTypeId + " " + yearFromUpgrade + " Collection");
	collectionProduct.getValue("CollectionSubType").setSimpleValue("Standard");
	
	}
	
	
}

function generateUpgradeCollectionAttributes(collectionProduct, yearFromUpgrade, collectionTypeId, collectionYearName, collectionCode){
	//Switching collection types values
	if (collectionTypeId == "MN"){
		collectionTypeId = "M&N";
		
}
	if (collectionTypeId == "HSS"){
		collectionTypeId = "SSH";
		
	}
	//Inorder to replace HSS with SSH 
	//   if (collectionTypeId == "HSS") {
	//collectionProduct.setName(collectionYearName + " " + "SSH" + " Collection Upgrade from " + yearFromUpgrade + " List");
	//}
	
	collectionProduct.setName(collectionYearName + " " + collectionTypeId + " Collection Upgrade from " + yearFromUpgrade + " List");
	collectionProduct.getValue("CollectionCode").setSimpleValue(collectionCode);
	collectionProduct.getValue("CollectionSubType").setSimpleValue("Upgrade");
	collectionProduct.getValue("ProductActivated").setValue("Activated");
	collectionProduct.getValue("ProductTitle").setSimpleValue(collectionProduct.getName());
	collectionProduct.approve();
	
}

function generateSpecificCollectionAttributes(collectionProduct){
	var collectionName = collectionProduct.getValue("ProductTitle").getSimpleValue();
	
	collectionProduct.setName(collectionName);
	collectionProduct.getValue("CollectionSubType").setValue("Standard");
	collectionProduct.getValue("CollectionStatus").setValue("Active");
		
}

function collectionTypeConverter(collectionType){
	var collectionTypeId = "";
	
	switch(true){
		case (collectionType == "Full"):
			collectionTypeId = "FULL";
			break;
		case (collectionType == "Research for Life"):
			collectionTypeId = "R4L";
			break;
		case (collectionType == "Database Model Collections"):
			collectionTypeId = "WATP";
			break;
		case (collectionType == "Specific"):
			collectionTypeId = "SPEC";
			break;
			   if(collectionProduct.getValue("CollectionStatus").getSimpleValue() == "Inactive") {
			   	collectionTypeId = "ARCH";
			   	break;
			   }
		case (collectionType == "The Medical & Nursing Standard Collection"):
			collectionTypeId = "NURS";
			break;
		case (collectionType == "The Science Technology & Medical Standard Collection"):
			collectionTypeId = "STM";
			break;
		//case (collectionType == "The Social Sciences & Humanities Standard Collection"):
			//collectionTypeId = "SSH";
			//break;
		case (collectionType == "The Social Sciences & Humanities Standard Collection"):
			collectionTypeId = "HSS";
			break;
		case (collectionType == "Other Database"):
			collectionTypeId = "OTHER";
			break;
		case (collectionType == "Rescue Account Collections"):
			collectionTypeId = "RESC";
			break;
		case (collectionType == "Backfile Collection"):
			collectionTypeId = "BACK";
			break;
			if(collectionProduct.getValue("CollectionStatus").getSimpleValue() == "Inactive") {
			   	collectionTypeId = "ARCH";
			   	break;
			   }
	}

	return collectionTypeId;
}

function copyCollection(collection, collectionYear){
	var collectionTypeProduct = collection.getParent().getParent().getParent();
	var collectionYearProduct = createCollectionYear(collectionTypeProduct, collectionYear);
	var collectionSubTypeProduct = createCollectionSubType(collectionYearProduct, "Standard");
	var copiedCollection = "";
	var collectionTypeName = collection.getValue("CollectionType").getSimpleValue();

	//Creating new Issue
	copiedCollection = collectionSubTypeProduct.createProduct('',"JournalCollectionsOffering");
	
	//Generate Unique Attributes
	copiedCollection.getValue("CollectionYear").setSimpleValue(collectionYear);
	
	//Copying Issue Attributes
	generateCopiedCollectionAttributes(copiedCollection, collection, collectionYear);

	//Initiating Issue into Enrichment WorkFlow
	copiedCollection.startWorkflowByID("CollectionCreationWF", null)
	
	return copiedCollection;
}

function generateCopiedCollectionAttributes(copiedCollection, collection, collectionYear){
	genericFunctions.copyValue(copiedCollection, collection, "ProductTitle");
	genericFunctions.copyValue(copiedCollection, collection, "CollectionType");
	genericFunctions.copyValue(copiedCollection, collection, "CollectionSubType");
	genericFunctions.copyValue(copiedCollection, collection, "CollectionStatus");
}

function generateStatusSubType(collectionProduct, collectionYearName, collectionTypeId) {
	collectionProduct.setName("Database Model" + " " + collectionYearName );
	collectionProduct.getValue("CollectionSubType").setSimpleValue("Standard");
	collectionProduct.getValue("CollectionStatus").setValue("Active");
	collectionProduct.getValue("DatabaseCollectionDates").setValue("Constant");
	collectionProduct.getValue("ProductTitle").setSimpleValue(collectionProduct.getName());
}
/*===== business library exports - this part will not be imported to STEP =====*/
exports.createCollectionYear = createCollectionYear
exports.createCollectionSubType = createCollectionSubType
exports.createCollection = createCollection
exports.generateCommonCollectionAttributes = generateCommonCollectionAttributes
exports.generateTypeSpecificCollectionAttributes = generateTypeSpecificCollectionAttributes
exports.generateStandardCollectionAttributes = generateStandardCollectionAttributes
exports.generateUpgradeCollectionAttributes = generateUpgradeCollectionAttributes
exports.generateSpecificCollectionAttributes = generateSpecificCollectionAttributes
exports.collectionTypeConverter = collectionTypeConverter
exports.copyCollection = copyCollection
exports.generateCopiedCollectionAttributes = generateCopiedCollectionAttributes
exports.generateStatusSubType = generateStatusSubType