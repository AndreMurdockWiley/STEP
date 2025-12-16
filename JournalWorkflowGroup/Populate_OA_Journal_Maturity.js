/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Populate_OA_Journal_Maturity",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalWorkflowGroup" ],
  "name" : "Populate OA Journal Maturity",
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
var EEO = node.getValue("JournalEEOContentFlipDate").getSimpleValue();
var RevModel = node.getValue("ProductRevenueModel").getSimpleValue();

var EEOYear = "";
var StartGoldOAyear = "";
log.info("RevModel: " + RevModel);
if (RevModel != "OA") {
    // Clear OA Maturity if not OA
    node.getValue("JournalOAJournalMaturity").setSimpleValue(null);
    log.info("ProductRevenueModel is not OA. OA Maturity cleared.");
     log.info(node.getValue("JournalOAJournalMaturity").getSimpleValue());
} else {
    // Proceed with OA Maturity calculation
    if (EEO == null) {
        StartGoldOAyear = LaunchYear;
	log.info("StartGoldOAyear" + StartGoldOAyear);
		
    } else {
        var arr = EEO.split("-");
        EEOYear = arr[0];
        StartGoldOAyear = EEOYear;
		log.info("StartGoldOAyear" + StartGoldOAyear);
}									   
 

    var currentYear = new Date().getFullYear();
    var difference = currentYear - StartGoldOAyear;
log.info("difference" + difference);

    if (difference < 3) {
        node.getValue("JournalOAJournalMaturity").setSimpleValue("New");
        log.info("Cond1: New");
    } else if (difference >= 3 && difference <= 8) {
        node.getValue("JournalOAJournalMaturity").setSimpleValue("Established");
        log.info("Cond2: Established");
    } else if (difference > 8) {
        node.getValue("JournalOAJournalMaturity").setSimpleValue("Mature");
        log.info("Cond3: Mature");
    }
}
//node.approve();
}
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessConditionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Precondition"
}
*/
exports.precondition0 = function (node) {
var LaunchYear = node.getValue("JournalLaunchYear").getSimpleValue();
var EEO = node.getValue("JournalEEOContentFlipDate").getSimpleValue();
if (LaunchYear == null && EEO == null){
	return false;
}
else{
	return true;
}


}