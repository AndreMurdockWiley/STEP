/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Polulate_Journal Maturity",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalWorkflowGroup" ],
  "name" : "Polulate Journal Maturity",
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
exports.operation0 = function (node,log) {
var LaunchYear = node.getValue("JournalLaunchYear").getSimpleValue();
var currentYear = new Date().getFullYear();
var diffrence = currentYear - LaunchYear;
//log.info(diffrence);
if (diffrence <3){
	node.getValue("JournalMaturity").setSimpleValue("New");
	//log.info("Cond1");
}  
if(diffrence==3 || diffrence==4 || diffrence==5 || diffrence==6 || diffrence==7 || diffrence==8 ){
   node.getValue("JournalMaturity").setSimpleValue("Established");
   //log.info("Cond2");	
}

if(diffrence >8){
	node.getValue("JournalMaturity").setSimpleValue("Mature");
	//log.info("Cond3");
}

}
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessConditionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Precondition"
}
*/
exports.precondition0 = function (NODE) {
var launchYear = NODE.getValue("JournalLaunchYear").getSimpleValue();

if (launchYear == "" || launchYear == null){
	return false;
}
return true;

}