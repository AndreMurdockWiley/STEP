/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Group Issue Functions",
  "type" : "BusinessLibrary",
  "setupGroups" : [ "Libraries" ],
  "name" : "Group Issue Functions",
  "description" : null,
  "scope" : null,
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : null,
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessLibrary",
  "binds" : [ ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
/*----------------------------M-O-D-I-F-I-C-A-T-I-O-N----------L-O-G---------------------------------------------------
=======================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
=======================================================================================================================
30Nov2024    Venkata Siva Harish Mattaparthi    HAR01     RPDM-8658    Fix the logic to set C_MessageStatus

=======================================================================================================================
*/



/**
 * Group issues to classification folders
 * */
//function to set group issue State
function setGroupIssueState(node,mgr,logger){	
	var IssueState = node.getValue("IssueState").getSimpleValue();
	//logger.info(IssueState);

	if(IssueState){
		//var PubYearVolumeLink = mgr.getHome(com.stibo.core.domain.classificationproductlinktype.ClassificationProductLinkTypeHome).getLinkTypeByID("JournalGroupIssueRef");
		//PubYearVolumeLink = node.getClassificationProductLinks().get(PubYearVolumeLink).get(0);
		//logger.info(PubYearVolumeLink.getClassification());
		var PubYearVolumeLink = getProductClassificationLinks(node, "JournalGroupIssueRef", mgr, logger);
		if (PubYearVolumeLink != null) {
			var PubYearVolumeGroupClass = PubYearVolumeLink;
			var Draft =queryForObjTypeBelowWithValue(PubYearVolumeGroupClass,"IssueState","Draft");
			var Enriched =queryForObjTypeBelowWithValue(PubYearVolumeGroupClass,"IssueState","Enriched");
			var SenttoSAP =queryForObjTypeBelowWithValue(PubYearVolumeGroupClass,"IssueState","Sent to SAP");
			
			if(SenttoSAP != null){
				//logger.info("SenttoSAP");
				PubYearVolumeGroupClass.getValue("C_IssueState").setSimpleValue("Sent to SAP");
			}
			else{
				if(Enriched != null){
					//logger.info("Enriched");
					PubYearVolumeGroupClass.getValue("C_IssueState").setSimpleValue("Enriched");
				}
				else if(Draft != null){
					//logger.info("Draft");
					PubYearVolumeGroupClass.getValue("C_IssueState").setSimpleValue("Draft");
				}
			}
			
		}
}	

}


function createAndUpdateGroupIssues(node, mgr, logger, groupIssueOIEP, groupIssueOIEPkafka){
//Businessrule to link issues to classification folder
var PubYearVolumeLink = mgr.getHome(com.stibo.core.domain.classificationproductlinktype.ClassificationProductLinkTypeHome).getLinkTypeByID("JournalGroupIssueRef");
PubYearVolumeLink = node.getClassificationProductLinks().get(PubYearVolumeLink).toArray();

if (PubYearVolumeLink[0] == null) {
    var IssueType = node.getValue("IssueType").getSimpleValue();

    if (IssueType == "Standard Issue") {
        updateSIClassification(node, mgr);
    } 
    else if (IssueType == "Merged Issue") {
        updateMIClassification(node, mgr);
    } 
    else if (IssueType == "Supplement") {
        updateSUPIClassification(node, mgr)
    } 
    else if (IssueType == "Special Issue") {
    }
}

//Copy data from pint and digital to group issue classification object
copyValuesToClass(node, groupIssueOIEP,groupIssueOIEPkafka, mgr, logger);
}

function updateSIClassification(node, mgr) {
    var JournalGroupCode = node.getValue("JournalGroupCode").getSimpleValue();
    var ProductPublicationYear = node.getValue("ProductPublicationYear").getSimpleValue();
    var IssueVolumeNumber = node.getValue("IssueVolumeNumber").getSimpleValue();
    var IssueFromIssueNumber = node.getValue("IssueFromIssueNumber").getSimpleValue();
    var JournalGroupIndex = node.getParent().getParent().getParent().getParent().getParent();
    var JournalGroupIndexID = node.getParent().getParent().getParent().getParent().getParent().getID();
    var JournalGroup = node.getParent().getParent().getParent().getParent();
    var JournalGroupIndexName = node.getParent().getParent().getParent().getParent().getParent().getName();
    var JournalGroupName = node.getParent().getParent().getParent().getParent().getName();
    var JournalGroupID = "C_" + JournalGroupCode;
    var JournalGroupIndexID = "C_" + JournalGroupIndexID;
    var JournalGroupClass = mgr.getClassificationHome().getClassificationByID(JournalGroupID);
    var JournalGroupIndexClass = mgr.getClassificationHome().getClassificationByID(JournalGroupIndexID);
    var JournalGroupHierarchyClass = mgr.getClassificationHome().getClassificationByID("JournalGroupHierarchy");
    var PubYearVolumeGroupID = JournalGroupCode + "_" + ProductPublicationYear + "_" + IssueVolumeNumber + "_ST_" + IssueFromIssueNumber;
    var PubYearVolumeGroupName = JournalGroupCode + "-" + ProductPublicationYear + "-Volume" + " " + IssueVolumeNumber + "-ST-" + IssueFromIssueNumber;
    var PubYearVolumeGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearVolumeGroupID);
    var PubYearVolumeLink = mgr.getHome(com.stibo.core.domain.classificationproductlinktype.ClassificationProductLinkTypeHome).getLinkTypeByID("JournalGroupIssueRef");

    var PubYearGroupID = JournalGroupCode + "_" + ProductPublicationYear;
    var PubYearGroupName = JournalGroupCode + "-" + ProductPublicationYear;
    var PubYearGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearGroupID);
    var VolumeGroupID = JournalGroupCode + "_" + ProductPublicationYear + "_" + IssueVolumeNumber;
    var VolumeGroupName = JournalGroupCode + "-" + ProductPublicationYear + "-Volume" + " " + IssueVolumeNumber;
    var VolumeGroupClass = mgr.getClassificationHome().getClassificationByID(VolumeGroupID);

    if (PubYearVolumeGroupClass != null) {
        log.info("PubYearVolumeGroup exist");
        try {
            node.createClassificationProductLink(PubYearVolumeGroupClass, PubYearVolumeLink);
        } catch (e) {
            log.info("Link for: " + PubYearVolumeGroupClass + " already exist");
        }
    } else if (VolumeGroupClass != null) {
        log.info("JournalGroupClass exist");
        VolumeGroupClass.createClassification(PubYearVolumeGroupID, "PubYearVolumeGroup");
        var PubYearVolumeGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearVolumeGroupID);
        PubYearVolumeGroupClass.setName(PubYearVolumeGroupName);
        setUUIDForIssues(PubYearVolumeGroupClass, mgr, logger);
        PubYearVolumeGroupClass.getName();
        PubYearVolumeGroupClass.approve();
        node.createClassificationProductLink(PubYearVolumeGroupClass, PubYearVolumeLink);
    } else if (PubYearGroupClass != null) {
        log.info("PubYearGroupClass exist");
        PubYearGroupClass.createClassification(VolumeGroupID, "VolumeGroup");
        var VolumeGroupClass = mgr.getClassificationHome().getClassificationByID(VolumeGroupID);
        VolumeGroupClass.setName(VolumeGroupName);
        setUUIDForIssues(VolumeGroupClass, mgr, logger);
        VolumeGroupClass.getName();
        VolumeGroupClass.approve();
        VolumeGroupClass.createClassification(PubYearVolumeGroupID, "PubYearVolumeGroup");
        var PubYearVolumeGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearVolumeGroupID);
        PubYearVolumeGroupClass.setName(PubYearVolumeGroupName);
        setUUIDForIssues(PubYearVolumeGroupClass, mgr, logger);
        PubYearVolumeGroupClass.getName();
        PubYearVolumeGroupClass.approve();
        node.createClassificationProductLink(PubYearVolumeGroupClass, PubYearVolumeLink);
    } else if (JournalGroupClass != null) {
        log.info("JournalGroupClass exist");
        JournalGroupClass.createClassification(PubYearGroupID, "PubYearGroup");
        var PubYearGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearGroupID);
        PubYearGroupClass.setName(PubYearGroupName);
        setUUIDForIssues(PubYearGroupClass, mgr, logger);
        PubYearGroupClass.getName();
        PubYearGroupClass.approve();
        PubYearGroupClass.createClassification(VolumeGroupID, "VolumeGroup");
        var VolumeGroupClass = mgr.getClassificationHome().getClassificationByID(VolumeGroupID);
        VolumeGroupClass.setName(VolumeGroupName);
        setUUIDForIssues(VolumeGroupClass, mgr, logger);
        VolumeGroupClass.getName();
        VolumeGroupClass.approve();
        VolumeGroupClass.createClassification(PubYearVolumeGroupID, "PubYearVolumeGroup");
        var PubYearVolumeGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearVolumeGroupID);
        PubYearVolumeGroupClass.setName(PubYearVolumeGroupName);
        setUUIDForIssues(PubYearVolumeGroupClass, mgr, logger);
        PubYearVolumeGroupClass.getName();
        PubYearVolumeGroupClass.approve();
        node.createClassificationProductLink(PubYearVolumeGroupClass, PubYearVolumeLink);
    } else if (JournalGroupIndexClass != null) {
        log.info("JournalGroupIndexClass exist");
        JournalGroupIndexClass.createClassification(JournalGroupID, "JournalGroup");
        var JournalGroupClass = mgr.getClassificationHome().getClassificationByID(JournalGroupID);
        JournalGroupClass.setName(JournalGroupName);
        JournalGroupClass.approve();
        JournalGroupClass.createClassification(PubYearGroupID, "PubYearGroup");
        var PubYearGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearGroupID);
        PubYearGroupClass.setName(PubYearGroupName);
        setUUIDForIssues(PubYearGroupClass, mgr, logger);
        PubYearGroupClass.getName();
        PubYearGroupClass.approve();
        PubYearGroupClass.createClassification(VolumeGroupID, "VolumeGroup");
        var VolumeGroupClass = mgr.getClassificationHome().getClassificationByID(VolumeGroupID);
        VolumeGroupClass.setName(VolumeGroupName);
        setUUIDForIssues(VolumeGroupClass, mgr, logger);
        VolumeGroupClass.getName();
        VolumeGroupClass.approve();
        VolumeGroupClass.createClassification(PubYearVolumeGroupID, "PubYearVolumeGroup");
        var PubYearVolumeGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearVolumeGroupID);
        PubYearVolumeGroupClass.setName(PubYearVolumeGroupName);
        setUUIDForIssues(PubYearVolumeGroupClass, mgr, logger);
        PubYearVolumeGroupClass.getName();
        PubYearVolumeGroupClass.approve();
        node.createClassificationProductLink(PubYearVolumeGroupClass, PubYearVolumeLink);
    } else {
        log.info("Journal root exist");
        JournalGroupHierarchyClass.createClassification(JournalGroupIndexID, "JournalGroupIndex");
        var JournalGroupIndexClass = mgr.getClassificationHome().getClassificationByID(JournalGroupIndexID);
        JournalGroupIndexClass.setName(JournalGroupIndexName);
        JournalGroupIndexClass.approve();
        JournalGroupIndexClass.createClassification(JournalGroupID, "JournalGroup");
        var JournalGroupClass = mgr.getClassificationHome().getClassificationByID(JournalGroupID);
        JournalGroupClass.setName(JournalGroupName);
        JournalGroupClass.approve();
        JournalGroupClass.createClassification(PubYearGroupID, "PubYearGroup");
        var PubYearGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearGroupID);
        PubYearGroupClass.setName(PubYearGroupName);
        setUUIDForIssues(PubYearGroupClass, mgr, logger);
        PubYearGroupClass.getName();
        PubYearGroupClass.approve();
        PubYearGroupClass.createClassification(VolumeGroupID, "VolumeGroup");
        var VolumeGroupClass = mgr.getClassificationHome().getClassificationByID(VolumeGroupID);
        VolumeGroupClass.setName(VolumeGroupName);
        setUUIDForIssues(VolumeGroupClass, mgr, logger);
        VolumeGroupClass.getName();
        VolumeGroupClass.approve();
        VolumeGroupClass.createClassification(PubYearVolumeGroupID, "PubYearVolumeGroup");
        var PubYearVolumeGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearVolumeGroupID);
        PubYearVolumeGroupClass.setName(PubYearVolumeGroupName);
        setUUIDForIssues(PubYearVolumeGroupClass, mgr, logger);
        PubYearVolumeGroupClass.getName();
        PubYearVolumeGroupClass.approve();
        node.createClassificationProductLink(PubYearVolumeGroupClass, PubYearVolumeLink);
    }
    node.getValue("GroupIssueID").setSimpleValue(PubYearVolumeGroupID);
}
function updateMIClassification(node, mgr) {
    var IssueToIssueNumber = node.getValue("IssueToIssueNumber").getSimpleValue();
    var JournalGroupCode = node.getValue("JournalGroupCode").getSimpleValue();
    var ProductPublicationYear = node.getValue("ProductPublicationYear").getSimpleValue();
    var IssueVolumeNumber = node.getValue("IssueVolumeNumber").getSimpleValue();
    var IssueFromIssueNumber = node.getValue("IssueFromIssueNumber").getSimpleValue();
    var JournalGroupIndex = node.getParent().getParent().getParent().getParent().getParent();
    var JournalGroupIndexID = node.getParent().getParent().getParent().getParent().getParent().getID();
    var JournalGroup = node.getParent().getParent().getParent().getParent();
    var JournalGroupIndexName = node.getParent().getParent().getParent().getParent().getParent().getName();
    var JournalGroupName = node.getParent().getParent().getParent().getParent().getName();
    var JournalGroupID = "C_" + JournalGroupCode;
    var JournalGroupIndexID = "C_" + JournalGroupIndexID;
    var JournalGroupClass = mgr.getClassificationHome().getClassificationByID(JournalGroupID);
    var JournalGroupIndexClass = mgr.getClassificationHome().getClassificationByID(JournalGroupIndexID);
    var JournalGroupHierarchyClass = mgr.getClassificationHome().getClassificationByID("JournalGroupHierarchy");
    var PubYearVolumeGroupID = JournalGroupCode + "_" + ProductPublicationYear + "_" + IssueVolumeNumber + "_MG_" + IssueFromIssueNumber + "_" + IssueToIssueNumber;
    var PubYearVolumeGroupName = JournalGroupCode + "-" + ProductPublicationYear + "-Volume" + " " + IssueVolumeNumber + "-MG-" + IssueFromIssueNumber + "-" + IssueToIssueNumber;
    var PubYearVolumeGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearVolumeGroupID);
    var PubYearVolumeLink = mgr.getHome(com.stibo.core.domain.classificationproductlinktype.ClassificationProductLinkTypeHome).getLinkTypeByID("JournalGroupIssueRef");


    var PubYearGroupID = JournalGroupCode + "_" + ProductPublicationYear;
    var PubYearGroupName = JournalGroupCode + "-" + ProductPublicationYear;
    var PubYearGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearGroupID);
    var VolumeGroupID = JournalGroupCode + "_" + ProductPublicationYear + "_" + IssueVolumeNumber;
    var VolumeGroupName = JournalGroupCode + "-" + ProductPublicationYear + "-Volume" + " " + IssueVolumeNumber;
    var VolumeGroupClass = mgr.getClassificationHome().getClassificationByID(VolumeGroupID);

    if (PubYearVolumeGroupClass != null) {
        log.info("PubYearVolumeGroup exist");
        try {
            node.createClassificationProductLink(PubYearVolumeGroupClass, PubYearVolumeLink);
        } catch (e) {
            log.info("Link for: " + PubYearVolumeGroupClass + " already exist");
        }
    } else if (VolumeGroupClass != null) {
        log.info("JournalGroupClass exist");
        VolumeGroupClass.createClassification(PubYearVolumeGroupID, "PubYearVolumeGroup");
        var PubYearVolumeGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearVolumeGroupID);
        PubYearVolumeGroupClass.setName(PubYearVolumeGroupName);
        setUUIDForIssues(PubYearVolumeGroupClass, mgr, logger);
        PubYearVolumeGroupClass.getName();
        PubYearVolumeGroupClass.approve();
        node.createClassificationProductLink(PubYearVolumeGroupClass, PubYearVolumeLink);
    } else if (PubYearGroupClass != null) {
        log.info("PubYearGroupClass exist");
        PubYearGroupClass.createClassification(VolumeGroupID, "VolumeGroup");
        var VolumeGroupClass = mgr.getClassificationHome().getClassificationByID(VolumeGroupID);
        VolumeGroupClass.setName(VolumeGroupName);
        setUUIDForIssues(VolumeGroupClass, mgr, logger);
        VolumeGroupClass.getName();
        VolumeGroupClass.approve();
        VolumeGroupClass.createClassification(PubYearVolumeGroupID, "PubYearVolumeGroup");
        var PubYearVolumeGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearVolumeGroupID);
        PubYearVolumeGroupClass.setName(PubYearVolumeGroupName);
        setUUIDForIssues(PubYearVolumeGroupClass, mgr, logger);
        PubYearVolumeGroupClass.getName();
        PubYearVolumeGroupClass.approve();
        node.createClassificationProductLink(PubYearVolumeGroupClass, PubYearVolumeLink);
    } else if (JournalGroupClass != null) {
        log.info("JournalGroupClass exist");
        JournalGroupClass.createClassification(PubYearGroupID, "PubYearGroup");
        var PubYearGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearGroupID);
        PubYearGroupClass.setName(PubYearGroupName);
        setUUIDForIssues(PubYearGroupClass, mgr, logger);
        PubYearGroupClass.getName();
        PubYearGroupClass.approve();
        PubYearGroupClass.createClassification(VolumeGroupID, "VolumeGroup");
        var VolumeGroupClass = mgr.getClassificationHome().getClassificationByID(VolumeGroupID);
        VolumeGroupClass.setName(VolumeGroupName);
        setUUIDForIssues(VolumeGroupClass, mgr, logger);
        VolumeGroupClass.getName();
        VolumeGroupClass.approve();
        VolumeGroupClass.createClassification(PubYearVolumeGroupID, "PubYearVolumeGroup");
        var PubYearVolumeGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearVolumeGroupID);
        PubYearVolumeGroupClass.setName(PubYearVolumeGroupName);
        setUUIDForIssues(PubYearVolumeGroupClass, mgr, logger);
        PubYearVolumeGroupClass.getName();
        PubYearVolumeGroupClass.approve();
        node.createClassificationProductLink(PubYearVolumeGroupClass, PubYearVolumeLink);
    } else if (JournalGroupIndexClass != null) {
        log.info("JournalGroupIndexClass exist");
        JournalGroupIndexClass.createClassification(JournalGroupID, "JournalGroup");
        var JournalGroupClass = mgr.getClassificationHome().getClassificationByID(JournalGroupID);
        JournalGroupClass.setName(JournalGroupName);
        JournalGroupClass.approve();
        JournalGroupClass.createClassification(PubYearGroupID, "PubYearGroup");
        var PubYearGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearGroupID);
        PubYearGroupClass.setName(PubYearGroupName);
        setUUIDForIssues(PubYearGroupClass, mgr, logger);
        PubYearGroupClass.getName();
        PubYearGroupClass.approve();
        PubYearGroupClass.createClassification(VolumeGroupID, "VolumeGroup");
        var VolumeGroupClass = mgr.getClassificationHome().getClassificationByID(VolumeGroupID);
        VolumeGroupClass.setName(VolumeGroupName);
        setUUIDForIssues(VolumeGroupClass, mgr, logger);
        VolumeGroupClass.getName();
        VolumeGroupClass.approve();
        VolumeGroupClass.createClassification(PubYearVolumeGroupID, "PubYearVolumeGroup");
        var PubYearVolumeGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearVolumeGroupID);
        PubYearVolumeGroupClass.setName(PubYearVolumeGroupName);
        setUUIDForIssues(PubYearVolumeGroupClass, mgr, logger);
        PubYearVolumeGroupClass.getName();
        PubYearVolumeGroupClass.approve();
        node.createClassificationProductLink(PubYearVolumeGroupClass, PubYearVolumeLink);
    } else {
        log.info("Journal root exist");
        JournalGroupHierarchyClass.createClassification(JournalGroupIndexID, "JournalGroupIndex");
        var JournalGroupIndexClass = mgr.getClassificationHome().getClassificationByID(JournalGroupIndexID);
        JournalGroupIndexClass.setName(JournalGroupIndexName);
        JournalGroupIndexClass.approve();
        JournalGroupIndexClass.createClassification(JournalGroupID, "JournalGroup");
        var JournalGroupClass = mgr.getClassificationHome().getClassificationByID(JournalGroupID);
        JournalGroupClass.setName(JournalGroupName);
        JournalGroupClass.approve();
        JournalGroupClass.createClassification(PubYearGroupID, "PubYearGroup");
        var PubYearGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearGroupID);
        PubYearGroupClass.setName(PubYearGroupName);
        setUUIDForIssues(PubYearGroupClass, mgr, logger);
        PubYearGroupClass.getName();
        PubYearGroupClass.approve();
        PubYearGroupClass.createClassification(VolumeGroupID, "VolumeGroup");
        var VolumeGroupClass = mgr.getClassificationHome().getClassificationByID(VolumeGroupID);
        VolumeGroupClass.setName(VolumeGroupName);
        setUUIDForIssues(VolumeGroupClass, mgr, logger);
        VolumeGroupClass.getName();
        VolumeGroupClass.approve();
        VolumeGroupClass.createClassification(PubYearVolumeGroupID, "PubYearVolumeGroup");
        var PubYearVolumeGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearVolumeGroupID);
        PubYearVolumeGroupClass.setName(PubYearVolumeGroupName);
        setUUIDForIssues(PubYearVolumeGroupClass, mgr, logger);
        PubYearVolumeGroupClass.getName();
        PubYearVolumeGroupClass.approve();
        node.createClassificationProductLink(PubYearVolumeGroupClass, PubYearVolumeLink);
    }
    node.getValue("GroupIssueID").setSimpleValue(PubYearVolumeGroupID);
}
function updateSUPIClassification(node, mgr) {
    var IssueSupplementNo = node.getValue("IssueSupplementNo").getSimpleValue();
    var JournalGroupCode = node.getValue("JournalGroupCode").getSimpleValue();
    var ProductPublicationYear = node.getValue("ProductPublicationYear").getSimpleValue();
    var IssueVolumeNumber = node.getValue("IssueVolumeNumber").getSimpleValue();
    var IssueFromIssueNumber = node.getValue("IssueFromIssueNumber").getSimpleValue();
    var JournalGroupIndex = node.getParent().getParent().getParent().getParent().getParent();
    var JournalGroupIndexID = node.getParent().getParent().getParent().getParent().getParent().getID();
    var JournalGroup = node.getParent().getParent().getParent().getParent();
    var JournalGroupIndexName = node.getParent().getParent().getParent().getParent().getParent().getName();
    var JournalGroupName = node.getParent().getParent().getParent().getParent().getName();
    var JournalGroupID = "C_" + JournalGroupCode;
    var JournalGroupIndexID = "C_" + JournalGroupIndexID;
    var JournalGroupClass = mgr.getClassificationHome().getClassificationByID(JournalGroupID);
    var JournalGroupIndexClass = mgr.getClassificationHome().getClassificationByID(JournalGroupIndexID);
    var JournalGroupHierarchyClass = mgr.getClassificationHome().getClassificationByID("JournalGroupHierarchy");
    var PubYearVolumeGroupID = JournalGroupCode + "_" + ProductPublicationYear + "_" + IssueVolumeNumber + "_SU_" + IssueSupplementNo;
    var PubYearVolumeGroupName = JournalGroupCode + "-" + ProductPublicationYear + "-Volume" + " " + IssueVolumeNumber + "-SU-" + IssueSupplementNo;
    var PubYearVolumeGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearVolumeGroupID);
    var PubYearVolumeLink = mgr.getHome(com.stibo.core.domain.classificationproductlinktype.ClassificationProductLinkTypeHome).getLinkTypeByID("JournalGroupIssueRef");

    var PubYearGroupID = JournalGroupCode + "_" + ProductPublicationYear;
    var PubYearGroupName = JournalGroupCode + "-" + ProductPublicationYear;
    var PubYearGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearGroupID);
    var VolumeGroupID = JournalGroupCode + "_" + ProductPublicationYear + "_" + IssueVolumeNumber;
    var VolumeGroupName = JournalGroupCode + "-" + ProductPublicationYear + "-Volume" + " " + IssueVolumeNumber;
    var VolumeGroupClass = mgr.getClassificationHome().getClassificationByID(VolumeGroupID);

    if (PubYearVolumeGroupClass != null) {
        log.info("PubYearVolumeGroup exist");
        try {
            node.createClassificationProductLink(PubYearVolumeGroupClass, PubYearVolumeLink);
        } catch (e) {
            log.info("Link for: " + PubYearVolumeGroupClass + " already exist");
        }
    } else if (VolumeGroupClass != null) {
        log.info("JournalGroupClass exist");
        VolumeGroupClass.createClassification(PubYearVolumeGroupID, "PubYearVolumeGroup");
        var PubYearVolumeGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearVolumeGroupID);
        PubYearVolumeGroupClass.setName(PubYearVolumeGroupName);
        setUUIDForIssues(PubYearVolumeGroupClass, mgr, logger);
        PubYearVolumeGroupClass.getName();
        PubYearVolumeGroupClass.approve();
        node.createClassificationProductLink(PubYearVolumeGroupClass, PubYearVolumeLink);
    } else if (PubYearGroupClass != null) {
        log.info("PubYearGroupClass exist");
        PubYearGroupClass.createClassification(VolumeGroupID, "VolumeGroup");
        var VolumeGroupClass = mgr.getClassificationHome().getClassificationByID(VolumeGroupID);
        VolumeGroupClass.setName(VolumeGroupName);
        setUUIDForIssues(VolumeGroupClass, mgr, logger);
        VolumeGroupClass.getName();
        VolumeGroupClass.approve();
        VolumeGroupClass.createClassification(PubYearVolumeGroupID, "PubYearVolumeGroup");
        var PubYearVolumeGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearVolumeGroupID);
        PubYearVolumeGroupClass.setName(PubYearVolumeGroupName);
        setUUIDForIssues(PubYearVolumeGroupClass, mgr, logger);
        PubYearVolumeGroupClass.getName();
        PubYearVolumeGroupClass.approve();
        node.createClassificationProductLink(PubYearVolumeGroupClass, PubYearVolumeLink);
    } else if (JournalGroupClass != null) {
        log.info("JournalGroupClass exist");
        JournalGroupClass.createClassification(PubYearGroupID, "PubYearGroup");
        var PubYearGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearGroupID);
        PubYearGroupClass.setName(PubYearGroupName);
        setUUIDForIssues(PubYearGroupClass, mgr, logger);
        PubYearGroupClass.getName();
        PubYearGroupClass.approve();
        PubYearGroupClass.createClassification(VolumeGroupID, "VolumeGroup");
        var VolumeGroupClass = mgr.getClassificationHome().getClassificationByID(VolumeGroupID);
        VolumeGroupClass.setName(VolumeGroupName);
        setUUIDForIssues(VolumeGroupClass, mgr, logger);
        VolumeGroupClass.getName();
        VolumeGroupClass.approve();
        VolumeGroupClass.createClassification(PubYearVolumeGroupID, "PubYearVolumeGroup");
        var PubYearVolumeGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearVolumeGroupID);
        PubYearVolumeGroupClass.setName(PubYearVolumeGroupName);
        setUUIDForIssues(PubYearVolumeGroupClass, mgr, logger);
        PubYearVolumeGroupClass.getName();
        PubYearVolumeGroupClass.approve();
        node.createClassificationProductLink(PubYearVolumeGroupClass, PubYearVolumeLink);
    } else if (JournalGroupIndexClass != null) {
        log.info("JournalGroupIndexClass exist");
        JournalGroupIndexClass.createClassification(JournalGroupID, "JournalGroup");
        var JournalGroupClass = mgr.getClassificationHome().getClassificationByID(JournalGroupID);
        JournalGroupClass.setName(JournalGroupName);
        JournalGroupClass.approve();
        JournalGroupClass.createClassification(PubYearGroupID, "PubYearGroup");
        var PubYearGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearGroupID);
        PubYearGroupClass.setName(PubYearGroupName);
        setUUIDForIssues(PubYearGroupClass, mgr, logger);
        PubYearGroupClass.getName();
        PubYearGroupClass.approve();
        PubYearGroupClass.createClassification(VolumeGroupID, "VolumeGroup");
        var VolumeGroupClass = mgr.getClassificationHome().getClassificationByID(VolumeGroupID);
        VolumeGroupClass.setName(VolumeGroupName);
        setUUIDForIssues(VolumeGroupClass, mgr, logger);
        VolumeGroupClass.getName();
        VolumeGroupClass.approve();
        VolumeGroupClass.createClassification(PubYearVolumeGroupID, "PubYearVolumeGroup");
        var PubYearVolumeGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearVolumeGroupID);
        PubYearVolumeGroupClass.setName(PubYearVolumeGroupName);
        setUUIDForIssues(PubYearVolumeGroupClass, mgr, logger);
        PubYearVolumeGroupClass.getName();
        PubYearVolumeGroupClass.approve();
        node.createClassificationProductLink(PubYearVolumeGroupClass, PubYearVolumeLink);
    } else {
        log.info("Journal root exist");
        JournalGroupHierarchyClass.createClassification(JournalGroupIndexID, "JournalGroupIndex");
        var JournalGroupIndexClass = mgr.getClassificationHome().getClassificationByID(JournalGroupIndexID);
        JournalGroupIndexClass.setName(JournalGroupIndexName);
        JournalGroupIndexClass.approve();
        JournalGroupIndexClass.createClassification(JournalGroupID, "JournalGroup");
        var JournalGroupClass = mgr.getClassificationHome().getClassificationByID(JournalGroupID);
        JournalGroupClass.setName(JournalGroupName);
        JournalGroupClass.approve();
        JournalGroupClass.createClassification(PubYearGroupID, "PubYearGroup");
        var PubYearGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearGroupID);
        PubYearGroupClass.setName(PubYearGroupName);
        setUUIDForIssues(PubYearGroupClass, mgr, logger);
        PubYearGroupClass.getName();
        PubYearGroupClass.approve();
        PubYearGroupClass.createClassification(VolumeGroupID, "VolumeGroup");
        var VolumeGroupClass = mgr.getClassificationHome().getClassificationByID(VolumeGroupID);
        VolumeGroupClass.setName(VolumeGroupName);
        setUUIDForIssues(VolumeGroupClass, mgr, logger);
        VolumeGroupClass.getName();
        VolumeGroupClass.approve();
        VolumeGroupClass.createClassification(PubYearVolumeGroupID, "PubYearVolumeGroup");
        var PubYearVolumeGroupClass = mgr.getClassificationHome().getClassificationByID(PubYearVolumeGroupID);
        PubYearVolumeGroupClass.setName(PubYearVolumeGroupName);
        setUUIDForIssues(PubYearVolumeGroupClass, mgr, logger);
        PubYearVolumeGroupClass.getName();
        PubYearVolumeGroupClass.approve();
        node.createClassificationProductLink(PubYearVolumeGroupClass, PubYearVolumeLink);
    }

    node.getValue("GroupIssueID").setSimpleValue(PubYearVolumeGroupID);
}

