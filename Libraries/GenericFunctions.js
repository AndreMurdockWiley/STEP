/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "GenericFunctions",
  "type" : "BusinessLibrary",
  "setupGroups" : [ "Libraries" ],
  "name" : "Generic Functions",
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
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function mediaCodeTransformation(mediaCode) {
	if (mediaCode == "Print"){
		return "P";
	} else {
		return "D";
	}
}

function dateConverter(date, LOG) {
	var convertedDate = "";
	LOG.info("Date: " + date);
	
	if(date != null){
		var dateLength = "" + date.length();
	
		if (dateLength == 6) {
			//date is 20th century
			var year = date.substring(0,2);
			year = "19" + year;
			var month = date.substring(2,4);
			var day = date.substring(4,6);
			var hyphen = "-";
			convertedDate = year + hyphen + month + hyphen + day;
			LOG.info("Converted Date: " + convertedDate);
		} else {
			//date is 21st century
			var year = date.substring(0,3);
			year = "20" + year.substring(1,3)
			var month = date.substring(3,5);
			var day = date.substring(5,7);
			var hyphen = "-";
			convertedDate = year + hyphen + month + hyphen + day;
			LOG.info("Converted Date: " + convertedDate);
		}
	}
	
	return convertedDate;
}

function getToday(dateFormat){
	var simpleDateFormat = new java.text.SimpleDateFormat(dateFormat);
	var today = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
	
	return simpleDateFormat.format(today);
}

function sendEmail(MAILHOME, emailTo, emailSubject, emailBody) {
	var myMail = MAILHOME.mail();
	
	myMail.addTo(emailTo);
	myMail.subject(emailSubject);
	myMail.plainMessage(emailBody);
	myMail.send();	
}

function getDataContainerObjects(NODE, containerID){
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

function setValueToKeyAttribute(paramManager, paramNode, paramAttribute, paramKeyValue){
	var attributeValueMap = new java.util.HashMap();
	var KeyAttr = paramManager.getAttributeHome().getAttributeByID(paramAttribute);
	attributeValueMap.put(KeyAttr.getID(), paramKeyValue);
	paramManager.getKeyHome().updateUniqueKeyValues2(attributeValueMap, paramNode);
}

function issnAuthentication(newISSN, LOG){
	var issn = "";
	var varNumber = 0;
	var issnNumber = 0;
	var issnLength = 8;
	var test = "";
	
	LOG.info("Incoming ISSN: " + newISSN);
	issn = newISSN;
	issn = issn.substring(0, 7);
	
	for (var i = 0; i < issn.length; i++){
		issnNumber = String.fromCharCode(issn.charCodeAt(i));
		varNumber = varNumber + (issnNumber*issnLength);
		//LOG.info(issnNumber*issnLength);
		issnLength --
	}
	LOG.info("Total: " + varNumber);
	
	varNumber = varNumber % 11;
	LOG.info("Remainder: " + varNumber);

	if (varNumber != 0){
		varNumber = 11 - varNumber;
		LOG.info("Rest Remainder: " + varNumber);
	}
	
	if (varNumber == 10){
		varNumber = "X";
	}
	
	if (varNumber == ""){
		varNumber = 0;
	}
	
	issn = issn + varNumber;
	LOG.info("Generated ISSN: " + issn);

	if (newISSN == issn){
		LOG.info("Valid ISSN");
		return true;
	} else {
		return "Invalid ISSN - Expecting " + issn;
	}
}

function queryForObjTypeBelowWithValue(searchRoot, objTypeID, attributeID, attributeValue){
	var manager = searchRoot.getManager();
	var objType = manager.getObjectTypeHome().getObjectTypeByID(objTypeID);
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

function queryForSingleObjByParentAndType(parent, objTypeID){
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

function queryForObjTypeBelowById(parent, objTypeID, objectId){
	var manager = parent.getManager();
	var objType = manager.getObjectTypeHome().getObjectTypeByID(objTypeID);
	var result = null;
	
	var conditions = com.stibo.query.condition.Conditions;
	var queryHome = manager.getHome(com.stibo.query.home.QueryHome);
	var querySpecification = queryHome.queryFor(com.stibo.core.domain.Product).where(
	     conditions.objectType(objType)
	     .and(conditions.id().eq(objectId))
	     .and(conditions.hierarchy().simpleBelow(parent))
	);
	
	var query = querySpecification.execute();
	query.forEach(function(qNode) {
		result = qNode;
	    return true;
	});
	return result;
}

function getJournal(node){
	var journalGroupCode = node.getValue("JournalGroupCode").getSimpleValue();
	var keyID = "JournalGroupCodeKey";
	return node.getManager().getNodeHome().getObjectByKey(keyID,journalGroupCode);
}

function getMedia(obj,ObjTypeID) {
	var journal = getJournal(obj);
	return queryForSingleObjByParentAndType(journal,ObjTypeID);
}

function copyValue(toNode,fromNode,attributeID){
	toNode.getValue(attributeID).setSimpleValue(fromNode.getValue(attributeID).getSimpleValue());
}

function wipePublishingAttributes(journalMedia){
	journalMedia.getValue("JournalNumberOfVolumes").setSimpleValue('');
	journalMedia.getValue("JournalPublicationYear").setSimpleValue('');
	journalMedia.getValue("JournalMediaNumberOfVolumes").setSimpleValue('');
}

function removeFromWorkflow(product, workflowID){
	var workflowInstance = product.getWorkflowInstanceByID(workflowID);
	if(workflowInstance){
		workflowInstance.delete("");
	}
}


/*===== business library exports - this part will not be imported to STEP =====*/
exports.pad = pad
exports.mediaCodeTransformation = mediaCodeTransformation
exports.dateConverter = dateConverter
exports.getToday = getToday
exports.sendEmail = sendEmail
exports.getDataContainerObjects = getDataContainerObjects
exports.setValueToKeyAttribute = setValueToKeyAttribute
exports.issnAuthentication = issnAuthentication
exports.queryForObjTypeBelowWithValue = queryForObjTypeBelowWithValue
exports.queryForSingleObjByParentAndType = queryForSingleObjByParentAndType
exports.queryForObjTypeBelowById = queryForObjTypeBelowById
exports.getJournal = getJournal
exports.getMedia = getMedia
exports.copyValue = copyValue
exports.wipePublishingAttributes = wipePublishingAttributes
exports.removeFromWorkflow = removeFromWorkflow