/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Approve_And_Send_Object",
  "type" : "BusinessLibrary",
  "setupGroups" : [ "Integrations" ],
  "name" : "Approve And Send Object",
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
===============================================================================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
===============================================================================================================================================================================================================================
11Feb2025    Venkata Siva Harish Mattaparthi   HAR01     RPDM-9132    Added method "partialApproveProductLinkReference" for partial approval of node reference.                                                             
2April2025   Venkata Siva Harish Mattaparthi   HAR02     RPDM-9844    Approve and trigger partner journal.                                                                 
===============================================================================================================================================================================================================================

*/


//map to the correct object type
//update trigger attributes
//do approval
//send back error message

function approveAndTriggerObj(node,manager,log,isCreate) {
	logger.info("approveAndTriggerObj"+node);
	var myRes = "";
	var objType = node.getObjectType().getID();
	logger.info(objType +   "  objType");
	if(objType == "Journal") {
		var allChild = node.getChildren();

		for(var i=0; i < allChild.size(); i++) {
			myRes += approveObj(allChild.get(i),manager,log);
		}
		if (myRes != "") {
			return myRes;
		}

		myRes += triggerObj(node,manager,log,isCreate);
		if (myRes != "") {
			return myRes;
		}

		return approveObj(node,manager,log);
	} 
	else if(objType == "JournalPrintMedia" || objType == "JournalDigitalMedia") {
		logger.info(node.getID() + "   check1");
		var myJournal = node.getParent();
		//var myJournalDigital = node.getParent();


		var allChild = node.getChildren();

		for(var i=0; i < allChild.size(); i++) {
			myRes += approveObj(allChild.get(i),manager,log);
		}
		if (myRes != "") {
			return myRes;
		}
		
		var childMedias = myJournal.getChildren();
		for(var i=0; i < childMedias.size(); i++) {
			myRes += triggerObj(childMedias.get(i),manager,log,isCreate);
			myRes += approveObj(childMedias.get(i),manager,log);
			
		}
		if (myRes != "") {
			return myRes;
		}
		

		/*myRes += approveObj(myJournalDigital,manager,log);
		if (myRes != "") {
			return myRes;
		}*/

		//myRes += approveObj(JournalPrint,manager,log);
		//if (myRes != "") {
		// return myRes;
		//}

		myRes += triggerObj(myJournal,manager,log,isCreate);
		myRes += approveObj(myJournal,manager,log);
		if (myRes != "") {
			return myRes;
		}

		return myRes;

	} 
	else if(objType == "JournalDigitalIssues" || objType == "JournalPrintIssues") {
		logger.info(node.getID() + "   check2");
		var myVol = node.getParent();
		logger.info(myVol);
		var myPubYear = myVol.getParent();

		myRes += approveObj(myPubYear,manager,log);
		if (myRes != "") {
			return myRes;
		}

		myRes += approveObj(myVol,manager,log);
		if (myRes != "") {
			return myRes;
		}

		myRes += triggerObj(node,manager,log,isCreate);
		if (myRes != "") {
			return myRes;
		}

		return approveObj(node,manager,log);
	} 
	else if(objType == "JournalCollectionsOffering" ) {
		var myJournalCollectionsSubType = node.getParent();
		logger.info(myJournalCollectionsSubType + "myJournalCollectionsSubType");
		var myJournalCollectionsYear = node.getParent().getParent();
		logger.info(myJournalCollectionsYear + "myJournalCollectionsSubType");
		var myJournalCollectionsTypes = node.getParent().getParent().getParent();

		myRes += approveObj(myJournalCollectionsSubType,manager,log);
		if (myRes != "") {
		return myRes;
		}

		myRes += approveObj(myJournalCollectionsYear,manager,log);
		if (myRes != "") {
		return myRes;
		}

		myRes += approveObj(myJournalCollectionsTypes,manager,log);
		if (myRes != "") {
		return myRes;
		}

		myRes += triggerObj(node,manager,log,isCreate);
		if (myRes != "") {
		return myRes;
		}

		return approveObj(node,manager,log);
	} 
	else if(objType == "OtherProducts" || objType == "MultiJournal" || objType == "JournalHistoryProducts" || objType == "MultiMedia" || objType == "Backfiles" || objType == "JournalCollectionsOffering" || objType == "OtherProductCollectionOffering" ) {
		myRes += triggerObj(node,manager,log,isCreate);
		logger.info("objType" + objType);
		
		if(objType == "Backfiles"){
			var refType = manager.getReferenceTypeHome().getReferenceTypeByID("Journal_to_Backfile_Reference");
			var refLists = node.queryReferencedBy(refType).asList(10000);
			//log.info("Node: "+node.getID());
			for(var count = 0;count <refLists.size();count++ ){
				var journal = refLists.get(count).getSource();				
				if(journal.getObjectType().getID() == "Journal"){
					myRes += triggerObj(journal,manager,log,isCreate);
					journal.approve();
					//log.info(journal.getID());
				}	
			}
			
		}		
		if (objType == "OtherProductCollectionOffering" ) {
			//18/2/2025-Prathibha- Added this check as it should run only for dynamic colelctions.
			if(node.getValue("OtherProductCollectionType").getSimpleValue() == "Dynamic"){
			//added flag to check in the event process for webui changes
			node.getValue("DynamicCollectionFlag").setSimpleValue("Y");                 
			var refType = manager.getReferenceTypeHome().getReferenceTypeByID("SpecProd_To_Journal_OtherProd_Reference");
			var refLists = node.queryReferencedBy(refType).asList(1000000);
			logger.info("refLists "+refLists.size());
			for(var count = 0;count <refLists.size();count++ ){
				var non_journal = refLists.get(count).getSource();							
				if(non_journal.getObjectType().getID() == "OtherProducts" || non_journal.getObjectType().getID() == "Journal"){
					const APPROVAL_STATUS = non_journal.getApprovalStatus().toString();
				        if (APPROVAL_STATUS != "NotInApproved") {
				            non_journal.approve();
				        }
					//non_journal.approve();
					//logger.info("Node-MH");
					//logger.info(non_journal.getID());
				}	
			}
			}
			
		}
		if (myRes != "") {
		return myRes;
		}
		return approveObj(node,manager,log);
	}
	//HAR02 Start
    else if (objType == "PartnerJournal") {
        myRes += triggerObj(node, manager, log, isCreate);
        myRes += approveObj(node, manager, log);

        if (myRes != "") {
            return myRes;
        }
    }
    //HAR02 End 
	else {
		return approveObj(node,manager,log);
	}

	return myRes;
}