/**
 * Update print, digital and common attribute values from Print/Digital issues object to group issue classification object
 * */

function copyValuesToClass(sourceObject, groupIssueOIEP, groupIssueOIEPkafka, manager, logger) {
    var objectTypeID = sourceObject.getObjectType().getID();
    var prodClassLink = getProductClassificationLinks(sourceObject, "JournalGroupIssueRef", manager, logger);
    var linkedClassificationIssues = [];
    if (prodClassLink) {
        var subProducts = queryForSingleObj(prodClassLink, linkedClassificationIssues);

        if (objectTypeID == "JournalPrintIssues") {
            copyValuesBasedOnAttributeGroup(sourceObject, prodClassLink, "AG_Group_Issue_Print_Attributes", manager, logger);
            prodClassLink.getValue("P_ID").setSimpleValue(sourceObject.getID());
            //prodClassLink.getValue("P_JournalMediaID").setSimpleValue(sourceObject.getParent().getParent().getParent().getID());
            //prodClassLink.getValue("P_PubYearID").setSimpleValue(sourceObject.getParent().getParent().getID());
            // prodClassLink.getValue("P_VolumeID").setSimpleValue(sourceObject.getParent().getID());
        }
        else if (objectTypeID == "JournalDigitalIssues") {
            copyValuesBasedOnAttributeGroup(sourceObject, prodClassLink, "AG_Group_Issue_Digital_Attributes", manager, logger);
            prodClassLink.getValue("D_ID").setSimpleValue(sourceObject.getID());
            //prodClassLink.getValue("D_JournalMediaID").setSimpleValue(sourceObject.getParent().getParent().getParent().getID());
            //prodClassLink.getValue("D_PubYearID").setSimpleValue(sourceObject.getParent().getParent().getID());
            //prodClassLink.getValue("D_VolumeID").setSimpleValue(sourceObject.getParent().getID());
        }
        copyValuesBasedOnAttributeGroup(sourceObject, prodClassLink, "AG_Group_Issue_Common_Attributes", manager, logger);
        prodClassLink.getValue("C_Name").setSimpleValue(sourceObject.getName());
        prodClassLink.getValue("C_JournalID").setSimpleValue(sourceObject.getParent().getParent().getParent().getParent().getID());

        prodClassLink.getValue("C_PubYearID").setSimpleValue(prodClassLink.getParent().getParent().getValue("C_GroupIssue_UUID").getSimpleValue());
        prodClassLink.getValue("C_VolumeID").setSimpleValue(prodClassLink.getParent().getValue("C_GroupIssue_UUID").getSimpleValue());

        var messageStatus = prodClassLink.getValue("C_MessageStatus").getSimpleValue();
	   var noRepublish = "N";                                                                               //HAR01

        if (messageStatus) {
        	if (linkedClassificationIssues){
            if (subProducts.length == 1) {
                var status1 = linkedClassificationIssues[0].getValue("IssueState").getSimpleValue();
                if (status1 == "Draft" || status1 == "Enriched") {
                    prodClassLink.getValue("C_MessageStatus").setSimpleValue("CREATE");
                    if (status1 == "Draft") {                                                                 //HAR01
					noRepublish = "Y";                                                                   //HAR01
				 }                                                                                        //HAR01
             //  }                                                                                            //HAR01
			    }else {                                                                                    //HAR01
					prodClassLink.getValue("C_MessageStatus").setSimpleValue("UPDATE");                  //HAR01
				}                                                                                         //HAR01			 
            } else if (subProducts.length == 2) {
                var status1 = linkedClassificationIssues[0].getValue("IssueState").getSimpleValue();
                var status2 = linkedClassificationIssues[1].getValue("IssueState").getSimpleValue();
                if (status1 == "Draft" && status2 == "Draft") {                                               //HAR01
					noRepublish = "Y";                                                                   //HAR01
				}                                                                                         //HAR01
                
                if ((status1 == "Draft" && status2 == "Draft") ||
                 // (status1 == "Enriched" && status2 == "Enriched")) {                                           //HAR01
                    (status1 == "Draft" && status2 == "Enriched") ||                                          //HAR01             
					(status1 == "Enriched" && status2 == "Draft")) {  		                             //HAR01
                    prodClassLink.getValue("C_MessageStatus").setSimpleValue("CREATE");
                }else {
                    prodClassLink.getValue("C_MessageStatus").setSimpleValue("UPDATE");
                }
            }
          }
        }
        else { 
        	prodClassLink.getValue("C_MessageStatus").setSimpleValue("CREATE"); 
        	noRepublish = "Y";                                                                                  //HAR01
        	}

        if (isInState(sourceObject, "VolumeIssueCreationWF", "State-11", manager, logger)) {
            approveNode(prodClassLink, manager, logger);
        }
	   if (noRepublish != "Y"){                                                                             //HAR01
		  groupIssueOIEP.republish(prodClassLink);
		  groupIssueOIEPkafka.republish(prodClassLink);
	   }                                                                                                    //HAR01
        noRepublish = "N";		                                                                           //HAR01
    }
}

