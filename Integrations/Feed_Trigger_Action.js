/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Feed_Trigger_Action",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "Feed Trigger Action",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : true,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "Approve_And_Send_Object",
    "libraryAlias" : "myFunc"
  }, {
    "libraryId" : "GenericFunctions",
    "libraryAlias" : "genericlib"
  } ]
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
exports.operation0 = function (node,log,manager,sourceRefType,journalData,journalDataKafka,journalDataStrategic,journalHistoryKafka,journalHistory,myFunc,genericlib) {
/*----------------------------M-O-D-I-F-I-C-A-T-I-O-N----------L-O-G---------------------------------------------------
===============================================================================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
===============================================================================================================================================================================================================================
11Feb2025    Venkata Siva Harish Mattaparthi   HAR01     RPDM-9132    Approve the list of removed components under the dynamic collection, so that approved workspace shows the removal of those components.                                                                
                                                                
===============================================================================================================================================================================================================================

*/
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

var objType = node.getObjectType().getID();
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
}

//HAR01 Start
logger.info("objType after triggerfunction"+objType);
if(objType == "OtherProductCollectionOffering" ) {
	var otherProductCollectionType = node.getValue('OtherProductCollectionType').getID();
	logger.info("otherProductCollectionType"+otherProductCollectionType);
	if (otherProductCollectionType == 'OPSPPR') {	
//Partial approve the removed components of dynamic collection from Main workspace. Thereby the components can be removed under the dynamic collection in approved workspace.
		var refType = manager.getReferenceTypeHome().getReferenceTypeByID('SPECPROD_TO_PRODS_REMOVE');
  		var REF_ARRAY = node.getReferences(refType).toArray();
  		logger.info("REF_ARRAY"+REF_ARRAY.length);
  		REF_ARRAY.forEach(function(element, index) {
  			var removedComp = element.getTarget();
      		myFunc.partialApproveProductLinkReference(removedComp,"SpecProd_To_Journal_OtherProd_Reference");
		});		
	

//Partial approve the existing components of dynamic collection
  		var REF_LIST = node.queryReferencedBy(refType).asList(100000);
  		logger.info("REF_LIST"+REF_LIST);
    		if (REF_LIST != 0) {
    			logger.info("REF_LIST"+REF_LIST.size());
    			for (var x = 0; x < REF_LIST.size(); x++) {
      			var componentNode = REF_LIST.get(x).getSource();
      			myFunc.partialApproveProductLinkReference(componentNode,"SpecProd_To_Journal_OtherProd_Reference");
    			}
  		}
	}
}  
  
//HAR01 End

}
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessConditionWithBinds",
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
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "log",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Precondition"
}
*/
exports.precondition0 = function (node,mgr,log,myFunc,genericlib) {
/*----------------------------M-O-D-I-F-I-C-A-T-I-O-N----------L-O-G---------------------------------------------------
==============================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
==============================================================================================================================================================================                                                                   
5June2025    Venkata Siva Harish Mattaparthi             RPDM-10180   Reference type for static access collections changed, because now they need to have journal components also.                                                                
==============================================================================================================================================================================
Purpose of Business Rule: To prevent modified collection components feed from being sent, if the number of references in a collection is more than 13500.
*/
var objectTypeID = node.getObjectType().getID();

if (objectTypeID == "OtherProductCollectionOffering") {
	var refName = "";  
	var collectionCategory = node.getValue('CollectionCategory').getID(); 
	if (collectionCategory == "CCAC") {    
		refName = "StaticAccColl_To_Journal_OtherProd_Ref";
    } else {  
		refName = "OtherProdCollectionToOtherProdReference";
    } 
	var collectionRefs = mgr.getReferenceTypeHome().getReferenceTypeByID(refName);  

	var collectionRefsObj = node.queryReferences(collectionRefs);
	var collectionRefsCount = 0;
	collectionRefsObj.forEach(function (refs) {
		collectionRefsCount++;
		return true;
    });
	log.info("collectionRefsCount : " + collectionRefsCount);;
	if (collectionRefsCount > 13500) {
		log.info("References are more than 13500");
		return false;
    }
	else {
		log.info("References are less than 13500");
		return true;
    }
}

else if (objectTypeID == "JournalCollectionsOffering") {
	var journalCollectionRefs = mgr.getReferenceTypeHome().getReferenceTypeByID('COLLECTIONS_TO_JOURNALS');
	var journalCollectionRefsObj = node.queryReferences(journalCollectionRefs);
	var journalCollectionRefsCount = 0;
	journalCollectionRefsObj.forEach(function (refs) {
		journalCollectionRefsCount++;
		return true;
    });
	log.info("journalCollectionRefsCount : " + journalCollectionRefsCount);;
	if (journalCollectionRefsCount > 13500) {
		log.info("References are more than 13500");
		return false;
    }
	else {
		log.info("References are less than 13500");
		return true;
    }
}
else {
	return true;
}
}