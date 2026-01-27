import MetaSEO from "../../components/seo/MetaSEO";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/sections/Hero/Hero";
import Founders from "../../components/sections/Founders/Founders";
import ForWhom from "../../components/sections/ForWhom/ForWhom";
import About from "../../components/sections/About/About";
import EntryScenarios from "../../components/sections/EntryScenarios/EntryScenarios";
import HowItWorks from "../../components/sections/HowItWorks/HowItWorks";
import Commissions from "../../components/sections/Commissions/Commissions";
import Protection from "../../components/sections/Protection/Protection";
import FAQ from "../../components/sections/FAQ/FAQ";
import Benefits from "../../components/sections/Benefits/Benefits";
import Join from "../../components/sections/Join/Join";
import FinalCTA from "../../components/sections/FinalCTA/FinalCTA";

export default function Home() {
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
        "publisher": {
          "@id": "https://onlybrokersalliance.com/#organization"
        },
        "inLanguage": "en"
      },
      {
        "@type": "WebPage",
        "@id": "https://onlybrokersalliance.com/#webpage",
        "url": "https://onlybrokersalliance.com/",
        "name": "ONLYBROKERS Alliance — Partner-only Real Estate Access",
        "isPartOf": {
          "@id": "https://onlybrokersalliance.com/#website"
        },
        "about": {
          "@id": "https://onlybrokersalliance.com/#organization"
        },
        "inLanguage": "en"
      }
    ]
  };

  return (
    <>
      <MetaSEO
        title="ONLYBROKERS Alliance — Partner-only Real Estate Access"
        description="A closed partner hub connecting clients, deals and professionals through referrals. Entry by invitation only."
        canonical="/"
        ogImage="/og.jpg"
        structuredData={structuredData}
      />

      <Header />

      <main className="page-bg__content">
        <Hero />
        <ForWhom />
        <About />
        <Founders />
        <EntryScenarios />
        <HowItWorks />
        <Commissions />
        <Protection />
        <FAQ />
        <Benefits />
        <Join />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
