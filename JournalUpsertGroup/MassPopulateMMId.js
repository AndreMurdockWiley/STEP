/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "MassPopulateMMId",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalUpsertGroup" ],
  "name" : "Mass Populate MM Id",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : true,
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
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ReferenceTypeBindContract",
    "alias" : "JournalPublishingManagerRefType",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "JournalPublishingManager",
    "description" : null
  }, {
    "contract" : "ReferenceTypeBindContract",
    "alias" : "BOMS_TO_JOURNAL_MULTIMEDIA",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "BOMS_TO_JOURNAL_MULTIMEDIA",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,LOG,JournalPublishingManagerRefType,BOMS_TO_JOURNAL_MULTIMEDIA,genericFunctions) {
var journalMedia = NODE.getChildren().get(0);
var journalMediaMMRefquery = journalMedia.queryReferencedBy(BOMS_TO_JOURNAL_MULTIMEDIA);
var journalMediaMMRefqueryMyList = journalMediaMMRefquery.asList(100);
var journalMediaMMRefqueryRefObject = journalMediaMMRefqueryMyList.get(0);
var MMobj = journalMediaMMRefqueryRefObject.getSource();
var MMId = MMobj.getID();
var journalPublishingManagerRefquery = NODE.queryReferences(JournalPublishingManagerRefType);
var journalPublishingManagerRefMyList = journalPublishingManagerRefquery.asList(100);
var journalPublishingManagerRefObject = journalPublishingManagerRefMyList.get(0);
var journalPublishingManager = journalPublishingManagerRefObject.getTarget();

//LOG.info("MMId " + MMId);
//LOG.info("journalPublishingManager " + journalPublishingManager.getName());

NODE.getValue("JournalMMPackageID").setSimpleValue(MMId);

MMobj.createReference(journalPublishingManager, JournalPublishingManagerRefType);
}