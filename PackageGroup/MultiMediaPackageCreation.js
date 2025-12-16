/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "MultiMediaPackageCreation",
  "type" : "BusinessAction",
  "setupGroups" : [ "PackageGroup" ],
  "name" : "Multi Media Package Creation",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
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
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "MANAGER",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "MULTIMEDIA",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "MultiMedia",
    "description" : null
  }, {
    "contract" : "AttributeBindContract",
    "alias" : "MMPackageId",
    "parameterClass" : "com.stibo.core.domain.impl.AttributeImpl",
    "value" : "JournalMMPackageID",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,MANAGER,LOG,MULTIMEDIA,MMPackageId,genericFunctions) {
//Check the value of node.getValue(PrintOnline).GetSimpleValue(Both), will be an if statement in the applies if
//Create the Package object, and populate the attributes
//Then create the reference, get the reference type then create the reference for the newly created product, paramter is reference type and object 
var journalGroupCode = NODE.getValue("JournalGroupCode").getSimpleValue();
var myMMPackage = MANAGER.getProductHome().getProductByID("MM_InitialCreate").createProduct('',MULTIMEDIA);
NODE.getValue(MMPackageId.getID()).setSimpleValue(myMMPackage.getID());
if (journalGroupCode.length() < 4) {
	journalGroupCode = genericFunctions.pad(journalGroupCode, 4);
}

var status = myMMPackage.getValue("ProductStatus").setSimpleValue("Current publication");
var shortTitle = myMMPackage.getValue("ProductShortTitle").setSimpleValue(NODE.getValue("ProductShortTitle").getSimpleValue());
var matGroup5 = myMMPackage.getValue("ProductFinanceBillingModel").setSimpleValue(NODE.getValue("ProductFinanceBillingModel").getSimpleValue());
var sapMatNo = myMMPackage.getValue("ProductSAPMaterialNumber").setSimpleValue(journalGroupCode + "C");
var name = myMMPackage.setName(NODE.getValue("ProductTitle").getSimpleValue());

var businessRuleHome = MANAGER.getHome(com.stibo.core.domain.businessrule.BusinessRuleHome)
var businessAction = businessRuleHome.getBusinessActionByID("AutoClassificationMultiMediaPackages");
businessAction.execute(myMMPackage);

//var headline = "MultiMedia Package Created Successfully!"
//return headline;


}
/*===== business rule plugin definition =====
{
  "pluginId" : "AttributeComparatorCondition",
  "parameters" : [ {
    "id" : "Attribute1",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : "ProductMediaType"
  }, {
    "id" : "Attribute2",
    "type" : "com.stibo.core.domain.Attribute",
    "value" : null
  }, {
    "id" : "Constant",
    "type" : "java.lang.String",
    "value" : "Both"
  }, {
    "id" : "Operator",
    "type" : "java.lang.String",
    "value" : "="
  } ],
  "pluginType" : "Precondition"
}
*/
