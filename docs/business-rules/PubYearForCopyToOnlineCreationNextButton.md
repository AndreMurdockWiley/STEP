## PubYearForCopyToOnlineCreationNextButton

- **Rule type**: Business Action
- **Business area**: PubYearNavegationGroup
- **Data model object valid to**: All
- **Attribute ID(s)**: CopyToOnline, JournalMediaCode, JournalPublicationYear
- **Source file(s)**: `PubYearGroup/PubYearNavegationGroup/PubYearForCopyToOnlineCreationNextButton.js`

### Functional description

Pub Year For Copy To Online Creation/Next Button

### Functional logic

- Calls: pubLibrary.createYear, journalLibrary.journalCopyToOnlineValidity, pubLibrary.yearCopyToOnline.
- Reads/writes attributes including: JournalPublicationYear, JournalMediaCode, CopyToOnline.

### Errors

—

### Usage / trigger

—

### Dependencies / key functions

—

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 375
