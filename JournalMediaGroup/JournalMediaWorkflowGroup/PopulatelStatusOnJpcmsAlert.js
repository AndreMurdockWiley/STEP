/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PopulatelStatusOnJpcmsAlert",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalMediaWorkflowGroup" ],
  "name" : "PopulatelStatusOnJpcmsAlert",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "JournalDigitalMedia" ],
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
    "contract" : "WebUiContextBind",
    "alias" : "UI",
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
exports.operation0 = function (UI,node) {
/*----------------------------M-O-D-I-F-I-C-A-T-I-O-N----------L-O-G---------------------------------------------------
===============================================================================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
===============================================================================================================================================================================================================================
8Sep2025    Venkata Siva Harish Mattaparthi              RPDM-10962   Suppress Deprecated Attributes from journal restapiv2. Call to this business action from business action 'JournalMediaSaveAction' to be removed, because of attribute 'JournalStatusOnJpcms' being deprecated.                                            
                                                                
===============================================================================================================================================================================================================================

*/
var showMessage = false; 
var JournalStatusOnJpcms = node.getValue("JournalStatusOnJpcms").getSimpleValue(); 
if(JournalStatusOnJpcms){
	if(JournalStatusOnJpcms=='y' || JournalStatusOnJpcms=='Y'){
		node.getValue("JournalStatusOnJpcms").setSimpleValue("Y"); 
	}else if(JournalStatusOnJpcms=='n'|| JournalStatusOnJpcms=='N'){
		node.getValue("JournalStatusOnJpcms").setSimpleValue("N");
	}else{
		showMessage = true;
	}
}
if(showMessage){
	UI.showAlert("WARNING", "Available on JPCMS should be either 'Y' or 'N' or 'Blank'");
}
else {
	//UI.showAlert("ACKNOWLEDGMENT", "Saved!");
}

}