function queryForSingleObj(parent, linkedClassificationIssues){
	var singleResult = [];
	var conditions = com.stibo.query.condition.Conditions;
	var queryHome = parent.getManager().getHome(com.stibo.query.home.QueryHome);
	var querySpecification = queryHome.queryFor(com.stibo.core.domain.Product).where(
		conditions.hierarchy().simpleBelow(parent));
	var query = querySpecification.execute();
		query.forEach(function(qnode) {
linkedClassificationIssues.push(qnode)
		singleResult.push(qnode);
		
		return true;
	});
	return linkedClassificationIssues;
}

function copyValuesBasedOnAttributeGroup(sourceObject, targetObject, attributeGroupID, manager, logger) {
    var attributeSet = manager.getAttributeGroupHome().getAttributeGroupByID(attributeGroupID).getAttributes();

    var iterator = attributeSet.iterator();
    while (iterator.hasNext()) {
        var attribute = iterator.next();

        var targetAttributeID = attribute.getID();

        var lookUpTableHome = manager.getHome(com.stibo.lookuptable.domain.LookupTableHome);
        var sourceAttributeID = lookUpTableHome.getLookupTableValue("GroupIssueAttributesTable", attribute.getID());

        var sourceObjectValue = sourceObject.getValue(sourceAttributeID).getSimpleValue();

        if (sourceObjectValue) {
            //logger.info("sourceAttributeID: " + sourceAttributeID + " targetAttributeID: " + targetAttributeID);
            targetObject.getValue(targetAttributeID).setSimpleValue(sourceObjectValue);
        }
    }
}

