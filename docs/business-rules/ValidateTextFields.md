## ValidateTextFields

- **Rule type**: Business Condition
- **Business area**: Conditions
- **Data model object valid to**: All
- **Attribute ID(s)**: JournalBackfileContentISSN, JournalMarketingCopyHeadline, JournalMarketingCopySubjectArea, JournalMarketingCopyUSP1, JournalMarketingCopyUSP2, JournalMarketingCopyUSP3, JournalMarketingCopyUSP4
- **Source file(s)**: `Conditions/ValidateTextFields.js`

### Functional description

Validates user-entered text during **Journals Mass Update** to prevent common formatting issues that impact search, display, and downstream integrations. The rule checks the marketing copy fields (Headline, Subject Area, USP1–USP4) and additional Journal text attributes made editable via the Web UI configuration, and it also enforces basic hygiene on URL fields. For Backfiles, it validates ISSN values stored in the backfile content data container.

The rule is triggered as a **STEP business condition validation**. If any issues are found, the validation fails and the user is shown a consolidated error listing the attribute IDs that need correction (for example: `<b>Please correct the Fields : </b>{errormessage}` / `Please correct the Fields :`).

### Functional logic

This section summarizes the configured functional logic captured in the rules inventory. The bullet points below are a concise, human-readable summary of the rule logic (inferred where necessary from the script).

- **Determine which text fields to validate**
  - For object type `Journal`, validate:
    - `JournalMarketingCopyHeadline`
    - `JournalMarketingCopySubjectArea`
    - `JournalMarketingCopyUSP1`, `JournalMarketingCopyUSP2`, `JournalMarketingCopyUSP3`, `JournalMarketingCopyUSP4`
    - All attributes in attribute group `AG_Journal_Search_WebUI`
  - Skip excluded long-text / notes fields (for example `JournalCommentsNotes`, `JournalHistoryNotes`, `ProductComments`, etc.).
- **Validate text formatting (non-derived, non-inherited values only)**
  - If a value has **leading whitespace**, add an error (`<AttributeID>-has leading space.`).
  - If a value has **trailing whitespace**, add an error (`<AttributeID>-has trail space.`).
  - If a value contains a **line break** (`\n`), add an error (`<AttributeID>- has line break.`).
- **Validate URL fields (space character not allowed)**
  - For a predefined set of URL attributes (e.g., `JournalEditorialSelfArchivingPolicyURL`, `JournalMetricsURL`, `JournalSubmissionUrlValue`, etc.), add an error when the value contains a space (`<AttributeID>-has a space.`).
- **Validate Backfiles ISSN in the backfile content data container**
  - For object type `Backfiles`, iterate `JournalBackfileContentDataContainer` entries and validate `JournalBackfileContentISSN` contains **only alphanumeric characters** (`A–Z`, `a–z`, `0–9`).
- **Return result**
  - De-duplicate errors and, if any exist, return a message that lists all offending fields (one per line). Otherwise, return `true` (validation passes).

### Errors

- **Configured error**: <b>Please correct the Fields : </b>{errormessage}
- **In-script message**: Please correct the Fields :

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Business condition (validation configured in STEP)
  - **Task/Event**: —

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 276
