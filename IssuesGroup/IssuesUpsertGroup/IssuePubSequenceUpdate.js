/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "IssuePubSequenceUpdate",
  "type" : "BusinessAction",
  "setupGroups" : [ "IssuesUpsertGroup" ],
  "name" : "Issue Pub Sequence Update",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "Group Issue Functions",
    "libraryAlias" : "link"
  }, {
    "libraryId" : "Approve_And_Send_Object",
    "libraryAlias" : "myFunc"
  }, {
    "libraryId" : "IssueFunctions",
    "libraryAlias" : "issueLibrary"
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
    "alias" : "pubSequence",
    "parameterClass" : "com.stibo.core.domain.businessrule.attributecontextparameter.AttributeValidatedContextParameter",
    "value" : "<AttributeValidatedContextParameter>\n  <Parameters>\n    <Parameter ID=\"Attribute\" Type=\"java.lang.String\">IssuePubSequence</Parameter>\n    <Parameter ID=\"ID\" Type=\"java.lang.String\">Pub Sequence</Parameter>\n  </Parameters>\n</AttributeValidatedContextParameter>",
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "log",
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
exports.operation0 = function (UI,pubSequence,log,manager,groupIssueOIEPkafka,groupIssueOIEP,link,myFunc,issueLibrary) {
function sendSiblingsDownstream(issueArray) {
    issueArray.forEach(siblingIssue => {
        link.setGroupIssueState(siblingIssue, manager, log);
        link.createAndUpdateGroupIssues(siblingIssue, manager, log, groupIssueOIEPkafka, groupIssueOIEP);
        myFunc.approveAndTriggerObj(siblingIssue, manager, log);
    });
}
// Main execution
var issue = UI.getSelection().get(0);
var prevSeq = issue.getValue("IssuePubSequence").getSimpleValue();

if (prevSeq == null || prevSeq == "" || prevSeq == 0) {
    prevSeq = 99999999;
}
issue.getValue("IssuePubSequence").setSimpleValue(pubSequence);
var issueArray = issueLibrary.issueRePubSequence(issue, prevSeq);
//issueLibrary.issueRePubSequence(issue, prevSeq);
link.setGroupIssueState(issue, manager, log);
link.createAndUpdateGroupIssues(issue, manager, log, groupIssueOIEPkafka, groupIssueOIEP);
myFunc.approveAndTriggerObj(issue, manager, log);

// Send the selected issue and its siblings downstream
sendSiblingsDownstream(issueArray);

}