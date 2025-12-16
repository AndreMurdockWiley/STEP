/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "JournalFunctions",
  "type" : "BusinessLibrary",
  "setupGroups" : [ "Libraries" ],
  "name" : "Journal Functions",
  "description" : null,
  "scope" : null,
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : null,
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessLibrary",
  "binds" : [ ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
function journalCopyToOnlineValidity(journal){
	var journalMedia = "";
	var valid = true;
	
	for (var i = 0; i < journal.getChildren().size(); i++){
		journalMedia = journal.getChildren().get(i);
		journalMediaStatus = journalMedia.getValue("ProductStatus").getSimpleValue();
		
		if (journalMediaStatus != "Current publication" && journalMediaStatus != "Not yet published"){
			valid = false;
		}
	}
	
	return valid;
}
/*===== business library exports - this part will not be imported to STEP =====*/
exports.journalCopyToOnlineValidity = journalCopyToOnlineValidity