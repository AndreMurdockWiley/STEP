/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BC_ValidateTextFieldsMassUploads",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "BC Validate Text Fields in Mass Update",
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
  }, {
    "contract" : "ImportChangeInfoBind",
    "alias" : "importChangeInfo",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,manager,importChangeInfo,genericFunctions) {
const ARTICLE_CHANGES = importChangeInfo.getChanges();
if(ARTICLE_CHANGES){
const CHANGE_ATTRIBUTES_ARRAY = ARTICLE_CHANGES.getAttributes().toArray();
var attributeErrors = [];
var excludeAttributes=["JournalCommentsNotes","JournalEmbargoNotes","JournalCommentsJcoreNotes","JournalComments1","CeasedJournalComments","ProductComments","JournalDescription","JournalHistoryNotes","JournalHistoryAdditionalNotes","JournalEditorialSAEPExceptionsNoteId"];

var objType = node.getObjectType();
if(CHANGE_ATTRIBUTES_ARRAY){
for (i = 0; i < CHANGE_ATTRIBUTES_ARRAY.length; i++) {
    var attribute = CHANGE_ATTRIBUTES_ARRAY[i];
    if(!excludeAttributes.includes(attribute+"")){  
    var isCalculated = manager.getAttributeHome().getAttributeByID(attribute).isDerived();
    var isInherited = node.getValue(attribute).isInherited();
    if (!isCalculated && !isInherited) {
        var value = node.getValue(attribute).getSimpleValue();
        if (value) {
           // Check for leading and trailing spaces
            const leadingSpaces = /^\s+/;
            const trailingSpaces = /\s+$/;
            // Test for leading and trailing spaces
            if (leadingSpaces.test(value)) {
                attributeErrors.push(attribute + "-has leading space.");
            }
            if (trailingSpaces.test(value)) {
                attributeErrors.push(attribute + "-has trail space.");
            }
            // Check for line breaks
            if (value.match('\n')) {
                attributeErrors.push(attribute + "- has line break.");
            }
        }
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
}
if(attributeErrors){
attributeErrors = removeDuplicates(attributeErrors);
if (attributeErrors.length > 0) {
    return ("Please correct the Fields : \n" + attributeErrors.join('\n '));
} else {
    return true;
}
}else{
	return true;
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
}