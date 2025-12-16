/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "ValidateIfStaticAccCollection",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Validate If Static Access Collection",
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
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "log",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,log) {
/*----------------------------M-O-D-I-F-I-C-A-T-I-O-N----------L-O-G---------------------------------------------------
===============================================================================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
===============================================================================================================================================================================================================================
                                                            
26May2025     Venkata Siva Harish Mattaparthi            RPDM-10180    Initial Creation                                                                         
===============================================================================================================================================================================================================================
Purpose: Reference type for static access collections changed, because now they need to have journal components also. 
This business condition will help us in determining if a collection is Static Access Collection.

*/
if (NODE.getValue("OtherProductCollectionType").getSimpleValue() == "Static" && NODE.getValue("CollectionCategory").getSimpleValue() == "Access" ) {
	return true;
}
return false;
}