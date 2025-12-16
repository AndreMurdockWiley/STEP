/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BACheckSequenceCode",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalUpsertGroup" ],
  "name" : "Fetch Subject Group Name & Subject Code",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : true,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "ManagerBindContract",
    "alias" : "mgr",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (mgr,node) {
const ATT_SEQUENCE_CODE_ID = "SubjectCodeSequence";
const ATT_SUB_GRP_NAME_ID = "SubjectGroupName";
const ATT_DSPY_PRI_SUB_GRP_ID = "DisplayPrimarySubjectGroup";
const ATT_SUB_CODE_NAME_ID = "SubjectCodeName";
const ATT_DSPY_PRI_SUB_COD_ID = "DisplayPrimarySubjectCode";


var LINK_TYPE = mgr.getLinkTypeHome().getClassificationProductLinkTypeByID("ProductToSubjectHierarchyLink");

var list = node.queryClassificationProductLinks(LINK_TYPE).asList(100);

 for(var index = 0; index < list.size(); index++){
 	var subjectHierachyLink = list.get(index);
 	var group_Classification = subjectHierachyLink.getClassification();
 	var sequencecodeValue = subjectHierachyLink.getValue(ATT_SEQUENCE_CODE_ID).getSimpleValue();
 	logger.info(sequencecodeValue);
 
 	if(sequencecodeValue == 1){
 	
 	 node.getValue(ATT_DSPY_PRI_SUB_GRP_ID).setSimpleValue(group_Classification.getValue(ATT_SUB_GRP_NAME_ID).getSimpleValue());
 	  node.getValue(ATT_DSPY_PRI_SUB_COD_ID).setSimpleValue(group_Classification.getValue(ATT_SUB_CODE_NAME_ID).getSimpleValue());
 	 
 	}
 	}
 	
 //}

}