/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "ValidateTextFields",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Journals Mass Update Validate Text Fields",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessConditionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "webUI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ {
    "variable" : "message",
    "message" : "<b>Please correct the Fields : </b>{errormessage}",
    "translations" : [ ]
  } ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,manager,webUI,message) {
/*
 * This ba validated all text fields , for leading trail spaces and line breaks.
 * validates all url attributes for amny space in between
 */

var attributeErrors=checkSpacesandLineBreaks(node,manager);
if (attributeErrors.length > 0) {
       
	var message="Please correct the Fields : \n" + attributeErrors.join('\n');
//	message.errormessage=("\n"+attributeErrors.join('\n'));
	return message;
}else{
return true;
}


/*
 * This function validated all text fields , for leading trail spaces and line breaks.
 * validates all url attributes for amny space in between
 */
function checkSpacesandLineBreaks(node,manager){
var attributeErrors = [];
var linkedAttributes = addAttributeIDsToArray(node,manager);
var urlAttributes = ["JournalEditorialSelfArchivingPolicyURL","JournalMetricsURL","OAAdvantageURL","JournalAdditionalUrlValue", "JournalUrlAuthorGuidelinesLink", "JournalUrlOnlineOpenOrderFormLink", "JournalSubmissionUrlValue", "JournalUrlRssFeedUrl", "JournalSecondaryUrlValue", "JournalCFPlink", "OrganizationUrl", "JournalHistoryPrimaryUrl", "JournalHistoryTocUrl"];
//var validateAttributes=["JournalGroupCode","JournalCorpSalesAcceptsDisplayAds","JournalCorpSalesAcceptsPaidInserts","JournalAccessBasis","ProductFinanceBillingModel","ProductContentEndDate","ProductContentPublicationType","ProductContentStartDate","JournalEditorialCoverSales","ProductDivision","JournalFinanceJNExternalAccountType","JournalFtePriceModel","ProductSubjectCategory","JournalCurrentTitleDate","JournalFormerOffice","JournalNewOffice","JournalOwner","JournalOwnedBy","JournalFinanceProductType","JournalFinanceJournalPublicationSchedule","ProductLanguage","JournalLastPriceQuoteContractYear","JournalOpenScienceBadges","ProductOwnershipStatus","JournalPriceQuoteWileyBW","ProductType","JournalProductTypeCode","JournalProductionIdentifier","JournalIsOnPublons","JournalRegisteredReports","ProductRenewalSubscriptionType","ProductRevenueModel","JournalFinanceRevenueTyp","JournalProductSendToWispers","JournalStatusOnOL","JournalTrueStatus","JournalEmbeddedRichMedia","JournalOnlineOnlyType","JournalIsOnAuthorea","JournalMemberDirectPOD","JournalHindawiTransfer","JournalStandardCTA","JournalComplimentaryPrint","JournalSoundScience","ProductAbbreviatedTitle","ProductSortTitle","JournalEditorialEditedByNotesId","JournalEditorialSAEPExceptionsNoteId","ProductShortTitle","JournalProductID","JournalCorpSalesAdvertPrintRunDesc","JournalCommentsNotes","JournalAcceptingSubmission","JournalImageScreening","JournalOptimizedPortfolio","JournalReviewerSelection","ProductMediaType","JournalSimplifiedExportChecklist","ProductTitle","JournalEditorialSubmissionSystem","JournalExpeditedFirstLookChecklist","ProductSubType"];
var excludeAttributes=["JournalCommentsNotes","JournalEmbargoNotes","JournalCommentsJcoreNotes","JournalComments1","CeasedJournalComments","ProductComments","JournalDescription","JournalHistoryNotes","JournalHistoryAdditionalNotes","JournalEditorialSAEPExceptionsNoteId"];

var count=0;
for (i = 0; i < linkedAttributes.length; i++) {
    var linkedAttrID = linkedAttributes[i].getID();
    if(!excludeAttributes.includes(linkedAttrID+"")){    count++
//    log.info(linkedAttrID)
    var linkedAttrName = manager.getAttributeHome().getAttributeByID(linkedAttrID).getName();     
    var isCalculated = manager.getAttributeHome().getAttributeByID(linkedAttrID).isDerived();
    var isInherited = node.getValue(linkedAttrID).isInherited();
    if (!isCalculated && !isInherited) {
        var value = node.getValue(linkedAttrID).getSimpleValue();
        if (value) {
            // Check for leading and trailing spaces
            const leadingSpaces = /^\s+/;
            const trailingSpaces = /\s+$/;
            // Test for leading and trailing spaces
            if (leadingSpaces.test(value)) {
                attributeErrors.push(linkedAttrID + "-has leading space.");
            }
            if (trailingSpaces.test(value)) {
                attributeErrors.push(linkedAttrID + "-has trail space.");
            }
            if (value.match('\n')) {
                attributeErrors.push(linkedAttrID + "- has line break.");
            }
        }

    }
}
}log.info(linkedAttributes.length+ " "+count)
for (j = 0; j < urlAttributes.length; j++) {
    var attributeID = urlAttributes[j];
    var isCalculated = manager.getAttributeHome().getAttributeByID(attributeID).isDerived();
    var isInherited = node.getValue(attributeID).isInherited();
    if (!isCalculated && !isInherited) {
        var urlValue = node.getValue(attributeID).getSimpleValue();
        if (urlValue) {
            if (urlValue.indexOf(' ') >= 0) {
                var attribute = manager.getAttributeHome().getAttributeByID(attributeID);
                attributeErrors.push(attribute.getID() + "-has a space.");
            }
        }
    }
}
if (node.getObjectType().getID() == "Backfiles") {
    var dataContainers = genericFunctions.getDataContainerObjects(node, "JournalBackfileContentDataContainer");
    var iter = dataContainers.iterator();
    while (iter.hasNext()) {
        dc = iter.next().getDataContainerObject();
        backfileIssn = dc.getValue("JournalBackfileContentISSN").getSimpleValue();
        var linkedAttrName = manager.getAttributeHome().getAttributeByID("JournalBackfileContentISSN").getName();
        const aphaNumeric = /^[a-zA-Z0-9]*$/;
        if (!aphaNumeric.test(backfileIssn)) {
            attributeErrors.push(linkedAttrID + "Should have only Numbers and alphabets.");
        }
    }
}
attributeErrors = removeDuplicates(attributeErrors);

	return attributeErrors;   
}
function removeDuplicates(arr) {
    var uniqueArray = [];
    for (i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) == -1) {
            uniqueArray.push(arr[i])
        }
    }
    return uniqueArray;
}

