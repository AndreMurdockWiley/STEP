/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BA_EditorialContactOnSave",
  "type" : "BusinessAction",
  "setupGroups" : [ "Actions" ],
  "name" : "BA_EditorialContactOnSave",
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
    "contract" : "WebUiContextBind",
    "alias" : "web",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ManagerBindContract",
    "alias" : "manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,web,manager) {
var parentNode = node.getParent();
var editorialContactCodevalue = parentNode.getValue("EditorialCodeValue").getSimpleValue();
log.info("editorialContactCodevalue : " + editorialContactCodevalue);
var editorialContactCode = node.getValue("EditorialContactCode").getSimpleValue();

// Editorial Contact code Generation Logic

if (editorialContactCode == "" || editorialContactCode == null) {
    const alphabetPart = editorialContactCodevalue.match(/[A-Za-z]+/)[0]; // ex, "PPL"
    const numberPart = editorialContactCodevalue.match(/\d+/)[0]; // ex, "43"
    const incrementedNumber = parseInt(numberPart) + 1;
    const newContactCode = alphabetPart + incrementedNumber.toString();

    node.getValue("EditorialContactCode").setSimpleValue(newContactCode);
    parentNode.getValue("EditorialCodeValue").setSimpleValue(newContactCode);

    var editorialContactCode = node.getValue("EditorialContactCode").getSimpleValue();
    log.info("editorialContactCode : " + editorialContactCode);
} else {
    log.info("No Change on editorial code");
}

// Mandatory values check and Name set
var attributeErrors = [];
var errorMsg = [];
var checkAttributes = ["EditorialContactFirstName", "EditorialContactEmail", "EditorialContactStatus"];

for (i = 0; i < checkAttributes.length; i++) {
    var linkedAttrName = manager.getAttributeHome().getAttributeByID(checkAttributes[i]).getName();
    var value = node.getValue(checkAttributes[i]).getSimpleValue();

    if (value === null || value === '') {
        errorMsg.push(linkedAttrName + ' is missing. Please provide a value.');
    }
}
log.info(errorMsg.length)
var text = "Hello ";
log.info("TEXT : "+text.length);

if (errorMsg.length > 0) {
    log.info("PASS1")
    var msg = errorMsg.join('\n');
    throw msg;
} else {
	var checkAttributesList = ["EditorialContactFirstName","EditorialContactLastName", "EditorialContactEmail"];
	const leadingSpaces = /^\s+/;
     const trailingSpaces = /\s+$/;
    for (i = 0; i < checkAttributesList.length; i++) {
        var linkedAttrName = manager.getAttributeHome().getAttributeByID(checkAttributesList[i]).getName();
        var value = node.getValue(checkAttributesList[i]).getSimpleValue();
        var str = String(value)

        if (leadingSpaces.test(str)) {
            attributeErrors.push(linkedAttrName + "- has leading space.");
        }
        if (trailingSpaces.test(str)) {
            attributeErrors.push(linkedAttrName + "- has trail space.");
        }
        if (str != null){
        	if (str.match('\n')) {
            attributeErrors.push(linkedAttrName + "- has line break.");
        	}
        }
    }
}
log.info("AES\n" + attributeErrors.join('\n'));

//name set
if (attributeErrors == "" || attributeErrors == null) {
    var nodeName = node.getName();
    var firstName = node.getValue("EditorialContactFirstName").getSimpleValue();
    var lastName = node.getValue("EditorialContactLastName").getSimpleValue();
    log.info("lastName : "+lastName)
    if(firstName != null && lastName != null){
    	log.info("PASS  IF")
    		var nameSet = firstName + " " + lastName + " - " + parentNode.getName() //Amanda Li - Partner Publishing Lead
    } else if (firstName != null && lastName == null){
    	log.info("PASS ELSE IF")
    		var nameSet = firstName +" - " + parentNode.getName() //Amanda Li - Partner Publishing Lead

    }
   log.info("nameSet :"+nameSet)
    if (nodeName == null || nodeName == "" || nodeName != nameSet) {
        node.setName(nameSet);
    }
}
if (attributeErrors != "") {
    var error = attributeErrors.join('\n');
    log.info("PASS ERROR")
    throw error
}
// Duplical editorial contact email Check

var nodeEmail = node.getValue("EditorialContactEmail").getSimpleValue();
if (nodeEmail != "" || nodeEmail != null) {
    var children = parentNode.getChildren().toArray();
    var flag = 0;
    for (var i = 0; i < children.length; i++) {
        var childEmail = children[i].getValue("EditorialContactEmail").getSimpleValue();
        if (node.getID() != children[i].getID()) {
            if (nodeEmail == childEmail) {
                flag = 1;
                var childName = children[i].getName();
                log.info("Duplicate")
            }
        }
    }
    if (flag == 1) {
    	var status = node.getValue("EditorialContactStatus").getSimpleValue();
    	if(status==null || status == ""){
    		var dmsg = "Please provide status value";
        throw dmsg
    	}else{
        // web.showAlert("Error", "Duplicate Email ID found :", "Email ID already used by another editorial contact under this contact type.");
        var dmsg = "Duplicate Email ID found :\nEmail ID already used by another editorial contact under this contact type.";
        throw dmsg
        log.info("PASS3")
        }
    } else {
        web.showAlert("ACKNOWLEDGEMENT", "Success Message", "This editorial contact have been successfully saved");
    }
} else {
    web.showAlert("ACKNOWLEDGEMENT", "Success Message", "This editorial contact have been successfully saved");
}
}
/*===== business rule plugin definition =====
{
  "pluginId" : "ReferenceOtherBABusinessAction",
  "parameters" : [ {
    "id" : "ReferencedBA",
    "type" : "com.stibo.core.domain.businessrule.BusinessAction",
    "value" : "BA_EditorialContactSendOIEP"
  } ],
  "pluginType" : "Operation"
}
*/
