/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PopulateAvailableForSaleAlert",
  "type" : "BusinessAction",
  "setupGroups" : [ "BackfilesUpsertGroup" ],
  "name" : "PopulateAvailableForSaleAlert",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Backfiles" ],
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
var JournalBackfileAvailForSale = node.getValue("JournalBackfileAvailForSale").getSimpleValue(); 
if(JournalBackfileAvailForSale){
	if(JournalBackfileAvailForSale=='y' || JournalBackfileAvailForSale=='Y'){
		node.getValue("JournalBackfileAvailForSale").setSimpleValue("Y"); 
	}else if(JournalBackfileAvailForSale=='n'|| JournalBackfileAvailForSale=='N'){
		node.getValue("JournalBackfileAvailForSale").setSimpleValue("N");
	}else{
		showMessage = true;
	}
}
if(showMessage){
	UI.showAlert("WARNING", "Backfile Available for Sale should be either 'Y' or 'N' or 'Blank'");
}
else {
var mySel = UI.getSelection();
UI.showAlert("ACKNOWLEDGMENT", "Backfile successfully saved!");
}

}