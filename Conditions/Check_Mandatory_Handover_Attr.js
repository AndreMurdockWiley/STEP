/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Check_Mandatory_Handover_Attr",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Check Mandatory Handover Attr",
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
  "pluginId" : "JavaScriptBusinessConditionWithBinds",
  "binds" : [ {
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
exports.operation0 = function (node,manager,log) {
if (node.getValue('JournalGroupCode').getSimpleValue() == null)
	{
		return "Journal Group Code is null";
	}
else if (node.getValue('ProductMediaType').getSimpleValue() == null && node.getValue('ProductMediaType').getSimpleValue() == "")
	{
		//return "Print/Online or Both is null";
		return false;
	}
else if (node.getValue('ProductMediaType').getSimpleValue() == "Print" && node.getValue('IDLPrintJournalCode').getSimpleValue() == null && node.getValue('IDLPrintJournalISSN').getSimpleValue() == null)
	{
		return "Print Journal Code and Print Journal ISSN are null";
	}
else if (node.getValue('ProductMediaType').getSimpleValue() == "Print" && node.getValue('IDLPrintJournalCode').getSimpleValue() == null)
	{
		return "Print Journal Code is null";
	}
else if (node.getValue('ProductMediaType').getSimpleValue() == "Print" && node.getValue('IDLPrintJournalISSN').getSimpleValue() == null)
	{
		return "Print Journal ISSN is null";
	}
else if (node.getValue('ProductMediaType').getSimpleValue() == "Online" && node.getValue('IDLDigitalJournalCode').getSimpleValue() == null && node.getValue('IDLDigitalJournalISSN').getSimpleValue() == null)
	{
		return "Digital Journal Code and Digital Journal ISSN are null";
	}
else if (node.getValue('ProductMediaType').getSimpleValue() == "Online" && node.getValue('IDLDigitalJournalCode').getSimpleValue() == null)
	{
		return "Digital Journal Code is null";
	}
else if (node.getValue('ProductMediaType').getSimpleValue() == "Online" && node.getValue('IDLDigitalJournalISSN').getSimpleValue() == null)
	{
		return "Digital Journal ISSN is null";
	}
else if (node.getValue('ProductMediaType').getSimpleValue() == "Both" && node.getValue('IDLDigitalJournalCode').getSimpleValue() == null && node.getValue('IDLDigitalJournalISSN').getSimpleValue() == null && node.getValue('IDLPrintJournalCode').getSimpleValue() == null && node.getValue('IDLPrintJournalISSN').getSimpleValue() == null)
	{
		return "Digital Journal Code, Digital Journal ISSN, Print Journal Code, and Print Journal ISSN are all null";
	}
else if (node.getValue('ProductMediaType').getSimpleValue() == "Both" && node.getValue('IDLDigitalJournalCode').getSimpleValue() == null && node.getValue('IDLDigitalJournalISSN').getSimpleValue() == null && node.getValue('IDLPrintJournalCode').getSimpleValue() == null)
	{
		return "Digital Journal Code, Digital Journal ISSN and Print Journal Code are all null";
	}
else if (node.getValue('ProductMediaType').getSimpleValue() == "Both" && node.getValue('IDLPrintJournalCode').getSimpleValue() == null && node.getValue('IDLPrintJournalISSN').getSimpleValue() == null && node.getValue('IDLDigitalJournalCode').getSimpleValue() == null)
	{
		return "Print Journal Code, Print Journal ISSN and Digital Journal Code are all null";
	}	
else if (node.getValue('ProductMediaType').getSimpleValue() == "Both" && node.getValue('IDLDigitalJournalCode').getSimpleValue() == null && node.getValue('IDLDigitalJournalISSN').getSimpleValue() == null && node.getValue('IDLPrintJournalISSN').getSimpleValue() == null)
	{
		return "Digital Journal Code, Digital Journal ISSN and Print Journal ISSN are all null";
	}
else if (node.getValue('ProductMediaType').getSimpleValue() == "Both" && node.getValue('IDLPrintJournalCode').getSimpleValue() == null && node.getValue('IDLPrintJournalISSN').getSimpleValue() == null && node.getValue('IDLDigitalJournalISSN').getSimpleValue() == null)
	{
		return "Print Journal Code, Print Journal ISSN and Digital Journal ISSN are all null";
	}
else if (node.getValue('ProductMediaType').getSimpleValue() == "Both" && node.getValue('IDLDigitalJournalCode').getSimpleValue() == null && node.getValue('IDLDigitalJournalISSN').getSimpleValue() == null)
	{
		return "Digital Journal Code and Digital Journal ISSN are null";
	}
else if (node.getValue('ProductMediaType').getSimpleValue() == "Both" && node.getValue('IDLPrintJournalCode').getSimpleValue() == null && node.getValue('IDLPrintJournalISSN').getSimpleValue() == null)
	{
		return "Print Journal Code and Print Journal ISSN are null";
	}
else if (node.getValue('ProductMediaType').getSimpleValue() == "Both" && node.getValue('IDLDigitalJournalCode').getSimpleValue() == null)
	{
		return "Digital Journal Code is null";
	}
else if (node.getValue('ProductMediaType').getSimpleValue() == "Both" && node.getValue('IDLDigitalJournalISSN').getSimpleValue() == null)
	{
		return "Digital Journal ISSN is null";
	}
else if (node.getValue('ProductMediaType').getSimpleValue() == "Both" && node.getValue('IDLPrintJournalCode').getSimpleValue() == null)
	{
		return "Print Journal Code is null";
	}
else if (node.getValue('ProductMediaType').getSimpleValue() == "Both" && node.getValue('IDLPrintJournalISSN').getSimpleValue() == null)
	{
		return "Print Journal ISSN is null";
	}
var jrnlHandFormMandatoryAttr = manager.getAttributeGroupHome().getAttributeGroupByID('AG_Handover_Form_Mandatory');
var attributeList = jrnlHandFormMandatoryAttr.getAttributes().toArray();
log.info(attributeList.length);
var attributeCheck = true;

for(var i = 0; i < attributeList.length; i++){
	var attributeID = attributeList[i].getID();
	var attributeValue = node.getValue(attributeID).getSimpleValue();
	
	log.info("Attribute: " + attributeValue);
	if(attributeValue == null) {
		return false; 
	}
	else if (attributeValue.equals("")){
		log.info("I got here");
		return false;
	}
}
return true;
}