/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BC_MultiMedia_Check",
  "type" : "BusinessCondition",
  "setupGroups" : [ "Conditions" ],
  "name" : "MultiMedia BOM Check",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessConditionWithBinds",
  "binds" : [ {
    "contract" : "LoggerBindContract",
    "alias" : "log",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "node",
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
exports.operation0 = function (log,node,manager) {
//Condition will check if there is both a Print and Digital journal offering of the same Journal Group Code

var digitalOfferingCheck1 = false;
var printOfferingCheck2 = false;

var children = node.getChildren();
var targetObjectType1 = "Journal Group";
var targetObjectType2 = "Journal_Offering_Print";
var targetObjectType3 = "Journal_Offering_Digital";

for (var i = 0; i < children.size(); i++) {
	var currentObject = children.get(i);
	if(currentObject == "Volumes_Digital" || currentObject == "Volumes_Print" || currentObject == "Issues_Digital" || currentObject == "Issues_Print" || currentObject == "Articles_Digital"){
		//objects do not apply
	}
	else{
		//log.info("Object type = " + currentObject.getObjectType());
//Check to see if Children of Journal Group are Journal OFfering Print and Journal Offering Digital
		if(currentObject.getObjectType() == targetObjectType2 ){
			//journal has digital offering
			printOfferingCheck1 = true;
		}
		if(currentObject.getObjectType() == targetObjectType2){
			//journal has print offering or both
			digitalOfferingCheck2 = true;
		}
		if(currentObject.getObjectType() == targetObjectType3){
			volumeGroupCheck = true;
		}
	}
}
if(digitalOfferingCheck1 == true && volumeGroupCheck == true && printOfferingCheck2 == true){
	//journal had digital offering
	return true;
}
else{
	//journal had print offering or both
	return false;
}
}