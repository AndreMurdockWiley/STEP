/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_triggerOIEPCollReport",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "BA_triggerOIEPCollReport",
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
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "WebUiContextBind",
    "alias" : "web",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "mgr",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "collectiontoref",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=oiep_CollectionStandardReport",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "journalcollection",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=oiep_CollectionStandardReport",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (web,mgr,collectiontoref,journalcollection) {
//constants
const REF_COLLECTIONS_TO_JOURNALS = "COLLECTIONS_TO_JOURNALS";
const ATT_DigitalJournalCode_ID = "DigitalJournalCode";

//Variables
var hashMessage = new java.util.LinkedHashMap();
var assetArray = [];
var objectArray = [];


//Code
const SELECTION_ARRAY = web.getSelection().toArray();
for (var i = 0; i < SELECTION_ARRAY.length; i++) {
	var selectedNode = SELECTION_ARRAY[i];
	const REF_TYPE = mgr.getReferenceTypeHome().getReferenceTypeByID(REF_COLLECTIONS_TO_JOURNALS);
var collectiontojournalarray = selectedNode.getReferences(REF_TYPE).toArray();
	for(var j=0; j<collectiontojournalarray.length;j++){
		var targetObjectID = collectiontojournalarray[j].getTarget();
		assetArray.push(targetObjectID);
	}
	objectArray.push(selectedNode);

}

// Push Journalcollections and collectiontoref to endpoint.
for (var i = 0; i < objectArray.length; i++) {
	var object = objectArray[i];
	collectiontoref.republish(object);
}


for (var k = 0; k < assetArray.length; k++) {
	var ref= mgr.getReferenceTypeHome().getReferenceTypeByID(REF_COLLECTIONS_TO_JOURNALS);
	var refss =  assetArray  [k];
	journalcollection.republish(refss);
}

}