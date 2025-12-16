/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_ExportUserInventory",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "Export User List",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
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
    "contract" : "MailHomeBindContract",
    "alias" : "mailer",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "WebUiContextBind",
    "alias" : "UI",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,manager,mailer,UI) {
function fsendEmailWithAttachment(ctxManager,classObj,filecontent,fileName,fileType,MAIL_TO,MAIL_SUBJECT,MAIL_CONTENT){
	var ISOdf = new java.text.SimpleDateFormat("YYYYMMddhhmm");
	var nowISO = ISOdf.format(new java.util.Date());

	var fullFileName = fileName + "-" + nowISO + fileType;
	var asset = ctxManager.getAssetHome().getAssetByID(fileName);
	if(asset == null || asset.toString() == "undefined"){
		var assetClass = ctxManager.getClassificationHome().getClassificationByID(classObj);
		asset = assetClass.createAsset(fileName,"TempFiles");
		logger.info("asset 1 " + asset);
	}

	asset.setName(fullFileName);

	try{
		var tmpFile = java.io.File.createTempFile(fileName + "-", ".csv");
		var bw = new java.io.BufferedWriter(new java.io.OutputStreamWriter(new java.io.FileOutputStream(tmpFile), "UTF8"));
		bw.write('\ufeff');
		bw.write(filecontent);
		bw.flush();
		bw.close();
		var inputStream = new java.io.FileInputStream(tmpFile);

		var MAIL_FROM = "noreply@cloudmail.stibo.com";

		asset.upload(inputStream,fullFileName);
		mailer.mail()
		 .from(MAIL_FROM)
		 .addTo(MAIL_TO)
		 .htmlMessage(MAIL_CONTENT)
		 .subject(MAIL_SUBJECT)
		 .attachment().fromAsset(asset).name(fullFileName).attach()
		 .send();

		tmpFile.delete();
		
	}catch(e){
		logger.info("exception: " + e.toString());
		
	}

}

function maskCSVValue(value){
	var result = value;
	if(value != null && !value.trim().equals("")){
		result = "\"" + result + "\"";
	}else{
		result = "";
	}
	return result;
}

//main

var exportLines = "User ID; User Name; EmailID; User Groups" + "\r\n";

var selectedNodes = UI.getSelection();
for (var i = 0; i < selectedNodes.size(); i++) {
    var Obj = selectedNodes.get(i);
    //var nodeID = selectedNodes.get(i).getID();
//var gID = manager.getGroupHome().getGroupByID("AdminUsers");
//var query = gID.queryAllUsers();
//query.forEach(function(node){
	var id = Obj.getID();
	var name = Obj.getName();
	var email = Obj.getEMail();
	var usergroup = [];
	var groups = Obj.getGroups().iterator();
	while(groups.hasNext()){
		var grp = groups.next();
		var grpName = grp.getName();
		usergroup.push(grpName);
	}
	exportLines = exportLines + 
				maskCSVValue(id) + ";"+
				maskCSVValue(name) + ";"+
				maskCSVValue(email) + ";"+
				usergroup + "\r\n";
				log.info("exportlines" + exportLines);
	//return true;
	
//});
}

var toEmail = manager.getCurrentUser().getEMail();

var exportName = "User List Extract";
var mailContent = "Dear User, <br><br> Please find the User List attached to this email.<br><br> Thank You.<br><br>This is an automatically generated e-mail. Please do not reply.";
fsendEmailWithAttachment(manager,"TempFiles",exportLines.trim(),"UserListExtract",".csv",toEmail,exportName.trim(),mailContent.trim());
UI.showAlert("Info","Success","User List is sent in an Email");
}