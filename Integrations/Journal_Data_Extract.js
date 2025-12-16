/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Journal_Data_Extract",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "Journal Data Extract",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "JSON_Utility_Library",
    "libraryAlias" : "utilityLib"
  } ]
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
exports.operation0 = function (node,log,manager,utilityLib) {
var referenceTypesToInclude = []; //comma separated strings
var classificationRefTypes = ["ProductToSubjectHierarchyLink"];

var mesg = initialNodeJSON(node);
var values = getAllValuesAsJSON(node,true);

mesg.values = values;
mesg.children = getJournalMediaObjects(node);
mesg.references=getReferencesAsJSON(node, [], true);
mesg.classificationRef=getClassificationRefAsJSON(node, classificationRefTypes, true);
mesg.containers=getDataContainers(node);
//mesg.revision=getRevision(node);

log.info(JSON.stringify(mesg));	

function getRevision(node)
{
	var revisions = [];
	
	var latestRevision = node.getRevision();
	log.info(latestRevision.getCreatedDate());
}
function getDataContainerObjects(node,containerID){
                var dcWrapper = node.getDataContainerByTypeID(containerID);
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

function getDataContainers(inputNode){	
	var containerObjs = [];
	var dataContainers = getDataContainerObjects(node,"BundleGroup_BundleCode_DataContainer");
	var iter = dataContainers.iterator();
	while (iter.hasNext()) 
	{	
		var containerArray = {};			
		var dc = iter.next().getDataContainerObject();		
		//log.info(dc);
		containerArray.type = "BundleCode"+"";
		containerArray.values = getContainerAttrValues(dc);		
		containerObjs.push(containerArray);  

	}
	return containerObjs;
}

function getContainerAttrValues(dc)
{		
	var array = [];
	var containerValues = dc.getValues().iterator();	
	while (containerValues.hasNext())
	{		
		json = {};
		var containerValue = containerValues.next();
		json.id = containerValue.getAttribute().getID()+'';
		json.value=containerValue.getSimpleValue()+'';
		array.push(json);
		
	}
  	return array;
}
	
function initialNodeJSON(inputNode){
	var json = {};
	json.stepID = inputNode.getID() + "";
	json.stepName = inputNode.getName() + "";
	json.parentID=inputNode.getParent().getID()+'';
	json.objectTypeID=inputNode.getObjectType().getID()+'';
	json.objectTypeName=inputNode.getObjectType().getName()+'';
	json.createDate=inputNode.getTailRevision().getCreatedDate()+'';
	json.lastUpdateDate=inputNode.getRevision().getEditedDate()+'';
	json.lastUpdateUser=inputNode.getRevision().getUserID()+'';
	return json;
}

function getClassificationRefAsJSON(inputNode, includedReferenceTypes, embed){
	var classificationRefObjArray = [];
	var classificationParentObjArray = [];
	var classificationRefMapIter = inputNode.getClassificationProductLinks().asSet().iterator();
	while(classificationRefMapIter.hasNext())
	{
		classificationRefObj = {};
		var classificationRef = classificationRefMapIter.next();
		var classificationNode = classificationRef.getClassification();
		var classificationRefTypeID = classificationRef.getLinkType().getID()+'';
		var classificationRefObjectType = classificationNode.getObjectType().getName()+'';
		var classificationRefNodeID = classificationNode.getID()+'';
		var classificationRefNodeName = classificationNode.getName()+'';
				
		classificationRefObj.referencetype = classificationRefTypeID;
		classificationRefObj.objecttype = classificationRefObjectType;
		classificationRefObj.id = classificationRefNodeID;
		classificationRefObj.name = classificationRefNodeName;
		classificationRefObj.values = getAllValuesAsJSON(classificationNode);
		log.info(classificationRef.getValues());
		classificationRefObj.referenceValues = getAllValuesAsJSON(classificationRef);
		
		var classificationParentObjArray = [];
		classificationRefObj.parent = getParentClassificationNodesJSON(classificationNode.getParent(),classificationParentObjArray);
		classificationRefObjArray.push(classificationRefObj);		
		}
		return classificationRefObjArray;
	}
	
function getParentClassificationNodesJSON(classificationNode,classificationParentObjArray)
{
	if(classificationNode.id != 'Classification 1 root')
	{
	if(classificationNode.getParent())
	{
	var parentClassification = classificationNode.getParent();
	//log.info(parentClassification.getObjectType().getName());
	if(parentClassification && parentClassification.getObjectType().getName() != "Alternate Classifications")
	{	
		classificationParentObj = {};	
		var type = classificationNode.getParent().getObjectType().getName()+'';
		var id = classificationNode.getParent().getID()+'';
		var name = classificationNode.getParent().getName()+'';
		classificationParentObj.objecttype = type;
		classificationParentObj.id = id;
		classificationParentObj.name = name;
		classificationParentObj.values = getAllValuesAsJSON(classificationNode);
		classificationParentObjArray.push(classificationParentObj);
	}	
	getParentClassificationNodesJSON(parentClassification,classificationParentObjArray);
	}
	}
	return classificationParentObjArray;
}

function getReferencesAsJSON(inputNode, includedReferenceTypes, embed){	
	var referencesObj = [];
	var refIter = inputNode.getReferences().asSet().iterator();
	while(refIter.hasNext()){
		refObj = {};
		var ref = refIter.next();
		var refTypeID = ref.getReferenceType().getID()+'';
		if(!(includedReferenceTypes.indexOf(refTypeID)==-1)||(includedReferenceTypes=='')){
			refObj.referenceType = refTypeID;			
			refObj.referenceValues = getAllValuesAsJSON(ref)
			if(embed){
				refObj.target = initialNodeJSON(ref.getTarget());
				refObj.target.values= getAllValuesAsJSON(ref.getTarget());
			}
			referencesObj.push(refObj);
		}
	}
	return referencesObj;
}

// journalMediaObjectsIter
function getJournalMediaObjects(inputNode){	
	var journalMediaObjects = [];
	var journalMediaObjectsIter = inputNode.getChildren().iterator();
	
	while(journalMediaObjectsIter.hasNext())
	{
		journalMediaObject = {};
		var journalMediaObjectData = journalMediaObjectsIter.next();		
		journalMediaObject.mediaObject = initialNodeJSON(journalMediaObjectData);
		journalMediaObject.mediaObject.values = getAllValuesAsJSON(journalMediaObjectData);		
		journalMediaObjects.push(journalMediaObject);
	}
	
	return journalMediaObjects;
}
function retrieveInheritedAttributeLinks(node, array) {
  array = addLinkedAttributeIDsToArray(node, array);
  var parent = node.getParent();
  if (parent) {
    retrieveInheritedAttributeLinks(parent, array);
  }
  return array;
}

function addLinkedAttributeIDsToArray(sourceNode, array) 
{	
  var linkAttribs = sourceNode.getAttributeLinks();
  var itr = linkAttribs.iterator();
  while (itr.hasNext()) 
  {
    var linkedattr = itr.next();
    array.push(linkedattr.getAttribute());
  } 
  return array;
}

function isAttributeValidForNode(node, attribute) {
  var validObjects = attribute.getValidForObjectTypes();

 if (validObjects.contains(node.getObjectType())) {
    return true;
  }
}
function getValidAttributes(inputNode) {
  var attributeIDs = [];
  log.info('Sam..'+inputNode);
  if(inputNode instanceof com.stibo.core.domain.Node){ //if inputNode is not a Node, then it must be a referenceType.
	  var objType = inputNode.getObjectType();
	  
	  //Below section retrieves specification attributes if inputNode is a product.
	  if (objType.isProductType()) {
	    var specificationAttrs = [];	    
	    retrieveInheritedAttributeLinks(inputNode, specificationAttrs);	    
	    specificationAttrs.forEach(function(attr) {
	    	//Reshmi...
	      if (isAttributeValidForNode(inputNode, attr)) 
	      {
	        attributeIDs.push(attr.getID());
	      }
	    });
	  }
  }
  else if(inputNode instanceof com.stibo.core.domain.Link)
  {

  	var descAttributes = inputNode.getValues().toArray();
  	  
  descAttributes.forEach(function(descAttr) {
  	  	log.info('This is a ref'+inputNode.getReferenceType());
   log.info("MEEEE: " + descAttr);
    attributeIDs.push(descAttr.getAttribute().getID());
  });
  return attributeIDs;
  	//var objType = inputNode.getLinkType();
  	
  }
  else { 
  	var objType = inputNode.getReferenceType();
  	}

  var descAttributeIDs = [];
  var descAttributes = objType.getValidDescriptionAttributes().toArray();
  descAttributes.forEach(function(descAttr) {
    attributeIDs.push(descAttr.getID());
  });
  return attributeIDs;
}


function getAllValuesAsJSON(inputNode) {
  var values = {};
 // log.info(inputNode.getName());
  var validAttributeArray = getValidAttributes(inputNode);
  
// log.info("Valid attr length"+validAttributeArray.length);
 validAttributeArray.sort();
  validAttributeArray.forEach(function(attr) 
  {
    values[attr] = getAttributeValue(inputNode, attr);
  });
  return values;
}

function getAttributeValue(node, attributeID) {
  var valueObject = node.getValue(attributeID);

  if (valueObject.getAttribute().isMultiValued()) 
  {
  	var array = [];
  	for (var value in Iterator(valueObject.getValues())) 
  	{
    		array.push(value.getSimpleValue() + "");
  	}
  	return array;
  }
  
  if(valueObject.getAttribute().hasLOV() && valueObject.getSimpleValue()!=null)
  {
  	var singleValLovArray = [];
  	if(valueObject.getAttribute().getListOfValues().isUsingValueIDs())
  	{  		
  		 lovValues = {};
  		 var valuesID = valueObject.getID()+'';
  		 var valuesName = valueObject.getSimpleValue()+'';
  		 lovValues.id =  valuesID;
  		 lovValues.name = valuesName;
  		 singleValLovArray.push(lovValues);
  		 return lovValues;
  	}
  //	return singleValLovArray;
  }

   var attributeValue = valueObject.getSimpleValue();

  return attributeValue ? attributeValue + "" : "";

}
}