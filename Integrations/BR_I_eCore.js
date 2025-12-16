/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BR_I_eCore",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "Inbound eCore",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "GenericFunctions",
    "libraryAlias" : "genericFunctions"
  }, {
    "libraryId" : "OtherProductsFunctions",
    "libraryAlias" : "otherProductsLibrary"
  } ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "ManagerBindContract",
    "alias" : "manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "InboundBusinessProcessorImporterSourceBindContract",
    "alias" : "inboundMessage",
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
    "contract" : "InboundBusinessProcessorExecutionReportLoggerBindContract",
    "alias" : "reportLogger",
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
    "contract" : "ObjectTypeBindContract",
    "alias" : "non_journal",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "OtherProducts",
    "description" : null
  }, {
    "contract" : "AttributeBindContract",
    "alias" : "ProductISBN13",
    "parameterClass" : "com.stibo.core.domain.impl.AttributeImpl",
    "value" : "ProductIsbn13",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (manager,inboundMessage,log,reportLogger,node,non_journal,ProductISBN13,genericFunctions,otherProductsLibrary) {
try {
  
  var skipJSONAttributes = ["DOI", "ProductDoi", "CopyrightYear", "ContentStartDateCentury", "ContentEndDateCentury", "AppearinWebCatalog", "AvailableToOnlineAccts", "NotPartOfPPVAS", "NotPartOfSpecialProduct", "OnesourceProductTaxCategoryLevel2", "PublicationDate"];
  var lovJOSAnAttributes = ["SAPProfitCenter", "SAPCostCenter", "MediumCode", "SubMediumCode", "ContentCategory", "IPOwnerSAPCompany", "ProductGroup", "ProductLine", "Taxable", "Imprint", "ProductTypeCode", "ContentPublicationType", "SendToWispers", "DownloadStatus", "Division", "ProductIPOwningCompany", "OnesourceProductTaxCategoryLevel1", "PublicationType"];

  var dateJSONAttributes = ["ContentStartDate", "ContentEndDate"];

  logger.info('$$:Start: Common Business Action: Name = "Inbound eCore" : ID = "JSON Payload"');

  log.info("JSON payload: " + inboundMessage.getMessage());
  var NJData = JSON.parse(inboundMessage.getMessage());

  var ISBN10 = NJData.NJData.ISBN10;
  var PPCCode = NJData.NJData.PPCCode;
  var ProductDownloadStatus = NJData.NJData.DownloadStatus;
  var ProductProcessStatus = NJData.NJData.Status;
  var ProductFullTitle = NJData.NJData.FullTitle;
  var ISBN13 = NJData.NJData.ISBN13;
  var SAPProfitCenter = NJData.NJData.SAPProfitCenter;
  var ProductIsbn = NJData.NJData.ISBN10;
  var ProductContentCategory = NJData.NJData.ContentCategory;
  var ProductContentEndDate = NJData.NJData.ContentEndDate;
  var ProductContentStartDate = NJData.NJData.ContentStartDate;
  //var ProductDoi = NJData.NJData.DOI;
  var ProductContentPublicationType = NJData.NJData.ContentPublicationType;
  var ProductCopyrightYear = NJData.NJData.CopyrightYear;
  var ProductFinanceDivision = NJData.NJData.Division;
  var ProductFinanceEntitlementPlatform = NJData.NJData.EntitlementPlatform;
  var SAPExternalMaterialGroup = NJData.NJData.ExternalMaterialGroup;
  var Name = NJData.NJData.FullTitle;
  var ProductImprint = NJData.NJData.Imprint;
  var ProductIPOwningCompany = NJData.NJData.IPOwnerSAPCompany;
  var ProductIsbn = NJData.NJData.ISBN10;
  var ProductMediumCode = NJData.NJData.MediumCode;
  var ProductSubMediumCode = NJData.NJData.SubMediumCode;
  var ProductOclcReferenceNumber = NJData.NJData.OCLCNumber;
  var ProductOneSourceTaxCode = NJData.NJData.OnesourceProductTaxCategoryLevel1;
  var ProductPublicationDate = NJData.NJData.PublicationDate;

  var ProductProductGroup = NJData.NJData.ProductGroup;
  var ProductProductLine = NJData.NJData.ProductLine;
  var ProductFinancePublicationType = NJData.NJData.PublicationType;
  var ProductCostCenter = NJData.NJData.SAPCostCenter;
  var ProductProfitCenter = NJData.NJData.SAPProfitCenter;
  var ProductSendToWispers = NJData.NJData.SendToWispers;
  //var ProductProcessStatus
  var ProductMediumCode = NJData.NJData.MediumCode;
  var ProductSubMediumCode = NJData.NJData.SubMediumCode;
  var ProductIsTaxable = NJData.NJData.Taxable;
  var ProductUrl = NJData.NJData.TitleURL;
  var ProductProductTypeCode = NJData.NJData.ProductTypeCode;
  var ProductSAPMaterialNumber = NJData.NJData.SAPMaterialNumberProductLevel;
  var ProductPlatform = NJData.NJData.AppearinWebCatalog;
  var ProductExternalData = NJData.NJData.AvailableToOnlineAccts;
  //KBART Report attributes
  var ProductDateMonographPublishedOnline = NJData.NJData.DateMonographPublishedOnline;
  var ProductFirstAuthor = NJData.NJData.FirstAuthor;
  var ProducFirstEditor = NJData.NJData.FirstEditor;
  var ProductMonographEdition = NJData.NJData.MonographEdition;
  var ProductMonographVolume = NJData.NJData.MonographVolume;
  var ProductOnlineIdentifier = NJData.NJData.OnlineIdentifier;
  var ProductParentPublicationTitleID = NJData.NJData.ParentPublicationTitleId;

  log.info("ProductDateMonographPublishedOnline"+ProductDateMonographPublishedOnline);
  log.info("ProductFirstAuthor"+ProductFirstAuthor);
  //log.info("ProducFirs"+ProducFirs);
  log.info("ProductMonographEdition"+ProductMonographEdition);
  log.info("ProductMonographVolume"+ProductMonographVolume);
  log.info("ProductOnlineIdentifier"+ProductOnlineIdentifier);
  log.info("ProductParentPublicationTitleID"+ProductParentPublicationTitleID);
  

  log.info("ProductIsbn" + ProductIsbn);
  log.info("ISBN13" + ISBN13);
  log.info("PPCCode" + PPCCode);
  log.info("Status" + ProductProcessStatus);
  log.info("productDownloadStatus" + ProductDownloadStatus);
  log.info("FullTitle" + ProductFullTitle);
  log.info("ProductOclcReferenceNumber" + ProductOclcReferenceNumber);
  log.info("ProductFinanceEntitlementPlatform" + ProductFinanceEntitlementPlatform);
  log.info("ProductCostCenter" + ProductCostCenter);
  log.info("ProductSAPMaterialNumber" + ProductSAPMaterialNumber);

  //Search for the Other Products based on ISBN13, if found, update Other Products and if not found create New ISBN13
  searchOnAttribute(ISBN13);
} catch (e) {
	var myErrorObj = manager.getProductHome().getProductByID("Active_Errors").createProduct(null,"Error_Record");
	log.info("myErrorObj" + myErrorObj);
	myErrorObj.getValue("Error_Description").setSimpleValue(e);
	myErrorObj.getValue("Error_ISBN13").setSimpleValue(ISBN13);
	myErrorObj.getValue("Error_ProductFullTitle").setSimpleValue(ProductFullTitle);
	myErrorObj.setName(myErrorObj.getID());
	var dateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	var now = dateFormat.format(new Date());	
	myErrorObj.getValue("Error_Timestamp").setSimpleValue(now);
    myErrorObj.getValue("Error_JSON_Load").setSimpleValue(inboundMessage.getMessage());
    //myErrorObj.createReference(ISBN13,"ErrorObject2ImportNodeReference");	
    
	var wfObj = manager.getWorkflowHome().getWorkflowByID("Error_Review_WF");
	log.info("wfObj" + wfObj);
	var wfInst = myErrorObj.getWorkflowInstance(wfObj);
	log.info("wfInst" + wfInst);

	if (wfInst == null || wfInst == 'null') {
             log.info("No wfInstance in the response creating Workflow Now");
                  wfInst=myErrorObj.startWorkflowByID("Error_Review_WF","GBPM")
                  log.info("wfInst" + wfInst);
                  log.info("Workflow Created");
	}           
	var wfTask = wfInst.getTaskByID("New_Error");
	log.info("wfTask" + wfTask);
	wfTask.triggerByID("toeCore","to GBPM error State");
	log.info("ERROR IN PROCESSING Inbound eCore : " + e);
}  

  function searchOnAttribute(value) {
      var searchHome = manager.getHome(com.stibo.core.domain.singleattributequery.SingleAttributeQueryHome);
      var attribute = manager.getAttributeHome().getAttributeByID("ProductIsbn13");
      var searchArg = new com.stibo.core.domain.singleattributequery.SingleAttributeQueryHome.SingleAttributeQuerySpecification(com.stibo.core.domain.Product, attribute, value);
      var foundProds = searchHome.querySingleAttribute(searchArg).asList(100);
      log.info('Found Other Products..' + foundProds);

      if (foundProds.size() > 1) {
          throw new Error("Multiple ISBN13 found");
          return false;
      } else if (foundProds.size() == 1) {
          var otherProductsNode = foundProds.get(0);
          if (otherProductsNode) {
              log.info('Found Other Products..' + otherProductsNode);

              //*****************TESTING INBOUND CONDITION***************************
              otherProductsNode.getValue("ProductIsbn").setValue(ProductIsbn);
              otherProductsNode.getValue("ProductCopyrightYear").setValue(ProductCopyrightYear);
              otherProductsNode.getValue("ProductIsbn").setValue(ProductIsbn);
              //otherProductsNode.getValue("ProductUrl").setValue(ProductUrl);
              //otherProductsNode.getValue("ProductOclcReferenceNumber").setValue(ProductOclcReferenceNumber);
              //otherProductsNode.getValue("SAPExternalMaterialGroup").setValue(SAPExternalMaterialGroup);
              //otherProductsNode.getValue("ProductSAPMaterialNumber").setValue(ProductSAPMaterialNumber);
              var SAPMaterialNumberObject = otherProductsNode.getValue("ProductSAPMaterialNumber").getSimpleValue();

              otherProductsNode.getValue("ProductContentCategory").setSimpleValue("Publishing Content");
              otherProductsNode.getValue("ProductFinanceDivision").setSimpleValue("Research");
            //  otherProductsNode.getValue("SAPExternalMaterialGroup").setSimpleValue("NONJ");
              log.info("SAPMaterialNumberObject Before" + SAPMaterialNumberObject);
              log.info("ProductSAPMaterialNumber Before" + ProductSAPMaterialNumber);
              //if (ProductSAPMaterialNumber == "null" || ProductSAPMaterialNumber == null || ProductSAPMaterialNumber == "" && SAPMaterialNumberObject == "")
              if (SAPMaterialNumberObject == "" || SAPMaterialNumberObject == null )
              {
                  log.info("ProductSAPMaterialNumber1" + ProductSAPMaterialNumber);
                  log.info("SAPMaterialNumberObject after" + SAPMaterialNumberObject);
                  otherProductsNode.getValue("ProductSAPMaterialNumber").setSimpleValue(otherProductsLibrary.sequentialMatNoIncrement(manager.getProductHome().getProductByID("ProductSequentialMatNo")));
              } else if (ProductSAPMaterialNumber != "") {
                  //NewOtherProducts.getValue("ProductSAPMaterialNumber").setValue(ProductSAPMaterialNumber);
                  log.info("ProductSAPMaterialNumber2" + ProductSAPMaterialNumber);

                  otherProductsNode.getValue("ProductSAPMaterialNumber").setSimpleValue(ProductSAPMaterialNumber);
              }

              //**************Below are All LOV Attributes*********************************************
              //otherProductsNode.getValue("ProductFinanceEntitlementPlatform").setLOVValueByID(ProductFinanceEntitlementPlatform); //
              //otherProductsNode.getValue("ProductFinancePublicationType").setLOVValueByID(ProductFinancePublicationType); //LOV
              otherProductsNode.getValue("ProductSubMediumCode").setLOVValueByID(ProductSubMediumCode); //LOV
              otherProductsNode.getValue("ProductCostCenter").setLOVValueByID(ProductCostCenter); //LOV
              otherProductsNode.getValue("ProductProfitCenter").setLOVValueByID(SAPProfitCenter); //LOV
              otherProductsNode.getValue("ProductSendToWispers").setLOVValueByID(ProductSendToWispers); //LOV
              otherProductsNode.getValue("ProductSubMediumCode").setLOVValueByID(ProductSubMediumCode); //LOV
              otherProductsNode.getValue("ProductIPOwningCompany").setLOVValueByID(ProductIPOwningCompany); //LOV
              otherProductsNode.getValue("ProductIsTaxable").setLOVValueByID(ProductIsTaxable); //LOV
              otherProductsNode.getValue("ProductMediumCode").setLOVValueByID(ProductMediumCode); //LOV
              otherProductsNode.getValue("ProductImprint").setLOVValueByID(ProductImprint); //LOV

              otherProductsNode.getValue("ProductProductGroup").setLOVValueByID(ProductProductGroup); //LOV
              otherProductsNode.getValue("ProductProductLine").setLOVValueByID(ProductProductLine); //LOV
              otherProductsNode.getValue("ProductContentPublicationType").setLOVValueByID(ProductContentPublicationType); //LOV
              //otherProductsNode.getValue("ProductDownloadStatus").setLOVValueByID(ProductDownloadStatus); //LOV


              otherProductsNode.getValue("ProductProductTypeCode").setLOVValueByID(ProductProductTypeCode); //LOV
			  
			  //KBART Attribute updates
			  otherProductsNode.getValue("ProductDateMonographPublishedOnline").setSimpleValue(ProductDateMonographPublishedOnline);
			  otherProductsNode.getValue("ProductFirstAuthor").setSimpleValue(ProductFirstAuthor);
			  otherProductsNode.getValue("ProducFirstEditor").setSimpleValue(ProducFirstEditor);
			  otherProductsNode.getValue("ProductMonographEdition").setSimpleValue(ProductMonographEdition);
			  otherProductsNode.getValue("ProductMonographVolume").setSimpleValue(ProductMonographVolume);
			  otherProductsNode.getValue("ProductOnlineIdentifier").setSimpleValue(ProductOnlineIdentifier);
			  otherProductsNode.getValue("ProductParentPublicationTitleID").setSimpleValue(ProductParentPublicationTitleID);

              if (ProductFullTitle != null) {
                  log.info("in title" + ProductFullTitle);
                  otherProductsNode.setName(Name);
                  otherProductsNode.getValue("ProductFullTitle").setValue(ProductFullTitle);

              }

              if (PPCCode != null && ProductProcessStatus != null) {
                  var ppcCodeFinal = ProductProcessStatus + "-" + PPCCode;
                  log.info("ppcCodeFinal" + ppcCodeFinal)
                  otherProductsNode.getValue("ProductPrimaryProcessCode").setValue(ppcCodeFinal);

              }
              if (PPCCode != null && ProductProcessStatus != null) {
                  //var ProductProcessStatusCode = "ProductProcessStatusCode";
                  var statusFinal = ProductProcessStatus + "-" + PPCCode;
                  log.info("statusFinal" + statusFinal)
                  otherProductsNode.getValue("ProductProcessStatusCode").setLOVValueByID(statusFinal);

              }
              // if(ProductContentEndDate != null || ProductContentStartDate != null) {
              if (ProductContentEndDate != "0" || ProductContentStartDate != "0") {
                  var normalize = ProductContentEndDate;
                  var normalize2 = ProductContentStartDate;

                  var dateToNum = parseFloat(normalize2.toString()) + 19000000;
                  var dateToNum2 = parseFloat(normalize.toString()) + 19000000;

                  dateToNum = dateToNum.toString();
                  dateToNum2 = dateToNum2.toString();

                  log.info("normalize1" + dateToNum);

                  log.info("normalize1" + dateToNum2);

                  dateToNum = dateToNum.substring(0, 4) + "-" + dateToNum.substring(6, 4) + "-" + dateToNum.substring(8, 6);
                  dateToNum2 = dateToNum2.substring(0, 4) + "-" + dateToNum2.substring(6, 4) + "-" + dateToNum2.substring(8, 6);

                  log.info("normalize2" + dateToNum);
                  log.info("dateToNum2" + dateToNum2);

                  otherProductsNode.getValue("ProductContentStartDate").setValue(dateToNum);
                  otherProductsNode.getValue("ProductContentEndDate").setValue(dateToNum2);

              }
              if (ProductPublicationDate != "0") {
                  var pubdate = ProductPublicationDate;

                  var dateToNumPub = parseFloat(pubdate.toString()) + 19000000;

                  dateToNumPub = dateToNumPub.toString();

                  log.info("dateToNumPub" + dateToNumPub);

                  dateToNumPub1 = dateToNumPub.substring(0, 4) + "-" + dateToNumPub.substring(6, 4) + "-" + dateToNumPub.substring(8, 6);

                  log.info("dateToNumPub" + dateToNumPub1);

                  otherProductsNode.getValue("ProductPublicationDate").setValue(dateToNumPub1);
                  
              }
              if (ProductPlatform != null) {
              	  var prodPlat = manager.getClassificationHome().getClassificationByID("PP_W");
              	   //var prodPlat = 'PP_W';
                 var prodplatformLinkType = manager.getHome(com.stibo.core.domain.classificationproductlinktype.ClassificationProductLinkTypeHome).getLinkTypeByID("ProductToProductPlatformReferenceLink")
                         
                                                   try{
                                                  log.info("prodPlatID" +prodPlat)
                                                  log.info("prodplatformLinkType:prodplatformLinkType" +prodplatformLinkType)
                                                  // node.createClassificationProductLink(subjectObject,subjectLinkType);
                                                  otherProductsNode.createClassificationProductLink(prodPlat,prodplatformLinkType);

                                                  }catch(e){
                                                  log.info("Link to: "+prodplatformLinkType+" exist");
                                                  }
              } 
              if (ProductExternalData != null) {
              	 // var prodExternal = manager.getHome(com.stibo.core.domain.entity.EntityHome).getEntityByID("EDP_AMZN");
              	 var entityHome = manager.getEntityHome();
              	 var prodExternal = entityHome.getEntityByID("EDP_AMZN");

              	 log.info("prodExternal to: "+prodExternal+" testing2");

              	 
              	  
              	   //var prodPlat = 'PP_W';
               //  var prodExternalLinkType = manager.getHome(com.stibo.core.domain.classificationproductlinktype.ClassificationProductLinkTypeHome).getLinkTypeByID("ProductToExternalDataPartnersRefLink")
                // var prodExternalLinkType = manager.getHome(com.stibo.core.domain.partobject.ClassificationReferencePartObject).getReferenceType("ProductToExternalDataPartnersRefLink")
                 //var prodExternalLinkType = manager.getHome(com.stibo.core.domain.partobject.EntityReferencePartObject).getReferenceType("ProductToExternalDataPartnersRefLink")
               // var prodExternalLinkType = manager.EntityReferencePartObject().getReferenceType("ProductToExternalDataPartnersRefLink")
               //log.info("prodplatformLinkType:prodplatformLinkType" +prodExternalLinkType)
              // var subjectObject = manager.getClassificationHome().getClassificationByID(subjectID);
               //var subjectLinkType = manager.getHome(com.stibo.core.domain.classificationproductlinktype.ClassificationProductLinkTypeHome).getLinkTypeByID("ProductToSubjectHierarchyLink")
                         
                                                   try{
                                                  log.info("prodExternalPartner" +prodExternalPartner)
                                                 // log.info("prodplatformLinkType:prodplatformLinkType" +prodExternalLinkType)
                                                  // node.createClassificationProductLink(subjectObject,subjectLinkType);
                                                  otherProductsNode.createReference(prodExternal,prodExternalPartner);

                                                  }catch(e){
                                 //                 log.info("Link to: "+prodExternalLinkType+" exist");
                                                  }
              } 
              for (var NJObj in NJData) {
                  var eachObj = NJData[NJObj];
                  log.info("Each: " + NJObj + " eachObj:" + eachObj + typeof(eachObj))
                  var eachNameObj = eachObj.name;

                  if (typeof(eachObj) == "object") {
                      log.info("Inside of Object: " + typeof(eachObj))
                      for (var key in eachObj) {
                          var underEachObj = eachObj[key];
                          log.info("underEachObj" + underEachObj)
                          log.info("key" + key)
                          if (key == "SubjectList") {
                              var isHaveObj = true;
							  var isOldLinkDeleted = false;
                              for (var subjectKey in underEachObj) {
                                  var subjectObj = underEachObj[subjectKey];
                                  if (typeof(subjectObj) != "object") {
                                      isHaveObj = false;
                                      subjectObj = underEachObj;
                                  }
                                  log.info(typeof(underEachObj));
                                  log.info("subjectKey" + subjectKey)
                                  log.info("subjectObj" + subjectObj)
                                  if (subjectKey == "Subject") {
                                      log.info("In IF")
                                      for (var subjectKey2 in subjectObj) {
                                          log.info("In for Loop" + subjectKey2)

                                          log.info("subjectObj" + subjectObj)
                                          var subjectObj2 = subjectObj[subjectKey2];
                                          log.info("SubjectCode" + subjectObj2);
                                          for (var subjectKey3 in subjectObj2) {

                                              var subCodeKey = subjectObj2[subjectKey3];

                                              if (subjectKey3 == "SubjectCode") {
                                                  var subjectID1 = subCodeKey;
                                                  var subjectID = "SC_" + subjectID1;

                                              }

                                              if (subjectKey3 == "SubjectGroup") {
                                                  var subjectGroup = subCodeKey;
                                              }
                                              if (subjectKey3 == "SubjectOLCode") {
                                                  var subjectOLCode = subCodeKey;
                                              }
                                              if (subjectKey3 == "SubjectLevel") {
                                                  var subjectLevel = subCodeKey;

                                              }

                                              log.info("subjectKey3: " + subjectKey3);
                                              log.info("subCodeKey: " + subCodeKey);
                                              log.info("subjectCodeID: " + subjectID1);
                                              log.info("subjectCodeID1: " + subjectID);

                                              log.info("subjectCode:" + subjectOLCode);
                                              log.info("subjectLevel: " + subjectLevel);
                                              log.info("subjectGroup: " + subjectGroup);
                                          }

                                          // }
                                          var subjectObject = manager.getClassificationHome().getClassificationByID(subjectID);
                                          log.info("subjectObjectCreate: " + subjectObject);
                                          if (subjectObject != null) {
                                              var subjectLinkType = manager.getHome(com.stibo.core.domain.classificationproductlinktype.ClassificationProductLinkTypeHome).getLinkTypeByID("ProductToSubjectHierarchyLink")
                                                  /* to unlink the old Subject code*/
												  if(isOldLinkDeleted == true){
													 try {
														  var existingLinks = otherProductsNode.queryClassificationProductLinks(subjectLinkType).asList(100);
														  //			log.info("existingLinks: "+existingLinks);
														  log.info("subjectLinkType: " + subjectLinkType)
														  for (var linkCount = 0; linkCount < existingLinks.size(); linkCount++) {
															  				log.info(" in for Loop 1 existingLinks: "+existingLinks);
															  				log.info(" in for Loop linkCount Deleting: "+linkCount);
															  				log.info("subjectCodeID: " + subjectID1);
															  existingLinks.get(linkCount).delete();
															  isOldLinkDeleted = true;
														  }
													  } catch (e) {
														  throw (e);
													  }
                                                  }
                                                  //	} //else if (isOldLinkDeleted == true) {
                                                  /* end of deleting old links*/
                                                   try{
                                                  log.info("subjectGroup:subjectLinkType" +subjectLinkType)
                                                  // node.createClassificationProductLink(subjectObject,subjectLinkType);
                                                  otherProductsNode.createClassificationProductLink(subjectObject,subjectLinkType);

                                                  }catch(e){
                                                  log.info("Link to: "+subjectID+" exist");
                                                  } 
                                                  //subjectObject.getValue("SubjectCode").setSimpleValue(subjectID1);
                                                 // subjectObject.getValue("SubjectOnlineCode").setSimpleValue(subjectOLCode);
                                                //  subjectObject.getValue("SubjectLevel2").setSimpleValue(subjectLevel);
                                                //   subjectObject.getValue("SubjectGroup").setSimpleValue(subjectGroup);

                                          }
                                          /*if (subjectObject != null) {
                                              var subjectLinkType = manager.getHome(com.stibo.core.domain.classificationproductlinktype.ClassificationProductLinkTypeHome).getLinkTypeByID("ProductToSubjectHierarchyLink")
                                                  try {
                                                      log.info("subjectGroup:subjectLinkType" + subjectLinkType)
                                                      // node.createClassificationProductLink(subjectObject,subjectLinkType);
                                                      otherProductsNode.createClassificationProductLink(subjectObject, subjectLinkType);

                                                  } catch (e) {
                                                      log.info("Link to: " + subjectID + " exist");
                                                  }
                                              subjectObject.getValue("SubjectCode").setSimpleValue(subjectID1);
                                              subjectObject.getValue("SubjectOnlineCode").setSimpleValue(subjectOLCode);
                                              subjectObject.getValue("SubjectLevel2").setSimpleValue(subjectLevel);
                                              subjectObject.getValue("SubjectGroup").setSimpleValue(subjectGroup);
                                          }*/
                                      }
                                      if (isHaveObj == false) {
                                          break;
                                      }
                                      //  }


                                      //	  	}

                                  }
                              }
                          } else if (key == "BundleList") { //Add Bundle Code Code After this
                              var isHaveObj = true;
                              for (var bundleKey in underEachObj) {
                                  log.info("bundleKey " + bundleKey);
                                  log.info("underEachObj " + underEachObj[bundleKey]);
                                  var dataContainerObj = underEachObj[bundleKey];
                                  if (typeof(dataContainerObj) != "object") {
                                      isHaveObj = false;
                                      dataContainerObj = underEachObj;
                                  }

                                  if (bundleKey == "Bundle") {
                                      log.info("In IF")
                                      for (var bundlegroup in dataContainerObj) {
                                          log.info("In for Loop" + bundlegroup)
                                          var bundles = dataContainerObj[bundlegroup]
                                              var sub_test = true;
                                          log.info("bundles" + bundles);
                                          for (var bundlekey in bundles) {
                                              var bundleobject = bundles[bundlekey];

                                              if (bundlekey == "BundleCode") {
                                                  var code = bundleobject;

                                              }
                                              if (bundlekey == "BundleGroup") {
                                                  var group = bundleobject;
                                              }
                                              if (bundlekey == "SubscriptionList") {
                                                  for (var subscription in bundleobject) {
                                                      log.info("subscription" + subscription)
                                                      var subscriptiontype = bundleobject[subscription]
                                                          log.info("subscriptiontype" + subscriptiontype)
                                                          if (subscription == "Subscription") {
                                                              for (var subscriptionvalue in subscriptiontype) {
                                                                  var subvalue = subscriptiontype[subscriptionvalue];
                                                                  log.info("subvalue" + subvalue)
                                                                  for (var subscriptionvalue2 in subvalue) {
                                                                      var subvalue2 = subvalue[subscriptionvalue2];

                                                                  }
                                                                  if (subscriptionvalue2 == "SubscriptionType") {
                                                                      var sub = subvalue2;
                                                                      sub_test = false;
                                                                      log.info("sub" + sub)
                                                                  }

                                                              }
                                                          }
                                                  }
                                              }

                                          }
                                          log.info("code:" + code + " group:" + group + " sub:" + sub);
                                          // Featch data container - list
                                          var bundleCodeDataContainerList = genericFunctions.getDataContainerObjects(otherProductsNode, "BundleGroup_BundleCode_DataContainer");
                                          log.info("bundleCodeDataContainerList" + bundleCodeDataContainerList)
                                          var iter = bundleCodeDataContainerList.iterator();
                                          var oneSourceTaxCode = "";
                                          var valueflag = true;
										  while (iter.hasNext()) {
                                                  var dc = iter.next().getDataContainerObject();
                                                  //var BundleCode_key = dc.getValue("ProductBundleCodeID").getSimpleValue();
                                                  var BundleCode_key = dc.getValue("ProductBundleCodeID").getSimpleValue()

                                                      log.info("BundleCode_key" + BundleCode_key)
                                                      var BundleGroup_key = dc.getValue("ProductBundleGroupID").getSimpleValue()
                                                      var undleGroup_key = dc.getValue("ProductSubscriptionTypeID").getSimpleValue();
                                                  var journalDataContainerType = otherProductsNode.getDataContainerByTypeID("BundleGroup_BundleCode_DataContainer");

                                                  if (code == BundleCode_key || group == BundleGroup_key || sub == undleGroup_key) {
                                                      log.info("In condition" + bundlegroup)
                                                      valueflag = false;
                                                  }
                                                  if (BundleGroup_key == 'TP' || BundleGroup_key == 'RP' || BundleGroup_key == 'RN') {
                                                      if (BundleCode_key == "ENOW") {
                                                          oneSourceTaxCode = ("eJournal")
                                                      } else if (BundleCode_key == "SNOW") {
                                                          oneSourceTaxCode = ("sFreight_Dom")
                                                      } /*else {
                                                          oneSourceTaxCode = "eBooks";
                                                      }*/
                                                  }
                                                  log.info("One Source" + oneSourceTaxCode)
                                   //              otherProductsNode.getValue("ProductOneSourceTaxCode").setSimpleValue(oneSourceTaxCode);
                                              }
                                             /* if (valueflag == false) {

                                                  var journalDataContainerType = otherProductsNode.getDataContainerByTypeID("BundleGroup_BundleCode_DataContainer");
                                                  var newJournalDataContainer1 = journalDataContainerType.addDataContainer().createDataContainerObject('');
                                                  // var lov_values_Group = Bundle_Group_LOV.getListOfValuesValueByID(group).getValue();
                                                  if (code != "null" || code != null) {
                                                      log.info("codeWIRE:" + code);
                                                 //     newJournalDataContainer1.getValue("ProductBundleCode").setLOVValueByID(code);
                                                  }
                                                  if (group != "null" || group != null) {

                                                //      newJournalDataContainer1.getValue("ProductBundleGroup").setLOVValueByID(group);
                                                  }

                                                  // var lov_values_sub = OMBNREP_LOV.getListOfValuesValueByID(sub).getValue();
                                                  // log.info("lov_values_sub" + lov_values_sub.index())
                                                  // if(sub!="null" || sub != null || sub!=undefined) {
                                                  //	if((typeof(sub) != "undefined")) { // &&
                                                  if (sub_test == false) {
                                                      log.info(" sub:" + sub);
                                                  //    newJournalDataContainer1.getValue("ProductBundleSubscriptionType").setLOVValueByID(sub);
                                                  }

                                              } else {

                                                  log.info("No value in the response");
                                              } */
                                      }
                                      //   }
                                  } //Move to End of Condition


                              }
                          }
                          //	}
                      }
                  }
              }
              var workHome = manager.getWorkflowHome().getWorkflowByID("OtherProductsCreationWF");
              var wfInstance = otherProductsNode.getWorkflowInstance(workHome);
              var ProductIsActivated = otherProductsNode.getValue("ProductActivated").getSimpleValue();
              var myAttValue = "";
              var ProductContentCategory_Object = otherProductsNode.getValue("ProductContentCategory").getSimpleValue();
var ProductContentEndDate_Object = otherProductsNode.getValue("ProductContentEndDate").getSimpleValue();
var ProductContentEndDateCentury_Object = otherProductsNode.getValue("ProductContentEndDateCentury").getSimpleValue();
var ProductContentStartDate_Object = otherProductsNode.getValue("ProductContentStartDate").getSimpleValue();
var ProductContentStartDateCentury_Object =  otherProductsNode.getValue("ProductContentStartDateCentury").getSimpleValue();
var ProductCostCenter_Object =  otherProductsNode.getValue("ProductCostCenter").getSimpleValue();
var ProductFinanceEntitlementPlatform_Object =  otherProductsNode.getValue("ProductFinanceEntitlementPlatform").getSimpleValue();
var SAPExternalMaterialGroup_Object =  otherProductsNode.getValue("SAPExternalMaterialGroup").getSimpleValue();
var ProductFinanceDivision_Object =  otherProductsNode.getValue("ProductFinanceDivision").getSimpleValue();
var ProductFullTitle_Object =  otherProductsNode.getValue("ProductFullTitle").getSimpleValue();
var ProductImprint_Object = otherProductsNode.getValue("ProductImprint").getSimpleValue();
var ProductIPOwningCompany_Object = otherProductsNode.getValue("ProductIPOwningCompany").getSimpleValue();
var ProductMediumCode_Object = otherProductsNode.getValue("ProductMediumCode").getSimpleValue();
var ProductOneSourceTaxCode_Object = otherProductsNode.getValue("ProductOneSourceTaxCode").getSimpleValue();
var ProductProductGroup_Object = otherProductsNode.getValue("ProductProductGroup").getSimpleValue();
var ProductProfitCenter_Object = otherProductsNode.getValue("ProductProfitCenter").getSimpleValue();
var ProductFinancePublicationType_Object = otherProductsNode.getValue("ProductFinancePublicationType").getSimpleValue();
var ProductSAPMaterialNumber_Object = otherProductsNode.getValue("ProductSAPMaterialNumber").getSimpleValue();
var ProductProcessStatusCode_Object = otherProductsNode.getValue("ProductProcessStatusCode").getSimpleValue(); 
var ProductIsbn_Object = otherProductsNode.getValue("ProductIsbn").getSimpleValue();
var ProductIsbn13_Object = otherProductsNode.getValue("ProductIsbn13").getSimpleValue();
              var simpleDateFormat = new java.text.SimpleDateFormat("dd-MMM-yyyy HH:mm:ss");
              var currTime = simpleDateFormat.format(java.lang.System.currentTimeMillis());

              myAttValue = "update " + currTime;
              log.info("ProductContentEndDate_Object" + ProductContentEndDate_Object);

              log.info("WfInstance in the response skipping Workflow Creation On Update" + wfInstance);

              //if(wfInstance == null || wfInstance == 'null') {

              //log.info("No wfInstance in the response creating Workflow Now");

              //workHome.start(otherProductsNode, "State-2");

              //log.info("Workflow Created");
              //}
              
              if (ProductIsActivated == "Activated" && ProductContentCategory_Object != "" && ProductContentCategory_Object != null && ProductContentEndDate_Object != "" && ProductContentEndDate_Object != null &&  ProductContentEndDate_Object != null && ProductContentEndDate_Object != null
&& ProductContentEndDateCentury_Object && ProductContentEndDateCentury_Object != null && ProductContentStartDate_Object && ProductContentStartDate_Object != null && ProductContentStartDateCentury_Object && ProductContentStartDateCentury_Object != null &&
ProductCostCenter_Object !="" && ProductCostCenter_Object != null && ProductFinanceEntitlementPlatform_Object != "" && ProductFinanceEntitlementPlatform_Object != null && SAPExternalMaterialGroup_Object != "" &&
SAPExternalMaterialGroup_Object != null && ProductFullTitle_Object != "" && ProductFullTitle_Object != null && ProductFinanceDivision_Object != "" && ProductFinanceDivision_Object != null && ProductImprint_Object != ""
&& ProductImprint_Object != null && ProductIPOwningCompany_Object != "" && ProductIPOwningCompany_Object != null && ProductMediumCode_Object != "" && ProductMediumCode_Object != null && ProductOneSourceTaxCode_Object != ""
&& ProductOneSourceTaxCode_Object != null && ProductProductGroup_Object != "" && ProductProductGroup_Object != null && ProductProfitCenter_Object != null && ProductProfitCenter_Object != null && ProductFinancePublicationType_Object != "" && ProductFinancePublicationType_Object != null
&& ProductSAPMaterialNumber_Object && ProductSAPMaterialNumber_Object != null && ProductProcessStatusCode_Object != "" && ProductProcessStatusCode_Object != null) {
              //&& ProductContentCategory_Object != null && ProductContentEndDate_Object != "" && ProductContentEndDate_Object != null &&  ProductContentEndDate_Object != null && ProductContentEndDate_Object != null) {
                  otherProductsNode.getValue("Journals_Trigger_Attribute").setValue(myAttValue);
                  otherProductsNode.approve();
              } else if (wfInstance == null || wfInstance == 'null') {

                  log.info("No wfInstance in the response creating Workflow Now");

                  workHome.start(otherProductsNode, "State-2");

                  log.info("Workflow Created");
              }

          }
      } else if (foundProds.size() == 0) {

          log.info("New ISBN13" + ISBN13);

          MyParent = manager.getProductHome().getProductByID('OP_NEEDTOASSIGN')
              var NewOtherProducts = MyParent.createProduct('', 'OtherProducts')
              log.info("MyParent= " + MyParent);
          log.info("NewOtherProducts=" + NewOtherProducts);
          NewOtherProducts.getValue("ProductFullTitle").setSimpleValue(ProductFullTitle);
          NewOtherProducts.setName(Name);
          NewOtherProducts.getValue("ProductIsbn13").setValue(ISBN13);
          //	NewOtherProducts.getValue("ProductSAPMaterialNumber").setValue(ProductSAPMaterialNumber);
          //	NewOtherProducts.getValue("ProductFinancePublicationType").setLOVValueByID(ProductFinancePublicationType); //LOV
          NewOtherProducts.getValue("ProductContentCategory").setLOVValueByID(ProductContentCategory); //LOV
          //	NewOtherProducts.getValue("ProductFinanceDivision").setLOVValueByID(ProductFinanceDivision); //LOV
          //	NewOtherProducts.getValue("SAPExternalMaterialGroup").setValue(SAPExternalMaterialGroup);
          //	NewOtherProducts.getValue("ProductFinanceEntitlementPlatform").setLOVValueByID(ProductFinanceEntitlementPlatform); //
        // NewOtherProducts.getValue("ProductOneSourceTaxCode").setLOVValueByID(ProductOneSourceTaxCode); //LOV
          //NewOtherProducts.getValue("ProductDoi").setValue(ProductDoi);
          //	NewOtherProducts.getValue("ProductUrl").setValue(ProductUrl);

          NewOtherProducts.getValue("ProductIsbn").setValue(ProductIsbn);

          NewOtherProducts.getValue("ProductContentCategory").setSimpleValue("Publishing Content");
          NewOtherProducts.getValue("ProductFinanceDivision").setSimpleValue("Research");
        //  NewOtherProducts.getValue("SAPExternalMaterialGroup").setSimpleValue("NONJ");

          //*****************TESTING INBOUND CONDITION***************************
          NewOtherProducts.getValue("ProductCopyrightYear").setValue(ProductCopyrightYear);
          //NewOtherProducts.getValue("ProductOclcReferenceNumber").setValue(ProductOclcReferenceNumber);
          //**************Below are All LOV Attributes*********************************************

          NewOtherProducts.getValue("ProductSubMediumCode").setLOVValueByID(ProductSubMediumCode); //LOV
          NewOtherProducts.getValue("ProductCostCenter").setLOVValueByID(ProductCostCenter); //LOV
          NewOtherProducts.getValue("ProductProfitCenter").setLOVValueByID(SAPProfitCenter); //LOV
          NewOtherProducts.getValue("ProductSendToWispers").setLOVValueByID(ProductSendToWispers); //LOV
          NewOtherProducts.getValue("ProductSubMediumCode").setLOVValueByID(ProductSubMediumCode); //LOV
          NewOtherProducts.getValue("ProductIPOwningCompany").setLOVValueByID(ProductIPOwningCompany); //LOV
          NewOtherProducts.getValue("ProductIsTaxable").setLOVValueByID(ProductIsTaxable); //LOV
          NewOtherProducts.getValue("ProductMediumCode").setLOVValueByID(ProductMediumCode); //LOV
          NewOtherProducts.getValue("ProductImprint").setLOVValueByID(ProductImprint); //LOV
          NewOtherProducts.getValue("ProductProductGroup").setLOVValueByID(ProductProductGroup); //LOV

          NewOtherProducts.getValue("ProductProductLine").setLOVValueByID(ProductProductLine); //LOV

          NewOtherProducts.getValue("ProductContentPublicationType").setLOVValueByID(ProductContentPublicationType); //LOV

          //	NewOtherProducts.getValue("ProductDownloadStatus").setLOVValueByID(ProductDownloadStatus); //LOV
          NewOtherProducts.getValue("ProductProductTypeCode").setLOVValueByID(ProductProductTypeCode); //LOV
		  
		  //KBART Attribute updates
			  NewOtherProducts.getValue("ProductDateMonographPublishedOnline").setSimpleValue(ProductDateMonographPublishedOnline);
			  NewOtherProducts.getValue("ProductFirstAuthor").setSimpleValue(ProductFirstAuthor);
			  NewOtherProducts.getValue("ProducFirstEditor").setSimpleValue(ProducFirstEditor);
			  NewOtherProducts.getValue("ProductMonographEdition").setSimpleValue(ProductMonographEdition);
			  NewOtherProducts.getValue("ProductMonographVolume").setSimpleValue(ProductMonographVolume);
			  NewOtherProducts.getValue("ProductOnlineIdentifier").setSimpleValue(ProductOnlineIdentifier);
			  NewOtherProducts.getValue("ProductParentPublicationTitleID").setSimpleValue(ProductParentPublicationTitleID);


          /* if (ProductFullTitle != null) {
          log.info("in title" +ProductFullTitle);
          NewOtherProducts.getValue("ProductFullTitle").setValue(ProductFullTitle);
          NewOtherProducts.setName(Name);


          } */
          if (PPCCode != null && ProductProcessStatus != null) {
              //var ProductPrimaryProcessCode = "ProductPrimaryProcessCode";
              var ppcCodeFinal = ProductProcessStatus + "-" + PPCCode;
              log.info("ppcCodeFinal" + ppcCodeFinal)
              NewOtherProducts.getValue("ProductPrimaryProcessCode").setValue(ppcCodeFinal);

          }
          if (PPCCode != null && ProductProcessStatus != null) {
              //var ProductProcessStatusCode = "ProductProcessStatusCode";
              var statusFinal = ProductProcessStatus + "-" + PPCCode;
              log.info("statusFinal" + statusFinal)
              NewOtherProducts.getValue("ProductProcessStatusCode").setLOVValueByID(statusFinal);

          }
          if (ProductContentEndDate != "0" || ProductContentStartDate != "0") {
              var normalize = ProductContentEndDate;
              var normalize2 = ProductContentStartDate;

              var dateToNum = parseFloat(normalize2.toString()) + 19000000;
              var dateToNum2 = parseFloat(normalize.toString()) + 19000000;

              dateToNum = dateToNum.toString();
              dateToNum2 = dateToNum2.toString();

              log.info("normalize1" + dateToNum);

              log.info("normalize1" + dateToNum2);

              dateToNum = dateToNum.substring(0, 4) + "-" + dateToNum.substring(6, 4) + "-" + dateToNum.substring(8, 6);
              dateToNum2 = dateToNum2.substring(0, 4) + "-" + dateToNum2.substring(6, 4) + "-" + dateToNum2.substring(8, 6);

              log.info("normalize2" + dateToNum);
              log.info("dateToNum2" + dateToNum2);

              NewOtherProducts.getValue("ProductContentStartDate").setValue(dateToNum);
              NewOtherProducts.getValue("ProductContentEndDate").setValue(dateToNum2);

          }
          if (ProductPublicationDate != "0") {
              var pubdate = ProductPublicationDate;

              var dateToNumPub = parseFloat(pubdate.toString()) + 19000000;

              dateToNumPub = dateToNumPub.toString();

              log.info("dateToNumPub" + dateToNumPub);

              dateToNumPub1 = dateToNumPub.substring(0, 4) + "-" + dateToNumPub.substring(6, 4) + "-" + dateToNumPub.substring(8, 6);

              log.info("dateToNumPub" + dateToNumPub);

              NewOtherProducts.getValue("ProductPublicationDate").setValue(dateToNumPub1);
          }
          for (var NJObj in NJData) {
              var eachObj = NJData[NJObj];
              log.info("Each: " + NJObj + " eachObj:" + eachObj + typeof(eachObj))
              var eachNameObj = eachObj.name;

              if (typeof(eachObj) == "object") {
                  log.info("Inside of Object: " + typeof(eachObj))
                  for (var key in eachObj) {
                      var underEachObj = eachObj[key];
                      log.info("underEachObj" + underEachObj)
                      log.info("key" + key)
                      if (key == "SubjectList") {
                          var isHaveObj = true;
                          for (var subjectKey in underEachObj) {
                              var subjectObj = underEachObj[subjectKey];
                              if (typeof(subjectObj) != "object") {
                                  isHaveObj = false;
                                  subjectObj = underEachObj;
                              }
                              log.info(typeof(underEachObj));
                              log.info("subjectKey" + subjectKey)
                              log.info("subjectObj" + subjectObj)
                              if (subjectKey == "Subject") {
                                  log.info("In IF")
                                  for (var subjectKey2 in subjectObj) {
                                      log.info("In for Loop" + subjectKey2)

                                      log.info("subjectObj" + subjectObj)
                                      var subjectObj2 = subjectObj[subjectKey2];
                                      log.info("SubjectCode" + subjectObj2);
                                      for (var subjectKey3 in subjectObj2) {

                                          var subCodeKey = subjectObj2[subjectKey3];

                                          if (subjectKey3 == "SubjectCode") {
                                              var subjectID1 = subCodeKey;
                                              var subjectID = "SC_" + subjectID1;

                                          }

                                          if (subjectKey3 == "SubjectGroup") {
                                              var subjectGroup = subCodeKey;
                                          }
                                          if (subjectKey3 == "SubjectOLCode") {
                                              var subjectOLCode = subCodeKey;
                                          }
                                          if (subjectKey3 == "SubjectLevel") {
                                              var subjectLevel = subCodeKey;

                                          }

                                          log.info("subjectKey3: " + subjectKey3);
                                          log.info("subCodeKey: " + subCodeKey);
                                          log.info("subjectCodeID: " + subjectID1);
                                          log.info("subjectCodeID1: " + subjectID);

                                          log.info("subjectCode:" + subjectOLCode);
                                          log.info("subjectLevel: " + subjectLevel);
                                          log.info("subjectGroup: " + subjectGroup);
                                      }

                                      // }
                                      var subjectObject = manager.getClassificationHome().getClassificationByID(subjectID);
                                      log.info("subjectObjectCreate: " + subjectObject);
                                      if (subjectObject != null) {
                                          var subjectLinkType = manager.getHome(com.stibo.core.domain.classificationproductlinktype.ClassificationProductLinkTypeHome).getLinkTypeByID("ProductToSubjectHierarchyLink")

                                              try {
                                                  log.info("subjectGroup:subjectLinkType" + subjectLinkType)
                                                  // node.createClassificationProductLink(subjectObject,subjectLinkType);
                                                  NewOtherProducts.createClassificationProductLink(subjectObject, subjectLinkType);

                                              } catch (e) {
                                                  log.info("Link to: " + subjectID + " exist");
                                              }
                                        //      subjectObject.getValue("SubjectCode").setSimpleValue(subjectID1);
                                        //  subjectObject.getValue("SubjectOnlineCode").setSimpleValue(subjectOLCode);
                                        //  subjectObject.getValue("SubjectLevel2").setSimpleValue(subjectLevel);
                                      //    subjectObject.getValue("SubjectGroup").setSimpleValue(subjectGroup);
                                      }
                                  }
                                  if (isHaveObj == false) {
                                      break;
                                  }
                                  //  }


                                  //	  	}

                              }
                          }
                      } else if (key == "BundleList") { //Add Bundle Code Code After this
                          var isHaveObj = true;
                          for (var bundleKey in underEachObj) {
                              log.info("bundleKey " + bundleKey);
                              log.info("underEachObj " + underEachObj[bundleKey]);
                              var dataContainerObj = underEachObj[bundleKey];
                              if (typeof(dataContainerObj) != "object") {
                                  isHaveObj = false;
                                  dataContainerObj = underEachObj;
                              }

                              if (bundleKey == "Bundle") {
                                  log.info("In IF")
                                  for (var bundlegroup in dataContainerObj) {
                                      log.info("In for Loop" + bundlegroup)
                                      var bundles = dataContainerObj[bundlegroup]
                                          var sub_test = true;
                                      log.info("bundles" + bundles);
                                      for (var bundlekey in bundles) {
                                          var bundleobject = bundles[bundlekey];

                                          if (bundlekey == "BundleCode") {
                                              var code = bundleobject;

                                          }
                                          if (bundlekey == "BundleGroup") {
                                              var group = bundleobject;
                                          }
                                          if (bundlekey == "SubscriptionList") {
                                              for (var subscription in bundleobject) {
                                                  log.info("subscription" + subscription)
                                                  var subscriptiontype = bundleobject[subscription]
                                                      log.info("subscriptiontype" + subscriptiontype)
                                                      if (subscription == "Subscription") {
                                                          for (var subscriptionvalue in subscriptiontype) {
                                                              var subvalue = subscriptiontype[subscriptionvalue];
                                                              log.info("subvalue" + subvalue)
                                                              for (var subscriptionvalue2 in subvalue) {
                                                                  var subvalue2 = subvalue[subscriptionvalue2];

                                                              }
                                                              if (subscriptionvalue2 == "SubscriptionType") {
                                                                  var sub = subvalue2;
                                                                  sub_test = false;
                                                                  log.info("sub" + sub)
                                                              }

                                                          }
                                                      }
                                              }
                                          }

                                      }
                                      log.info("code:" + code + " group:" + group + " sub:" + sub);
                                      // Featch data container - list
                                      var bundleCodeDataContainerList = genericFunctions.getDataContainerObjects(NewOtherProducts, "BundleGroup_BundleCode_DataContainer");
                                      log.info("bundleCodeDataContainerList" + bundleCodeDataContainerList)
                                      var iter = bundleCodeDataContainerList.iterator();
                                      var oneSourceTaxCode = "";
                                      var valueflag = true;
									  while (iter.hasNext()) {
                                              var dc = iter.next().getDataContainerObject();
                                              //var BundleCode_key = dc.getValue("ProductBundleCodeID").getSimpleValue();
                                              var BundleCode_key = dc.getValue("ProductBundleCodeID").getSimpleValue()

                                                  log.info("BundleCode_key" + BundleCode_key)
                                                  var BundleGroup_key = dc.getValue("ProductBundleGroupID").getSimpleValue()
                                                  var undleGroup_key = dc.getValue("ProductSubscriptionTypeID").getSimpleValue();
                                              var journalDataContainerType = NewOtherProducts.getDataContainerByTypeID("BundleGroup_BundleCode_DataContainer");
                                              //if (code == BundleCode_key || group == BundleGroup_key || sub == BundleGroup_key) {
                                              //     valueflag = false;
                                              // }
                                              if (BundleGroup_key == 'TP' || BundleGroup_key == 'RP' || BundleGroup_key == 'RN') {
                                                  if (BundleCode_key == "ENOW") {
                                                      oneSourceTaxCode = ("eJournal")
                                                  } else if (BundleCode_key == "SNOW") {
                                                      oneSourceTaxCode = ("sFreight_Dom")
                                                  } 
                                                  /*else 
                                                  {
                                                      oneSourceTaxCode = "eBooks";
                                                  }*/
                                              }
               //                              NewOtherProducts.getValue("ProductOneSourceTaxCode").setSimpleValue(oneSourceTaxCode);
                                          }
                                          if (valueflag == true) {

                                              var journalDataContainerType = NewOtherProducts.getDataContainerByTypeID("BundleGroup_BundleCode_DataContainer");
                                              var newJournalDataContainer1 = journalDataContainerType.addDataContainer().createDataContainerObject('');
                                              // var lov_values_Group = Bundle_Group_LOV.getListOfValuesValueByID(group).getValue();
                                              if (group != "null" || group != null) {
                                                  newJournalDataContainer1.getValue("ProductBundleGroup").setLOVValueByID(group);
                                              }

                                              // var lov_values_sub = OMBNREP_LOV.getListOfValuesValueByID(sub).getValue();
                                              // log.info("lov_values_sub" + lov_values_sub.index())
                                              // if(sub!="null" || sub != null || sub!=undefined) {
                                              // 	if((typeof(sub) != "undefined")) { // &&
                                              if (sub_test == false) {
                                                  log.info(" sub:" + sub);
                                                  newJournalDataContainer1.getValue("ProductBundleSubscriptionType").setLOVValueByID(sub);
                                              }

                                              if (code != "null" || code != null) {
                                                  newJournalDataContainer1.getValue("ProductBundleCode").setLOVValueByID(code);
                                              }

                                          } else {
                                              log.info("No value in the response");
                                          }

                                          // }
                                  } //Move to End of Condition


                              }
                          }

                      }
                  }
              }
          }
          //NewOtherProducts.getValue("ProductSAPMaterialNumber").setSimpleValue(otherProductsLibrary.sequentialMatNoIncrement(manager.getProductHome().getProductByID("ProductSequentialMatNo")));
          //NewOtherProducts.startWorkflowByID("OtherProductsCreationWF", null);
          if (ProductSAPMaterialNumber == "null" || ProductSAPMaterialNumber == null || ProductSAPMaterialNumber == "") {
              NewOtherProducts.getValue("ProductSAPMaterialNumber").setSimpleValue(otherProductsLibrary.sequentialMatNoIncrement(manager.getProductHome().getProductByID("ProductSequentialMatNo")));
              NewOtherProducts.startWorkflowByID("OtherProductsCreationWF", null)
          } else {
              NewOtherProducts.getValue("ProductSAPMaterialNumber").setValue(ProductSAPMaterialNumber);
              NewOtherProducts.startWorkflowByID("OtherProductsCreationWF", null)
          }

        //  NewOtherProducts.startWorkflowByID("OtherProductsCreationWF", null)
      }

  }

  function setValue(product, attributeId, value, isMandatory, isLOV) {
      log.info("attributeId: " + attributeId);
      try {
          if (isLOV == false) {
              log.info(product.getValue(attributeId).setSimpleValue(value));
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

  function dateNorm(dateStr) {
      var dateToNum = parseFloat(dateStr.toString()) + 19000000;
      dateToNum = dateToNum.toString();
      return dateToNum.substring(0, 4) + "-" + dateToNum.substring(6, 4) + "-" + dateToNum.substring(8, 6);
      //var normalize = ProductContentEndDate;
      //var normalize2 = ProductContentStartDate;
  }
}