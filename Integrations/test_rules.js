/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "test_rules",
  "type" : "BusinessAction",
  "setupGroups" : [ "Integrations" ],
  "name" : "Test Rules",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ {
    "libraryId" : "Generic_Search_Functions",
    "libraryAlias" : "genericSearch"
  } ]
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
    "alias" : "manager",
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
    "contract" : "QueryHomeBindContract",
    "alias" : "qh",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "journal",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "Journal",
    "description" : null
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "journalPrintVolume",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "JournalPrintVolumes",
    "description" : null
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "journalDigitalVolume",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "JournalDigitalVolumes",
    "description" : null
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "journalPrintIssue",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "JournalPrintIssues",
    "description" : null
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "journalDigitalIssue",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "JournalDigitalIssues",
    "description" : null
  }, {
    "contract" : "AttributeBindContract",
    "alias" : "journalProductCode",
    "parameterClass" : "com.stibo.core.domain.impl.AttributeImpl",
    "value" : "JournalProductCode",
    "description" : null
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "journalDigitalMedia",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "JournalDigitalMedia",
    "description" : null
  }, {
    "contract" : "ObjectTypeBindContract",
    "alias" : "journalPrintMedia",
    "parameterClass" : "com.stibo.core.domain.impl.ObjectTypeImpl",
    "value" : "JournalPrintMedia",
    "description" : null
  }, {
    "contract" : "AttributeBindContract",
    "alias" : "issueVolumeNo",
    "parameterClass" : "com.stibo.core.domain.impl.AttributeImpl",
    "value" : "IssueVolumeNumber",
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation0 = function (log,manager,node,qh,journal,journalPrintVolume,journalDigitalVolume,journalPrintIssue,journalDigitalIssue,journalProductCode,journalDigitalMedia,journalPrintMedia,issueVolumeNo,genericSearch) {
// Extract Journal (JournalProductCode; Volume number and Issue number from the payload
var id = "AYC.72:1.ISS";
var groupCdVol = id.substring(0,id.indexOf(":"));
var journalCd = groupCdVol.substring(0,groupCdVol.lastIndexOf("."));
var volNum = groupCdVol.substring(groupCdVol.lastIndexOf(".")+1,groupCdVol.length);
var issueNo = id.substring(id.indexOf(":")+1,id.lastIndexOf("."));
log.info(journalCd+" volume "+volNum+" issue "+issueNo);
//Search for the Journal
var journalNode = executeQuery(journal,journalCd,journalProductCode);
if(journalNode)
{
	var mediaObjectsIter = journalNode.getChildren().iterator();
	// Get children of the Journal
	while(mediaObjectsIter.hasNext())
	{
		var journalMediaObject = mediaObjectsIter.next();
	//	log.info(journalMediaObject.getObjectType()+"::"+journalPrintMedia);
		if(journalMediaObject.getObjectType().getID() == journalPrintMedia.getID())
		{
			log.info('Get print volume info...');
		/*	if(getJournalPrintVolume(journalMediaObject))
			{
				return true;
			} */
				
		}

		if(journalMediaObject.getObjectType().getID() == journalDigitalMedia.getID())
		{
			log.info('Get print volume info...');
			if(getJournalDigitalVolume(journalMediaObject))
			{
				return true;
			}
				
		}
		
	}
}
var code = "AYC.72:1.ISS";

/* Query Journal Object based on Journal Product Code. 
Note: Direct query of the Issue object was not possible due to the limitation in STEP for not able to query an object based on inherited attribute value
Below code searches the Parent Journal Object and traverse to the child objects
*/
function executeQuery(objectType,attrValue,attrId)
{
	var conditions = com.stibo.query.condition.Conditions;	
	var hasValue = conditions.valueOf(manager.getAttributeHome().getAttributeByID("" + attrId.getID())).eq("" + attrValue);
	var hasObjectType = conditions.objectType(objectType);
	var querySpecification = qh.queryFor(com.stibo.core.domain.Product).where(hasValue.and(hasValue).and(hasObjectType));
	var queryResult = querySpecification.execute();	
 	var resultSet = queryResult.asList(10);
 	log.info(resultSet.size())
 	if(resultSet.size() > 0)
 	{
 		return resultSet.get(0);
 	} 
}

/* 
 * Get child Objects of the parent node.
 */
function getChildObjects(node,objectType)
{
	var childObjectsIter = node.getChildren().iterator();
	//log.info('Inside get child objects'+node+'::'+objectType);
	while(childObjectsIter.hasNext())
	{
		var childObjectNode = childObjectsIter.next();		
		var childObjectNodeType = childObjectNode.getObjectType().getID();
		//log.info('inside loop'+childObjectNodeType+'::'+objectType.getID());
		if(childObjectNodeType == objectType.getID())
		{
			return node;
			
		}else
		{
			getChildObjects(childObjectNode,objectType);
		}
		
	}
	
}

function getJournalPrintVolume(node,journalPrintVolume)
{
	// This node is the digital media node; Get publication year;
	var printVolumes = getChildObjects(node,journalPrintVolume);
	if(!printVolumes)
	 return false;
}

function getJournalDigitalVolume(node)
{
	// This node is the digital media node; Get publication year;
	var digitalVolumes = getChildObjects(node,journalDigitalVolume);
	log.info('Digital vol found:'+digitalVolumes);
	var digitalVolIter = digitalVolumes.getChildren().iterator();
	while(digitalVolIter.hasNext())
	{
		var digitalVolObject = digitalVolIter.next();
		log.info('Inside while'+digitalVolObject.getName());
		
		var volNumber = digitalVolObject.getValue('IssueVolumeNumber').getSimpleValue();
		log.info(digitalVolObject.getName());
	}
	
}
}