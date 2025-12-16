/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Generic_Search_Functions",
  "type" : "BusinessLibrary",
  "setupGroups" : [ "Libraries" ],
  "name" : "Generic Search Functions",
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
function search_object_using_key(node, identifier_key, object_key_value)
{	
	var prod = node.getObjectByKey(identifier_key, object_key_value);
	if(!prod)
	{
		return false;
	}
	return prod;
}

/*===== business library exports - this part will not be imported to STEP =====*/
exports.search_object_using_key = search_object_using_key