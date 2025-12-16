/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CollectionCompsUpdateCurr&FutureDBModel",
  "type" : "BusinessAction",
  "setupGroups" : [ "CollectionUpsertGroup" ],
  "name" : "Collection Component Update Curr & Future DB Model",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : true,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
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
exports.operation0 = function (node,manager) {
//var currentYear = new Date().getFullYear();
//var currentDBCode = "DB" + currentYear;
//var futureDBCode = "DB" + (currentYear + 1);

var currentDBCode = "DB2025";
var futureDBCode = "DB2026";

log.info("Current DB Code: " + currentDBCode);
log.info("Future DB Code: " + futureDBCode);

var refType = manager.getReferenceTypeHome().getReferenceTypeByID('COLLECTIONS_TO_JOURNALS');


// Helper to get journal IDs from a collection node
function getJournalIDsFromCollectionNode(collectionNode) {
    var journalIDs = new java.util.HashSet();
    var queryResult = collectionNode.queryReferences(refType);
//    log.info("Found " + queryResult + " references in collection: " + collectionNode.getName());
   var count = 0;
   var arr = [];
   queryResult.forEach(function (refs) {
        count++;
        arr.push(refs);
        return true;
    });
//    log.info("count" + count+":  arr : " + arr.length );
    var count1=0;
    for(i=0;i<arr.length;i++){
        var componentObject = arr[i].getTarget();
        var journal = componentObject.getParent();
        journalIDs.add(journal.getID());
        count1++;
//        log.info("Journal linked to collection: " + journal.getID());
    }
//    log.info("count1: " + count1);
    return journalIDs;
}
// Find collection nodes by code
function findCollectionNodeByCode(code) {
    var allCollectionsParent = manager.getProductHome().getProductByID("WATP"); // Adjust as needed
    var allCollections= allCollectionsParent.getChildren();
    for (var i = 0; i < allCollections.size(); i++) {
        var child = allCollections.get(i);

        // Check for folder named 2025 or 2026 (convert name to string to avoid number issues)
        var childName = child.getName();
         log.info("Child - Collection year: " + childName);

                 var subtypes = child.getChildren();
            for (var j = 0; j < subtypes.size(); j++) {
                var subtype = subtypes.get(j);

                // Optional: Check object type
                if (subtype.getObjectType().getID() == "JournalCollectionsSubType") {
                    var journalColOff = subtype.getChildren();

                    for (var k = 0; k < journalColOff.size(); k++) {
                        var colOff = journalColOff.get(k);
                        var codeVal = colOff.getValue("CollectionCode").getSimpleValue();
                        var typeVal = colOff.getValue("CollectionType").getSimpleValue();

                        if (codeVal == code && typeVal == "Database Model Collections") {
//                            log.info("Found collection node for code: " + code);
                            return colOff;
                        }
                    }
                }
            }
        }
    

//    log.info("No collection node found for code: " + code);
    return null;
}


// Get current and future collection nodes
var currentCollectionNode = findCollectionNodeByCode(currentDBCode);//2025
var futureCollectionNode = findCollectionNodeByCode(futureDBCode);//2026
log.info("futureCollectionNode: "+futureCollectionNode+futureCollectionNode.getName())
log.info("currentCollectionNode: "+currentCollectionNode+ currentCollectionNode.getName())

var currentJournalIDs = currentCollectionNode ? getJournalIDsFromCollectionNode(currentCollectionNode) : new java.util.HashSet();
var futureJournalIDs = futureCollectionNode ? getJournalIDsFromCollectionNode(futureCollectionNode) : new java.util.HashSet();
var futureCollectionExists = futureCollectionNode != null;

var journalHierarchy = manager.getProductHome().getProductByID("Journals_Hierarchy");
var journalType = manager.getObjectTypeHome().getObjectTypeByID("Journal");

var Conditions = com.stibo.query.condition.Conditions;
var journals = manager.getHome(com.stibo.query.home.QueryHome)
    .queryFor(com.stibo.core.domain.Product)
    .where(Conditions.objectType(journalType)
        .and(Conditions.hierarchy().simpleBelow(journalHierarchy)))
    .execute().asList(1000000);

//log.info("Total journals found under hierarchy: " + journals.size());

// Update journal attributes
journals.forEach(function (journal) {
    var journalID = journal.getID();
//    log.info("Processing journal: " + journalID);

    // In Current DB Model
    if (currentJournalIDs.contains(journalID)) {
        journal.getValue("JournalInCurrentDatabaseModel").setSimpleValue("Yes");
//        log.info("Set JournalInCurrentDatabaseModel = Yes");
    } else {
        journal.getValue("JournalInCurrentDatabaseModel").setSimpleValue("No");
//        log.info("Set JournalInCurrentDatabaseModel = No");
    }
	log.info("JournalInCurrentDatabaseModel   :"+journal.getValue("JournalInCurrentDatabaseModel").getValue())
    // In Future DB Model
    if (futureCollectionExists) {
        if (futureJournalIDs.contains(journalID)) {
            journal.getValue("JournalInFutureDatabaseModel").setSimpleValue("Yes");
//            log.info("Set JournalInFutureDatabaseModel = Yes");
        } else {
            journal.getValue("JournalInFutureDatabaseModel").setSimpleValue("No");
//            log.info("Set JournalInFutureDatabaseModel = No");
        }
    } else {
        journal.getValue("JournalInFutureDatabaseModel").setSimpleValue(null);
//        log.info("Set JournalInFutureDatabaseModel = null (future collection not available)");
    }
    log.info("JournalInFutureDatabaseModel   :"+journal.getValue("JournalInFutureDatabaseModel").getValue())
});

}
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessConditionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Precondition"
}
*/
exports.precondition0 = function (node) {
if(node.getValue("CollectionCode").getSimpleValue() == "DB2025"||node.getValue("CollectionCode").getSimpleValue() == "DB2026"){
	return true;
}
else{
	return false;
}

}