/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PopulateNotPartOfSpecialProdAlert",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalMediaWorkflowGroup" ],
  "name" : "PopulateNotPartOfSpecialProdAlert",
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
var showMessage = false; 
var JournalNotPartOfSpecialProd = node.getValue("JournalNotPartOfSpecialProd").getSimpleValue(); 
if(JournalNotPartOfSpecialProd){
	if(JournalNotPartOfSpecialProd=='y' || JournalNotPartOfSpecialProd=='Y'){
		node.getValue("JournalNotPartOfSpecialProd").setSimpleValue("Y"); 
	}else if(JournalNotPartOfSpecialProd=='n'|| JournalNotPartOfSpecialProd=='N'){
		node.getValue("JournalNotPartOfSpecialProd").setSimpleValue("N");
	}else{
		showMessage = true;
	}
}
if(showMessage){
	UI.showAlert("WARNING", "Not part of Special Prod should be either 'Y' or 'N' or 'Blank'");
}
else {
	//UI.showAlert("ACKNOWLEDGMENT", "Saved!");
}

}