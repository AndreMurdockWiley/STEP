/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BR_I0430",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "BR_I0430",
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
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (manager,inboundMessage,log,reportLogger,node) {
var prodMessage = JSON.parse(inboundMessage.getMessage());
var step_id = prodMessage.id;
var LastUpdatedByProcess = prodMessage.LastUpdatedByProcess;
var comment = prodMessage.comment;
var node = manager.getNodeHome();
var product = manager.getProductHome().getProductByID(step_id);
var simpleDateFormat = new java.text.SimpleDateFormat("dd-MMM-yyyy HH:mm:ss");
var currTime = simpleDateFormat.format(java.lang.System.currentTimeMillis());

log.info("JSON payload: "+inboundMessage.getMessage());
validateInboundMessage(step_id,LastUpdatedByProcess);
//searchUpdateObjectwithKey(step_id);

if(!product)
	{	
		throw new Error("No STEP ID found for object requested:"+step_id);
		return false;
	}
	product.getValue("ProductComments").setValue(comment);
	product.getValue("LastUpdatedByProcess").setValue(LastUpdatedByProcess +" "  + currTime);
	product.approve();




function validateInboundMessage(product,LastUpdatedByProcess)
{
	if(!product || !LastUpdatedByProcess)
	{
		throw new java.lang.RuntimeException("No STEP ID Found" + product);
		return false;
	}

}

function searchUpdateObjectwithKey(step_id)
{
	var simpleDateFormat = new java.text.SimpleDateFormat("dd-MMM-yyyy HH:mm:ss");
	var currTime = simpleDateFormat.format(java.lang.System.currentTimeMillis());

	var step_key =  product;
	var prod = genericSearch.search_object_using_key(node,step_key,product);
	if(!prod)
	{	
		throw new Error("No STEP ID found for object requested:"+step_key);
		return false;
	}

	prod.getValue("LastUpdatedByProcess").setValue(LastUpdatedByProcess);

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