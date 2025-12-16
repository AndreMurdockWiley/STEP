/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BackfileNotesDCAction",
  "type" : "BusinessAction",
  "setupGroups" : [ "BackfilesUpsertGroup" ],
  "name" : "Backfile Notes Data Container Action",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Backfiles" ],
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

var dataContainers = getDataContainerObjects(NODE, "BackfileNotesDataContainer");
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
    createdDate = dc.getValue("BackfileNotesCreatedDate").getSimpleValue();
    createdBy = dc.getValue("BackfileNotesCreatedBy").getSimpleValue();
    modifiedDate = dc.getValue("BackfileNotesModifiedDate").getSimpleValue();
    modifiedBy = dc.getValue("BackfileNotesModifiedBy").getSimpleValue();
    NotesType = dc.getValue("BackfileNotesType").getSimpleValue();
    Notes = dc.getValue("BackfileNotes").getSimpleValue();
    ismodified = dc.getValue("BackfileNotesIsModified").getSimpleValue();    
    dcBackfileUUID = dc.getValue("JournalNotesBackfileUUID").getSimpleValue();
    backfileUUID = NODE.getID();
    if(!dcBackfileUUID){
    dc.getValue("JournalNotesBackfileUUID").setSimpleValue(backfileUUID);
    log.info("BackfileUUID" + dc.getValue("JournalNotesBackfileUUID").getSimpleValue());
    }

    var date = new java.util.Date();
    var dateFormat = new java.text.SimpleDateFormat("dd-MMM-yyyy");
    var formattedDate = dateFormat.format(date);
    log.info(formattedDate);

    if (createdDate && createdBy && ismodified == "Yes") {
        var modDate = formattedDate;
        var modBy = manager.getCurrentUser().getName();

        dc.getValue("BackfileNotesModifiedDate").setSimpleValue(modDate);
        modifiedDate = dc.getValue("BackfileNotesModifiedDate").getSimpleValue();

        dc.getValue("BackfileNotesModifiedBy").setSimpleValue(modBy);
        modifiedBy = dc.getValue("BackfileNotesModifiedBy").getSimpleValue();
        
        log.info("modifiedDate" + modifiedDate);
        log.info("modifiedBy" + modifiedBy);
        dc.getValue("BackfileNotesIsModified").setSimpleValue("No");
    }

    if (!createdDate && !createdBy) {
        var currDate = formattedDate;
        var currBy = manager.getCurrentUser().getName();

        dc.getValue("BackfileNotesCreatedDate").setSimpleValue(currDate);
        createdDate = dc.getValue("BackfileNotesCreatedDate").getSimpleValue();
        dc.getValue("BackfileNotesCreatedBy").setSimpleValue(currBy);
        createdBy = dc.getValue("BackfileNotesCreatedBy").getSimpleValue();
        log.info("createdDate" + createdDate);
        log.info("createdBy" + createdBy);
        if (ismodified == "Yes") {
        dc.getValue("BackfileNotesIsModified").setSimpleValue("No");
        }
    }
    
}
}