/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "WebUI_Update_DOI_URL",
  "type" : "BusinessAction",
  "setupGroups" : [ "OtherProductsUpsertGroup" ],
  "name" : "WebUI_Update_DOI_URL",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "OtherProducts" ],
  "allObjectTypesValid" : false,
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
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (node,web,genericFunctions) {
var bundleCodeDataContainerList = genericFunctions.getDataContainerObjects(node,"BundleGroup_BundleCode_DataContainer");
var iter = bundleCodeDataContainerList.iterator();
//var bundleCodeID = iter.getValue("ProductBundleCodeID").getSimpleValue();
//logger.info (bundleCodeID);
var valuereset = true ;
while (iter.hasNext()) {
	var bundleCodeDataContainer = iter.next();
	var value  = bundleCodeDataContainer.getDataContainerObject().getValue("ProductBundleCodeID").getSimpleValue();
	logger.info(value);
	if (value == "OLBK"){
		
		valuereset = false ;
		break;
	}
	}

if (valuereset == false){
	var doi = node.getValue("ProductDoi").getSimpleValue();
	var url = node.getValue("ProductUrl").getSimpleValue();
	var cURL = node.getValue("COPY_URL").getSimpleValue();
	var cDOI = node.getValue("COPY_DOI").getSimpleValue();

	if(doi == null){
		var ISBN13 = node.getValue("ProductIsbn13").getSimpleValue();
		node.getValue("ProductDoi").setSimpleValue("10.1002/" + ISBN13);
		node.getValue("ProductUrl").setSimpleValue( "https://www.onlinelibrary.wiley.com/doi/book/" + "10.1002/" + ISBN13);

		var doi = node.getValue("ProductDoi").getSimpleValue();
		var url = node.getValue("ProductUrl").getSimpleValue();
		node.getValue("COPY_DOI").setSimpleValue(doi);
		node.getValue("COPY_URL").setSimpleValue(url);
		
	}
	else{
		var ISBN13 = node.getValue("ProductIsbn13").getSimpleValue();
		if(cDOI == null && doi != "10.1002/" + ISBN13){
			
			node.getValue("ProductDoi").setSimpleValue("10.1002/" + ISBN13);
			node.getValue("ProductUrl").setSimpleValue( "https://www.onlinelibrary.wiley.com/doi/book/" + "10.1002/" + ISBN13);

			var doi = node.getValue("ProductDoi").getSimpleValue();
			var url = node.getValue("ProductUrl").getSimpleValue();
			node.getValue("COPY_DOI").setSimpleValue(doi);
			node.getValue("COPY_URL").setSimpleValue(url);
			
		}
		else{
		
			if(cDOI != doi){
				node.getValue("ProductUrl").setSimpleValue( "https://www.onlinelibrary.wiley.com/doi/book/" + doi);
				node.getValue("COPY_DOI").setSimpleValue(doi);
				web.showAlert("INFO", "DOI/URL overridden Manually");
			}
			
			if(cURL != url){
				node.getValue("ProductUrl").setSimpleValue(url);
				node.getValue("COPY_URL").setSimpleValue(url);
				web.showAlert("INFO", "DOI/URL overridden Manually");	
			}
			else if(cDOI != doi){
				node.getValue("ProductUrl").setSimpleValue( "https://www.onlinelibrary.wiley.com/doi/book/" + doi);
				url = node.getValue("ProductUrl").getSimpleValue();
				node.getValue("COPY_URL").setSimpleValue(url);
				web.showAlert("INFO", "DOI/URL overridden Manually");
			}
		}
		
	}
}
else{
	//node.getValue("ProductDoi").setSimpleValue(null);
	node.getValue("COPY_DOI").setSimpleValue(null);
	//node.getValue("ProductUrl").setSimpleValue(null);
	node.getValue("COPY_URL").setSimpleValue(null);
}




}