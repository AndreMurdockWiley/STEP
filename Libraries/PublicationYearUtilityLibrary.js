/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PublicationYearUtilityLibrary",
  "type" : "BusinessLibrary",
  "setupGroups" : [ "Libraries" ],
  "name" : "Publication Year Utility Library (OLD)",
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
function getJournal(node){
	var journalGroupCode = node.getValue("JournalGroupCode").getSimpleValue();
	var keyID = "JournalGroupCodeKey";
	return node.getManager().getNodeHome().getObjectByKey(keyID,journalGroupCode);
}

function getMedia(obj,ObjTypeID) {
	var journal = getJournal(obj);
	return queryForSingleObjByParentAndType(journal,ObjTypeID);
}

function createYear(parent, yearInput){
		var year = getYearFromMedia(parent,yearInput);
		if(!year){
			if(parent.getValue("JournalMediaCode").getSimpleValue() == "Print"){
				var pubYearTypeID = "JournalPrintPublicationYear";
			}else{
				var pubYearTypeID = "JournalDigitalPublicationYear";
			}
			var year = parent.createProduct('',pubYearTypeID);
			year.getValue("ContinuousNumbering").setSimpleValue("No");
			year.setName(yearInput);
			year.getValue("ProductPublicationYear").setSimpleValue(yearInput);
			//year.getValue("VolumeGroupPublicationSet").setSimpleValue(yearInput);
		}
		return year;
}

function getYearFromMedia(media,yearInput){
		if(media.getValue("JournalMediaCode").getSimpleValue() == "Print"){
			var pubYearTypeID = "JournalPrintPublicationYear";
		}else{
			var pubYearTypeID = "JournalDigitalPublicationYear";
		}
		var attributeID = "ProductPublicationYear";
		return queryForObjTypeBelowWithValue(media,pubYearTypeID,attributeID,yearInput);
}

function createNextYear(media){
	media.getValue("JournalPublicationYear").setSimpleValue("");
	var yearInput = media.getValue("JournalPublicationYear").getSimpleValue();
	var year = createYear(media, yearInput);
	return year;
}

function createVolume(parent,volumes,startVolumes,issues){
	var _volumes = volumes*1;
	for (var i=0;i<_volumes;i++) {
		var newVolNum = ((i*1) + (startVolumes*1));
		var volume = getVolumeFromYear(parent,newVolNum);
		if(!volume){
			if(parent.getValue("JournalMediaCode").getSimpleValue() == "Print"){
				var volumeTypeID = "JournalPrintVolumes";
			}else{
				var volumeTypeID = "JournalDigitalVolumes";
			}
			var volume = parent.createProduct('',volumeTypeID);
			volume.setName("Volume " + newVolNum);
			volume.getValue("CreateIssueTypeIDL").setSimpleValue("Standard Issue");
			volume.getValue("IssueVolumeNumber").setSimpleValue(newVolNum);
		}
		//insert additional actions for the VOLUME object here.
		if(issues>0){
			createIssue(volume,issues,0);
		}
	}
	return volume;
}

function getVolumeFromYear(year,volumeInput){
		if(year.getValue("JournalMediaCode").getSimpleValue() == "Print"){
			var volumeTypeID = "JournalPrintVolumes";
		}else{
			var volumeTypeID = "JournalDigitalVolumes";
		}
		var attributeID = "IssueVolumeNumber";
		return queryForObjTypeBelowWithValue(year,volumeTypeID,attributeID,volumeInput);
}

//old version
/*function createIssue(parent,issues,issueStartingNumber,pubStartingNumber,issueType){
	var newIssues = [];
	for (var j=1;j<=issues;j++) {
		if(parent.getValue("JournalMediaCode").getSimpleValue() == "Print"){
			var issueTypeID = "JournalPrintIssues";
		}else{
			var issueTypeID = "JournalDigitalIssues";
		}
		var newIssueNumber = (issueStartingNumber*1) + j;
		var newPubNumber = (pubStartingNumber*1) + j;
		var issue = parent.createProduct('',issueTypeID);
		issue.setName("Issue " + newIssueNumber);
		issue.getValue("IssueNumber").setSimpleValue(newIssueNumber);
		issue.getValue("IssuePubSequence").setSimpleValue(newPubNumber * 10);
		issue.getValue("IssueType").setLOVValueByID(issueType);
		var businessRuleHome = parent.getManager().getHome(com.stibo.core.domain.businessrule.BusinessRuleHome)
		var businessAction = businessRuleHome.getBusinessActionByID("JournalIssuesAttributeGeneration");
		businessAction.execute(issue);
		newIssues.push(issue.getID());
	}
	return newIssues;
}*/
function createIssue(parent, issues, issueType){
	var newIssues = [];
	
	for (var j=1;j<=issues;j++) {
		if(parent.getValue("JournalMediaCode").getSimpleValue() == "Print"){
			var issueTypeID = "JournalPrintIssues";
		}else{
			var issueTypeID = "JournalDigitalIssues";
		}
		
		var issue = parent.createProduct('',issueTypeID);
		issue.getValue("IssueType").setLOVValueByID(issueType);
		/*
		if (continous == "Yes" && j == 1){
			issue.getValue("IssueNumber").setSimpleValue(parseInt(parent.getChildren().size()) + 1);
		}*/
		var businessRuleHome = parent.getManager().getHome(com.stibo.core.domain.businessrule.BusinessRuleHome)
		var businessAction = businessRuleHome.getBusinessActionByID("JournalIssuesAttributeGeneration");
		businessAction.execute(issue);
		newIssues.push(issue.getID());
	}
	return newIssues;
}

