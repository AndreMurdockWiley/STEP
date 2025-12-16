/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BR_I0404",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "BR_I0404",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "Group Issue Functions",
    "libraryAlias" : "link"
  }, {
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
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "journal",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "Journal",
    "description" : null
  }, {
    "contract" : "AttributeBindContract",
    "alias" : "journalProductCode",
    "parameterClass" : "com.stibo.core.domain.impl.AttributeImpl",
    "value" : "JournalProductCode",
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "manager1",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "groupIssueOIEPkafka",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Group_Issues_Data_Extract_Kafka",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "groupIssueOIEP",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Group_Issues_Data_Extract",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (manager,inboundMessage,log,reportLogger,journal,journalProductCode,manager1,groupIssueOIEPkafka,groupIssueOIEP,link,genericSearch) {
// I0404 interface
// Inbound Production API (from JPCMS) to update Print and Digital Issue information in STEP with production identifiers, issue doi and original/revised publication dates
// Used on inital STEP and JPCMS issue setup and subsequent issue updates from production as issues are updated.
// Actual print and digital issue run dates are integrated via the I0408 interface (digtial) and SAP (print)


try {
    log.info("I0404: STARTED PROCESSING JPCMS FEED: \n" + inboundMessage.getMessage());
	
    var prodMessage = JSON.parse(inboundMessage.getMessage());
	var journalNodeFound = null;
    var node = manager.getNodeHome();
    var production_code = prodMessage.production_code;
    var issue_production_identifier = prodMessage.issue_production_identifier;
    var issue_doi = prodMessage.issue_doi;
    var issue_print_revised_publication_date = prodMessage.issue_print_revised_publication_date;
    var issue_digital_revised_publication_date = prodMessage.issue_digital_revised_publication_date;
    var issue_print_original_publication_date = prodMessage.issue_print_original_publication_date;
    var issue_digital_original_publication_date = prodMessage.issue_digital_original_publication_date;


    // Extract Journal (JournalProductCode) Volume number and Issue number from the payload

    var groupCdVol = production_code.substring(0, production_code.indexOf(":"));
    var journalCd = groupCdVol.substring(0, groupCdVol.lastIndexOf("."));
    var volNum = groupCdVol.substring(groupCdVol.lastIndexOf(".") + 1, groupCdVol.length);
    var issueNo = production_code.substring(production_code.indexOf(":") + 1, production_code.lastIndexOf("."));
  //  var yearPrint = issue_print_original_publication_date.slice(0, 4);
    var yearDigital = issue_digital_original_publication_date.slice(0, 4);
 //   var yearPrintRevised = issue_print_revised_publication_date.slice(0, 4);
    var yearDigitalRevised = issue_digital_revised_publication_date.slice(0, 4);

    log.info("I0404: After Extracting Journal Product Code : "+ journalCd + ", Volume number : " + volNum + " and Issue number : " + issueNo);
    
	//	log.info("I0404 Error: Invalid inbound Print Publication Year: " + yearPrint);
		log.info("I0404 Error: Invalid inbound Digital Publication Year: " + yearDigital);
		log.info("I0404 Error: Invalid inbound DigitalRevised: " + yearDigitalRevised);
	//	log.info("I0404 Error: Invalid inbound Print Publication Year: " + yearPrintRevised);

	// Regex for valid JPCMS Production Issue Identifiers i.e. CNCR.123:1.ISS or CNCR.123:S1.ISS
	// ACG2.1:2.ISS, CAM4.12:7.ISS also includes matching for KA44.1:2.ISS which is a UAT only journal with a double digit production code
	// Assumes strict validation with no whitespace and all UpperCase


	var validProductionCode = /^[A-Z]+(\d{1,2})?\.([A-Z]\.)?\d+:(([S]?\d+)|(\d+-\d+))\.ISS$/g;

	// Test inbound production_code for format compliance 

	if (validProductionCode.test(production_code) == false) {
		
		// If production_code invalid then throw error to JPCMS error dashboard

		log.info("I0404 Error: Invalid inbound JPCMS ID: " + production_code);
		
		throw new Error("Invalid inbound JPCMS ID: " + production_code + " Check for whitespace, lowercase or invalid format i.e. Journal Production Code.Volume:Issue.ISS - Resolution: refer to Production for fix in JPCMS");
		return false;	
		
	}
    if (yearDigital <= "2016" || yearDigitalRevised <= "2016") {
		
		// If production_code invalid then throw error to JPCMS error dashboard

		
	//	throw new Error("Invalid inbound JPCMS Dates to Check: " + yearPrint );
		return false;	
		
	}


    if (issueNo.indexOf("-") > 0) {
        // Parse Merged Issue i.e 2-3

        var fromIssueNo = issueNo.substring(0, issueNo.indexOf("-"));
        var toIssueNo = issueNo.substring(issueNo.indexOf("-") + 1, issueNo.length);
        var mergedIssue = true;

    // Parse Supplment Issue i.e. S2

    } else if (issueNo.indexOf("S") == 0) {
        var SupplementIssueNo = issueNo.substring(issueNo.indexOf("S") + 1, issueNo.length);
        var supplementIssue = true;

    } else {
        // default to Regular Issue
        var fromIssueNo = issueNo;
        var regularIssue = true;
    }

    // JW: Need to first search on existing Production Identifier (which can return 0-2 Issues. If zero then lookup by Journal, Volume, Issue 
    // Search for the Journal based on journal product code, if found, traverse to the issue and update issue object data

    log.info("I0404: STARTED JOURNAL SEARCH");

    searchOnAttribute(journalCd);

    log.info("I0404: COMPLETED PROCESSING JPCMS FEED");
	
} catch (e) {
	
    //var baseParams = {'errorProductionIdentifier': issue_production_identifier};
    //var productionIdentifierQuery = queryProdIdentifier.evaluate(baseParams);
    
    //var baseProductResult = productionIdentifierQuery.execute().asList(1);
   // var getCurrentErrorObj = manager.getProductHome().getProductByID("Active_Errors").get

log.info("In Exception" +e);

var searchHome1 = manager.getHome(com.stibo.core.domain.singleattributequery.SingleAttributeQueryHome);
var attribute1 = manager.getAttributeHome().getAttributeByID("Error_ProductionIdentifier");
var searchArg1 = new com.stibo.core.domain.singleattributequery.SingleAttributeQueryHome.SingleAttributeQuerySpecification(com.stibo.core.domain.Product, attribute1, issue_production_identifier);
var foundProds1 = searchHome1.querySingleAttribute(searchArg1).asList(100);
log.info("searchHome1:" + searchHome1);
log.info("attribute1:" + attribute1);
log.info("searchArg1:" + searchArg1);
log.info("foundProds1:" + foundProds1);
 
 if (foundProds1.size() == 0) { 
       //create new error object
       log.info("In Exception2");
     var myErrorObj = manager.getProductHome().getProductByID("Active_Errors").createProduct(null,"Error_Record");
	myErrorObj.getValue("Error_Description").setSimpleValue(e);
	myErrorObj.getValue("Error_JournalProductCode").setSimpleValue(journalCd);
	myErrorObj.getValue("Error_IssueDoi").setSimpleValue(issue_doi.split("/")[0]);
	myErrorObj.getValue("Error_ProductionIdentifier").setSimpleValue(issue_production_identifier);
	myErrorObj.getValue("Error_IssueNumber").setSimpleValue(issueNo);
	myErrorObj.getValue("Error_VolumeNumber").setSimpleValue(volNum);
	myErrorObj.getValue("Error_IssuePubYear").setSimpleValue(yearDigital);
	myErrorObj.setName(myErrorObj.getID());
	var dateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	var now = dateFormat.format(new Date());	
	myErrorObj.getValue("Error_Timestamp").setSimpleValue(now);
	if(journalNodeFound != null){
		myErrorObj.createReference(journalNodeFound,"ErrorObject2ImportNodeReference");	
		var journalMediaObjectsFound = journalNodeFound.getChildren().iterator();
		while (journalMediaObjectsFound.hasNext()) {
			var MediabjectNode = journalMediaObjectsFound.next();
			myErrorObj.createReference(MediabjectNode,"ErrorObject2ImportNodeReference");	
		}		
	}
	var wfObj = manager.getWorkflowHome().getWorkflowByID("Error_Review_WF");
	var wfInst = myErrorObj.getWorkflowInstance(wfObj);
	var wfTask = wfInst.getTaskByID("New_Error");
	myErrorObj.getValue("Error_JSON_Load").setSimpleValue(inboundMessage.getMessage());
	wfTask.triggerByID("toJPCMS","to JPCMS error State"); 
	
	log.info("I0404: ERROR IN PROCESSING JPCMS FEED : " + e);
	}	
}

/* Query Journal Object based on Journal Product Code. 
Note: Direct query of the Issue object was not possible due to the limitation in STEP for not able to query an object based on inherited attribute value
Below code searches the Parent Journal Object and traverse to the child objects
*/

function searchOnAttribute(value) {
    var searchHome = manager.getHome(com.stibo.core.domain.singleattributequery.SingleAttributeQueryHome);
    var attribute = manager.getAttributeHome().getAttributeByID("JournalProductionCode");
    var searchArg = new com.stibo.core.domain.singleattributequery.SingleAttributeQueryHome.SingleAttributeQuerySpecification(com.stibo.core.domain.Product, attribute, value);
    var foundProds = searchHome.querySingleAttribute(searchArg).asList(100);

    if (foundProds.size() > 1) {
        log.info("I0404: Multiple Journal matches found");
        throw new Error("Multiple Journal matches found");
        return false;
    } else if (foundProds.size() == 1) {
        var journalNode = foundProds.get(0);
		journalNodeFound = journalNode;
        if (journalNode) {
            log.info('Found Journal : ' + journalNode.getID());

            // Get Journal Offerings
            var journalMediaObjects = journalNode.getChildren().iterator();
			journalMediaObjectsFound = journalMediaObjects;
			var foundIssueMatch = false;
            // Loop over digital and print
            while (journalMediaObjects.hasNext()) {

                var journalMediabjectNode = journalMediaObjects.next();
                var journalMediabjectNodeType = journalMediabjectNode.getObjectType().getID();


                log.info("I0404: Searching within Journal Object Type : " + journalMediabjectNodeType);

                log.info("I0404: Started getting Journal volume");

                var issueObjectNode = getJournalVolume(journalMediabjectNode);

                if (issueObjectNode != null) {

                    log.info("I0404: Found issue match so update issue with Production API data");
					foundIssueMatch = true;
                    updateIssuesAttrVal(issueObjectNode);

                } else {
                    log.info('I0404: Unable to match issue.....');
                }

            }
			if(foundIssueMatch == false){
				throw new Error("No Issue was found with that volume and issue number");
				return false;
			}
        }

    } else {
        throw new Error("No Journals match");
        return false;
    }
}

function getJournalVolume(node) {

    var pubYearObjects = node.getChildren().iterator();

    while (pubYearObjects.hasNext()) {
        var pubYearObjectNode = pubYearObjects.next();
        var pubYearObjectType = pubYearObjectNode.getObjectType().getID();

        var volObjects = pubYearObjectNode.getChildren().iterator();

        while (volObjects.hasNext()) {
            var volObjectNode = volObjects.next();
            var volNumber = volObjectNode.getValue('IssueVolumeNumber').getSimpleValue();

            log.info('I0404: Journal Volume Number' + volNumber + ':::' + volNum);

            if (volNumber == volNum) {

                var issuesObjectNodeItr = volObjectNode.getChildren().iterator();

                while (issuesObjectNodeItr.hasNext()) {
                    var issuesObjectNode = issuesObjectNodeItr.next();
                    var issuesObjectType = issuesObjectNode.getObjectType().getID();

                    var issueFromNumber = issuesObjectNode.getValue('IssueFromIssueNumber').getSimpleValue();
                    var issueToNumber = issuesObjectNode.getValue('IssueToIssueNumber').getSimpleValue();
                    var SupplementNumber = issuesObjectNode.getValue('IssueSupplementNo').getSimpleValue();

                    log.info('I0404: issueFromNumber:' + issueFromNumber)
                    log.info('I0404: issueToNumber:' + issueToNumber)
                    log.info('I0404: SupplementNumber:' + SupplementNumber)
                    log.info('I0404: Regular Issue: ' + regularIssue + 'Merged Issue: ' + mergedIssue + 'Supplement Issue: ' + supplementIssue)

                    if (regularIssue && (issueFromNumber == issueNo)) {
                        log.info('I0404: Issuenumber : ' + issueFromNumber + ':::' + issueNo);
                        log.info("I0404: Found issues object : " + issuesObjectNode.getName());
                        return issuesObjectNode;
                    } else if (mergedIssue && (fromIssueNo == issueFromNumber && toIssueNo == issueToNumber)) {
                        log.info("I0404: Found issues object merged : " + issuesObjectNode.getName());
                        return issuesObjectNode;
                    } else if (supplementIssue && (SupplementNumber == SupplementIssueNo)) {
                        log.info("I0404: Found issues object supplement : " + issuesObjectNode.getName());
                        return issuesObjectNode;
                    } else {
                        log.info('I0404: No issue object matched');
                    }
                }
            }
        }
    }
    return null;
}

function updateIssuesAttrVal(node) {

    var issueJpcmsId = "IssueJpcmsId";
    var issueProductionIdentifier = "IssueProductionIdentifier";
    var issueDoi = "IssueDoi";
    var productOriginalPublicationDate = "ProductOriginalPublicationDate";
    var productRevisedPublicationDate = "ProductRevisedPublicationDate";

    log.info('I0404: Going to update issues object : ' + node.getValue(issueJpcmsId).getSimpleValue());


    log.info("I0404: Issue Object Type: " + node.getObjectType().getID());
    var issuesObjectType = node.getObjectType().getID();

    
    if ((issuesObjectType == 'JournalPrintIssues') && (issue_print_original_publication_date != null)) {
        log.info('I0404: Updating print issue object');

	   // Moved setting common attributes to inner check to avoid partial updates if JPCMS and STEP are out of sync for print+digital issues
        node.getValue(issueJpcmsId).setValue(production_code);
    	   node.getValue(issueProductionIdentifier).setValue(issue_production_identifier);
        node.getValue(issueDoi).setValue(issue_doi);
        
        if (node.getValue(productOriginalPublicationDate).getSimpleValue() == null) {
            node.getValue(productOriginalPublicationDate).setValue(issue_print_original_publication_date);
        }
        node.getValue(productRevisedPublicationDate).setValue(issue_print_revised_publication_date);
    }


    if ((issuesObjectType == 'JournalDigitalIssues') && (issue_digital_original_publication_date != null)) {
        log.info('I0404: Updating digital issue object');

        // Moved setting common attributes to inner check to avoid partial updates if JPCMS and STEP are out of sync for print+digital issues
        node.getValue(issueJpcmsId).setValue(production_code);
    	   node.getValue(issueProductionIdentifier).setValue(issue_production_identifier);
        node.getValue(issueDoi).setValue(issue_doi);       
        
        if (node.getValue(productOriginalPublicationDate).getSimpleValue() == null) {
            node.getValue(productOriginalPublicationDate).setValue(issue_digital_original_publication_date);
        }
        node.getValue(productRevisedPublicationDate).setValue(issue_digital_revised_publication_date);
    }
   
    var JPCMSID = node.getValue(issueJpcmsId).getSimpleValue();
    var OriginalPublicationDate = node.getValue(productOriginalPublicationDate).getSimpleValue();
	stepID = node.getID();
	objectTypeName = node.getObjectType().getID();
	Doi = node.getValue(issueDoi).getSimpleValue();

	log.info('I0404: Completed updating issue object');
	
	Created_Timestamp = node.getValue("CreationDate").getSimpleValue();
	Updated_Timestamp = node.getValue("LastUpdated").getSimpleValue();

    /* Deprecedated reporting capability
    /* generateReport(stepID,objectTypeName,JPCMSID,Doi,Created_Timestamp,Updated_Timestamp,"Success","I0404 Update is completed") */
    
    var workHome = manager.getWorkflowHome().getWorkflowByID("VolumeIssueCreationWF");
    var wfInstance = node.getWorkflowInstance(workHome);
    var myTask = null;
    if (wfInstance != null) {
        myTask = wfInstance.getTaskByID("JPCMS_Sync");
    }

    if (JPCMSID != null && OriginalPublicationDate != null && myTask != null) {
        myTask.triggerByID("Update_SAP", "Submitted To SAP");
        log.info("Completed Volume Issue Creation Workflow")

    }
    //If not in WF Approve All Changes that come from JPCMS 08/26/2021
    else {
    		link.setGroupIssueState(node,manager,log);
    		link.createAndUpdateGroupIssues(node, manager, log, groupIssueOIEPkafka, groupIssueOIEP);    	
          node.approve();
          log.info("Issue Approved")
    }
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