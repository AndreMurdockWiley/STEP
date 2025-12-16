/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JSON_Reference_Entity_Classification_lib",
  "type" : "BusinessLibrary",
  "setupGroups" : [ "Integrations" ],
  "name" : "JSON_Reference_Entity_Classification_lib",
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
function initialNodeJSON(inputNode){
	var json = {};
	json.stepID = inputNode.getID() + "";
	json.stepName = inputNode.getName() + "";
	json.parentID=inputNode.getParent().getID()+'';
	json.objectTypeID=inputNode.getObjectType().getID()+'';
	json.objectTypeName=inputNode.getObjectType().getName()+'';
	return json;
}
//--------------------------------------------------------------------------------------
function lov(mgr, lovID , lovValueId){
	var json = {};
	json.id = mgr.getListOfValuesHome().getListOfValuesByID(lovID).getID() + '';
    //var isMedium  = lov.isMedium();
    //getListOfValuesValueByID
   // json.value = mgr.getListOfValuesHome().getListOfValuesByID(lovID).getListOfValuesValueByID(lovID).getValue();
  //  json.valu = getLOVValue().getID();
   // json.value = mgr.getListOfValuesHome().getListOfValuesByID(lovID).getListOfValuesValueByID(lovValueId).getValue();
	return json;
}
//--------------------------------------------------------------------------------------
function getLOVValueIDsfromLOV(mgr, lovID) {
    var lovValueIDs = {};
    const LOV = mgr.getListOfValuesHome().getListOfValuesByID(lovID).getID() + '';
    //const LOV_VALUE_ID = LOV.getListOfValuesValueByID(lovValueId).getID();
    if (LOV) {
      var validValues = LOV.queryValidValues().asList(500).toArray();
      logger.info(validValues + "validValues");
       for (var i = 0; i < validValues.length; i++) {
       	 lovValueIDs[lovValueIDs.length] = validValues[i].getID();
          lovValueIDs.push(lovValueIDs);
       }
    }
    return lovValueIDs;
   
}

//////////////////////////
//////////////////////////////////////////////////
/*function LOVHasLOVValueID(mgr, lovID, lovValueId) {
    const LOV_HOME = mgr.getListOfValuesHome();
    const LOV = LOV_HOME.getListOfValuesByID(lovID);
    const LOV_VALUE_ID = LOV.getListOfValuesValueByID(lovValueId).getID();
    if (LOV_VALUE_ID == lovValueId) {
        return true;
    }
    return false;
}*/
//----------------------------------------------------------------------------------------
function getClassificationRefAsJSON(inputNode, includedReferenceTypes, embed){
	var classificationRefObjArray = [];
	var classificationParentObjArray = [];
	var classificationRefMapIter = inputNode.getClassificationProductLinks().asSet().iterator();
	while(classificationRefMapIter.hasNext()){
		classificationRefObj = {};
		var classificationRef = classificationRefMapIter.next();
		var classificationNode = classificationRef.getClassification();
		var classificationRefTypeID = classificationRef.getLinkType().getID()+'';
		var classificationRefObjectType = classificationNode.getObjectType().getName()+'';
		var classificationRefObjectTypeID = classificationNode.getObjectType().getName()+'';
		var classificationRefNodeID = classificationNode.getID()+'';
		var classificationRefNodeName = classificationNode.getName()+'';

		// If Object is Issues, extract only cost center
	//	if(classificationRefObjectTypeID == 'JournalDigitalIssues' || classificationRefObjectTypeID == 'JournalPrintIssues')
	//	{
	//		if(!(includedReferenceTypes.indexOf(classificationRefTypeID)==-1)||(includedReferenceTypes==''))	
	//		{
				classificationRefObj.referencetype = classificationRefTypeID;
				classificationRefObj.objecttype = classificationRefObjectType;
				classificationRefObj.id = classificationRefNodeID;
				classificationRefObj.name = classificationRefNodeName;
				classificationRefObj.values = getAllValuesAsJSON(classificationNode);
				classificationRefObj.referenceValues = getAllValuesAsJSON(classificationRef);		
				var classificationParentObjArray = [];		
				classificationRefObj.parent = getParentClassificationNodesJSON(classificationNode.getParent(),classificationParentObjArray);
				classificationRefObjArray.push(classificationRefObj);
	//		}		
	//	}
		}
		return classificationRefObjArray;
	}
	
