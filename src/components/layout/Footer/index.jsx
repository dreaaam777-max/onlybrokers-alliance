// src/components/layout/Footer/index.jsx
import { Link } from "react-router-dom";
import Container from "../Container/index.jsx";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ftr" aria-label="Site footer">
      <Container>
        <div className="ftr__grid">
          <div className="ftr__brand">
            <div className="ftr__title">ONLYBROKERS Alliance</div>
            <p className="ftr__muted">
              Partner-only ecosystem for deals, referrals and scalable income.
            </p>
          </div>

          <nav className="ftr__links" aria-label="Legal">
            <ul className="ftr__list">
              <li><Link to="/affiliate-rules">Affiliate Program Rules</Link></li>
              <li><Link to="/terms">Terms &amp; Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </nav>

          <div className="ftr__note">
            <p className="ftr__muted">
              Property buyers are served exclusively through partners or platform request.
            </p>

            <div className="ftr__lang" aria-label="Language switcher">
              <button type="button" className="ftr__pill" aria-pressed="true">
                EN
              </button>

              {/* RU как “скоро будет”, чтобы не было пустого UX */}
              <button
                type="button"
                className="ftr__pill ftr__pill--ghost"
                aria-pressed="false"
                disabled
                aria-disabled="true"
                title="RU version is coming soon"
              >
                RU
              </button>
            </div>
          </div>
        </div>

        <div className="ftr__bottom">
          <span>© {year} ONLYBROKERS Alliance</span>
          <span className="ftr__muted">Entry by invitation only.</span>
        </div>
      </Container>
    </footer>
  );
}
