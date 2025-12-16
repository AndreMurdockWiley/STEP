/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PartnerJournalSaveAction",
  "type" : "BusinessAction",
  "setupGroups" : [ "PartnerJournalsGroup" ],
  "name" : "PartnerJournalSaveAction",
  "description" : "This business action is triggered, when save button is clicked on web ui for partner products",
  "scope" : "Global",
  "validObjectTypes" : [ "PartnerJournal" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "LoggerBindContract",
    "alias" : "log",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "mgr",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (log,mgr,node) {
/*----------------------------M-O-D-I-F-I-C-A-T-I-O-N----------L-O-G---------------------------------------------------
===============================================================================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
===============================================================================================================================================================================================================================
2April2025    Venkata Siva Harish Mattaparthi   HAR01     RPDM-9844    Initial Creation
                                                                
===============================================================================================================================================================================================================================
Purpose: All the actions that need to be performed upon saving Partner Journal are taken care in this business action.
*/

//product_activated is set to 'Activated' only, when all these attributes have value:
//Title, eISSN, Revenue Model, Journal Status, Homepage, Author Guidelines
var title = node.getName();
var eISSN = node.getValue("ProductEISSN").getSimpleValue();
var pISSN = node.getValue("ProductPISSN").getSimpleValue();
var revenue_model = node.getValue("ProductRevenueModel").getSimpleValue();
var journal_status = node.getValue("JournalStatus").getSimpleValue();
var homepage = node.getValue("ProductUrl").getSimpleValue();
var author_guidelines = node.getValue("JournalUrlAuthorGuidelinesLink").getSimpleValue();


if ((title!= null && title != "") && ((eISSN != null && eISSN != "") || (pISSN != null && pISSN != "")) && (revenue_model != null && revenue_model != "") && (journal_status != null && journal_status != "") && (homepage != null && homepage != "") && (author_guidelines != null && author_guidelines != "")) {
	node.getValue("ProductActivated").setSimpleValue("Activated");
} 
else {
	node.getValue("ProductActivated").setValue("In Progress");
	}


}