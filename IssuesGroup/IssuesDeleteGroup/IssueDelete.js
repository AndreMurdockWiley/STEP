/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "IssueDelete",
  "type" : "BusinessAction",
  "setupGroups" : [ "IssuesDeleteGroup" ],
  "name" : "Issue Delete",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "IssueFunctions",
    "libraryAlias" : "issueLibrary"
  } ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "WebUiContextBind",
    "alias" : "UI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "mgr",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "groupIssueOIEP",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Group_Issues_Data_Extract",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "groupIssueOIEPkafka",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Group_Issues_Data_Extract_Kafka",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (UI,mgr,groupIssueOIEP,groupIssueOIEPkafka,issueLibrary) {
/*----------------------------M-O-D-I-F-I-C-A-T-I-O-N----------L-O-G---------------------------------------------------
===================================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
===================================================================================================================================================================================
1Dec2024    Venkata Siva Harish Mattaparthi    HAR01     RPDM-8658    Fix the logic to set C_IssueDeletedDate. Also Republish to group issue OIEPs when Draft issue selected
                                                                      to delete(when Draft + Enriched issues exist under the group issue).

===================================================================================================================================================================================
*/

var selectedNodes = UI.getSelection();
var issueOK = true;
var severity = "ERROR";
var headline = "";
var body = "The issue has already been sent to SAP";
var linkedClassificationIssues = new java.util.HashSet();
var selectedUINodes = new java.util.HashSet();
var linkedClassificationIssues = new java.util.HashSet();
var classificationReferences = new java.util.HashSet();
var currentSelection = selectedNodes.iterator();
var unmatchedId = null;
var currentDate = getCurrentDate();

while (currentSelection.hasNext()) {
    var selectedNode = currentSelection.next();
    if (issueLibrary.issueDeleteCheck(selectedNode)) {
        selectedUINodes.add(selectedNode.getID());
    }
}


// Log the selectedUINodes
log.info("selectedUINodes: " + selectedUINodes);


