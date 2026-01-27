import MetaSEO from "../../components/seo/MetaSEO";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Container from "../../components/layout/Container";
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

  return (
    <>
      <MetaSEO
        title="Affiliate Program Rules — ONLYBROKERS Alliance"
        description="Rules governing referral attribution, commissions, partner responsibilities, and participation in the ONLYBROKERS Alliance affiliate program."
        canonical="/affiliate-rules"
        ogImage="/og.jpg"
        structuredData={structuredData}
        noindex={true} // снимешь когда будет финальный текст
      />

      <Header />

      <main className="legal">
        <Container>
          <h1 className="legal__h1">Affiliate Program Rules</h1>

          <p className="legal__p">
            The ONLYBROKERS Alliance affiliate program defines the rules for partner
            participation, referral attribution, commission eligibility, and
            platform protection mechanisms.
          </p>

          <p className="legal__p">
            These rules are designed to ensure transparency, prevent lead abuse,
            and protect partners who introduce clients, capital, or professional
            connections into the ecosystem.
          </p>

          <p className="legal__p">
            This page is a placeholder. Final commission structures, attribution
            windows, and partner responsibilities will be published here before
            public launch.
          </p>
        </Container>
      </main>

      <Footer />
    </>
  );
}
