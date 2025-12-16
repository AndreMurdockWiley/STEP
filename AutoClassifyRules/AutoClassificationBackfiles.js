/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "AutoClassificationBackfiles",
  "type" : "BusinessAction",
  "setupGroups" : [ "AutoClassifyRules" ],
  "name" : "Auto Classification Backfiles",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Backfiles" ],
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
    "contract" : "LoggerBindContract",
    "alias" : "log",
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
exports.operation0 = function (log,node,manager) {
/*
 * This code does the following: 
 * - Gets the first letter of the current object and transforms it into ASCII
 * - Using a switch, it caughts all the possible cases that the environment has per Lexi folders
 * - In every case, it sets the parent where the current object should be classified into
 * - For number and special characters, it is classifying them into the A-F group as defaulted
 */
var backfileFirstLetter = node.getName().toUpperCase().charCodeAt(0);
var parentObject = "";

switch(true){
	case (backfileFirstLetter >= 65 && backfileFirstLetter <=70):
		parentObject = manager.getProductHome().getProductByID("BLG_A_F");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	case (backfileFirstLetter >= 71 && backfileFirstLetter <= 76):
		parentObject = manager.getProductHome().getProductByID("BLG_G_L");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	case (backfileFirstLetter >= 77 && backfileFirstLetter <= 82):
		parentObject = manager.getProductHome().getProductByID("BLG_M_R");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	case (backfileFirstLetter >= 83 && backfileFirstLetter <=90):
		parentObject = manager.getProductHome().getProductByID("BLG_S_Z");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	default:
		parentObject = manager.getProductHome().getProductByID("BLG_A_F");
		//log.info(parentObject);
		node.setParent(parentObject);
}
}