/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CollectionReferenceMaximumCheck",
  "type" : "BusinessAction",
  "setupGroups" : [ "OtherProductCollectionRules" ],
  "name" : "CollectionReferenceMaximumCheck",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "OtherProductCollectionOffering", "JournalCollectionsOffering" ],
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
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "log",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "web",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,log,manager,web) {
/*----------------------------M-O-D-I-F-I-C-A-T-I-O-N----------L-O-G---------------------------------------------------
==============================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
==============================================================================================================================================================================
27Mar2025    Miruthula S                                 RPDM-9759    Initial Creation                                                                     
26May2025    Venkata Siva Harish Mattaparthi   HAR01     RPDM-10180   Reference type for static access collections changed, because now they need to have journal components also.                                                                
==============================================================================================================================================================================
Purpose of Business Rule: To show alert if the number of references in a collection is more than 13500. Thereby preventing Sending Collection Events that are too Large.
*/
var objectTypeID = node.getObjectType().getID();

if (objectTypeID == "OtherProductCollectionOffering") {
    //var collectionRefs = manager.getReferenceTypeHome().getReferenceTypeByID('OtherProdCollectionToOtherProdReference');  //HAR01
    var refName = "";  //HAR01
    var collectionCategory = node.getValue('CollectionCategory').getID(); //HAR01
    if (collectionCategory == "CCAC") {    //HAR01
        refName = "StaticAccColl_To_Journal_OtherProd_Ref";  //HAR01
    } else {  //HAR01
        refName = "OtherProdCollectionToOtherProdReference";  //HAR01
    } //HAR01
    var collectionRefs = manager.getReferenceTypeHome().getReferenceTypeByID(refName);  //HAR01

    var collectionRefsObj = node.queryReferences(collectionRefs);
    var collectionRefsCount = 0;
    collectionRefsObj.forEach(function (refs) {
        collectionRefsCount++;
        return true;
    });
log.info("collectionRefsCount : "+ collectionRefsCount);;
if(collectionRefsCount>13500)
{
	log.info("References are more than 13500");
	web.showAlert("ERROR","Large File Size Alert","The file is too large and cannot be processed. To proceed, please reach out to the Stibo MDM Team for assistance");
}
else
{
	log.info("References are less than 13500");
	web.showAlert("ACKNOWLEDGEMENT","Success Message","This collection successfully pushed to downstream systems");
}
}

else if(objectTypeID == "JournalCollectionsOffering")
{
var journalCollectionRefs =  manager.getReferenceTypeHome().getReferenceTypeByID('COLLECTIONS_TO_JOURNALS');
var journalCollectionRefsObj = node.queryReferences(journalCollectionRefs);
var journalCollectionRefsCount=0;
journalCollectionRefsObj.forEach(function (refs) {
        journalCollectionRefsCount++;
        return true;
    });
log.info("journalCollectionRefsCount : "+ journalCollectionRefsCount);;
if(journalCollectionRefsCount>13500)
{
	log.info("References are more than 13500");
	web.showAlert("ERROR","Large File Size Alert","The file is too large and cannot be processed. To proceed, please reach out to the Stibo MDM Team for assistance");
}
else
{
	log.info("References are less than 13500");
	web.showAlert("ACKNOWLEDGEMENT","Success Message","This collection successfully pushed to downstream systems");
}
}
else
{
	log.info("Not applicable for this object");
}
}