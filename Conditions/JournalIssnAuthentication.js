/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JournalIssnAuthentication",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Journal ISSN Authentication",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "JournalDigitalMedia" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessConditionWithBinds",
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
  }, {
    "contract" : "DataIssuesContextBind",
    "alias" : "messages",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (log,node,manager,messages) {
/*
 * This code does the following: 
 * - Gets the media type and product type from the current object
 * - If the current product is of type "Other" pass the authentication
 * - For all other types, it takes its children, which are journal media
 * - Gets the ISSN of this journal media object
 * - Authenticates the ISSN calculating the check number as follows:
 *  - Gets the seven first digits of the ISSN from the left side
 *  - Sums the multiplied values of the ISSN digits
 *  - Takes the remainder of the division of the sum value
 *  - Rests the remainder of the last operation to 11
 *  - Takes care of specific cases where the check code must a dictated value
 *  - Adds this check code at the last possition of the ISSN number
 *  - Compares the values of the full ISSNN with the calculated ISSN
 *  - If they are equals, returns true, otherwise returns false
 * - If the authentication returns false, the BR will stop and return an error message
 * - If the authentication returns true, it will proceed with the remaining children
 */

var journalStatus = node.getValue("JournalTrueStatus").getSimpleValue();
var journalMediaType = node.getValue("ProductMediaType").getSimpleValue();
var mediaJournalIssnAttributeId = "";
var children = "";
var currentObject = "";

function issnAuthentication(mediaJournalIssnAttributeId, currentObject){
	var fullIssn = 0;
	var issn = 0;
	var varNumber = 0;
	var issnNumber = 0;
	var issnLength = 8;

	fullIssn = currentObject.getValue(mediaJournalIssnAttributeId).getSimpleValue();
	log.info("Incoming ISSN: " + fullIssn);
	issn = fullIssn.substring(0, 7);
	
	for (var i = 0; i < issn.length(); i++){
		issnNumber = String.fromCharCode(issn.charCodeAt(i));
		varNumber = varNumber + (issnNumber*issnLength);
		//log.info(issnNumber*issnLength);
		issnLength --
	}
	//log.info("Total: " + varNumber);
	
	varNumber = varNumber % 11;
	//log.info("Remainder: " + varNumber);
	
	if (varNumber != 0){
		varNumber = 11 - varNumber;
		log.info("Rest Remainder: " + varNumber);
	}
	
	if (varNumber == 10){
		varNumber = "X";
	}
	if (varNumber == ""){
		varNumber = 0;
	}
	
	issn = issn + varNumber;
	log.info("Generated ISSN: " + issn);

	if (fullIssn == issn){
		log.info("Valid ISSN");
		return true;
	} else {
		messages.addError("Invalid ISSN - Expecting " + issn);
		return messages;
	}
}

if (journalStatus == "No"){
	return true;
} else {
	children = node.getParent().getChildren();
	
	if (journalMediaType == "Print" || (journalMediaType == "Online")){
		for (var i = 0; i < children.size(); i++) {
			currentObject = children.get(i);
			
			if (currentObject.getValue("JournalMediaCode").getSimpleValue() == "Print"){
				mediaJournalIssnAttributeId = "ProductIssn";	
			} else {
				mediaJournalIssnAttributeId = "ProductIssn";	
			}

			if (issnAuthentication(mediaJournalIssnAttributeId, currentObject) != true){
				return messages;
			}
		}
		return true;
	}
	if(journalMediaType == "Both"){
		for (var i = 0; i < children.size(); i++) {
			currentObject = children.get(i);
			
			if (currentObject.getValue("JournalMediaCode").getSimpleValue() == "Print"){
				mediaJournalIssnAttributeId = "ProductIssn";
				
				if (issnAuthentication(mediaJournalIssnAttributeId, currentObject) != true){
					return messages;
				}
			} else {
				mediaJournalIssnAttributeId = "ProductIssn";
				
				if (issnAuthentication(mediaJournalIssnAttributeId, currentObject) != true){
					return messages;
				}
			}
		}
		return true;
	}
}
return false;
}