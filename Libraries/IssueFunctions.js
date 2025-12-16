/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "IssueFunctions",
  "type" : "BusinessLibrary",
  "setupGroups" : [ "Libraries" ],
  "name" : "Issue Functions",
  "description" : null,
  "scope" : null,
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : null,
  "dependencies" : [ {
    "libraryId" : "GenericFunctions",
    "libraryAlias" : "genericFunctions"
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
function createIssue(volume, issueNumber, issueType, pubSequence,manualAGA){
	var issueTypeID = "";
	var issue = "";
	var attributeID = "";
	
	switch(true){
		case (issueType == "Standard Issue"):
			attributeID = "IssueFromIssueNumber";
			break;
		case (issueType == "Supplement"):
			attributeID = "IssueSupplementNo";
			break;
	}
	
	if (volume.getValue("JournalMediaCode").getSimpleValue() == "Print"){
		issueTypeID = "JournalPrintIssues";
	} else{
		issueTypeID = "JournalDigitalIssues";
	}

	//Checking if the issue already exist
	issue = genericFunctions.queryForObjTypeBelowWithValue(volume, issueTypeID, attributeID, issueNumber);
	
	//This way, if the issue already exist, it will return it, otherwise, It will be created
	if(!issue){	
		//Creating new Issue
		issue = volume.createProduct('',issueTypeID);
	
		//Populate Common Attributes
		generateCommonIssueAttributes(issue, issueType, pubSequence);
	
		//Populate Type-Specific Attributes
		generateTypeSpecificIssueAttributes(issue, issueNumber, issueType);
	
		//Initiating Issue into Enrichment WorkFlow
		issue.startWorkflowByID("VolumeIssueCreationWF", null);
		if(manualAGA =="Yes" && issue.getObjectType().getID() == "JournalPrintIssues"){
			var myTask = issue.getTaskByID("VolumeIssueCreationWF","State-9");
			var myTriggerResult = myTask.triggerByID("MoveToNonJPCMS","Move directly to NON JPCMS managed Issue state");
		}
	
	
	}
	
	return issue;
}

function mergeIssues(issue1, issue2, pubSequence){
	var issueTypeID = "";
	var issue = "";
	var volume = issue1.getParent();
	var journalMediaCode = volume.getValue("JournalMediaCode").getSimpleValue();
	var fromIssue1Number = issue1.getValue("IssueFromIssueNumber").getSimpleValue();
	var fromIssue2Number = issue2.getValue("IssueFromIssueNumber").getSimpleValue();
	var issueNumber = fromIssue1Number + "-" + fromIssue2Number
	var journalSapMaterialNumber = volume.getValue("ProductSAPMaterialNumber").getSimpleValue();;
	var journalMediaCodeShorted = genericFunctions.mediaCodeTransformation(journalMediaCode);
	var volumeNumber = volume.getValue("IssueVolumeNumber").getSimpleValue();
	var volumeNumberPadded = genericFunctions.pad(volumeNumber, 4);

	//Updating the Status of both ends to merged
	issue1.getValue("IssueStatus").setSimpleValue("Merged");
	issue2.getValue("IssueStatus").setSimpleValue("Merged");
	//Initiating Issues into the Issue creation workflow for publishing downstreams
	genericFunctions.removeFromWorkflow(issue1, "VolumeIssueCreationWF");
	genericFunctions.removeFromWorkflow(issue2, "VolumeIssueCreationWF");
	issue1.startWorkflowByID("VolumeIssueCreationWF", null);
	issue2.startWorkflowByID("VolumeIssueCreationWF", null);
	
	if(journalMediaCode == "Print"){
		issueTypeID = "JournalPrintIssues";
	}else{
		issueTypeID = "JournalDigitalIssues";
	}

	//Creating new Issue
	issue = volume.createProduct('',issueTypeID);

	//Populate Common Attributes
	generateCommonIssueAttributes(issue, "Merged Issue", pubSequence)
	
	//Populating Merge-Specific Attributes
	generateMergeIssueAttributes(issue, fromIssue1Number, fromIssue2Number, journalSapMaterialNumber, journalMediaCodeShorted, volumeNumber, volumeNumberPadded);

	//Initiating Issue into Enrichment WorkFlow
	issue.startWorkflowByID("VolumeIssueCreationWF", "test")
	
	return issue;
}

function generateCommonIssueAttributes(issue, issueType, pubSequence){
	issue.getValue("IssueType").setSimpleValue(issueType);
	issue.getValue("IssueReportingYear").setSimpleValue(issue.getValue("ProductPublicationYear").getSimpleValue());
	issue.getValue("IssuePubSequence").setSimpleValue(pubSequence);
	issue.getValue("IssueEmlo").setSimpleValue("No");
	issue.getValue("IssueStatus").setSimpleValue("Not Yet Published");
}

function generateTypeSpecificIssueAttributes(issue, issueNumber, issueType){
	var journalSapMaterialNumber = issue.getValue("ProductSAPMaterialNumber").getSimpleValue();
	var journalMediaCode = genericFunctions.mediaCodeTransformation(issue.getValue("JournalMediaCode").getSimpleValue());
	var volumeNumber = issue.getValue("IssueVolumeNumber").getSimpleValue();
	var volumeNumberPadded = genericFunctions.pad(volumeNumber, 4);
	
	switch(true){
		case (issueType == "Standard Issue"):
			generateStandardIssueAttributes(issue, issueNumber, journalSapMaterialNumber, journalMediaCode, volumeNumber, volumeNumberPadded);
			break;
		case (issueType == "Supplement"):
			generateSupplementIssueAttributes(issue, issueNumber, journalSapMaterialNumber, journalMediaCode, volumeNumber, volumeNumberPadded);
			break;
	}
}

function generateStandardIssueAttributes(issue, issueNumber, journalSapMaterialNumber, journalMediaCode, volumeNumber, volumeNumberPadded){
	var issueNumberPadded = genericFunctions.pad(issueNumber, 7);
	
	issue.setName("Standard Issue " + issueNumber);
	issue.getValue("IssueSAPMaterialNumber").setSimpleValue(journalSapMaterialNumber.substring(0,4) + volumeNumberPadded + issueNumberPadded + journalMediaCode);
	issue.getValue("IssueId").setSimpleValue(journalSapMaterialNumber + "-" + volumeNumberPadded + "-" + issueNumberPadded);
	issue.getValue("IssueFromIssueNumber").setSimpleValue(issueNumber);
	issue.getValue("IssuePublicationType").setSimpleValue("Subscription Set");
	issue.getValue("IssueTitle").setSimpleValue("v_" + volumeNumber + "_i_" + issueNumber);
}

function generateSupplementIssueAttributes(issue, issueNumber, journalSapMaterialNumber, journalMediaCode, volumeNumber, volumeNumberPadded){
	var issueNumberPadded = genericFunctions.pad(issueNumber, 6);
	
	issue.setName("Supplement " + issueNumber);
	issue.getValue("IssueSAPMaterialNumber").setSimpleValue(journalSapMaterialNumber.substring(0,4) + volumeNumberPadded + "S" + issueNumberPadded + journalMediaCode);
	issue.getValue("IssueId").setSimpleValue(journalSapMaterialNumber + "-" + volumeNumberPadded + "-" + "S" + issueNumberPadded);
	issue.getValue("IssueSupplementNo").setSimpleValue(issueNumber);
	issue.getValue("IssuePublicationType").setSimpleValue("Additional Issue");
	issue.getValue("IssueTitle").setSimpleValue("v_" + volumeNumber + "_Supp_" + issueNumber);
}

function generateMergeIssueAttributes(issue, issue1Number, issue2Number, journalSapMaterialNumber, journalMediaCode, volumeNumber, volumeNumberPadded){
	var issue1NumberPadded = genericFunctions.pad(issue1Number, 3);
	var issue2NumberPadded =  genericFunctions.pad(issue2Number, 3);
	var issueNumberPadded = issue1NumberPadded + "M" + issue2NumberPadded;
	
	issue.setName("Merge Issue " + issue1Number + "-" + issue2Number);
	issue.getValue("IssueSAPMaterialNumber").setSimpleValue(journalSapMaterialNumber.substring(0,4) + volumeNumberPadded + issueNumberPadded + journalMediaCode);
	issue.getValue("IssueId").setSimpleValue(journalSapMaterialNumber + "-" + volumeNumberPadded + "-" + issueNumberPadded);
	issue.getValue("IssueFromIssueNumber").setSimpleValue(issue1Number);
	issue.getValue("IssueToIssueNumber").setSimpleValue(issue2Number);
	issue.getValue("IssuePublicationType").setSimpleValue("Subscription Set");
	issue.getValue("IssueTitle").setSimpleValue("v_" + volumeNumber + "_i_" + issue1Number + "-" + issue2Number + " Merge Iss");
}

function copyIssue(issue){
	var volume = issue.getParent();
	var pubYear = volume.getParent();
	var journalMedia = pubYear.getParent();
	var issueNumber = "";
	var issueType = issue.getValue("IssueType").getSimpleValue();
	var pubSequence = journalMedia.getValue("StartingPubSequenceMedia").getSimpleValue();
	var copiedIssue = "";
	var issueTypeID = "";
	
	if (volume.getValue("JournalMediaCode").getSimpleValue() == "Print"){
		issueTypeID = "JournalPrintIssues";
	}else{
		issueTypeID = "JournalDigitalIssues";
	}

	//Creating new Issue
	copiedIssue = volume.createProduct('',issueTypeID);

	//Populating unique attributes	
	copiedIssue.getValue("IssuePubSequence").setSimpleValue(pubSequence);
	
	//Copying Issue Attributes
	generateCopiedIssueAttributes(copiedIssue, issue, issueType);

	//Initiating Issue into Enrichment WorkFlow
	//copiedIssue.startWorkflowByID("VolumeIssueCreationWF", null)
	
	return copiedIssue;
}

function generateCopiedIssueAttributes(copiedIssue, issue, issueType){
	genericFunctions.copyValue(copiedIssue, issue, "IssueType");
	genericFunctions.copyValue(copiedIssue, issue, "IssueReportingYear");
	genericFunctions.copyValue(copiedIssue, issue, "IssueEmlo");
	genericFunctions.copyValue(copiedIssue, issue, "IssueStatus");
	genericFunctions.copyValue(copiedIssue, issue, "IssueTitle");
	genericFunctions.copyValue(copiedIssue, issue, "IssueFurtherDescription");
	genericFunctions.copyValue(copiedIssue, issue, "IssuePublicationType");
	genericFunctions.copyValue(copiedIssue, issue, "IssueReportingYear");
	genericFunctions.copyValue(copiedIssue, issue, "IssueFromVolume");
	genericFunctions.copyValue(copiedIssue, issue, "IssueProductionIdentifier");
}

function generateIssueUniqueAttributes(issue){
	var issueType = issue.getValue("IssueType").getSimpleValue();
	var issueNumber = "";
	var issueNumberPadded = "";
	var journalSapMaterialNumber = issue.getValue("ProductSAPMaterialNumber").getSimpleValue();
	var journalMediaCode = genericFunctions.mediaCodeTransformation(issue.getValue("JournalMediaCode").getSimpleValue());
	var volume = issue.getParent();
	var volumeNumber = volume.getValue("IssueVolumeNumber").getSimpleValue();
	var volumeNumberPadded = genericFunctions.pad(volumeNumber, 4);

	switch(true){
		case (issueType == "Standard Issue"):
			issueNumber = issue.getValue("IssueFromIssueNumber").getSimpleValue();
			issueNumberPadded = genericFunctions.pad(issueNumber, 7);
			
			issue.setName("Standard Issue " + issueNumber);
			issue.getValue("IssueTitle").setSimpleValue("v_" + volumeNumber + "_i_" + issueNumber);
			issue.getValue("IssueSAPMaterialNumber").setSimpleValue(journalSapMaterialNumber.substring(0,4) + volumeNumberPadded + issueNumberPadded + journalMediaCode);
			issue.getValue("IssueId").setSimpleValue(journalSapMaterialNumber + "-" + volumeNumberPadded + "-" + issueNumberPadded);
			break;
		case (issueType == "Supplement"):
			issueNumber = issue.getValue("IssueSupplementNo").getSimpleValue();
			issueNumberPadded = genericFunctions.pad(issueNumber, 6);
			
			issue.setName("Supplement " + issueNumber);
			issue.getValue("IssueTitle").setSimpleValue("v_" + volumeNumber + "_Supp_" + issueNumber);
			issue.getValue("IssueSAPMaterialNumber").setSimpleValue(journalSapMaterialNumber.substring(0,4) + volumeNumberPadded + "S" + issueNumberPadded + journalMediaCode);
			issue.getValue("IssueId").setSimpleValue(journalSapMaterialNumber + "-" + volumeNumberPadded + "-" + "S" + issueNumberPadded);
			break;
		case (issueType == "Merged Issue"):
			issue1Number = issue.getValue("IssueFromIssueNumber").getSimpleValue();
			issue2Number = issue.getValue("IssueToIssueNumber").getSimpleValue();
			var issue1NumberPadded = genericFunctions.pad(issue1Number, 3);
			var issue2NumberPadded =  genericFunctions.pad(issue2Number, 3);
			var issueNumberPadded = issue1NumberPadded + "M" + issue2NumberPadded;
			
			issue.setName("Merge Issue " + issue1Number + "-" + issue2Number);
			issue.getValue("IssueTitle").setSimpleValue("v_" + volumeNumber + "_i_" + issue1Number + "-" + issue2Number + " Merge Iss");
			issue.getValue("IssueSAPMaterialNumber").setSimpleValue(journalSapMaterialNumber.substring(0,4) + volumeNumberPadded + issueNumberPadded + journalMediaCode);
			issue.getValue("IssueId").setSimpleValue(journalSapMaterialNumber + "-" + volumeNumberPadded + "-" + issueNumberPadded);
			break;
	}
}

function generateIssueDescription(issue){
	var furtherDescription = issue.getValue("IssueFurtherDescription").getSimpleValue();
	var emlo = issue.getValue("IssueEmlo").getSimpleValue();
	
	if (furtherDescription) {
		issue.getValue("IssueTitle").setSimpleValue(issue.getValue("IssueTitle").getSimpleValue() + "_" + furtherDescription);
	}

	if (emlo == "Yes") {
		issue.getValue("IssueTitle").setSimpleValue(issue.getValue("IssueTitle").getSimpleValue() + "_EMLO");
	}
}

function issueCopyToOnline(printIssue){
	var printVolume = printIssue.getParent();
	var printPubYear = printVolume.getParent();
	var journal = printPubYear.getParent().getParent();
	var journalMedia = "";
	var digitalPubYear = "";
	var digitalVolume = "";
	var printPubYearValue = printPubYear.getValue("ProductPublicationYear").getSimpleValue();
	var printVolumeNumber = printVolume.getValue("IssueVolumeNumber").getSimpleValue();
	var printIssueNumber = "";
	var printIssueType = printIssue.getValue("IssueType").getSimpleValue();
	var printIssuePubSequence = printIssue.getValue("IssuePubSequence").getSimpleValue();
	var createdCheck = false;
	var issue = "";
	
	switch(true){
		case (printIssueType == "Standard Issue"):
			printIssueNumber = printIssue.getValue("IssueFromIssueNumber").getSimpleValue();
			break;
		case (printIssueType == "Supplement"):
			printIssueNumber = printIssue.getValue("IssueSupplementNo").getSimpleValue();
			break;	
	}
	
	for (var i = 0; i < journal.getChildren().size(); i++){
		journalMedia = journal.getChildren().get(i);
		
		if (journalMedia.getValue("JournalMediaCode").getSimpleValue() == "Electronic"){
			for (var j = 0; j < journalMedia.getChildren().size(); j++){
				digitalPubYear = journalMedia.getChildren().get(j);
				
				if (digitalPubYear.getValue("ProductPublicationYear").getSimpleValue() == printPubYearValue){
					for (var x = 0; x < digitalPubYear.getChildren().size(); x++){
						digitalVolume = digitalPubYear.getChildren().get(x);
						
						if (digitalVolume.getValue("IssueVolumeNumber").getSimpleValue() == printVolumeNumber){
							issue = createIssue(digitalVolume, printIssueNumber, printIssueType, printIssuePubSequence);
							
							createdCheck = true;
							break;
						}
					}
				}
				
				if (createdCheck == true){
					break;
				}
			}
			
			if (createdCheck == true){
				break;
			}
		}
	}
	return issue;
}

function findDigitalIssue(printIssue){
	var printIssueNumber = printIssue.getValue("IssueFromIssueNumber").getSimpleValue();
	var printVolume = printIssue.getParent();
	var printVolumeNumber = printVolume.getValue("IssueVolumeNumber").getSimpleValue();
	var printPubYear = printVolume.getParent();
	var printPubYearValue = printPubYear.getValue("ProductPublicationYear").getSimpleValue();
	var journalPrintMedia = printPubYear.getParent();
	var journal = journalPrintMedia.getParent();
	var journalDigitalMedia = "";
	var digitalPubYear = "";
	var digitalVolume = "";
	var digitalIssue = "";
	
	for (var i = 0; i < journal.getChildren().size(); i++){
		journalDigitalMedia = journal.getChildren().get(i);
		
		if (journalDigitalMedia.getValue("JournalMediaCode").getSimpleValue() == "Electronic"){
			for (var j = 0; j < journalDigitalMedia.getChildren().size(); j++){
				digitalPubYear = journalDigitalMedia.getChildren().get(j);
				
				if (digitalPubYear.getValue("ProductPublicationYear").getSimpleValue() == printPubYearValue){
					for (var x = 0; x < digitalPubYear.getChildren().size(); x++){
						digitalVolume = digitalPubYear.getChildren().get(x);
						
						if (digitalVolume.getValue("IssueVolumeNumber").getSimpleValue() == printVolumeNumber){
							for (var y = 0; y < digitalVolume.getChildren().size(); y++){
								digitalIssue = digitalVolume.getChildren().get(y);
								
								if (digitalIssue.getValue("IssueFromIssueNumber").getSimpleValue() == printIssueNumber){
									return digitalIssue;
								}
							}
						}
					}
				}
			}
		}
	}
	return false;
}

function issueDeleteCheck(issue){
	var jpcmsId = issue.getValue("IssueJpcmsId").getSimpleValue();
	var orgPubDate = issue.getValue("ProductOriginalPublicationDate").getSimpleValue();
	
	if (jpcmsId != "" && jpcmsId != null && orgPubDate != "" && orgPubDate != null){
		return false;
	} else {
		return true;
	}
}

function deleteIssue(issue){
	genericFunctions.removeFromWorkflow(issue,"VolumeIssueCreationWF");

try{
issue.delete().approve();
}
catch(e){
	throw e;
}
}

function issueMediaMaxPubSeq(issue){
	var parentNode = issue.getParent();
	var myChilds = "";
	var myPubSeq = issue.getValue("IssuePubSequence").getSimpleValue();
	var myNewPubSeq = myPubSeq;
	var pubYearNode = parentNode.getParent();
	var myPubYearChilds = "";
	var journalMediaNode = pubYearNode.getParent();
	var journalMediaChilds = journalMediaNode.getChildren();
	var currentChildrenPubSeq = 0;
	var maxValue = 0;

	for(var k=0; k<journalMediaChilds.size();k++) {
		myPubYearChilds = journalMediaChilds.get(k).getChildren();

		for(var j=0; j<myPubYearChilds.size();j++) {	
		     myChilds = myPubYearChilds.get(j).getChildren();

			for(var i=0; i<myChilds.size();i++) {			
				currentChildrenPubSeq = myChilds.get(i).getValue("IssuePubSequence").getSimpleValue();

			     if (myChilds.get(i).getID() != issue.getID()){

					//obtain max value of all the pub seq
					if (currentChildrenPubSeq >= maxValue){
						maxValue = currentChildrenPubSeq;
					}
			     }
			}
		}	
	}

	return maxValue;

}

function issueRePubSequence(issue,prevSeq){
	var parentNode = issue.getParent();
	var myChilds = "";
	var myPubSeq = issue.getValue("IssuePubSequence").getSimpleValue();
	var myNewPubSeq = myPubSeq;
	var pubYearNode = parentNode.getParent();
	var myPubYearChilds = "";
	var journalMediaNode = pubYearNode.getParent();
	var journalMediaChilds = journalMediaNode.getChildren();
	var currentChildrenPubSeq = 0;
	var maxValue = 0;
      var issueArray= [];
	//for null publication sequence we use eight nines to be always bigger and use the max seq for that matter
	if (myPubSeq == "" || myPubSeq == null){
		myNewPubSeq = parseInt(issueMediaMaxPubSeq(issue))+10;
		issue.getValue("IssuePubSequence").setValue(myNewPubSeq);

	//if we indicate a one digit number, we want that record to be the first one
	} else {

		if (myPubSeq < 10){
			myNewPubSeq = 10;
		} else if (myPubSeq%10 != 0){
			myNewPubSeq = myPubSeq.substring(0, myPubSeq.length()-1);
			myNewPubSeq = (parseInt(myNewPubSeq)+1)*10;
		}
	
	     //if the position for the pub sequence is different than before
	     if (myNewPubSeq != prevSeq && myPubSeq != prevSeq) {
	
			for(var k=0; k<journalMediaChilds.size();k++) {
				myPubYearChilds = journalMediaChilds.get(k).getChildren();
	
				for(var j=0; j<myPubYearChilds.size();j++) {	
				     myChilds = myPubYearChilds.get(j).getChildren();
	
					for(var i=0; i<myChilds.size();i++) {			
						currentChildrenPubSeq = myChilds.get(i).getValue("IssuePubSequence").getSimpleValue();
	
					     if (myChilds.get(i).getID() != issue.getID()){
	
							//obtain max value of all the pub seq
							if (currentChildrenPubSeq >= maxValue){
								maxValue = currentChildrenPubSeq;
							}
								
							//if the pub seq is minor than before
							var l=0;
							
							if (myPubSeq < prevSeq && myNewPubSeq <= currentChildrenPubSeq &&currentChildrenPubSeq <= prevSeq){
								myChilds.get(i).getValue("IssuePubSequence").setValue(parseInt(currentChildrenPubSeq)+10);
							 issueArray.push(myChilds.get(i));
							//if the pub seq is mayor than before
							} else if (myPubSeq>prevSeq && myNewPubSeq >= currentChildrenPubSeq && currentChildrenPubSeq >= prevSeq) {
								myChilds.get(i).getValue("IssuePubSequence").setValue(parseInt(currentChildrenPubSeq)-10);
							 issueArray.push(myChilds.get(i));
							
							}
					     }
					}
				}	
			}
		}

	     issue.getValue("IssuePubSequence").setValue(myNewPubSeq);
	    	}
	   return issueArray;
}
/*===== business library exports - this part will not be imported to STEP =====*/
exports.createIssue = createIssue
exports.mergeIssues = mergeIssues
exports.generateCommonIssueAttributes = generateCommonIssueAttributes
exports.generateTypeSpecificIssueAttributes = generateTypeSpecificIssueAttributes
exports.generateStandardIssueAttributes = generateStandardIssueAttributes
exports.generateSupplementIssueAttributes = generateSupplementIssueAttributes
exports.generateMergeIssueAttributes = generateMergeIssueAttributes
exports.copyIssue = copyIssue
exports.generateCopiedIssueAttributes = generateCopiedIssueAttributes
exports.generateIssueUniqueAttributes = generateIssueUniqueAttributes
exports.generateIssueDescription = generateIssueDescription
exports.issueCopyToOnline = issueCopyToOnline
exports.findDigitalIssue = findDigitalIssue
exports.issueDeleteCheck = issueDeleteCheck
exports.deleteIssue = deleteIssue
exports.issueMediaMaxPubSeq = issueMediaMaxPubSeq
exports.issueRePubSequence = issueRePubSequence