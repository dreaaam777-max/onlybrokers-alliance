// src/pages/AffiliateRules/AffiliateRules.jsx
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import MetaSEO from "../../components/seo/MetaSEO";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Container from "../../components/layout/Container";
import Accordion from "../../components/ui/Accordion/Accordion.jsx";

import "../PrivacyPolicy/Legal.css";

const SITE_URL = "https://onlybrokersalliance.com";

export default function AffiliateRules() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ru") ? "ru" : "en";

  const items = useMemo(() => {
    const arr = t("affiliateRules.items", { returnObjects: true });
    return Array.isArray(arr) ? arr : [];
  }, [t]);

  const seoTitle = t("affiliateRules.seo.title");
  const seoDesc = t("affiliateRules.seo.description");

  const structuredData = useMemo(() => {
    const pageUrl = `${SITE_URL}/affiliate-rules`;

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "ONLYBROKERS Alliance",
          url: `${SITE_URL}/`,
          logo: `${SITE_URL}/logo.png`,
        },
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: "ONLYBROKERS Alliance",
          publisher: { "@id": `${SITE_URL}/#organization` },
          inLanguage: lang,
        },
        {
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: seoTitle,
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#organization` },
          inLanguage: lang,
        },
      ],
    };
  }, [lang, seoTitle]);

  return (
    <>
      <MetaSEO
        title={seoTitle}
        description={seoDesc}
        canonical="/affiliate-rules"
        ogImage="/og.jpg"
        structuredData={structuredData}
        noindex={false}
      />

      <Header />

      <main className="legal">
        <Container>
          <h1 className="legal__h1">{t("affiliateRules.h1")}</h1>

          <p className="legal__p">{t("affiliateRules.intro")}</p>

          <div className="legal__acc" aria-label={t("affiliateRules.accordion_aria")}>
            <Accordion items={items} defaultOpen={0} />
          </div>

          <p className="legal__p" style={{ marginTop: 14 }}>
            {t("affiliateRules.outro")}
          </p>
        </Container>
      </main>

      <Footer />
    </>
  );
}
