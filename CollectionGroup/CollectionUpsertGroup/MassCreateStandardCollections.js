/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "MassCreateStandardCollections",
  "type" : "BusinessAction",
  "setupGroups" : [ "CollectionUpsertGroup" ],
  "name" : "Mass Create Standard Collections",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "CollectionFunctions",
    "libraryAlias" : "collectionLibrary"
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
exports.operation0 = function (NODE,LOG,UI,collectionLibrary) {
var uISelection = UI.getSelection();
var newYear = "";
var collectionTypeProduct = "";
var collectionYearProduct = "";
var collectionSubTypeProduct = "";
var collectionSubTypeProductChildren = "";
var collectionYearProductChildren = "";
var collectionTypeProductChildren = "";
var maxYear = 0;
var currentYear = 0;
var severity = "ERROR";
var headline = "";
var body = "The Collection Year is not the most recent one for that collection Type";
var collectionTypeActual = "";
var collectionTypeMax = "";
var collectionSubTypeActual = "";
var collectionSubTypeMax = "";
var newCollectionYearProduct = "";
var newCollectionSubTypeProduct = "";
var newCollectionProduct = "";

for (var l = 0; l < uISelection.size(); l++){
	maxYear = 0;
	//max year check
	currentCollection = uISelection.get(l);
	newYear = parseInt(currentCollection.getValue("CollectionYear").getSimpleValue()) + 1;
	collectionSubTypeActual = currentCollection.getValue("CollectionSubType").getSimpleValue();
	collectionTypeActual = currentCollection.getValue("CollectionType").getSimpleValue();
	collectionSubTypeProduct = currentCollection.getParent();
	collectionYearProduct = collectionSubTypeProduct.getParent();
	collectionTypeProduct = collectionYearProduct.getParent();
	collectionTypeProductChildren = collectionTypeProduct.getChildren();

	for(var i = 0; i < collectionTypeProductChildren.size(); i++){
		collectionYearProductChildren = collectionTypeProductChildren.get(i).getChildren();

		for(var j = 0; j < collectionYearProductChildren.size(); j++){
			collectionSubTypeProductChildren = collectionYearProductChildren.get(j).getChildren();

			for(var k = 0; k < collectionSubTypeProductChildren.size(); k++){
				currentYear = collectionSubTypeProductChildren.get(k).getValue("CollectionYear").getSimpleValue();
				collectionTypeMax = collectionSubTypeProductChildren.get(k).getValue("CollectionType").getSimpleValue();
				collectionSubTypeMax = collectionSubTypeProductChildren.get(k).getValue("CollectionSubType").getSimpleValue();
				
				if(currentYear > maxYear && collectionTypeActual == collectionTypeMax && collectionSubTypeActual == collectionSubTypeMax){
					maxYear = currentYear;
				}
			}
		}
	}

	//creation
	if (currentCollection.getValue("CollectionYear").getSimpleValue() == maxYear){		
		newCollectionYearProduct = collectionLibrary.createCollectionYear(collectionTypeProduct, newYear);
		
		newCollectionSubTypeProduct = collectionLibrary.createCollectionSubType(newCollectionYearProduct, "Standard");
		
		newCollectionProduct = collectionLibrary.createCollection(newCollectionSubTypeProduct, "Standard", newYear);
		
		newCollectionProduct.startWorkflowByID("CollectionCreationWF", null);
	} else {
		UI.showAlert(severity, headline, body);
	}
}
}