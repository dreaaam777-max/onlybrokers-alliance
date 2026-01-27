import MetaSEO from "../../components/seo/MetaSEO";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Container from "../../components/layout/Container";
import Accordion from "../../components/ui/Accordion/Accordion.jsx";

import "../PrivacyPolicy/Legal.css";

export default function AffiliateRules() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://onlybrokersalliance.com/#organization",
        "name": "ONLYBROKERS Alliance",
        "url": "https://onlybrokersalliance.com/",
        "logo": "https://onlybrokersalliance.com/logo.png"
      },
      {
        "@type": "WebSite",
        "@id": "https://onlybrokersalliance.com/#website",
        "url": "https://onlybrokersalliance.com/",
        "name": "ONLYBROKERS Alliance",
        "publisher": { "@id": "https://onlybrokersalliance.com/#organization" },
        "inLanguage": "en"
      },
      {
        "@type": "WebPage",
        "@id": "https://onlybrokersalliance.com/affiliate-rules#webpage",
        "url": "https://onlybrokersalliance.com/affiliate-rules",
        "name": "Affiliate Program Rules — ONLYBROKERS Alliance",
        "isPartOf": { "@id": "https://onlybrokersalliance.com/#website" },
        "about": { "@id": "https://onlybrokersalliance.com/#organization" },
        "inLanguage": "en"
      }
    ]
  };

  const items = [
    {
      q: "1. Program overview",
      a: "This partner program rewards individuals who refer potential clients for real estate purchases through licensed professionals (third parties). These Rules are designed to ensure transparent, clear, and safe participation for all parties."
    },
    {
      q: "2. Disclaimer (role limitations)",
      a: `2.1 Partners are not real estate brokers/agents, legal, financial, or investment advisors, and do not represent the Company.
2.2 A Partner performs a referral function only: informing and directing a potential client through the Platform tools (including a personal link/form).
2.3 All property консультации, negotiations, legal review, document preparation, deal support, and closing are handled exclusively by licensed third parties (agencies, developers, lawyers, etc.). The Company may interact with such third parties as the Platform operator and/or a marketing partner, but does not provide brokerage services.
2.4 Partners are prohibited from: accepting money/advances/deposits/payments from clients; promising guaranteed income/profit or fixed results; acting on behalf of the Company or claiming to be an employee/representative; providing legal/tax/financial/investment advice; using misleading marketing statements.`
    },
    {
      q: "3. Definitions",
      a: `3.1 Platform — the ONLYBROKERS website, dashboard, and/or software services.
3.2 Company — the legal entity owning and operating the ONLYBROKERS Platform, not engaged in brokerage activity.
3.3 Partner — an individual admitted by the Company to the Program with access to referral tools.
3.4 Client — a person who (a) is tracked by the Platform via the Partner’s link/form/approved channel; and (b) completes a real estate purchase through a licensed specialist (third party).
3.5 Referral Partner (Level 1) — a partner personally invited by another Partner in the Platform system (first level only).
3.6 Marketing Reward — compensation for referral/marketing assistance payable when these Rules are satisfied. Any mention of “commission” must be understood as a marketing reward, not a brokerage commission.`
    },
    {
      q: "4. Program nature",
      a: `4.1 The Program is referral-only.
4.2 The Partner does not provide brokerage, legal, financial, or investment services.
4.3 The Program is not employment, staffing, a service contract as an employee, or an MLM system.
4.4 Only one referral reward level (Level 1) is allowed. No additional levels are permitted.`
    },
    {
      q: "5. Marketing reward",
      a: `5.1 Base terms (unless otherwise specified for a project/deal inside the Platform):
• Partner receives 3% of the property price for personal clients;
• Partner receives 1% for deals of Level 1 partners personally invited by the Partner.
5.1.1 Payment timing depends on developer/deal rules, but in any case cannot exceed 12 months from accrual. After that, unclaimed amounts may be voided.
5.2 Rates/terms may vary by project, developer, country, property type, and other parameters. In such cases, the Platform terms for that project/deal apply.
5.3 Reward is calculated based on the purchase price stated in the sale contract (or other confirming document) and may be limited to amounts actually received by the Company from a developer/third party, if applicable.
5.4 A Partner’s entitlement arises only if: the deal is fully completed and documented; the Company has received its reward (if applicable); the Partner did not violate these Rules; and the Client was not previously registered/assigned before Platform tracking.
5.5 The Company may change reward terms for future deals by publishing updates in the Platform and/or notifying via electronic channels.`
    },
    {
      q: "6. Client registration & attribution",
      a: `6.1 Client attribution is determined by Platform tracking data (referral link, form, and other approved channels). Platform records take priority.
6.2 The Company may reject or adjust attribution if: duplicates/errors/invalid data exist; the client was already in the database; fraud/abuse is suspected; these Rules or applicable law are violated.
6.3 The Company may request evidence of the referral source (screenshots, correspondence, campaign tags, etc.) to resolve disputes. Final decisions are made in good faith based on Platform data and available evidence.`
    },
    {
      q: "7. Payment terms & process",
      a: `7.1 Payment is made when: the deal is closed; the Company has received funds/reward from third parties (if applicable); Section 5 conditions are satisfied; no Partner violations are found.
7.2 Timing/method may depend on developer settlement terms, banking procedures, currency controls, and compliance.
7.3 The Company may request identification/compliance documents (KYC/AML/sanctions checks). Payments may be paused until documents are provided.
7.4 Partners are responsible for their own tax compliance in their jurisdiction.
7.5 Developer/third-party non-payment: if a developer/third party delays, disputes, or fails to pay the Company, the Company is not liable for that delay/non-payment. The Company will use reasonable efforts to address the issue and may inform the Partner of status where possible.`
    },
    {
      q: "8. Partner obligations",
      a: `8.1 Use the Platform and Company materials legally and in good faith.
8.2 Do not accept money from clients or participate in settlements.
8.3 Do not present yourself as a broker/agent, Company employee/representative, or a lawyer.
8.4 Do not promise guaranteed outcomes, profitability, discounts, or “exact terms” unless confirmed in the Platform/official materials.
8.5 Route clients only via approved Platform channels.
8.6 Maintain confidentiality of client/partner data.
8.7 Comply with applicable laws (advertising, privacy, and fair marketing).
8.8 Obtain client consent for sharing contact data where required by law and confirm consent for data processing and outreach by licensed specialists.`
    },
    {
      q: "9. Prohibited actions",
      a: `9.1 Register fake clients, use contacts without consent, create duplicates to capture attribution.
9.1.1 A Partner may not create/use/control more than one Platform account. Related accounts (family members, spouses, relatives, affiliated persons) are prohibited if intended to aggregate rewards from the same deal(s).
9.1.2 The Company may determine account linkage based on technical/behavioral/financial indicators (including IP, devices, payment data, behavior patterns, matching details, or other indirect signs).
9.1.3 The Company may run linkage checks before any accrual/payment. Payments may be paused pending verification or voided if a violation is confirmed.
9.1.4 If accounts are blocked or rewards are voided due to violations, such amounts may be redistributed within the partner system at the Company’s discretion.
9.2 Manipulate tracking, use bots, inflate metrics, falsify documents.
9.3 Publish misleading advertising or unverified promises/terms.
9.4 Use the Company brand/name/logo without written consent except where explicitly allowed.
9.5 Use the Platform for unlawful activity or to bypass Rules.`
    },
    {
      q: "10. Company rights",
      a: `10.1 Approve, limit, or terminate Partner access to the Program.
10.2 Reassign/reject clients in cases of violations, duplicates, or fraud.
10.3 Refuse accrual/payment if Rules are violated.
10.4 Modify these Rules by publishing an updated version in the Platform.
10.5 Pause payments for compliance, fraud investigation, or legal/banking requirements.`
    },
    {
      q: "11. Liability",
      a: `11.1 Partners are responsible for their statements, marketing, content, and actions.
11.2 The Company is not responsible for: Partner promises/guarantees; decisions made by clients/partners based on their own assessment; actions/inactions of third parties (developers, agencies, banks, etc.), unless mandatory law requires otherwise.
11.3 To the maximum extent permitted by law, Company liability to the Partner is limited to the amount of accrued but unpaid reward, if payment obligation is proven.`
    },
    {
      q: "12. Legal limitations",
      a: `12.1 The Company is not a bank, financial institution, escrow service, payment agent, or brokerage house.
12.2 The Company does not guarantee performance of third parties.
12.3 Partners assess participation risks independently and must comply with their local laws.`
    },
    {
      q: "13. Termination",
      a: `13.1 A Partner may terminate participation by notifying the Company via the Platform or available contact channel.
13.2 The Company may terminate a Partner for Rules violations, fraud/abuse, misleading marketing, confidentiality breaches, or unlawful use of the Platform.
13.3 Deals closed before termination are payable only if Section 5 conditions are met, no violations exist, and no compliance/legal restrictions prevent payment.`
    },
    {
      q: "14. Acceptance of terms",
      a: "Registration, clicking acceptance (checkbox/button), and/or using the Platform constitutes full and unconditional acceptance of these Rules and recognition of the Partner as an independent party, not a Company employee."
    },
    {
      q: "15. Governing law, jurisdiction & language",
      a: `15.1 These Rules are governed by the laws of the United Arab Emirates.
15.2 Disputes are subject to competent UAE courts, unless mandatory rules state otherwise.
15.3 If multiple language versions exist, the version designated by the Company in the Platform may prevail (recommended: English).`
    },
    {
      q: "16. Miscellaneous",
      a: `16.1 Force majeure: parties are not liable for delay/non-performance caused by events beyond reasonable control (sanctions, banking disruptions, regulator restrictions, war, natural disasters, mass outages, etc.).
16.2 Severability: if any provision is found invalid, remaining provisions remain in effect.
16.3 Updates: the current version is published in the Platform and applies to future operations/deals.`
    },
  ];

  return (
    <>
      <MetaSEO
        title="Affiliate Program Rules — ONLYBROKERS Alliance"
        description="Full affiliate program rules covering referral attribution, marketing reward terms, prohibited actions, compliance, and legal limitations."
        canonical="/affiliate-rules"
        ogImage="/og.jpg"
        structuredData={structuredData}
        noindex={false}
      />

      <Header />

      <main className="legal">
        <Container>
          <h1 className="legal__h1">Affiliate Program Rules</h1>

          <p className="legal__p">
            These rules define referral attribution, marketing reward eligibility, partner responsibilities,
            prohibited actions, and compliance requirements for participation in ONLYBROKERS Alliance.
          </p>

          {/* ✅ same UI as FAQ */}
          <div className="legal__acc" aria-label="Affiliate rules accordion">
            <Accordion items={items} defaultOpen={0} />
          </div>

          <p className="legal__p" style={{ marginTop: 14 }}>
            If you have questions, contact support through the Platform. By participating, you agree to follow these rules.
          </p>
        </Container>
      </main>

      <Footer />
    </>
  );
}
