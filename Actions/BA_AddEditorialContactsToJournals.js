/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_AddEditorialContactsToJournals",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "Add Editorial Contacts To Journals",
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
  "pluginId" : "JavaScriptBusinessActionWithBinds",
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
    "contract" : "WebUiContextBind",
    "alias" : "webUI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,manager,webUI) {
var currentObjType = node.getObjectType().getID();
var errorMsg = [];
if (currentObjType == "Journal") {
    var selectedObject = webUI.getSelectedSetOfNodes().toArray();
    var selectedObjectLength = selectedObject.length;
    if (selectedObjectLength > 1) {
        webUI.showAlert("Error", "Please select only one History object at a time.", "");
    } else if (selectedObjectLength == 1) {
        var editorialContactObj = selectedObject[0];
        var name = editorialContactObj.getName().split("- ")[1];

        var firstName = editorialContactObj.getValue("EditorialContactFirstName").getSimpleValue();
        var email = editorialContactObj.getValue("EditorialContactEmail").getSimpleValue();
        var status = editorialContactObj.getValue("EditorialContactStatus").getSimpleValue();

        log.info(editorialContactObj.getParent().getName())
        if (editorialContactObj.getObjectType().getID() == "EditorialContact") {
            if (editorialContactObj.getParent().getName() == "Comprehensive Editorial Evaluation Team Lead") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("CompEditorialEvaluationTeamLead");
                var msg = multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg)
                webUI.showAlert("Success", msg);
            }

            if (editorialContactObj.getParent().getName() == "Corporate Products Lead") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("CorporateProductsLead");
                var msg = multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg)
                webUI.showAlert("Success", msg);
            }
            if (editorialContactObj.getParent().getName() == "Editorial Office Coordinator") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("EditorialOfficeCoordinator");
                var msg = multiRefYes(editorialContactObj, editorialContactsRefType, errorMsg)


            }
            if (editorialContactObj.getParent().getName() == "In-house Editorial Assistant") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("In-houseEditorialAssistant");
                var msg = multiRefYes(editorialContactObj, editorialContactsRefType, errorMsg)
                webUI.showAlert("Success", msg);
            }

            if (editorialContactObj.getParent().getName() == "Marketing Manager") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("MarketingManager");
                var msg = multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg)

            }

            if (editorialContactObj.getParent().getName() == "Marketing Portfolio Lead") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("MarketingPortfolioLead");
                var msg = multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg)
                webUI.showAlert("Success", msg);
            }

            if (editorialContactObj.getParent().getName() == "Partner Publishing Director") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("PartnerPublishingDirector");
                var msg = multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg)
                webUI.showAlert("Success", msg);
            }

            if (editorialContactObj.getParent().getName() == "Partner Publishing Lead") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("PartnerPublishingLead");
                var msg = multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg)
                webUI.showAlert("Success", msg);
            }

            if (editorialContactObj.getParent().getName() == "Partner Publishing Manager") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("PartnerPublishingManager");
                var msg = multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg)
                webUI.showAlert("Success", msg);
            }

            if (editorialContactObj.getParent().getName() == "Partner Solutions Director") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("PartnerSolutionsDirector");
                var msg = multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg)
                webUI.showAlert("Success", msg);
            }

            if (editorialContactObj.getParent().getName() == "Peer Review Desk Lead") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("PeerReviewDeskLead");
                var msg = multiRefYes(editorialContactObj, editorialContactsRefType, errorMsg)
                webUI.showAlert("Success", msg);
            }

            if (editorialContactObj.getParent().getName() == "Peer Review Performance Director") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("PeerReviewPerformanceDirector");
                var msg = multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg)
                webUI.showAlert("Success", msg);
            }

            if (editorialContactObj.getParent().getName() == "Peer Review Performance Lead") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("PeerReviewPerformanceLead");
                var msg = multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg)
                webUI.showAlert("Success", msg);
            }

            if (editorialContactObj.getParent().getName() == "Peer Review Performance Manager") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("PeerReviewPerformanceManager");
                var msg = multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg)
                webUI.showAlert("Success", msg);
            }

            if (editorialContactObj.getParent().getName() == "Publishing Development Director") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("PublishingDevelopmentDirector");
                var msg = multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg)
                webUI.showAlert("Success", msg);
            }


            if (editorialContactObj.getParent().getName() == "Publishing Development Lead") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("PublishingDevelopmentLead");
                var msg = multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg)
				webUI.showAlert("Success", msg);
            }


            if (editorialContactObj.getParent().getName() == "Publishing Development Manager") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("PublishingDevelopmentManager");
                var msg = multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg)
                webUI.showAlert("Success", msg);
            }

            if (editorialContactObj.getParent().getName() == "Publishing Director") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("PublishingDirector");
                var msg = multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg)
                webUI.showAlert("Success", msg);
            }

            if (editorialContactObj.getParent().getName() == "Publishing VP") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("PublishingVP");
                var msg = multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg)
                webUI.showAlert("Success", msg);
            }

            if (editorialContactObj.getParent().getName() == "Strategic Content Acquisition Lead") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("StrategicContentAcquisitionLead");
                var msg = multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg)
                webUI.showAlert("Success", msg);
            }

            if (editorialContactObj.getParent().getName() == "Strategic Content Acquisition Manager") {
                var editorialContactsRefType = manager.getReferenceTypeHome().getReferenceTypeByID("StrategicContentAcquisitionManager");
                var msg = multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg);
                webUI.showAlert("Success", msg);

            }
            log.info(errorMsg.join('\n'))

        }
    }
}