function duplicateIssue(parent,issueNo){
		if(parent.getValue("JournalMediaCode").getSimpleValue() == "Print"){
			var issueTypeID = "JournalPrintIssues";
		}else{
			var issueTypeID = "JournalDigitalIssues";
		}
		var issue = parent.createProduct('',issueTypeID);
		issue.setName("Issue " + issueNo);
		return issue;
}


function wipePublishingAttributes(node){
	node.getValue("JournalNumberOfVolumes").setSimpleValue('');
	node.getValue("NumberOfIssues").setSimpleValue('');
	node.getValue("JournalStartingVolume").setSimpleValue('');
	node.getValue("JournalPublicationYear").setSimpleValue('');
}

function copyToOnline(printYearNode, newlyCreatedIssues, log){
	var digitalIssues = [];
	log.info("NEWLYCREATEDISSUES: " + newlyCreatedIssues[0]);
	//"JournalDigitalMedia", "JournalPrintMedia"
	var journal = getJournal(printYearNode);
	var digitalMedia = getMedia(journal,"JournalDigitalMedia");
	var printYear = printYearNode.getValue("ProductPublicationYear").getSimpleValue();
	var digitalYearNode = createYear(digitalMedia,printYear);
	copyValue(digitalYearNode,printYearNode,"VolumeGroupVolumesInPubSet");
	printYearNode.queryChildren().forEach(function(printVolume){
		log.info("PRINTYEARNODE: " + printVolume.getID());
		var printVolumeNo = printVolume.getValue("IssueVolumeNumber").getSimpleValue();
		var digitalVolume = createVolume(digitalYearNode,1,printVolumeNo,null);
		printVolume.queryChildren().forEach(function(printIssue){
			var issueNo = printIssue.getValue("IssueNumber").getSimpleValue();
			var digitalIssue = duplicateIssue(digitalVolume,issueNo);
			copyValue(digitalIssue,printIssue,"IssuePubSequence")
			copyValue(digitalIssue,printIssue,"IssueType")
			copyValue(digitalIssue,printIssue,"IssueNumber")
			var businessRuleHome = printYearNode.getManager().getHome(com.stibo.core.domain.businessrule.BusinessRuleHome)
			var businessAction = businessRuleHome.getBusinessActionByID("JournalIssuesAttributeGeneration");
			businessAction.execute(digitalIssue);
			digitalIssues.push(digitalIssue.getID());
			return true;
			});
		return true;
		});
	return digitalIssues;
}

function copyToOnline2(printYearNode, newlyCreatedIssues, log){
	var digitalIssues = [];
	log.info("NEWLYCREATEDISSUES: " + newlyCreatedIssues[0]);
	//"JournalDigitalMedia", "JournalPrintMedia"
	var journal = getJournal(printYearNode);
	var digitalMedia = getMedia(journal,"JournalDigitalMedia");
	var printYear = printYearNode.getValue("ProductPublicationYear").getSimpleValue();
	var digitalYearNode = createYear(digitalMedia,printYear);
	//copyValue(digitalYearNode,printYearNode,"VolumeGroupVolumesInPubSet");
	var digitalVolume = null;
	printYearNode.queryChildren().forEach(function(printVolume){
		var digitalVolume = null;
		log.info("PRINTYEARNODE: " + printVolume.getID());
		var printVolumeNo = printVolume.getValue("IssueVolumeNumber").getSimpleValue();
		for(var s=0; s<newlyCreatedIssues.length;s++) {
			if(digitalVolume == null && printYearNode.getManager().getProductHome().getProductByID(newlyCreatedIssues[s]).getParent().getValue("IssueVolumeNumber").getSimpleValue() == printVolumeNo){
				digitalVolume = createVolume(digitalYearNode,1,printVolumeNo,null);
				log.info("NEW DIGITALVOLUME: " + digitalVolume.getID());


		printVolume.queryChildren().forEach(function(printIssue){
			var issueNo = printIssue.getValue("IssueNumber").getSimpleValue();
//			for(var s=0; s<newlyCreatedIssues.length;s++) {
//				if(digitalVolume != null && printYearNode.getManager().getProductHome().getProductByID(newlyCreatedIssues[s]).getValue("IssueNumber").getSimpleValue() == issueNo){
					log.info("NEW DIGITALISSUE: " + issueNo);
					var digitalIssue = duplicateIssue(digitalVolume,issueNo);
					copyValue(digitalIssue,printIssue,"IssuePubSequence")
					copyValue(digitalIssue,printIssue,"IssueType")
					copyValue(digitalIssue,printIssue,"IssueNumber")
					var businessRuleHome = printYearNode.getManager().getHome(com.stibo.core.domain.businessrule.BusinessRuleHome)
					var businessAction = businessRuleHome.getBusinessActionByID("JournalIssuesAttributeGeneration");
					businessAction.execute(digitalIssue);
					digitalIssues.push(digitalIssue.getID());
//				}
//			}
			return true;
			});
			}
		}
		return true;
		});
	return digitalIssues;
}


