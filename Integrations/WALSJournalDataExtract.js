/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "WALSJournalDataExtract",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "WALS Journal Data Extract",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
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
    "contract" : "ManagerBindContract",
    "alias" : "manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "log",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "MailHomeBindContract",
    "alias" : "mailHome",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "InboundBusinessProcessorImporterSourceBindContract",
    "alias" : "inboundMessage",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "InboundBusinessProcessorExecutionReportLoggerBindContract",
    "alias" : "reportLogger",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (manager,log,mailHome,inboundMessage,reportLogger,genericFunctions) {
try {
    // Parse the single inbound JSON message
    var journalData = JSON.parse(inboundMessage.getMessage());
    reportLogger.logInfo("journalData : "+inboundMessage.getMessage())
    // Extract the objectID from the masterId inside isPartOf
    var objectID = journalData.data.isPartOf.masterId;

    // Log information for debugging
    log.info("Processing Object with masterId: " + objectID);

    // Retrieve the Journal Product object using the masterId
    var journalProd = manager.getProductHome().getProductByID(objectID); // Updated method to retrieve the object
   reportLogger.logInfo("journal Product" + journalProd);
    if (journalProd) {
        // Extract base configuration from the message
        var journalData = journalData.data;
		reportLogger.logInfo("walsParticipation"+journalData.walsParticipation);
        // Update  attributes
        if (journalData.walsParticipation != undefined && journalData.walsParticipation != null) {
            if (journalData.walsParticipation == true) {
                journalProd.getValue("JournalWalsParticipation").setSimpleValue("Yes");
            }
            if (journalData.walsParticipation == false) {
                journalProd.getValue("JournalWalsParticipation").setSimpleValue("No");
            }
        } else {
            if (journalProd.getValue("JournalWalsParticipation").getSimpleValue()) {
                journalProd.getValue("JournalWalsParticipation").deleteCurrent();
            }
        }
        // Process date fields
        var walsParticipationStartDate = journalData.walsParticipationStartDate;

        // Convert the dates from "YYYY-MM-DD" to a format suitable for the MDM system
        // Set the startDate attribute
       reportLogger.logInfo("walsParticipationStartDate"+walsParticipationStartDate);
        if (walsParticipationStartDate) {
            var dateToNumStart = parseFloat(walsParticipationStartDate.replace(/-/g, ''));
            var dateStrStart = dateToNumStart.toString().substring(0, 4) + "-" + dateToNumStart.toString().substring(4, 6) + "-" + dateToNumStart.toString().substring(6, 8);
            journalProd.getValue("JournalWalsParticipationStartDate").setValue(dateStrStart);            
        } else {
            if (journalProd.getValue("JournalWalsParticipationStartDate").getSimpleValue()) {
                journalProd.getValue("JournalWalsParticipationStartDate").deleteCurrent();
            }
        }

        //        get the templates
        var dataContainers = genericFunctions.getDataContainerObjects(journalProd, "LicenseTemplate");
        var iter = dataContainers.iterator();
        while (iter.hasNext()) {
            var dc = iter.next().deleteLocal();
        }

        var licenseTemplates = journalData.licenseTemplates;
        if (licenseTemplates) {
            var dataContainer = journalProd.getDataContainerByTypeID("LicenseTemplate");            
            
            journalData.licenseTemplates.forEach(function(element) {
                reportLogger.logInfo("element - " + JSON.stringify(element));
                var dataContainerRowCreate = dataContainer.addDataContainer().createDataContainerObject('');
                element = element.template;
                var licenseType = element.licenseType;                
                dataContainerRowCreate.getValue("template_licenseType").setSimpleValue(licenseType);
                reportLogger.logInfo("DCT : " + dataContainerRowCreate.getValue("template_licenseType").getSimpleValue())

                var licenseSubType = element.licenseSubType;
                dataContainerRowCreate.getValue("template_LicenseSubType").setSimpleValue(licenseSubType);

                var use = element.use;
                dataContainerRowCreate.getValue("template_use").setSimpleValue(use);

                var Name = element.name;
                dataContainerRowCreate.getValue("template_name").setSimpleValue(Name);
                reportLogger.logInfo(licenseType + " : " + licenseSubType + " : " + use + " : " + Name)

            });
        }
    }
} catch (e) {
    logger.info("e" + e);
}
}