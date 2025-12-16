/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BF_TargetSearchFunctionForJournalObjects",
  "type" : "BusinessFunction",
  "setupGroups" : [ "Functions" ],
  "name" : "Target Search Function for Journal Objects",
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
  "pluginId" : "JavaScriptBusinessFunctionWithBinds",
  "binds" : [ {
    "contract" : "ManagerBindContract",
    "alias" : "step",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation",
  "functionReturnType" : "com.stibo.query.home.QuerySpecification",
  "functionParameterBinds" : [ {
    "contract" : "NodeBindContract",
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : ""
  }, {
    "contract" : "StringBindContract",
    "alias" : "searchString",
    "parameterClass" : "null",
    "value" : null,
    "description" : ""
  } ]
}
*/
exports.operation0 = function (step,node,searchString) {
var conditions = com.stibo.query.condition.Conditions;
var queryHome = step.getHome(com.stibo.query.home.QueryHome);
var cond = null;
var searchStringModify = searchString.replace("*","");
searchStringModify.replace("?","");
var rootNode = step.getProductHome().getProductByID("Journals_Hierarchy");
var journalObjType = step.getObjectTypeHome().getObjectTypeByID("Journal");
var querySpecification1 = queryHome.queryFor(com.stibo.core.domain.Product).where(conditions.hierarchy().simpleBelow(rootNode).and(conditions.objectType(journalObjType)).and(conditions.name().ignoreCase().like(searchStringModify+"*")));
var queryJournal = querySpecification1.execute().asList(100).toArray();

for(var i =0;queryJournal.length>i;i++){
	var journalObj = queryJournal[i]; 
	if(!cond){
		cond=conditions.id().eq(journalObj.getID());
	}
	else{
		cond=cond.or(conditions.id().eq(journalObj.getID()));
	}
	
}
var querySpecification = queryHome.queryFor(com.stibo.core.domain.Product).where(cond);

if(queryJournal.length>0){
	return querySpecification;
}else{
	var querySpecification = queryHome.queryFor(com.stibo.core.domain.Product).where(conditions.objectType(journalObjType).and(conditions.id().eq("null")));
	return querySpecification;
}
}