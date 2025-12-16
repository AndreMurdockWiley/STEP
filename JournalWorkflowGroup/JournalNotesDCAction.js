/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JournalNotesDCAction",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalWorkflowGroup" ],
  "name" : "Journal Notes Data Container Action",
  "description" : null,
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
    "alias" : "NODE",
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
exports.operation0 = function (NODE,log,manager) {
function getDataContainerObjects(NODE, containerID) {
    var dcWrapper = NODE.getDataContainerByTypeID(containerID);
    var dcs = null;
    if (dcWrapper instanceof com.stibo.core.domain.datacontainer.SingleDataContainer) {
        dcs = new java.util.HashSet();
        if (dcWrapper.getDataContainerObject()) {
            dcs.add(dcWrapper);
        }
    } else {
        dcs = dcWrapper.getDataContainers();
    }
    return dcs;
}

var dataContainers = getDataContainerObjects(NODE, "JournalNotesDataContainer");
var iter = dataContainers.iterator();
var dc = "";
var createdDate = "";
var createdBy = "";
var modifiedDate = "";
var modifiedBy = "";
var SendtoSAP = "";
var SAPNotes = "";
var NotesType = "";
var Notes = "";
var ismodified = "";
var JournalUUID = "";

while (iter.hasNext()) {
    dc = iter.next().getDataContainerObject();
    createdDate = dc.getValue("JournalNotesCreatedDate").getSimpleValue();
    createdBy = dc.getValue("JournalNotesCreatedBy").getSimpleValue();
    modifiedDate = dc.getValue("JournalNotesModifiedDate").getSimpleValue();
    modifiedBy = dc.getValue("JournalNotesModifiedBy").getSimpleValue();
    SendtoSAP = dc.getValue("JournalNotesSendToSAP").getSimpleValue();
    NotesType = dc.getValue("JournalNotesType").getSimpleValue();
    Notes = dc.getValue("JournalNotes").getSimpleValue();
    ismodified = dc.getValue("JournalNotesIsModified").getSimpleValue();
    dcJournalUUID = dc.getValue("JournalNotesJournalUUID").getSimpleValue();
    JournalUUID = NODE.getID();
    if(!dcJournalUUID){
    dc.getValue("JournalNotesJournalUUID").setSimpleValue(JournalUUID);
    log.info("JournalUUID" + dc.getValue("JournalNotesJournalUUID").getSimpleValue());
    }

    var date = new java.util.Date();
    var dateFormat = new java.text.SimpleDateFormat("dd-MMM-yyyy");
    var formattedDate = dateFormat.format(date);
    log.info(formattedDate);

    if (createdDate && createdBy && ismodified == "Yes") {
        var modDate = formattedDate;
        var modBy = manager.getCurrentUser().getName();

        dc.getValue("JournalNotesModifiedDate").setSimpleValue(modDate);
        modifiedDate = dc.getValue("JournalNotesModifiedDate").getSimpleValue();

        dc.getValue("JournalNotesModifiedBy").setSimpleValue(modBy);
        modifiedBy = dc.getValue("JournalNotesModifiedBy").getSimpleValue();
        log.info("modifiedDate" + modifiedDate);
        log.info("modifiedBy" + modifiedBy);
        dc.getValue("JournalNotesIsModified").setSimpleValue("No");
        
    }

    if (!createdDate && !createdBy) {
        var currDate = formattedDate;
        var currBy = manager.getCurrentUser().getName();

        dc.getValue("JournalNotesCreatedDate").setSimpleValue(currDate);
        createdDate = dc.getValue("JournalNotesCreatedDate").getSimpleValue();
        dc.getValue("JournalNotesCreatedBy").setSimpleValue(currBy);
        createdBy = dc.getValue("JournalNotesCreatedBy").getSimpleValue();
        log.info("createdDate" + createdDate);
        log.info("createdBy" + createdBy);
        if (ismodified == "Yes") {
        dc.getValue("JournalNotesIsModified").setSimpleValue("No");
        }
    }

    if (SendtoSAP == "Yes") {
        var date = modifiedDate ? modifiedDate : createdDate;
        var by = modifiedBy ? modifiedBy : createdBy;
        var concatenatedValue = date + " , " + by + " , " + NotesType + " , " + Notes;

        if (SAPNotes.length > 0) {
            SAPNotes += "; ";
        }
        SAPNotes += concatenatedValue;
        //   log.info("SAPNotes: "+ SAPNotes);
    }
}
NODE.getValue("JournalSAPNotes").setSimpleValue(SAPNotes);
log.info(NODE.getValue("JournalSAPNotes").getSimpleValue());
}