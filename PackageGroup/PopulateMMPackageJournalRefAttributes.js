/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PopulateMMPackageJournalRefAttributes",
  "type" : "BusinessAction",
  "setupGroups" : [ "PackageGroup" ],
  "name" : "Populate MM Package Journal Ref Attributes",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
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
    "alias" : "BOMS_TO_JOURNAL_MULTIMEDIA",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "BOMS_TO_JOURNAL_MULTIMEDIA",
    "description" : null
  }, {
    "contract" : "ReferenceTypeBindContract",
    "alias" : "JournalPublishingManagerRefType",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "JournalPublishingManager",
    "description" : null
  }, {
    "contract" : "ReferenceTypeBindContract",
    "alias" : "ProductToSocietyGroupRefType",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "ProductToSocietyGroupReferenceLink",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (MANAGER,NODE,LOG,ProductToCostCenterReferenceLinkType,JournalSAPProfitCenter_LOV,BOMS_TO_JOURNAL_MULTIMEDIA,JournalPublishingManagerRefType,ProductToSocietyGroupRefType) {
var journal = NODE.getParent();
var costCenterRefquery = NODE.queryClassificationProductLinks(ProductToCostCenterReferenceLinkType);
var costCenterRefMyList = costCenterRefquery.asList(100);
var profitCenter = costCenterRefMyList.get(0).getClassification().getValue("SAPProfitCenter").getSimpleValue();
//var publishingManagerRefquery = journal.queryReferences(JournalPublishingManagerRefType);
//var publishingManagerRefMyList = publishingManagerRefquery.asList(100);
//var publishingManager = "";
var societyGroupCodeRefquery = journal.queryReferences(ProductToSocietyGroupRefType);
var societyGroupCodeRefMyList = societyGroupCodeRefquery.asList(100);
var societyGroupCode = "";
var societyGroupCodeRef = "";
var MMid = NODE.getValue("JournalMMPackageID").getSimpleValue();
var MMobj = MANAGER.getProductHome().getProductByID(MMid);

MMobj.getValue("ProductProfitCenter").setSimpleValue(JournalSAPProfitCenter_LOV.getListOfValuesValueByID(profitCenter).getValue());
MMobj.getValue("ProductOwnershipStatus").setSimpleValue(journal.getValue("ProductOwnershipStatus").getSimpleValue());
MMobj.getValue("ProductActivated").setSimpleValue("Activated");

//if (MMobj.queryReferences(JournalPublishingManagerRefType).asList(100).size() == 0){
//	publishingManager = publishingManagerRefMyList.get(0).getTarget();
//	MMobj.createReference(publishingManager, JournalPublishingManagerRefType);
//}

for (var i = 0; i < societyGroupCodeRefMyList.size(); i++){
	societyGroupCodeRef = societyGroupCodeRefMyList.get(i);
	societyGroupCode = societyGroupCodeRef.getTarget();
	
	//if (societyGroupCodeRef.getValue("SocietyPrimaryAffiliated").getSimpleValue() == "Primary"){//Attribute id got changed
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
/*===== business rule plugin definition =====
{
  "pluginId" : "AttributeComparatorCondition",
  "parameters" : [ {
    "id" : "Attribute1",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "ProductMediaType"
  }, {
    "id" : "Attribute2",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : null
  }, {
    "id" : "Constant",
    "type" : "java.lang.String",
    "value" : "Both"
  }, {
    "id" : "Operator",
    "type" : "java.lang.String",
    "value" : "="
  } ],
  "pluginType" : "Precondition"
}
*/
