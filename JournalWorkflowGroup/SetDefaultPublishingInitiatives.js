/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "SetDefaultPublishingInitiatives",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalWorkflowGroup" ],
  "name" : "Set Default Publishing Initiatives",
  "description" : "Sets the Publishing Initiatives attributes values to default No in Journal creation workflow",
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
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
    "contract" : "ManagerBindContract",
    "alias" : "mgr",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,mgr) {
//Sets the default values for Publishing initiative fileds in Journal creation workflow
var attributeId = ["JournalOpenScienceBadges", "JournalRegisteredReports", "JournalAcceptsPreprints", "JournalIsOnAuthorea", "JournalIsOnPublons", "JournalCRediT", "JournalEmbeddedRichMedia", "JournalFreeFormat", "JournalCMEForReviewers", "JournalTransparentPeerReview", "JournalAcceptedArticles", "JournalImageScreening"]
for (i = 0; i < attributeId.length; i++) {
	var attr = attributeId[i];
	node.getValue(attr).setLOVValueByID("N");
}
node.getValue("JournalWileyEditingServices").setLOVValueByID("Y");
node.getValue("JournalEditorialDataPolicy").setLOVValueByID("ENC");
node.getValue("JournalEditorialORCIdRequirement").setLOVValueByID("NREQ"); 
}