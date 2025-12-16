/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "AutoClassificationMultiMediaPackages",
  "type" : "BusinessAction",
  "setupGroups" : [ "AutoClassifyRules" ],
  "name" : "Auto Classification MultiMedia Packages",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "MultiMedia" ],
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
var multiMediaFirstLetter = node.getName().toUpperCase().charCodeAt(0);
var parentObject = "";

switch(true){
	case (multiMediaFirstLetter >= 65 && multiMediaFirstLetter <=70):
		parentObject = manager.getProductHome().getProductByID("MM_AZ_A_F");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	case (multiMediaFirstLetter >= 71 && multiMediaFirstLetter <= 76):
		parentObject = manager.getProductHome().getProductByID("MM_AZ_G_L");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	case (multiMediaFirstLetter >= 77 && multiMediaFirstLetter <= 82):
		parentObject = manager.getProductHome().getProductByID("MM_AZ_M_R");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	case (multiMediaFirstLetter >= 83 && multiMediaFirstLetter <=90):
		parentObject = manager.getProductHome().getProductByID("MM_AZ_S_Z");
		//log.info(parentObject);
		node.setParent(parentObject);
		break;
	default:
		parentObject = manager.getProductHome().getProductByID("MM_AZ_A_F");
		//log.info(parentObject);
		node.setParent(parentObject);
}
}