function getProductClassificationLinks(sourceObject, classificationProdLink, manager, logger) {
    var classProdLinkTypeId = manager.getHome(com.stibo.core.domain.classificationproductlinktype.ClassificationProductLinkTypeHome).getLinkTypeByID(classificationProdLink);

    var classProdLinkObjects = sourceObject.queryClassificationProductLinks(classProdLinkTypeId).asList(100).iterator();
    while (classProdLinkObjects.hasNext()) {
        var classProdLinkObject = classProdLinkObjects.next().getClassification();
        //logger.info("classProdLinkObject: " + classProdLinkObject);
    }
    return classProdLinkObject;
}

function isInState(sourceObject, workflowID, stateID, manager, logger) {
    var isInStateFlag = false;
    isInStateFlag = sourceObject.isInState(workflowID, stateID);
    return isInStateFlag;
}

function approveNode(sourceObject, manager, logger) {
    try {
        sourceObject.approve();
    }
    catch (ex) {
        if (ex.javaException instanceof com.stibo.core.domain.approve.ApproveBulkValidationException ||
            ex.javaException instanceof com.stibo.core.domain.synchronize.exception.SynchronizeException) {
            logger.severe("Could not approve node: " + sourceObject.getID() + " ! Exception: " + ex.toString());
        }
        else {
            var message = " approveNodde: Unknown Error: error.javaException: " + ex.javaException + " Error: " + ex;
            throw (ex);
        }
    }
}

