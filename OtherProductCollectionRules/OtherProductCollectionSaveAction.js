/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "OtherProductCollectionSaveAction",
  "type" : "BusinessAction",
  "setupGroups" : [ "OtherProductCollectionRules" ],
  "name" : "Other Product Collection Save Action",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "OtherProductCollectionOffering" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "ReferenceOtherBABusinessAction",
  "parameters" : [ {
    "id" : "ReferencedBA",
    "type" : "com.stibo.core.domain.businessrule.BusinessAction",
    "value" : "BA_ValidateTextFields"
  } ],
  "pluginType" : "Operation"
}
*/

/*===== business rule plugin definition =====
{
  "pluginId" : "ReferenceOtherBABusinessAction",
  "parameters" : [ {
    "id" : "ReferencedBA",
    "type" : "com.stibo.core.domain.businessrule.BusinessAction",
    "value" : "BA_AutoClassOtherProdCollectionToArchive"
  } ],
  "pluginType" : "Operation"
}
*/

/*===== business rule plugin definition =====
{
  "pluginId" : "ReferenceOtherBABusinessAction",
  "parameters" : [ {
    "id" : "ReferencedBA",
    "type" : "com.stibo.core.domain.businessrule.BusinessAction",
    "value" : "BA_LinkModifiedCollectionComponents"
  } ],
  "pluginType" : "Operation"
}
*/
