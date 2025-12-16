/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CollectionValidFromPopulate",
  "type" : "BusinessAction",
  "setupGroups" : [ "CollectionsGroup" ],
  "name" : "Collection Valid From Populate",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "MultiJournal" ],
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
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "MANAGER",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ReferenceTypeBindContract",
    "alias" : "COLLECTIONS_TO_JOURNALS",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "COLLECTIONS_TO_JOURNALS",
    "description" : null
  }, {
    "contract" : "ReferenceTypeBindContract",
    "alias" : "COLLECTION_TO_JOURNALS_ADD",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "COLLECTION_TO_JOURNALS_ADD",
    "description" : null
  }, {
    "contract" : "ReferenceTypeBindContract",
    "alias" : "COLLECTION_TO_JOURNALS_REMOVE",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "COLLECTION_TO_JOURNALS_REMOVE",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,LOG,MANAGER,COLLECTIONS_TO_JOURNALS,COLLECTION_TO_JOURNALS_ADD,COLLECTION_TO_JOURNALS_REMOVE,genericFunctions) {
/*----------------------------M-O-D-I-F-I-C-A-T-I-O-N----------L-O-G---------------------------------------------------
===============================================================================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
===============================================================================================================================================================================================================================
23Jan2025    Venkata Siva Harish Mattaparthi   HAR01     RPDM-9132    Populate ComponentContentLicenseStartDate and ComponentContentLicenseEndDate for components linked with COLLECTION_TO_JOURNALS_ADD,COLLECTION_TO_JOURNALS_REMOVE.                                                                   
                                                                
===============================================================================================================================================================================================================================

*/
//HAR01 Start
var objectTypeId = NODE.getObjectType().getID();
if (objectTypeId == 'JournalCollectionsOffering'){
var collectionType = NODE.getValue('CollectionType').getID();
log.info("Collection Type" + collectionType);
if (collectionType == 'WATP') {
//HAR01 End

var myJRColRefs = NODE.getReferences(COLLECTIONS_TO_JOURNALS);
var COLStartdate = NODE.getValue("CollectionHeaderContentStartDate").getSimpleValue();
var COLEnddate = NODE.getValue("CollectionHeaderContentEndDate").getSimpleValue();
var addJRColRefs = NODE.getReferences(COLLECTION_TO_JOURNALS_ADD);               //HAR01
var removeJRColRefs = NODE.getReferences(COLLECTION_TO_JOURNALS_REMOVE);         //HAR01

for(var i = 0;i<myJRColRefs.size();i++){
	var myMJDigRef = myJRColRefs.get(i);
	//LOG.info("Component Content License StartDate " + myMJDigRef.getValue("ComponentContentLicenseStartDate").getSimpleValue());
	//LOG.info("Component Content License EndDate " + myMJDigRef.getValue("ComponentContentLicenseEndDate").getSimpleValue());
	myMJDigRef.getValue("ComponentContentLicenseStartDate").setSimpleValue(COLStartdate);
	myMJDigRef.getValue("ComponentContentLicenseEndDate").setSimpleValue(COLEnddate);
}

//HAR01 Start
//Populate Component Content License dates for recently added components
for(var j = 0;j<addJRColRefs.size();j++){
	var addMJDigRef = addJRColRefs.get(j);
	addMJDigRef.getValue("ComponentContentLicenseStartDate").setSimpleValue(COLStartdate);
	addMJDigRef.getValue("ComponentContentLicenseEndDate").setSimpleValue(COLEnddate);
}

//Populate Component Content License dates for recently removed components
for(var k = 0;k<removeJRColRefs.size();k++){
	var removeMJDigRef = removeJRColRefs.get(k);
	removeMJDigRef.getValue("ComponentContentLicenseStartDate").setSimpleValue(COLStartdate);
	removeMJDigRef.getValue("ComponentContentLicenseEndDate").setSimpleValue(COLEnddate);
}

}
}
//HAR01 End
}
/*===== business rule plugin definition =====
{
  "pluginId" : "AttributeComparatorCondition",
  "parameters" : [ {
    "id" : "Attribute1",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "CollectionType"
  }, {
    "id" : "Attribute2",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : null
  }, {
    "id" : "Constant",
    "type" : "java.lang.String",
    "value" : "Database Model Collections"
  }, {
    "id" : "Operator",
    "type" : "java.lang.String",
    "value" : "="
  } ],
  "pluginType" : "Precondition"
}
*/
