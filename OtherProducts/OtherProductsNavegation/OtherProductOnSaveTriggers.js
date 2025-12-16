/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "OtherProductOnSaveTriggers",
  "type" : "BusinessAction",
  "setupGroups" : [ "OtherProductsNavegation" ],
  "name" : "Other Product On Save Triggers",
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
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE) {
var productActivated = NODE.getValue("ProductActivated").getSimpleValue();
var businessRuleHome = "";
var businessAction = "";
var parentNode = "";

if(productActivated == "Activated"){
	parentNode = NODE.getParent();
	businessRuleHome = parentNode.getManager().getHome(com.stibo.core.domain.businessrule.BusinessRuleHome);
	businessAction = businessRuleHome.getBusinessActionByID("AutoClassificationOtherProducts");
	businessAction.execute(NODE);	
}

}