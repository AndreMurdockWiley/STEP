/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "MultiJournalEffectiveDateValidate",
  "type" : "BusinessAction",
  "setupGroups" : [ "PackageGroup" ],
  "name" : "Multi Journal Effective Date Validate",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "MultiJournal" ],
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
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,MAILHOME,LOG,genericFunctions) {
var multiJournalEffectiveDate = NODE.getValue("MultiJournalEffectiveDate").getSimpleValue();
var today = genericFunctions.getToday("yyyy-MM-dd");

LOG.info("multiJournalEffectiveDate " + multiJournalEffectiveDate);
LOG.info("today " + today);

if (multiJournalEffectiveDate <= today) {
	var emailTo = "sasteven@wiley.com"; //mailTo: sasteven@wiley.com (PDM)
	var multiJournalFuturePackageStatus = NODE.getValue("MultiJournalFuturePackageStatus").getSimpleValue();
	var multiJournalTitle = NODE.getValue("ProductTitle").getSimpleValue();
	var emailSubject = "Future Date reached for Multi Journal " + multiJournalTitle;
	var emailBody = "The Multi Journal " + multiJournalTitle + " has reached it Effective Date.\nNew Multi Journal Status is "
                   + NODE.getValue("MultiJournalFuturePackageStatus").getSimpleValue() + "\nDate " + today
                   + " <= " + multiJournalEffectiveDate;

	NODE.getValue("MultiJournalEffectiveDate").setSimpleValue("");

	LOG.info("inside");
	
	genericFunctions.sendEmail(MAILHOME, emailTo, emailSubject, emailBody);
}
}