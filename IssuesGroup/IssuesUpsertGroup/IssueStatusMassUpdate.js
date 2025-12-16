/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "IssueStatusMassUpdate",
  "type" : "BusinessAction",
  "setupGroups" : [ "IssuesUpsertGroup" ],
  "name" : "Issue Status Mass Update",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "Group Issue Functions",
    "libraryAlias" : "link"
  } ]
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
    "contract" : "AttributeValidatedContextParameterStringBinding",
    "alias" : "issueStatusId",
    "parameterClass" : "com.stibo.core.domain.businessrule.attributecontextparameter.AttributeValidatedContextParameter",
    "value" : "<AttributeValidatedContextParameter>\n  <Parameters>\n    <Parameter ID=\"Attribute\" Type=\"java.lang.String\">IssueStatus</Parameter>\n    <Parameter ID=\"ID\" Type=\"java.lang.String\">Issue Status</Parameter>\n  </Parameters>\n</AttributeValidatedContextParameter>",
    "description" : null
  }, {
    "contract" : "ListOfValuesBindContract",
    "alias" : "ISSUSTATUS_LOV",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "ISSUSTATUS_LOV",
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "mgr",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "groupIssueOIEPkafka",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Group_Issues_Data_Extract_Kafka",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "groupIssueOIEP",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Group_Issues_Data_Extract",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (UI,issueStatusId,ISSUSTATUS_LOV,mgr,groupIssueOIEPkafka,groupIssueOIEP,link) {
var uiSelection = UI.getSelection();
var issueStatus = ISSUSTATUS_LOV.getListOfValuesValueByID(issueStatusId).getValue();
var severity = "ACKNOWLEDGEMENT";
var headline = "Issue status succesfully updated!";
var body = "Issue(s) succesfully updated.";

for(var i=0; i < uiSelection.size(); i++) {
	uiSelection.get(i).getValue("IssueStatus").setSimpleValue(issueStatus);
	// Populate Group Issue Classification object on all types of Issues (Standard Issues, Merge Issues and Supplement)
	link.createAndUpdateGroupIssues(uiSelection.get(i), mgr, logger, groupIssueOIEPkafka, groupIssueOIEP)
}

UI.showAlert(severity, headline, body);
}