/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "SAPFinanceAttributesGenerator",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalUpsertGroup" ],
  "name" : "SAP Finance Attributes Generator",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "JournalDigitalMedia" ],
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
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (LOG,NODE,genericFunctions) {
/*
 * This code does the following: 
 * - Gets the journal group code and journal media code from the current object
 * - Creates a custom function which will pad 0 to teh journal group code if its length is less than 4
 * - It transforms the journal media code into P or D depending if its Print or others.
 * - It concatenates the journal group code with the journal media code and populates the SAP material number of the current object
 */
var journalGroupCode = NODE.getValue("JournalGroupCode").getSimpleValue();

if (journalGroupCode.length() < 4) {
	journalGroupCode = genericFunctions.pad(journalGroupCode, 4);
}

var myChilds = NODE.getChildren();

for(var i=0; i<myChilds.size();i++) {
	var journalMediaCode = genericFunctions.mediaCodeTransformation(myChilds.get(i).getValue("JournalMediaCode").getSimpleValue());

	//LOG.info(journalGroupCode + journalMediaCode);
	myChilds.get(i).getValue("ProductSAPMaterialNumber").setSimpleValue(journalGroupCode + journalMediaCode);
}	
}
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
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation1 = function (LOG,NODE,genericFunctions) {
/*
 * This code does the following:
 * - Gets SAP material number and media code
 * - Transforms the media code to a single letter depending on the value
 * - Populates Journal ID code concatenating SAP material number with -0000-0000- and media code
*/

var myChilds = NODE.getChildren();

for(var i=0; i<myChilds.size();i++) {
	var journalSapMaterialNumber = myChilds.get(i).getValue("ProductSAPMaterialNumber").getSimpleValue();
	var journalMediaCode = genericFunctions.mediaCodeTransformation(myChilds.get(i).getValue("JournalMediaCode").getSimpleValue());

	journalSapMaterialNumber = journalSapMaterialNumber.slice(0, -1);
	//LOG.info(journalSapMaterialNumber);

	myChilds.get(i).getValue("JournalFinanceJournalIdCodeProductlevel").setSimpleValue(journalSapMaterialNumber + "-0000-0000-" + journalMediaCode);
}	
}
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation2 = function (NODE,genericFunctions) {
var myChilds = NODE.getChildren();
var sapMaterialNumber = "";
var mediaCode = "";

for(var i=0; i < myChilds.size(); i++) {
	sapMaterialNumber = myChilds.get(i).getValue("ProductSAPMaterialNumber").getSimpleValue();
	mediaCode = myChilds.get(i).getValue("JournalMediaCode").getSimpleValue();

	NODE.getValue("JournalIssueTemplateCreation").setSimpleValue("true");
	
	myChilds.get(i).getValue("JournalFinanceHigherLevelMediaProduct").setSimpleValue(sapMaterialNumber);
	myChilds.get(i).getValue("SAPExternalMaterialGroup").setSimpleValue(NODE.getValue("JournalGroupCode").getSimpleValue());
	myChilds.get(i).getValue("IssueTemplateMaterialNumber").setSimpleValue(sapMaterialNumber + "_TEMPLATE");
	myChilds.get(i).getValue("IssueTemplateTitle").setSimpleValue(sapMaterialNumber + " " + NODE.getValue("ProductTitle").getSimpleValue() + "_TEMPLATE");

	if (mediaCode == "Print"){
		myChilds.get(i).getValue("ProductOneSourceTaxCode").setSimpleValue("pJournal");
	} else {
		myChilds.get(i).getValue("ProductOneSourceTaxCode").setSimpleValue("eJournal");
	}
}
}