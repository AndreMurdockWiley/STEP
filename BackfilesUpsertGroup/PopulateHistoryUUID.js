/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PopulateHistoryUUID",
  "type" : "BusinessAction",
  "setupGroups" : [ "BackfilesUpsertGroup" ],
  "name" : "Populate History UUID in Backfile DC",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Backfiles" ],
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
    "contract" : "ManagerBindContract",
    "alias" : "manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "QueryHomeBindContract",
    "alias" : "query",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,manager,query) {
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

var dataContainers = getDataContainerObjects(NODE, "JournalBackfileContentDataContainer");
var iter = dataContainers.iterator();
var dc = "";
var journalcodeBackfile = "";
var ISSN = "";
var HistoryUUID = "";
var journalcodeHistory = "";
var Autopopulate = "";
var prodID = ""; // Declare prodID outside the loop

while (iter.hasNext()) {
    dc = iter.next().getDataContainerObject();
    journalcodeBackfile = dc.getValue("JournalBackfileContentJournalGroupCode").getSimpleValue();
    ISSN = dc.getValue("JournalBackfileContentISSN").getSimpleValue();
    HistoryUUID = dc.getValue("BackfileDCHistoryUUID").getSimpleValue();
    Autopopulate = dc.getValue("BackfileAutopopulateHistoryUUID").getSimpleValue();
  //  log.info("journalcodeBackfile: " + journalcodeBackfile);
   // log.info("ISSN: " + ISSN);
  //  log.info("HistoryUUID: " + HistoryUUID);
  //  log.info("Autopopulate: " + Autopopulate);
if(Autopopulate == "Yes"){
    var c = com.stibo.query.condition.Conditions;
    var h = manager.getHome(com.stibo.query.home.QueryHome);
    var ObjType = manager.getObjectTypeHome().getObjectTypeByID("JournalHistoryProducts");
    var attr = manager.getAttributeHome().getAttributeByID("JournalGroupCode");
    var printISSN = manager.getAttributeHome().getAttributeByID("JournalHistoryISSNPrint");
    var OnlineISSN = manager.getAttributeHome().getAttributeByID("JournalHistoryISSNOnline");
    var spec = h.queryFor(com.stibo.core.domain.Product).where(
    c.objectType(ObjType)
    .and(
        c.valueOf(attr).eq(journalcodeBackfile)
        .and(
            c.valueOf(printISSN).eq(ISSN)
            .or(c.valueOf(OnlineISSN).eq(ISSN))
        )
    )
);
    var result = spec.execute().asList("50");
    var amountOfProducts = result.size();
		var products = result.toArray();
		var prodcount = amountOfProducts;
		//log.info("amountOfProducts" + amountOfProducts);
		if (prodcount==1){
		for (var j = 0; j < amountOfProducts; j++) {
			var productID2 = products[j];
			prodID = productID2.getID();
          //log.info("prodID: " + prodID);
		// var prodIDs=[];
		//  prodIDs.push(prodID); // Add product ID to the array
         //log.info("prodID: " + prodID);    
		}
   
    dc.getValue("BackfileDCHistoryUUID").setSimpleValue(prodID);
   //log.info("history id: " + dc.getValue("BackfileDCHistoryUUID").getSimpleValue());
		}
		else if (prodcount>1 || prodcount<1){
			 dc.getValue("BackfileDCHistoryUUID").setSimpleValue(null);
   			// log.info("history id: " + dc.getValue("BackfileDCHistoryUUID").getSimpleValue());
		}
}
dc.getValue("BackfileAutopopulateHistoryUUID").setSimpleValue("No");
}
}