function hasSpaces(url) {
    return url.indexOf(' ') >= 0;
}
/*
 * This function adds the attribute groups or attributes editable in web ui based on object type.
 */

function addAttributeIDsToArray(node,manager) {
    var objectTypeNode = node.getObjectType().getID();    
    var attributeGroup = [];
    var attributesArray = [];
    var count1=0;
    if (objectTypeNode == 'Journal') {
         attributeGroup.push("AG_Journal_Search_WebUI");
        attributesArray.push(manager.getAttributeHome().getAttributeByID("JournalMarketingCopyUSP1"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("JournalMarketingCopyUSP2"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("JournalMarketingCopyUSP3"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("JournalMarketingCopyUSP4"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("JournalMarketingCopyHeadline"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("JournalMarketingCopySubjectArea"));         
    }
    if (attributeGroup.length > 0) {
        for (i = 0 ;i < attributeGroup.length; i++) {        	
            var attributeGroupID = attributeGroup[i];
            var attributeGrp = manager.getAttributeGroupHome().getAttributeGroupByID(attributeGroupID);
            var attributeGroupArray=attributeGrp.getAttributes().toArray();   
            for(j=0;j<attributeGroupArray.length;j++){ count1++;
				attributesArray.push(attributeGroupArray[j]);
            }
            
        }log.info("COUNT! : "+count1)
    }
return attributesArray;
}
}