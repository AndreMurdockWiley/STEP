/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Auto_Populate_Bundle_Code",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalUpsertGroup" ],
  "name" : "Auto Populate Bundle Code",
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
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
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
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (log,node,manager) {
var journalObject = null; 
var backfileObject = null; 

var objTypeID = node.getObjectType().getID();
	if(objTypeID == 'Journal'){
		journalObject = "Journal";
	}

var journalDataContainerType = node.getDataContainerByTypeID("BundleGroup_BundleCode_DataContainer"); //.getDataContainers();
//var newDataContainer = node.getDataContainerByTypeID("BundleGroup_BundleCode_DataContainer").getDataContainers();
//if(!newDataContainer){return true}
if(journalObject == "Journal"){
	var newJournalDataContainer1 = journalDataContainerType.addDataContainer().createDataContainerObject('');
	var bundleCode1 = "Journals";
	var bundleGroup1 = "Journal";
	var subType1 = 'Not Applicable';
	newJournalDataContainer1.getValue("ProductBundleCode").setSimpleValue(bundleCode1);
	newJournalDataContainer1.getValue("ProductBundleGroup").setSimpleValue(bundleGroup1);
	newJournalDataContainer1.getValue("ProductBundleSubscriptionType").setSimpleValue(subType1);
	log.info("Hello World");
	var newJournalDataContainer2 = journalDataContainerType.addDataContainer().createDataContainerObject('');
	var bundleCode2 = "Journals Product group TP";
	var bundleGroup2 = "Renewal Paid";
	var subType2 = 'Not Applicable';
	newJournalDataContainer2.getValue("ProductBundleCode").setSimpleValue(bundleCode2);
	newJournalDataContainer2.getValue("ProductBundleGroup").setSimpleValue(bundleGroup2);
	newJournalDataContainer2.getValue("ProductBundleSubscriptionType").setSimpleValue(subType2);
}
}