function getParentClassificationNodesJSON(classificationNode,classificationParentObjArray)
{
	if(classificationNode.getParent())
	{
	var parentClassification = classificationNode.getParent();
	if(parentClassification && parentClassification.getObjectType().getName() != "Alternate Classifications")
	{
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
	}
	return classificationParentObjArray;
}

function getReferencesAsJSON(inputNode, includedReferenceTypes, embed, checkValid,manager){	
	var referencesObj = [];
	var refIter = inputNode.getReferences().asSet().iterator();
	while(refIter.hasNext()){
		refObj = {};
		var ref = refIter.next();
		var refTypeID = ref.getReferenceType().getID()+'';
		if(!(includedReferenceTypes.indexOf(refTypeID)==-1)||(includedReferenceTypes=='')){
			refObj.referenceType = refTypeID;			
			refObj.referenceValues = getAllValuesAsJSON(ref,manager,checkValid)
			if(embed){
				refObj.target = initialNodeJSON(ref.getTarget());
				refObj.target.values= getAllValuesAsJSON(ref.getTarget(),manager,checkValid);
			}
			referencesObj.push(refObj);
		}
	}
	return referencesObj;
}
/*function retrieveInheritedAttributeLinks(node, array) {
  array = addLinkedAttributeIDsToArray(node, array);
  var parent = node.getParent();
  if (parent) {
    retrieveInheritedAttributeLinks(parent, array);
  }
  return array;
}*/

/*function addLinkedAttributeIDsToArray(sourceNode, array) 
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
*/
/*function isAttributeValidForNode(node, attribute) {
  var validObjects = attribute.getValidForObjectTypes();

 if (validObjects.contains(node.getObjectType())) {
    return true;
  }
}*/
function getValidAttributes(inputNode , manager) {
  var attributeIDs = [];
 // log.info('Sam..'+inputNode);
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
  else if(inputNode instanceof com.stibo.core.domain.Link) {
  	var descAttributes = inputNode.getValues().toArray();	  
      descAttributes.forEach(function(descAttr) {
  	  	//log.info('This is a ref'+inputNode.getReferenceType());
  //  log.info("MEEEE: " + descAttr);
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


// Get immediate Child Objects of the node
function getChildObjects(inputNode,manager){	
	var childObjects = [];
	var childObjectsIter = inputNode.getChildren().iterator();
	
	while(childObjectsIter.hasNext())
	{
		childObjectArray = {};
		var childObjectNode = childObjectsIter.next();		
		childObjectArray.mediaObject = initialNodeJSON(childObjectNode);
		childObjectArray.mediaObject.values = getAllValuesAsJSON(childObjectNode,manager);		
		childObjects.push(childObjectArray);
	}
	
	return childObjects;
}

// Get Data Containers associated to the Node
function getDataContainers(inputNode){	
	var containerObjs = [];
	var containerObjectforExtract = ["BundleGroup_BundleCode_DataContainer","ISSNHistory_DataContainer"];
		
	for(var i=0;i<containerObjectforExtract.length;i++)
	{
		var dataContainers = getDataContainerObjects(inputNode,containerObjectforExtract[i]);
		var iter = dataContainers.iterator();
		while (iter.hasNext()) 
		{	
			var containerArray = {};			
			var dc = iter.next().getDataContainerObject();		
		//log.info(dc);
		if(containerObjectforExtract[i] == 'BundleGroup_BundleCode_DataContainer')
		{
			containerArray.type = "BundleCode"+"";
		}
		else
		{
			containerArray.type = "ISSNHistory"+"";
		}
			containerArray.values = getContainerAttrValues(dc);		
			containerObjs.push(containerArray);  

		}
	}
	return containerObjs;
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
function getContainerAttrValues1(lov)
{		
	var array = [];
	var containerValues = lov.getListOfValues().iterator();	
	while (containerValues.hasNext())
	{		
		json = {};
		var containerValue = containerValues.next();
		//json.id = containerValue.getAttribute().getID()+'';
		json.value=containerValue.getSimpleValue()+'';
		array.push(json);
		
	}
  	return array;
}
////////////////////////
function getLOVValueIDsfromLOV(stepManager, lovID) {
   // var lovValueIDs;
   var lovValueIDs = [];
   var lovValues = [];
    var LOV = stepManager.getListOfValuesHome().getListOfValuesByID(lovID);
if (LOV) { 
        var validValues = LOV.queryValidValues().asList(500).toArray();
         logger.info(validValues.length + "validValues.length");
        for (var i = 0; i < validValues.length; i++) {
        	var lovValueID = validValues[i].getID();
        	var lovValue = validValues[i].getValue();
        lovValueIDs.push(lovValueID);
        //lovValues.push(lovValue);
        //	json = {};
          // lovValueIDs[lovValueIDs.length] = validValues[i].getID();
           //json.value = 
          //  var lovValueIDs
            //  lovValueIDs[lovValueIDs.length];
             // lovValueIDs[lovValueIDs.length] = validValues[i].getValue();
            //lovValueIDs.push(json);
        }
}
    return lovValueIDs;
}

//////////////
function getLOVValuesfromLOV(stepManager, lovID) {
   // var lovValueIDs;
 //  var lovValueIDs = [];
   var lovValues = [];
    var LOV = stepManager.getListOfValuesHome().getListOfValuesByID(lovID);
if (LOV) { 
        var validValues = LOV.queryValidValues().asList(500).toArray();
         logger.info(validValues.length + "validValues.length");
        for (var i = 0; i < validValues.length; i++) {
        	//var lovValueID = validValues[i].getID();
        	var lovValue = validValues[i].getValue();
        lovValues.push(lovValue);
        
        }
}
    return lovValues;
}

//////////////////////////
function getArrayOfLOVValueIDs(mgr, inputNode, attributeId) {
    var theArray = [];
    if (mgr.getAttributeHome().getAttributeByID(attributeId).isMultiValued()) {
        theArray = getAllLOVValueIDsFromMultiValuedLOVAttribute(inputNode, attributeId);
    } else {
        const LOV_VALUE = inputNode.getValue(attributeId).getLOVValue();
        if (LOV_VALUE) {
            theArray.push(LOV_VALUE.getID());
        }
    }
    return theArray;
}


/*===== business library exports - this part will not be imported to STEP =====*/
exports.initialNodeJSON = initialNodeJSON
exports.lov = lov
exports.getLOVValueIDsfromLOV = getLOVValueIDsfromLOV
exports.getClassificationRefAsJSON = getClassificationRefAsJSON
exports.getParentClassificationNodesJSON = getParentClassificationNodesJSON
exports.getReferencesAsJSON = getReferencesAsJSON
exports.getValidAttributes = getValidAttributes
exports.getAllValuesAsJSON = getAllValuesAsJSON
exports.getAttributeValue = getAttributeValue
exports.getChildObjects = getChildObjects
exports.getDataContainers = getDataContainers
exports.getDataContainerObjects = getDataContainerObjects
exports.getContainerAttrValues = getContainerAttrValues
exports.getContainerAttrValues1 = getContainerAttrValues1
exports.getLOVValueIDsfromLOV = getLOVValueIDsfromLOV
exports.getLOVValuesfromLOV = getLOVValuesfromLOV
exports.getArrayOfLOVValueIDs = getArrayOfLOVValueIDs