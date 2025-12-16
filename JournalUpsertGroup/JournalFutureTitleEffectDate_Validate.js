/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JournalFutureTitleEffectDate_Validate",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalUpsertGroup" ],
  "name" : "Journal Future Title Effect Date Validate",
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
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,MAILHOME,LOG,genericFunctions) {
var journalEffectiveDate = NODE.getValue("JournalFutureTitleEffectDate").getSimpleValue();
var today = genericFunctions.getToday("yyyy-MM-dd");

LOG.info("journalEffectiveDate " + journalEffectiveDate);
LOG.info("today " + today);

if (journalEffectiveDate <= today) {
	var emailTo = "sasteven@wiley.com"; //mailTo: sasteven@wiley.com (PDM)
	var productTitle = NODE.getValue("ProductTitle").getSimpleValue();
	var emailSubject = "Future Date reached for journal " + productTitle;
	var emailBody = "The Journal " + productTitle + " has reached it Effective Date.\nNew Journal Title is "
                   + NODE.getValue("JournalFutureTitle").getSimpleValue() + "\nDate " + today
                   + " <= " + journalEffectiveDate;
	
	NODE.getValue("JournalFutureTitleEffectDate").setSimpleValue("");

	LOG.info("inside");
	
	genericFunctions.sendEmail(MAILHOME, emailTo, emailSubject, emailBody);
}
}