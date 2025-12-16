/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JournalEEOContentFlipDate_Validate",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalUpsertGroup" ],
  "name" : "JournalEEOContentFlipDate_Validate",
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
var ContentFlipDate = NODE.getValue("JournalEEOContentFlipDate").getSimpleValue();
var today = genericFunctions.getToday("yyyy-MM-dd");

LOG.info("ContentFlipDate " + ContentFlipDate);
LOG.info("today " + today);

if (ContentFlipDate <= today) {
	var emailTo = "datasolutions@wiley.com"; //mailTo: sasteven@wiley.com (PDM)
	var productTitle = NODE.getValue("ProductTitle").getSimpleValue();
	var emailSubject = "EEO + Content Flip Date reached for journal " + productTitle;
	var emailBody = "The Journal " + productTitle + " has reached it EEO + Content Flip Date.\nDate " + today
                   + " = " + ContentFlipDate;
	

	LOG.info("inside");
	
	genericFunctions.sendEmail(MAILHOME, emailTo, emailSubject, emailBody);
}
}