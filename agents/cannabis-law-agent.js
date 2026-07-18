// PrimeDox AI — Cannabis Law Agent
// Constitutional arguments, cannabis law templates, ODSP appeals

const cannabisTemplates = {
  odspCannabisAppeal: (claimant, odspFileNumber, medicalNeed) => `
REQUEST FOR INTERNAL REVIEW — ODSP CANNABIS COVERAGE
ODSP File No: ${odspFileNumber}

TO: Ontario Disability Support Program
FROM: ${claimant}

RE: Request for Internal Review — Denial of Medical Cannabis Coverage

ARGUMENTS:
1. The Government of Canada spends $244 million annually on veterans' cannabis coverage;
2. The arbitrary exclusion of medical cannabis from ODSP coverage violates:
   a) Section 7 of the Charter (right to life, liberty, security of person);
   b) Section 15 of the Charter (equality rights — discrimination against disabled persons);
3. Medical cannabis is a recognized medical necessity, not a discretionary expense;
4. The denial causes disproportionate harm to disabled persons who cannot afford private coverage.

RELIEF SOUGHT:
1. Approval of medical cannabis coverage under ODSP;
2. Retroactive reimbursement for denied claims;
3. Policy amendment to include medical cannabis as a covered benefit.

Date: _______________
_____________________
${claimant}

DISCLAIMER: This is an educational template based on constitutional arguments. 
Derek Francisco is a legal educator, NOT a lawyer. No legal advice.
`,

  constitutionalArgument: (section, facts, remedy) => `
CONSTITUTIONAL ARGUMENT
Section ${section} of the Canadian Charter of Rights and Freedoms

FACTS:
${facts}

ARGUMENT:
The impugned [law/policy/decision] violates Section ${section} of the Charter because:
[Constitutional analysis based on established jurisprudence]

RELIEF SOUGHT:
${remedy}

Date: _______________

DISCLAIMER: Educational constitutional argument template. Derek Francisco is a legal educator.
`
};

module.exports = { cannabisTemplates };
