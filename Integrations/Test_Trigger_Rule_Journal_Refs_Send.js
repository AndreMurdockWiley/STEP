/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Test_Trigger_Rule_Journal_Refs_Send",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "Test Trigger Rule Journal Refs Send",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : true,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "Approve_And_Send_Object",
    "libraryAlias" : "myFunc"
  } ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "ReferenceOtherBABusinessAction",
  "parameters" : [ {
    "id" : "ReferencedBA",
    "type" : "com.stibo.core.domain.businessrule.BusinessAction",
    "value" : "BA_ValidateHistoryOrigin"
  } ],
  "pluginType" : "Operation"
}
*/

/*===== business rule plugin definition =====
{
  "pluginId" : "ReferenceOtherBABusinessAction",
  "parameters" : [ {
    "id" : "ReferencedBA",
    "type" : "com.stibo.core.domain.businessrule.BusinessAction",
    "value" : "BA_CreateLink"
  } ],
  "pluginType" : "Operation"
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
    "contract" : "ReferenceTypeBindContract",
    "alias" : "sourceRefType",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "Journal_History_Reference",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "journalData",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Journal_Data_Extract",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "journalDataKafka",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Journal_Data_Extract_Kafka",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "journalDataStrategic",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Journal_Data_Extract_Kafka_Testing",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "journalHistoryKafka",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=History_Data_Extract_Kafka",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "journalHistory",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=History_Data_Extract",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation2 = function (node,log,manager,sourceRefType,journalData,journalDataKafka,journalDataStrategic,journalHistoryKafka,journalHistory,myFunc) {
function updateIssueTempCreation(node,manager){
	var objType = node.getObjectType().getID();
	log.info("1");
	if(objType == "Journal"){
		var linkedCostCenter ="";
		var appLinkedCostCenter ="";
		var appPrdTitle = "";
		var prdTitle = node.getValue("ProductTitle").getSimpleValue();
		log.info("2");
		var linkType = manager.getLinkTypeHome().getClassificationProductLinkTypeByID("ProductToCostCenterReferenceLink");
		var classificationLinks = node.getClassificationProductLinks().get(linkType);
		log.info("3");
		for(var cnt=0; cnt <classificationLinks.size(); cnt++){
			
			var classLink = classificationLinks.get(cnt);
			log.info("5");
			if(classLink.getLinkType().getID() == "ProductToCostCenterReferenceLink"){
				log.info("4");
				linkedCostCenter = classLink.getClassification().getID();
			}
			
		}
		log.info("1");
		
		manager.executeInWorkspace("Approved",function(approveManager){
			var appProd = approveManager.getProductHome().getProductByID(node.getID());
			appPrdTitle = appProd.getValue("ProductTitle").getSimpleValue();
			var linkType = approveManager.getLinkTypeHome().getClassificationProductLinkTypeByID("ProductToCostCenterReferenceLink");
			var appClassificationLinks = appProd.getClassificationProductLinks().get(linkType);
			for(var cnt=0; cnt <appClassificationLinks.size(); cnt++){
							
				var classLink = appClassificationLinks.get(cnt);
				if(classLink.getLinkType().getID() == "ProductToCostCenterReferenceLink"){
					appLinkedCostCenter = classLink.getClassification().getID();
				}				
			}
			
		});
		
		if(linkedCostCenter != appLinkedCostCenter || prdTitle != appPrdTitle ){
			node.getValue("JournalIssueTemplateCreation").setSimpleValue("true")
			node.getValue("MessageStatus").setSimpleValue("CREATE")
			
		}
		else{
			node.getValue("JournalIssueTemplateCreation").setSimpleValue("false");
			node.getValue("MessageStatus").setSimpleValue("UPDATE")
		}
		node.approve();
	}
	
	
}
log.info("TEST RUN TRIGGER: \n" + myFunc.approveAndTriggerObj(node,manager,log)); //"true" for if this is a create for the first time process, not an update process
//UI.showAlert("ACKNOWLEDGMENT", "Record sent downstream!");


updateIssueTempCreation(node,manager);

/*var objType = node.getObjectType().getID();
log.info(objType);
if(objType == "JournalHistoryProducts"){
	//journalHistory.republish(node);
	//journalHistoryKafka.republish(node);
	var refLists = node.queryReferencedBy(sourceRefType).asList(100000);
	log.info(refLists);
	for(var q = 0;q <refLists.size();q++ ){
		var source = refLists.get(q).getSource();
		log.info(source);
		
		journalData.republish(source);
		journalDataKafka.republish(source);
		journalDataStrategic.republish(source);
		
	}
}*/
}
/*===== business rule plugin definition =====
{
  "pluginId" : "ReferenceOtherBABusinessAction",
  "parameters" : [ {
    "id" : "ReferencedBA",
    "type" : "com.stibo.core.domain.businessrule.BusinessAction",
    "value" : "BA_GroupIssuesToClassification"
  } ],
  "pluginType" : "Operation"
}
*/
