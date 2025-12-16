/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "isbn13_search_action",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "ISBN13 Search Action for API",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "OtherProducts" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
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
    "contract" : "GatewayBinding",
    "alias" : "myGateway",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.gateway.FrontGatewayIntegrationEndpointImpl",
    "value" : "Test_Janis_Gateway",
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
    "contract" : "AttributeBindContract",
    "alias" : "ISBN13",
    "parameterClass" : "com.stibo.core.domain.impl.AttributeImpl",
    "value" : "ProductIsbn13",
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
exports.operation0 = function (myGateway,log,node,ISBN13,manager,genericFunctions) {
  //var httpPost = myGateway.post();
  var skipJSONAttributes = ["DOI","ProductDoi","ContentStartDateCentury","ContentEndDateCentury", "AppearinWebCatalog",  "AvailableToOnlineAccts", "NotPartOfPPVAS", "NotPartOfSpecialProduct","Updateable","UpdateSchedule","OnesourceProductTaxCategoryLevel2", "Division", "ProductDownloadStatus", "PublicationType"];
  var lovJOSAnAttributes = ["SAPProfitCenter","SAPCostCenter","MediumCode","SubMediumCode","ContentCategory","IPOwnerSAPCompany","ProductGroup","ProductLine","Taxable","Imprint","ProductTypeCode", "ContentPublicationType", "EntitlementPlatform", "SendToWispers", "IPOwnerSAPCompany", "OnesourceProductTaxCategoryLevel1", "ProductFinanceEntitlementPlatform"];
  var dateJSONAttributes = ["ContentStartDate","ContentEndDate","PublicationDate"];
  
  logger.info('$$:Start: Common Business Action: Name = "ISBN13 Search" : ID = "isbn13 api search"');
  logger.info('$$:ID: ' + node.getID());
  logger.info('$$:Name: ' + node.getName());
  logger.info('$$:ISBN Key: ' + node.getValue(ISBN13.getID()).getSimpleValue());

  var httpGet = myGateway.get();
 //Commented Out API Token for Dev Apigee 08/05/2021 // 
 //httpGet.header("apitoken", "5LOuFKKQKBPFkMMvo6Bjj3UYRpNuA4rd"); 
 httpGet.header("apitoken", "rIJs1TtzWW3P66xxDQaqjcZwRCkbNPEX"); // API Token for QA
  httpGet.pathQuery({
      requestType: "ISBN13_SEARCH"
  });
  httpGet.pathQuery({
      application: "STIBO"
  });
 httpGet.pathQuery({ISBN13 : node.getValue("ProductIsbn13").getSimpleValue()});
 // log.info("ISBN13" + ISBN13);
 // 9781119384335 9785CHSO00013
//httpGet.pathQuery({ISBN13: "9783527600625" });

 var myResponse = httpGet.invoke();
  //if (myResponse == "string")
 // {
  log.info("myResponse" + myResponse)
  var resData = JSON.parse(myResponse);
  //var JSONString = resData.toString();
  //log.info("resData" + resData.NJData.ISBN13);
  var response1 = httpGet.pathElements("NJData").invoke();
  log.info("response1" + response1.ISBN13);
  var jsonMessage = JSON.parse(response1);
  var NJResult = jsonMessage["NJData"];
 // log.info("NJResult" + NJResult.NJData)

  for (var NJObj in NJResult) {
      var eachObj = NJResult[NJObj];
      log.info("NJObj: " + NJObj + " eachObj:" + eachObj + typeof(eachObj))
      var eachNameObj = eachObj.name;

      //var eachSensitiveInfo = eachObj.sensitive["contactMedium"];
      //var globalPersonIDVal = eachObj.globalPersonId;

      if (skipJSONAttributes.indexOf(NJObj) == -1) {

          if (typeof(eachObj) == "string") {
          	log.info("in String");
          	if ( NJObj == "PPCCode"){
          		log.info("in PPCCode");
          		var ppcCode = eachObj;
				var status = NJResult["Status"];
				var productDownloadStatus = NJResult["DownloadStatus"];
				
				if((typeof(ppcCode) == "string" &&(ppcCode !="null"||ppcCode != null))) {
				//&& (typeof(productDownloadStatus) == "string" &&(productDownloadStatus !="null"||productDownloadStatus != null))){
					var ppcCodeFinal = status+"-"+ppcCode;
					log.info("ppcCodeFinal" + ppcCodeFinal)
					node.getValue("ProductPrimaryProcessCode").setValue(ppcCodeFinal);
					
				}
				if((typeof(ppcCode) == "string" &&(ppcCode !="null"||ppcCode != null)) && (typeof(status) == "string" &&(status !="null"||status != null))){
				var statusFinal = status+"-"+ ppcCode;
				log.info("statusFinal" + statusFinal)
				node.getValue("ProductProcessStatusCode").setLOVValueByID(statusFinal);
					
				}
				/*if((typeof(ppcCode) == "string" &&(ppcCode !="null"||ppcCode != null)) && (typeof(productDownloadStatus) == "string" &&(productDownloadStatus !="null"||productDownloadStatus != null))){
				//	var ppcCodeFinal = status+"-"+ppcCode;
				log.info("productDownloadStatus" + productDownloadStatus)
				node.getValue("ProductDownloadStatus").setLOVValueByID(productDownloadStatus);
					
				}*/
          	}
			else if ( NJObj == "FullTitle"){
					log.info("in title");
					var NAMETITALE = eachObj;
					if((typeof(NAMETITALE) == "string" &&(NAMETITALE !="null"||NAMETITALE != null))){
						var FinalName = NAMETITALE;
						node.setName(NAMETITALE);
						node.getValue("ProductFullTitle").setValue(NAMETITALE);
						log.info("FinalName" + FinalName)
					}
			}
			else{
				log.info("last else");
              		var lookupValue = manager.getHome(com.stibo.lookuptable.domain.LookupTableHome).getLookupTableValue('NJLOOKUPTABLE', NJObj);
				if (lovJOSAnAttributes.indexOf(NJObj) == -1 && !lookupValue.equals("N/A")) {
					if(dateJSONAttributes.indexOf(NJObj) > -1 ){
					  log.info(dataNorm(eachObj));
					  setValue(node, lookupValue, dataNorm(eachObj), false, false);				  
					  
					}
					else{
				   		setValue(node, lookupValue, eachObj, false, false);
					}
				
				} else if (lovJOSAnAttributes.indexOf(NJObj) > -1 && !lookupValue.equals("N/A")) {
				   setValue(node, lookupValue, eachObj, false, true);
				}
				
			}
          } 
		  else if (typeof(eachObj) == "object") {

              for (var key in eachObj) {
                  var underEachObj = eachObj[key];
                  log.info("underEachObj" + underEachObj)
                  log.info("key" + key)
                  if (key == "Bundle") {
					   var isHaveObj = true;
                      for (var bundleKey in underEachObj) {
                          log.info("bundleKey " + bundleKey);
                          log.info("underEachObj " + underEachObj[bundleKey]);
                          var dataContainerObj = underEachObj[bundleKey];
						   if(typeof(dataContainerObj) != "object"){
							  isHaveObj = false;
							  dataContainerObj = underEachObj;
						  }
                          var code = dataContainerObj["BundleCode"];
                          var group = dataContainerObj["BundleGroup"];
                          var sub = dataContainerObj["SubscriptionList"];
                          log.info("code:" + code + " group:" + group + " sub:" + sub);
                          // Featch data container - list


                          var bundleCodeDataContainerList = genericFunctions.getDataContainerObjects(node, "BundleGroup_BundleCode_DataContainer");
                          log.info("bundleCodeDataContainerList" + bundleCodeDataContainerList)
                          var iter = bundleCodeDataContainerList.iterator();
                          var valueflag = true

                          while (iter.hasNext()) {
                              var dc = iter.next().getDataContainerObject();
                              var BundleCode_key = dc.getValue("ProductBundleCodeID").getSimpleValue();
                              log.info("BundleCode_key" + BundleCode_key)
                              var BundleGroup_key = dc.getValue("ProductBundleGroupID").getSimpleValue()
                              var undleGroup_key = dc.getValue("ProductSubscriptionTypeID").getSimpleValue();
                              var journalDataContainerType = node.getDataContainerByTypeID("BundleGroup_BundleCode_DataContainer");
                              if (code == BundleCode_key || group == BundleGroup_key || sub == BundleGroup_key) {
                                  valueflag = false;
                              }

                          }

                          if (valueflag == true) {

                              var journalDataContainerType = node.getDataContainerByTypeID("BundleGroup_BundleCode_DataContainer");
                              var newJournalDataContainer1 = journalDataContainerType.addDataContainer().createDataContainerObject('');
                              
                             // var lov_values_Code = BundleCode_LOV.getListOfValuesValueByID(code).getValue();
                              if(typeof(code) == "string" &&(code !="null"||code != null)){
                              newJournalDataContainer1.getValue("ProductBundleCode").setLOVValueByID(code);
                              }
                              
                             // var lov_values_Group = Bundle_Group_LOV.getListOfValuesValueByID(group).getValue();
                                if(typeof(group) == "string" &&(group !="null"||group != null)){
                              newJournalDataContainer1.getValue("ProductBundleGroup").setLOVValueByID(group);
                                }
                              
                            
                            // var lov_values_sub = OMBNREP_LOV.getListOfValuesValueByID(sub).getValue();
                            // log.info("lov_values_sub" + lov_values_sub.index())
                              if(typeof(sub) == "string" &&(sub !="null"||sub != null)){
                              newJournalDataContainer1.getValue("ProductBundleSubscriptionType").setLOVValueByID(sub);
                              }
                                 
                          } else {
                              log.info("No value in the responce");
                          }
						
						if(isHaveObj == false){
							  break;
						  }
					  }

                  }
				  else if (key == "Subject") {
					  log.info("in Subject");
					  var isHaveObj = true;
					  for (var subjectKey in underEachObj) {
						  var subjectObj = underEachObj[subjectKey];
						  if(typeof(subjectObj) != "object"){
							  isHaveObj = false;
							  subjectObj = underEachObj;
						  }
						  log.info(typeof(underEachObj));
						  var subjectCode = subjectObj["SubjectCode"];
						  var subjectID = "SC_"+subjectCode;
						  var subjectOLCode = subjectObj["SubjectOLCode"];
						  var subjectLevel = subjectObj["SubjectLevel"];
						  var subjectGroup = subjectObj["SubjectGroup"];
						  
						  var subjectObject = manager.getClassificationHome().getClassificationByID(subjectID);
						  log.info("subjectObject: "+subjectObject+subjectID);
						  if(subjectObject != null){
							//var subjectLinkType = manager.getLinkTypeHome().getLinkTypeByID("ProductToSubjectHierarchyLink");
							var subjectLinkType = manager.getHome(com.stibo.core.domain.classificationproductlinktype.ClassificationProductLinkTypeHome).getLinkTypeByID("ProductToSubjectHierarchyLink")
							
							try{
								node.createClassificationProductLink(subjectObject,subjectLinkType);
								
							}catch(e){
								log.info("Link to: "+subjectID+" exist");
							}
							subjectObject.getValue("SubjectCode").setSimpleValue(subjectCode);
							subjectObject.getValue("SubjectOnlineCode").setSimpleValue(subjectOLCode);
							subjectObject.getValue("SubjectLevel2").setSimpleValue(subjectLevel);
							subjectObject.getValue("SubjectGroup").setSimpleValue(subjectGroup);
							  
						  }
						  if(isHaveObj == false){
							  break;
						  }
						  
					  }
					  
					  
				  }




              }
          }
      }




  }



  function setValue(product, attributeId, value, isMandatory, isLOV) {
  	log.info("attributeId: "+attributeId);
      try {
          if (isLOV == false) {
             log.info( product.getValue(attributeId).setSimpleValue(value));
              log.info("attributeId: " + attributeId + " Value: " + value);
          } else {
              product.getValue(attributeId).setLOVValueByID(value);
              log.info("attributeId: " + attributeId + "LOV Value: " + value);
          }
          
      } catch (e) {
          if (e.javaException instanceof com.stibo.core.domain.ValidatorException) {
              var message = "Could not set value '" + value + "' for attribute with ID '" + attributeId + "' on product with ID '" + product.getID() + "': " + e.javaException.getMessage();
              if (isMandatory) {
                  throw new java.lang.RuntimeException(message);
              } else {
                  throw (e);
              }
          } else {
              throw (e);
          }
      }
  }
  
  function dataNorm(dateStr){
  	if (dateStr != "0") {
  		log.info("dateStr: "+dateStr);
	var dateToNum = parseFloat(dateStr.toString())+19000000;
	dateToNum = dateToNum.toString();
	return dateToNum.substring(0,4)+"-"+dateToNum.substring(6,4)+"-"+dateToNum.substring(8,6);
  	} else {
  		var dateToNum = null;
  		log.info("dateToNum: "+dateToNum);
  		return dateToNum;
  		
  	}
  	log.info("dateStr1: "+dateStr);
}

 // } 
}
/*===== business rule plugin definition =====
{
  "pluginId" : "AttributeComparatorCondition",
  "parameters" : [ {
    "id" : "Attribute1",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "ProductIsbn"
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
    "value" : "="
  } ],
  "pluginType" : "Precondition"
}
*/
