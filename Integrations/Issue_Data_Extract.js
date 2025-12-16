/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Issue_Data_Extract",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "Issues Data Extract",
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
var referenceTypesToInclude = ["ProductToCostCenterReferenceLink"]; //comma separated strings
var classificationRefTypes = ["ProductToCostCenterReferenceLink"];

var mesg = initialNodeJSON(node);
var values = getAllValuesAsJSON(node);

mesg.values = values;
mesg.references=getReferencesAsJSON(node, referenceTypesToInclude, true);
mesg.classificationRef=getClassificationRefAsJSON(node, classificationRefTypes, true);
log.info(JSON.stringify(mesg));	

function initialNodeJSON(inputNode){
	var json = {};
	json.stepID = inputNode.getID() + "";
	json.stepName = inputNode.getName() + "";
	json.parentID=inputNode.getParent().getID()+'';
	json.objectTypeID=inputNode.getObjectType().getID()+'';
	json.objectTypeName=inputNode.getObjectType().getName()+'';
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
//		log.info(classificationRef.getClassification().getID()+ ":Name: "+classificationRef.getClassification().getName()+":type:"+classificationRef.getLinkType().getID()+
//		":parent: "+classificationNode.getParent());
//		
	
		var classificationRefTypeID = classificationRef.getLinkType().getID()+'';
		var classificationRefObjectType = classificationNode.getObjectType().getName()+'';
		var classificationRefNodeID = classificationNode.getID()+'';
		var classificationRefNodeName = classificationNode.getName()+'';

		if(!(includedReferenceTypes.indexOf(classificationRefTypeID)==-1)||(includedReferenceTypes==''))	
		{
		classificationRefObj.referencetype = classificationRefTypeID;
		classificationRefObj.objecttype = classificationRefObjectType;
		classificationRefObj.id = classificationRefNodeID;
		classificationRefObj.name = classificationRefNodeName;
		classificationRefObj.values = getAllValuesAsJSON(classificationNode);
		
		var classificationParentObjArray = [];		
		classificationRefObj.parent = getParentClassificationNodesJSON(classificationNode,classificationParentObjArray);
		classificationRefObjArray.push(classificationRefObj);		
		}
	}
		return classificationRefObjArray;
	}
	
function getParentClassificationNodesJSON(classificationNode,classificationParentObjArray)
{
	
	if(classificationNode.getParent())
	{
	var parentClassification = classificationNode.getParent();
	if(parentClassification)
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
	// Reshmi : get attributes from a group

	var attributeGroup=manager.getAttributeGroupHome().getAttributeGroupByID("Issues_Extract_Grouping");
	var attributes=attributeGroup.getAttributes().toArray();
//	log.info(attributes.length);
	 for(var i=0;i<attributes.length;i++){
         array.push(attributes[i]);   
        }

/*  var linkAttribs = sourceNode.getAttributeLinks();
  //log.info("Object type:"+sourceNode.getObjectType());
  var itr = linkAttribs.iterator();
  while (itr.hasNext()) 
  {
    var linkedattr = itr.next();
     if(linkedattr.getAttribute().getID() == "IssueRunDate" || linkedattr.getAttribute().getID() == "JournalCopyrightLine")
  {
  	log.info("linked attribute: "+linkedattr.getAttribute().getID()+" : "+sourceNode.getID());
  }
    
    array.push(linkedattr.getAttribute());
  } */
  return array;
}
function isAttributeValidForNode(node, attribute) {
  var validObjects = attribute.getValidForObjectTypes();
  // Attribute 
//  if(attribute.getID() == "IssueRunDate" || attribute.getID() == "JournalCopyrightLine")
//  {
//  	log.info("Attr ID: "+attribute.getID()+" valid object types:"+validObjects+" : "+node.getObjectType());
//  }
//  log.info("current object: "+node.getObjectType()+":attribute: "+attribute.getID());
//  log.info("validObjects: "+validObjects);
//  
//  if (validObjects.contains(node.getObjectType())) {
//    return true;
//  }
return true;
}
function getValidAttributes(inputNode) {
  var attributeIDs = [];
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
  } else { 
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