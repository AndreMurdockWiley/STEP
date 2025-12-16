/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "OPSAPFinanceAttributesGenerator",
  "type" : "BusinessAction",
  "setupGroups" : [ "OtherProductsUpsertGroup" ],
  "name" : "OP SAP Finance Attributes Generator",
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
exports.operation0 = function (LOG,NODE,MANAGER,genericFunctions,otherProductsLibrary) {
var oneSourceTaxCode = "";
var bundleCodeId = "";
var bundleCodeDataContainerList = genericFunctions.getDataContainerObjects(NODE,"BundleGroup_BundleCode_DataContainer");
var iter = bundleCodeDataContainerList.iterator();
var bundleCodeDataContainer = "";
var bundleGroupCodeID = "";

while (iter.hasNext()) {
	bundleCodeDataContainer = iter.next().getDataContainerObject();
	bundleGroupCodeID = bundleCodeDataContainer.getValue("ProductBundleGroupID").getSimpleValue();
	bundleCodeId = bundleCodeDataContainer.getValue("ProductBundleCodeID").getSimpleValue();

	if (bundleGroupCodeID == 'TP' || bundleGroupCodeID == 'RP'){
		if (bundleCodeId == "ENOW"){
			oneSourceTaxCode = ("eJournal")
		} else if (bundleCodeId == "SNOW"){
			oneSourceTaxCode = ("sFreight_Dom")
		} else {
			oneSourceTaxCode = "eBooks";
		}
	}
}

//LOG.info(oneSourceTaxCode);

NODE.getValue("ProductSAPMaterialNumber").setSimpleValue(otherProductsLibrary.sequentialMatNoIncrement(MANAGER.getProductHome().getProductByID("ProductSequentialMatNo")));
NODE.getValue("ProductContentCategory").setSimpleValue("Publishing Content");
NODE.getValue("ProductFinanceDivision").setSimpleValue("Research");
NODE.getValue("SAPExternalMaterialGroup").setSimpleValue("NONJ");
NODE.getValue("ProductOneSourceTaxCode").setSimpleValue(oneSourceTaxCode);
}