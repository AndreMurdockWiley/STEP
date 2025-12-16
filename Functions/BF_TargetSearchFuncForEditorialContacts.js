/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BF_TargetSearchFuncForEditorialContacts",
  "type" : "BusinessFunction",
  "setupGroups" : [ "Functions" ],
  "name" : "Target Search Function for Editorial Contact Objects",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : true,
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
  }, {
    "contract" : "AttributeBindContract",
    "alias" : "email",
    "parameterClass" : "com.stibo.core.domain.impl.AttributeImpl",
    "value" : "EditorialContactCode",
    "description" : null
  }, {
    "contract" : "AttributeBindContract",
    "alias" : "editorialCode",
    "parameterClass" : "com.stibo.core.domain.impl.AttributeImpl",
    "value" : "EditorialContactEmail",
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
exports.operation0 = function (step,email,editorialCode,node,searchString) {
var conditions = com.stibo.query.condition.Conditions;
var queryHome = step.getHome(com.stibo.query.home.QueryHome);
var cond = null;
var searchStringModify = searchString.replace("*","");
searchStringModify.replace("?","");
var rootNode = step.getEntityHome().getEntityByID("EditorialContacts");
var editorialContactObjType = step.getObjectTypeHome().getObjectTypeByID("EditorialContact");
var querySpecification1 = queryHome.queryFor(com.stibo.core.domain.entity.Entity).where(conditions.hierarchy().simpleBelow(rootNode).and(conditions.objectType(editorialContactObjType)).and(conditions.name().ignoreCase().like(searchStringModify+"*")));
var queryEditorialContact = querySpecification1.execute().asList(100).toArray();

for(var i =0;queryEditorialContact.length>i;i++){
	var editorialContactObj = queryEditorialContact[i]; 
	log.info(editorialContactObj.getName())
	if(!cond){
		cond=conditions.id().eq(editorialContactObj.getID());

	}
	else{
		cond=cond.or(conditions.id().eq(editorialContactObj.getID()));
	}
	
}

var querySpecification = queryHome.queryFor(com.stibo.core.domain.entity.Entity).where(cond);

if(queryEditorialContact.length>0){
	return querySpecification;
}else{
	var querySpecification = queryHome.queryFor(com.stibo.core.domain.entity.Entity).where(conditions.objectType(editorialContactObjType).and(conditions.valueOf(editorialCode).ignoreCase().like(searchStringModify+"*")).or(conditions.valueOf(email).ignoreCase().like(searchStringModify+"*")));
	log.info("querySpecification : "+conditions.id())
	return querySpecification;
}

}