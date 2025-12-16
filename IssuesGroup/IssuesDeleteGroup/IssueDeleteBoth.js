/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "IssueDeleteBoth",
  "type" : "BusinessAction",
  "setupGroups" : [ "IssuesDeleteGroup" ],
  "name" : "Issue Delete Both",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalDigitalIssues", "JournalPrintIssues" ],
  "allObjectTypesValid" : true,
  "runPrivileged" : true,
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
    "contract" : "ManagerBindContract",
    "alias" : "mgr",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "UI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "AttributeValidatedContextParameterStringBinding",
    "alias" : "replicateOtherMedia",
    "parameterClass" : "com.stibo.core.domain.businessrule.attributecontextparameter.AttributeValidatedContextParameter",
    "value" : "<AttributeValidatedContextParameter>\n  <Parameters>\n    <Parameter ID=\"Attribute\" Type=\"java.lang.String\">ReplicateOtherMedia</Parameter>\n    <Parameter ID=\"ID\" Type=\"java.lang.String\">Replicate Other Media</Parameter>\n  </Parameters>\n</AttributeValidatedContextParameter>",
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
exports.operation0 = function (mgr,NODE,LOG,UI,replicateOtherMedia,groupIssueOIEP,groupIssueOIEPkafka,issueLibrary) {
/*----------------------------M-O-D-I-F-I-C-A-T-I-O-N----------L-O-G---------------------------------------------------
==============================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
==============================================================================================================================================================================
1Dec2024    Venkata Siva Harish Mattaparthi    HAR01     RPDM-8658    Fix the logic to set C_IssueDeletedDate, C_MessageStatus. 
                                                                     Also add logic to republish to Group Issue OIEPs for scenarios that require it, and was missed earlier.
                                                                

==============================================================================================================================================================================
*/

var selectedNodes = UI.getSelection();
var selectedNodesVolume = selectedNodes.get(0).getParent();
var selectedNodesPubYear = selectedNodesVolume.getParent();
var selectedNodesMedia = selectedNodesPubYear.getParent();
var selectedNodesJounral = selectedNodes.get(0).getParent().getParent().getParent().getParent();
var altMediaJournalMedias = "";
var altMediaPubYears = "";
var altMediaVolumes = "";
var altMediaIssues = "";
var issueOK = true;
var severity = "ERROR";
var headline = "";
var body = "The issue has already been sent to SAP";
var error = false;
var compareJournalMediaCode = "";
var myJournalMediaCode = "";
var linkedClassificationIssues = new java.util.HashSet();
var selectedUINodes = new java.util.HashSet();
var currentSelection = selectedNodes.iterator();
var unmatchedId = null;
var currentDate = getCurrentDate();

for (var i = 0; i < selectedNodes.size(); i++) {
    if (issueLibrary.issueDeleteCheck(selectedNodes.get(i))) {
        //issueLibrary.deleteIssue(selectedNodes.get(i));
        error = false;
    } else {
        error = true;
        headline = "Issue " + selectedNodes.get(i).getName() + " can't be deleted";
        UI.showAlert(severity, headline, body);
        break;
    }

}

while (currentSelection.hasNext()) {
    var selectedNode = currentSelection.next();
    if (issueLibrary.issueDeleteCheck(selectedNode)) {
        selectedUINodes.add(selectedNode.getID());
    }
}

if (!error) {

    if (replicateOtherMedia == 'Y') {
        //asign all the journal medias
        altMediaJournalMedias = selectedNodesJounral.getChildren();
        //populate media code for the selected issue
        myJournalMediaCode = selectedNodesMedia.getValue("JournalMediaCode").getSimpleValue();

        //loop all the jorunal medias
        for (var j = 0; j < altMediaJournalMedias.size(); j++) {
            //populate journal media code for current journal media in the loop
            compareJournalMediaCode = altMediaJournalMedias.get(j).getValue("JournalMediaCode").getSimpleValue();

            //if it's the other media
            if (compareJournalMediaCode != myJournalMediaCode) {
                //obtain all the pubYears
                altMediaPubYears = altMediaJournalMedias.get(j).getChildren();


                //loop the pub years
                for (var k = 0; k < altMediaPubYears.size(); k++) {

                    //if the pub year is the same than our selected issue pub year
                    if (altMediaPubYears.get(k).getName() == selectedNodesPubYear.getName()) {
                        //obtain all the volumes
                        altMediaVolumes = altMediaPubYears.get(k).getChildren();

                        //loop the volumes
                        for (var l = 0; l < altMediaVolumes.size(); l++) {

                            //if the volume is the same than our selected issue volume
                            if (altMediaVolumes.get(l).getName() == selectedNodesVolume.getName()) {
                                //obtain all the selected issues
                                altMediaIssues = altMediaVolumes.get(l).getChildren();

                                //loop the issues
                                for (var m = 0; m < altMediaIssues.size(); m++) {

                                    //loop the selected issues
                                    for (var n = 0; n < selectedNodes.size(); n++) {

                                        //if the selected issue is the same than our issue
                                        if (selectedNodes.get(n).getName() == altMediaIssues.get(m).getName()) {            
                                            if (issueLibrary.issueDeleteCheck(altMediaIssues.get(m))) {
                                                var node = altMediaIssues.get(m)
                                                var IssueState = node.getValue("IssueState").getSimpleValue();
                                                //logger.info(IssueState);
                                                if (IssueState) {
                                                    var objectTypeID = node.getObjectType().getID();
                                                    var prodClassLink = getProductClassificationLinks(node, "JournalGroupIssueRef", mgr, logger);
                                                    if (prodClassLink) {
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
//												    if (commonIssueState == "Enriched"){                                                                           //HAR01
													   prodClassLink.getValue("C_IssueDeletedDate").setSimpleValue(currentDate);                                  //HAR01
//												    }                                                                                                              //HAR01
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
                                                                //Note that in this loop (replicate other media as Y), node represents the alternate media issue, and unmatched represents the selected media issue.//HAR01
                                                                //selectedUINodes represent the issues selected for delete on web ui, that passed the check(no jpcms issue id and no orig publication date). //HAR01
                                                                
                                                                // Case: Both media issues are selected and were in Draft State                                           //HAR01
                                                                if (selectedUINodes.contains(unmatchedId) && unmatchedNodeIssueState == "Draft") {
                                                                    prodClassLink.getValue("C_MessageStatus").setSimpleValue("DELETE");
                                                                    approveNode(prodClassLink, mgr, logger);
                                                                    issueLibrary.deleteIssue(node);
                                                                // Case: Enriched one is selected for delete and replicate other media(for Draft) is choosen as Y         //HAR01
                                                                } else if (selectedUINodes.contains(unmatchedId) && unmatchedNodeIssueState == "Enriched") {          //HAR01  
                                                                    prodClassLink.getValue("C_IssueDeletedDate").setSimpleValue(currentDate);                         //HAR01 
                                                                    prodClassLink.getValue("C_MessageStatus").setSimpleValue("DELETE");                               //HAR01 
                                                                    prodClassLink.getValue("C_LastUpdated").setSimpleValue(currentDate); //added for RPDM-10539     
                                                                    approveNode(prodClassLink, mgr, logger);                                                          //HAR01
                                                                    groupIssueOIEP.republish(prodClassLink);                                                          //HAR01
                                                                    groupIssueOIEPkafka.republish(prodClassLink);                                                     //HAR01
                                                                    issueLibrary.deleteIssue(node);                                                                   //HAR01
                                                                // Case: Enriched one is selected for delete, with replicate other media(Draft) as Y. But Enriched one did not pass the check(has jpcms issue id and orig publication date) //HAR01
                                                                } else if ((!selectedUINodes.contains(unmatchedId)) && unmatchedNodeIssueState == "Enriched") {
                                                                    prodClassLink.getValue("C_MessageStatus").setSimpleValue("UPDATE")
                                                                    prodClassLink.getValue("C_LastUpdated").setSimpleValue(currentDate); //added for RPDM-10539
                                                                    approveNode(prodClassLink, mgr, logger);
                                                                    groupIssueOIEP.republish(prodClassLink);                                                                //HAR01
                                                                    groupIssueOIEPkafka.republish(prodClassLink);                                                           //HAR01
                                                                    issueLibrary.deleteIssue(node);
                                                                // Case: Draft one is selected for delete, with replicate other media(Draft) as Y. But selected Draft one did not pass the check(has jpcms issue id and orig publication date) //HAR01
                                                                } else if ((!selectedUINodes.contains(unmatchedId)) && unmatchedNodeIssueState == "Draft") {
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
                                                                //Note that in this loop (replicate other media as Y), node represents the alternate media issue, and unmatched represents the selected media issue.//HAR01
                                                                //selectedUINodes represent the issues selected for delete on web ui, that passed the check(no jpcms issue id and no orig publication date). 
                                                                
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
                                                                    prodClassLink.getValue("C_MessageStatus").setSimpleValue("DELETE");
                                                                    prodClassLink.getValue("C_LastUpdated").setSimpleValue(currentDate); //added for RPDM-10539
                                                                    approveNode(prodClassLink, mgr, logger);
                                                                    groupIssueOIEP.republish(prodClassLink);
                                                                    groupIssueOIEPkafka.republish(prodClassLink);   
                                                                    issueLibrary.deleteIssue(node);

                                                                 // Case: Draft one is selected for delete and replicate other media(for Enriched) is choosen as Y         //HAR01
                                                                } else if (selectedUINodes.contains(unmatchedId) && unmatchedNodeIssueState == "Draft") {              //HAR01  
                                                                    prodClassLink.getValue("C_IssueDeletedDate").setSimpleValue(currentDate);                         //HAR01 
                                                                    prodClassLink.getValue("C_LastUpdated").setSimpleValue(currentDate); //added for RPDM-10539
                                                                    prodClassLink.getValue("C_MessageStatus").setSimpleValue("DELETE");                               //HAR01      
                                                                    approveNode(prodClassLink, mgr, logger);                                                          //HAR01
                                                                    groupIssueOIEP.republish(prodClassLink);                                                          //HAR01
                                                                    groupIssueOIEPkafka.republish(prodClassLink);                                                     //HAR01
                                                                    issueLibrary.deleteIssue(node);                                                                   //HAR01

                                                                 // Case: Enriched one is selected for delete, with replicate other media(Enriched) as Y. But Selected Enriched one did not pass the check(has jpcms issue id and orig publication date) //HAR01
                                                                } else if (!selectedUINodes.contains(unmatchedId) && unmatchedNodeIssueState == "Enriched") {
                                                                    prodClassLink.getValue("C_MessageStatus").setSimpleValue("UPDATE");
                                                                    prodClassLink.getValue("C_LastUpdated").setSimpleValue(currentDate); //added for RPDM-10539
                                                                    approveNode(prodClassLink, mgr, logger);
                                                                    groupIssueOIEP.republish(prodClassLink);
                                                                    groupIssueOIEPkafka.republish(prodClassLink);
                                                                    issueLibrary.deleteIssue(node);

                                                                  // Case: Draft one is selected for delete, with replicate other media(Enriched) as Y.But Draft one did not pass the check(has jpcms issue id and orig publication date) //HAR01
                                                                } else if (!selectedUINodes.contains(unmatchedId) && unmatchedNodeIssueState == "Draft") {
                                                                    prodClassLink.getValue("C_MessageStatus").deleteCurrent();
                                                                    //prodClassLink.getValue("C_IssueDeletedDate").setSimpleValue(currentDate);                            //HAR01
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
                                                headline = "Issue " + altMediaIssues.get(m).getName() + " can't be deleted";
                                                UI.showAlert(severity, headline, body);
                                            }
                                        }

                                    }

                                }

                            }
                        }
                    }
                }
            }
        }
    }

    //delete selected issues
    for (var o = 0; o < selectedNodes.size(); o++) {
        //	var node = mgr.getProductHome().getProductByID(selectedNodes[i]);
        var node = selectedNodes.get(o);
        var IssueState = node.getValue("IssueState").getSimpleValue();
        logger.info(node.getID() + "  :  " + IssueState);
        if (IssueState) {
            var objectTypeID = node.getObjectType().getID();
            var prodClassLink = getProductClassificationLinks(node, "JournalGroupIssueRef", mgr, logger);
            if (prodClassLink) {
			  var commonIssueState = prodClassLink.getValue("C_IssueState").getSimpleValue();                                           //HAR01
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
//						if (commonIssueState == "Enriched"){                                                                         //HAR01
							prodClassLink.getValue("C_IssueDeletedDate").setSimpleValue(currentDate);                               //HAR01
//						}                                                                                                            //HAR01
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
                            prodClassLink.getValue("C_MessageStatus").setSimpleValue("DELETE");
                            approveNode(prodClassLink, mgr, logger);
                            issueLibrary.deleteIssue(node);
                        } else if ((!selectedUINodes.contains(unmatchedId)) && unmatchedNodeIssueState == "Enriched") {
                            prodClassLink.getValue("C_MessageStatus").setSimpleValue("UPDATE")
                            prodClassLink.getValue("C_LastUpdated").setSimpleValue(currentDate); //added for RPDM-10539
                            approveNode(prodClassLink, mgr, logger);
                            groupIssueOIEP.republish(prodClassLink);                                                                    //HAR01
                            groupIssueOIEPkafka.republish(prodClassLink);                                                               //HAR01
                            issueLibrary.deleteIssue(node);
                        } else if ((!selectedUINodes.contains(unmatchedId)) && unmatchedNodeIssueState == "Draft") {
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
                        prodClassLink.getValue("C_LastUpdated").setSimpleValue(currentDate); //added for RPDM-10539
                        prodClassLink.getValue("C_MessageStatus").setSimpleValue("DELETE")
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
                            prodClassLink.getValue("C_MessageStatus").setSimpleValue("DELETE");
                            approveNode(prodClassLink, mgr, logger);
                            groupIssueOIEP.republish(prodClassLink);
                            groupIssueOIEPkafka.republish(prodClassLink);                         
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
                            //prodClassLink.getValue("C_IssueDeletedDate").setSimpleValue(currentDate);                            //HAR01
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
        }
        linkedClassificationIssues.clear();
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
    while (classProdLinkObjects.hasNext()) {
        var classProdLinkObject = classProdLinkObjects.next().getClassification();
        //logger.info("classProdLinkObject: " + classProdLinkObject);
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