function multiRefNo(editorialContactObj, editorialContactsRefType, errorMsg, successMsg) {
    var flag = 0;
    var refs = node.queryReferences(editorialContactsRefType).asList(100);
    if (refs.size() == 0) {
        for (i = 0; i < refs.size(); i++) {
            var refMatch = refs.get(i).getTarget().getID();
            if (editorialContactObj.getID() == refMatch) {
                flag = 1;
            }
        }
        log.info(flag)
        if (firstName != null && email != null && status == "Active") {
            if (flag == 0) {

                node.createReference(editorialContactObj, editorialContactsRefType);
                successMsg = editorialContactObj.getName() + " reference created."
                return successMsg;
            } else {
                errorMsg.push(editorialContactObj.getName() + " - already referenced")
                throw errorMsg.join('\n');
                //			webUI.showAlert("Error", errorMsg.join('\n'),"");
            }
        } else if (firstName == null || email == null || status != "Active") {
            if (firstName == null) {
                errorMsg.push(editorialContactObj.getName() + ' : First Name is missing. Please provide a value.')
            } if (email == null) {
                errorMsg.push(editorialContactObj.getName() + ' : Email is missing. Please provide a value.')
            } if (status == null || status == "Inactive") {
                errorMsg.push(editorialContactObj.getName() + " : Status must be 'Active' to create reference.")
            }
            throw errorMsg.join('\n');
        }
    } else {
        errorMsg.push(editorialContactObj.getParent().getName() + " - already exits.")
        throw errorMsg.join('\n');
    }
}

function multiRefYes(editorialContactObj, editorialContactsRefType, errorMsg) {
    var refs = node.queryReferences(editorialContactsRefType).asList(100);
    var flag = 0;
    for (i = 0; i < refs.size(); i++) {
        var refMatch = refs.get(i).getTarget().getID();
        if (editorialContactObj.getID() == refMatch) {
            flag = 1;
        }
    }
    log.info(flag)
    if (firstName != null && email != null && status == "Active") {
        if (flag == 0) {

            node.createReference(editorialContactObj, editorialContactsRefType);
            successMsg = editorialContactObj.getName() + " reference created."
                return successMsg;
        } else {
            errorMsg.push(editorialContactObj.getName() + " - already referenced")
            throw errorMsg.join('\n');
            //			webUI.showAlert("Error", errorMsg.join('\n'),"");
        }
    } else if (firstName == null || email == null || status != "Active") {
        if (firstName == null) {
            errorMsg.push(editorialContactObj.getName() + ' : First Name is missing. Please provide a value.')
        } if (email == null) {
            errorMsg.push(editorialContactObj.getName() + ' : Email is missing. Please provide a value.')
        } if (status == null || status == "Inactive") {
            errorMsg.push(editorialContactObj.getName() + " : Status must be 'Active' to create reference.")
        }
        throw errorMsg.join('\n');
    }
}
}