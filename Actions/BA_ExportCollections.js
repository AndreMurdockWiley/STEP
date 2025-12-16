/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_ExportCollections",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "BA_ExportCollections",
  "description" : "Generates Collection Standard Report for Journal Collections, Database Collections, Static Collections, Static Access Collections, Dynamic Collections. And sends the report to requested user.",
  "scope" : "Global",
  "validObjectTypes" : [ "OtherProductCollectionOffering", "JournalCollectionsOffering" ],
  "allObjectTypesValid" : false,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "LoggerBindContract",
    "alias" : "log",
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
    "contract" : "WebUiContextBind",
    "alias" : "UI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "MailHomeBindContract",
    "alias" : "mailer",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (log,mgr,UI,mailer) {
/*----------------------------M-O-D-I-F-I-C-A-T-I-O-N----------L-O-G---------------------------------------------------
==============================================================================================================================================================================
Date      |          Programmer              |  Tag_ID  | Ticket#   |              Description
==============================================================================================================================================================================
16Feb2025    Venkata Siva Harish Mattaparthi              RPDM-9342    Initial Creation                                                                     
23May2025    Venkata Siva Harish Mattaparthi   HAR01      RPDM-10180   Reference type for static access collections changed, because now they need to have journal components also.                                                                
                                                              
==============================================================================================================================================================================
Purpose of Business Rule: Generates Collection Standard Report for Journal Collections, Database Collections, Static Collections, Static Access Collections, Dynamic Collections. And sends it to requested user email.
-------------------------------------------------------------------------------------------------------------------------------
==============================================================================================================================================================================
*/
function fsendEmailWithAttachment(ctxManager, classObj, filecontent, fileName, fileType, MAIL_TO, MAIL_SUBJECT, MAIL_CONTENT) {
    var ISOdf = new java.text.SimpleDateFormat("YYYYMMddhhmm");
    var nowISO = ISOdf.format(new java.util.Date());

    var fullFileName = fileName + "-" + nowISO + fileType;
    var asset = ctxManager.getAssetHome().getAssetByID(fileName);
    if (asset == null || asset.toString() == "undefined") {
        var assetClass = ctxManager.getClassificationHome().getClassificationByID(classObj);
        asset = assetClass.createAsset(fileName, "TempFiles");
        //log.info("asset 1 " + asset);
    }

    asset.setName(fullFileName);

    try {
        var tmpFile = java.io.File.createTempFile(fileName + "-", ".csv");
        var bw = new java.io.BufferedWriter(new java.io.OutputStreamWriter(new java.io.FileOutputStream(tmpFile), "UTF8"));
        bw.write('\ufeff');
        bw.write(filecontent);
        bw.flush();
        bw.close();
        var inputStream = new java.io.FileInputStream(tmpFile);

        var MAIL_FROM = "noreply@cloudmail.stibo.com";

        asset.upload(inputStream, fullFileName);
        mailer.mail()
            .from(MAIL_FROM)
            .addTo(MAIL_TO)
            .htmlMessage(MAIL_CONTENT)
            .subject(MAIL_SUBJECT)
            .attachment().fromAsset(asset).name(fullFileName).attach()
            .send();

        tmpFile.delete();

    } catch (e) {
        log.info("Email Exception: " + e.toString());

    }

}

function maskCSVValue(value) {
    var result = value;
    if (value != null && !value.trim().equals("")) {
        result = "\"" + result + "\"";
    } else {
        result = "";
    }
    return result;
}

//Main Logic

var collectionCodeList = "";
var exportLines = null;


var selectedNodes = UI.getSelection();
for (var i = 0; i < selectedNodes.size(); i++) {
    var node = selectedNodes.get(i);

    var objectTypeId = node.getObjectType().getID();
    var otherProductCollectionType = node.getValue('OtherProductCollectionType').getSimpleValue();
    var collectionCode = null;
    var digitalJournalCode = null;
    var journalGroupCode = null;
    var productTitle = null;
    var stepID = null;
    var digitalMediaUUID = null;
    var journalHeaderUUID = null;
    var otherProductUUID = null;
    var productIsbn13 = null;
    var productIsbn = null;
    var attachmentName = null;
    var subjectLine = null;
    var spcObjectType = null;
     var collectionCategory = node.getValue("CollectionCategory").getSimpleValue(); //HAR01
    var journalMediaCode = null; //HAR01

    //Below code is for Journal Collections, Database Collections
    if (objectTypeId == 'JournalCollectionsOffering') {
        if (exportLines == null) {
            exportLines = "Collection Code, Digital Media UUID, Journal Header UUID, Digital Journal Code, Journal Group Code, Title" + "\r\n";
        }
        collectionCode = node.getValue("CollectionCode").getSimpleValue();
        collectionType = node.getValue("CollectionType").getSimpleValue();

        //if (collectionType == 'WATP') {  //HAR01
        if (collectionType == 'Database Model Collections') {  //HAR01
            attachmentName = "DatabaseCollectionsStandardReport";
            subjectLine = "DatabaseCollectionsStandardReport";
        } else {
            attachmentName = "JournalCollectionsStandardReport";
            subjectLine = "JournalCollectionsStandardReport";
        }
        //Get components of collection from Main workspace
        var refType = mgr.getReferenceTypeHome().getReferenceTypeByID('COLLECTIONS_TO_JOURNALS');
        var queryResult = node.queryReferences(refType);
        queryResult.forEach(function (resultNode) {

            digitalMediaUUID = journalHeaderUUID = digitalJournalCode = journalGroupCode = productTitle = null;
            var componentObject = resultNode.getTarget();
            digitalMediaUUID = componentObject.getID();
            journalHeaderUUID = componentObject.getParent().getID();
            digitalJournalCode = componentObject.getValue("DigitalJournalCode").getSimpleValue();

            journalGroupCode = componentObject.getValue("JournalGroupCode").getSimpleValue();
            productTitle = componentObject.getValue("ProductTitle").getSimpleValue();
            if (productTitle == null) {
                productTitle = componentObject.getValue("ProductFullTitle").getSimpleValue();
            }

            exportLines = exportLines +
                maskCSVValue(collectionCode) + "," +
                maskCSVValue(digitalMediaUUID) + "," +
                maskCSVValue(journalHeaderUUID) + "," +
                maskCSVValue(digitalJournalCode) + "," +
                maskCSVValue(journalGroupCode) + "," +
                maskCSVValue(productTitle) + "," + "\r\n";

            return true;
        });

        //Below code is for Static Collections, Static Access Collections	
    } else if (objectTypeId == 'OtherProductCollectionOffering' && otherProductCollectionType != 'Dynamic') {
    	 if (collectionCategory == "Regular" && otherProductCollectionType == "Static") {  //HAR01
        if (exportLines == null) {
            exportLines = "Collection Code, otherProductUUID, ISBN13, ISBN10, Title" + "\r\n";
        }
        collectionCode = node.getValue("OtherProductCollectionCode").getSimpleValue();
            //collectionCategory = node.getValue("CollectionCategory").getSimpleValue();  //HAR01
            //if (collectionCategory == "Regular" && otherProductCollectionType == "Static") { //HAR01
            attachmentName = "StaticCollectionsStandardReport";
            subjectLine = "StaticCollectionsStandardReport";
            //} else if (collectionCategory == "Access" && otherProductCollectionType == "Static") {  //HAR01
            //attachmentName = "StaticAccessCollectionsStandardReport";  //HAR01
            //subjectLine = "StaticAccessCollectionsStandardReport";   //HAR01
            //}   //HAR01
        var refType2 = mgr.getReferenceTypeHome().getReferenceTypeByID('OtherProdCollectionToOtherProdReference');
        var queryResult2 = node.queryReferences(refType2);
        queryResult2.forEach(function (resultNode2) {
            otherProductUUID = productIsbn13 = productIsbn = productTitle = null;
            var componentObject2 = resultNode2.getTarget();
            otherProductUUID = componentObject2.getID();
            productIsbn13 = componentObject2.getValue("ProductIsbn13").getSimpleValue();
            productIsbn = componentObject2.getValue("ProductIsbn").getSimpleValue();
            productTitle = componentObject2.getValue("ProductFullTitle").getSimpleValue();

            exportLines = exportLines +
                maskCSVValue(collectionCode) + "," +
                maskCSVValue(otherProductUUID) + "," +
                maskCSVValue(productIsbn13) + "," +
                maskCSVValue(productIsbn) + "," +
                maskCSVValue(productTitle) + "," + "\r\n";

            return true;
        });
        //HAR01 Start
            //Below code is for Static Access Collections
        } else if (collectionCategory == "Access" && otherProductCollectionType == "Static") {
            if (exportLines == null) {
                exportLines = "Collection Code, Other Product UUID, Digital Media UUID, Journal Header UUID, ISBN13, ISBN10, Digital Journal Code, Journal Group Code, Title" + "\r\n";
            }
            attachmentName = "StaticAccessCollectionsStandardReport";
            subjectLine = "StaticAccessCollectionsStandardReport";
            collectionCategory = node.getValue("CollectionCategory").getSimpleValue();
            collectionCode = node.getValue("OtherProductCollectionCode").getSimpleValue();
            var refType4 = mgr.getReferenceTypeHome().getReferenceTypeByID('StaticAccColl_To_Journal_OtherProd_Ref');
            var queryResult4 = node.queryReferences(refType4);

            queryResult4.forEach(function (resultNode4) {
                otherProductUUID = digitalMediaUUID = journalHeaderUUID = productIsbn13 = productIsbn = digitalJournalCode = journalGroupCode = productTitle = null;

                var componentObject4 = resultNode4.getTarget();
                var compObjectType = componentObject4.getObjectType().getID();
                if (compObjectType == "OtherProducts") {
                    otherProductUUID = componentObject4.getID();
                    productIsbn13 = componentObject4.getValue("ProductIsbn13").getSimpleValue();
                    productIsbn = componentObject4.getValue("ProductIsbn").getSimpleValue();
                    productTitle = componentObject4.getValue("ProductFullTitle").getSimpleValue();
                } else if (compObjectType == "Journal") {
                    journalGroupCode = componentObject4.getValue("JournalGroupCode").getSimpleValue();
                    productTitle = componentObject4.getValue("ProductTitle").getSimpleValue();

                    journalHeaderUUID = componentObject4.getID();
                    var myChild4 = componentObject4.getChildren();


                    for (var j = 0; j < myChild4.size(); j++) {
                        journalMediaCode = myChild4.get(j).getValue("JournalMediaCode").getSimpleValue();

                        if (journalMediaCode == "Electronic") {
                            digitalJournalCode = myChild4.get(j).getValue("DigitalJournalCode").getSimpleValue();
                            digitalMediaUUID = myChild4.get(j).getID();
                        }
                    }
                }

                exportLines = exportLines +
                    maskCSVValue(collectionCode) + "," +
                    maskCSVValue(otherProductUUID) + "," +
                    maskCSVValue(digitalMediaUUID) + "," +
                    maskCSVValue(journalHeaderUUID) + "," +
                    maskCSVValue(productIsbn13) + "," +
                    maskCSVValue(productIsbn) + "," +
                    maskCSVValue(digitalJournalCode) + "," +
                    maskCSVValue(journalGroupCode) + "," +
                    maskCSVValue(productTitle) + "," + "\r\n";
                return true;
            });
        }
        //HAR01 End

        //Below code is for Dynamic Collections
    } else if (otherProductCollectionType == 'Dynamic') {
        if (exportLines == null) {
            exportLines = "Collection Code, Other Product UUID, Digital Media UUID, Journal Header UUID, ISBN13, ISBN10, Digital Journal Code, Journal Group Code, Title" + "\r\n";
        }
        collectionCode = node.getValue("OtherProductCollectionCode").getSimpleValue();
        attachmentName = "DynamicCollectionsStandardReport";
        subjectLine = "DynamicCollectionsStandardReport";
        var refType3 = mgr.getReferenceTypeHome().getReferenceTypeByID('SpecProd_To_Journal_OtherProd_Reference');
        var REF_LIST3 = node.queryReferencedBy(refType3).asList(100000);

        if (REF_LIST3 != 0) {
            for (var x = 0; x < REF_LIST3.size(); x++) {
                otherProductUUID = digitalMediaUUID = journalHeaderUUID = productIsbn13 = productIsbn = digitalJournalCode = journalGroupCode = productTitle = null;

                var componentObject3 = REF_LIST3.get(x).getSource();
                spcObjectType = componentObject3.getObjectType().getID();
                if (spcObjectType == "OtherProducts") {
                    otherProductUUID = componentObject3.getID();
                    productIsbn13 = componentObject3.getValue("ProductIsbn13").getSimpleValue();
                    productIsbn = componentObject3.getValue("ProductIsbn").getSimpleValue();
                    productTitle = componentObject3.getValue("ProductFullTitle").getSimpleValue();
                } else if (spcObjectType == "Journal") {
                    journalGroupCode = componentObject3.getValue("JournalGroupCode").getSimpleValue();
                    productTitle = componentObject3.getValue("ProductTitle").getSimpleValue();

                    journalHeaderUUID = componentObject3.getID();
                    var myChild = componentObject3.getChildren();

                    for (var j = 0; j < myChild.size(); j++) {
                        journalMediaCode = myChild.get(j).getValue("JournalMediaCode").getSimpleValue();

                        if (journalMediaCode == "Electronic") {
                            digitalJournalCode = myChild.get(j).getValue("DigitalJournalCode").getSimpleValue();
                            digitalMediaUUID = myChild.get(j).getID();
                        }
                    }

                }

                exportLines = exportLines +
                    maskCSVValue(collectionCode) + "," +
                    maskCSVValue(otherProductUUID) + "," +
                    maskCSVValue(digitalMediaUUID) + "," +
                    maskCSVValue(journalHeaderUUID) + "," +
                    maskCSVValue(productIsbn13) + "," +
                    maskCSVValue(productIsbn) + "," +
                    maskCSVValue(digitalJournalCode) + "," +
                    maskCSVValue(journalGroupCode) + "," +
                    maskCSVValue(productTitle) + "," + "\r\n";

            }
        }
    }
    if (collectionCodeList == "") {
        collectionCodeList = collectionCodeList + collectionCode;
    } else {
        collectionCodeList = collectionCodeList + "," + collectionCode;
    }

}

if (subjectLine == null) {
    subjectLine = "CollectionsStandardReport";
    attachmentName = "CollectionsStandardReport";
}



var toEmail = mgr.getCurrentUser().getEMail();

if (exportLines != null) {
    var mailContent = "Dear User, <br><br> Please find the Collection Standard Report attached to this email.<br><br> Collection Codes:" + collectionCodeList + "<br><br> Thank You.<br><br>This is an automatically generated e-mail. Please do not reply.";
    fsendEmailWithAttachment(mgr, "TempFiles", exportLines.trim(), attachmentName, ".csv", toEmail, subjectLine.trim(), mailContent.trim());
    UI.showAlert("Info", "Success", "Collection Standard Report is sent in an Email");
}
}