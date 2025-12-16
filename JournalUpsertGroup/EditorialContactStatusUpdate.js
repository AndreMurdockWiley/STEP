/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "EditorialContactStatusUpdate",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalUpsertGroup" ],
  "name" : "Editorial Contact Status Update",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : true,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "ManagerBindContract",
    "alias" : "mgr",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "logger",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (mgr,node,logger) {
var currentDate = new Date();

var takeReferenceID = ["CompEditorialEvaluationTeamLead","CorporateProductsLead","MarketingManager","MarketingPortfolioLead","MembershipSpecialist","PartnerPublishingDirector","PartnerPublishingLead","PartnerPublishingManager","PartnerSolutionsDirector","PeerReviewPerformanceDirector","PeerReviewPerformanceLead","PeerReviewPerformanceManager","ProductionEditor","ProductionManager","PublishingDevelopmentDirector","PublishingDevelopmentLead","PublishingDevelopmentManager","PublishingVP","StrategicContentAcquisitionLead","StrategicContentAcquisitionManager","SeniorProductionManager"];
			for(var o = 0;o <takeReferenceID.length;o++ ){
				var sourceRefType = mgr.getReferenceTypeHome().getReferenceTypeByID(takeReferenceID[o]);
				var sourceRefs = node.getReferences(sourceRefType);
				for(var p=0; p<sourceRefs.size(); p++){
					var sourceRef = sourceRefs.get(p);
					var sourceRefTarget = sourceRefs.get(p).getTarget();
					//logger.info(sourceRefTarget);
					var status = sourceRefTarget.getValue("EditorialContactStatus").getSimpleValue();
				    //logger.info(status);
				    var oldStatus = sourceRefTarget.getValue("EditorialContactStatusBackend").getSimpleValue();
				    //logger.info(oldStatus);
				    if(status != oldStatus){
				    	logger.info("Change");
				    	var refLists = sourceRefTarget.queryReferencedBy(sourceRefType).asList(100000);
					for(var q = 0;q <refLists.size();q++ ){
					var source = refLists.get(q).getSource();
					source.getValue("EditorialContactStatusChangedDate").setSimpleValue(currentDate);
					}
				    	sourceRefTarget.getValue("EditorialContactStatusBackend").setSimpleValue(status);
				    }
				   
} 			   
}


}
/*===== business rule plugin definition =====
{
  "pluginId" : "AttributeComparatorCondition",
  "parameters" : [ {
    "id" : "Attribute1",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "JournalMMPackageID"
  }, {
    "id" : "Attribute2",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : null
  }, {
    "id" : "Constant",
    "type" : "java.lang.String",
    "value" : ""
  }, {
    "id" : "Operator",
    "type" : "java.lang.String",
    "value" : "<>"
  } ],
  "pluginType" : "Precondition"
}
*/

/*===== business rule plugin definition =====
{
  "pluginId" : "AttributeComparatorCondition",
  "parameters" : [ {
    "id" : "Attribute1",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "ProductActivated"
  }, {
    "id" : "Attribute2",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : null
  }, {
    "id" : "Constant",
    "type" : "java.lang.String",
    "value" : "Activated"
  }, {
    "id" : "Operator",
    "type" : "java.lang.String",
    "value" : "="
  } ],
  "pluginType" : "Precondition"
}
*/
