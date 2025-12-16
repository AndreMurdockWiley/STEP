/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JSON_Message_Joiner_LZ4",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "JSON_Message_Joiner_LZ4",
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
    "contract" : "OutboundBusinessProcessorJoinerResultBindContract",
    "alias" : "joinerResult",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "OutboundBusinessProcessorJoinerSourceBindContract",
    "alias" : "joinerSource",
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
exports.operation0 = function (joinerResult,joinerSource,log) {
/*----------------------------M-O-D-I-F-I-C-A-T-I-O-N----------L-O-G---------------------------------------------------
==============================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
==============================================================================================================================================================================
13Feb2025    Venkata Siva Harish Mattaparthi              RPDM-9453    Initial Creation                                                                                                                                     
==============================================================================================================================================================================
Purpose of Business Rule: Builds JSON message for collection before LZ4 compression. 
It includes JSONEND tag to denote the end of Message. 
It also includes length of message before compression at the beginning of the message – to the kafka topic.
Then ESB use this length of the message before compression and custom java code provided by us, to decompress the message.
-------------------------------------------------------------------------------------------------------------------------------
*/

// Joiner Source bound joinerSource
// Joiner Result bound to joinerResult
var temp = "";

function appendFromGroup(messageGroup) {
  var seen = [];
  var first = true;
  while(joinerSource.hasNext(messageGroup)) {
    var messageString = joinerSource.getNextMessage(messageGroup);
    log.info("messageGroup: " + messageGroup);
    log.info("messageString: " + messageString);
    var hash = messageString.hashCode();
    if (seen.indexOf(hash) == -1) {
      seen.push(hash);
      if (first) {
        first = false;
      } else {        
        temp += ",";                                 
      }       
       temp += messageString;                       
    }
  }
}

temp += "{\"products\":{\"updates\":[";
appendFromGroup("updates");
temp += "],\"deletes\":[";
appendFromGroup("deletes");
temp += "]}}";
temp += 'JSONEND';

var sizeInBytes = temp.length;
log.info("sizeInBytes length :" + sizeInBytes.length);
try {
var updatedJson = temp.replace("{\"products\"", "\"jsonSize\":" + sizeInBytes + ",{\"products\"");	
joinerResult.appendToMessage(updatedJson);
} catch (e) {
  logger.logInfo("Error parsing JSON: " + e.message);
}

}