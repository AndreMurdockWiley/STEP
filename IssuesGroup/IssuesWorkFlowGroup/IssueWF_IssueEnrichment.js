/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "IssueWF_IssueEnrichment",
  "type" : "BusinessAction",
  "setupGroups" : [ "IssuesWorkFlowGroup" ],
  "name" : "Issue WF Issue Enrichment",
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
  "pluginId" : "ReferenceOtherBABusinessAction",
  "parameters" : [ {
    "id" : "ReferencedBA",
    "type" : "com.stibo.core.domain.businessrule.BusinessAction",
    "value" : "IssueAttributesOnSaveGeneration"
  } ],
  "pluginType" : "Operation"
}
*/
