/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JournallOARevenueSubcateriesDC_Populate",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalWorkflowGroup" ],
  "name" : "Populate OA Revenue Subcategories DC",
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
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "web",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,web) {
function getDataContainerObjects(NODE, containerID) {
    var dcWrapper = NODE.getDataContainerByTypeID(containerID);
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


var dataContainers = getDataContainerObjects(NODE, "JournalOASubcategoriesDataContainer");

log.info(dataContainers.size())

// Convert the HashSet (or other collection) to an ArrayList to access the last element
var containerList = new java.util.ArrayList(dataContainers);
// Get the size of the list
var size = containerList.size();
log.info(size)
if (size == 1) {
        var element = containerList.get(0);
    
    dc = element.getDataContainerObject();
    
    OAStartDate = dc.getValue("JournalOASubcategoriesStartDate").getSimpleValue();
    OAEndDate = dc.getValue("JournalOASubcategoriesEndDate").getSimpleValue();
    OASubCategories = dc.getValue("JournalOASubcategories").getSimpleValue();
    if (!OAStartDate) {
            web.showAlert("WARNING", "OA Revenue Subcategories Start Date must be populated on OASubcategory. Add the date to proceed.");
        }

//remove if the user don't want to add end date. confirm with Iain
//else if (!OAEndDate){
//            web.showAlert("WARNING", "OA Revenue Subcategories End Date must be populated on previous OASubcategory. Add the date to proceed.");
//        }
}
else{
	var flag=0;
	var elemArr = [];
	for(var i=0; i<size;i++){

    log.info("pass else")
    var element = containerList.get(i);
    
    elemArr.push(element.getDataContainerObject().getID());
    }
    
	log.info("pass else sizze:"+size)
	var sortedIDs = elemArr.sort();
	log.info(sortedIDs[size-1])
	for(var i=0; i<size;i++){

    log.info("pass else")
    var element = containerList.get(i);
    
    dc = element.getDataContainerObject();
    if(sortedIDs[size-1]!=element.getDataContainerObject().getID()){
    OAStartDate = dc.getValue("JournalOASubcategoriesStartDate").getSimpleValue();
    OAEndDate = dc.getValue("JournalOASubcategoriesEndDate").getSimpleValue();
    OASubCategories = dc.getValue("JournalOASubcategories").getSimpleValue();
    log.info("OASubCategories "+ OASubCategories);
    log.info("OAStartDate "+ OAStartDate);
    log.info("OAEndDate "+ OAEndDate);
    log.info(element.getDataContainerObject().getID())
     OAStartDate = dc.getValue("JournalOASubcategoriesStartDate").getSimpleValue();
	if (!OAStartDate) {
            web.showAlert("WARNING", "OA Revenue Subcategories Start Date must be populated on OASubcategory. Add the date to proceed.");
        }
    if (!OAEndDate) {
    	log.info("not passed ED")
           web.showAlert("WARNING", "OA Revenue Subcategories End Date must be populated on previous OASubcategory. Add the date to proceed.");
            flag=1;
break;
        }

    
}
}}
 if(flag==0){
 	for(var i=0; i<size;i++){

    log.info("pass else")
    var element = containerList.get(i);
    if(sortedIDs[size-1]==element.getDataContainerObject().getID()){
	var dc = element.getDataContainerObject();
   
    OAStartDate = dc.getValue("JournalOASubcategoriesStartDate").getSimpleValue();
	if (!OAStartDate) {
            web.showAlert("WARNING", "OA Revenue Subcategories Start Date must be populated on OASubcategory. Add the date to proceed.");
        }
    }
    }
 }
}