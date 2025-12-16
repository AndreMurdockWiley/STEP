/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "OIEP_Monitoring_2",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "OIEP_Monitoring_2",
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
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "MailHomeBindContract",
    "alias" : "mailer",
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
exports.operation0 = function (node,mailer,manager) {
var serverURL;
var bgpList = [];
var executionReport = [];
var fileList = new java.util.HashSet();

var util = com.stibo.systemconfig.ConfigUtil;
var systemName = util.getProperty("System.Name");
logger.info("systemName: " + systemName);

if (systemName == "wiley-dev") serverURL = "https://wiley-dev-step.mdm.stibosystems.com/";
else if (systemName == "wiley-qa") serverURL = "https://wiley-qa-step.mdm.stibosystems.com/";
else if (systemName == "wiley-test") serverURL = "https://wiley-test-step.mdm.stibosystems.com/";
else if (systemName == "wiley-prod") serverURL = "https://wiley-prod-step.mdm.stibosystems.com/";

var accountName = "REST";
var accountPassword = "1234";
var accNameAndPassword = new java.lang.String(accountName + ":" + accountPassword);
const secretKey = "Basic " + javax.xml.bind.DatatypeConverter.printBase64Binary(accNameAndPassword.getBytes());

var EnpointMonitoring = manager.getEntityHome().getEntityByID("Enpoint Monitoring");
var OIEP = EnpointMonitoring.getChildren().toArray();
for (var i in OIEP){
  var id = OIEP[i].getID();
   log.info("ID="+id);
//var id = "Journal_Data_Extract"
var getOutboundStatus = serverURL + "restapiv2/outbound-integration-endpoints/" + id + "/status?context=Context1&workspace=Main"; //running";
restData = callStepRESTAPIstatus(getOutboundStatus, secretKey, logger);

log.info(restData);
var jsonText = JSON.parse(restData);
log.info("jsonText"+jsonText);
var status = jsonText.status;
log.info("Endpoint ID :" + id + "Endpoint Status :" + status);

if (status == "disabled" || status == "failed" || status == "enabled") {
    var getBGPs = serverURL + "restapiv2/outbound-integration-endpoints/"+id+"/worker-processes?context=Context1&workspace=Main";
    bgpList = callStepRESTAPI(getBGPs, secretKey, logger);
    logger.info("bgpList: " + bgpList);
    if (bgpList.length > 0) {
        for (i = 0; i < bgpList.length; i++) {
        	  var messageOutbound = null;
            var getBGPDetails = serverURL + "restapiv2/background-processes/" + bgpList[i].toString() + "?context=Context1&workspace=Main";
            var restDataBG = callStepRESTAPIstatus(getBGPDetails, secretKey, logger);
            //log.info(restDataBG);
            var jsonTextBG = JSON.parse(restDataBG);
            var bgprocessstatus = jsonTextBG.status;
            var bgprocessEnded = jsonTextBG.ended;
            var bgprocessid = jsonTextBG.id;
            log.info("bgprocessid="+bgprocessid);
            log.info("bgprocessstatus="+bgprocessstatus);
            if (bgprocessstatus == "failed" || bgprocessstatus == "completedwitherrors") {
                log.info(bgprocessid);
                var getBGPDetails = serverURL + "restapiv2/background-processes/" + bgprocessid + "/execution-report?context=Context1&workspace=Main";
                //log.info(getBGPDetails);
                var restBGError = callStepRESTAPIstatus(getBGPDetails, secretKey, logger);
                //log.info(restBGError);
                var jsonBGError = JSON.parse(restBGError);
                var flag = 0;
                for (var k = 0; k < jsonBGError.length; k++) {
                    var executionType = jsonBGError[k].entryType;
                    if (executionType == "error") {
                        var executionError = jsonBGError[k].entryText;
                        //log.info(executionError);
                        flag = 1;
                    }

                    if (flag == 1)
                        break;
                }
                var messageOutboundEndpointID = id + " " + bgprocessid;
             messageOutbound = "Outbound Integration Endpoint with ID " + id + " failed.<br> Error: " + executionError + "...... Please refer the Background process ID " + bgprocessid + " for more details in STEP MDM.\n";
            log.info(messageOutbound);
            } else if (bgprocessstatus == "running"){
            	var entity = manager.getEntityHome().getEntityByID(id);
            	log.info("entity="+entity);       
            	var oldBGP = entity.getValue("ActiveBGP").getSimpleValue();
            	if(oldBGP == bgprocessid){
            	    messageOutbound = "The "+bgprocessid+ " is running more than one hour in the Integration Endpoint "+id+". Kindly look into it";           	           	   
            }
            entity.getValue("ActiveBGP").setSimpleValue(bgprocessid);
            }
            
            if (messageOutbound != null) {
                var emailSubject = "Integration Enpoint Status in UAT environment";
                var emailBody;
                emailBody = "Dear Team, <br><br>";
                emailBody += "The following endpoint required immediate action. <br><br>";
                emailBody += messageOutbound;
                emailBody += "<br><br>Regards, <br>PIM Team";
                mailer.mail()
                    .addTo("kbhattacha@wiley.com;la@wiley.com")
                    .htmlMessage(emailBody)
                    .subject(emailSubject)                    
                    .send();
                    log.info("mailsent");
            }
            
        }

        //if (bgpList.length > 0) {
        //    for (i = 0; i < bgpList.length; i++) {
        //        var getBGPDetails = serverURL + "restapiv2/background-processes/" + bgpList[i].toString() + "/execution-report?context=Context1&workspace=Main";
        //        executionReport = callStepRESTAPI(getBGPDetails, secretKey, logger);
        //        logger.info("executionReport: " + executionReport);
        //        var fileName = jsonKeyValues(executionReport);
        //    }
        //    logger.info(fileName);
        //}
    }
}
}

function jsonKeyValues(jsonObject) {
    for (var key in jsonObject) {
        if (jsonObject[key] instanceof Object) {
            jsonKeyValues(jsonObject[key]);
        } else {
            if (key == "entryText") {
                const regexPattern = /\/([a-zA-Z0-9_-]+\.xml)'/;

                var matchResult = jsonObject[key].match(regexPattern);
                if (matchResult && matchResult.length > 1) {
                    var xmlFileName = matchResult[1];
                    fileList.add(xmlFileName);
                }
            }
        }
    }
    return fileList;
}



function callStepRESTAPI(restURL, secretKey, logger) {
    try {
        var url = new java.net.URL(restURL);
        var connection = url.openConnection();
        connection.setRequestProperty("Authorization", secretKey);

        var bufferReader = new java.io.BufferedReader(new java.io.InputStreamReader(connection.getInputStream()));
        var inputLine = "";
        var response = [];

        while ((inputLine = bufferReader.readLine()) != null) {
            //logger.info(inputLine);
            var response = JSON.parse(inputLine);
        }

        bufferReader.close();
        //logger.info(response);
        return response;

    } catch (ex) {
        if (ex.javaException instanceof java.io.IOException) {
            logger.warning(ex);
        } else {
            throw (ex);
        }
    }
}

function callStepRESTAPIstatus(restURL, secretKey, logger) {
    try {
        var url = new java.net.URL(restURL);
        var connection = url.openConnection();
        connection.setRequestProperty("Authorization", secretKey);

        var bufferReader = new java.io.BufferedReader(new java.io.InputStreamReader(connection.getInputStream()));
        var inputLine = "";
        var response = [];
        var result;

        while ((inputLine = bufferReader.readLine()) != null) {
            //logger.info(inputLine);
            result = inputLine;
            //var response = JSON.parse(inputLine);
        }

        //bufferReader.close();
        //logger.info(result);
        return result;

    } catch (ex) {
        if (ex.javaException instanceof java.io.IOException) {
            logger.warning(ex);
        } else {
            throw (ex);
        }
    }
}
}