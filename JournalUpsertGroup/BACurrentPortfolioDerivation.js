/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BACurrentPortfolioDerivation",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalUpsertGroup" ],
  "name" : "Current Portfolio Derivation",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "Journal" ],
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
    "alias" : "node",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "mgr",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LookupTableHomeBindContract",
    "alias" : "lth",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (LOG,node,mgr,lth) {
/*
 * */
var c = node.getObjectType();
const JOURNAL_CURRENT_PORTFOLIO_ID = "JournalCurrentPortfolio";
const JOURNAL_CURRENT_PORTFOLIO_OVERRIDE_ID = "JournalCurrentPortfolioOverride";
const JOURNAL_TRUE_STATUS_ID = "JournalTrueStatus";
const JOURNAL_EDITORIAL_STAGE_ID = "JournalEditorialStage";
const PRODUCT_TYPE_ID = "ProductType";
const PRODUCT_ACTIVATED_ID = "ProductActivated";
const TLT_ID = "TLT_Values";
const WF_JOURNAL_CREATION_ID = "JournalCreationWFV3Backup";
const WF_JOUR_CRE_INSTANCE = node.getWorkflowInstanceByID(WF_JOURNAL_CREATION_ID);
const STATES_THIRTEEN = "State-13";



var productActivated = node.getValue(PRODUCT_ACTIVATED_ID).getSimpleValue();
var jrnlCurrentPortfolioValue = node.getValue(JOURNAL_CURRENT_PORTFOLIO_ID).getSimpleValue();
var jrnlCurrentPortfolioValueOver = node.getValue(JOURNAL_CURRENT_PORTFOLIO_OVERRIDE_ID).getSimpleValue();
var JrnlTrueStatusValue = node.getValue(JOURNAL_TRUE_STATUS_ID).getSimpleValue();
var jrnlEditiorialStageValue = node.getValue(JOURNAL_EDITORIAL_STAGE_ID).getSimpleValue();
var jrnlProductTypeValue = node.getValue(PRODUCT_TYPE_ID).getSimpleValue();

var journalCurrentPortfolioID = null;
var journalTrueStatusID = null;
var jrnlEditiorialStageID = null;
var jrnlProductTypeID = null;
var journalCurrentPortfolioOverID = null;


if (JrnlTrueStatusValue != null) {
    journalTrueStatusID = node.getValue(JOURNAL_TRUE_STATUS_ID).getLOVValue().getID();
}

if (jrnlProductTypeValue != null) {
    jrnlProductTypeID = node.getValue(PRODUCT_TYPE_ID).getLOVValue().getID();
}
if (!node.isInState(WF_JOURNAL_CREATION_ID, STATES_THIRTEEN)) {
    if (productActivated == "Activated") {
        if (jrnlCurrentPortfolioValueOver == "No" || jrnlCurrentPortfolioValueOver == null) {
            if (journalTrueStatusID == "Y") {
                if (jrnlEditiorialStageValue == "Active" || jrnlEditiorialStageValue == "Active - Externally Hosted" || jrnlEditiorialStageValue == "Active - Not open for submissions" || jrnlEditiorialStageValue == "Inactive - Open for Submissions" || jrnlEditiorialStageValue == "Inactive - Not open for submissions") {
                    if (jrnlProductTypeID == "JR" || jrnlProductTypeID == "NS") {
                        node.getValue(JOURNAL_CURRENT_PORTFOLIO_ID).setLOVValueByID("Y");
                    } else {
                        node.getValue(JOURNAL_CURRENT_PORTFOLIO_ID).setLOVValueByID("N");
                    }
                } else {
                    node.getValue(JOURNAL_CURRENT_PORTFOLIO_ID).setLOVValueByID("N");
                }
            } else {
                node.getValue(JOURNAL_CURRENT_PORTFOLIO_ID).setLOVValueByID("N");
            }
        }

    }
}

}