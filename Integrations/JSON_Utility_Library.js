/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JSON_Utility_Library",
  "type" : "BusinessLibrary",
  "setupGroups" : [ "Integrations" ],
  "name" : "JSWA_Utility_Library",
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
function retrieveInheritedAttributeLinks(node, array) {
  array = addLinkedAttributeIDsToArray(node, array);
  var parent = node.getParent();
  if (parent) {
    retrieveInheritedAttributeLinks(parent, array);
  }
  return array;
}
function addLinkedAttributeIDsToArray(sourceNode, array) {
  var linkAttribs = sourceNode.getAttributeLinks();
  var itr = linkAttribs.iterator();
  while (itr.hasNext()) {
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
  var objType = inputNode.getObjectType();
  //Below section retrieves specification attributes if inputNode is a product.
  if (objType.isProductType()) {
    var specificationAttrs = [];
    retrieveInheritedAttributeLinks(inputNode, specificationAttrs);
    specificationAttrs.forEach(function(attr) {
      if (isAttributeValidForNode(inputNode, attr)) {
        attributeIDs.push(attr.getID());
      }
    });
  }
  //Concludes section on spec attributes. Below incorporates description attributes.
  var descAttributeIDs = [];
  var descAttributes = objType.getValidDescriptionAttributes().toArray();
  descAttributes.forEach(function(descAttr) {
    attributeIDs.push(descAttr.getID());
  });
  return attributeIDs;
}
function getAttributeValue(node, attributeID) {
  var valueObject = node.getValue(attributeID);
  if (valueObject.getAttribute().isMultiValued()) {
    return getArrayFromMultiValue(valueObject);
  }
  var attributeValue = valueObject.getSimpleValue();
  return attributeValue ? attributeValue + "" : "";
}
function getAttributeValueID(node, attribute) {
  var valueObject = node.getValue(attribute.getID());
  if (valueObject.getAttribute().isMultiValued()) {
    return null;
  }
  var valueObject = node.getValue(attribute.getID());
  var value = valueObject.getSimpleValue();
  var lov = attribute.getListOfValues();
  if (lov) {
    if (lov.isUsingValueIDs()) {
      var valueID = valueObject.getID();
      return valueID ? valueID + "" : "";
    }
  }
  return null;
}
function getAllValuesAsJSON(inputNode) {
  var values = {};
  var validAttributeArray = getValidAttributes(inputNode);
  validAttributeArray.forEach(function(attr) {
    values[attr] = getAttributeValue(inputNode, attr);
  });
  return values;
}
function getArrayFromMultiValue(valueObject) {
	log.info(valueObject.getValues());
  var array = [];
  for (var value in Iterator(valueObject.getValues())) {
  	log.info(value);
    array.push(value.getSimpleValue() + "");
  }
  return array;
}
;
/*===== business library exports - this part will not be imported to STEP =====*/
exports.retrieveInheritedAttributeLinks = retrieveInheritedAttributeLinks
exports.addLinkedAttributeIDsToArray = addLinkedAttributeIDsToArray
exports.isAttributeValidForNode = isAttributeValidForNode
exports.getValidAttributes = getValidAttributes
exports.getAttributeValue = getAttributeValue
exports.getAttributeValueID = getAttributeValueID
exports.getAllValuesAsJSON = getAllValuesAsJSON
exports.getArrayFromMultiValue = getArrayFromMultiValue