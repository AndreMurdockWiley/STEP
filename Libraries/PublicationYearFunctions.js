/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PublicationYearFunctions",
  "type" : "BusinessLibrary",
  "setupGroups" : [ "Libraries" ],
  "name" : "Publication Year Functions",
  "description" : null,
  "scope" : null,
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : null,
  "dependencies" : [ {
    "libraryId" : "GenericFunctions",
    "libraryAlias" : "genericFunctions"
  }, {
    "libraryId" : "VolumeFunctions",
    "libraryAlias" : "volumeFunctions"
  } ]
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
function createYear(journalMedia, newYear){
	var year = "";
	var pubYearTypeID = "";
	var attributeID = "ProductPublicationYear";
	
	if(journalMedia.getValue("JournalMediaCode").getSimpleValue() == "Print"){
		pubYearTypeID = "JournalPrintPublicationYear";
	}else{
		pubYearTypeID = "JournalDigitalPublicationYear";
	}
	
	//Checking if the year already exist
	year = genericFunctions.queryForObjTypeBelowWithValue(journalMedia, pubYearTypeID, attributeID, newYear);

	//This way, if the year already exist, it will return it, otherwise, It will be created
	if(!year){
		year = journalMedia.createProduct('',pubYearTypeID);
		year.setName(newYear);
		year.getValue("ContinuousNumbering").setSimpleValue("No");
		year.getValue("ProductPublicationYear").setSimpleValue(newYear);
	}
	year.approve();
	return year;
}

function getNextYear(journalMedia){
	return parseInt(journalMedia.getValue("JournalPublicationYear").getSimpleValue()) + 1;
}

function getLastPublicationYear(journalMedia){
	var journalMediaLastPublicationYear = journalMedia.getValue("JournalLastPublicationYear").getSimpleValue();
	
	for (var i = 0; i < journalMedia.getChildren().size(); i++){
		if (journalMedia.getChildren().get(i).getValue("ProductPublicationYear").getSimpleValue() == journalMediaLastPublicationYear){
			return journalMedia.getChildren().get(i);
		}
	}
	return null;
}

function pubYearDeleteCheck(pubYearProduct){
	var nodeVolumesChildren = pubYearProduct.getChildren();
	var volumeOK = true;

	for (var j = 0; j < nodeVolumesChildren.size(); j++){
		volumeOK = volumeFunctions.volumeDeleteCheck(nodeVolumesChildren.get(j));
		if (!volumeOK){
			break;
		}
	}

	return volumeOK;
}

function deletePubYear(pubYearProduct){
	var nodeVolumesChildren = pubYearProduct.getChildren();
	var selectedNodeName = pubYearProduct.getName();

	for (var j = 0; j < nodeVolumesChildren.size(); j++){
		volumeFunctions.deleteVolume(nodeVolumesChildren.get(j));
	}

	pubYearProduct.delete().approve();
}

function yearCopyToOnline(printPubYear){
	var journal = printPubYear.getParent().getParent();
	var journalMedia = "";
	var printPubYearValue = printPubYear.getValue("ProductPublicationYear").getSimpleValue();
	var year = "";
	
	for (var i = 0; i < journal.getChildren().size(); i++){
		journalMedia = journal.getChildren().get(i);
		
		if (journalMedia.getValue("JournalMediaCode").getSimpleValue() == "Electronic"){
			year = createYear(journalMedia, printPubYearValue);
			
			break;
		}
	}
	year.approve();
	return year;
}
/*===== business library exports - this part will not be imported to STEP =====*/
exports.createYear = createYear
exports.getNextYear = getNextYear
exports.getLastPublicationYear = getLastPublicationYear
exports.pubYearDeleteCheck = pubYearDeleteCheck
exports.deletePubYear = deletePubYear
exports.yearCopyToOnline = yearCopyToOnline