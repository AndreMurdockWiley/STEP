/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BC_ValidateTextFields",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "BC_ValidateTextFields",
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
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,manager,genericFunctions) {
/*
 * This ba validated all text fields , for leading trail spaces and line breaks.
 * validates all url attributes for amny space in between
 */

var attributeErrors=checkSpacesandLineBreaks(node,manager);
if (attributeErrors.length > 0) {
    return "Please correct the Fields : \n" + attributeErrors.join('\n');     
} else {
     return true;
}


/*
 * This function validated all text fields , for leading trail spaces and line breaks.
 * validates all url attributes for amny space in between
 */
function checkSpacesandLineBreaks(node,manager){
var attributeErrors = [];
var linkedAttributes = addAttributeIDsToArray(node,manager);
var urlAttributes = ["JournalAdditionalUrlValue", "JournalUrlAuthorGuidelinesLink", "JournalUrlOnlineOpenOrderFormLink", "JournalSubmissionUrlValue", "JournalUrlRssFeedUrl", "JournalSecondaryUrlValue", "JournalCFPlink", "OrganizationUrl", "JournalHistoryPrimaryUrl", "JournalHistoryTocUrl"];
var excludeAttributes=["JournalCommentsNotes","JournalEmbargoNotes","JournalCommentsJcoreNotes","JournalComments1","CeasedJournalComments","ProductComments","JournalDescription","JournalHistoryNotes","JournalHistoryAdditionalNotes","JournalEditorialSAEPExceptionsNoteId"];

for (i = 0; i < linkedAttributes.length; i++) {
    var linkedAttrID = linkedAttributes[i].getID();
    if(!excludeAttributes.includes(linkedAttrID+"")){  
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
                attributeErrors.push(linkedAttrName + "-has leading space.");
            }
            if (trailingSpaces.test(value)) {
                attributeErrors.push(linkedAttrName + "-has trail space.");
            }
            if (value.match('\n')) {
                attributeErrors.push(linkedAttrName + "- has line break.");
            }
        }

    }
    }
}
for (j = 0; j < urlAttributes.length; j++) {
    var attributeID = urlAttributes[j];
    var isCalculated = manager.getAttributeHome().getAttributeByID(attributeID).isDerived();
    var isInherited = node.getValue(attributeID).isInherited();
    if (!isCalculated && !isInherited) {
        var urlValue = node.getValue(attributeID).getSimpleValue();
        if (urlValue) {
            if (urlValue.indexOf(' ') >= 0) {
                var attribute = manager.getAttributeHome().getAttributeByID(attributeID);
                attributeErrors.push(attribute.getName() + "-has a space.");
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
            attributeErrors.push(linkedAttrName + "Should have only Numbers and alphabets.");
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
    }else if (objectTypeNode == 'MultiMedia') {
        attributesArray.push(manager.getAttributeHome().getAttributeByID("ProductSAPMaterialNumber"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("ProductShortTitle"));
    }
     else if (objectTypeNode == 'MultiJournal') {
        attributesArray.push(manager.getAttributeHome().getAttributeByID("SAPExternalMaterialGroup"));
        attributesArray.push(manager.getAttributeHome().getAttributeByID("ProductTitle"));
    } 
    if (attributeGroup.length > 0) {
        for (i = 0 ;i < attributeGroup.length; i++) {        	
            var attributeGroupID = attributeGroup[i];
            var attributeGrp = manager.getAttributeGroupHome().getAttributeGroupByID(attributeGroupID);
            var attributeGroupArray=attributeGrp.getAttributes().toArray();   
            for(j=0;j<attributeGroupArray.length;j++){
				attributesArray.push(attributeGroupArray[j]);
            }
            
        }
    }
return attributesArray;
}
}