for (var i = 0; i < selectedNodes.size(); i++) {
    //	var node = mgr.getProductHome().getProductByID(selectedNodes[i]);
    if (issueLibrary.issueDeleteCheck(selectedNodes.get(i))) {
        var node = selectedNodes.get(i);
        var IssueState = node.getValue("IssueState").getSimpleValue();
        logger.info(node.getID() + "  :  " + IssueState);
        if (IssueState) {
            var objectTypeID = node.getObjectType().getID();
            var prodClassLink = getProductClassificationLinks(node, "JournalGroupIssueRef", mgr, logger);
            if (prodClassLink) {
                // classificationReferences.add(prodClassLink);
				var commonIssueState = prodClassLink.getValue("C_IssueState").getSimpleValue();                                         //HAR01
                var subProducts = queryForSingleObj(prodClassLink, linkedClassificationIssues);
                if (IssueState == "Draft") {
                    if (subProducts.length == 1) {
                        if (objectTypeID == "JournalPrintIssues") {
                            deleteValuesBasedOnAttributeGroup(node, prodClassLink, "AG_Group_Issue_Print_Attributes", mgr, logger);
                        } else if (objectTypeID == "JournalDigitalIssues") {
                            deleteValuesBasedOnAttributeGroup(node, prodClassLink, "AG_Group_Issue_Digital_Attributes", mgr, logger);
                        }
                        prodClassLink.getValue("C_MessageStatus").setSimpleValue("DELETE");
                        prodClassLink.getValue("C_LastUpdated").setSimpleValue(currentDate); //added for RPDM-10539
						
//						if (commonIssueState == "Enriched"){                                                                          //HAR01
							prodClassLink.getValue("C_IssueDeletedDate").setSimpleValue(currentDate);                                //HAR01
//						}                                                                                                             //HAR01						
                        approveNode(prodClassLink, mgr, logger);
                        issueLibrary.deleteIssue(node);
                    }
                    if (subProducts.length == 2) {
                    	if (objectTypeID == "JournalPrintIssues") {
                            deleteValuesBasedOnAttributeGroup(node, prodClassLink, "AG_Group_Issue_Print_Attributes", mgr, logger);
                        } else if (objectTypeID == "JournalDigitalIssues") {
                            deleteValuesBasedOnAttributeGroup(node, prodClassLink, "AG_Group_Issue_Digital_Attributes", mgr, logger);
                        }
                        linkedClassificationIssues.forEach(function(id) {
                            if (id != node.getID()) {
                                unmatchedId = id;

                            }
                        });
                        var unmatchedNodeIssueState = mgr.getProductHome().getProductByID(unmatchedId).getValue("IssueState").getSimpleValue();
                        if (selectedUINodes.contains(unmatchedId) && unmatchedNodeIssueState == "Draft") {
                            log.info("inside DRAFT LENGTH 2 BOTH DRAFT SELECTED TO DELETE")
                            prodClassLink.getValue("C_MessageStatus").setSimpleValue("DELETE");
                            approveNode(prodClassLink, mgr, logger);
                            issueLibrary.deleteIssue(node);
                        } else if ((!selectedUINodes.contains(unmatchedId)) && unmatchedNodeIssueState == "Enriched") {
                            log.info("inside DRAFT LENGTH 2(ENRICHED+DELETE) ONLY DRAFT SELECTED TO DELETE -   STATUS CHANGE")
                            prodClassLink.getValue("C_MessageStatus").setSimpleValue("UPDATE")
                            prodClassLink.getValue("C_LastUpdated").setSimpleValue(currentDate); //added for RPDM-10539
                            approveNode(prodClassLink, mgr, logger);
                            groupIssueOIEP.republish(prodClassLink);                                                                     //HAR01
                            groupIssueOIEPkafka.republish(prodClassLink);                                                                //HAR01
                            issueLibrary.deleteIssue(node);
                        } else if ((!selectedUINodes.contains(unmatchedId)) && unmatchedNodeIssueState == "Draft") {
                            log.info("inside DRAFT LENGTH 2 ONLY ONE DRAFT SELECTED TO DELETE -   STATUS CHANGE")
                            prodClassLink.getValue("C_MessageStatus").setSimpleValue("DELETE")
                            approveNode(prodClassLink, mgr, logger);
                            issueLibrary.deleteIssue(node);
                        }

                    }
                }
                if (IssueState == "Enriched") {
                    if (subProducts.length == 1) {
                        if (objectTypeID == "JournalPrintIssues") {
                            deleteValuesBasedOnAttributeGroup(node, prodClassLink, "AG_Group_Issue_Print_Attributes", mgr, logger);
                        } else if (objectTypeID == "JournalDigitalIssues") {
                            deleteValuesBasedOnAttributeGroup(node, prodClassLink, "AG_Group_Issue_Digital_Attributes", mgr, logger);
                        }

                        prodClassLink.getValue("C_IssueDeletedDate").setSimpleValue(currentDate);
                        prodClassLink.getValue("C_MessageStatus").setSimpleValue("DELETE")
                        prodClassLink.getValue("C_LastUpdated").setSimpleValue(currentDate); //added for RPDM-10539
                        approveNode(prodClassLink, mgr, logger);
                        groupIssueOIEP.republish(prodClassLink);
                        groupIssueOIEPkafka.republish(prodClassLink);
                        issueLibrary.deleteIssue(node);

                    }
                    if (subProducts.length == 2) {
                        // Find the unmatched ID
                        linkedClassificationIssues.forEach(function(id) {
                            if (id != node.getID()) {
                                unmatchedId = id;
                            }
                        });
                        var unmatchedNodeIssueState = mgr.getProductHome().getProductByID(unmatchedId).getValue("IssueState").getSimpleValue();
                        // Case: Sent to SAP
                        if (((!selectedUINodes.contains(unmatchedId)) && unmatchedNodeIssueState == "Sent to SAP") || (selectedUINodes.contains(unmatchedId) && unmatchedNodeIssueState == "Sent to SAP")) {
                            headline = "Issue " + node.getName() + " can't be deleted";
                            prodClassLink.getValue("C_MessageStatus").setSimpleValue("UPDATE");
                            prodClassLink.getValue("C_LastUpdated").setSimpleValue(currentDate); //added for RPDM-10539
                            approveNode(prodClassLink, mgr, logger);
                            groupIssueOIEP.republish(prodClassLink);
                            groupIssueOIEPkafka.republish(prodClassLink);
                            UI.showAlert(severity, headline, body);
                            break;
                        }
                        // Delete values based on the attribute group based on object type
                        if (objectTypeID == "JournalPrintIssues") {
                            deleteValuesBasedOnAttributeGroup(node, prodClassLink, "AG_Group_Issue_Print_Attributes", mgr, logger);
                        } else if (objectTypeID == "JournalDigitalIssues") {
                            deleteValuesBasedOnAttributeGroup(node, prodClassLink, "AG_Group_Issue_Digital_Attributes", mgr, logger);
                        }

                        // Case: Both nodes are selected and enriched
                        if (selectedUINodes.contains(unmatchedId) && unmatchedNodeIssueState == "Enriched") {

                            prodClassLink.getValue("C_IssueDeletedDate").setSimpleValue(currentDate);
                            prodClassLink.getValue("C_LastUpdated").setSimpleValue(currentDate); //added for RPDM-10539
                            prodClassLink.getValue("C_MessageStatus").setSimpleValue("DELETE");
                            groupIssueOIEP.republish(prodClassLink);
                            groupIssueOIEPkafka.republish(prodClassLink);
                            approveNode(prodClassLink, mgr, logger);
                            issueLibrary.deleteIssue(node);

                            // Case: Only one enriched node is selected
                        } else if (!selectedUINodes.contains(unmatchedId) && unmatchedNodeIssueState == "Enriched") {
                            prodClassLink.getValue("C_MessageStatus").setSimpleValue("UPDATE");
                            prodClassLink.getValue("C_LastUpdated").setSimpleValue(currentDate); //added for RPDM-10539
                            approveNode(prodClassLink, mgr, logger);
                            groupIssueOIEP.republish(prodClassLink);
                            groupIssueOIEPkafka.republish(prodClassLink);
                            issueLibrary.deleteIssue(node);

                            // Case: One Draft + One Enriched, only Enriched is selected
                        } else if (!selectedUINodes.contains(unmatchedId) && unmatchedNodeIssueState == "Draft") {
                            prodClassLink.getValue("C_MessageStatus").deleteCurrent();
                           // prodClassLink.getValue("C_IssueDeletedDate").setSimpleValue(currentDate);                                //HAR01
                            prodClassLink.getValue("C_MessageStatus").setSimpleValue("UPDATE");
                            prodClassLink.getValue("C_LastUpdated").setSimpleValue(currentDate); //added for RPDM-10539
                            approveNode(prodClassLink, mgr, logger);
                            groupIssueOIEP.republish(prodClassLink);
                            groupIssueOIEPkafka.republish(prodClassLink);
                            issueLibrary.deleteIssue(node);

                        }
                    }
                }
            }
            linkedClassificationIssues.clear();
        }
    } else {
            headline = "Issue " + selectedNodes.get(i).getName() + " can't be deleted";
            UI.showAlert(severity, headline, body);
        }
}

