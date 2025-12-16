/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "AutoClassificationObooks",
  "type" : "BusinessAction",
  "setupGroups" : [ "AutoClassifyRules" ],
  "name" : "Auto Classification Obooks",
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
exports.operation0 = function (node,log,manager) {
/*
 * This code does the following: 
 * - Gets the first letter of the current object and transforms it into ASCII
 * - Using a switch, it caughts all the possible cases that the environment has per Lexi folders
 * - In every case, it sets the parent where the current object should be classified into
 * - For number and special characters, it is classifying them into the A-F group as defaulted
 */
var obookFirstLetter = node.getName().toUpperCase().charCodeAt(0);
var parentObject = "";

switch(true){
	case (obookFirstLetter >= 65 && obookFirstLetter <=70):
		parentObject = manager.getProductHome().getProductByID("OLBK_A_F");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	case (obookFirstLetter >= 71 && obookFirstLetter <= 76):
		parentObject = manager.getProductHome().getProductByID("OLBK_G_L");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	case (obookFirstLetter >= 77 && obookFirstLetter <= 82):
		parentObject = manager.getProductHome().getProductByID("OLBK_M_R");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	case (obookFirstLetter >= 83 && obookFirstLetter <=90):
		parentObject = manager.getProductHome().getProductByID("OLBK_S_Z");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	default:
		parentObject = manager.getProductHome().getProductByID("OLBK_A_F");
		//log.info(parentObject);
		node.setParent(parentObject);
}
}