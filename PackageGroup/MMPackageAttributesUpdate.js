/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "MMPackageAttributesUpdate",
  "type" : "BusinessAction",
  "setupGroups" : [ "PackageGroup" ],
  "name" : "MM Package Attributes Update",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : true,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "ManagerBindContract",
    "alias" : "MANAGER",
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
    "contract" : "ReferenceTypeBindContract",
    "alias" : "JournalPublishingManagerRefType",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "JournalPublishingManager",
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ClassificationProductLinkTypeBindContract",
    "alias" : "ProductToCostCenterReferenceLinkType",
    "parameterClass" : "com.stibo.core.domain.impl.ClassificationProductLinkTypeImpl",
    "value" : "ProductToCostCenterReferenceLink",
    "description" : null
  }, {
    "contract" : "ListOfValuesBindContract",
    "alias" : "JournalSAPProfitCenter_LOV",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "JournalSAPProfitCenter_LOV",
    "description" : null
  }, {
    "contract" : "ReferenceTypeBindContract",
    "alias" : "ProductToSocietyGroupRefType",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "ProductToSocietyGroupReferenceLink",
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "webui",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (MANAGER,NODE,JournalPublishingManagerRefType,LOG,ProductToCostCenterReferenceLinkType,JournalSAPProfitCenter_LOV,ProductToSocietyGroupRefType,webui) {
//var journalPublishingManagerRefquery = NODE.queryReferences(JournalPublishingManagerRefType);
//var journalPublishingManagerRefMyList = journalPublishingManagerRefquery.asList(100);
//var journalPublishingManagerRefObject = journalPublishingManagerRefMyList.get(0);
//var journalPublishingManager = journalPublishingManagerRefObject.getTarget();
//var journalPublishingManagerId = journalPublishingManager.getID();
var journalMedia = NODE.getChildren().get(0);
var costCenterRefquery = journalMedia.queryClassificationProductLinks(ProductToCostCenterReferenceLinkType);
var costCenterRefMyList = costCenterRefquery.asList(100);
var profitCenter = costCenterRefMyList.get(0).getClassification().getValue("SAPProfitCenter").getSimpleValue();
var journalSocietyGroupCodeRefquery = NODE.queryReferences(ProductToSocietyGroupRefType);
var journalSocietyGroupCodeRefMyList = journalSocietyGroupCodeRefquery.asList(100);
var societyGroupCodeRef = "";
var societyGroupCode = "";
var MMid = NODE.getChildren().get(0).getValue("JournalMMPackageID").getSimpleValue();
var MMobj = MANAGER.getProductHome().getProductByID(MMid);
var MMPublishingManagerRefquery = "";
var MMPublishingManagerRefMyList = "";
var MMPublishingManagerRefObject = "";
var MMPublishingManagerId = "";
var MMSocietyGroupCodeRefquery = "";
var MMSocietyGroupCodeRefMyList = "";
if(MMobj){
//In case MM doesn't have these references
try {
	MMPublishingManagerRefquery = MMobj.queryReferences(JournalPublishingManagerRefType);
	MMSocietyGroupCodeRefquery = MMobj.queryReferences(ProductToSocietyGroupRefType);
	MMSocietyGroupCodeRefMyList = MMSocietyGroupCodeRefquery.asList(100);
	logger.info(MMSocietyGroupCodeRefMyList);
//	MMPublishingManagerRefMyList = MMPublishingManagerRefquery.asList(100);
	logger.info(MMPublishingManagerRefMyList);
//	MMPublishingManagerRefObject = MMPublishingManagerRefMyList.get(0);
	logger.info(MMPublishingManagerRefObject);
//	MMPublishingManagerId = MMPublishingManagerRefObject.getTarget().getID();
	logger.info(MMPublishingManagerId);
	
	//Updating the publishing manager if its different
//	if (journalPublishingManagerId != MMPublishingManagerId){
	//	MMPublishingManagerRefObject.delete();
		
	//	MMobj.createReference(journalPublishingManager, JournalPublishingManagerRefType);
//	} 
	

	//Deleting all society group references from the MM package
	for (var i = 0; i < MMSocietyGroupCodeRefMyList.size(); i++){
		MMSocietyGroupCodeRefMyList.get(i).delete();
	}
} catch(e){
	//throw(e);
	
if (e.javaException instanceof java.lang.IndexOutOfBoundsException) {
		//logger.info("This product doesnt have link in MM");
	//	MMobj.createReference(journalPublishingManager, JournalPublishingManagerRefType);
	} else {
		throw(e);
	}
}

MMobj.getValue("ProductProfitCenter").setSimpleValue(JournalSAPProfitCenter_LOV.getListOfValuesValueByID(profitCenter).getValue());
MMobj.getValue("ProductOwnershipStatus").setSimpleValue(NODE.getValue("ProductOwnershipStatus").getSimpleValue());
MMobj.getValue("ProductShortTitle").setSimpleValue(NODE.getValue("ProductShortTitle").getSimpleValue());
MMobj.getValue("ProductFinanceBillingModel").setSimpleValue(NODE.getValue("ProductFinanceBillingModel").getSimpleValue());
LOG.info("I'm here 2");

//Recreating all the primary society group references from the Journal to the MM Package
for (var i = 0; i < journalSocietyGroupCodeRefMyList.size(); i++){
	societyGroupCodeRef = journalSocietyGroupCodeRefMyList.get(i);
	societyGroupCode = societyGroupCodeRef.getTarget();
	
	//if (societyGroupCodeRef.getValue("SocietyPrimaryAffiliated").getSimpleValue() == "Primary"){ //Attribute id changed
	if (societyGroupCodeRef.getValue("SocietyPrimaryAffiliated").getSimpleValue() == "Owner" || societyGroupCodeRef.getValue("SocietyPrimaryAffiliated").getSimpleValue() == "Part-owner"){ //Attribute Value changed
		try {
			MMobj.createReference(societyGroupCode, ProductToSocietyGroupRefType);
		} catch (e){
			if (e.javaException instanceof com.stibo.core.domain.reference.TargetAlreadyReferencedException){
				continue;
			} else {
				throw(e);
			}
		}
	}
}
}
else{
	webui.showAlert("ERROR", "", "There is no Multimedia for the journal. Please Check");
				
}

}
/*===== business rule plugin definition =====
{
  "pluginId" : "AttributeComparatorCondition",
  "parameters" : [ {
    "id" : "Attribute1",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "JournalMMPackageID"
  }, {
    "id" : "Attribute2",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : null
  }, {
    "id" : "Constant",
    "type" : "java.lang.String",
    "value" : ""
  }, {
    "id" : "Operator",
    "type" : "java.lang.String",
    "value" : "<>"
  } ],
  "pluginType" : "Precondition"
}
*/

/*===== business rule plugin definition =====
{
  "pluginId" : "AttributeComparatorCondition",
  "parameters" : [ {
    "id" : "Attribute1",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "ProductActivated"
  }, {
    "id" : "Attribute2",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : null
  }, {
    "id" : "Constant",
    "type" : "java.lang.String",
    "value" : "Activated"
  }, {
    "id" : "Operator",
    "type" : "java.lang.String",
    "value" : "="
  } ],
  "pluginType" : "Precondition"
}
*/