function queryForSingleObj(parent, linkedClassificationIssues) {
    var singleResult = [];
    var conditions = com.stibo.query.condition.Conditions;
    var queryHome = parent.getManager().getHome(com.stibo.query.home.QueryHome);
    var querySpecification = queryHome.queryFor(com.stibo.core.domain.Product).where(
        conditions.hierarchy().simpleBelow(parent));
    var query = querySpecification.execute();
    query.forEach(function(qnode) {
        log.info("SUBNODES : " + qnode)
        linkedClassificationIssues.add(qnode.getID())
        singleResult.push(qnode);

        return true;
    });
    log.info(singleResult + "  : SLEN : " + singleResult.length)
    return singleResult;
}

function deleteValuesBasedOnAttributeGroup(sourceObject, targetObject, attributeGroupID, mgr, logger) {
    var attributeSet = mgr.getAttributeGroupHome().getAttributeGroupByID(attributeGroupID).getAttributes();

    var iterator = attributeSet.iterator();
    while (iterator.hasNext()) {
        var attribute = iterator.next();

        var targetAttributeID = attribute.getID();
        targetObject.getValue(targetAttributeID).deleteCurrent();
    }
}

function getProductClassificationLinks(node, classificationProdLink, mgr, logger) {
    var classProdLinkTypeId = mgr.getHome(com.stibo.core.domain.classificationproductlinktype.ClassificationProductLinkTypeHome).getLinkTypeByID(classificationProdLink);

    var classProdLinkObjects = node.queryClassificationProductLinks(classProdLinkTypeId).asList(100).iterator();
    log.info(" Classification LEN :   " + node.queryClassificationProductLinks(classProdLinkTypeId).asList(100).size())
    while (classProdLinkObjects.hasNext()) {
        var classProdLinkObject = classProdLinkObjects.next().getClassification();
        logger.info("classProdLinkObject: " + classProdLinkObject);
    }
    return classProdLinkObject;
}

function approveNode(sourceObject, mgr, logger) {
    try {
        sourceObject.approve();
    } catch (ex) {
        if (ex.javaException instanceof com.stibo.core.domain.approve.ApproveBulkValidationException ||
            ex.javaException instanceof com.stibo.core.domain.synchronize.exception.SynchronizeException) {
            logger.severe("Could not approve node: " + sourceObject.getID() + " ! Exception: " + ex.toString());
        } else {
            var message = " approveNodde: Unknown Error: error.javaException: " + ex.javaException + " Error: " + ex;
            throw (ex);
        }
    }
}

function getCurrentDate() {
    var now = new Date();
    var dateTime = null;
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    if (month.toString().length == 1) {
        var month = '0' + month;
    }
    if (day.toString().length == 1) {
        var day = '0' + day;
    }
    if (hour.toString().length == 1) {
        var hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        var minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        var second = '0' + second;
    }

    dateTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;

    logger.info(dateTime)

    return dateTime;

}
}