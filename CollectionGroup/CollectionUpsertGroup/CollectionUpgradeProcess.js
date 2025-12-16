/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CollectionUpgradeProcess",
  "type" : "BusinessAction",
  "setupGroups" : [ "CollectionUpsertGroup" ],
  "name" : "Collection Upgrade Process",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "CollectionFunctions",
    "libraryAlias" : "collectionLibrary"
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
    "contract" : "ReferenceTypeBindContract",
    "alias" : "refType",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "COLLECTIONS_TO_JOURNALS",
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
exports.operation0 = function (NODE,refType,LOG,collectionLibrary) {
var lastCollectionYearObject = NODE.getParent().getParent();
var collectionTypeProduct = lastCollectionYearObject.getParent();
var collectionTypeId = collectionTypeProduct.getID();
var collectionYearObjects = collectionTypeProduct.getChildren();
var lastCollectionYear = NODE.getValue("CollectionYear").getSimpleValue();
//.getRefenreces() is deprecated but Stibo told to use it anyways
var lastCollectionJournalList = NODE.getReferences(refType);
var lastCollectionJournalListIter = "";
var lastCollectionJournalProduct = "";
var lastCollectionJournalProductId = "";
var currentCollectionIter = collectionYearObjects.iterator();
var currentCollectionYearIter = "";
var currentCollectionSubTypeIter = "";
var currentCollectionYearObject = "";
var currentCollectionYear = "";
var currentColletionSubTypeObject = "";
var currentCollectionObject = "";
var currentCollectionCode = "";
var currentCollectionJournalList = "";
var currentCollectionJournalListIter = "";
var currentCollectionJournalProduct = "";
var currentCollectionJournalProductId = "";
var newUpgradeCollectionSubType = "";
var newUpgradeCollection = "";
var referenceExistingCheck = false;
var validCollection = false;

LOG.info("Last collection with " + lastCollectionJournalList.size() + " journals");

while(currentCollectionIter.hasNext()){
	currentCollectionYearObject = currentCollectionIter.next();
	currentCollectionYear = currentCollectionYearObject.getName();
	
	if (currentCollectionYear != lastCollectionYear && currentCollectionYear < lastCollectionYear){
		currentCollectionYearIter = currentCollectionYearObject.getChildren().iterator();
		
		while(currentCollectionYearIter.hasNext()){
			currentColletionSubTypeObject = currentCollectionYearIter.next();
			currentCollectionSubTypeId = collectionTypeId + "_" + currentCollectionYear + "_" + "Standard";
			
			if (currentColletionSubTypeObject.getID().equals(currentCollectionSubTypeId)){
				currentCollectionSubTypeIter = currentColletionSubTypeObject.getChildren().iterator();
				
				while(currentCollectionSubTypeIter.hasNext()){
					currentCollectionObject = currentCollectionSubTypeIter.next();
					currentCollectionCode = currentCollectionObject.getValue("CollectionCode").getSimpleValue();
					
					switch(true){
						case (collectionTypeId == "FULL" && currentCollectionCode.startsWith("FULL")):
							validCollection = true;
							break;
						case (collectionTypeId == "HSS" && currentCollectionCode.startsWith("HSS")):
							validCollection = true;
							break;
						case (collectionTypeId == "NURS" && (currentCollectionCode.startsWith("MN") || (currentCollectionCode.startsWith("NURS")))):
							validCollection = true;
							break;
						case (collectionTypeId == "STM" && currentCollectionCode.startsWith("STM")):
							validCollection = true;
							break;		
					}
					
					if (validCollection){
						//Counters for testing
						//var ctr = 0;
						//var existingCtr = 0;		
						//.getRefenreces() is deprecated but Stibo told to use it anyways
						currentCollectionJournalList = currentCollectionObject.getReferences(refType);
						lastCollectionJournalListIter = lastCollectionJournalList.iterator();
						LOG.info("Valid Collection " + currentCollectionObject.getName() + " with " + currentCollectionJournalList.size() + " journals");
						
						//Creating References for none shared journals
						while(lastCollectionJournalListIter.hasNext()){
							lastCollectionJournalProduct = lastCollectionJournalListIter.next().getTarget();
							lastCollectionJournalProductId = lastCollectionJournalProduct.getID();
							currentCollectionJournalListIter = currentCollectionJournalList.iterator();
							
							while(currentCollectionJournalListIter.hasNext()){
								currentCollectionJournalProduct = currentCollectionJournalListIter.next().getTarget();
								currentCollectionJournalProductId = currentCollectionJournalProduct.getID();
								
								if (lastCollectionJournalProductId.equals(currentCollectionJournalProductId)){
									//LOG.info("existing: " + currentCollectionJournalProductId);	
									//existingCtr++;
									referenceExistingCheck = true;									
									break;
								} else {
									referenceExistingCheck = false;
								}
							}

							if (!referenceExistingCheck){
								//Creating Sub Type folder and Upgrade Collection
								//ctr++;
								newUpgradeCollectionSubType = collectionLibrary.createCollectionSubType(lastCollectionYearObject, "Upgrade");
								
								try {
									newUpgradeCollection = collectionLibrary.createCollection(newUpgradeCollectionSubType, "Upgrade", currentCollectionYear);
								} catch (e) {
									LOG.info(e);
								}

								//Creating the journal reference
								try {
									LOG.info("Made it here!");
									newUpgradeCollection.createReference(lastCollectionJournalProduct, refType);
									newUpgradeCollection.approve();
								} catch (e) {
									LOG.info(e);
								}
							}
						}
						//LOG.info("ctr: " + ctr);	
						//LOG.info("existing ctr: " + existingCtr);				
						break;
					}
				}
			}
		}
	}
}
}