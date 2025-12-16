/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Backfile_Date_Conversion",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "Backfile Date Conversion",
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
    "contract" : "LoggerBindContract",
    "alias" : "log",
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
exports.operation0 = function (log,manager,node) {
//Grab the length of the Date attribute 
//970101 
//1000101 = 2000-01-01
//var dummyDate = new java.lang.String();
//dummyDate = "970101";

//Janis Date attributes: JANISJournalBackfileLatestPriceDate, JANISJournalBackfileDateWentLive
//Rule resets Janis Date values for the STEP Date attributes: JournalBackfileLatestPriceDate, JournalBackfileDateWentLive
var janisDateAttribGroup = manager.getAttributeGroupHome().getAttributeGroupByID('AG_JANIS_BackfileDates');
var attributeList = janisDateAttribGroup.getAttributes().toArray();
log.info(attributeList.length);
for(var i = 0; i < attributeList.length; i++){
	var attributeID = attributeList[i].getID();
	var dummyDate = node.getValue(attributeID).getSimpleValue();
	
	//The date returned has format YYYY-MM-DD, why are we trying to convert this?
	log.info("Dummy Date: " + dummyDate);
	if(dummyDate != null){
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
		
		}
		//need to make this a "date" type, not a string, here is some example code to accomplish that
		var simpleDateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd");
		var pubDateFixed = new Date(simpleDateFormat.parse(finalDate));
		if(attributeID == "JANISJournalBackfileLatestPriceDate"){
			node.getValue("JournalBackfileLatestPriceDate").setValue(simpleDateFormat.format(pubDateFixed));
		}
		else if(attributeID == "JANISJournalBackfileDateWentLive"){
			node.getValue("JournalBackfileDateWentLive").setValue(simpleDateFormat.format(pubDateFixed));
		}
		else if(attributeID == "JANISBackfileProductPublicationDate"){
			node.getValue("ProductPublicationDate").setValue(simpleDateFormat.format(pubDateFixed));
	}
	}
}

}