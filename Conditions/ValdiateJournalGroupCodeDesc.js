/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "ValdiateJournalGroupCodeDesc",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "Validate If JournalGroupCode Description Missing",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "EntityRoot" ],
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
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "AttributeBindContract",
    "alias" : "JournalGroupCodeDesc",
    "parameterClass" : "com.stibo.core.domain.impl.AttributeImpl",
    "value" : "EntityJournalGroupCodeDescription",
    "description" : null
  }, {
    "contract" : "EntityBindContract",
    "alias" : "JournalGroupCodeRef",
    "parameterClass" : "com.stibo.core.domain.impl.entity.FrontEntityImpl$$Generated$$6",
    "value" : "JournalGroupCodes",
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "Manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "Log",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,JournalGroupCodeDesc,JournalGroupCodeRef,Manager,Log) {
var journalGroupCodeDescription = NODE.getValue("EntityJournalGroupCodeDescription").getSimpleValue();
//log.info('journalGroupCodeDescription..' + journalGroupCodeDescription);

if (NODE.getValue("EntityJournalGroupCodeDescription").getSimpleValue() == null)
{ 
	log.info('journalGroupCodeDescription null..' + journalGroupCodeDescription);
	return false;
}
if (NODE.getValue("EntityJournalGroupCodeDescription").getSimpleValue() != null)
	{
		log.info('journalGroupCodeDescription..' + journalGroupCodeDescription);

		return true;
	}
return false;
}