import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy.jsx";
import Terms from "../pages/Terms/Terms.jsx";
import AffiliateRules from "../pages/AffiliateRules/AffiliateRules.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      {/* Main */}
      <Route path="/" element={<Home />} />

      {/* Legal */}
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/affiliate-rules" element={<AffiliateRules />} />

      {/* 404 — всегда в конце */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
