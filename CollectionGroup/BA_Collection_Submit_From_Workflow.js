/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_Collection_Submit_From_Workflow",
  "type" : "BusinessAction",
  "setupGroups" : [ "CollectionsGroup" ],
  "name" : "Collection Submit from Workflow",
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
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "WebUiContextBind",
    "alias" : "webui",
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
    "contract" : "CurrentObjectBindContract",
    "alias" : "collObj",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "AttributeValidatedContextParameterStringBinding",
    "alias" : "message",
    "parameterClass" : "com.stibo.core.domain.businessrule.attributecontextparameter.AttributeValidatedContextParameter",
    "value" : "<AttributeValidatedContextParameter>\n  <Parameters>\n    <Parameter ID=\"Attribute\" Type=\"java.lang.String\">AT_SubmitMessage</Parameter>\n    <Parameter ID=\"ID\" Type=\"java.lang.String\">1</Parameter>\n  </Parameters>\n</AttributeValidatedContextParameter>",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (webui,manager,collObj,message) {
//var arrleng = ["98ff1467-efe2-434f-b9e3-8a4ecab919a7", "c28c2f0e-1c64-4bd8-93b8-cc2f62355f95"];
var errorColl = "";
var succeededObjs = "";
var errorDBColl = "";

var errorMessage = "COLLECTIONS TO JOURNAL REFERENCE is missing for below Collections. Please provide.";
var successMessage = "The Following collections are created. Click Send, to send downstream.";
var errorDBMessage = "Mandatory value(s) missing for below DataBase Collection(s). Please provide.";
var webUISelection = webui.getSelection();
for (var i = 0; i < webUISelection.size(); i++) {
    var collObj = webUISelection.get(i);
    
    log.info(webUISelection.size() + " " + collObj.getName());
    
    var workflowID = "CollectionCreationWF";
    var workStateID = "State-5";
    var taskEvent = "NextState";

    var workflow = manager.getWorkflowHome().getWorkflowByID(workflowID);
    var workState = workflow.getStateByID(workStateID);
    
    var inWorkflow = collObj.getWorkflowInstanceByID(workflowID);
    if (inWorkflow) {
        var task = collObj.getTask(workState);
        
        if (task) {
            var TaskEventResult = task.triggerByID(taskEvent, message);
            log.info("Task is triggered: " + TaskEventResult.isRejectedByScript());
            var scriptMsg = TaskEventResult.getScriptMessage();
            log.info(scriptMsg);
            var script = scriptMsg + "";  // Ensure script is a string
            
            // Match the expected error message
            var expectedMessage = 'Missing references for mandatory reference types : "COLLECTIONS TO JOURNAL REFERENCE".';
            if (TaskEventResult.isRejectedByScript()) {
                log.info(typeof(script));
                
                if (script === expectedMessage) {
                    log.info("pass if Script");
                    
                    if (webUISelection.size() === 1) {
                        webui.showAlert("ERROR", collObj.getName(), " COLLECTIONS TO JOURNAL REFERENCE is missing. Please provide.");
                    } else {
                        log.info("PASS: " + collObj.getName() + "\n");
                        errorColl += collObj.getName() + "\n";
                    }
                } else {
                    log.info("pass else script");
                    var searchTerms = ["Renewal Subscription Type", "SKU", "COLLECTIONS TO JOURNAL REFERENCE"];
                    var matchedValues = [];

                    // Check if any of the search terms are present in the message
                    for (var j = 0; j < searchTerms.length; j++) {
                        if (script.includes(searchTerms[j])) {
                            matchedValues.push(searchTerms[j]);
                        }
                    }

                    // Print the matched values if any were found
                    if (matchedValues.length > 0) {
                        var matchedValue = matchedValues.join(", ");
                    }
                    if (webUISelection.size() === 1) {
                        var msg = matchedValue + " is/are missing. Please provide.";
                        webui.showAlert("ERROR", collObj.getName(), msg);
                    } else {
                        log.info("PASS another mand msg: " + collObj.getName() + "\n");
                        var msg = matchedValue + " is/are missing. Please provide.";
                        errorDBColl += collObj.getName() + " - " + matchedValues.join(", ") + " is/are missing" + "\n";
                    }
                }
            } else {
                if (webUISelection.size() === 1) {
                    webui.showAlert("ACKNOWLEDGMENT", collObj.getName(), " collection created. Click Send, to send downstream.");
                } else {
                    log.info("PASS1: " + collObj.getName() + "\n");
                    succeededObjs += collObj.getName() + "\n";
                }
            }
        }
    }
}

log.info(errorColl);

if (webUISelection.size() !== 1) {
    if (errorColl !== "" && succeededObjs === "" && errorDBColl === "") {
        log.info("ERR1 : " + errorMessage + errorColl);
        webui.showAlert("WARNING", errorMessage, errorColl);
    } else if (errorColl === "" && errorDBColl === "" && succeededObjs !== "") {
        log.info("ERR2 : " + successMessage + succeededObjs);
        webui.showAlert("ACKNOWLEDGMENT", successMessage, succeededObjs);
    } else if (errorColl === "" && errorDBColl !== "" && succeededObjs === "") {
        log.info("ERR3 : " + errorDBMessage + errorDBColl);
        webui.showAlert("WARNING", errorDBMessage, errorDBColl);
    } else if (errorColl !== "" && succeededObjs !== "" && errorDBColl === "") {
        var erMsg = errorMessage + "\n" + errorColl;
        var sucMsg = successMessage + "\n" + succeededObjs;
        var combinedMsg = sucMsg + "\n" + erMsg;
        log.info("ERR4 : " + combinedMsg);
        webui.showAlert("WARNING", combinedMsg, ".");
    } else if (errorColl === "" && succeededObjs !== "" && errorDBColl !== "") {
        var sucMsg = successMessage + "\n" + succeededObjs;
        var erBDMsg = errorDBMessage + "\n" + errorDBColl;
        var combinedMsg = sucMsg + "\n" + erBDMsg;
        log.info("ERR5: " + combinedMsg);
        webui.showAlert("WARNING", combinedMsg, ".");
    } else if (errorColl !== "" && succeededObjs === "" && errorDBColl !== "") {
        var erMsg = errorMessage + "\n" + errorColl;
        var erBDMsg = errorDBMessage + "\n" + errorDBColl;
        var combinedMsg = erMsg + "\n" + erBDMsg;
        log.info("ERR6 : " + combinedMsg);
        webui.showAlert("WARNING", combinedMsg, ".");
    } else if (errorColl !== "" && succeededObjs !== "" && errorDBColl !== "") {
        var erMsg = errorMessage + "\n" + errorColl;
        var sucMsg = successMessage + "\n" + succeededObjs;
        var erBDMsg = errorDBMessage + "\n" + errorDBColl;
        var combinedMsg = sucMsg + "\n" + erMsg + "\n" + erBDMsg;
        log.info("ERR7 : " + combinedMsg);
        webui.showAlert("WARNING", combinedMsg, ".");
    }
}

}