function setUUIDForIssues(sourceObject, manager, logger) {
    var groupIssueUUID = sourceObject.getValue("C_GroupIssue_UUID").getSimpleValue();
    var isObjectExist = checkKeyExist("GroupIssueKey", groupIssueUUID, manager, logger);

    if (!isObjectExist) {
        var id = generateUUID();
        sourceObject.getValue("C_GroupIssue_UUID").setSimpleValue(id);
    }
}

function generateUUID() {
    var newUUID = java.util.UUID.randomUUID().toString();
    return newUUID;
}

function checkKeyExist(keyID, keyAttributeID, manager, logger) {
    var isObjectExist = false;
    isObjectExist = manager.getNodeHome().getObjectByKey(keyID, keyAttributeID);

    if (isObjectExist) {
        isObjectExist = true;
    }

    return isObjectExist;
}

function queryForObjTypeBelowWithValue(searchRoot,attributeID,attributeValue){
	var manager = searchRoot.getManager();
	var attribute = manager.getAttributeHome().getAttributeByID(attributeID);
	var result = null;	
	var conditions = com.stibo.query.condition.Conditions;
	var queryHome = manager.getHome(com.stibo.query.home.QueryHome);
	var querySpecification = queryHome.queryFor(com.stibo.core.domain.Product).where(
	     conditions.valueOf(attribute).eq(attributeValue)
	     .and(conditions.hierarchy().simpleBelow(searchRoot))
	);
	
	var query = querySpecification.execute();
	query.forEach(function(qNode) {
		
		result = qNode;
		
	    return true;
	});
	return result;
}

/*===== business library exports - this part will not be imported to STEP =====*/
exports.setGroupIssueState = setGroupIssueState
exports.createAndUpdateGroupIssues = createAndUpdateGroupIssues
exports.updateSIClassification = updateSIClassification
exports.updateMIClassification = updateMIClassification
exports.updateSUPIClassification = updateSUPIClassification
exports.copyValuesToClass = copyValuesToClass
exports.queryForSingleObj = queryForSingleObj
exports.copyValuesBasedOnAttributeGroup = copyValuesBasedOnAttributeGroup
exports.getProductClassificationLinks = getProductClassificationLinks
exports.isInState = isInState
exports.approveNode = approveNode
exports.setUUIDForIssues = setUUIDForIssues
exports.generateUUID = generateUUID
exports.checkKeyExist = checkKeyExist
exports.queryForObjTypeBelowWithValue = queryForObjTypeBelowWithValue