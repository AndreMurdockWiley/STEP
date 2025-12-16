/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Automatic Pub Year Creation (OLD)",
  "type" : "BusinessAction",
  "setupGroups" : [ "PubYearUpsertGroup" ],
  "name" : "Automatic Pub Year Creation (OLD)",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "JournalDigitalMedia" ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "PublicationYearUtilityLibrary",
    "libraryAlias" : "pubLib"
  } ]
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
exports.operation0 = function (node,web,pubLib) {
//add a web UI message communicating the years which have been created. Can use the returned year object.
//year.getValue("ProductPublicationYear").getSimpleValue(yearInput);

var selection = web.getSelection().iterator();
while (selection.hasNext()){
	var media = selection.next();

	if(media.getValue("JournalMediaCode").getSimpleValue() == "Print"){
		var mediaStatusAtrID = "ProductStatus";
	}else{
		var mediaStatusAtrID = "ProductStatus";
	}
	
	var type = media.getValue(mediaStatusAtrID).getSimpleValue();
	
	if(type == "Not Yet Published" || type == "Current publication"){

		var status = media.getValue("JournalFinanceProductType").getSimpleValue()
		if (status == "Rolling") {
			var year1 = pubLib.createNextYear(media);
			//var year2 = pubLib.createNextYear(media);
			//var msg = "Years " + year1.getValue("ProductPublicationYear").getSimpleValue() + " and " + year2.getValue("ProductPublicationYear").getSimpleValue() + " have been created.";
			var msg = "Year1 " + year1.getValue("ProductPublicationYear").getSimpleValue() + " has been created.";
		} else if (status == "Calendar") {
			var year = pubLib.createNextYear(media);
			var msg = "Year " + year.getValue("ProductPublicationYear").getSimpleValue() + " has been created.";
		}
	}
}

if(msg){
	var headline = "Automatic creation was successful!";
	var severity = "ACKNOWLEDGEMENT";
	web.showAlert(severity,headline,msg);
} else {
	var headline = "No selected media objects met the criteria for automatic creation.";
	var severity = "WARNING";
	web.showAlert(severity,headline,"");
}

}