function queryForSingleObjByParentAndType(parent,objTypeID){
	var objType = parent.getManager().getObjectTypeHome().getObjectTypeByID(objTypeID);
	var conditions = com.stibo.query.condition.Conditions;
	var queryHome = parent.getManager().getHome(com.stibo.query.home.QueryHome);
	var querySpecification = queryHome.queryFor(com.stibo.core.domain.Product).where(
	conditions.objectType(objType)
	.and(conditions.hierarchy().simpleBelow(parent))
	);
	var query = querySpecification.execute();
		query.forEach(function(qnode) {
		singleResult = qnode;
		return true;
	});
	return singleResult;
}

function queryForObjTypeBelowWithValue(searchRoot,ObjTypeID,attributeID,attributeValue){
	var manager = searchRoot.getManager();
	var objType = manager.getObjectTypeHome().getObjectTypeByID(ObjTypeID);
	var attribute = manager.getAttributeHome().getAttributeByID(attributeID);
	var result = null;
	
	var conditions = com.stibo.query.condition.Conditions;
	var queryHome = manager.getHome(com.stibo.query.home.QueryHome);
	var querySpecification = queryHome.queryFor(com.stibo.core.domain.Product).where(
	     conditions.objectType(objType)
	     .and(conditions.valueOf(attribute).eq(attributeValue))
	     .and(conditions.hierarchy().simpleBelow(searchRoot))
	);
	
	var query = querySpecification.execute();
	query.forEach(function(qNode) {
		result = qNode;
	    return true;
	});
	return result;
}

function copyValue(toNode,fromNode,attributeID){
	toNode.getValue(attributeID).setSimpleValue(fromNode.getValue(attributeID).getSimpleValue());
}

function deletePubYear(pubYearProduct, YESNOLOV, ui, manager){
	var nodeVolumesChildren = pubYearProduct.getChildren();
	var nodeIssueChildren = [];
	var issueSentSAP = false;
	var selectedNodeName = "";
	var issueCreationWFInstance = "";
	var issueApprove = "";
	var volumeApprove = "";
	var pubYearApprove = "";
	
	selectedNodeName = pubYearProduct.getName();
	
	for (var j = 0; j < nodeVolumesChildren.size(); j++){
		nodeIssueChildren = nodeVolumesChildren.get(j).getChildren();
		
		for (var x = 0; x < nodeIssueChildren.size(); x++){
			if (nodeIssueChildren.get(x).getValue("IssueSentToSAP").getSimpleValue() == YESNOLOV.getListOfValuesValueByID("Y").getValue()){
				issueSentSAP = true;
				break;
			}	
		}
		
		if (issueSentSAP){
			break;
		}
	}
	
	if (!issueSentSAP){
		for (j = 0; j < nodeVolumesChildren.size(); j++){
			nodeIssueChildren = nodeVolumesChildren.get(j).getChildren();
			
			for (x = 0; x < nodeIssueChildren.size(); x++){
				issueCreationWFInstance = nodeIssueChildren.get(x).getWorkflowInstanceByID("VolumeIssueCreationWF");
				
				if (issueCreationWFInstance){
					issueCreationWFInstance.delete(null);
				}
				
				issueApprove = nodeIssueChildren.get(x).delete();
				issueApprove.approve();
			}

			volumeApprove = nodeVolumesChildren.get(j).delete();
			volumeApprove.approve();
		}

		pubYearApprove = pubYearProduct.delete();
		pubYearApprove.approve();
		
		ui.showAlert("INFO", "Publication Year " + selectedNodeName + " Deleted Successfully.");
	} else {
		ui.showAlert("ERROR", "Can't Delete the Publication Year. There is an issue that had been sent to SAP");
	}
}

/*===== business library exports - this part will not be imported to STEP =====*/
exports.getJournal = getJournal
exports.getMedia = getMedia
exports.createYear = createYear
exports.getYearFromMedia = getYearFromMedia
exports.createNextYear = createNextYear
exports.createVolume = createVolume
exports.getVolumeFromYear = getVolumeFromYear
exports.createIssue = createIssue
exports.duplicateIssue = duplicateIssue
exports.wipePublishingAttributes = wipePublishingAttributes
exports.copyToOnline = copyToOnline
exports.copyToOnline2 = copyToOnline2
exports.queryForSingleObjByParentAndType = queryForSingleObjByParentAndType
exports.queryForObjTypeBelowWithValue = queryForObjTypeBelowWithValue
exports.copyValue = copyValue
exports.deletePubYear = deletePubYear