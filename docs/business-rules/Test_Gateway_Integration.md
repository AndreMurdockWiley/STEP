## Test_Gateway_Integration

- **Rule type**: Business Action
- **Setup group**: Integrations
- **Business area**: Integrations
- **Data model object valid to**: All
- **Product type(s) valid to**: All
- **Status**: Active
- **Source file(s)**: `Integrations/Test_Gateway_Integration.js`

### Functional description

Tests the configured gateway integration endpoint by issuing a sample HTTP GET request to `Test_Janis_Gateway`. The rule is invoked from an Integration rule configured in STEP Integration Endpoints, and it logs the raw response for validation/troubleshooting.

### Functional logic

- Obtain a GET request handle from the gateway binding (`myGateway.get()`).
- Set the API token request header (`apitoken`) with a fixed token value.
- Add query parameters for the request:
  - `requestType = ISBN13_SEARCH`
  - `application = STIBO`
  - `ISBN13 = 9781119384335`
- Invoke the request and capture the response.
- Log the response content; no parsing or mapping back to STEP is performed in this rule.

### Errors

- **Configured error**: N/A (Business Action).

### Usage / trigger

This section documents where the rule is used or triggered in STEP. The items listed below describe the workflow/configuration location(s) where this rule runs.

- **Configuration**: Integration rule (configured in STEP Integration Endpoints)
  - **Task/Event**: —

### Dependencies / key functions

- **Dependencies**: None
- **Key functions**: gateway.get(), header(), pathQuery(), invoke()

### Traceability

- **Source workbook**: `Stibo STEP Global Business Rules v1.3.xlsx`
- **Sheet**: `Global Business Rules Template `
- **Row(s) (0-based in data block)**: 97
