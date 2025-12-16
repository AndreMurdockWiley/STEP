/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_InitiateDeleteObjectWorkflow",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "Initiate Delete Object Workflow",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
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
    "contract" : "ManagerBindContract",
    "alias" : "manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "logger",
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
exports.operation0 = function (node,manager,logger,webUI) {
function validateItemToInitiateDeleteObjectWF(node,manager){
	var errorMsg="";
var nodeObjectTypeId = node.getObjectType().getID();
	if("JournalHistoryProducts".equals(nodeObjectTypeId)){
		if(node.isInWorkflow("JournalCreationWFV3Backup")){
		errorMsg = ("".equals(errorMsg)) ? (node.getID()+" - Cannot initiate because its in Journal Creation Workflow") : (errorMsg + "<br/>" + node.getID()+" - Cannot initiate because its in Journal Creation Workflow");
	}
	else if(node.isInWorkflow("DeleteObjectWorkflow")){
		errorMsg = ("".equals(errorMsg)) ? (node.getID()+" - Cannot initiate because its already in Delete Object Workflow") : (errorMsg + "<br/>" + node.getID()+" - Cannot initiate because its already in Delete Object Workflow");
	}
  }
  return errorMsg;
}

  var successMsg ="";
  var errorMsg = "";

  var initiateItemWF = validateItemToInitiateDeleteObjectWF(node,manager);
  logger.info(initiateItemWF);
             if ("".equals(initiateItemWF)){
             	try{
             		node.startWorkflowByID("DeleteObjectWorkflow","Initiate in to DeleteObjectWorkflow");
             		successMsg = ("".equals(successMsg)) ? (node.getID()+" - Initiated product into Delete Object Workflow") : (successMsg + "<br/>" + node.getID()+" - Initiated product into Delete Object Workflow");
             	}catch(e){
             		errorMsg = ("".equals(errorMsg)) ? (node.getID()+" - Unable to initiate product into Delete Object Workflow") : (errorMsg + "<br/>" + node.getID()+" - Unable to initiate product into Delete Object Workflow");
             	}
             }else{
             	errorMsg = ("".equals(errorMsg))?(initiateItemWF) : (errorMsg + "<br/>" + initiateItemWF);
             }

             logger.info(errorMsg);
             logger.info(successMsg);

 if(!"".equals(successMsg)&&!"".equals(errorMsg)){
 	webUI.showAlert("WARNING",successMsg+"<br/>"+errorMsg);
 }
 else if(!"".equals(successMsg)){
 	webUI.showAlert("INFO",successMsg);
 	webUI.navigate("homepage",node);
 }
 else if(!"".equals(errorMsg)){
 	webUI.showAlert("ERROR",errorMsg);
 }


  


}