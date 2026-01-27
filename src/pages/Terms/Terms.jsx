import MetaSEO from "../../components/seo/MetaSEO";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Container from "../../components/layout/Container";
import "../PrivacyPolicy/Legal.css";

export default function Terms() {
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
        "@id": "https://onlybrokersalliance.com/terms#webpage",
        "url": "https://onlybrokersalliance.com/terms",
        "name": "Terms & Conditions — ONLYBROKERS Alliance",
        "isPartOf": { "@id": "https://onlybrokersalliance.com/#website" },
        "about": { "@id": "https://onlybrokersalliance.com/#organization" },
        "inLanguage": "en"
      }
    ]
  };

  return (
    <>
      <MetaSEO
        title="Terms & Conditions — ONLYBROKERS Alliance"
        description="Terms & Conditions governing access and participation in the ONLYBROKERS Alliance partner ecosystem."
        canonical="/terms"
        ogImage="/og.jpg"
        structuredData={structuredData}
        noindex={true} // снимешь когда будет финальный текст
      />

      <Header />

      <main className="legal">
        <Container>
          <h1 className="legal__h1">Terms &amp; Conditions</h1>
          <p className="legal__p">
            This is a placeholder. Replace with your final legal text.
          </p>
        </Container>
      </main>

      <Footer />
    </>
  );
}
