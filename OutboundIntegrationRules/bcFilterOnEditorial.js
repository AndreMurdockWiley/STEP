/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "bcFilterOnEditorial",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Outbound_Integration_Rules" ],
  "name" : "bcFilterOnEditorial",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "EditorialContact" ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessConditionWithBinds",
  "binds" : [ {
    "contract" : "ManagerBindContract",
    "alias" : "mgr",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "log",
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
    "contract" : "EntityBindContract",
    "alias" : "EditorialCodeRef",
    "parameterClass" : "com.stibo.core.domain.impl.entity.FrontEntityImpl$$Generated$$6",
    "value" : "Entities",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (mgr,log,node,EditorialCodeRef) {
var editorialEmail = node.getValue("EditorialContactEmail").getSimpleValue();
var editorialFirst = node.getValue("EditorialContactFirstName").getSimpleValue();
var editorialLast = node.getValue("EditorialContactLastName").getSimpleValue();
var parentID = node.getParent().getID();

var status = false;

log.info('EditorialCodeRef..' + EditorialCodeRef);

//log.info('journalGroupCodeDescription..' + journalGroupCodeDescription);
//if ((parentID.getID() == "JournalPublishingManager")) 
//if ((parentID == "JournalPublishingManager" || parentID == "JournalEditorialSeniorEditorialDirector" || parentID == "JournalEditorInChief" || parentID == "JournalInternalAdvertisingContact" ||  parentID == "JournalMarketingManager" || parentID == "JournalEditorialMembershipSpecialist" || parentID == "JournalProductionEditor" || parentID == "JournalEditorialProductionManager" || parentID == "JournalEditorialPublisher" || parentID == "JournalEditorialPublishingDirector")) {
//	logger.info("finished: the object is put in the queue");
//	logger.info("parentID" + parentID);
//	status = true;
//	if ((((node.getValue("EditorialContactEmail").getSimpleValue() == null) || (node.getValue("EditorialContactFirstName").getSimpleValue() == null) || (node.getValue("EditorialContactLastName").getSimpleValue() == null))))
	if (editorialEmail==null  || editorialFirst ==null || editorialLast ==null)
	{
		log.info('editorialEmail..' + editorialEmail);
		log.info('editorialEmail..' + editorialFirst);
		log.info('editorialEmail..' + editorialLast);
		

		return false;
	}
	if (parentID == "JournalAssociateManagingEditor" || parentID == "JournalOperationsAssistant" || parentID == "JournalManagingEditor" || parentID == "JournalCATContact" || parentID == "JournalMarketingPortfolioLead" ||
	parentID == "JournalCATContact" || parentID == "JournalEditorialSeniorEditorialDirector" || parentID == "JournalEditorInChief" || parentID == "JournalInternalAdvertisingContact" || parentID == "JournalManagingEditor"	|| parentID == "JournalEditorialPublisher"	||
	parentID == "JournalEditorialPublishingDirector" || parentID == "JournalCompEditorialEvaluationTeamLead" || parentID == "JournalMarketingPortfolioLead" || parentID == "JournalPartnerPublishingDirector" || parentID == "JournalPartnerPublishingManager" || 
	parentID == "JournalPartnerSolutionsDirector" || parentID == "JournalPeerReviewPerformanceDirector" || parentID == "JournalPeerReviewPerformanceLead" || parentID == "JournalPeerReviewPerformanceManager" || parentID == "JournalPublishingDevelopmentDirector" || parentID == "JournalPublishingDevelopmentManager" ||
	parentID == "JournalPublishingVP" || parentID == "JournalStrategicContentAcquisitionLead" ||  parentID == "JournalStratContentAcquisitionManager" ) {

 		return false;
	}
	
	
	//if (((node.getValue("EditorialContactEmail").getSimpleValue() != null) && (node.getValue("EditorialContactFirstName").getSimpleValue() != null && node.getValue("EditorialContactLastName").getSimpleValue() != null))) {
        if (editorialEmail != null && editorialFirst != null && editorialLast != null) {
        	//if (editorialEmail != "" && editorialFirst != "" && editorialLast != "") {
	     log.info('editorialEmail1..' + editorialEmail);
		log.info('editorialEmail2..' + editorialFirst);
		log.info('editorialEmail3..' + editorialLast);
	status = true;

	
	return true;
	//}
	}
//if (status == true) {
//return true;
//}
return false;





}