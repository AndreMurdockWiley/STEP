/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "IssueAttributesOnSaveGeneration",
  "type" : "BusinessAction",
  "setupGroups" : [ "IssuesUpsertGroup" ],
  "name" : "Issue Attributes On-Save Generation",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalDigitalIssues", "JournalPrintIssues" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "IssueFunctions",
    "libraryAlias" : "issueLibrary"
  } ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "web",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,web,issueLibrary) {
var sapMatNo = NODE.getValue("IssueSAPMaterialNumber").getSimpleValue();
var issueType = NODE.getValue("IssueType").getSimpleValue();
var fromIssueNo = NODE.getValue("IssueFromIssueNumber").getSimpleValue();
var toIssueNo = NODE.getValue("IssueToIssueNumber").getSimpleValue();
var supplementNo = NODE.getValue("IssueSupplementNo").getSimpleValue();
var flag = false;

if (issueType == null || issueType == "") {
    web.showAlert("ERROR", "Please provide Issue Type to proceed further");
} else {
    if (issueType == "Standard Issue") {
        if (fromIssueNo == null || fromIssueNo == "") {
            web.showAlert("ERROR", "Please provide From Issue Number for Standard Issue to proceed further");            
        } else {
            flag = true;
        }
    } else if (issueType == "Merged Issue") {
        if ((fromIssueNo == null || fromIssueNo == "") && (toIssueNo == null || toIssueNo == "")) {
            web.showAlert("ERROR", "Please provide From Issue Number & To Issue Number for Merged Issue to proceed further");
        } else if ((fromIssueNo == null || fromIssueNo == "") && (toIssueNo != null || toIssueNo != "")) {
            web.showAlert("ERROR", "Please provide From Issue Number for Merged Issue to proceed further");
        } else if ((fromIssueNo != null || fromIssueNo != "") && (toIssueNo == null || toIssueNo == "")) {
            web.showAlert("ERROR", "Please provide To Issue Number for Merged Issue to proceed further");
        } else {
            flag = true;
        }
    } else if (issueType == "Supplement") {
        if (supplementNo == null || supplementNo == "") {
            web.showAlert("ERROR", "Please provide Supplement No for Supplement Issue to proceed further");
        } else {
            flag = true;
        }
    }
}
if (flag == true) {
    //Generate Issue Id, SAP Material Number and Issue Description if SAP Material No is empty
    if (sapMatNo == "" || sapMatNo == null) {
        issueLibrary.generateIssueUniqueAttributes(NODE);
    }
    
    //Update Issue Description with EMLO and Further Description
    issueLibrary.generateIssueDescription(NODE);

    if (!NODE.isInWorkflow("VolumeIssueCreationWF")) {
        //Initiating Issue into Enrichment WorkFlow
        NODE.startWorkflowByID("VolumeIssueCreationWF", null);
    }
    
    web.showAlert("INFO", "Issue Updated Successfully !!");
}
}