/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "VolumeFunctions",
  "type" : "BusinessLibrary",
  "setupGroups" : [ "Libraries" ],
  "name" : "Volume Functions",
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
    "libraryId" : "IssueFunctions",
    "libraryAlias" : "issueFunctions"
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
function createVolume(pubYear, newVolume){
	var volume = "";
	var volumeTypeID = "";
	var attributeID = "IssueVolumeNumber";
	
	if(pubYear.getValue("JournalMediaCode").getSimpleValue() == "Print"){
		volumeTypeID = "JournalPrintVolumes";
	}else{
		volumeTypeID = "JournalDigitalVolumes";
	}
		
	//Checking if the volume already exist
	volume = genericFunctions.queryForObjTypeBelowWithValue(pubYear, volumeTypeID, attributeID, newVolume);
	
	//This way, if the volume already exist, it will return it, otherwise, It will be created
	if(!volume){
		volume = pubYear.createProduct('',volumeTypeID);
		volume.setName("Volume " + newVolume);
		volume.getValue("IssueVolumeNumber").setSimpleValue(newVolume);
	}
	volume.approve();
	return volume;
}

function volumeDeleteCheck(volume){
	var nodeIssueChildren = [];
	var issuesOK = true;

	nodeIssueChildren = volume.getChildren();
	for (var x = 0; x < nodeIssueChildren.size(); x++){
		issuesOK = issueFunctions.issueDeleteCheck(nodeIssueChildren.get(x));
		if (!issuesOK){
			break;
		}
	}
	return issuesOK;
}

function deleteVolume(volume){
	var nodeIssueChildren = [];

	nodeIssueChildren = volume.getChildren();
	for (var x = 0; x < nodeIssueChildren.size(); x++){
		issueFunctions.deleteIssue(nodeIssueChildren.get(x))
	}
	volume.delete().approve();
}

function volumeCopyToOnline(printVolume){
	var printPubYear = printVolume.getParent();
	var journal = printPubYear.getParent().getParent();
	var journalMedia = "";
	var digitalPubYear = "";
	var digitalVolume = "";
	var printPubYearValue = printPubYear.getValue("ProductPublicationYear").getSimpleValue();
	var printVolumeNumber = printVolume.getValue("IssueVolumeNumber").getSimpleValue();
	var createdCheck = false;
	var volume = "";
	
	for (var i = 0; i < journal.getChildren().size(); i++){
		journalMedia = journal.getChildren().get(i);
		if (journalMedia.getValue("JournalMediaCode").getSimpleValue() == "Electronic"){
			for (var j = 0; j < journalMedia.getChildren().size(); j++){
				digitalPubYear = journalMedia.getChildren().get(j);
				
				if (digitalPubYear.getValue("ProductPublicationYear").getSimpleValue() == printPubYearValue){
					volume = createVolume(digitalPubYear, printVolumeNumber);
					
					createdCheck = true;
					
					break;
				}
			}
			
			if (createdCheck == true){
				break;
			}
		}
	}
volume.approve();
	return volume;
}

function validateIssuesRunDate(volume, issue1Number, issue2Number, copyToOnline){
	var currentIssue = "";
	var currentIssueRunDate = "";
	var currentIssueNumber = "";
	var issueRunDateValidity = true;
	var digitalIssueRunDate = "";
	var digitalIssue = "";
	
	for (var x = 0; x < volume.getChildren().size(); x++){
		currentIssue = volume.getChildren().get(x);
		currentIssueRunDate = currentIssue.getValue("IssueRunDate").getSimpleValue();
		currentIssueNumber = currentIssue.getValue("IssueFromIssueNumber").getSimpleValue();

		if (currentIssueNumber >= issue1Number && currentIssueNumber <= issue2Number){
			if (currentIssueRunDate != "" && currentIssueRunDate != null){
				issueRunDateValidity = false;
				break;				
			}
			
			//Managing Copy To Online
			if (copyToOnline == "Y"){
				digitalIssue = issueFunctions.findDigitalIssue(currentIssue);
				digitalIssueRunDate = digitalIssue.getValue("IssueRunDate").getSimpleValue();
	
				if (digitalIssueRunDate != "" && digitalIssueRunDate != null){
					issueRunDateValidity = false;
					break;
				}
			}
		}
	}
	
	return issueRunDateValidity;
}
/*===== business library exports - this part will not be imported to STEP =====*/
exports.createVolume = createVolume
exports.volumeDeleteCheck = volumeDeleteCheck
exports.deleteVolume = deleteVolume
exports.volumeCopyToOnline = volumeCopyToOnline
exports.validateIssuesRunDate = validateIssuesRunDate