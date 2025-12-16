/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "MM_Package_Status_Update",
  "type" : "BusinessAction",
  "setupGroups" : [ "PackageGroup" ],
  "name" : "MM Package Status Update",
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
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,manager) {
var objType = node.getObjectType().getID();
if(objType == "JournalDigitalMedia" || objType == "JournalPrintMedia"){
	var multiMediaRefs = node.getReferencedBy().toArray();

	for(var j=0; j<multiMediaRefs.length;j++){
		var mmProd = multiMediaRefs[j].getSource();
		var refType = multiMediaRefs[j].getReferenceType().getID();
		if(refType == "BOMS_TO_JOURNAL_MULTIMEDIA"){
			var prdStatus = node.getValue("ProductStatus").getValue();
			if(prdStatus != null){
				prdStatus = node.getValue("ProductStatus").getID();
				if(prdStatus != "N" && prdStatus!= "P" && prdStatus!= "T" && prdStatus!= "R" && prdStatus!= "Z" && prdStatus!= "B"){
					mmProd.getValue("ProductStatus").setLOVValueByID("C");
					mmProd.approve();
				}
				else{
					setMediaStatus(mmProd,manager);	
						
				}
				
			}
		}
	}	
}
else if(objType == "MultiMedia"){
	setMediaStatus(node,manager);	
}

function setMediaStatus(mmProd,manager){
	logger.info(mmProd);
	var linktype = manager.getReferenceTypeHome().getReferenceTypeByID("BOMS_TO_JOURNAL_MULTIMEDIA");
	var mmReferences = mmProd.getReferences(linktype).toArray();
	for(var i in mmReferences){
		var media = mmReferences[i].getTarget();
		var mediaStatus = media.getValue("ProductStatus").getValue();
		if(mediaStatus != null){
			mediaStatus = media.getValue("ProductStatus").getID();
			if(mediaStatus != "N" && mediaStatus!= "P" && mediaStatus!= "T" && mediaStatus!= "R" && mediaStatus!= "Z" && mediaStatus!= "B"){
				mmProd.getValue("ProductStatus").setLOVValueByID("C");
				mmProd.approve();
				break;
			}
		}
	}
	
}
}