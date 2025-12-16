/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Test_Gateway_Integration",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "Test_Gateway_Integration",
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
    "contract" : "GatewayBinding",
    "alias" : "myGateway",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.gateway.FrontGatewayIntegrationEndpointImpl",
    "value" : "Test_Janis_Gateway",
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
exports.operation0 = function (myGateway,log) {
//var httpPost = myGateway.post();
var httpGet = myGateway.get();
httpGet.header("apitoken", "N23aXbbMu0xkGZmwxGnE90ncQpTtCVIi");
httpGet.pathQuery({requestType: "ISBN13_SEARCH"});
httpGet.pathQuery({application: "STIBO"});
httpGet.pathQuery({ISBN13: "9781119384335"});

var myResponse = httpGet.invoke();
log.info("RESPONSE: " + myResponse);
//response will map the attributes coming back to attributes in step, will need to parse json
}