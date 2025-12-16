/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "I0401_Node_Handler",
  "type" : "BusinessAction",
  "setupGroups" : [ "Outbound_Integration_Rules" ],
  "name" : "I0401_Node_Handler_Journals",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "Integrations_Utility_Library",
    "libraryAlias" : "utilityLib"
  } ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "OutboundBusinessProcessorNodeHandlerSourceBindContract",
    "alias" : "nodeHandlerSource",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "OutboundBusinessProcessorNodeHandlerResultBindContract",
    "alias" : "nodeHandlerResult",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "OutboundBusinessProcessorExecutionReportLoggerBindContract",
    "alias" : "executionReportLogger",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (nodeHandlerSource,nodeHandlerResult,executionReportLogger,manager,utilityLib) {
/*----------------------------M-O-D-I-F-I-C-A-T-I-O-N----------L-O-G---------------------------------------------------
==============================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
==============================================================================================================================================================================
10July2025   Venkata Siva Harish Mattaparthi  HAR01      RPDM-10604    Add 3 new editorial contact types to journal JSON                                                                     

==============================================================================================================================================================================
Purpose of Business Rule: To build the json message from the journal node.
==============================================================================================================================================================================
*/
var simpleEventType = nodeHandlerSource.getSimpleEventType();
var referenceTypesToInclude = []; //comma separated strings
var classificationRefTypes = ["ProductToSubjectHierarchyLink"];
//var productReferenceTypes = ["JOURNAL_TO_JOURNAL_TRANSITION","Journal_to_Backfile_Reference","Journal_History_Reference","AssociateManagingEditor","CATContact","CompEditorialEvaluationTeamLead","CorporateProductsLead","EditorialDirector","EditorInChief","InternalAdvertisingContact","JournalOperationsAssistant","JournalPublishingManager","ManagingEditor","MarketingManager","MarketingPortfolioLead","MembershipSpecialist","PartnerPublishingDirector","PartnerPublishingLead","PartnerPublishingManager","PartnerSolutionsDirector","PeerReviewPerformanceDirector","PeerReviewPerformanceLead","PeerReviewPerformanceManager","ProductionEditor","ProductionManager","ProductToExternalDataPartnersRefLink","ProductToSocietyGroupReferenceLink","PublishingAssistant","PublishingDevelopmentDirector","PublishingDevelopmentLead","PublishingDevelopmentManager","PublishingDirector","PublishingVP","SeniorProductionManager","StrategicContentAcquisitionLead","StrategicContentAcquisitionManager"];//HAR01
var productReferenceTypes = ["JOURNAL_TO_JOURNAL_TRANSITION","Journal_to_Backfile_Reference","Journal_History_Reference","AssociateManagingEditor","CATContact","CompEditorialEvaluationTeamLead","CorporateProductsLead","EditorialDirector","EditorInChief","InternalAdvertisingContact","JournalOperationsAssistant","JournalPublishingManager","ManagingEditor","MarketingManager","MarketingPortfolioLead","MembershipSpecialist","PartnerPublishingDirector","PartnerPublishingLead","PartnerPublishingManager","PartnerSolutionsDirector","PeerReviewPerformanceDirector","PeerReviewPerformanceLead","PeerReviewPerformanceManager","ProductionEditor","ProductionManager","ProductToExternalDataPartnersRefLink","ProductToSocietyGroupReferenceLink","PublishingAssistant","PublishingDevelopmentDirector","PublishingDevelopmentLead","PublishingDevelopmentManager","PublishingDirector","PublishingVP","SeniorProductionManager","StrategicContentAcquisitionLead","StrategicContentAcquisitionManager","EditorialOfficeCoordinator","In-houseEditorialAssistant","PeerReviewDeskLead"]; //HAR01

if (simpleEventType == null) {
  executionReportLogger.logInfo("No event information available in node handler");
} else {
  executionReportLogger.logInfo("Event with ID '" + simpleEventType.getID()+ "' passed to node handler");
}
var node = nodeHandlerSource.getNode();
if (node != null && node instanceof com.stibo.core.domain.Product) {
  executionReportLogger.logInfo("Node handler handling product with URL: " + node.getURL());
  var mesg = {};
  mesg.stepid = node.getID() + "";
  if (nodeHandlerSource.isDeleted()) {
    nodeHandlerResult.addMessage("deletes", JSON.stringify(mesg));	
  } else {
  	// Get basic node details
  	var mesg = utilityLib.initialNodeJSON(node);	

  	// Add local attributes to JSON String
  	var values = utilityLib.getAllValuesAsJSON(node,manager,null);  	  
	mesg.values = values;

	//Get Child Objects for the Parent node
	mesg.children = utilityLib.getChildObjects(node,manager);
	
	// Add node references to the JSON String
	mesg.references=utilityLib.getReferencesAsJSON(node, productReferenceTypes, true, null, manager);
	
	//Add Alternate Hierarhy reference info to the JSON String
	mesg.classificationRef=utilityLib.getClassificationRefAsJSON(node, classificationRefTypes, true);

	mesg.containers=utilityLib.getDataContainers(node);
     var dirtyJson = JSON.stringify(mesg,null,2);
     var cleanJson = parseHTMLtoJSON(dirtyJson);
	nodeHandlerResult.addMessage("updates",cleanJson);
  }
}
function parseHTMLtoJSON(htmlString) {
    htmlString = htmlString.replace("<gt/>", ">")
    htmlString = htmlString.replace("<lt/>", "<")
    htmlString = htmlString.replace("&amp;", "&")
    return htmlString;
    
}
}