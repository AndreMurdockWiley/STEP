/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BR_I0410",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "BR_I0410",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "Generic_Search_Functions",
    "libraryAlias" : "genericSearch"
  } ]
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
  }, {
    "contract" : "InboundBusinessProcessorExecutionReportLoggerBindContract",
    "alias" : "reportLogger",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (manager,inboundMessage,log,reportLogger,genericSearch) {
var prodMessage = JSON.parse(inboundMessage.getMessage());
var EntityJournalGroupCode = prodMessage.EntityJournalGroupCode;
var EntityJournalGroupCodeAcceptedBySAP_In = prodMessage.EntityJournalGroupCodeAcceptedBySAP;
var node = manager.getNodeHome();
log.info("JSON payload: "+inboundMessage.getMessage());
validateInboundMessage(EntityJournalGroupCode,EntityJournalGroupCodeAcceptedBySAP_In);
searchUpdateObjectwithKey(EntityJournalGroupCode);



function validateInboundMessage(EntityJournalGroupCode,EntityJournalGroupCodeAcceptedBySAP_In)
{
	if(!EntityJournalGroupCode || !EntityJournalGroupCodeAcceptedBySAP_In)
	{
		throw new java.lang.RuntimeException("No Entity_Journal_GroupCode or Entity_JournalGroup_CodeAccepted_BySAP IIEP");
		return false;
	}

}

function searchUpdateObjectwithKey(EntityJournalGroupCode)
{
	var EntityJournalGroupCode_key = "EntityJournalGroupCode";
	var prod = genericSearch.search_object_using_key(node,EntityJournalGroupCode_key,EntityJournalGroupCode);
	if(!prod)
	{	
		throw new Error("No Journal Group Code object found for Journal Group Code:"+EntityJournalGroupCode);
		return false;
	}

	prod.getValue("EntityJournalGroupCodeAcceptedBySAP").setValue(EntityJournalGroupCodeAcceptedBySAP_In);

}


function getCurrentDate(){
	var now = new Date();
	var dateTime = null;
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var day = now.getDate();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	
	if(month.toString().length ==1){
		var month = '0'+month;
	}if(day.toString().length ==1){
		var day = '0'+day;
	}if(hour.toString().length ==1){
		var hour = '0'+hour;
	}if(minute.toString().length ==1){
		var minute = '0'+minute;
	}if(second.toString().length ==1){
		var second = '0'+second;
	}

	dateTime = year + '-' + month + '-' + day + ' ' + hour + '.' + minute + '.' + second;

	//logger.info(dateTime)

	return dateTime;
	
}

}