function approveObj(node,manager,log) {
	var exceptionMessage = "";

	try {
		node.approve();
	} catch (e) {
		exceptionMessage += "ERROR DURING APPROVAL\n" + e + "\n";
		log.info("ERROR DURING APPROVAL NODE: " + node.getID() + "\n" + e);
	}

	return exceptionMessage;
}

function triggerObj(node,manager,log,isCreate) {
	var exceptionMessage = "";
	var myAttValue = "";
	var myAttStatus = "";
	var messageStatus = node.getValue("MessageStatus").getSimpleValue();
	var JournalTriggerStatus = node.getValue("Journals_Trigger_Attribute").getSimpleValue();

	var simpleDateFormat = new java.text.SimpleDateFormat("dd-MMM-yyyy HH:mm:ss");
	var currTime = simpleDateFormat.format(java.lang.System.currentTimeMillis());


if (messageStatus == "" || messageStatus == null || JournalTriggerStatus == null || JournalTriggerStatus == "") {
//      if (isCreate == "true") {
	//logger.info("myAttStatus" +myAttStatus);	
	myAttValue = "create " + currTime;
	myAttStatus = "CREATE";
	} else {
	//if  (messageStatus != "" || messageStatus != null || JournalTriggerStatus != null || JournalTriggerStatus != "") {
	//logger.info("myAttStatus" +myAttStatus);	
	myAttValue = "update " + currTime;
	myAttStatus = "UPDATE";
	}

	try {
	node.getValue("Journals_Trigger_Attribute").setValue(myAttValue);
	node.getValue("MessageStatus").setValue(myAttStatus);
	} catch (e) {
	exceptionMessage += "ERROR DURING APPROVAL\n"  + e + "\n";
	log.info("ERROR DURING APPROVAL TRIGGER: " + node.getID() + "\n" + e);
	}

	return exceptionMessage;
}

//HAR01 Start
function partialApproveProductLinkReference(nodeToApprove, refTypeID) {
    const NON_APPROVED_OBJECTS = nodeToApprove.getNonApprovedObjects().toArray();
    for (var i = 0; i < NON_APPROVED_OBJECTS.length; i++) {
        var nonApprovedObject = NON_APPROVED_OBJECTS[i];
        if ((nonApprovedObject instanceof com.stibo.core.domain.partobject.ProductReferencePartObject)) {
            if (nonApprovedObject.getReferenceType() == refTypeID) {
                var setNonApprovedObjects = new java.util.HashSet();
                setNonApprovedObjects.add(nonApprovedObject);
                nodeToApprove.approve(setNonApprovedObjects);
                break;
            }
        }
    }
}
//HAR01 End 
/*===== business library exports - this part will not be imported to STEP =====*/
exports.approveAndTriggerObj = approveAndTriggerObj
exports.approveObj = approveObj
exports.triggerObj = triggerObj
exports.partialApproveProductLinkReference = partialApproveProductLinkReference