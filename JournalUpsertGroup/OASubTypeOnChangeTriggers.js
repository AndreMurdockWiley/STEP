/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "OASubTypeOnChangeTriggers",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalUpsertGroup" ],
  "name" : "OA Sub Type On Change Triggers",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : true,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "GenericFunctions",
    "libraryAlias" : "genericFunctions"
  } ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "ListOfValuesBindContract",
    "alias" : "JNSREVNMDLLOV",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "JNSREVNMDL_LOV",
    "description" : null
  }, {
    "contract" : "ListOfValuesBindContract",
    "alias" : "JRNLSTATUSLOV",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "JRNLSTATUS_LOV",
    "description" : null
  }, {
    "contract" : "ListOfValuesBindContract",
    "alias" : "ISMPUBLTYPLOV",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "ISMPUBLTYP_LOV",
    "description" : null
  }, {
    "contract" : "ListOfValuesBindContract",
    "alias" : "BundleCodeLOV",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "BundleCode_LOV",
    "description" : null
  }, {
    "contract" : "ListOfValuesBindContract",
    "alias" : "YesNoLOV",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "YESNO_LOV",
    "description" : null
  }, {
    "contract" : "ListOfValuesBindContract",
    "alias" : "BundleGroupLOV",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "Bundle_Group_LOV",
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ListOfValuesBindContract",
    "alias" : "SubscriptionTypeLOV",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "OMBNREP_LOV",
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
exports.operation0 = function (JNSREVNMDLLOV,JRNLSTATUSLOV,ISMPUBLTYPLOV,BundleCodeLOV,YesNoLOV,BundleGroupLOV,LOG,NODE,SubscriptionTypeLOV,manager,genericFunctions) {
/*----------------------------M-O-D-I-F-I-C-A-T-I-O-N----------L-O-G---------------------------------------------------
==============================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |                              Description
==============================================================================================================================================================================
24Dec2024    Arunpragash                      Arun       Issue Related to cannot find Function     Sometimes user facing cannot find Function approve in Object function(ele..)
                                                                                                   While executing nodesToPartialApprove[count].approve(partObjectSet); 
8Sep2025    Venkata Siva Harish Mattaparthi    HAR01     RPDM-10962   Suppress Deprecated Attributes from journal restapiv2. Deprecated attribute 'JournalUrlOpenAccessContent' to be removed from this business action.

==============================================================================================================================================================================
*/
var journalMediaType = NODE.getValue("ProductMediaType").getSimpleValue();
var simpleDateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd");
var rebillingEffectiveEndDate = new Date(new Date().getFullYear() + 1, 11, 31);
var journalMediaChildren = NODE.getChildren().toArray();
var productStatus = "";
var journalDataContainerType = "";
var newJournalDataContainer1 = "";
var journalDigitalDataContainerType = "";
var newJournalDigitalDataContainer1 = "";
var newJournalDigitalDataContainer2 = "";
var dataContainers = "";
var foundDataContainerWOAI = false;
var iter = "";
var previousRenewalSubscriptionType = "";
var previousRevenueModel = "";
var newRenewalSubscriptionType = NODE.getValue("ProductRenewalSubscriptionType").getSimpleValue();
var productActivated = NODE.getValue("ProductActivated").getSimpleValue();
var nodesToPartialApprove =[];
var nullValue = "";

if(productActivated == "Activated"){
	
	for(var i = 0; i < journalMediaChildren.length; i++){
		if (journalMediaChildren[i].getValue("JournalMediaCode").getSimpleValue() != "Print"){
			previousRenewalSubscriptionType = journalMediaChildren[i].getValue("PreviousRenewalSubscriptionType").getSimpleValue();
			previousRevenueModel = journalMediaChildren[i].getValue("PreviousRevenueModel").getSimpleValue();
			
			/*if(newRenewalSubscriptionType != "Open Access" && ((previousRenewalSubscriptionType != "" && previousRenewalSubscriptionType != null) || previousRenewalSubscriptionType != "Open Access")){
				journalMediaChildren[i].getValue("PreviousRenewalSubscriptionType").setSimpleValue(newRenewalSubscriptionType);
			}*/
			
			if(newRenewalSubscriptionType == "Open Access"){
				manager.executeInWorkspace("Approved",function(appManager) {
					var appNode = appManager.getProductHome().getProductByID(NODE.getID());
					if(appNode != null){
						var appNewRenewalSubscriptionType = appNode.getValue("ProductRenewalSubscriptionType").getSimpleValue();
						if( appNewRenewalSubscriptionType!= "Open Access"){
							journalMediaChildren[i].getValue("PreviousRenewalSubscriptionType").setSimpleValue(appNewRenewalSubscriptionType);
						}
					}
					else{
						journalMediaChildren[i].getValue("PreviousRenewalSubscriptionType").setSimpleValue(null);
					}
				});
				nodesToPartialApprove.push(journalMediaChildren[i]);
			}
			
			
			break;
		}
	}	

	if(newRenewalSubscriptionType == "Open Access"){	
		for(var i = 0; i < journalMediaChildren.length; i++){
			if (journalMediaChildren[i].getValue("JournalMediaCode").getSimpleValue() == "Electronic"){
				journalMediaChildren[i].getValue("PreviousJournalLastPubYear").setSimpleValue( journalMediaChildren[i].getValue("JournalLastPubYear").getSimpleValue());
				journalMediaChildren[i].getValue("PreviousLastPQContractYear").setSimpleValue(journalMediaChildren[i].getValue("JournalLastPriceQuoteContractYear").getSimpleValue());
				
				var appNode = "";
				manager.executeInWorkspace("Approved",function(appManager) {
					appNode = appManager.getProductHome().getProductByID(NODE.getID());
					if(appNode != null ){
						var appNewRevenModel = appNode.getValue("ProductRevenueModel").getSimpleValue();
						if(appNewRevenModel != "OA"){
							journalMediaChildren[i].getValue("PreviousRevenueModel").setSimpleValue(appNewRevenModel);
							nodesToPartialApprove.push(journalMediaChildren[i]);
						}
						
						if(appNode.getValue("ProductRenewalSubscriptionType").getSimpleValue()!="Open Access"){
							journalMediaChildren[i].getValue("PreviousPublicationType").setSimpleValue(journalMediaChildren[i].getValue("ProductFinancePublicationType").getSimpleValue());
							journalMediaChildren[i].getValue("JournalMediaRebillingEffectEndDate").setSimpleValue(simpleDateFormat.format(rebillingEffectiveEndDate));				
						}
					}
					else{
						journalMediaChildren[i].getValue("PreviousRevenueModel").setSimpleValue(null);
						nodesToPartialApprove.push(journalMediaChildren[i]);
					}
					
					
					
				});
				
				//journalMediaChildren[i].getValue("PreviousRevenueModel").setSimpleValue(NODE.getValue("ProductRevenueModel").getSimpleValue());
				
				
				journalDigitalDataContainerType = journalMediaChildren[i].getDataContainerByTypeID("BundleGroup_BundleCode_DataContainer");
				
				if(journalDigitalDataContainerType.getDataContainers().isEmpty() && appNode.getValue("ProductRenewalSubscriptionType").getSimpleValue()!="Open Access"){
					newJournalDigitalDataContainer2 = journalDigitalDataContainerType.addDataContainer().createDataContainerObject('');
					newJournalDigitalDataContainer2.getValue("ProductBundleCode").setSimpleValue("Journals Product group TP");
					newJournalDigitalDataContainer2.getValue("ProductBundleGroup").setSimpleValue("Renewal Paid");
					newJournalDigitalDataContainer2.getValue("ProductBundleSubscriptionType").setSimpleValue("Not Applicable");
				}
				
				//journalMediaChildren[i].getValue("ProductStatus").setSimpleValue(JRNLSTATUSLOV.getListOfValuesValueByID("P").getValue());	
				//journalMediaChildren[i].getValue("JournalWISPERSStatus").setSimpleValue(YesNoLOV.getListOfValuesValueByID("Y").getValue());
				journalMediaChildren[i].getValue("JournalOpenAccess").setSimpleValue(YesNoLOV.getListOfValuesValueByID("Y").getValue());
				journalMediaChildren[i].getValue("JournalOnlineOpen").setSimpleValue("N");
			} else {
				if(journalMediaType == "Both" && journalMediaChildren[i].getValue("ProductStatus").getSimpleValue() == "Current publication"){
					logger.info(journalMediaChildren[i].getValue("ProductStatus").getSimpleValue());
					//journalMediaChildren[i].getValue("ProductStatus").setSimpleValue(JRNLSTATUSLOV.getListOfValuesValueByID("O").getValue());
					//logger.info(journalMediaChildren[i].getValue("ProductStatus").getSimpleValue());
					productStatus = true;
				}
			}
			
			journalMediaChildren[i].getValue("ProductFinancePublicationType").setSimpleValue(ISMPUBLTYPLOV.getListOfValuesValueByID("JA").getValue());	
			
		}
		
		

		if (productStatus){
			for(var i = 0; i < journalMediaChildren.length; i++){
				if (journalMediaChildren[i].getValue("JournalMediaCode").getSimpleValue() != "Print"){
					journalMediaChildren[i].getValue("JournalTransferredToOnlineOnly").setSimpleValue(YesNoLOV.getListOfValuesValueByID("Y").getValue());
				}
			}
		}
		
		journalDataContainerType = NODE.getDataContainerByTypeID("BundleGroup_BundleCode_DataContainer");

		NODE.getValue("ProductRevenueModel").setSimpleValue(JNSREVNMDLLOV.getListOfValuesValueByID("OA").getValue());
		//NODE.getValue("JournalUrlOpenAccessContent").setSimpleValue("Open Access Title");  //HAR01
		NODE.getValue("JournalUrlOnlineOpenOrderFormLink").setSimpleValue(nullValue);
		
		//Checking the Data Container Bundle Code for JRNLT to remove RP from BUndle group 
		if(journalMediaType == "Online" || journalMediaType == "Both"){
			dataContainers = genericFunctions.getDataContainerObjects(NODE,"BundleGroup_BundleCode_DataContainer");
			iter = dataContainers.iterator();
			
			while (iter.hasNext()) {
				var dc = iter.next().getDataContainerObject();
				
				if (dc.getValue("ProductBundleCode").getSimpleValue() == "Journals Product group TP"){
						dc.getValue("ProductBundleGroup").setSimpleValue('');
				}
				if(dc.getValue("ProductBundleCode").getSimpleValue() == "Open Access Journals"){
					foundDataContainerWOAI = true;
				}
			}
			
			if(!foundDataContainerWOAI && appNode.getValue("ProductRenewalSubscriptionType").getSimpleValue()!="Open Access"){
				newJournalDataContainer1 = journalDataContainerType.addDataContainer().createDataContainerObject('');
				newJournalDataContainer1.getValue("ProductBundleCode").setSimpleValue(BundleCodeLOV.getListOfValuesValueByID("WOAI").getValue());
				newJournalDataContainer1.getValue("ProductBundleGroup").setSimpleValue(BundleGroupLOV.getListOfValuesValueByID("RP").getValue());
				newJournalDataContainer1.getValue("ProductBundleSubscriptionType").setSimpleValue(SubscriptionTypeLOV.getListOfValuesValueByID("N/A").getValue());
			}
		}
	}
	
	
	// Partial approve
	var attributeArray = ["PreviousRenewalSubscriptionType","PreviousRevenueModel","ProductRevenueModel","ProductRenewalSubscriptionType"];
	var partObjectSet = new java.util.HashSet();
	for(counter in attributeArray){
		var partObjectSet = new java.util.HashSet();
		var valuePartObject = new com.stibo.core.domain.partobject.ValuePartObject(attributeArray[counter]);
		partObjectSet.add(valuePartObject);
			  NODE.approve(partObjectSet);
		for(count in nodesToPartialApprove){
		nodesToPartialApprove[count].approve(partObjectSet);
		
		log.info(nodesToPartialApprove[count]);
		
	}
	}


}
}