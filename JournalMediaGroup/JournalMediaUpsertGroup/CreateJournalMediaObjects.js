/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CreateJournalMediaObjects",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalMediaUpsertGroup" ],
  "name" : "Create Journal Media Objects",
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
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
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
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "objJDM",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "JournalDigitalMedia",
    "description" : null
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "objJPM",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "JournalPrintMedia",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (log,manager,node,objJDM,objJPM) {
/*----------------------------M-O-D-I-F-I-C-A-T-I-O-N----------L-O-G---------------------------------------------------
==============================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
==============================================================================================================================================================================
12March25    Venkata Siva Harish Mattaparthi   HAR01     RPDM-9627   Set default values to 'JournalNotPartOfPayPerView' and 'JournalNotPartOfSpecialProd' under digital media object.                                                                  
                                                                
==============================================================================================================================================================================
Purpose of Business Rule: For Import of Journal objects. Rule to create Print and Digital Journal Media objects. 
==============================================================================================================================================================================
*/

//For Import of Journal objects. Rule to create Print and Digital Journal Media objects. 

//if JournalMediaCode = G, then the media is Digital
//if JournalMediaCode = A, then the media is Print
var journalDigitalTitle = node.getValue("ProductTitle").getSimpleValue();
var journalPrintTitle = node.getValue("ProductTitle").getSimpleValue();
var journalPrintOnline = node.getValue("ProductMediaType").getSimpleValue();
log.info("journalMediaCode= "+journalPrintOnline);
var journalMediaType;
if(journalPrintOnline == "Print"){
	journalMediaType = "Print";
}
else if(journalPrintOnline == "Online"){
	journalMediaType = "Digital";
}
log.info("journalMediaType= "+journalMediaType);

//Get the simple value for Print Journal Media object
var printJournalCode = node.getValue("IDLPrintJournalCode").getSimpleValue();

//Get the simple value for Digital Media Object
var digitalJournalCode = node.getValue("IDLDigitalJournalCode").getSimpleValue();
var digitalJournalISSN = node.getValue("IDLDigitalJournalISSN").getSimpleValue();
var digitalJournalStatus = node.getValue("IDLDigitalJournalStatus").getSimpleValue();
var journalEntitlementPlatform = node.getValue("IDLJournalFinanceEntitlementPlatform").getSimpleValue();

//Get the simple value for Print Media Object
var printJournalCode = node.getValue("IDLPrintJournalCode").getSimpleValue();
var printJournalISSN = node.getValue("IDLPrintJournalISSN").getSimpleValue();
var printJournalStatus = node.getValue("IDLPrintJournalStatus").getSimpleValue();
var journalHomeWarehouse = node.getValue("IDLJournalHomeWarehouse").getSimpleValue(); 

//Get the simple value for Digital/Print Media Object
var journalOnlineOpen = node.getValue("IDLJournalOnlineOpen").getSimpleValue();
var jounralContentCategory = node.getValue("IDLJournalFinanceContentCategory").getSimpleValue();
var journalFinanceDivision = node.getValue("IDLJournalFinanceDivision").getSimpleValue();
var journalPublicationType = node.getValue("IDLJournalFinancePublicationType").getSimpleValue();
var journalOpenAccess = node.getValue("IDLJournalOpenAccess").getSimpleValue();
var journalAvailableInEarly = node.getValue("IDLJournalAvailableInEarlyView").getSimpleValue();

//need to figure out if this is needed since it is now a classification link

//Get the simple value of JournalTrueStatus for Journal                        //HAR01
var journalTrueStatus = node.getValue('JournalTrueStatus').getSimpleValue();   //HAR01

//Get the simple value for Digital ISSN from Journal object. 
var digitalISSN = node.getValue("ProductIssn").getSimpleValue();
var myDigitalObject;
var myPrintObject;
	if(journalMediaType == "Digital"){
		//Check to see if you can use createChildProduct
		myDigitalObject = node.createProduct('',objJDM);
		//Creates a new product with the specified ID and object type as a child to the product for which the method is invoked.
		log.info("newDigitalMediaObject= "+myDigitalObject);
		myDigitalObject.setName(journalDigitalTitle);

		//Setting the value of the Digital Media attributes at the Media level
		myDigitalObject.getValue("DigitalJournalCode").setValue(digitalJournalCode);
		myDigitalObject.getValue("ProductIssn").setValue(digitalJournalISSN);
		myDigitalObject.getValue("ProductStatus").setValue(digitalJournalStatus);
		myDigitalObject.getValue("JournalMediaCode").setValue("Electronic");
		myDigitalObject.getValue("ProductFinanceEntitlementPlatform").setValue(journalEntitlementPlatform);
		myDigitalObject.getValue("ProductFullTitle").setValue(journalDigitalTitle);
		myDigitalObject.getValue("JournalOnlineOpen").setValue(journalOnlineOpen);
		myDigitalObject.getValue("JournalAvailableInEarlyView").setValue(journalAvailableInEarly);
		myDigitalObject.getValue("JournalOpenAccess").setValue(journalOpenAccess);
		myDigitalObject.getValue("ProductFinanceDivision").setValue(journalFinanceDivision);
		myDigitalObject.getValue("ProductContentCategory").setValue(jounralContentCategory);
		myDigitalObject.getValue("ProductFinancePublicationType").setValue(journalPublicationType);
		if (journalTrueStatus == 'Yes') {                                                  //HAR01
			myDigitalObject.getValue('JournalNotPartOfPayPerView').setValue('No');        //HAR01
    			myDigitalObject.getValue('JournalNotPartOfSpecialProd').setValue('N');        //HAR01  			
		}                                                                                  //HAR01	
	}
	else if(journalMediaType == "Print"){
		myPrintObject = node.createProduct('',objJPM);
		//Creates a new product with the specified ID and object type as a child to the product for which the method is invoked.
		log.info("newPrintMediaObject= "+myPrintObject);
		myPrintObject.setName(journalPrintTitle);

		//Setting the value of the Print Media attributes at the Media level
		myPrintObject.getValue("PrintJournalCode").setValue(printJournalCode);
		myPrintObject.getValue("ProductIssn").setValue(printJournalISSN);
		myPrintObject.getValue("ProductStatus").setValue(printJournalStatus);
		myPrintObject.getValue("JournalMediaCode").setValue("Print");
		myPrintObject.getValue("JournalHomeWarehouse").setValue(journalHomeWarehouse);
		myPrintObject.getValue("ProductFullTitle").setValue(journalPrintTitle);
		myPrintObject.getValue("ProductFinanceDivision").setValue(journalFinanceDivision);
		myPrintObject.getValue("ProductContentCategory").setValue(jounralContentCategory);
		myPrintObject.getValue("ProductFinancePublicationType").setValue(journalPublicationType);
	}
	else {
		myDigitalObject = node.createProduct('',objJDM);
		myPrintObject = node.createProduct('',objJPM);
		//Creates a new product with the specified ID and object type as a child to the product for which the method is invoked.
		log.info("newPrintMediaObject= "+myPrintObject);
		myDigitalObject.setName(journalDigitalTitle);
		myPrintObject.setName(journalPrintTitle);

		//Setting the value of the Journal Media attributes at the Media level
		myDigitalObject.getValue("JournalOnlineOpen").setValue(journalOnlineOpen);
		//myPrintObject.getValue("JournalOnlineOpen").setValue(journalOnlineOpen);
		myPrintObject.getValue("JournalHomeWarehouse").setValue(journalHomeWarehouse);		
		myDigitalObject.getValue("ProductContentCategory").setValue(jounralContentCategory);
		myPrintObject.getValue("ProductContentCategory").setValue(jounralContentCategory);
		myDigitalObject.getValue("ProductFinanceDivision").setValue(journalFinanceDivision);
		myPrintObject.getValue("ProductFinanceDivision").setValue(journalFinanceDivision);
		myDigitalObject.getValue("ProductFinanceEntitlementPlatform").setValue(journalEntitlementPlatform);
		myDigitalObject.getValue("ProductIssn").setValue(digitalJournalISSN);
		myPrintObject.getValue("ProductIssn").setValue(printJournalISSN);
		myDigitalObject.getValue("DigitalJournalCode").setValue(digitalJournalCode);
		myPrintObject.getValue("PrintJournalCode").setValue(printJournalCode);
		myDigitalObject.getValue("ProductStatus").setValue(digitalJournalStatus);
		myPrintObject.getValue("ProductStatus").setValue(printJournalStatus);
		myDigitalObject.getValue("ProductFinancePublicationType").setValue(journalPublicationType);
		myPrintObject.getValue("ProductFinancePublicationType").setValue(journalPublicationType);
		myDigitalObject.getValue("JournalOpenAccess").setValue(journalOpenAccess);
		myPrintObject.getValue("JournalOpenAccess").setValue(journalOpenAccess);
		myDigitalObject.getValue("JournalMediaCode").setValue("Electronic");
		myPrintObject.getValue("JournalMediaCode").setValue("Print");
		myDigitalObject.getValue("ProductFullTitle").setValue(journalDigitalTitle);
		myPrintObject.getValue("ProductFullTitle").setValue(journalPrintTitle);
		myDigitalObject.getValue("JournalAvailableInEarlyView").setValue(journalAvailableInEarly);
		myPrintObject.getValue("JournalAvailableInEarlyView").setValue(journalAvailableInEarly);
		if (journalTrueStatus == 'Yes') {                                                  //HAR01
			myDigitalObject.getValue('JournalNotPartOfPayPerView').setValue('No');        //HAR01
    			myDigitalObject.getValue('JournalNotPartOfSpecialProd').setValue('N');        //HAR01  			
		}                                                                                  //HAR01
	};
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
  } ],
  "messages" : [ ],
  "pluginType" : "Precondition"
}
*/
exports.precondition0 = function (node,log,manager) {
if(node.getChildren().size() > 0){
	return false;
}
	return true;
}