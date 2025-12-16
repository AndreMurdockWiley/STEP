/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "AutoClassificationOtherProducts",
  "type" : "BusinessAction",
  "setupGroups" : [ "AutoClassifyRules" ],
  "name" : "Auto Classification Other Products",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
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
    "contract" : "CurrentObjectBindContract",
    "alias" : "NODE",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "LOG",
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
exports.operation0 = function (NODE,LOG,MANAGER,genericFunctions) {
var bundleCodeDataContainerList = genericFunctions.getDataContainerObjects(NODE,"BundleGroup_BundleCode_DataContainer");
var iter = bundleCodeDataContainerList.iterator();
var bundleCodeDataContainer = "";
var bundleCodeID = "";
var bundleCode = "";
var bundleCodeFirstLetter = "";
var parentObject = "";
var bundleGroupCodeID = "";
var classifiedCheck = false;

function generateVariables(){
	bundleCodeID = bundleCodeDataContainer.getValue("ProductBundleCodeID").getSimpleValue();
	bundleCode = bundleCodeDataContainer.getValue("ProductBundleCode").getSimpleValue().toUpperCase();
	bundleCodeFirstLetter = NODE.getName().toUpperCase().charCodeAt(0);
	parentObject = "";
	bundleGroupCodeID = bundleCodeDataContainer.getValue("ProductBundleGroupID").getSimpleValue();
}

function classifyProduct() {
	switch(true){
		case (bundleCodeID == "EMRW" || bundleCodeID == "NEMRW"):
			switch(true){
				case (bundleCodeFirstLetter >= 65 && bundleCodeFirstLetter <=70):
					parentObject = MANAGER.getProductHome().getProductByID("EMRW_NEMRW_A_F");
					LOG.info(parentObject);
					NODE.setParent(parentObject);
					break;
				case (bundleCodeFirstLetter >= 71 && bundleCodeFirstLetter <= 76):
					parentObject = MANAGER.getProductHome().getProductByID("EMRW_NEMRW_G_L");
					//LOG.info(parentObject);
					NODE.setParent(parentObject);
					break;
				case (bundleCodeFirstLetter >= 77 && bundleCodeFirstLetter <= 82):
					parentObject = MANAGER.getProductHome().getProductByID("EMRW_NEMRW_M_R");
					//LOG.info(parentObject);
					NODE.setParent(parentObject);
					break;
				case (bundleCodeFirstLetter >= 83 && bundleCodeFirstLetter <=90):
					parentObject = MANAGER.getProductHome().getProductByID("EMRW_NEMRW_S_Z");
					//LOG.info(parentObject);
					NODE.setParent(parentObject);
					break;
				default:
					parentObject = MANAGER.getProductHome().getProductByID("EMRW_NEMRW_A_F");
					//LOG.info(parentObject);
					NODE.setParent(parentObject);
			}
			break;	
		case (bundleCodeID == "OLBK"):
			switch(true){
				case (bundleCodeFirstLetter >= 65 && bundleCodeFirstLetter <=70):
					parentObject = MANAGER.getProductHome().getProductByID("OLBK_A_F");
					//LOG.info(parentObject);
					NODE.setParent(parentObject);
					break;	
				case (bundleCodeFirstLetter >= 71 && bundleCodeFirstLetter <=76):
					parentObject = MANAGER.getProductHome().getProductByID("OLBK_G_L");
					//LOG.info(parentObject);
					NODE.setParent(parentObject);
					break;
				case (bundleCodeFirstLetter >= 77 && bundleCodeFirstLetter <= 82):
					parentObject = MANAGER.getProductHome().getProductByID("OLBK_M_R");
					//LOG.info(parentObject);
					NODE.setParent(parentObject);
					break;
				case (bundleCodeFirstLetter >= 83 && bundleCodeFirstLetter <= 90):
					parentObject = MANAGER.getProductHome().getProductByID("OLBK_S_Z");
					//LOG.info(parentObject);
					NODE.setParent(parentObject);
					break;
				default:
					parentObject = MANAGER.getProductHome().getProductByID("OLBK_A_F");
					//LOG.info(parentObject);
					NODE.setParent(parentObject);
			}
			break;
		case (bundleCodeID == "EALAS"):
			parentObject = MANAGER.getProductHome().getProductByID("OP_EALAS");
			//LOG.info(parentObject);
			NODE.setParent(parentObject);
			break;
		case (bundleCodeID == "ENOW"):
			parentObject = MANAGER.getProductHome().getProductByID("OP_ENOW");
			//LOG.info(parentObject);
			NODE.setParent(parentObject);
			break;
		case (bundleCodeID == "BKSM"):
			parentObject = MANAGER.getProductHome().getProductByID("OP_BKSM");
			//LOG.info(parentObject);
			NODE.setParent(parentObject);
			break;
		case (bundleCodeID == "CPOL"):
			parentObject = MANAGER.getProductHome().getProductByID("OP_CPOL");
			//LOG.info(parentObject);
			NODE.setParent(parentObject);
			break;
		case (bundleCodeID == "EDATB"):
			parentObject = MANAGER.getProductHome().getProductByID("OP_EDATB");
			//LOG.info(parentObject);
			NODE.setParent(parentObject);
			break;
		case (bundleCodeID == "ENCC"):
			parentObject = MANAGER.getProductHome().getProductByID("OP_ENCC");
			//LOG.info(parentObject);
			NODE.setParent(parentObject);
			break;
		case (bundleCodeID == "COCHR"):
			parentObject = MANAGER.getProductHome().getProductByID("OP_COCHR");
			//LOG.info(parentObject);
			NODE.setParent(parentObject);
			break;
		case (bundleCodeID == "JRNCL"):
			parentObject = MANAGER.getProductHome().getProductByID("OP_JRNCL");
			//LOG.info(parentObject);
			NODE.setParent(parentObject);
			break;
		case (bundleCodeID == "EEOL"):
			parentObject = MANAGER.getProductHome().getProductByID("OP_EEOL");
			//LOG.info(parentObject);
			NODE.setParent(parentObject);
			break;
		case (bundleCodeID == "NEEDTOASSIGN"):
			parentObject = MANAGER.getProductHome().getProductByID("OP_NEEDTOASSIGN");
			//LOG.info(parentObject);
			NODE.setParent(parentObject);
			break;
		case (bundleCodeID == "TPROD"):
			parentObject = MANAGER.getProductHome().getProductByID("OP_TPROD");
			//LOG.info(parentObject);
			NODE.setParent(parentObject);
			break;
		case (bundleCodeID == "SNOW"):
			parentObject = MANAGER.getProductHome().getProductByID("OP_SNOW");
			//LOG.info(parentObject);
			NODE.setParent(parentObject);
			break;
		case (bundleCodeID == "UNASSIGNED"):
			parentObject = MANAGER.getProductHome().getProductByID("OP_UNASSIGNED");
			//LOG.info(parentObject);
			NODE.setParent(parentObject);
			break;
		default:
			parentObject = MANAGER.getProductHome().getProductByID("OP_UNASSIGNED");
			//LOG.info(parentObject);
			NODE.setParent(parentObject);
	}
}

/*
LOG.info("Previous: " + MANAGER.getProductHome());
LOG.info("Size: " + bundleCodeDataContainerList.size());
*/


while (iter.hasNext()) {
	bundleCodeDataContainer = iter.next().getDataContainerObject();
	generateVariables();

	/*
	LOG.info("BundleCode: " + bundleCode);
	LOG.info("BundleCodeID: " + bundleCodeID);
	LOG.info("bundleGroupCodeID: " + bundleGroupCodeID);
	*/

	switch(true){
		case (bundleCodeDataContainerList.size() == 1):
			classifyProduct();
			classifiedCheck = true;
			break;
		case (bundleCodeDataContainerList.size() > 1):
			if (bundleGroupCodeID == 'TP' || bundleGroupCodeID == 'RP'){
				classifyProduct();
				classifiedCheck = true;
			}
			break;
	}

	if (classifiedCheck == true){
		break;
	}
}

if (classifiedCheck == false && bundleCodeDataContainerList.size() > 1){
	bundleCodeDataContainer = bundleCodeDataContainerList.toArray()[bundleCodeDataContainerList.size() - 1].getDataContainerObject();
	generateVariables();
	classifyProduct();
}

//LOG.info("Parent Object: " + parentObject);
}