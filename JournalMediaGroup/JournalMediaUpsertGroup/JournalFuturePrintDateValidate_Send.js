/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JournalFuturePrintDateValidate_Send",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalMediaUpsertGroup" ],
  "name" : "Journal Future Print Status Effect Date Validate Send",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "JournalDigitalMedia" ],
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
    "contract" : "MailHomeBindContract",
    "alias" : "MAILHOME",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ {
    "variable" : "Message",
    "message" : "<b>The Effective date must be Future date or Greater than Today's date.</b>",
    "translations" : [ ]
  } ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,MAILHOME,LOG,Message,genericFunctions) {
var journalEffectiveDatePrint = NODE.getValue("JournalMediaFuturePrintStatusEffectDate").getSimpleValue();
var journalEffectiveDateDigital = NODE.getValue("JournalFutureDigitalStatusEffectDate").getSimpleValue();
var today = genericFunctions.getToday("yyyy-MM-dd");

LOG.info("journalEffectiveDatePrint " + journalEffectiveDatePrint);
LOG.info("journalEffectiveDateDigital " + journalEffectiveDateDigital);
LOG.info("today " + today)
var message = new Message();

if ((journalEffectiveDatePrint <= today) ||((journalEffectiveDateDigital <= today))){
	throw message;
}

else{
	return true;
}
}