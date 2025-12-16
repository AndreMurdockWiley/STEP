/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Data_Tranformations",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "Data Tranformations",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "JournalDigitalMedia" ],
  "allObjectTypesValid" : false,
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
    "alias" : "object",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ListOfValuesBindContract",
    "alias" : "ipowningcompany",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (log,object,ipowningcompany) {
log.info("ipOwningCmpanies.." + ipowningcompany.queryValidValues());
//let ipowninglist = (Query)ipowningcompany.queryValidValues();
//ipowningcompany.queryValidValues();
//let ipOwningCmpanies = ['1001','3310','3320','5501','5506','5528','5532']
var ipOwningCompany = object.getValue('IP_Owning_SAP_Company');
var SAPPlant = object.getValue('SAP_Plants');
log.info("IP owning company:"+ipOwningCompany.getSimpleValue());
if(ipOwningCompany.getSimpleValue() == "1001")
{
	log.info('Inside if condition...'+object.getValue("SAP_Plants"));
	object.getValue("SAP_Plants").append().addValue("1033").addValue("1013").apply();
	log.info('After setting value:'+object.getValue("SAP_Plants").getSimpleValue())
	
}


}