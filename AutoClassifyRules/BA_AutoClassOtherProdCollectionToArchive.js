/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_AutoClassOtherProdCollectionToArchive",
  "type" : "BusinessAction",
  "setupGroups" : [ "AutoClassifyRules" ],
  "name" : "Auto Classification Other Product Collection To Archive Folder",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "GenericFunctions",
    "libraryAlias" : "genericFunctions"
  }, {
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
exports.operation0 = function (node,mgr,genericFunctions,collectionLibrary) {
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
const COLLECTION_STATUS = "CollectionStatus";
var COLLECTION_STATUS_VALUE = node.getValue(COLLECTION_STATUS).getSimpleValue();
logger.info(COLLECTION_STATUS_VALUE);


var parentObject = "";
var otherProdCollectYear = "";
var parentObjecttId = "";
var parentProductCollObjectId = "";
var collectionYearOtherProduct = "";

//logger.info( mgr.getProductHome());

var currentparentObject = node.getParent();
logger.info(currentparentObject + " current Parent"); //OtherProductCollectionAutoClassify

var collTyID = null;
var collSubTyID = null;

if (COLLECTIONTYPE_VALUE != null) {
    collTyID = node.getValue("OtherProductCollectionType").getLOVValue().getID();
    logger.info(collTyID +  " collTyID");
}
if (COLLECTION_SUBTYPE_VALUE != null) {
    collSubTyID = node.getValue("OtherProductCollectionSubType").getLOVValue().getID();
    logger.info(collSubTyID +  "collSubTyID");
}
if (COLLECTION_STATUS_VALUE != null) {
    collStatusID = node.getValue("CollectionStatus").getLOVValue().getID();
    logger.info(collStatusID +  "collStatusID");
}
// var collectionTypeProduct = mgr.getProductHome().getProductByID(collSubTyID);
// logger.info(collectionTypeProduct +  " collectionTypeProduct");
if (collTyID != null ) {
	if (collStatusID == "I") {
    switch (true) {
    
       
        case (collTyID == "OPCS" && collSubTyID == "EALAS"):
            parentObject = mgr.getProductHome().getProductByID("OPAC_EALAS");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "ENOW"):
            parentObject = mgr.getProductHome().getProductByID("OPAC_ENOW");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "BKSM"):
            parentObject = mgr.getProductHome().getProductByID("OPAC_BKSM");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "CPOL"):
            parentObject = mgr.getProductHome().getProductByID("OPAC_CPOL");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "EDATB"):
            parentObject = mgr.getProductHome().getProductByID("OPAC_EDATB");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "ENCC"):
            parentObject = mgr.getProductHome().getProductByID("OPAC_ENCC");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "COCHR"):
            parentObject = mgr.getProductHome().getProductByID("OPAC_COCHR");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "JRNCL"):
            parentObject = mgr.getProductHome().getProductByID("OPAC_JRNCL");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "EMRW_NEMRW"):
            parentObject = mgr.getProductHome().getProductByID("OPAC_EMRW_NEMRW");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "EEOL"):
            parentObject = mgr.getProductHome().getProductByID("OPAC_EEOL");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "OLBK"):
            parentObject = mgr.getProductHome().getProductByID("OPAC_OLBK");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "TPROD"):
            parentObject = mgr.getProductHome().getProductByID("OPAC_TPROD");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;
        case (collTyID == "OPSC" && collSubTyID == "SNOW"):
            parentObject = mgr.getProductHome().getProductByID("OPAC_SNOW");
            //logger.info(parentObject);
            node.setParent(parentObject);
            break;

      

        default:
            parentObject = mgr.getProductHome().getProductByID("OtherProductCollectionAutoClassify");
            //logger.info(parentObject);
            node.setParent(parentObject);
    }
} else if (collStatusID == "A") {
	 switch (true) {
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
}
if (collTyID == "OPSPPR") {
	//if (collStatusID == "A") {
switch (true) {
case (collTyID == "OPSPPR"):
          //   logger.info("check");
            parentObject = mgr.getProductHome().getProductByID("OPDC_SPPROD");
             //logger.info(parentObject + "Chai");
            node.setParent(parentObject);
            break;
default:
            parentObject = mgr.getProductHome().getProductByID("OPDC_SPPROD");
            //logger.info(parentObject);
            node.setParent(parentObject);
}
//	}
}

}