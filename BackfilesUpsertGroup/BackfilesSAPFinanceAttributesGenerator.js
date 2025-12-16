/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BackfilesSAPFinanceAttributesGenerator",
  "type" : "BusinessAction",
  "setupGroups" : [ "BackfilesUpsertGroup" ],
  "name" : "Backfiles SAP Finance Attributes Generator",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "JournalDigitalMedia" ],
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
    "contract" : "ReferenceTypeBindContract",
    "alias" : "Journal_to_Backfile_Reference",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "Journal_to_Backfile_Reference",
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "MANAGER",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (LOG,NODE,Journal_to_Backfile_Reference,MANAGER,genericFunctions,otherProductsLibrary) {
var businessRuleHome = NODE.getManager().getHome(com.stibo.core.domain.businessrule.BusinessRuleHome)
var businessAction = businessRuleHome.getBusinessActionByID("BackfilesNameAndTitleGeneration");
var journalReferenced = NODE.queryReferencedBy(Journal_to_Backfile_Reference).asList(100).get(0).getSource();
var journalGroupCode = journalReferenced.getValue("JournalGroupCode").getSimpleValue();
businessAction.execute(NODE);

NODE.getValue("ProductSAPMaterialNumber").setSimpleValue(otherProductsLibrary.sequentialMatNoIncrement(MANAGER.getProductHome().getProductByID("ProductSequentialMatNo")));
NODE.getValue("ProductFinancePublicationType").setSimpleValue("Backfiles");
NODE.getValue("ProductContentCategory").setSimpleValue("Publishing Content");
NODE.getValue("ProductFinanceDivision").setSimpleValue("Research");
NODE.getValue("ProductFinanceEntitlementPlatform").setSimpleValue("Literatum");
NODE.getValue("SAPExternalMaterialGroup").setSimpleValue(journalGroupCode);
NODE.getValue("JournalGroupCode").setSimpleValue(journalGroupCode);
NODE.getValue("ProductOneSourceTaxCode").setSimpleValue("eJournal");
NODE.getValue("ProductMediumCode").setSimpleValue("Journal");
}