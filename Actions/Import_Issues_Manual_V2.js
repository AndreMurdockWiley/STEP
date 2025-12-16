/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Import_Issues_Manual_V2",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "Import Issues Manual_V2",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "JournalDigitalMedia" ],
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
    "contract" : "LoggerBindContract",
    "alias" : "log",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "objJDV",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "JournalDigitalVolumes",
    "description" : null
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "objJPV",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "JournalPrintVolumes",
    "description" : null
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "objJDPY",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "JournalDigitalPublicationYear",
    "description" : null
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "objJPPY",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "JournalPrintPublicationYear",
    "description" : null
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "objJDI",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "JournalDigitalIssues",
    "description" : null
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "objJPI",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "JournalPrintIssues",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,manager,log,objJDV,objJPV,objJDPY,objJPPY,objJDI,objJPI) {
//For Import of Journal Media objects. Rule to create Publication Year, Print/Digital Volumes, and Print/Digital Issues under the Journal Media objects.

//if JournalMediaCode = G, then the media is Digital
//if JournalMediaCode = A, then the media is Print
var journalMediaCode = node.getValue("JournalMediaCode").getSimpleValue();
log.info("journalMediaCode= "+journalMediaCode);
var journalMediaType;
if(journalMediaCode == "Print"){
	journalMediaType = "Print";
}
else if(journalMediaCode == "Electronic"){
	journalMediaType = "Digital";
}
log.info("journalMediaType= "+journalMediaType);

//Get the simple value for Publication year from the Print/Digital Journal Media object
var publicationYear = node.getValue("IDLProductPublicationYear").getSimpleValue();

//Get the simple value for Pub Year attributes from the Print/Digital Media Object
//var volumeGroupFTEPricing = node.getValue("IDLVolumeGroupFtePricingForYear").getSimpleValue();
var volumeGroupNumOfIssues = node.getValue("IDLVolumeGroupScheduledNumberOfIssues").getSimpleValue();

//Get the simple value for Issue attributes from the Print/Digital Media Object
var issueTitle = node.getValue("IDLIssueTitle").getSimpleValue();
var issID = node.getValue("IDLIssueId").getSimpleValue();
var issueRunDate = node.getValue("JANISIssueRunDate").getSimpleValue();
var issueStatus = node.getValue("IDLIssueStatus").getSimpleValue();
var issueType = node.getValue("IDLIssueType").getSimpleValue();
var issueJPCMS = node.getValue("IDLIssueJpcmsId").getSimpleValue();
var issueOrgPubDate = node.getValue("JANISProductOriginalPublicationDate").getSimpleValue();
var issuePubType = node.getValue("IDLIssuePublicationType").getSimpleValue();
var issuePubSeq = node.getValue("IDLIssuePubSequence").getSimpleValue();
var issueReportYear = node.getValue("IDLIssueReportingYear").getSimpleValue();
var issueRevisedDate = node.getValue("JANISProductRevisedPublicationDate").getSimpleValue();
var issueSAPMatNum = node.getValue("IDLIssueSapMaterialNumber").getSimpleValue();
var issueIssProdId = node.getValue("IDLIssueProductionIdentifier").getSimpleValue();
var issueIssueFromIssue = node.getValue("IDLIssueFromIssueNumber").getSimpleValue();
var issueIssueFromVolume = node.getValue("IDLIssueFromVolume").getSimpleValue();
var issueFurtherDesc = node.getValue("IDLIssueFurtherDescription").getSimpleValue();
var issueIssueToIssue = node.getValue("IDLIssueToIssueNumber").getSimpleValue();
var issueSupplementNo = node.getValue("IDLIssueSupplementNo").getSimpleValue();


//Getting the simple value of the Volume attributes from the Print/Digital Media
var volNo = node.getValue("IDLIssueVolumeNumber").getSimpleValue();
var volNoName = ("Volume " + volNo);

if(issueType == "Standard Issue"){
	var issueSTEPName = ("Standard Issue " + issueIssueFromIssue);	
}
else if (issueType == "Merged Issue"){
	issueSTEPName = ("Merged Issue " + issueIssueFromIssue + "-" + issueIssueToIssue);
}
else if(issueType == "Supplement"){
	issueSTEPName = ("Supplement " + issueSupplementNo);
}


//loop through children of the print/digital journal media object to evaluate what publication years exist/do not exist 
//to then evaluate on the Names of the pub year object
var journalMedidaChildrenList = node.getChildren();
log.info("journalMedidaChildrenList= "+journalMedidaChildrenList);
var pubYearMatch = false;

if(journalMedidaChildrenList){
	for (var i=0; i<journalMedidaChildrenList.size(); i++){
		log.info('i= '+i);
		log.info('var i journal child= '+journalMedidaChildrenList.get(i));
		var publicationYearName = journalMedidaChildrenList.get(i).getName();
		log.info("publicationYearName= "+publicationYearName);
		if(publicationYearName == publicationYear){
			log.info('true');
			pubYearMatch = true;
			var pubYearMatchObjID = journalMedidaChildrenList.get(i).getID();
			break;
			//publication year object create is NOT required
		}
		else{
			log.info('false1');
			//publication year object create IS required
		}
	}
}

//Publication Year will only be created here if pubYearMatch is false (meaning there was no Pub Year that matched)
//Create the Pub Year, Volume and Issue
if (pubYearMatch == false){
	if(journalMediaType == "Digital"){
		var newPublicationYear = node.createProduct('',objJDPY);
		//Creates a new product with the specified ID and object type as a child to the product for which the method is invoked.
		log.info("newPublicationYear= "+newPublicationYear);
		newPublicationYear.setName(publicationYear);
		log.info("newPublicationYear name ="+newPublicationYear.getName());
	//	log.info("Volume Group FTE Pricing" + volumeGroupFTEPricing);
		
		//Setting the value of the Pub Year attributes at the Pub Year level
		//newPublicationYear.getValue("VolumeGroupFtePricingForYear").setValue(volumeGroupFTEPricing);
		newPublicationYear.getValue("ScheduledNoOfIssuesYear").setValue(volumeGroupNumOfIssues);
		newPublicationYear.getValue("ProductPublicationYear").setValue(publicationYear);
		
		var newPubYearID = newPublicationYear.getID();
		log.info('newPubYearID= '+newPubYearID);
		var newPubYearObj = manager.getProductHome().getProductByID(newPubYearID);
		
		//also create volume directly under pub year
		var newVolume = newPubYearObj.createProduct('',objJDV);
		log.info("newVolume= "+newVolume);
		//var issueVolumeNumber = node.getValue("IssueVolumeNumber").getSimpleValue();
		newVolume.setName(volNoName);
		log.info("volume Name= "+newVolume.getName());
		var newVolumeID = newVolume.getID();
		log.info('newVolumeID1= '+newVolumeID);
		var newVolumeObj = manager.getProductHome().getProductByID(newVolumeID);

		//Setting the value of the Volume attribute at the Volume level
		newVolume.getValue("IssueVolumeNumber").setValue(volNo);

		//also create the issue directly under the volume
		var newIssue = newVolumeObj.createProduct('',objJDI);
		log.info("newIssue= "+newIssue);
		
		//Assigning Issue attributes to the issue level 	
		newIssue.getValue("IssueTitle").setValue(issueTitle);
		newIssue.getValue("IssueId").setValue(issID);
		newIssue.getValue("JANISIssueRunDate").setValue(issueRunDate);	
		newIssue.getValue("IssueStatus").setValue(issueStatus);
		newIssue.getValue("IssueType").setValue(issueType);
		newIssue.getValue("IssueJpcmsId").setValue(issueJPCMS);
		newIssue.getValue("JANISProductOriginalPublicationDate").setValue(issueOrgPubDate);
		newIssue.getValue("IssuePublicationType").setValue(issuePubType);
		newIssue.getValue("IssuePubSequence").setValue(issuePubSeq);
		newIssue.getValue("IssueReportingYear").setValue(issueReportYear);
		newIssue.getValue("JANISProductRevisedPublicationDate").setValue(issueRevisedDate);
		newIssue.getValue("IssueSAPMaterialNumber").setValue(issueSAPMatNum);
		newIssue.getValue("IssueProductionIdentifier").setValue(issueIssProdId);
		newIssue.getValue("IssueFromIssueNumber").setValue(issueIssueFromIssue);
		newIssue.getValue("IssueFromVolume").setValue(issueIssueFromVolume);
		newIssue.getValue("IssueFurtherDescription").setValue(issueFurtherDesc);
		newIssue.getValue("IssueToIssueNumber").setValue(issueIssueToIssue);
		newIssue.getValue("IssueSupplementNo").setValue(issueSupplementNo);
		
		
		newIssue.setName(issueSTEPName);
		log.info("issue Name ="+ issueSTEPName);	
	}
	if(journalMediaType == "Print"){
		var newPublicationYear = node.createProduct('',objJPPY);
		//Creates a new product with the specified ID and object type as a child to the product for which the method is invoked.
		log.info("newPublicationYear= "+newPublicationYear);
		newPublicationYear.setName(publicationYear);
		log.info("newPublicationYear name ="+newPublicationYear.getName());
		//log.info("Volume Group FTE Pricing= " + volumeGroupFTEPricing);	

		//Setting the value of the Pub Year attributes at the Pub Year level
		newPublicationYear.getValue("ScheduledNoOfIssuesYear").setValue(volumeGroupNumOfIssues);
		newPublicationYear.getValue("ProductPublicationYear").setValue(publicationYear);
		
		var newPubYearID = newPublicationYear.getID();
		log.info('newPubYearID= '+newPubYearID);
		var newPubYearObj = manager.getProductHome().getProductByID(newPubYearID);
		
		//also create volume directly under pub year
		var newVolume = newPubYearObj.createProduct('',objJPV);
		log.info("newVolume= "+newVolume);
		//var issueVolumeNumber = node.getValue("IssueVolumeNumber").getSimpleValue();
		newVolume.setName(volNoName);
		log.info("volume Name= "+newVolume.getName());
		var newVolumeObj = manager.getProductHome().getProductByID(newVolume.getID());

		//Setting the value of the Volume attribute at the Volume level
		newVolume.getValue("IssueVolumeNumber").setValue(volNo);

		//also create the issue directly under the volume
		var newIssue = newVolumeObj.createProduct('',objJPI);
		log.info("newIssue= "+newIssue);

		//Assigning Issue attributes to the issue level 	
		newIssue.getValue("IssueTitle").setValue(issueTitle);
		newIssue.getValue("IssueId").setValue(issID);
		newIssue.getValue("JANISIssueRunDate").setValue(issueRunDate);	
		newIssue.getValue("IssueStatus").setValue(issueStatus);
		newIssue.getValue("IssueType").setValue(issueType);
		newIssue.getValue("IssueJpcmsId").setValue(issueJPCMS);
		newIssue.getValue("JANISProductOriginalPublicationDate").setValue(issueOrgPubDate);
		newIssue.getValue("IssuePublicationType").setValue(issuePubType);
		newIssue.getValue("IssuePubSequence").setValue(issuePubSeq);
		newIssue.getValue("IssueReportingYear").setValue(issueReportYear);
		newIssue.getValue("JANISProductRevisedPublicationDate").setValue(issueRevisedDate);
		newIssue.getValue("IssueSAPMaterialNumber").setValue(issueSAPMatNum);
		newIssue.getValue("IssueProductionIdentifier").setValue(issueIssProdId);
		newIssue.getValue("IssueFromIssueNumber").setValue(issueIssueFromIssue);
		newIssue.getValue("IssueFromVolume").setValue(issueIssueFromVolume);
		newIssue.getValue("IssueFurtherDescription").setValue(issueFurtherDesc);
		newIssue.getValue("IssueToIssueNumber").setValue(issueIssueToIssue);
		newIssue.getValue("IssueSupplementNo").setValue(issueSupplementNo);
		
		newIssue.setName(issueSTEPName);
		log.info("issue Name ="+newIssue.getName());
	}
}

//If Pub Year did exist, check to see if the Volume already exists or not
//if it doesn't exist, the Volume and Issue get created
if (pubYearMatch == true){
	var pubYearMatchObj = manager.getProductHome().getProductByID(pubYearMatchObjID);
	var pubYearChildrenList = pubYearMatchObj.getChildren();
	var volumeMatch = false;
	if(pubYearChildrenList){
		for (var ii=0; ii<pubYearChildrenList.size(); ii++){
			log.info('ii ='+ii);
			log.info('var ii pub year child= '+pubYearChildrenList.get(ii));
			var volumeName = pubYearChildrenList.get(ii).getName();
			log.info("volumeName= "+volumeName);
			//var issueVolumeNumber = node.getValue("IssueVolumeNumber").getSimpleValue();
			if(volumeName == volNoName){
				log.info('true');
				volumeMatch = true;
				var volumeMatchObjID = pubYearChildrenList.get(ii).getID();
				break;
				//Volume object create is NOT required
			}
			else{
				log.info('false2');
				//Volume object create IS required
			}
		}
	}
	if (volumeMatch == false){
		if(journalMediaType == "Digital"){
			//Creates a new product with the specified ID and object type as a child to the product for which the method is invoked.
			var newVolume = pubYearMatchObj.createProduct('',objJDV);
			log.info("newVolume= "+newVolume);
			newVolume.setName(volNoName);
			log.info("volume Name ="+newVolume.getName());
			var newVolumeID = newVolume.getID();
			log.info('newVolumeID2= '+newVolumeID);
			var newVolumeObj = manager.getProductHome().getProductByID(newVolumeID);

			//Setting the value of the Volume attribute at the Volume level
			newVolume.getValue("IssueVolumeNumber").setValue(volNo);
			
			//also create the issue directly under the volume
			var newIssue = newVolumeObj.createProduct('',objJDI);
			log.info("digital newIssue= "+newIssue);

			//Assigning Issue attributes to the issue level 	
			newIssue.getValue("IssueTitle").setValue(issueTitle);
			newIssue.getValue("IssueId").setValue(issID);
			newIssue.getValue("JANISIssueRunDate").setValue(issueRunDate);	
			newIssue.getValue("IssueStatus").setValue(issueStatus);
			newIssue.getValue("IssueType").setValue(issueType);
			newIssue.getValue("IssueJpcmsId").setValue(issueJPCMS);
			newIssue.getValue("JANISProductOriginalPublicationDate").setValue(issueOrgPubDate);
			newIssue.getValue("IssuePublicationType").setValue(issuePubType);
			newIssue.getValue("IssuePubSequence").setValue(issuePubSeq);
			newIssue.getValue("IssueReportingYear").setValue(issueReportYear);
			newIssue.getValue("JANISProductRevisedPublicationDate").setValue(issueRevisedDate);
			newIssue.getValue("IssueSAPMaterialNumber").setValue(issueSAPMatNum);
			newIssue.getValue("IssueProductionIdentifier").setValue(issueIssProdId);
			newIssue.getValue("IssueFromIssueNumber").setValue(issueIssueFromIssue);
			newIssue.getValue("IssueFromVolume").setValue(issueIssueFromVolume);
			newIssue.getValue("IssueFurtherDescription").setValue(issueFurtherDesc);
			newIssue.getValue("IssueToIssueNumber").setValue(issueIssueToIssue);
			newIssue.getValue("IssueSupplementNo").setValue(issueSupplementNo);
		
			newIssue.setName(issueSTEPName);
			log.info("digital issue Name= "+newIssue.getName());
		}
		if(journalMediaType == "Print"){
			//Creates a new product with the specified ID and object type as a child to the product for which the method is invoked.
			var newVolume = pubYearMatchObj.createProduct('',objJPV);
			log.info("pubyrmatch false print newVolume= "+newVolume);
			newVolume.setName(volNoName);
			log.info("pubyrmatch false print volume Name= "+newVolume.getName());
			//var journalMediaAttributeForvolume = node.getValue("VolumeGroupFtePricingForYear").getSimpleValue(); //<this is the value loaded from the import file
			var newVolumeID = newVolume.getID();
			log.info('pubyrmatch false print newVolumeID3= '+newVolumeID);
			var newVolumeObj = manager.getProductHome().getProductByID(newVolumeID);

			//Setting the value of the Volume attribute at the Volume level
			newVolume.getValue("IssueVolumeNumber").setValue(volNo);
			
			//also create the issue directly under the volume
			var newIssue = newVolumeObj.createProduct('',objJPI);
			log.info("pubyr match false print newIssue= "+newIssue);

			//Assigning Issue attributes to the issue level 	
			newIssue.getValue("IssueTitle").setValue(issueTitle);
			newIssue.getValue("IssueId").setValue(issID);
			newIssue.getValue("JANISIssueRunDate").setValue(issueRunDate);	
			newIssue.getValue("IssueStatus").setValue(issueStatus);
			newIssue.getValue("IssueType").setValue(issueType);
			newIssue.getValue("IssueJpcmsId").setValue(issueJPCMS);
			newIssue.getValue("JANISProductOriginalPublicationDate").setValue(issueOrgPubDate);
			newIssue.getValue("IssuePublicationType").setValue(issuePubType);
			newIssue.getValue("IssuePubSequence").setValue(issuePubSeq);
			newIssue.getValue("IssueReportingYear").setValue(issueReportYear);
			newIssue.getValue("JANISProductRevisedPublicationDate").setValue(issueRevisedDate);
			newIssue.getValue("IssueSAPMaterialNumber").setValue(issueSAPMatNum);
			newIssue.getValue("IssueProductionIdentifier").setValue(issueIssProdId);
			newIssue.getValue("IssueFromIssueNumber").setValue(issueIssueFromIssue);
			newIssue.getValue("IssueFromVolume").setValue(issueIssueFromVolume);
			newIssue.getValue("IssueFurtherDescription").setValue(issueFurtherDesc);
			newIssue.getValue("IssueToIssueNumber").setValue(issueIssueToIssue);
			newIssue.getValue("IssueSupplementNo").setValue(issueSupplementNo);
			
			newIssue.setName(issueSTEPName);
			log.info("pubyr match false print issue Name= "+newIssue.getName());
		}
	}
	if (volumeMatch == true){
		var issueMatch = false;
		volumeMatchObj = manager.getProductHome().getProductByID(volumeMatchObjID);
		var volumeChildrenList = volumeMatchObj.getChildren();
		log.info('volume match is true');
		if(volumeChildrenList){
			for (var x=0; x<volumeChildrenList.size(); x++){
				log.info('x= '+x);
				log.info('volume child x= '+volumeChildrenList.get(x));
				var issueName = volumeChildrenList.get(x).getName();
				log.info("issueName= "+issueName);
				//var issueNumber = node.getValue("IssueNumber").getSimpleValue();
				if(issueName == issueSTEPName){
					log.info('issue match is true');
					issueMatch = true;
					var issueMatchObjID = volumeChildrenList.get(x).getID();
					break;
					//issue object create is NOT required
				}
				else{
					log.info('line 192 issue match is false');
					//issue object create IS required
				}
			}
		}
		if (issueMatch == false){
			log.info('issue match was false');
			if(journalMediaType == "Digital"){				
				//also create the issue directly under the volume
				var newIssue = volumeMatchObj.createProduct('',objJDI);
				log.info("digital newIssue= "+newIssue);

				//Assigning Issue attributes to the issue level 	
				newIssue.getValue("IssueTitle").setValue(issueTitle);
				newIssue.getValue("IssueId").setValue(issID);
				newIssue.getValue("JANISIssueRunDate").setValue(issueRunDate);	
				newIssue.getValue("IssueStatus").setValue(issueStatus);
				newIssue.getValue("IssueType").setValue(issueType);
				newIssue.getValue("IssueJpcmsId").setValue(issueJPCMS);
				newIssue.getValue("JANISProductOriginalPublicationDate").setValue(issueOrgPubDate);
				newIssue.getValue("IssuePublicationType").setValue(issuePubType);
				newIssue.getValue("IssuePubSequence").setValue(issuePubSeq);
				newIssue.getValue("IssueReportingYear").setValue(issueReportYear);
				newIssue.getValue("JANISProductRevisedPublicationDate").setValue(issueRevisedDate);
				newIssue.getValue("IssueSAPMaterialNumber").setValue(issueSAPMatNum);
				newIssue.getValue("IssueProductionIdentifier").setValue(issueIssProdId);
				newIssue.getValue("IssueFromIssueNumber").setValue(issueIssueFromIssue);
				newIssue.getValue("IssueFromVolume").setValue(issueIssueFromVolume);
				newIssue.getValue("IssueFurtherDescription").setValue(issueFurtherDesc);
				newIssue.getValue("IssueToIssueNumber").setValue(issueIssueToIssue);
				newIssue.getValue("IssueSupplementNo").setValue(issueSupplementNo);
				
				newIssue.setName(issueSTEPName);
				log.info("digital issue Name= "+newIssue.getName());
			}
			if(journalMediaType == "Print"){	
				//also create the issue directly under the volume
				var newIssue = volumeMatchObj.createProduct('',objJPI);
				log.info("Print newIssue= "+newIssue);

				//Assigning Issue attributes to the issue level 	
				newIssue.getValue("IssueTitle").setValue(issueTitle);
				newIssue.getValue("IssueId").setValue(issID);
				newIssue.getValue("JANISIssueRunDate").setValue(issueRunDate);	
				newIssue.getValue("IssueStatus").setValue(issueStatus);
				newIssue.getValue("IssueType").setValue(issueType);
				newIssue.getValue("IssueJpcmsId").setValue(issueJPCMS);
				newIssue.getValue("JANISProductOriginalPublicationDate").setValue(issueOrgPubDate);
				newIssue.getValue("IssuePublicationType").setValue(issuePubType);
				newIssue.getValue("IssuePubSequence").setValue(issuePubSeq);
				newIssue.getValue("IssueReportingYear").setValue(issueReportYear);
				newIssue.getValue("JANISProductRevisedPublicationDate").setValue(issueRevisedDate);
				newIssue.getValue("IssueSAPMaterialNumber").setValue(issueSAPMatNum);
				newIssue.getValue("IssueProductionIdentifier").setValue(issueIssProdId);
				newIssue.getValue("IssueFromIssueNumber").setValue(issueIssueFromIssue);
				newIssue.getValue("IssueFromVolume").setValue(issueIssueFromVolume);
				newIssue.getValue("IssueFurtherDescription").setValue(issueFurtherDesc);
				newIssue.getValue("IssueToIssueNumber").setValue(issueIssueToIssue);
				newIssue.getValue("IssueSupplementNo").setValue(issueSupplementNo);
				
				newIssue.setName(issueSTEPName);
				log.info("Print Issue Name= "+newIssue.getName());
			}
		}
	}
}
}