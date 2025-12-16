/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "ReannouncePubYearVolumes",
  "type" : "BusinessAction",
  "setupGroups" : [ "ReannouncementGroup" ],
  "name" : "Reannounce Pub Year Volumes",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalDigitalVolumes", "Journal", "JournalDigitalIssues" ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "PublicationYearFunctions",
    "libraryAlias" : "pubLibrary"
  } ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "UI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "AttributeValidatedContextParameterStringBinding",
    "alias" : "pubYear",
    "parameterClass" : "com.stibo.core.domain.businessrule.attributecontextparameter.AttributeValidatedContextParameter",
    "value" : "<AttributeValidatedContextParameter>\n  <Parameters>\n    <Parameter ID=\"Attribute\" Type=\"java.lang.String\">PHPublicationYear</Parameter>\n    <Parameter ID=\"ID\" Type=\"java.lang.String\">pubYear</Parameter>\n  </Parameters>\n</AttributeValidatedContextParameter>",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (LOG,UI,pubYear,pubLibrary) {
var selection = UI.getSelection().iterator();
while (selection.hasNext()){
	var NODE = selection.next();
	var currentPubYear = NODE.getParent();
	var headline = "Reannouncement succesfully executed!";
	var body = "Year " + currentPubYear.getName() + " has been deleted since all it's volumes have been moved.";
	var severity = "ACKNOWLEDGEMENT";
	var pubYearParentNode = NODE.getParent().getParent();
	var newYear = pubYear;
	var newPubYear = pubLibrary.createYear(pubYearParentNode,newYear);
	newPubYear.approve();
	
	NODE.setParent(newPubYear);
	NODE.approve();
	UI.showAlert(severity,headline);

	if (currentPubYear.getChildren().size() == 0){
		currentPubYear.delete().approve();

		UI.showAlert(severity,headline,body);
		
		
			UI.navigate("DigitalPublicationYearScreen", newPubYear);
		
	}
	
}
}