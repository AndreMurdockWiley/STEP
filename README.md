# STEP
Repository for STEP business rules.

## Business rule documentation

Generated per-rule documentation is available under `docs/business-rules/`.

- `docs/business-rules/INDEX.md`: quick index to all rule docs
- `docs/business-rules/<RULE_ID>.md`: one file per rule ID (includes functional description, functional logic, errors, and usage/trigger context)

To regenerate documentation locally:

```bash
npm install
npm run generate:rule-docs -- "Stibo STEP Global Business Rules v1.3.xlsx" /workspace /workspace/docs/business-rules
```
