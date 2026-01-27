import MetaSEO from "../../components/seo/MetaSEO";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Container from "../../components/layout/Container";
import "./Legal.css";

export default function PrivacyPolicy() {
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
        "@id": "https://onlybrokersalliance.com/privacy#webpage",
        "url": "https://onlybrokersalliance.com/privacy",
        "name": "Privacy Policy — ONLYBROKERS Alliance",
        "isPartOf": { "@id": "https://onlybrokersalliance.com/#website" },
        "about": { "@id": "https://onlybrokersalliance.com/#organization" },
        "inLanguage": "en"
      }
    ]
  };

  return (
    <>
      <MetaSEO
        title="Privacy Policy — ONLYBROKERS Alliance"
        description="Privacy Policy for ONLYBROKERS Alliance."
        canonical="/privacy"
        ogImage="/og.jpg"
        structuredData={structuredData}
        noindex={true} // снимешь когда будет финальный текст
      />

      <Header />

      <main className="legal">
        <Container>
          <h1 className="legal__h1">Privacy Policy</h1>
          <p className="legal__p">
            This is a placeholder. Replace with your final legal text.
          </p>
        </Container>
      </main>

      <Footer />
    </>
  );
}
