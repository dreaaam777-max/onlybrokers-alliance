import MetaSEO from "../../components/seo/MetaSEO";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/sections/Hero/Hero";
import AllianceLeadership from "../../components/sections/AllianceLeadership/AllianceLeadership";
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
  return (
    <>
      <MetaSEO
        title="ONLYBROKERS Alliance — Partner-only Real Estate Access"
        description="A closed partner hub connecting clients, deals and professionals through referrals. Entry by invitation only."
        canonical="/"
        ogImage="/og.jpg"
      />

      <Header />

      <main className="page-bg__content">
        <Hero />
        <AllianceLeadership />
        <ForWhom />
        <About />
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
