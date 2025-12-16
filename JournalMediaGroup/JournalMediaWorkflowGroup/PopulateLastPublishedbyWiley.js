/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "PopulateLastPublishedbyWiley",
  "type" : "BusinessAction",
  "setupGroups" : [ "JournalMediaWorkflowGroup" ],
  "name" : "Populate Last Published by Wiley",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ "JournalPrintMedia", "JournalDigitalMedia" ],
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
    "contract" : "CurrentObjectBindContract",
    "alias" : "child",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (child) {
function updateLastPubYearByWileyForChild(child) {
    var journal = child.getParent();
    var digitalMedia = null;
    var printMedia = null;
    var digitalStatus = null;
    var printStatus = null;
    var digitalLastPub = null;
    var printLastPub = null;
   // log.info("Journal ID: " + journal.getID());

    // Iterate through the children to find digital and print media
    var children = journal.getChildren();
    for (var i = 0; i < children.size(); i++) {
        var sibling = children.get(i);
        var siblingType = sibling.getObjectType().getID();
        //log.info("Sibling Type: " + siblingType+typeof(siblingType));

        if ((siblingType+"") === "JournalDigitalMedia") {
            digitalMedia = sibling;
            // log.info("Digital Media ID: " + digitalMedia);
            digitalStatus = digitalMedia.getValue("ProductStatus").getID();
            digitalLastPub = digitalMedia.getValue("JournalLastPubYear").getSimpleValue();
           
           // log.info("Digital Status: " + digitalStatus);
           // log.info("Digital Last Pub: " + digitalLastPub);

        } else if ((siblingType+"") === "JournalPrintMedia") {
            printMedia = sibling;
            printStatus = printMedia.getValue("ProductStatus").getID();
            printLastPub = printMedia.getValue("JournalLastPubYear").getSimpleValue();
            //log.info("Print Media ID: " + printMedia.getID());
            //log.info("Print Status: " + printStatus);
            //log.info("Print Last Pub: " + printLastPub);
        }
    }

    // Determine the value for lastpubyearbywiley based on the conditions
    var lastPubYearByWiley = null;

    if (digitalMedia && printMedia) {
    //	log.info("Both");
       if ((digitalStatus== "S" || digitalStatus == "C" || digitalStatus == "M" || digitalStatus == "A") &&
            (printStatus == "S" || printStatus == "C" || printStatus == "M" || printStatus == "A")) {
            	if(digitalLastPub!=null){
            lastPubYearByWiley = digitalLastPub;
            //log.info("Last Pub Year by Wiley (both statuses match): " + lastPubYearByWiley);
        } 
        else {
            lastPubYearByWiley = printLastPub;
            //log.info("Last Pub Year by Wiley (print status): " + lastPubYearByWiley);
        }
        }else {
            lastPubYearByWiley = null;
            //log.info("Last Pub Year by Wiley (print status): " + lastPubYearByWiley);
        }
    } else if (digitalMedia && (digitalStatus == "S" || digitalStatus == "C" || digitalStatus == "M" || digitalStatus == "A")) {
        lastPubYearByWiley = digitalLastPub;
        //log.info("Last Pub Year by Wiley (digital status): " + lastPubYearByWiley);
    } else if (printMedia && (printStatus == "S" || printStatus == "C" || printStatus == "M" || printStatus == "A")) {
        lastPubYearByWiley = printLastPub;
        //log.info("Last Pub Year by Wiley (print status): " + lastPubYearByWiley);
    }

    // Update the journal's lastpubyearbywiley attribute
 // if (lastPubYearByWiley !== null) {
        journal.getValue("LastPublishedbyWiley").setSimpleValue(lastPubYearByWiley);
        //log.info("Updated Journal Last Pub Year by Wiley: " + lastPubYearByWiley);
  //  }
}

// Example usage
updateLastPubYearByWileyForChild(child);
}