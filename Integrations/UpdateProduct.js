/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "UpdateProduct",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "Update Product",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "JournalDigitalMedia" ],
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
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (manager,inboundMessage,log) {
var prodMessage = JSON.parse(inboundMessage.getMessage());
var journalCode = prodMessage.productCode;
var hasPart = prodMessage.hasPart;

//var hasPartString = JSON.stringify(hasPart);
log.info("hasString var:"+hasPart);

var doi = hasPart[0].doi;
var workflowEventGroup1 = hasPart[0].workflowEventGroup;

log.info("doi var:"+doi);
log.info("workflowEventGroup var:"+String(workflowEventGroup1[2].workflowEventType));


var onlineDateEvent = String(workflowEventGroup1[2].workflowEventType);
var onlineDate = String(workflowEventGroup1[2].workflowEventValue);
log.info("Event:"+String(onlineDateEvent));
log.info("Event val:"+String(onlineDate));
//for ( var i in workflowEventGroup) {
//		var id = JSON.stringify(workflowEventGroup[i].workflowEventType);
//		var name = JSON.stringify(workflowEventGroup[i].workflowEventValue);
//		log.info("Event:"+id);
//		log.info("value:"+name);
//	}

//var onlineDate = '1000';
var attr_Id = "PublicationDate";


var prod = manager.getProductHome().getProductByID(journalCode);
prod.getValue(attr_Id).setSimpleValue(onlineDate.substring(0,10));



}