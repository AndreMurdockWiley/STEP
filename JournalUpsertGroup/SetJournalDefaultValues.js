/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "SetJournalDefaultValues",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalUpsertGroup" ],
  "name" : "SetJournalDefaultValues",
  "description" : "To set default values to some journal attributes, during journal creation with Journal Handover Form.",
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
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
/*----------------------------M-O-D-I-F-I-C-A-T-I-O-N----------L-O-G---------------------------------------------------
==============================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
==============================================================================================================================================================================
12March25    Venkata Siva Harish Mattaparthi              RPDM-9627    Initial Creation                                                                     
                                                                
==============================================================================================================================================================================
Purpose of Business Rule: To set default values to some journal attributes, during journal creation with Journal Handover Form.
==============================================================================================================================================================================
*/
var journalTrueStatus = node.getValue('JournalTrueStatus').getSimpleValue();
if (journalTrueStatus == 'Yes') {

    node.getValue('ProductSubType').setValue('Regular Journal');
    node.getValue('JournalStatusOnOL').setValue('Live in WOL');
    node.getValue('JournalAccessBasis').setValue('Content');

    //set JournalRightsDarkArchServices with values "Clockss", "Portico"
    var DarkArchServices = node.getValue('JournalRightsDarkArchServices').getValues().toArray();
    var DarkArchServices2 = [];
    DarkArchServices.forEach(i => {
        DarkArchServices2.push(i.getValue().trim());
    });
    var isPresent1 = false;
    var isPresent2 = false;
    for (var k = 0; k < DarkArchServices2.length; k++) {
        if (DarkArchServices2[k] == "Clockss") {
            isPresent1 = true;
        }
        if (DarkArchServices2[k] == "Portico") {
            isPresent2 = true;
        }
    }
    if (isPresent1 == false) { node.getValue('JournalRightsDarkArchServices').addValue('Clockss'); }
    if (isPresent2 == false) { node.getValue('JournalRightsDarkArchServices').addValue('Portico'); }
}

node.getValue('ProductDivision').setValue('STMS');
node.getValue('ProductLanguage').setValue('English');
}