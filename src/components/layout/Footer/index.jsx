import { Link } from "react-router-dom";
import Container from "../Container/index.jsx";
import "./Footer.css";

/* ================= ICONS (BRAND COLORS) ================= */

const IconGmail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 6.5L12 13L21 6.5"
      stroke="#EA4335"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M5 6H19C20.1 6 21 6.9 21 8V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V8C3 6.9 3.9 6 5 6Z"
      stroke="#EA4335"
      strokeWidth="1.6"
    />
  </svg>
);

const IconTelegram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M21 3L3 11.5L9.5 13.5L11.5 20L15 15.5L20 5.5"
      stroke="#229ED9"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="igGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F58529" />
        <stop offset="50%" stopColor="#DD2A7B" />
        <stop offset="100%" stopColor="#515BD4" />
      </linearGradient>
    </defs>

    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="5"
      stroke="url(#igGradient)"
      strokeWidth="1.6"
    />
    <circle
      cx="12"
      cy="12"
      r="3.5"
      stroke="url(#igGradient)"
      strokeWidth="1.6"
    />
    <circle cx="17.5" cy="6.5" r="1" fill="#DD2A7B" />
  </svg>
);

const IconTikTok = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M14 3V14.5C14 16.43 12.43 18 10.5 18C8.57 18 7 16.43 7 14.5C7 12.57 8.57 11 10.5 11"
      stroke="#EE1D52"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M14 6.5C15.2 8.2 16.8 9 18.5 9"
      stroke="#69C9D0"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

/* ================= FOOTER ================= */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ftr" aria-label="Site footer">
      <Container>

        {/* TOP GRID */}
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

            <div className="ftr__lang">
              <button className="ftr__pill">EN</button>
              <button className="ftr__pill ftr__pill--ghost" disabled>RU</button>
            </div>
          </div>
        </div>

        {/* CONTACTS STRIP */}
        <div className="ftr__contactsBar">
          <div className="ftr__contactsTitle">Contacts</div>

          <ul className="ftr__contactsRow">
            <li className="ftr__contactItem">
              <a
                href="https://instagram.com/onlybrokers.alliance"
                target="_blank"
                rel="noopener noreferrer"
                className="ftr__contactLink"
              >
                <span className="ftr__ico"><IconInstagram /></span>
                @onlybrokers.alliance
              </a>
            </li>
            <li className="ftr__contactItem">
              <a
                href="https://t.me/onlybrokers_alliance"
                target="_blank"
                rel="noopener noreferrer"
                className="ftr__contactLink"
              >
                <span className="ftr__ico"><IconTelegram /></span>
                @onlybrokers_alliance
              </a>
            </li>
            <li className="ftr__contactItem">
              <a
                href="mailto:onlybrokersalliance@gmail.com"
                className="ftr__contactLink"
              >
                <span className="ftr__ico"><IconGmail /></span>
                onlybrokersalliance@gmail.com
              </a>
            </li>

            <li className="ftr__contactItem">
              <a
                href="https://tiktok.com/@onlybrokers_alliance"
                target="_blank"
                rel="noopener noreferrer"
                className="ftr__contactLink"
              >
                <span className="ftr__ico"><IconTikTok /></span>
                @onlybrokers.alliance
              </a>
            </li>
          </ul>
        </div>

        {/* BOTTOM */}
        <div className="ftr__bottom">
          <span>© {year} ONLYBROKERS Alliance</span>
          <span className="ftr__muted">Entry by invitation only.</span>
        </div>

      </Container>
    </footer>
  );
}
