/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_TAEligibility_Derivation",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalUpsertGroup" ],
  "name" : "BA_TAEligibility_Derivation",
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
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (LOG,node,mgr) {
/*
  -This rule sets the logic for Read,Decision,and Publish Decision Path 
  
*/
var c = node.getObjectType();
const JOURNAL_TA_ELIGIBILITY_CURRENT_ID = "JournalTAEligibleCurrent";
const JOURNAL_TA_ELIGIBILITY_OVERRIDE_OVERRIDE_ID = "JournalTAEligibilityOverride";
const JOURNAL_TRUE_STATUS_ID = "JournalTrueStatus";
const JOURNAL_TA_ELIGIBILITY_FUTURE_ID = "JournalTAEligibleFuture";
const JOURNAL_INCURRENT_DATABASEMODEL_ID = "JournalInCurrentDatabaseModel";
const JOURNAL_INFUTURE_DATABASEMODEL_ID = "JournalInFutureDatabaseModel";
const JOURNAL_TA_TYPE_ID = "JournalTAType";
const JOURNAL_OWNER_ID = "JournalOwner";
const PRODUCT_STATUS_ID = "ProductStatus";
const PRODUCT_TYPE_ID = "ProductType";
const JOURNAL_EDITORIAL_STAGE_ID = "JournalEditorialStage";
const PRODUCT_REVENUE_MODEL_ID = "ProductRevenueModel"

var journalTrueStatusID1 = null;
var JournalInCurrentDatabaseModelID1 = null;
var JournalInFutureDatabaseModelID1 = null;
var JournalOwnerID1 = null;
var ProductStatusID1 = null;
var jrnlProductTypeID1 = null;
var jrnlEditiorialStageID1 = null;
var journalProductRevenueModelID = null;
var journalTAEligibleCurrentID1 = null;
var journalTAEligibleFutureID1 = null;

var ProductStatusValue1 = node.getValue(PRODUCT_STATUS_ID).getSimpleValue();
var jrnlTaEligibilityValueOver = node.getValue(JOURNAL_TA_ELIGIBILITY_OVERRIDE_OVERRIDE_ID).getSimpleValue();
//logger.info(jrnlTaEligibilityValueOver + "  :-  jrnlTaEligibilityValueOver  ");
var JournalTAEligibleCurrentValue1 = node.getValue(JOURNAL_TA_ELIGIBILITY_CURRENT_ID).getSimpleValue();
var JrnlTrueStatusValue1 = node.getValue(JOURNAL_TRUE_STATUS_ID).getSimpleValue();
var JournalInCurrentDatabaseModelValue1 = node.getValue(JOURNAL_INCURRENT_DATABASEMODEL_ID).getSimpleValue();
var jrnlProductTypeValue1 = node.getValue(PRODUCT_TYPE_ID).getSimpleValue();
var JournalInFutureDatabaseModelValue1 = node.getValue(JOURNAL_INFUTURE_DATABASEMODEL_ID).getSimpleValue();
var JournalOwnerValue1 = node.getValue(JOURNAL_OWNER_ID).getSimpleValue();
//logger.info(JournalOwnerValue1);
var JournalEditorialStageValue1 = node.getValue(JOURNAL_EDITORIAL_STAGE_ID).getSimpleValue();
var jrnlProductRevenueModelvalue = node.getValue(PRODUCT_REVENUE_MODEL_ID).getSimpleValue();
//logger.info(jrnlProductRevenueModelvalue);
var JournalTAEligibleFutureValue1 = node.getValue(JOURNAL_TA_ELIGIBILITY_FUTURE_ID).getSimpleValue();
if (JournalInCurrentDatabaseModelValue1 != null) {
    JournalInCurrentDatabaseModelID1 = node.getValue(JOURNAL_INCURRENT_DATABASEMODEL_ID).getLOVValue().getID();
}
if (ProductStatusValue1 != null) {
    ProductStatusID1 = node.getValue(PRODUCT_STATUS_ID).getLOVValue().getID();
}
if (JournalInFutureDatabaseModelValue1 != null) {
    JournalInFutureDatabaseModelID1 = node.getValue(JOURNAL_INFUTURE_DATABASEMODEL_ID).getLOVValue().getID();
}
if (jrnlProductTypeValue1 != null) {
    jrnlProductTypeID1 = node.getValue(PRODUCT_TYPE_ID).getLOVValue().getID();
}
if (JrnlTrueStatusValue1 != null) {
    journalTrueStatusID1 = node.getValue(JOURNAL_TRUE_STATUS_ID).getLOVValue().getID();
}
if (jrnlProductRevenueModelvalue != null) {
    journalProductRevenueModelID = node.getValue(PRODUCT_REVENUE_MODEL_ID).getLOVValue().getID();
  //  logger.info(journalProductRevenueModelID);
}
if (JournalOwnerValue1 != null) {
    JournalOwnerID1 = node.getValue(JOURNAL_OWNER_ID).getLOVValue().getID();
}
if (JournalEditorialStageValue1 != null) {
    jrnlEditiorialStageID1 = node.getValue(JOURNAL_EDITORIAL_STAGE_ID).getLOVValue().getID();

}
if (JournalTAEligibleCurrentValue1 != null) {
    journalTAEligibleCurrentID1 = node.getValue(JOURNAL_TA_ELIGIBILITY_CURRENT_ID).getLOVValue().getID();
}
if (JournalTAEligibleFutureValue1 != null) {
    journalTAEligibleFutureID1 = node.getValue(JOURNAL_TA_ELIGIBILITY_FUTURE_ID).getLOVValue().getID();

}
//logger.info(journalTrueStatusID1 +  "  sdjjdj");
//First step of logic
if (c = "Journal") {
	
	if (jrnlTaEligibilityValueOver == "No" || jrnlTaEligibilityValueOver == null) {

    node.getValue(JOURNAL_TA_ELIGIBILITY_CURRENT_ID).setLOVValueByID("N");
    node.getValue(JOURNAL_TA_ELIGIBILITY_FUTURE_ID).setLOVValueByID("N");

    //Generic "Decision" Path
    if (journalTrueStatusID1 != "N") {

        node.getValue(JOURNAL_TA_ELIGIBILITY_CURRENT_ID).setLOVValueByID("Y");
        node.getValue(JOURNAL_TA_ELIGIBILITY_FUTURE_ID).setLOVValueByID("Y");

    } else {

        node.getValue(JOURNAL_TA_ELIGIBILITY_CURRENT_ID).setLOVValueByID("N");
        node.getValue(JOURNAL_TA_ELIGIBILITY_FUTURE_ID).setLOVValueByID("N");

    }


    //“Read” Decision Path 
    var attcurrent = node.getValue(JOURNAL_TA_ELIGIBILITY_CURRENT_ID).getSimpleValue();
    var attfuture = node.getValue(JOURNAL_TA_ELIGIBILITY_FUTURE_ID).getSimpleValue();

    if ((attcurrent != "No" && attfuture != "No")) {

        if (JournalInCurrentDatabaseModelID1 != "N") {

            node.getValue(JOURNAL_TA_ELIGIBILITY_CURRENT_ID).setLOVValueByID("Y");

        } else {

            node.getValue(JOURNAL_TA_ELIGIBILITY_CURRENT_ID).setLOVValueByID("N");
        }

        if (JournalInFutureDatabaseModelID1 != "Y" || JournalInFutureDatabaseModelID1 == null) {
            node.getValue(JOURNAL_TA_ELIGIBILITY_FUTURE_ID).setLOVValueByID("N");

        } else {
            node.getValue(JOURNAL_TA_ELIGIBILITY_FUTURE_ID).setLOVValueByID("Y");

        }
    }



    //“Publish” Decision Path
    var nodeObjectType = node.getObjectType();
    if (nodeObjectType.getName() == "Journal") {
        journal = node;
    } else {
        journal = node.getParent();
    }
    var journalMediaChildren = "";
    journalMediaChildren = journal.getChildren().toArray();

    journalMediaType = journal.getValue("ProductMediaType").getSimpleValue();
DigitalProductStstus = journal.getValue("ProductStatus").getSimpleValue();
//logger.info(DigitalProductStstus +  " DigitalProductStstus");

    for (var i = 0; i < journalMediaChildren.length; i++) {
        if (journalMediaType == "Both" || journalMediaType == "Online" || journalMediaType == "Print") {
            if (journalMediaChildren[i].getValue("JournalMediaCode").getSimpleValue() != "Print") {
                var childenDigitalStatus = journalMediaChildren[i].getValue(PRODUCT_STATUS_ID).getSimpleValue();
               // logger.info( childenDigitalStatus + " childenDigitalStatus");

            }
        }
    }


    var JournalInFutureDatabaseModelValue1 = node.getValue(JOURNAL_INFUTURE_DATABASEMODEL_ID).getSimpleValue();


    var attcurrentPubli = node.getValue(JOURNAL_TA_ELIGIBILITY_CURRENT_ID).getSimpleValue();
    var attfuturePublish = node.getValue(JOURNAL_TA_ELIGIBILITY_FUTURE_ID).getSimpleValue();
if ((attcurrent != "No" && attfuture != "No")) {
    if ((JournalInCurrentDatabaseModelID1 != "Y" && JournalInFutureDatabaseModelID1 != "Y") || (JournalInCurrentDatabaseModelID1 != "Y" && JournalInFutureDatabaseModelID1 == "Y") || (JournalInCurrentDatabaseModelID1 != "N" && JournalInFutureDatabaseModelID1 == null || (JournalInCurrentDatabaseModelID1 != "N" && JournalInFutureDatabaseModelID1 == "N"))) {
 if ((JournalOwnerID1 == "H" && childenDigitalStatus == "To Be Ceased") || (JournalOwnerID1 == "H" && childenDigitalStatus == "To be sold/Transfrd")) {
        	
        		  node.getValue(JOURNAL_TA_ELIGIBILITY_CURRENT_ID).setLOVValueByID("Y");
                            node.getValue(JOURNAL_TA_ELIGIBILITY_FUTURE_ID).setLOVValueByID("N"); 
                            
        	}
        if ( JournalOwnerID1 == "H" && childenDigitalStatus == "Current publication") {
            node.getValue(JOURNAL_TA_ELIGIBILITY_CURRENT_ID).setLOVValueByID("Y");
            node.getValue(JOURNAL_TA_ELIGIBILITY_FUTURE_ID).setLOVValueByID("Y");
         
  } else if (JournalOwnerID1 != "H" || childenDigitalStatus != "Current publication") {

            if (attcurrentPubli != "Y" && attfuturePublish != "Y") {

                if (jrnlProductTypeID1 == "JR") {

                    if (jrnlEditiorialStageID1 == "01") {
                        if (journalProductRevenueModelID == "OO" || journalProductRevenueModelID == "OA") {

                            node.getValue(JOURNAL_TA_ELIGIBILITY_CURRENT_ID).setLOVValueByID("Y");
                            node.getValue(JOURNAL_TA_ELIGIBILITY_FUTURE_ID).setLOVValueByID("Y");

                        }
                    } else {
                       // logger.info("do nothing");

                    }
                } else {
                   // logger.info("Do nothing");
                }
            }
        } 


    }


}
}
}

//TA Derivation




var taType = node.getValue(JOURNAL_TA_TYPE_ID).getSimpleValue();
var jTAEligCurre = node.getValue(JOURNAL_TA_ELIGIBILITY_CURRENT_ID).getSimpleValue();
var prodcRevModel = node.getValue(PRODUCT_REVENUE_MODEL_ID).getSimpleValue();

var taTypenodeObject = "";
if (jrnlTaEligibilityValueOver == "No" || jrnlTaEligibilityValueOver == null) {

switch (true) {
    case (jTAEligCurre == "Yes" && prodcRevModel == "Subscription Only"):
        taTypenodeObject = node.getValue(JOURNAL_TA_TYPE_ID).setLOVValueByID("R");
        break;
    case (jTAEligCurre == "Yes" && prodcRevModel == "Hybrid Model"):
        taTypenodeObject = node.getValue(JOURNAL_TA_TYPE_ID).setLOVValueByID("RP");
        break;
    case (jTAEligCurre == "Yes" && prodcRevModel == "OA"):
        taTypenodeObject = node.getValue(JOURNAL_TA_TYPE_ID).setLOVValueByID("RP");
        break;
    default:
        taTypenodeObject = node.getValue(JOURNAL_TA_TYPE_ID).setLOVValueByID("");

}

if (journalTrueStatusID1 != "N") {
    if ((node.getValue(JOURNAL_INFUTURE_DATABASEMODEL_ID).getSimpleValue() == null))

        node.getValue(JOURNAL_TA_ELIGIBILITY_FUTURE_ID).setLOVValueByID("");

}


if (childenDigitalStatus != "Current publication") {
//logger.info("dfh")
    node.getValue(JOURNAL_TA_ELIGIBILITY_FUTURE_ID).setLOVValueByID("N");

}

	}
//logger.info(node.getValue(JOURNAL_TA_ELIGIBILITY_FUTURE_ID).getSimpleValue() + " Future2");
//logger.info(node.getValue(JOURNAL_TA_ELIGIBILITY_CURRENT_ID).getSimpleValue() + " Current2");
//logger.info(node.getValue(JOURNAL_INCURRENT_DATABASEMODEL_ID).getSimpleValue() + " Current Model2");
//logger.info(node.getValue(JOURNAL_INFUTURE_DATABASEMODEL_ID).getSimpleValue() + " Future Model2");
}