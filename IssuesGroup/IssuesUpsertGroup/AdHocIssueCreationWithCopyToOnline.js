/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "AdHocIssueCreationWithCopyToOnline",
  "type" : "BusinessAction",
  "setupGroups" : [ "IssuesUpsertGroup" ],
  "name" : "Ad Hoc Issue Creation With Copy To Online",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalDigitalVolumes", "JournalPrintVolumes" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "PublicationYearFunctions",
    "libraryAlias" : "pubLibrary"
  }, {
    "libraryId" : "VolumeFunctions",
    "libraryAlias" : "volumeLibrary"
  }, {
    "libraryId" : "JournalFunctions",
    "libraryAlias" : "journalLibrary"
  }, {
    "libraryId" : "IssueFunctions",
    "libraryAlias" : "issueLibrary"
  } ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
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
    "alias" : "numberOfIssues",
    "parameterClass" : "com.stibo.core.domain.businessrule.attributecontextparameter.AttributeValidatedContextParameter",
    "value" : "<AttributeValidatedContextParameter>\n  <Parameters>\n    <Parameter ID=\"Attribute\" Type=\"java.lang.String\">NumberOfIssues</Parameter>\n    <Parameter ID=\"ID\" Type=\"java.lang.String\">Number of Issues</Parameter>\n  </Parameters>\n</AttributeValidatedContextParameter>",
    "description" : null
  }, {
    "contract" : "AttributeValidatedContextParameterStringBinding",
    "alias" : "issueTypeValueId",
    "parameterClass" : "com.stibo.core.domain.businessrule.attributecontextparameter.AttributeValidatedContextParameter",
    "value" : "<AttributeValidatedContextParameter>\n  <Parameters>\n    <Parameter ID=\"Attribute\" Type=\"java.lang.String\">IssueType</Parameter>\n    <Parameter ID=\"ID\" Type=\"java.lang.String\">Issue Type</Parameter>\n  </Parameters>\n</AttributeValidatedContextParameter>",
    "description" : null
  }, {
    "contract" : "AttributeValidatedContextParameterStringBinding",
    "alias" : "continuousNumberingValueId",
    "parameterClass" : "com.stibo.core.domain.businessrule.attributecontextparameter.AttributeValidatedContextParameter",
    "value" : "<AttributeValidatedContextParameter>\n  <Parameters>\n    <Parameter ID=\"Attribute\" Type=\"java.lang.String\">ContinuousNumbering</Parameter>\n    <Parameter ID=\"ID\" Type=\"java.lang.String\">Continuous Numbering</Parameter>\n  </Parameters>\n</AttributeValidatedContextParameter>",
    "description" : null
  }, {
    "contract" : "ListOfValuesBindContract",
    "alias" : "IssueType_LOV",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "IssueType_LOV",
    "description" : null
  }, {
    "contract" : "ListOfValuesBindContract",
    "alias" : "YESNO_LOV",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "YESNO_LOV",
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "AttributeValidatedContextParameterStringBinding",
    "alias" : "copyToOnline",
    "parameterClass" : "com.stibo.core.domain.businessrule.attributecontextparameter.AttributeValidatedContextParameter",
    "value" : "<AttributeValidatedContextParameter>\n  <Parameters>\n    <Parameter ID=\"Attribute\" Type=\"java.lang.String\">CopyToOnline</Parameter>\n    <Parameter ID=\"ID\" Type=\"java.lang.String\">Copy To Online</Parameter>\n  </Parameters>\n</AttributeValidatedContextParameter>",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (NODE,UI,numberOfIssues,issueTypeValueId,continuousNumberingValueId,IssueType_LOV,YESNO_LOV,LOG,copyToOnline,pubLibrary,volumeLibrary,journalLibrary,issueLibrary) {
var issueNumber = 0;
var pubSequence = "";
var pubYear = NODE.getParent();
var journalMedia = pubYear.getParent();
var journalMediaCode = journalMedia.getValue("JournalMediaCode").getSimpleValue();
var journal = journalMedia.getParent();
var issueType = IssueType_LOV.getListOfValuesValueByID(issueTypeValueId).getValue();
var continuousNumbering = YESNO_LOV.getListOfValuesValueByID(continuousNumberingValueId).getValue();
var issue = "";

for (var i = 0; i < (numberOfIssues*1); i++){
	pubSequence = journalMedia.getValue("StartingPubSequenceMedia").getSimpleValue();
	
	switch(true){
		case (issueType == "Standard Issue"):
			if (continuousNumbering == "Yes"){
				issueNumber = parseInt(journalMedia.getValue("StartingIssueNumber").getSimpleValue());
			} else {
				issueNumber = parseInt(NODE.getValue("StartingIssueNumberVolume").getSimpleValue());
			}
			break;
		case (issueType == "Supplement"):
			if (continuousNumbering == "Yes"){
				issueNumber = parseInt(journalMedia.getValue("StartingSupplementNoYear").getSimpleValue());
			} else {
				issueNumber = parseInt(NODE.getValue("StartingSupplementNoVolume").getSimpleValue());
			}
			break;
	}
	
	issue = issueLibrary.createIssue(NODE, issueNumber, issueType, pubSequence);
	
	if (copyToOnline == "Y"){
		pubLibrary.yearCopyToOnline(pubYear);
		volumeLibrary.volumeCopyToOnline(NODE);
		issueLibrary.issueCopyToOnline(issue);
	}
}

UI.showAlert("INFO", numberOfIssues + " issues have been created!","");
}
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessConditionWithBinds",
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
    "contract" : "ListOfValuesBindContract",
    "alias" : "IssueType_LOV",
    "parameterClass" : "com.stibo.core.domain.impl.ListOfValuesImpl",
    "value" : "IssueType_LOV",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Precondition"
}
*/
exports.precondition0 = function (node,manager,IssueType_LOV,pubLibrary,volumeLibrary,journalLibrary,issueLibrary) {
var issueType = node.getValue("IssueType").getSimpleValue();
var issueSapMaterialNum = node.getValue("IssueSAPMaterialNumber").getSimpleValue();
var journalNumberOfVolumes = node.getValue("IssueVolumeNumber").getSimpleValue();
var journalNumberOfVolumesPadded = pad(journalNumberOfVolumes, 4);
var numberOfIssuesPadded = "";
var journalMediaCode = node.getValue("JournalMediaCode").getSimpleValue();
var SAPMat = '';
var maxIssueNumber = "1";
var issueNumber = "";

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

if (journalMediaCode == "Print"){
	journalMediaCode = "P";
} else {
	journalMediaCode = "D";
}


if (issueType == IssueType_LOV.getListOfValuesValueByID("ST").getValue()){
	numberOfIssuesPadded = pad(maxIssueNumber, 7);

	 SAPMat = issueSapMaterialNum.substring(0,4) + journalNumberOfVolumesPadded + numberOfIssuesPadded + journalMediaCode;
} else if (issueType == IssueType_LOV.getListOfValuesValueByID("SU").getValue()){
	numberOfIssuesPadded = pad(maxIssueNumber, 6);

	 SAPMat = issueSapMaterialNum.substring(0,4) + journalNumberOfVolumesPadded + "S" + numberOfIssuesPadded + journalMediaCode;
}
	
var checkSAPMat = manager.getNodeHome().getObjectByKey("IssueSAPMaterialIdKey",SAPMat);
if(checkSAPMat == null){
	return true;
}
return "An issue already exists with this Volume and issue number";
}