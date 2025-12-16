/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "CollectionContentDateConversion",
  "type" : "BusinessAction",
  "setupGroups" : [ "CollectionsGroup" ],
  "name" : "Collection Content Date Conversion",
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
  "pluginId" : "JavaScriptBusinessActionWithBinds",
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
  }, {
    "contract" : "ReferenceTypeBindContract",
    "alias" : "COLLECTIONS_TO_JOURNALS",
    "parameterClass" : "com.stibo.core.domain.impl.ReferenceTypeImpl",
    "value" : "COLLECTIONS_TO_JOURNALS",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (log,node,manager,COLLECTIONS_TO_JOURNALS) {
//Grab the length of the Date attribute 
//970101 
//1000101 = 2000-01-01
//AG_JANISDATEATTRIBUTES
//var dummyDate = new java.lang.String();
//dummyDate = "970101";
var attributeID = "";
var dummyDate = "";
//var nodde = node.getSelection().iterator().next();
//logger.info(nodde);
//Janis Date attributes: JanisJounralEditorialAuthorServicesDt, JanisJournalStartDate, JanisJournalRightsFromWhatDate
//Rule resets Janis Date values for the STEP Date attributes: JournalEditorialAuthorServicesEnabldDt, JournalStartDate, JournalRightsFromWhatDate
//var janisDateAttribGroup = manager.getAttributeGroupHome().getAttributeGroupByID('AG_Collection_JanisDateAttributes');
//logger.info(janisDateAttribGroup +  "  janisDateAttribGroup");
//var attributeList = janisDateAttribGroup.getAttributes().toArray();
	var refTypeJRCol = manager.getReferenceTypeHome().getReferenceTypeByID("COLLECTIONS_TO_JOURNALS");
//	logger.info(refTypeJRCol)
var myJRColRefs = node.queryReferences(refTypeJRCol).asList(1000);
logger.info(myJRColRefs +  "  myJRColRefs");
	//var JRsSet = new java.util.HashSet();
//for(var j = 0; j< myJRColRefs.size(); j++) {
	//	var myMJDigRef = myJRColRefs.get(j);
	//	var g = myMJDigRef.getValue("ComponentContentLicenseStartDate").getSimpleValue() 
		//logger.info(g +   "  jdjjf")
	//JRsSet.add(myJRColRefs[j]);
//var all = node.getValue("CollectionCode").getSimpleValue();
//logger.info(all)
  //  log.info(attributeList.length);
//for(var i = 0; i < attributeList.length; i++){
//	var attributeID = attributeList[i].getID();
//	logger.info(attributeID +  " attributeID")

//var characteristics = janisDateAttribGroup.getAttributes();
//var iter = characteristics.iterator();
//while (iter.hasNext()){
//	var attribute = iter.next();	
	//var idAttribute = attribute.getID();
	//logger.info(idAttribute +  "   idAttribute");
	//toApprove.push(idAttribute);

	for(var j = 0; j< myJRColRefs.size(); j++){
		var digref = myJRColRefs.get(j);
		//logger.info(digref);
		var myMJDigRef = myJRColRefs.get(j).getTarget();
		//var difRef = myMJDigRef.getTarget();
		//logger.info(difRef  + " difref")
		var digicod = myMJDigRef.getValue("DigitalJournalCode").getSimpleValue();
		logger.info(digicod +  "  digicode")
		log.info("JanisStart " + myMJDigRef.getValue("JanisComponentContentLicenseStartDate").getSimpleValue() + " ");
		log.info("JanisEnd " + myMJDigRef.getValue("JanisComponentContentLicenseEndDate").getSimpleValue() + " ");
		//myMJDigRef.getValue("ComponentContentLicenseStartDate").setValue(simpleDateFormat.format(pubDateFixed));
		//log.info("Component Content License StartDate " + myMJDigRef.getValue("ComponentContentLicenseStartDate").getSimpleValue() + " ");
		//log.info("Component Content License EndDate " + myMJDigRef.getValue("ComponentContentLicenseEndDate").getSimpleValue() + " ");
		//myMJDigRef.getValue("ComponentContentLicenseStartDate").setSimpleValue(COLStartdate);
		//myMJDigRef.getValue("ComponentContentLicenseEndDate").setSimpleValue(COLEnddate);
		var start = myMJDigRef.getValue("JanisComponentContentLicenseStartDate").getSimpleValue();
		//logger.info(start);
		
	//var dummyDate = myMJDigRef.getValue("JanisComponentContentLicenseStartDate").getSimpleValue();
	//logger.info(dummyDate +  "  dummydate");
//	var dummyDate2 =  myMJDigRef.getValue("JanisComponentContentLicenseEndDate").getSimpleValue();
	var janisDateAttribGroup = manager.getAttributeGroupHome().getAttributeGroupByID('AG_Collection_JanisDateAttributes');
logger.info(janisDateAttribGroup +  "  janisDateAttribGroup");
var attributeList = janisDateAttribGroup.getAttributes().toArray();
//logger.info(attributeList.length + " attributeList");
var characteristics = janisDateAttribGroup.getAttributes();
var iter = characteristics.iterator();
while (iter.hasNext()){
	var attribute = iter.next();	
	var idAttribute = attribute.getID();
	logger.info(idAttribute + "  idAttribute");
	var dummyDate = myMJDigRef.getValue(idAttribute).getSimpleValue();
	logger.info(dummyDate +  "  dummydate");

	if(dummyDate != null){
		var dateLength = "" + dummyDate.length();
		logger.info( dateLength + " dateLength");
		var finalDate = "";
	
		//Please provide an example of a date in the wrong century
		if (dateLength == 6) {
				//date is 20th century
				var year = dummyDate.substring(0,2);
				year = "19" + year;
				var month = dummyDate.substring(2,4);
				var day = dummyDate.substring(4,6);
				var hyphen = "-";
				//var newDate = year.concat(hyphen, month, hyphen, day);
				finalDate = year + hyphen + month + hyphen + day;
			//	log.info("Final Date 1: " + finalDate);
				
		} else {
				//date is 21st century
				var year = dummyDate.substring(0,3);
				year = "20" + year.substring(1,3)
				//Please provide an example of a date in the wrong century, but would have a "0" year
				//If this all falls through to here, why do we need to do a new format?
				
				var month = dummyDate.substring(3,5);
				var day = dummyDate.substring(5,7);
				var hyphen = "-";
				finalDate = year + hyphen + month + hyphen + day;
				//log.info("Final Date 1: " + finalDate);
		
		}
var simpleDateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd");
		var pubDateFixed = new Date(simpleDateFormat.parse(finalDate));
		logger.info(pubDateFixed +   "   pubDateFixed");
		//logger.info(node.getValue("ComponentContentLicenseStartDate").getSimpleValue() + "check");
	//	if(idAttribute == "JanisComponentContentLicenseStartDate") {
	//digref.getValue("ComponentContentLicenseStartDate").setValue(simpleDateFormat.format(pubDateFixed));
	//logger.info(digref.getValue("ComponentContentLicenseStartDate").getSimpleValue() + "check");
		//}
	

		
		
		try{
			
				if(idAttribute == "JanisComponentContentLicenseStartDate") {
			digref.getValue("ComponentContentLicenseStartDate").setValue(simpleDateFormat.format(pubDateFixed));
			//logger.info("myMJDigRef");
		}
		else if(idAttribute == "JanisComponentContentLicenseEndDate"){
			digref.getValue("ComponentContentLicenseEndDate").setValue(simpleDateFormat.format(pubDateFixed));
	}
		} catch(e){
		logger.info("catched")
		}
	
}
}
	}


	//The date returned has format YYYY-MM-DD, why are we trying to convert this?
	//log.info("Dummy Date: " + dummyDate);
/*	if(dummyDate != null){
		var dateLength = "" + dummyDate.length();
		var finalDate = "";
	
		//Please provide an example of a date in the wrong century
		if (dateLength == 6) {
				//date is 20th century
				var year = dummyDate.substring(0,2);
				year = "19" + year;
				var month = dummyDate.substring(2,4);
				var day = dummyDate.substring(4,6);
				var hyphen = "-";
				//var newDate = year.concat(hyphen, month, hyphen, day);
				finalDate = year + hyphen + month + hyphen + day;
				log.info("Final Date 1: " + finalDate);
				
		} else {
				//date is 21st century
				var year = dummyDate.substring(0,3);
				year = "20" + year.substring(1,3)
				//Please provide an example of a date in the wrong century, but would have a "0" year
				//If this all falls through to here, why do we need to do a new format?
				
				var month = dummyDate.substring(3,5);
				var day = dummyDate.substring(5,7);
				var hyphen = "-";
				finalDate = year + hyphen + month + hyphen + day;
				log.info("Final Date 1: " + finalDate);
		
		}*/
		//var simpleDateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd");
		//var pubDateFixed = new Date(simpleDateFormat.parse(finalDate));
		//logger.info(pubDateFixed +   "   pubDateFixed");
		//if(attributeID == "JanisComponentContentLicenseStartDate") {
			//myMJDigRef.getValue("ComponentContentLicenseStartDate").setValue(simpleDateFormat.format(pubDateFixed));
			//logger.info("myMJDigRef");
		//}
	//	else if(attributeID == "JanisComponentContentLicenseEndDate"){
		//	myMJDigRef.getValue("ComponentContentLicenseEndDate").setValue(simpleDateFormat.format(pubDateFixed));
	//	}
		//}
//	}
		//need to make this a "date" type, not a string, here is some example code to accomplish that
		

		
		
		//log.info("Component Content License StartDate " + myMJDigRef.getValue("ComponentContentLicenseStartDate").getSimpleValue() + " "+myMJDigRef.getTarget().getID());
		//log.info("Component Content License EndDate " + myMJDigRef.getValue("ComponentContentLicenseEndDate").getSimpleValue() + " "+myMJDigRef.getTarget().getID());
		//myMJDigRef.getValue("ComponentContentLicenseStartDate").setSimpleValue(COLStartdate);
		//myMJDigRef.getValue("ComponentContentLicenseEndDate").setSimpleValue(COLEnddate);
		
		
		
	
	

}