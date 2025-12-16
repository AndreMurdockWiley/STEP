/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "HistoryNotesDCAction",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalHistoryGroup" ],
  "name" : "History Notes Data Container Action",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalHistoryProducts" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : true,
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

var dataContainers = getDataContainerObjects(NODE, "HistoryNotesDataContainer");
var iter = dataContainers.iterator();
var dc = "";
var createdDate = "";
var createdBy = "";
var modifiedDate = "";
var modifiedBy = "";
var NotesType = "";
var Notes = "";
var ismodified = "";
var JournalUUID = "";

while (iter.hasNext()) {
    dc = iter.next().getDataContainerObject();
    createdDate = dc.getValue("HistoryNotesCreatedDate").getSimpleValue();
    createdBy = dc.getValue("HistoryNotesCreatedBy").getSimpleValue();
    modifiedDate = dc.getValue("HistoryNotesModifiedDate").getSimpleValue();
    modifiedBy = dc.getValue("HistoryNotesModifiedBy").getSimpleValue();
    NotesType = dc.getValue("HistoryNotesType").getSimpleValue();
    Notes = dc.getValue("HistoryNotes").getSimpleValue();
    ismodified = dc.getValue("HistoryNotesIsModified").getSimpleValue();
    dcHistoryUUID = dc.getValue("JournalNotesHistoryUUID").getSimpleValue();
    HistoryUUID = NODE.getID();
    if(!dcHistoryUUID){
    dc.getValue("JournalNotesHistoryUUID").setSimpleValue(HistoryUUID);
    log.info("HistoryUUID" + dc.getValue("JournalNotesHistoryUUID").getSimpleValue());
    }

    var date = new java.util.Date();
    var dateFormat = new java.text.SimpleDateFormat("dd-MMM-yyyy");
    var formattedDate = dateFormat.format(date);
    log.info(formattedDate);

    if (createdDate && createdBy && ismodified == "Yes") {
        var modDate = formattedDate;
        var modBy = manager.getCurrentUser().getName();
        
        dc.getValue("HistoryNotesModifiedDate").setSimpleValue(modDate);
        modifiedDate = dc.getValue("HistoryNotesModifiedDate").getSimpleValue();
       
        dc.getValue("HistoryNotesModifiedBy").setSimpleValue(modBy);
        modifiedBy = dc.getValue("HistoryNotesModifiedBy").getSimpleValue();

        log.info("modifiedDate" + modifiedDate);
        log.info("modifiedBy" + modifiedBy);
        dc.getValue("HistoryNotesIsModified").setSimpleValue("No");
    }

    if (!createdDate && !createdBy) {
        var currDate = formattedDate;
        var currBy = manager.getCurrentUser().getName();
        dc.getValue("HistoryNotesCreatedDate").setSimpleValue(currDate);
        createdDate = dc.getValue("HistoryNotesCreatedDate").getSimpleValue();
        dc.getValue("HistoryNotesCreatedBy").setSimpleValue(currBy);
        createdBy = dc.getValue("HistoryNotesCreatedBy").getSimpleValue();
        log.info("createdDate" + createdDate);
        log.info("createdBy" + createdBy);
        if (ismodified == "Yes") {
        dc.getValue("HistoryNotesIsModified").setSimpleValue("No");
        }
    }    
}
}