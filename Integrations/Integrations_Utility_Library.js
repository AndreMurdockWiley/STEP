/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Integrations_Utility_Library",
  "type" : "BusinessLibrary",
  "setupGroups" : [ "Integrations" ],
  "name" : "Integrations JSON Utility Library",
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
==============================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
==============================================================================================================================================================================
13July2025   Venkata Siva Harish Mattaparthi  HAR01      RPDM-10604    Remove 'JournalSocietyMembershipInfoNoteId','JournalSocietySpecialSensitivitiesId' from Journal Feed.                                                                     

==============================================================================================================================================================================
Purpose of Business Rule: Useful in building JSON feeds for outbounds.
==============================================================================================================================================================================
*/
function initialNodeJSON(inputNode) {
    var json = {};
    json.stepID = inputNode.getID() + "";
    json.stepName = inputNode.getName() + "";
    json.parentID = inputNode.getParent().getID() + '';
    json.objectTypeID = inputNode.getObjectType().getID() + '';
    json.objectTypeName = inputNode.getObjectType().getName() + '';
    json.TenantID = inputNode.getValue("TenantID").getSimpleValue() + '';
    return json;
}

function getClassificationRefAsJSON(inputNode, includedReferenceTypes, embed,logger){
	var classificationRefObjArray = [];
	var classificationParentObjArray = [];
	var classificationRefMapIter = inputNode.getClassificationProductLinks().asList().iterator();
	//var classificationRefMapIter = inputNode.queryClassificationProductLinks(includedReferenceTypes).asList(50).iterator();
	//logger.info("LIST" + inputNode.queryClassificationProductLinks(includedReferenceTypes).asList(50).size());
	while(classificationRefMapIter.hasNext()){
		classificationRefObj = {};
		var classificationRef = classificationRefMapIter.next();
		var classificationNode = classificationRef.getClassification();
		
		var classificationRefTypeID = classificationRef.getLinkType().getID()+'';
		var classificationRefObjectType = classificationNode.getObjectType().getName()+'';
		var classificationRefObjectTypeID = classificationNode.getObjectType().getName()+'';
		var classificationRefNodeID = classificationNode.getID()+'';
		var classificationRefNodeName = classificationNode.getName()+'';
	if(classificationRefObjectTypeID == 'OtherProducts')
	{
	if(!(includedReferenceTypes.indexOf(classificationRefTypeID)==-1) || includedReferenceTypes=='ProductToSubjectHierarchyLink' )	
			{
				classificationRefObj.referencetype = classificationRefTypeID;
				classificationRefObj.objecttype = classificationRefObjectType;
				classificationRefObj.id = classificationRefNodeID;
				classificationRefObj.name = classificationRefNodeName;
				classificationRefObj.values = getAllValuesAsJSON(classificationNode);
				classificationRefObj.referenceValues = getAllValuesAsJSON(classificationRef);		
				var classificationParentObjArray = [];		
				classificationRefObj.parent = getParentClassificationNodesJSON(classificationNode.getParent(),classificationParentObjArray);
				classificationRefObjArray.push(classificationRefObj);
			}		
	}
		// If Object is Issues, extract only cost center
	//	if(classificationRefObjectTypeID == 'JournalDigitalIssues' || classificationRefObjectTypeID == 'JournalPrintIssues')
	else {
	//		if(!(includedReferenceTypes.indexOf(classificationRefTypeID)==-1)||(includedReferenceTypes==''))	
	//		else {
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
		//return classificationRefObjArray;
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

function getReferencesAsJSON(inputNode, includedReferenceTypes, embed, checkValid, manager){	
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


function retrieveInheritedAttributeLinks(node, array,manager) 
{
	var objectTypeNode = node.getObjectType().getID();
	log.info("ISSUEEXTRACT OBJECT TYPE: " + objectTypeNode);
	if( objectTypeNode == 'JournalDigitalIssues' || objectTypeNode == 'JournalPrintIssues')
	{
  		array = addLinkedAttributeIDsToArrayIssues(node, array,manager);

	}
	else if( objectTypeNode == 'MultiJournal' )
	{
  		array = addLinkedAttributeIDsToArrayMJ(node, array,manager);

	}
		else if( objectTypeNode == 'OtherProducts' )
	{
  		array = addLinkedAttributeIDsToArrayNONJ(node, array,manager);

	}
	else if( objectTypeNode == 'MultiMedia' )
	{
  		array = addLinkedAttributeIDsToArrayMM(node, array,manager);

	}
	
	else if( objectTypeNode == 'JournalCollectionsOffering' )
	{
  		array = addLinkedAttributeIDsToArrayCollections(node, array,manager);
  		/*var attributeGroup=manager.getAttributeGroupHome().getAttributeGroupByID("Collection_Attributes_Extra_Grouping");
		var attributes=attributeGroup.getAttributes().toArray();
		for(var i=0;i<attributes.length;i++){
         		array.push(attributes[i]);   
        	}
        	var parent = node.getParent();
		if (parent) {
    			retrieveInheritedAttributeLinks(parent, array, manager);
		}*/

	}else if ( objectTypeNode == 'JournalHistoryProducts' ){
		array = addLinkedAttributeIDsToArray(node, array);
  		var attributeGroup=manager.getAttributeGroupHome().getAttributeGroupByID("History_Attributes_Extra_Grouping");
		var attributes=attributeGroup.getAttributes().toArray();
		for(var i=0;i<attributes.length;i++){
         		array.push(attributes[i]);   
        	}
        	var parent = node.getParent();
		if (parent) {
    			retrieveInheritedAttributeLinks(parent, array, manager);
		}
	}else if ( objectTypeNode == 'JournalPrintMedia' || objectTypeNode == 'JournalDigitalMedia'){
		array = addLinkedAttributeIDsToArray(node, array);
  		var attributeGroup=manager.getAttributeGroupHome().getAttributeGroupByID("Media_Attributes_Extra_Grouping");
		var attributes=attributeGroup.getAttributes().toArray();
		for(var i=0;i<attributes.length;i++){
         		array.push(attributes[i]);   
        	}
        	var parent = node.getParent();
		if (parent) {
    			retrieveInheritedAttributeLinks(parent, array, manager);
		}
	}
	else if( objectTypeNode == 'Journal' )
	{
  		array = addLinkedAttributeIDsToArray(node, array);
  		var attributeGroup=manager.getAttributeGroupHome().getAttributeGroupByID("Journal_Attributes_Extra_Grouping");
		var attributes=attributeGroup.getAttributes().toArray();
		for(var i=0;i<attributes.length;i++){
         		array.push(attributes[i]);   
        	}
        	attributeGroup=manager.getAttributeGroupHome().getAttributeGroupByID("AG_Common_Attributes");
		attributes=attributeGroup.getAttributes().toArray();
		for(var i=0;i<attributes.length;i++){
         		array.push(attributes[i]);   
        	}
		var parent = node.getParent();
		if (parent) {
    			retrieveInheritedAttributeLinks(parent, array, manager);
		}


	}	
	else
	{
		array = addLinkedAttributeIDsToArray(node, array);
		var parent = node.getParent();
		if (parent) {
    		retrieveInheritedAttributeLinks(parent, array,manager);
		}
		
	}
  	
	//for(var i=0; i < array.size(); i++) {
		//log.info("ISSUEEXTRACT ARRAY: " + array.get(i));
	//}
  	return array;
}

function addLinkedAttributeIDsToArray(sourceNode, array) 
{	
  var linkAttribs = sourceNode.getAttributeLinks();
  var itr = linkAttribs.iterator();
  while (itr.hasNext()) 
  {
    var linkedattr = itr.next();
    if(isAttributeValidForNode(sourceNode, linkedattr.getAttribute(), null)) { 
    	array.push(linkedattr.getAttribute());
    }
  } 
  return array;
}

function addLinkedAttributeIDsToArrayIssues(sourceNode, array,manager) 
{
	// Reshmi : get attributes from a group

	var attributeGroup=manager.getAttributeGroupHome().getAttributeGroupByID("Issues_Extract_Grouping");
	var attributes=attributeGroup.getAttributes().toArray();
	for(var i=0;i<attributes.length;i++){
         array.push(attributes[i]);   
        }
  
  return array;
}
function addLinkedAttributeIDsToArrayNONJ(sourceNode, array,manager) 
{
	// Vivek : get attributes from a group

	var attributeGroup=manager.getAttributeGroupHome().getAttributeGroupByID("AG_NonJournals_Export");
	var attributes=attributeGroup.getAttributes().toArray();
	for(var i=0;i<attributes.length;i++){
         array.push(attributes[i]);   
        }
  
  return array;
}

function addLinkedAttributeIDsToArrayBACKFILE(sourceNode, array,manager) 
{
	// Mario : get attributes from a group

	var attributeGroup=manager.getAttributeGroupHome().getAttributeGroupByID("AG_Backfile_JSON_EXTRACT");
	var attributes=attributeGroup.getAttributes().toArray();
	for(var i=0;i<attributes.length;i++){
         array.push(attributes[i]);   
        }
  
  return array;
}

function addLinkedAttributeIDsToArrayHistory(sourceNode, array,manager) 
{
	// Mario : get attributes from a group

	var attributeGroup=manager.getAttributeGroupHome().getAttributeGroupByID("AG_History_JSON");
	var attributes=attributeGroup.getAttributes().toArray();
	for(var i=0;i<attributes.length;i++){
         array.push(attributes[i]);   
        }
  
  return array;
}

function addLinkedAttributeIDsToArrayMJ(sourceNode, array,manager) 
{
	// Reshmi : get attributes from a group

	var attributeGroup=manager.getAttributeGroupHome().getAttributeGroupByID("AG_MultiJournal_Attributes");
	var attributes=attributeGroup.getAttributes().toArray();
	for(var i=0;i<attributes.length;i++){
         array.push(attributes[i]);   
        }
  return array;
}

function addLinkedAttributeIDsToArrayMM(sourceNode, array,manager) 
{
	// Reshmi : get attributes from a group

	var attributeGroup=manager.getAttributeGroupHome().getAttributeGroupByID("AG_MultiMedia_Attributes");
	var attributes=attributeGroup.getAttributes().toArray();
	for(var i=0;i<attributes.length;i++){
         array.push(attributes[i]);   
        }
  return array;
}

function addLinkedAttributeIDsToArrayCollections(sourceNode, array,manager) 
{
	// Reshmi : get attributes from a group

	var attributeGroup=manager.getAttributeGroupHome().getAttributeGroupByID("AG_COLLECTION");
	var attributes=attributeGroup.getAttributes().toArray();
	for(var i=0;i<attributes.length;i++){
         array.push(attributes[i]);   
        }
  return array;
}

//HAR01 Start
function isAttributeValidForRef(ref2, attribute) {
    var linkTypeId2 = ref2.getLinkType().getID();
    if (linkTypeId2 == "ProductToSocietyGroupReferenceLink") {
        var myAttrGroups2 = attribute.getAttributeGroups().toArray();
        for (var j = 0; j < myAttrGroups2.length; j++) {
            if (ref2.getSource().getObjectType().getID() == 'Journal') {
                if (myAttrGroups2[j].getID() == "NotValidForJournalRef") {
                    return false;
                }
            }
        }
    }
    return true;
}
//HAR01 End

function isAttributeValidForNode(node, attribute, checkValid) {
  log.info("SAM NOTVALIDFORJSON ATTR: " + attribute.getID() + ":" + node.getObjectType().getID());
  var validObjects = attribute.getValidForObjectTypes();
  var myAttrGroups = attribute.getAttributeGroups().toArray();
  var checkValidResult = false;
  //log.info("SAM NOTVALIDFORJSON: " + myAttrGroups.length);
  for (var i=0; i < myAttrGroups.length; i++) {
  	if(node.getObjectType().getID() == 'JournalDigitalMedia' || node.getObjectType().getID() == 'JournalPrintMedia') {
  		if (myAttrGroups[i].getID() == "NotValidForMedia"){
	  		log.info("SAM NOTVALIDFORMEDIA FALSE");
  			return false;
  		}
  	} else if(node.getObjectType().getID() == 'Journal') {
  		if (myAttrGroups[i].getID() == "NotValidForJournal"){
	  		log.info("SAM NOTVALIDFORJOURNAL FALSE");
  			return false;
  		}
  	} else if(node.getObjectType().getID() == 'JournalDigitalIssues' || node.getObjectType().getID() == 'JournalPrintIssues') {
  		if (myAttrGroups[i].getID() == "NotValidForIssue"){
	  		log.info("SAM NOTVALIDFORISSUE FALSE");
  			return false;
  		}
  	
  	} else if(node.getObjectType().getID() == 'JournalHistoryProducts') {
  		if (myAttrGroups[i].getID() == "NotValidForHistory"){
	  		return false;
  		}
  	
  	} else if(node.getObjectType().getID() == 'Backfiles') {
  		if (myAttrGroups[i].getID() == "NotValidForBackfiles"){
	  		return false;
  		}
  	}
  	if (myAttrGroups[i].getID() == "NotValidForJSON"){
  		log.info("SAM NOTVALIDFORJSON FALSE");
  		return false;
  	} else if (checkValid == "BOM") {
  		if(myAttrGroups[i].getID() == "Include_MJ_Journal_Attr"){
  			log.info("SAM NOTVALIDFORJSON CHECKVALID");
  			checkValidResult = true;
  		}
  		} else if (checkValid == "COL") {
  		if(myAttrGroups[i].getID() == "Collection_Attributes_Extra_Grouping"){
  			log.info("SAM NOTVALIDFORJSON CHECKVALID");
  			checkValidResult = true;
  		} else if (myAttrGroups[i].getID() == "NotValidForCollection") {
		 return false;
		 }
	 }
  }

  if(checkValid != null) {
  	if(checkValidResult) {
  		log.info("SAM NOTVALIDFORJSON CHECKVALID: " + checkValidResult);
  		return true;
  	} else {
  		return false;
  	}
  }
  //if (validObjects.contains(node.getObjectType())) {
    //return true;
  //}
  return true;
}
function getValidAttributes(inputNode,manager,checkValid) {
  var attributeIDs = [];
  var objType = null;

  if(inputNode instanceof com.stibo.core.domain.Node){ //if inputNode is not a Node, then it must be a referenceType.
	  objType = inputNode.getObjectType();
	  //Below section retrieves specification attributes if inputNode is a product.
	  if (objType.isProductType()) {
    		var specificationAttrs = [];	    
     	retrieveInheritedAttributeLinks(inputNode, specificationAttrs,manager);	    
    		specificationAttrs.forEach(function(attr) {
    			//Reshmi...
    			if (isAttributeValidForNode(inputNode, attr, checkValid)) 
    			{
				attributeIDs.push(attr.getID());
			}
		});
		if(checkValid != null) {
  			if(checkValid == "BOM"){
  				var myAttGroup = manager.getAttributeGroupHome().getAttributeGroupByID("Include_MJ_Journal_Attr").getAttributes().toArray();
  				//log.info("SAM VALIDATTRIBUTE SIZE: " + myAttGroup.length);
  				for(var i=0; i<myAttGroup.length; i++) {
		  			attributeIDs.push(myAttGroup[i].getID());
  				}
  			}
  		}
	  }
  }
   else if(inputNode instanceof com.stibo.core.domain.Link)
  {

        var descAttributes = inputNode.getValues().toArray();

        descAttributes.forEach(function (descAttr) {
            //log.info('This is a ref'+inputNode.getReferenceType());
            // log.info("MEEEE: " + descAttr);

            if (isAttributeValidForRef(inputNode, descAttr.getAttribute()))   //HAR01 
            {                                                                  //HAR01
                attributeIDs.push(descAttr.getAttribute().getID());
            }                                                                 //HAR01
        });
        return attributeIDs;
        //var objType = inputNode.getLinkType();

    }
    else {
        objType = inputNode.getReferenceType();

  }
  var descAttributeIDs = [];
  var descAttributes = objType.getValidDescriptionAttributes().toArray();
  descAttributes.forEach(function(descAttr) {
    attributeIDs.push(descAttr.getID());
  });
  return attributeIDs;
}


function getAllValuesAsJSON(inputNode,manager,checkValid) {
  log.info("SAM CHECKVALID: " + manager);
  var values = {};
  var validAttributeArray = getValidAttributes(inputNode,manager,checkValid);
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
		childObjectArray.mediaObject.containers=getDataContainers(childObjectNode);
		childObjects.push(childObjectArray);
	}
	
	return childObjects;
}

// Get Data Containers associated to the Node
function getDataContainers(inputNode){	
	var containerObjs = [];
	var containerObjectforExtract = ["BundleGroup_BundleCode_DataContainer","ISSNHistory_DataContainer", "JournalBackfileContentDataContainer", "JournalOASubcategoriesDataContainer", "JournalImpactFactorDataContainer", "JournalContentReviewDateDataContainer", "JournalExternalPlatformDataContainer", "JournalMarketingInitiativesDataContainer"];
	containerObjectforExtract.push("Ad_Server_DataContainer");   //SKARTHI
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
		else if(containerObjectforExtract[i] == 'JournalOASubcategoriesDataContainer')
		{
			containerArray.type = "JournalOASubcategoriesDataContainer"+"";
		}
		else if(containerObjectforExtract[i] == 'JournalImpactFactorDataContainer')
		{
			containerArray.type = "JournalImpactFactorDataContainer"+"";
		}
		else if(containerObjectforExtract[i] == 'JournalContentReviewDateDataContainer')
		{
			containerArray.type = "JournalContentReviewDateDataContainer"+"";
		}
		else if(containerObjectforExtract[i] == 'JournalBackfileContentDataContainer')
		{
			containerArray.type = "JournalBackfileContentDataContainer"+"";
		}
		else if(containerObjectforExtract[i] == 'JournalExternalPlatformDataContainer')
		{
			containerArray.type = "JournalExternalPlatformDataContainer"+"";
		}
		else if(containerObjectforExtract[i] == 'JournalMarketingInitiativesDataContainer')
		{
			containerArray.type = "JournalMarketingInitiativesDataContainer"+"";
		}
		else if(containerObjectforExtract[i] == 'Ad_Server_DataContainer')   //SKARTHI
		{                                                                   //SKARTHI
			containerArray.type = "Ad_Server_DataContainer"+"";            //SKARTHI
		}                                                             //SKARTHI
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
function getReferencesToValuesAsJSON(inputNode, includedReferenceTypes, embed, checkValid, manager){	
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
				var classLinkedNode = "";
				if(ref.getTarget().getObjectType().getID() == "Journal"){
					classLinkedNode = ref.getTarget();
				}
				else{
					classLinkedNode = ref.getTarget().getParent();
				}
				
				
				var parentClassification = getClassificationRefAsJSON(classLinkedNode, "ProductToCostCenterReferenceLink", embed);
				var parentClassificationValues = parentClassification[0].values;
				var returnValue={}
				for(var key in parentClassificationValues){
					if(key == "IPOwnerSAPCompanyCode"){
						returnValue[key] = parentClassificationValues[key];
						break;					
					}					
				}
				var refValues =  getAllValuesAsJSON(ref.getTarget(),manager,checkValid);
				for(var key in refValues){
					returnValue[key]=refValues[key];
					
				}
				return returnValue;
			}
			
		}
	}
	return referencesObj;
}

function getReferencedByToValuesAsJSON(inputNode, includedReferenceTypes, embed, checkValid, manager){	
	var referencesObj = [];
	var refType = manager.getReferenceTypeHome().getReferenceTypeByID(includedReferenceTypes);
	var refLists = inputNode.queryReferencedBy(refType).asList(100);
	for(var count = 0;count <refLists.size();count++ ){
		var ref = refLists.get(count);
		
		var refTypeID = ref.getReferenceType().getID()+'';
		if(!(includedReferenceTypes.indexOf(refTypeID)==-1)||(includedReferenceTypes=='')){		
			if(embed){
				var classLinkedNode = ref.getSource();
				var returnValue={}
				var journalRefs = [];
				
				var parentClassification = getClassificationRefAsJSON(classLinkedNode,journalRefs , embed);
				for(refCount in parentClassification){
					var parentClassificationValues = parentClassification[refCount].values;
					log.info("Mario: " + parentClassificationValues);
					for(var key in parentClassificationValues){
						log.info("key: " + key);
						if(key == "IPOwnerSAPCompanyCode" || key == "IPOwnerSAPCompanyDescription" || key == "SAPCostCenter" ||key == "SAPProfitCenter"|| key == "SubjectGroup"||key == "SubjectCode"||key == "SubjectLevel2" || key == "stepID" ){
							returnValue[key] = parentClassificationValues[key];
												
						}					
					}
				}
					/*var refValues =  getAllValuesAsJSON(ref.getTarget(),manager,checkValid);
					for(var key in refValues){
						returnValue[key]=refValues[key];
						
					}*/
				
				returnValue["containers"] = getDataContainers(classLinkedNode);
				return returnValue;
			}
			
		}
	}
	return referencesObj;
}

function getReferencedByToValuesAsJSONCollection(inputNode, includedReferenceTypes, embed, checkValid, manager){	
	var referencesObj = [];
	var refType = manager.getReferenceTypeHome().getReferenceTypeByID(includedReferenceTypes);
	var referencedBy = inputNode.getReferencedByProducts().iterator();
	//log.info("Test Reference By" + referencedBy)
	while (referencedBy.hasNext()) {
		refObj = {};
		var reference = referencedBy.next();
		//log.info("Mario reference" + reference);
		var JournalObj = reference.getSource();
		//log.info("Mario Journal Object" + JournalObj);
		var refTypeID = reference.getReferenceType().getID()+'';
		//log.info("Mario refTypeID" + refTypeID);
		if(!(includedReferenceTypes.indexOf(refTypeID)==-1)||(includedReferenceTypes=='')){
			log.info("Included By")
			refObj.referenceType = refTypeID;			
			refObj.referenceValues = getAllValuesAsJSON(reference,manager,checkValid)
			
			
		if(embed){
			log.info("Embed By")
			refObj.target = initialNodeJSON(reference.getSource());
			refObj.target.values = getAllValuesAsJSON(reference.getSource(),manager,checkValid);
		}
		referencesObj.push(refObj);
	}
   
}
    return referencesObj;
}
function getReferencedByToValuesAsJSONHistory(inputNode, includedReferenceTypes, embed, checkValid, manager){	
	var referencesObj = [];
	var refType = manager.getReferenceTypeHome().getReferenceTypeByID(includedReferenceTypes);
	var referencedBy = inputNode.getReferencedByProducts().iterator();
	//log.info("Test Reference By" + referencedBy)
	while (referencedBy.hasNext()) {
		refObj = {};
		var reference = referencedBy.next();
		//log.info("Mario reference" + reference);
		var JournalObj = reference.getSource();
		//log.info("Mario Journal Object" + JournalObj);
		var refTypeID = reference.getReferenceType().getID()+'';
		//log.info("Mario refTypeID" + refTypeID);
		if(!(includedReferenceTypes.indexOf(refTypeID)==-1)||(includedReferenceTypes=='')){
			log.info("Included By")
			refObj.referenceType = refTypeID;			
			refObj.referenceValues = getAllValuesAsJSON(reference,manager,checkValid)
			
			
		if(embed){
			log.info("Embed By")
			refObj.target = initialNodeJSON(reference.getSource());
		//	refObj.target.values = getAllValuesAsJSON(reference.getSource(),manager,checkValid);
		}
		referencesObj.push(refObj);
	}
   
}
    return referencesObj;
}
/*===== business library exports - this part will not be imported to STEP =====*/
exports.initialNodeJSON = initialNodeJSON
exports.getClassificationRefAsJSON = getClassificationRefAsJSON
exports.getParentClassificationNodesJSON = getParentClassificationNodesJSON
exports.getReferencesAsJSON = getReferencesAsJSON
exports.retrieveInheritedAttributeLinks = retrieveInheritedAttributeLinks
exports.addLinkedAttributeIDsToArray = addLinkedAttributeIDsToArray
exports.addLinkedAttributeIDsToArrayIssues = addLinkedAttributeIDsToArrayIssues
exports.addLinkedAttributeIDsToArrayNONJ = addLinkedAttributeIDsToArrayNONJ
exports.addLinkedAttributeIDsToArrayBACKFILE = addLinkedAttributeIDsToArrayBACKFILE
exports.addLinkedAttributeIDsToArrayHistory = addLinkedAttributeIDsToArrayHistory
exports.addLinkedAttributeIDsToArrayMJ = addLinkedAttributeIDsToArrayMJ
exports.addLinkedAttributeIDsToArrayMM = addLinkedAttributeIDsToArrayMM
exports.addLinkedAttributeIDsToArrayCollections = addLinkedAttributeIDsToArrayCollections
exports.isAttributeValidForRef = isAttributeValidForRef
exports.isAttributeValidForNode = isAttributeValidForNode
exports.getValidAttributes = getValidAttributes
exports.getAllValuesAsJSON = getAllValuesAsJSON
exports.getAttributeValue = getAttributeValue
exports.getChildObjects = getChildObjects
exports.getDataContainers = getDataContainers
exports.getDataContainerObjects = getDataContainerObjects
exports.getContainerAttrValues = getContainerAttrValues
exports.getReferencesToValuesAsJSON = getReferencesToValuesAsJSON
exports.getReferencedByToValuesAsJSON = getReferencedByToValuesAsJSON
exports.getReferencedByToValuesAsJSONCollection = getReferencedByToValuesAsJSONCollection
exports.getReferencedByToValuesAsJSONHistory = getReferencedByToValuesAsJSONHistory