/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "ValidateIfNOTCochraneLibraryAndStaticAcc",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Validate If NOT Cochrane Library And Static Access Collection",
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
  "pluginId" : "JavaScriptBusinessConditionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE) {
/*----------------------------M-O-D-I-F-I-C-A-T-I-O-N----------L-O-G---------------------------------------------------
===============================================================================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
===============================================================================================================================================================================================================================
                                                            
26May2025     Venkata Siva Harish Mattaparthi            RPDM-10180    Initial Creation                                                                         
===============================================================================================================================================================================================================================
Purpose: Reference type for static access collections changed, because now they need to have journal components also. 
This business condition will help us in determining if a collection is neither a Cochrane Library nor a Static Access Collection.
This business condition is created to replace ‘ValidateIfNOTCochraneLibraryComponents’, so that Static Access collections can also be excluded from one of the existing Tab Pages (Other Product Collection Components) under screen (OtherProductCollectionNodeDetails).

*/
if (NODE.getValue("OtherProductCollectionSubType").getSimpleValue() == "Evidence Medicine" ||NODE.getValue("OtherProductCollectionType").getSimpleValue() == "Dynamic" ) {
	return false;
}
if (NODE.getValue("OtherProductCollectionType").getSimpleValue() == "Static" && NODE.getValue("CollectionCategory").getSimpleValue() == "Access" ) {
	return false;
}
return true;
}