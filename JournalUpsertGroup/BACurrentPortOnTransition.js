/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BACurrentPortOnTransition",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalUpsertGroup" ],
  "name" : "BACurrentPortOnTransition",
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
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (LOG,NODE) {
var nodeObjectType = NODE.getObjectType();
//logger.info(nodeObjectType + " nodeObjectType");
var acceptingSub = "";
var journalMediaChildren = "";
var productStatus = "";
var journalMediaType = "";
var journal = "";
const JOURNAL_CURRENT_PORTFOLIO_ID = "JournalCurrentPortfolio";
const JOURNAL_CURRENT_PORTFOLIO_OVERRIDE_ID = "JournalCurrentPortfolioOverride"; 
const JOURNAL_TRUE_STATUS_ID = "JournalTrueStatus"; 
const JOURNAL_EDITORIAL_STAGE_ID = "JournalEditorialStage";
const PRODUCT_TYPE_ID = "ProductType";
const PRODUCT_ACTIVATED_ID = "ProductActivated"; 
const TLT_ID = "TLT_Values";
const WF_JOURNAL_CREATION_ID = "JournalCreationWFV3Backup";


const STATES_THIRTEEN = "State-13";
//logger.info(STATES_THIRTEEN);
var productActivatedTra = NODE.getValue(PRODUCT_ACTIVATED_ID).getSimpleValue();
//logger.info(productActivatedTra + "productActivatedTra");
var jrnlCurrentPortfolioValue = NODE.getValue(JOURNAL_CURRENT_PORTFOLIO_ID).getSimpleValue();
//logger.info(jrnlCurrentPortfolioValue + "  :-  jrnlCurrentPortfolioValue  " );

var jrnlCurrentPortfolioValueOverTra = NODE.getValue(JOURNAL_CURRENT_PORTFOLIO_OVERRIDE_ID).getSimpleValue();
//logger.info(jrnlCurrentPortfolioValueOverTra + "  :-  jrnlCurrentPortfolioValueOverTra  ");

var JrnlTrueStatusValueTra = NODE.getValue(JOURNAL_TRUE_STATUS_ID).getSimpleValue();
//logger.info(JrnlTrueStatusValueTra + "  :-  JrnlTrueStatusValueTra  " );

var jrnlEditiorialStageValueTra = NODE.getValue(JOURNAL_EDITORIAL_STAGE_ID).getSimpleValue();
//logger.info(jrnlEditiorialStageValueTra + "  :-  jrnlEditiorialStageValueTra  ");

var jrnlProductTypeValue = NODE.getValue(PRODUCT_TYPE_ID).getSimpleValue();
//logger.info(jrnlProductTypeValue + "  :-  jrnlProductTypeValue  ");
var journalCurrentPortfolioID = null;
var journalTrueStatusIDTra = null;
var jrnlEditiorialStageID = null;
var jrnlProductTypeID = null;
var journalCurrentPortfolioOverID = null;


if (JrnlTrueStatusValueTra != null) {
    journalTrueStatusIDTra = NODE.getValue(JOURNAL_TRUE_STATUS_ID).getLOVValue().getID();
    //logger.info(journalTrueStatusIDTra + "  :-  journalTrueStatusIDTra  ");
}

if (jrnlProductTypeValue != null) {
    jrnlProductTypeIDTra = NODE.getValue(PRODUCT_TYPE_ID).getLOVValue().getID();
    // logger.info(jrnlProductTypeIDTra + "  :-  jrnlProductTypeIDTra  ");
}

function CurrentDerivation() {
    if (productActivatedTra == "In Progress" || productActivatedTra == "") {
        if (jrnlCurrentPortfolioValueOverTra == "No" || jrnlCurrentPortfolioValueOverTra == null) {
            //logger.info("Tranistion 1st")
            if (journalTrueStatusIDTra == "Y") {
              //  logger.info("Inside true status s");
                if (jrnlEditiorialStageValueTra == "Active" || jrnlEditiorialStageValueTra == "Active - Externally Hosted" || jrnlEditiorialStageValueTra == "Active - Not open for submissions" || jrnlEditiorialStageValueTra == "Inactive - Open for Submissions" || jrnlEditiorialStageValueTra == "Inactive - Not open for submissions") {
                   // logger.info("inside editorial 2");
                    if (jrnlProductTypeIDTra == "JR" || jrnlProductTypeIDTra == "NS") {
                      //  logger.info("second");
                        journal.getValue(JOURNAL_CURRENT_PORTFOLIO_ID).setLOVValueByID("Y");
                    } else {
                        journal.getValue(JOURNAL_CURRENT_PORTFOLIO_ID).setLOVValueByID("N");
                    }
                } else {
                    journal.getValue(JOURNAL_CURRENT_PORTFOLIO_ID).setLOVValueByID("N");
                }
            } else {
                journal.getValue(JOURNAL_CURRENT_PORTFOLIO_ID).setLOVValueByID("N");
            }
        }
    }
}


if (nodeObjectType.getName() == "Journal") {
    journal = NODE;
} else {
    journal = NODE.getParent();
}

journalMediaChildren = journal.getChildren().toArray();
//logger.info(journalMediaChildren);
journalMediaType = journal.getValue("ProductMediaType").getSimpleValue();
//logger.info(journalMediaType + "journalMediaType");


for (var i = 0; i < journalMediaChildren.length; i++) {
    if (journalMediaType == "Both" || journalMediaType == "Online" || journalMediaType == "Print") {
        CurrentDerivation();
        break;
    } else {
        CurrentDerivation();
        break;
    }
}
}