## PublicationYearUtilityLibrary

- **Rule type**: Library
- **Setup group**: Libraries
- **Business area**: Libraries
- **Product type(s) valid to**: JournalPrintPublicationYear, JournalDigitalPublicationYear
- **Attribute ID(s)**: ContinuousNumbering, CreateIssueTypeIDL, IssueNumber, IssuePubSequence, IssueSentToSAP, IssueType, IssueVolumeNumber, JournalGroupCode, JournalMediaCode, JournalNumberOfVolumes, JournalPublicationYear, JournalStartingVolume, NumberOfIssues, ProductPublicationYear, VolumeGroupPublicationSet
- **Attribute name(s)**: Various year attributes
- **Version**: Legacy
- **Status**: Deprecated
- **Source file(s)**: `Libraries/PublicationYearUtilityLibrary.js`

### Functional description

Legacy utility library that supports the VolumeIssueCreation workflow. It centralizes the creation and lookup of publication years, volumes, and issues for both print and digital journal media, populating core publishing attributes (year, volume, issue sequencing, and default issue type) and invoking the standard issue attribute generation action. It also provides helper routines to copy a print publication structure to the online (digital) media node, clear publishing input fields, and safely delete a publication year and its children when no issue has been sent to SAP.

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- Plugin: JavaScriptBusinessLibrary (helper functions used by workflow actions).
- Resolve the owning journal via JournalGroupCode and locate the appropriate media node (print vs digital) by JournalMediaCode.
- Create or retrieve a publication year under the media node based on ProductPublicationYear; set name, ContinuousNumbering = "No", and select the print/digital publication-year object type.
- Create volumes under the year using the starting volume and count; set CreateIssueTypeIDL = "Standard Issue" and IssueVolumeNumber, and select print/digital volume object types.
- Create issues under each volume, set IssueType, and run the "JournalIssuesAttributeGeneration" business action; return the created issue IDs.
- Optionally copy a print year/volume/issue structure to digital media and copy IssueNumber, IssueType, and IssuePubSequence values while re-running issue attribute generation.
- Provide utilities to clear publishing input fields and to delete a publication year tree if no issue is marked IssueSentToSAP = "Y"; otherwise block deletion with an error alert.

### Errors

- **Configured error**: N/A (Business Action).
- **In-script message**: Can't Delete the Publication Year. There is an issue that had been sent to SAP

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Workflow: "VolumeIssueCreationWF"
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: getJournal(), createYear(), createVolume(), createIssue()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 12
