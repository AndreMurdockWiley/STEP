/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "UpdatePrintISSNKey",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalMediaUpsertGroup" ],
  "name" : "Update Print ISSN Key",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia" ],
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
    "contract" : "AttributeValidatedContextParameterStringBinding",
    "alias" : "newISSN",
    "parameterClass" : "com.stibo.core.domain.businessrule.attributecontextparameter.AttributeValidatedContextParameter",
    "value" : "<AttributeValidatedContextParameter>\n  <Parameters>\n    <Parameter ID=\"Attribute\" Type=\"java.lang.String\">ProductIssn</Parameter>\n    <Parameter ID=\"ID\" Type=\"java.lang.String\">New ISSN</Parameter>\n  </Parameters>\n</AttributeValidatedContextParameter>",
    "description" : null
  }, {
    "contract" : "DataIssuesContextBind",
    "alias" : "DIR",
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
    "contract" : "BusinessActionBindContract",
    "alias" : "ISSNUPDATERULE",
    "parameterClass" : "com.stibo.core.domain.impl.businessrule.FrontBusinessActionImpl",
    "value" : "JournalHistoryISSNUpdate",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,MANAGER,newISSN,DIR,LOG,ISSNUPDATERULE,genericFunctions) {
var journalStatus = NODE.getValue("JournalTrueStatus").getSimpleValue();
var journalMediaType = NODE.getValue("ProductMediaType").getSimpleValue();
var attributeID = "ProductIssn";

if (!(journalStatus == "No")){
	var authResult = genericFunctions.issnAuthentication(newISSN, LOG);
}else{
	var authResult = true;
}

if(authResult == true){
	genericFunctions.setValueToKeyAttribute(MANAGER,NODE,attributeID,newISSN);
	
	ISSNUPDATERULE.execute(NODE);
} else{
	DIR.addError(authResult);
		
	return DIR;
}
}