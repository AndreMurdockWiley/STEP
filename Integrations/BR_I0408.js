/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BR_I0408",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "BR_I0408",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "Generic_Search_Functions",
    "libraryAlias" : "genericSearch"
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
    "contract" : "InboundBusinessProcessorImporterSourceBindContract",
    "alias" : "inboundMessage",
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
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (manager,inboundMessage,log,reportLogger,genericSearch) {
// I0408 interface
// Inbound issue Publication events from Wiley Online Library (WOL) aka Literatum. Updates the matched issue run date in STEP with the online publication date of the issue.
// Logic is to match by Issue DOI first and if no match search STEP by eISSN, Volume and Issue number. The inbound productCode is not not a unique id for some journals i.e. parts
// Exceptions are geenrated to PDM Error Dashboard for unmatched journals and issues. Note STEP only has WOL issues for > 2016 and WOL can generate events for issues published prior
// for content reloads and backfiles / publisher takeovers so this might generate false errors to the PDM error dashboard.

// Revision History
//
// 08/17/2022 - Added support to check inbound WOL event for published issue year and compare to issues setup in STEP. Only generate a dashboard error
//              if the publication year is setup in STEP and the issue cannot by found (in any publication year). This will filter out false positive errors for issue re-published in WOL
//              for which there is no publication year setup in STEP i.e < 2016, backfiles and takeovers.
//				ESB team adding support to add "issuePubYear" to JSON payload
// 11/14/2022 - Added check to not update WOL IssueRunDate/Publication Date once set.
//              Check to see if the existing IssueRunDate is null. If already populated then skip processing
//              publication event - JW



/* Sample Inbound payload
{ 
"doi":" 10.1002/admi.v7.24", 
"productCode ":"ADMI",
"volumeNumber":"7",
"issueNumber":"24-25",
"issuePubYear":"2022",
"issue_digital_final_publication_date":"2022-06-30T10:04:58.91-07:00",
"eissn" : "1552-4833"
}
*/


try {

    log.info("I0408: STARTED PROCESSING WOL FEED: \n" + inboundMessage.getMessage());
    var prodMessage = JSON.parse(inboundMessage.getMessage());
    var journalNodeFound = null;
    var node = manager.getNodeHome();
    var doi = prodMessage.doi;
    var productCode = prodMessage.productCode;
    var volumeNumber = prodMessage.volumeNumber;
    var issueNo = prodMessage.issueNumber;
	var issuePubYear = prodMessage.issuePubYear;
    var issue_digital_final_publication_date = prodMessage.issue_digital_final_publication_date;
    var eissn = prodMessage.eissn;
	
	var pubYearSetupSTEP = false;

    // Normalize eISSN to remove hyphen
    eissn = eissn.replace(/-/g, '')

    // Convert from WOL DateTime to STEP Date
    //var issue_digital_run_date =  new Date('2019-12-30T10:04:58.91-07:00');
    //var issue_digital_final_publication_date = wol_publication_datetime;
    //var issue_digital_final_publication_date = issue_digital_run_date.getFullYear() + '-'  + (issue_digital_run_date.getMonth()+1) + '-' +  issue_digital_run_date.getDate();

    issue_digital_final_publication_date = issue_digital_final_publication_date.substring(0, issue_digital_final_publication_date.indexOf("T"));

    log.info("I0408: Converted Datetime : " + issue_digital_final_publication_date);

    // Parse IssueNo for Regular, Merged and Supplement Issues
    if (issueNo.indexOf("-") > 0) {
        // Parse Merged Issue i.e 2-3

        var fromIssueNo = issueNo.substring(0, issueNo.indexOf("-"));
        var toIssueNo = issueNo.substring(issueNo.indexOf("-") + 1, issueNo.length);
        var issueType = 'Merged';

        // Parse Supplment Issue i.e. S2

    } else if (issueNo.indexOf("S") == 0) {
        var SupplementIssueNo = issueNo.substring(issueNo.indexOf("S") + 1, issueNo.length);
        var issueType = 'Supplement';

    } else {
        // default to Regular Issue
        var fromIssueNo = issueNo
        var issueType = 'Regular';

    }

    log.info("I0408: STARTED JOURNAL ISSUE SEARCH");

    searchOnAttribute();

    log.info("I0408: COMPLETED PROCESSING WOL FEED");

} catch (e) {
    //log.info("ERROR IN PROCESSING WOL FEED : " + e);
    var myErrorObj = manager.getProductHome().getProductByID("Active_Errors").createProduct(null,"Error_Record");
    	myErrorObj.getValue("Error_Description").setSimpleValue(e);
	myErrorObj.getValue("Error_JournalProductCode").setSimpleValue(productCode);
	//myErrorObj.getValue("Error_IssueDoi").setSimpleValue(doi.split("/")[0]);
	myErrorObj.getValue("Error_IssueDoi").setSimpleValue(doi);
	myErrorObj.getValue("Error_IssueNumber").setSimpleValue(issueNo);
	myErrorObj.getValue("Error_VolumeNumber").setSimpleValue(volumeNumber);
	myErrorObj.getValue("Error_IssueIssn").setSimpleValue(eissn);
	myErrorObj.setName(myErrorObj.getID());
	var dateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	log.info("setDate : " );
	var now = dateFormat.format(new Date());	
	myErrorObj.getValue("Error_Timestamp").setSimpleValue(now);
	
	if(journalNodeFound != null){
		log.info("JournalNode : " + journalNodeFound);
		myErrorObj.createReference(journalNodeFound,"ErrorObject2ImportNodeReference");	
	//	var journalMediaObjectsFound = journalNodeFound.getChildren().iterator();
	//	while (journalMediaObjectsFound.hasNext()) {
	//		var MediabjectNode = journalMediaObjectsFound.next();
	//		myErrorObj.createReference(MediabjectNode,"ErrorObject2ImportNodeReference");	
	//	}
		
	} 
	
	var wfObj = manager.getWorkflowHome().getWorkflowByID("Error_Review_WF");
	var wfInst = myErrorObj.getWorkflowInstance(wfObj);
	var wfTask = wfInst.getTaskByID("New_Error");
	myErrorObj.getValue("Error_JSON_Load").setSimpleValue(inboundMessage.getMessage());
	wfTask.triggerByID("toWOL","to WOL error State");
	log.info("ERROR IN PROCESSING WOL FEED : " + e);
}

function searchOnAttribute() {
    var searchHome = manager.getHome(com.stibo.core.domain.singleattributequery.SingleAttributeQueryHome);
    //may need to make this case insesitive for IssueDOI search
    var attribute = manager.getAttributeHome().getAttributeByID("IssueDoi");
    var searchArg = new com.stibo.core.domain.singleattributequery.SingleAttributeQueryHome.SingleAttributeQuerySpecification(com.stibo.core.domain.Product, attribute, doi);
    var foundIssues = searchHome.querySingleAttribute(searchArg).asList(100);
    
	log.info("Found Issues Array : " + foundIssues);
	log.info("Number of issues found : " + foundIssues.size());

    if (foundIssues.size() > 2) {
        log.info("I0408: Multiple Issues matches found for DOI");
        throw new Error("Multiple Issues matches found for DOI");
        return false;
    } else if (foundIssues.size() == 2) {

		// We have found the print + digital issue. Need to retrieve the digital issue node only to
		// update the issue run date

        var issueNode = foundIssues.get(0);
        var issueNode1 = foundIssues.get(1);
        var issueNodeType = issueNode.getObjectType().getID();

        log.info("I0408: Issue Object Type : " + issueNodeType);

        if (issueNodeType == 'JournalDigitalIssues') {

            log.info("I0408: Started Updating journal Digital Issue")

            updateIssuesAttrVal(issueNode);
        } else {

            log.info("I0408: Started Updating journal Digital Issue")

            updateIssuesAttrVal(issueNode1);
        }

	// We have found the digital issue. Update the issue run date.
    } else if (foundIssues.size() == 1) {
    	
        var issuesNode = foundIssues.get(0);
        log.info("I0408: Started updating " + issuesNode.getObjectType().getName())
        updateIssuesAttrVal(issuesNode);
		
    } else {
		
        // Unable to match on issueDOI. Fallback to using search on ISSN, Volume and Issue
        attribute = manager.getAttributeHome().getAttributeByID("ProductIssn");
        searchArg = new com.stibo.core.domain.singleattributequery.SingleAttributeQueryHome.SingleAttributeQuerySpecification(com.stibo.core.domain.Product, attribute, eissn);
        foundProds = searchHome.querySingleAttribute(searchArg).asList(100);
		
        if (foundProds.size() > 1) {
            log.info("I0408: Multiple Journal Media matches found for eISSN");
            throw new Error("Multiple Journal Media matches found for eISSN");
            return false;
        
		} else if (foundProds.size() == 1) {
            
			var journalMediaNode = foundProds.get(0);
            journalNodeFound = journalMediaNode;
			
            if (journalMediaNode) {
                log.info('I0408: Found Journal Media : ' + journalMediaNode.getID());
                log.info("I0408: Started getting Journal volume");
				
                var issuesObject = getJournalVolume(journalMediaNode);
		
               if (issuesObject != null) {
				   
				   // We have matched volume and issue in STEP
				   
					log.info("I0408: Found issue match and started updating : " + issuesObject.getID());
					updateIssuesAttrVal(issuesObject);
					return true;
					
               } else if ((issuesObject == null) && (pubYearSetupSTEP == true)) {
				   
				    // Cannot find volume and issue in STEP and we have matching publicationYear setup in STEP
				   
	                log.info("I0408: No Issue was found with that volume and issue number");
                    throw new Error("Inbound WOL event unable to match a Volume and Issue in STEP");
					return false;
					
			   } else {
				   
				   // WOL event received for a issuePubYear that is not setup in STEP.
				   // Typically this will be for republish of issues < 2016, backfiles and takeovers
				   // This should capture the majority of false positives when processing WOL events
				   
				   log.info("I0408: WOL event received for an issue in a publication year not setup in STEP");
				   return false;
				   
			   }

		
            //    if ((issuesObject == null) && (pubYearSetupSTEP == true)) {
            //       log.info("I0408: No Issue was found with that volume and issue number");
            //        throw new Error("Inbound WOL event unable to match a volume and issue in STEP");
			//		return false;
             //   }
             //   log.info("I0408: Found issue match and started updating : " + issuesObject.getID());
            //    updateIssuesAttrVal(issuesObject);
            //    return true;
            }
			
        } else {
            log.info("I0408 No Journals match by eISSN");
            throw new Error("Inbound WOL event unable to match any Journal in STEP by eISSN");
            return false;
        }
    }
}

function getJournalVolume(node) {
    // This node is the digital media node; Get publication year;
    log.info('Journal Volume found : ' + node.getID());

    var pubYearObjects = node.getChildren().iterator();
    log.info("Debug pubYearObjects Children : " + pubYearObjects);


    // Iterate over Publication Years in Product Master for this Journal Offering (Digital)
    while (pubYearObjects.hasNext()) {
        // log.info('Inside While');

        var pubYearObjectNode = pubYearObjects.next();
        log.info('Publication Year ID :' + pubYearObjectNode.getID())
        var publicationYear = pubYearObjectNode.getValue('ProductPublicationYear').getSimpleValue();
        log.info("Product Publication Year : " + publicationYear)


		// Set pubYearSetupSTEP true if inbound publish event year matches
		// for publication year setup in STEP. Use this flag to toggle off missing issue dsahboard error for publication
		// years not setup in STEP.
		
		if (publicationYear == issuePubYear) {
			// Set Flag that inbound WOL published year is present in STEP
			pubYearSetupSTEP = true;
		}

        var volObjects = pubYearObjectNode.getChildren().iterator();
        // Iterate over Volumes
        while (volObjects.hasNext()) {

            var volObjectNode = volObjects.next();
            log.info("Children Volume ID : " + volObjectNode.getID())
            var volNumber = volObjectNode.getValue('IssueVolumeNumber').getSimpleValue();

            log.info('Volume Number: ' + volNumber)
            if (volNumber == volumeNumber) {
                log.info('Matched volume:' + volNumber)
                var issuesObjectNode = volObjectNode.getChildren().iterator();
                log.info('issuesObjectNode:' + issuesObjectNode)

                // var issuesObjectNode = volObjectNode.getChildren().iterator();
                while (issuesObjectNode.hasNext()) {
                    // Need to check first issue in a Volume.......
                    var issueObjectNode = issuesObjectNode.next();
                    // Need to check Regular Issue, Merged Issue, Supplement Issue
                    log.info("Issue : " + issueObjectNode.getID())
                    var issueFromNumber = issueObjectNode.getValue('IssueFromIssueNumber').getSimpleValue();
                    var issueToNumber = issueObjectNode.getValue('IssueToIssueNumber').getSimpleValue();
                    var SupplementNumber = issueObjectNode.getValue('IssueSupplementNo').getSimpleValue();

                    log.info('issueFromNumber:' + issueFromNumber)
                    log.info('issueToNumber:' + issueToNumber)
                    log.info('SupplementNumber:' + SupplementNumber)
                    log.info('issueType:' + issueType)
                    log.info('Issue Numbers From	:' + issueFromNumber + ' ' + fromIssueNo)
                    log.info('Issue Numbers To    :' + issueToNumber + ' ' + toIssueNo)


                    switch (issueType) {

                        case "Regular":
                            log.info('Running Regular Match')
                            if (issueFromNumber == fromIssueNo) {
                                log.info('Regular issueObject::' + issueObjectNode)
                                return issueObjectNode;
                            }
                            break;

                        case "Merged":
                            log.info('Running Merge Match')
                            if ((issueFromNumber == fromIssueNo) && (issueToNumber == toIssueNo)) {
                                log.info('Merge issueObject::' + issueObjectNode)
                                return issueObjectNode;
                            }
                            break;

                        case "Supplement":
                            log.info('Running Supplement Match')
                            if (SupplementNumber == SupplementIssueNo) {
                                log.info('Supplement issueObject::' + issueObjectNode)
                                return issueObjectNode;
                            }
                            break;
                    }

                }
            }
        }
    }
    log.info("No Issue Match");
    return null;

}


	// JW: 11/14/2022 - Adding check to not update WOL Issue Run Date / Publication Date once set.
	
    // if (node.getValue(attributeIDToUpdate).getSimpleValue() != issue_digital_final_publication_date) {
    //    node.getValue(attributeIDToUpdate).setValue(issue_digital_final_publication_date);
    // }
	
function updateIssuesAttrVal(node) {
    var attributeIDToUpdate = "IssueRunDate";
    
	//log.info('Going to update issues object..'+node.getValue(issueJpcmsId).getSimpleValue());
    log.info("Updating digital issue object.." + node.getID());
	
	// JW: 11/14/2022 - Added check to not update WOL IssueRunDate/Publication Date once set.
	// Check to see if the existing IssueRunDate is null. If already populated then skip processing
	// publication event.
	
    if (node.getValue(attributeIDToUpdate).getSimpleValue() == null) {
        
		// Update Issue Mail Date
		log.info('Update IssueRunDate: ' + issue_digital_final_publication_date)
		node.getValue(attributeIDToUpdate).setValue(issue_digital_final_publication_date);
		
		// Only need to approve node if updates are made.
		stepID = node.getID();
		node.approve();
		log.info("Approved Issue")
		
    } else {
		// Else log skipped updating Issue Mail Date as it is already set
		log.info('Update IssueRunDate already set for Issue: ' + node.getValue(attributeIDToUpdate).getSimpleValue())
	}
	
	// stepID = node.getID();
	
	
	// Deprecate cruft for building run report that is no longer required
	//objectTypeName = node.getObjectType().getID();
	//IssueDoi = node.getValue("IssueDoi").getSimpleValue();
	//JournalProductCode = node.getValue("JournalProductCode").getSimpleValue();
	//ISSN = node.getValue("ProductIssn").getSimpleValue();
	//Created_Timestamp = node.getValue("CreationDate").getSimpleValue();
	//Updated_Timestamp = node.getValue("LastUpdated").getSimpleValue();
	
	
	//generateReport(stepID,objectTypeName,IssueDoi,JournalProductCode,ISSN,Created_Timestamp,Updated_Timestamp,"Success","I0408 updates completed")
    //node.approve();
    //log.info("Approved Issue")
}


function getCurrentDate(){
	var now = new Date();
	var dateTime = null;
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var day = now.getDate();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	
	if(month.toString().length ==1){
		var month = '0'+month;
	}if(day.toString().length ==1){
		var day = '0'+day;
	}if(hour.toString().length ==1){
		var hour = '0'+hour;
	}if(minute.toString().length ==1){
		var minute = '0'+minute;
	}if(second.toString().length ==1){
		var second = '0'+second;
	}

	dateTime = year + '-' + month + '-' + day + ' ' + hour + '.' + minute + '.' + second;

	//logger.info(dateTime)

	return dateTime;
	
}


}