/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PopulateAvailableOnOTISAlert",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalMediaWorkflowGroup" ],
  "name" : "PopulateAvailableOnOTISAlert",
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
8Sep2025    Venkata Siva Harish Mattaparthi              RPDM-10962   Suppress Deprecated Attributes from journal restapiv2. Call to this business action from business action 'JournalMediaSaveAction' to be removed, because of attribute 'JournalAvailableOnOtis' being deprecated.                                            
                                                                
===============================================================================================================================================================================================================================

*/
var showMessage = false; 
var JournalAvailableOnOtis = node.getValue("JournalAvailableOnOtis").getSimpleValue(); 
if(JournalAvailableOnOtis){
	if(JournalAvailableOnOtis=='y' || JournalAvailableOnOtis=='Y'){
		node.getValue("JournalAvailableOnOtis").setSimpleValue("Y"); 
	}else if(JournalAvailableOnOtis=='n'|| JournalAvailableOnOtis=='N'){
		node.getValue("JournalAvailableOnOtis").setSimpleValue("N");
	}else{
		showMessage = true;
	}
}
if(showMessage){
	UI.showAlert("WARNING", "Available On OTIS should be either 'Y' or 'N' or 'Blank'");
}
else {
	UI.showAlert("ACKNOWLEDGMENT", "Saved!");
}

}