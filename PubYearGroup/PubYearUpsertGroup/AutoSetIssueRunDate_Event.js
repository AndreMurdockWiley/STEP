/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "AutoSetIssueRunDate_Event",
  "type" : "BusinessAction",
  "setupGroups" : [ "PubYearUpsertGroup" ],
  "name" : "Automatic Set Issue Run Date (EventProcessor)",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "JournalDigitalMedia" ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "Group Issue Functions",
    "libraryAlias" : "link"
  }, {
    "libraryId" : "PublicationYearFunctions",
    "libraryAlias" : "pubLibrary"
  }, {
    "libraryId" : "VolumeFunctions",
    "libraryAlias" : "volumeLibrary"
  }, {
    "libraryId" : "IssueFunctions",
    "libraryAlias" : "issueLibrary"
  } ]
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
  }, {
    "contract" : "AttributeBindContract",
    "alias" : "PRODUCTACTIVATED",
    "parameterClass" : "com.stibo.core.domain.impl.AttributeImpl",
    "value" : "ProductActivated",
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "logger",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "IssueRepublish",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Issues_Data_Extract",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "groupIssueOIEPkafka",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Group_Issues_Data_Extract_Kafka",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "groupIssueOIEP",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Group_Issues_Data_Extract",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "IssueRepublishKafka",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Issues_Data_Extract_Kafka",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,manager,PRODUCTACTIVATED,logger,IssueRepublish,groupIssueOIEPkafka,groupIssueOIEP,IssueRepublishKafka,link,pubLibrary,volumeLibrary,issueLibrary) {
var journalGrpCode = node.getValue("JournalGroupCode").getSimpleValue();
var journal = search_object_using_key("JournalGroupCodeKey", journalGrpCode);
var digitalpubYear = node.getParent().getParent().getName();
var digitalVolume = node.getParent().getName();
var digitalIssue = node.getName();
log.info("DI: "+digitalIssue);
if(journal){
	var childrenMedia = journal.getChildren().toArray();
	for(var i=0;i<childrenMedia.length;i++){
		var childMedia = childrenMedia[i];
		if(childMedia.getObjectType().getID() == "JournalPrintMedia"){
			log.info("PI : "+childMedia.getName());
			var childrenPubYear = childMedia.getChildren().toArray();
			for(var j=0;j<childrenPubYear.length;j++){
				var childPubYear = childrenPubYear[j];
				if(childPubYear.getName() == digitalpubYear){
					log.info(childPubYear.getName());	
					var childrenVolume = childPubYear.getChildren().toArray();
					for(var p=0;p<childrenVolume.length;p++){
					var childVolume = childrenVolume[p];
					if(childVolume.getName() == digitalVolume){
						log.info(childVolume.getName());	
						var childrenIssue = childVolume.getChildren().toArray();
						for(var q=0;q<childrenIssue.length;q++){
						var childIssue = childrenIssue[q];
						log.info("CI : "+childIssue.getName())
						if(childIssue.getName() == digitalIssue){
							log.info(childIssue.getName());
							log.info(node.getValue("IssueJpcmsId").getSimpleValue())
							log.info(node.getValue("IssueRunDate").getSimpleValue())
							log.info(node.getValue("ProductOriginalPublicationDate").getSimpleValue())
							log.info(node.getValue("ProductRevisedPublicationDate").getSimpleValue())
							childIssue.getValue("IssueJpcmsId").setSimpleValue(node.getValue("IssueJpcmsId").getSimpleValue());
							childIssue.getValue("IssueRunDate").setSimpleValue(node.getValue("IssueRunDate").getSimpleValue());
							childIssue.getValue("ProductOriginalPublicationDate").setSimpleValue(node.getValue("ProductOriginalPublicationDate").getSimpleValue());
							childIssue.getValue("ProductRevisedPublicationDate").setSimpleValue(node.getValue("ProductRevisedPublicationDate").getSimpleValue());
							childIssue.getValue("IssueStatus").setLOVValueByID("P");
							log.info(childIssue.getValue("IssueJpcmsId").getSimpleValue())
							log.info(childIssue.getValue("IssueRunDate").getSimpleValue())
							log.info(childIssue.getValue("ProductOriginalPublicationDate").getSimpleValue())
							log.info(childIssue.getValue("ProductRevisedPublicationDate").getSimpleValue())

							//Send to SAP
							//if(childIssue.getValue(PRODUCTACTIVATED.getID()).getValue() == "Activated"){
								childIssue.approve();
								IssueRepublish.republish(childIssue);
								IssueRepublishKafka.republish(childIssue);
								// Populate Group Issue Classification object on all types of Issues (Standard Issues, Merge Issues and Supplement)
								link.createAndUpdateGroupIssues(childIssue, manager, logger, groupIssueOIEPkafka, groupIssueOIEP)
							//}
							if(node.getValue(PRODUCTACTIVATED.getID()).getValue() == "Activated"){
								node.approve();
								IssueRepublish.republish(node);
								// Populate Group Issue Classification object on all types of Issues (Standard Issues, Merge Issues and Supplement)
								link.createAndUpdateGroupIssues(node, manager, logger, groupIssueOIEPkafka, groupIssueOIEP)
							}
							
						}
					}
					}
				}
				}
			}
		}
	}
}

function search_object_using_key(identifier_key, object_key_value)
{
	var prod = manager.getNodeHome().getObjectByKey(identifier_key, object_key_value);
	if(!prod)
	{
		return false;
	}
	return prod;
}
}