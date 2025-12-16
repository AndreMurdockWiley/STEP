/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_AuthorServicesJournalDataExtract",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "Author Services Journal Data Extract",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
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
    "contract" : "InboundBusinessProcessorExecutionReportLoggerBindContract",
    "alias" : "reportLogger",
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
    "contract" : "MailHomeBindContract",
    "alias" : "mailHome",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (manager,log,reportLogger,inboundMessage,mailHome) {
// List of date-related attributes
var dateJSONAttributes = ["JournalAuthorServicesStartDate", "JournalAuthorServicesEndDate"];

//List of LOV attributes
var lovJSONAttributes = ["JournalAuthorServicesNeedsOAPayment", "JournalAuthorServicesParticipation"];

//User Mail IDs to send the Failed Journal reports
var userMailID = ["arpragash@wiley.com", "stepdevteam@wiley.com", "icraig@wiley.com"];

try {
    // Parse the single inbound JSON message
    var journalData = JSON.parse(inboundMessage.getMessage());
    
    // Extract the objectID from the masterId inside isPartOf
    var objectID = journalData.data.isPartOf.masterId;

    // Log information for debugging
    log.info("Processing Object with masterId: " + objectID);

    // Retrieve the Journal Product object using the masterId
    var journalProd = manager.getProductHome().getProductByID(objectID); // Updated method to retrieve the object

    if (journalProd) {
        // Extract base configuration from the message
        var baseConfig = journalData.data.baseConfiguration;

        // Log base configuration info
        log.info("Base Configuration: " + JSON.stringify(baseConfig));

        // Update base configuration attributes
        if (baseConfig.invitedInAs != undefined && baseConfig.invitedInAs != null) {
            if (baseConfig.invitedInAs == true) {
                journalProd.getValue("JournalAuthorServicesParticipation").setLOVValueByID("Y");
                log.info("JournalAuthorServicesParticipation: " + baseConfig.invitedInAs);
            } else {
                journalProd.getValue("JournalAuthorServicesParticipation").setLOVValueByID("N");
            }
        }

        // Process date fields
        var invitedInAsStartDate = baseConfig.invitedInAsStartDate;
        var invitedInAsEndDate = baseConfig.invitedInAsEndDate;

        // Convert the dates from "YYYY-MM-DD" to a format suitable for the MDM system
        // Set the startDate attribute
        if (invitedInAsStartDate) {
            var dateToNumStart = parseFloat(invitedInAsStartDate.replace(/-/g, ''));
            
            var dateStrStart = dateToNumStart.toString().substring(0, 4) + "-" + dateToNumStart.toString().substring(4, 6) + "-" + dateToNumStart.toString().substring(6, 8);
            journalProd.getValue("JournalAuthorServicesStartDate").setValue(dateStrStart);
            log.info("Set invitedInAsStartDate to: " + dateStrStart);
        } else {
        	if (journalProd.getValue("JournalAuthorServicesStartDate").getSimpleValue()){
        		journalProd.getValue("JournalAuthorServicesStartDate").deleteCurrent();
        	}
        }
        
        // Set the needsOaPayment attribute
        if (baseConfig.needsOaPayment != undefined && baseConfig.needsOaPayment != null) {
            if (baseConfig.needsOaPayment == true) {
                journalProd.getValue("JournalAuthorServicesNeedsOAPayment").setLOVValueByID("Y");
                log.info("Set needsOaPayment to: " + baseConfig.needsOaPayment);
            } else {
                journalProd.getValue("JournalAuthorServicesNeedsOAPayment").setLOVValueByID("N");
            }
        }

        // Set the endDate attribute
        if (invitedInAsEndDate) {
            var dateToNumEnd = parseFloat(invitedInAsEndDate.replace(/-/g, ''));
            var dateStrEnd = dateToNumEnd.toString().substring(0, 4) + "-" + dateToNumEnd.toString().substring(4, 6) + "-" + dateToNumEnd.toString().substring(6, 8);
            journalProd.getValue("JournalAuthorServicesEndDate").setValue(dateStrEnd);
            log.info("Set invitedInAsEndDate to: " + dateStrEnd);
        } else {
        	if (journalProd.getValue("JournalAuthorServicesEndDate").getSimpleValue()){
        		journalProd.getValue("JournalAuthorServicesEndDate").deleteCurrent();
        	}
        }

        reportLogger.logInfo("Journal Object with masterId: " + objectID + " updated successfully.");
        log.info("Journal Object with masterId: " + objectID + " updated successfully, "+ "for the id : "+journalData.id);
    } else {

        throw new java.lang.RuntimeException("No Journal Object exist with ID '" + objectID + "' in STEP environment.");
        log.info("Journal Object with masterId: " + objectID + " not present.");
    }
} catch (e) {
    // Catch any errors encountered during the process and log them
    if (objectID == undefined) {
        log.info("inside if")
        reportLogger.logInfo("Error encountered while processing the Journal Object for Author Service ID: " + journalData.data.isPartOf.asId + "Error: masterID is not included in the transmitted message." + " For the message ID : "+journalData.id);
        for (var m = 0; m < userMailID.length; m++) {
            mailHome.mail()
                .addTo(userMailID[m])
                .subject("Journal Error: Missing MasterID in Inbound 'Author Services Inbound Kafka Message")
                .htmlMessage("\nError encountered while processing the Journal Object for Author Service ID: " + journalData.data.isPartOf.asId + ".<br/><b>Error: <i>masterID</i></b> is not included in the transmitted message.")
                .send();
        }
    } else {
        log.info("insdie else")
        reportLogger.logInfo("Error encountered while processing Journal Object associated with masterId: " + objectID + ". Error: " + e.message+ ". For the message ID : "+journalData.id);
        log.info("Error processing Journal Object with masterId: " + objectID + ". Error: " + e.message);
        for (var m = 0; m < userMailID.length; m++) {
            mailHome.mail()
                .addTo(userMailID[m])
                .subject("Journal Error: ID Not Found in STEP for Inbound 'Author Services Inbound Kafka' Message")
                .htmlMessage("\n Error encountered while processing Journal Object associated with masterId: <b><i>" + objectID + ".</i></b> <br/><br/><b>Error: </b>" + e.message)
                .send();
        }
    }
}
}