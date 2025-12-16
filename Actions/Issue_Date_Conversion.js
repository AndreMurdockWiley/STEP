/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "Issue_Date_Conversion",
  "type" : "BusinessAction",
  "setupGroups" : [ "ConversionGroup" ],
  "name" : "Issue Date Conversion",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "JournalDigitalMedia" ],
  "allObjectTypesValid" : true,
  "runPrivileged" : true,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "GenericFunctions",
    "libraryAlias" : "genericFunctions"
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
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "MANAGER",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (LOG,NODE,MANAGER,genericFunctions) {
/*
 * This code does the following:
 * - Converts and parse Janis Date values for the STEP Date attributes: ProductOriginalPublicationDate, IssueRunDate, ProductRevisedPublicationDate
*/
var issueJanisDateAttribGroup = MANAGER.getAttributeGroupHome().getAttributeGroupByID('AG _ISSUEJANISDATEATTRIBUTES');
var attributeList = issueJanisDateAttribGroup.getAttributes().toArray();
var attributeID = "";
var date = "";
var simpleDateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd");

//LOG.info(attributeList.length);

for(var i = 0; i < attributeList.length; i++){
	attributeID = attributeList[i].getID();
	date = NODE.getValue(attributeID).getSimpleValue();

	try {
		if(attributeID == "JANISProductOriginalPublicationDate"){
			var IssueOrgPubDate = simpleDateFormat.parse(genericFunctions.dateConverter(NODE.getValue("JANISProductOriginalPublicationDate").getSimpleValue(), LOG));
			//LOG.info("Org Pub Date -" + IssueOrgPubDate);
			NODE.getValue("ProductOriginalPublicationDate").setValue(simpleDateFormat.format(IssueOrgPubDate));
		}
		if(attributeID == "JANISProductRevisedPublicationDate"){
			var IssueRevisedPubDate = simpleDateFormat.parse(genericFunctions.dateConverter(NODE.getValue("JANISProductRevisedPublicationDate").getSimpleValue(), LOG));
			//LOG.info("Issue Revised Pub Date " + IssueRevisedPubDate);
			NODE.getValue("ProductRevisedPublicationDate").setValue(simpleDateFormat.format(IssueRevisedPubDate));
		}
		if(attributeID == "JANISIssueRunDate"){
			var IssueRunDate = simpleDateFormat.parse(genericFunctions.dateConverter(NODE.getValue("JANISIssueRunDate").getSimpleValue(), LOG));
			//LOG.info("Issue Run Date " + IssueRunDate);
			NODE.getValue("IssueRunDate").setValue(simpleDateFormat.format(IssueRunDate));
		}
	} catch (e) {
		LOG.info(e);
	}
}
}