/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "IssueStatusMassUpdateBoth",
  "type" : "BusinessAction",
  "setupGroups" : [ "IssuesUpsertGroup" ],
  "name" : "Issue Status Mass Update Both",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "Group Issue Functions",
    "libraryAlias" : "link"
  } ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "WebUiContextBind",
    "alias" : "UI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "AttributeValidatedContextParameterStringBinding",
    "alias" : "issueStatusId",
    "parameterClass" : "com.stibo.core.domain.businessrule.attributecontextparameter.AttributeValidatedContextParameter",
    "value" : "<AttributeValidatedContextParameter>\n  <Parameters>\n    <Parameter ID=\"Attribute\" Type=\"java.lang.String\">IssueStatus</Parameter>\n    <Parameter ID=\"ID\" Type=\"java.lang.String\">Issue Status</Parameter>\n  </Parameters>\n</AttributeValidatedContextParameter>",
    "description" : null
  }, {
    "contract" : "ListOfValuesBindContract",
    "alias" : "ISSUSTATUS_LOV",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "ISSUSTATUS_LOV",
    "description" : null
  }, {
    "contract" : "AttributeValidatedContextParameterStringBinding",
    "alias" : "replicateOtherMedia",
    "parameterClass" : "com.stibo.core.domain.businessrule.attributecontextparameter.AttributeValidatedContextParameter",
    "value" : "<AttributeValidatedContextParameter>\n  <Parameters>\n    <Parameter ID=\"Attribute\" Type=\"java.lang.String\">ReplicateOtherMedia</Parameter>\n    <Parameter ID=\"ID\" Type=\"java.lang.String\">Replicate Other Media</Parameter>\n  </Parameters>\n</AttributeValidatedContextParameter>",
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "mgr",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "groupIssueOIEPkafka",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Group_Issues_Data_Extract_Kafka",
    "description" : null
  }, {
    "contract" : "EventQueueBinding",
    "alias" : "groupIssueOIEP",
    "parameterClass" : "com.stibo.core.domain.impl.integrationendpoint.FrontOutboundIntegrationEndpointImpl",
    "value" : "step://OutBoundIntegrationEndpoint?id=Group_Issues_Data_Extract",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (UI,issueStatusId,ISSUSTATUS_LOV,replicateOtherMedia,mgr,groupIssueOIEPkafka,groupIssueOIEP,link) {
var uiSelection = UI.getSelection();
var uiSelectionVolume = uiSelection.get(0).getParent();
var uiSelectionPubYear = uiSelectionVolume.getParent();
var uiSelectionMedia = uiSelectionPubYear.getParent();
var uiSelectionJounral = uiSelection.get(0).getParent().getParent().getParent().getParent();
var altMediaJournalMedias = "";
var altMediaPubYears = "";
var altMediaVolumes = "";
var altMediaIssues = "";
var issueStatus = ISSUSTATUS_LOV.getListOfValuesValueByID(issueStatusId).getValue();
var severity = "ACKNOWLEDGEMENT";
var headline = "Issue status succesfully updated!";
var body = "Issue(s) succesfully updated.";

for(var i=0; i < uiSelection.size(); i++) {
	uiSelection.get(i).getValue("IssueStatus").setSimpleValue(issueStatus);
	// Populate Group Issue Classification object on all types of Issues (Standard Issues, Merge Issues and Supplement)
	link.createAndUpdateGroupIssues(uiSelection.get(i), mgr, logger, groupIssueOIEPkafka, groupIssueOIEP)
}

if (replicateOtherMedia == 'Y'){
	//asign all the journal medias
	altMediaJournalMedias = uiSelectionJounral.getChildren();
	//populate media code for the selected issue
	myJournalMediaCode = uiSelectionMedia.getValue("JournalMediaCode").getSimpleValue();

	//loop all the jorunal medias
	for (var j = 0; j < altMediaJournalMedias.size(); j++){
		//populate journal media code for current journal media in the loop
		compareJournalMediaCode = altMediaJournalMedias.get(j).getValue("JournalMediaCode").getSimpleValue();

		//if it's the other media
		if (compareJournalMediaCode != myJournalMediaCode){
			//obtain all the pubYears
			altMediaPubYears = altMediaJournalMedias.get(j).getChildren();


               //loop the pub years
			for (var k = 0; k < altMediaPubYears.size(); k++){

				//if the pub year is the same than our selected issue pub year
				if (altMediaPubYears.get(k).getName() == uiSelectionPubYear.getName()){
					//obtain all the volumes
					altMediaVolumes = altMediaPubYears.get(k).getChildren();

					//loop the volumes
					for (var l = 0; l < altMediaVolumes.size(); l++){

						//if the volume is the same than our selected issue volume
						if (altMediaVolumes.get(l).getName() == uiSelectionVolume.getName()){
							//obtain all the selected issues
							altMediaIssues = altMediaVolumes.get(l).getChildren();

							//loop the issues
							for (var m = 0; m < altMediaIssues.size(); m++){
	
								//loop the selected issues
								for (var n = 0; n < uiSelection.size(); n++){
	
									//if the selected issue is the same than our issue
									if (uiSelection.get(n).getName() == altMediaIssues.get(m).getName()){
										altMediaIssues.get(m).getValue("IssueStatus").setSimpleValue(issueStatus);
									}
									
								}
								
							}
							
						}
					}
				}
			}
		}
	}
}



UI.showAlert(severity, headline, body);
}