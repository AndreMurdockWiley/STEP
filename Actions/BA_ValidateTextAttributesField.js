/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_ValidateTextAttributesField",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "Validate Text Attribute Field",
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
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "JournalRepublish",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Journal_Data_Extract_Kafka",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "JournalRepublishEmail",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Journal_Data_Extract",
    "description" : null
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
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
exports.operation0 = function (manager,webUI,JournalRepublish,JournalRepublishEmail,node,message,genericFunctions) {
/**
 * This ba validated all text fields, for leading trail spaces and line breaks.
 * validates all url attributes for amny space in between
 * 
 */
//Revision Set
var parts = "0.489"; 
log.info(parts.endsWith('9'))
log.info(parts.length)
log.info(parts + '0')
var decimalPart = parseInt(parts.split('.')[1]) + 1; // Adds 1 to the decimal part
var formattedDecimalPart = decimalPart.toString().padStart(3, '0'); // Ensure at least 3 digits
var num = parseFloat(parts[0] + '.' + formattedDecimalPart);
log.info(num.toFixed(3))

var attributeErrors = checkSpacesandLineBreaks(node, manager);
log.info(attributeErrors)

var formatTime = new java.text.SimpleDateFormat("HH:mm:ss");
var formatDate = new java.text.SimpleDateFormat("yyyy.MM.dd");
var parts = node.getRevision().getName() + "";;
log.info(typeof(node.getRevision().getName() + ""))
var decimalPart = parseInt(parts.split('.')[1]) + 1; // Adds 1 to the decimal part 
var num = parseFloat(parts[0] + '.' + decimalPart);
log.info("INC : " + num)
if (parts.endsWith('9')) {
    num = num.toString() + "0";
} else {
    num = num;
}
//-------------------------------------------------------------------
//	log.info(formatDate.format(node.getRevision().getCreatedDate()))
//	var revisionLog = "Journal_Mass_AI_updated_by "+manager.getCurrentUser().getName()+"\nRevision:	"+node.getRevision().getName()+"\nDate:	" +formatDate.format(node.getRevision().getCreatedDate())+" UTC";
//-------------------------------------------------------------------
var userID = node.getRevision().getUserID();
var userNamefromID = manager.getUserHome().getUserByID(userID);
if (userNamefromID.getName() != null) {
    userName = userNamefromID.getName();
} else {
    userName = "(" + userNamefromID.getID() + ")";
}
var revisionLog = "\nRevision number:  " + node.getRevision().getName() + "\nLast Edited By:      " + userName + "\nTime:		     " + formatTime.format(node.getRevision().getEditedDate()) + " UTC" + "\nDate:		     " + formatDate.format(node.getRevision().getCreatedDate());
//arrange the logs as per the latest order
log.info("RL : " + revisionLog)

node.getValue("JournalAIMassUpdateHistoryLog").deleteCurrent();
var historyLog = node.getValue("JournalAIMassUpdateHistoryLog").setSimpleValue(revisionLog);
log.info(node.getValue("JournalAIMassUpdateHistoryLog").getValue())

var republished = "";
var notRepublished = "";
if (node.getValue("ProductActivated").getValue() == "Activated") {
    node.approve();
    
    /**
    Will uncomment the below two republish lines once Iain and Charlotte confirms about the import data //2/27/2025
    */
    
//    JournalRepublish.republish(node);
//    JournalRepublishEmail.republish(node);
    republished = republished + node.getName() + "\n";
} else {
    notRepublished = notRepublished + node.getName() + "\n";
}

function checkSpacesandLineBreaks(node, manager) {
    var attributeErrors = [];
    var linkedAttributes = addAttributeIDsToArray(node, manager);
    var urlAttributes = ["JournalEditorialEeoSystemLink", "JournalEditorialSelfArchivingPolicyURL", "JournalAdditionalUrlValue", "JournalUrlAuthorGuidelinesLink", "JournalUrlOnlineOpenOrderFormLink", "JournalSubmissionUrlValue", "JournalUrlRssFeedUrl", "JournalSecondaryUrlValue", "JournalCFPlink", "OrganizationUrl", "JournalHistoryPrimaryUrl", "JournalHistoryTocUrl"];
    var excludeAttributes = ["JournalCommentsNotes", "JournalEmbargoNotes", "JournalCommentsJcoreNotes", "JournalComments1", "CeasedJournalComments", "ProductComments", "JournalDescription", "JournalHistoryNotes", "JournalHistoryAdditionalNotes", "JournalEditorialSAEPExceptionsNoteId"];
    var count = 0;
    log.info("linkedAttributes.length:" + linkedAttributes.length)
    for (i = 0; i < linkedAttributes.length; i++) {
        var linkedAttrID = linkedAttributes[i].getID();
        if (!excludeAttributes.includes(linkedAttrID + "")) {

            var linkedAttrName = manager.getAttributeHome().getAttributeByID(linkedAttrID).getName();
            var isCalculated = manager.getAttributeHome().getAttributeByID(linkedAttrID).isDerived();
            var isInherited = node.getValue(linkedAttrID).isInherited();
            var hasLOV = manager.getAttributeHome().getAttributeByID(linkedAttrID).hasLOV();
            if (!isCalculated && !isInherited && !hasLOV) {
                count++;
                var value = node.getValue(linkedAttrID).getSimpleValue();
                if (value) {
                    // Check for leading and trailing spaces
                    const leadingSpaces = /^\s+/;
                    const trailingSpaces = /\s+$/;
                    // Test for leading and trailing spaces
                    if (leadingSpaces.test(value)) {
                        var trimmedValue = value.trim();
                        node.getValue(linkedAttrID).setSimpleValue(trimmedValue);
                        attributeErrors.push(linkedAttrName + "-has leading space.");
                    }
                    if (trailingSpaces.test(value)) {
                        var trimmedValue = value.trim();
                        node.getValue(linkedAttrID).setSimpleValue(trimmedValue);
                        attributeErrors.push(linkedAttrName + "-has trail space.");
                    }
                    if (value.match('\n')) {
                        var matchValue = value.match('\n');
                        var trimmedValue = value.trim();

                        var cleanedValue = trimmedValue.replaceAll(matchValue, "");
                        log.info("inside normal attrs : " + trimmedValue + " : " + cleanedValue)
                        node.getValue(linkedAttrID).setSimpleValue(cleanedValue);
                        attributeErrors.push(linkedAttrName + "- has line break.");
                    }
                    if(linkedAttrID=="JournalEditorialOfficeEmail"){
            			var value = node.getValue(linkedAttrID).getSimpleValue();
                    	if(value.match(" ")){
            				var trimmedValue = value.trim();
                    		log.info("EmailtrimmedValue :" + trimmedValue);
                    		var cleanedValue = value.replaceAll(" ", '');
                    		log.info("EmailcleanedValue : " + cleanedValue);
                    		node.getValue(linkedAttrID).setSimpleValue(cleanedValue);}}
                }

            }
        }
    }
    log.info("COUNT : " + count)
    for (j = 0; j < urlAttributes.length; j++) {
        var attributeID = urlAttributes[j];
        //    log.info("URLV: "+attributeID)
        var isCalculated = manager.getAttributeHome().getAttributeByID(attributeID).isDerived();
        var isInherited = node.getValue(attributeID).isInherited();
        if (!isCalculated && !isInherited) {
            var urlValue = node.getValue(attributeID).getSimpleValue();
            //        log.info(urlValue)
            if (urlValue) {
                if (urlValue.match(/\s/g)) {
                    log.info("BEFORE url : " + attributeID + node.getValue(attributeID).getSimpleValue())
                    var trimmedValue = urlValue.trim();
                    log.info("trimmedValue :" + trimmedValue)
                    var cleanedValue = trimmedValue.replaceAll(" ", '');
                    log.info("cleanedValue : " + cleanedValue)
                    node.getValue(attributeID).setSimpleValue(cleanedValue);
                    var attribute = manager.getAttributeHome().getAttributeByID(attributeID);
                    attributeErrors.push(attribute.getName() + "-has a space.");
                    log.info("INSDIE URL :" + attributeID + node.getValue(attributeID).getSimpleValue())
                }
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

function addAttributeIDsToArray(node, manager) {
    var objectTypeNode = node.getObjectType().getID();
    var attributeGroup = [];
    var attributesArray = [];
    if (objectTypeNode == 'Journal') {
        attributeGroup.push("AG_Journal_Search_WebUI");
        attributesArray.push(manager.getAttributeHome().getAttributeByID("JournalMarketingCopyUSP1"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("JournalMarketingCopyUSP2"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("JournalMarketingCopyUSP3"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("JournalMarketingCopyUSP4"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("JournalMarketingCopyHeadline"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("JournalMarketingCopySubjectArea"));
    } else if (objectTypeNode == 'JournalPrintMedia') {
        attributeGroup.push("AG_Core_Data_Journal_Media_Print");
        attributeGroup.push("AG_Digital_SAP_Finance_WebUI");
    } else if (objectTypeNode == 'JournalDigitalMedia') {
        attributeGroup.push("AG_Core_Data_JournalMedia");
        attributeGroup.push("AG_Rebilling_Tab");
        attributeGroup.push("AG_Digital_SAP_Finance_WebUI");
    } else if (objectTypeNode == 'JournalPrintPublicationYear') {
        attributesArray.push(ProductPublicationYear);
    } else if (objectTypeNode == 'JournalDigitalIssues') {
        attributeGroup.push("AG_Digital_Issues_WebUI");
    } else if (objectTypeNode == 'JournalPrintIssues') {
        attributeGroup.push("AG_Print_Issues_Web_UI");
    } else if (objectTypeNode == 'JournalDigitalVolumes' || objectTypeNode == 'JournalPrintVolumes') {
        attributesArray.push(manager.getAttributeHome().getAttributeByID("IssueVolumeNumber"));
    } else if (objectTypeNode == 'JournalHistoryProducts') {
        attributeGroup.push("AG_Journal_HistoryWebUI");
    } else if (objectTypeNode == 'OtherProducts') {
        attributesArray.push(manager.getAttributeHome().getAttributeByID("ProductDoi"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("ProductUrl"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("ProductOclcReferenceNumber"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("SAPExternalMaterialGroup"));
    } else if (objectTypeNode == 'JournalCollectionsOffering') {
        attributesArray.push(manager.getAttributeHome().getAttributeByID("CollectionCode"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("CollectionYear"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("ProductTitle"));
    } else if (objectTypeNode == 'OtherProductCollectionOffering') {
        attributeGroup.push("AG_OtherProduct_Collections");
        attributeGroup.push("AG_Collection_SearchCriteria");
    } else if (objectTypeNode == "Backfiles") {
        attributeGroup.push("AG_Backfile_Export");
    } else if (objectTypeNode == 'MultiMedia') {
        attributesArray.push(manager.getAttributeHome().getAttributeByID("ProductSAPMaterialNumber"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("ProductShortTitle"));
    } else if (objectTypeNode == 'MultiJournal') {
        attributesArray.push(manager.getAttributeHome().getAttributeByID("SAPExternalMaterialGroup"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("ProductTitle"));
    }
    if (attributeGroup.length > 0) {
        var countgrp = 0;
        for (i = 0; i < attributeGroup.length; i++) {
            var attributeGroupID = attributeGroup[i];
            var attributeGrp = manager.getAttributeGroupHome().getAttributeGroupByID(attributeGroupID);
            var attributeGroupArray = attributeGrp.getAttributes().toArray();
            for (j = 0; j < attributeGroupArray.length; j++) {
                attributesArray.push(attributeGroupArray[j]);
                countgrp++
            }

        }
    }
    log.info("countgrp: " + countgrp)
    return attributesArray;
}
}