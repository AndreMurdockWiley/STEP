/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_ChangeRefMetaDataValue",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "Change Ref Meta Data Value",
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
    "alias" : "step",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,step) {
var refType = step.getReferenceTypeHome().getReferenceTypeByID("ProductToSocietyGroupReferenceLink");
var ref = node.queryReferences(refType);
if(ref)
{
	var refList = ref.asList(100000);
	for(var i = 0;i<refList.size();i++)
	{
		var refInstance = refList.get(i);
		var attrValueID = refInstance.getValue("SocietyPrimaryAffiliated").getID();
		if(attrValueID == "P")
		{
			refInstance.getValue("SocietyPrimaryAffiliated").setLOVValueByID("O");
			node.approve();
		}
		else if(attrValueID == "A")
		{
			refInstance.getValue("SocietyPrimaryAffiliated").setLOVValueByID("B");
			node.approve();
		}
	}
}
}