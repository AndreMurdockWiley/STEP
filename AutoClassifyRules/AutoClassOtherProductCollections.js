/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "AutoClassOtherProductCollections",
  "type" : "BusinessAction",
  "setupGroups" : [ "AutoClassifyRules" ],
  "name" : "Auto Classification Other Product Collection",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "CollectionFunctions",
    "libraryAlias" : "collectionLibrary"
  }, {
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
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "mgr",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,mgr,collectionLibrary,genericFunctions) {
//Declaring constants and variables
const COLLECTIONTYPE = "OtherProductCollectionType";
var COLLECTION_SUBTYPE = "OtherProductCollectionSubType";
const COLLECTIONTYPE_VALUE = node.getValue(COLLECTIONTYPE).getSimpleValue();
//logger.info(COLLECTIONTYPE_VALUE);
var COLLECTION_SUBTYPE_VALUE = node.getValue(COLLECTION_SUBTYPE).getSimpleValue();
//logger.info(COLLECTION_SUBTYPE_VALUE);
const COLLECTION_YEAR = "OtherProductCollectionYear";
const COLLECTION_YEAR_VALUE = node.getValue(COLLECTION_YEAR).getSimpleValue();
//logger.info(COLLECTION_YEAR_VALUE);


var parentObject = "";
var otherProdCollectYear = "";
var parentObjecttId = "";
var parentProductCollObjectId = "";
var collectionYearOtherProduct = "";

//logger.info( mgr.getProductHome());

var currentparentObject = node.getParent();
//logger.info(currentparentObject + " curP"); //OtherProductCollectionAutoClassify

var collTyID = null;
var collSubTyID = null;

if (COLLECTIONTYPE_VALUE != null) {
    collTyID = node.getValue("OtherProductCollectionType").getLOVValue().getID();
    logger.info(collTyID +  " OPCD");
}
if (COLLECTION_SUBTYPE_VALUE != null) {
    collSubTyID = node.getValue("OtherProductCollectionSubType").getLOVValue().getID();
   // logger.info(collSubTyID);
}
// var collectionTypeProduct = mgr.getProductHome().getProductByID(collSubTyID);
// logger.info(collectionTypeProduct +  " collectionTypeProduct");
if (collTyID != null ) {
    switch (true) {
    /*	case (collTyID == "OPCD"):
    	parentObject = mgr.getProductHome().getProductByID("DatabaseOtherProductCollection");
    	logger.info("here");
    	 node.setParent(parentObject);
            break;*/
            	case (collTyID == "OPSPPR"):
    	parentObject = mgr.getProductHome().getProductByID("OPDC_SPPROD");
    	//logger.info("here");
    	 node.setParent(parentObject);
            break;
       case (collTyID == "OPSC" && collSubTyID == "EALAS"):
            parentObject = mgr.getProductHome().getProductByID("OPGPC_EALAS");
           // logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "ENOW"):
            parentObject = mgr.getProductHome().getProductByID("OPGPC_ENOW");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "BKSM"):
            parentObject = mgr.getProductHome().getProductByID("OPGPC_BKSM");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "CPOL"):
            parentObject = mgr.getProductHome().getProductByID("OPGPC_CPOL");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "EDATB"):
            parentObject = mgr.getProductHome().getProductByID("OPGPC_EDATB");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "ENCC"):
            parentObject = mgr.getProductHome().getProductByID("OPGPC_ENCC");
           // logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "COCHR"):
            parentObject = mgr.getProductHome().getProductByID("OPGPC_COCHR");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "JRNCL"):
            parentObject = mgr.getProductHome().getProductByID("OPGPC_JRNCL");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "EMRW_NEMRW"):
            parentObject = mgr.getProductHome().getProductByID("OPGPC_EMRW_NEMRW");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "EEOL"):
            parentObject = mgr.getProductHome().getProductByID("OPGPC_EEOL");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "OLBK"):
            parentObject = mgr.getProductHome().getProductByID("OPGPC_OLBK");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "TPROD"):
            parentObject = mgr.getProductHome().getProductByID("OPGPC_TPROD");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "SNOW"):
            parentObject = mgr.getProductHome().getProductByID("OPGPC_SNOW");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;

        default:
            parentObject = mgr.getProductHome().getProductByID("OtherProductCollectionAutoClassify");
            //logger.info(parentObject);
            node.setParent(parentObject);
    }
}
/*if (collTyID == "OPCD") {
    if (COLLECTION_YEAR_VALUE) {
          logger.info("year");
        parentProductCollObjectId = "OPDC" + "_" + COLLECTION_YEAR_VALUE;
        logger.info(parentProductCollObjectId + "  parentProductCollObjectId");
        parentObjects = mgr.getProductHome().getProductByID("DatabaseOtherProductCollection");
        // logger.info(parentObject + " parentObject")
        parentObject = parentObjects.getID();
        parentObject2 = mgr.getProductHome().getProductByID(parentProductCollObjectId);
        logger.info(parentObject2 + " parentObject2");
        if (!parentObject2) {
            collectionYearOtherProduct = genericFunctions.queryForObjTypeBelowById(parentObjects, "OtherProductCollectionYears", parentProductCollObjectId);
             logger.info(collectionYearOtherProduct);
            if (!collectionYearOtherProduct) {
                collectionYearOtherProduct = parentObjects.createProduct(parentProductCollObjectId, "OtherProductCollectionYears");
                collectionYearOtherProduct.getID();
               collectionYearOtherProduct.setName(COLLECTION_YEAR_VALUE);
                collectionYearOtherProduct.approve();
                //OtherProductCollectionYears
            }
            node.setParent(collectionYearOtherProduct);
        }else if (parentObject2.getID()){
        	var parentOb2 = parentObject2.getID();
        	if(COLLECTION_YEAR_VALUE == parentOb2.slice(-4)) {
        			 node.setParent(parentObject2);
        			// logger.info(node.getParent());
        	}
        }
    }
}*/




logger.info("Parent Object: " + parentObject);
}