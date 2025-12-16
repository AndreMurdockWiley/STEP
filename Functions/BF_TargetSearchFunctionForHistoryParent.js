/*===== export metadata =====
{
  "contextId" : "Context1",
  "workspaceId" : "Main"
}
*/
/*===== business rule definition =====
{
  "id" : "BF_TargetSearchFunctionForHistoryParent",
  "type" : "BusinessFunction",
  "setupGroups" : [ "Functions" ],
  "name" : "Target Search Function for History Journal Parent Objects",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "QueryBusinessFunction",
  "parameters" : [ {
    "id" : "FunctionParameterBinds",
    "type" : "com.stibo.core.domain.businessrule.function.parameter.FunctionParameterBindMap",
    "value" : "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<FunctionParameterBindMap>\n  <Bind contractID=\"StringBindContract\" Alias=\"string\" Description=\"\" ParameterClass=\"null\"/>\n  <Bind contractID=\"NodeBindContract\" Alias=\"node\" Description=\"\" ParameterClass=\"null\"/>\n</FunctionParameterBindMap>\n"
  }, {
    "id" : "QueryVariables",
    "type" : "com.stibo.queryfunction.domain.plugin.parameter.QueryVariablesMap",
    "value" : "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPFF1ZXJ5VmFyaWFibGVzLz4K"
  }, {
    "id" : "SearchParameter",
    "type" : "com.stibo.queryfunction.domain.plugin.parameter.SearchParameter",
    "value" : "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPENyaXRlcmlhR3JvdXAgQ3JpdGVyaWFHcm91cE9wZXJhdG9yPSJhbmQiPgogIDxDcml0ZXJpb24gdHlwZT0iT0JKRUNUX1RZUEUiPgogICAgPE9iamVjdFR5cGVDcml0ZXJpYT4KICAgICAgPE9iamVjdFR5cGVDcml0ZXJpb24gTm9kZUlkPSJKb3VybmFsSGlzdG9yeUF0b1oiIE5vZGVOYW1lPSJKb3VybmFsIEhpc3RvcnkgQSB0byBaIi8+CiAgICA8L09iamVjdFR5cGVDcml0ZXJpYT4KICA8L0NyaXRlcmlvbj4KICA8Q3JpdGVyaWFHcm91cCBDcml0ZXJpYUdyb3VwT3BlcmF0b3I9Im9yIj4KICAgIDxDcml0ZXJpb24gdHlwZT0iTkFNRSI+CiAgICAgIDxOYW1lQ3JpdGVyaWE+CiAgICAgICAgPE5hbWVDcml0ZXJpb24gVmFyaWFibGVOYW1lPSJzdHJpbmciIE5hbWVPcGVyYXRvcj0iTGlrZSIgTmFtZU9wZXJhdG9ySW5kZXg9IjMiLz4KICAgICAgPC9OYW1lQ3JpdGVyaWE+CiAgICA8L0NyaXRlcmlvbj4KICAgIDxDcml0ZXJpb24gdHlwZT0iSUQiPgogICAgICA8SWRDcml0ZXJpYT4KICAgICAgICA8SWRDcml0ZXJpb24gVmFyaWFibGVOYW1lPSJzdHJpbmciIElkT3BlcmF0b3I9IjAiLz4KICAgICAgPC9JZENyaXRlcmlhPgogICAgPC9Dcml0ZXJpb24+CiAgPC9Dcml0ZXJpYUdyb3VwPgo8L0NyaXRlcmlhR3JvdXA+Cg=="
  } ],
  "pluginType" : "Operation"
}
*/
