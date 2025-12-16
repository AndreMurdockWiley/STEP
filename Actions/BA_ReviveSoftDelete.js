/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_ReviveSoftDelete",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "Revive Soft Delete",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalHistoryProducts" ],
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
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "webUI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,webUI) {
function validateItemToInitiateDeleteObjectWF(node)
{
	var errorMsg="";
	if(node.isInWorkflow("JournalCreationWFV3Backup"))
	{
		errorMsg = node.getID()+" - Cannot initiate because object is in Journal Creation Workflow";
	}
	if(node.isInWorkflow("SoftDeleteWorkflow"))
	{
		errorMsg = ("".equals(errorMsg)) ? (node.getID()+" - Cannot initiate because object is in Soft Delete Workflow") : (errorMsg + "<br/>" + node.getID()+" - Cannot initiate because object is in Soft Delete Workflow");
	}
	if(node.isInWorkflow("ReviveSoftDeleteWorkflow"))
	{
		errorMsg = ("".equals(errorMsg)) ? (node.getID()+" - Cannot initiate because object is already in Revive Soft Delete Workflow") : (errorMsg + "<br/>" + node.getID()+" - Cannot initiate because object is already in Revive Soft Delete Workflow");
	}
	return errorMsg;
}

var successMsg ="";
var errorMsg = "";
var initiateItemWF = validateItemToInitiateDeleteObjectWF(node);
  
if("".equals(initiateItemWF))
{
	try
	{
        node.startWorkflowByID("ReviveSoftDeleteWorkflow","Initiate into Revive Soft Delete Workflow");
        successMsg = ("".equals(successMsg)) ? (node.getID()+" - Initiated object into Revive Soft Delete Workflow") : (successMsg + "<br/>" + node.getID()+" - Initiated object into Revive Soft Delete Workflow");
    }
	catch(e)
	{
        errorMsg = ("".equals(errorMsg)) ? (node.getID()+" - Unable to initiate object into Revive Soft Delete Workflow") : (errorMsg + "<br/>" + node.getID()+" - Unable to initiate object into Revive Soft Delete Workflow");
    }
}
else
{
	webUI.showAlert("ERROR",initiateItemWF);
}

 if(!"".equals(successMsg)&&!"".equals(errorMsg))
 {
 	webUI.showAlert("WARNING",successMsg+"<br/>"+errorMsg);
 }
 else if(!"".equals(successMsg))
 {
 	webUI.showAlert("INFO",successMsg);
 	webUI.navigate("homepage",node);
 }
 else if(!"".equals(errorMsg))
 {
 	webUI.showAlert("ERROR",errorMsg);
 }
}