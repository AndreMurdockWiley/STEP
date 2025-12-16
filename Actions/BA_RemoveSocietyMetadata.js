/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_RemoveSocietyMetadata",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "BA_RemoveSocietyMetadata",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "MultiMedia", "Journal", "MultiJournal" ],
  "allObjectTypesValid" : false,
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
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "Journal_Data_Extract_Kafka",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Journal_Data_Extract_Kafka",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "Journal_Data_Extract",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Journal_Data_Extract_Kafka_Testing",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "MM_Data_Extract",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=MM_Data_Extract",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "MM_Data_Extract_Kafka",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=MM_Data_Extract_Kafka",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "MJ_Data_Extract",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=BOM_Data_Extract",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "MJ_Data_Extract_Kafka",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=MJ_Data_Extract_Kafka",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (manager,node,Journal_Data_Extract_Kafka,Journal_Data_Extract,MM_Data_Extract,MM_Data_Extract_Kafka,MJ_Data_Extract,MJ_Data_Extract_Kafka) {
/*----------------------------M-O-D-I-F-I-C-A-T-I-O-N----------L-O-G---------------------------------------------------
===============================================================================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
===============================================================================================================================================================================================================================
8Sep2025    Venkata Siva Harish Mattaparthi    HAR01     RPDM-10962   Suppress Deprecated Attributes from journal restapiv2. Deprecated attributes 'JournalSocietyMembershipInfoNoteId' and 'JournalSocietySpecialSensitivitiesId' to be removed from this business action for journal objects.                                            
                                                                
===============================================================================================================================================================================================================================

*/
var Obj = node.getObjectType().getID();  //HAR01

if(Obj !="Journal"){  //HAR01
var refType = manager.getReferenceTypeHome().getReferenceTypeByID("ProductToSocietyGroupReferenceLink");   
var ref = node.getReferences(refType).toArray();   
for (var j = 0; j < ref.length; j++){   
	ref[j].getValue("JournalSocietySpecialSensitivitiesId").setSimpleValue(null);   
	ref[j].getValue("JournalSocietyMembershipInfoNoteId").setSimpleValue(null);   
}  
node.approve();
}  //HAR01

//var Obj = node.getObjectType().getID();  //HAR01
//if(Obj =="Journal"){   //HAR01
	//Journal_Data_Extract_Kafka.republish(node);  //HAR01
	//Journal_Data_Extract.republish(node);  //HAR01
//}else if(Obj =="MultiJournal"){  //HAR01
if(Obj =="MultiJournal"){  //HAR01
	//MJ_Data_Extract.republish(node);
	MJ_Data_Extract_Kafka.republish(node);
}else if(Obj =="MultiMedia"){
	//MM_Data_Extract.republish(node);
	MM_Data_Extract_Kafka.republish(node);
}


}