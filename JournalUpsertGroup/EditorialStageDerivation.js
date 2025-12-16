/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "EditorialStageDerivation",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalUpsertGroup" ],
  "name" : "Editorial Stage Derivation",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "Journal", "JournalDigitalMedia" ],
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
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ListOfValuesBindContract",
    "alias" : "editorialStageLov",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "EditorialStage_LOV",
    "description" : null
  }, {
    "contract" : "ListOfValuesBindContract",
    "alias" : "acceptingSubLov",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "AcceptingSubmission_LOV",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (LOG,NODE,editorialStageLov,acceptingSubLov) {
/*
 * This code does the following: 
 * - Gets Accepting Submission and Journal Media Type of the current object as well as it's children
 * - Defaults to "No" Accepting Submission if its empty/null
 * - Runs through the current object children and derivates Editorial Stage using Accepting Submission and Journal Media Status.
 */
var nodeObjectType = NODE.getObjectType();
var acceptingSub = "";
var journalMediaChildren = "";
var productStatus = "";
var journalMediaType = "";
var journal = "";

function editorialStageDerivation(){	
	productStatus = journalMediaChildren[i].getValue("ProductStatus").getSimpleValue();

	if (acceptingSub == "Dummy"){
		journal.getValue("JournalEditorialStage").setSimpleValue("Inactive - Not a publication");
	} else {	
		switch(true){
			case (productStatus == "Current publication"):
				if (acceptingSub == "Yes"){
					journal.getValue("JournalEditorialStage").setSimpleValue("Active");
				}
				if (acceptingSub == "No" || acceptingSub == "Pre-EEO Launch"){
					journal.getValue("JournalEditorialStage").setSimpleValue("Active - Not open for submissions");
				}
				if (acceptingSub == "Yes externally hosted"){
					journal.getValue("JournalEditorialStage").setSimpleValue("Active - Externally Hosted");
				}
				if (acceptingSub == "Pre-public Takeover" || acceptingSub == "Pre-public Launch"){
					journal.getValue("JournalEditorialStage").setSimpleValue("Inactive - Not open for submissions");
				}
				break;
			case (productStatus == "To Be Ceased"):
				if (acceptingSub == "Yes"){
					journal.getValue("JournalEditorialStage").setSimpleValue("Active");
				}
				if (acceptingSub == "No"){
					journal.getValue("JournalEditorialStage").setSimpleValue("Active - Not open for submissions");
				}
				if (acceptingSub == "Retro Billing"){
					journal.getValue("JournalEditorialStage").setSimpleValue("Inactive");
				}
				break;
			case (productStatus == "To be Outsourced"):
				if (acceptingSub == "Yes"){
					journal.getValue("JournalEditorialStage").setSimpleValue("Active");
				}
				if (acceptingSub == "No"){
					journal.getValue("JournalEditorialStage").setSimpleValue("Active - Not open for submissions");
				}
				break;
			case (productStatus == "To be sold/Transfrd"):
				if (acceptingSub == "Yes"){
					journal.getValue("JournalEditorialStage").setSimpleValue("Active");
				}
				if (acceptingSub == "No"){
					journal.getValue("JournalEditorialStage").setSimpleValue("Active - Not open for submissions");
				}
				if (acceptingSub == "Retro Billing"){
					journal.getValue("JournalEditorialStage").setSimpleValue("Inactive");
				}
				break;	
			case (productStatus == "Not yet published"):
				if (acceptingSub == "Yes"){
					journal.getValue("JournalEditorialStage").setSimpleValue("Inactive - Open for Submissions");
				}
				if (acceptingSub == "No" || acceptingSub == "Pre-public Takeover" || acceptingSub == "Pre-public Launch" || acceptingSub == "Pre-EEO Launch"){
					journal.getValue("JournalEditorialStage").setSimpleValue("Inactive - Not open for submissions");
				}
				break;
			default:
				if (acceptingSub == "Yes" || acceptingSub == "No" || acceptingSub == "Pre-public Takeover" || acceptingSub == "Pre-public Launch" || acceptingSub == "Pre-EEO Launch"){
					journal.getValue("JournalEditorialStage").setSimpleValue("Inactive");
				}
		}
	}
}

if (nodeObjectType.getName() == "Journal"){
	journal = NODE;
} else {
	journal = NODE.getParent();
}

acceptingSub = journal.getValue("JournalAcceptingSubmission").getSimpleValue();
journalMediaChildren = journal.getChildren().toArray();
journalMediaType = journal.getValue("ProductMediaType").getSimpleValue();

if (acceptingSub == "" || acceptingSub == null){
	//acceptingSub = acceptingSubLov.getListOfValuesValueByID("02").getValue();
	acceptingSub = acceptingSubLov.getListOfValuesValueByID("07").getValue(); // set "Pre-EEO Launch" as default value as per RPDM-10531
	journal.getValue("JournalAcceptingSubmission").setSimpleValue(acceptingSub);
}

for(var i = 0; i < journalMediaChildren.length; i++){
	if (journalMediaType == "Both" || journalMediaType == "Online"){
		if (journalMediaChildren[i].getValue("JournalMediaCode").getSimpleValue() != "Print"){
			editorialStageDerivation();
			break;
		}
	} else {
		editorialStageDerivation();
		break;
	}
}
}