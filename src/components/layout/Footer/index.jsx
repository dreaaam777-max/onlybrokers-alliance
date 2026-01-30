import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "../Container/index.jsx";
import "./Footer.css";

/* ================= ICONS ================= */

const IconGmail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M3 6.5L12 13L21 6.5" stroke="#EA4335" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M5 6H19C20.1 6 21 6.9 21 8V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V8C3 6.9 3.9 6 5 6Z" stroke="#EA4335" strokeWidth="1.6" />
  </svg>
);

const IconTelegram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M21 3L3 11.5L9.5 13.5L11.5 20L15 15.5L20 5.5" stroke="#229ED9" strokeWidth="1.6" strokeLinejoin="round" />
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
    <rect x="4" y="4" width="16" height="16" rx="5" stroke="url(#igGradient)" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="3.5" stroke="url(#igGradient)" strokeWidth="1.6" />
    <circle cx="17.5" cy="6.5" r="1" fill="#DD2A7B" />
  </svg>
);

const IconTikTok = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M14 3V14.5C14 16.43 12.43 18 10.5 18C8.57 18 7 16.43 7 14.5C7 12.57 8.57 11 10.5 11" stroke="#EE1D52" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M14 6.5C15.2 8.2 16.8 9 18.5 9" stroke="#69C9D0" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

/* ================= FOOTER ================= */

export default function Footer() {
  const year = new Date().getFullYear();
  const { t, i18n } = useTranslation();

  const setLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
    document.documentElement.lang = lng;
  };

  return (
    <footer className="ftr" aria-label="Site footer">
      <Container>

        {/* TOP */}
        <div className="ftr__grid">
          <div className="ftr__brand">
            <div className="ftr__title">ONLYBROKERS Alliance</div>
            <p className="ftr__muted">{t("footer.tagline")}</p>
          </div>

          <nav className="ftr__links" aria-label="Legal">
            <ul className="ftr__list">
              <li><Link to="/affiliate-rules">{t("footer.affiliate")}</Link></li>
              <li><Link to="/terms">{t("footer.terms")}</Link></li>
              <li><Link to="/privacy">{t("footer.privacy")}</Link></li>
            </ul>
          </nav>

          <div className="ftr__note">
            <p className="ftr__muted">{t("footer.notice")}</p>

            <div className="ftr__lang" role="group" aria-label="Language switch">
              <button
                type="button"
                className={`ftr__pill ${i18n.language === "en" ? "is-active" : ""}`}
                aria-pressed={i18n.language === "en"}
                onClick={() => setLng("en")}
              >
                EN
              </button>

              <button
                type="button"
                className={`ftr__pill ${i18n.language === "ru" ? "is-active" : ""}`}
                aria-pressed={i18n.language === "ru"}
                onClick={() => setLng("ru")}
              >
                RU
              </button>
            </div>
          </div>
        </div>

        {/* CONTACTS */}
        <div className="ftr__contactsBar">
          <div className="ftr__contactsTitle">{t("footer.contacts")}</div>

          <ul className="ftr__contactsRow">
            <li>
              <a href="https://instagram.com/onlybrokers.alliance" target="_blank" rel="noopener noreferrer" className="ftr__contactLink">
                <IconInstagram /> @onlybrokers.alliance
              </a>
            </li>

            <li>
              <a href="https://t.me/onlybrokers_alliance" target="_blank" rel="noopener noreferrer" className="ftr__contactLink">
                <IconTelegram /> @onlybrokers_alliance
              </a>
            </li>

            <li>
              <a href="mailto:onlybrokersalliance@gmail.com" className="ftr__contactLink">
                <IconGmail /> onlybrokersalliance@gmail.com
              </a>
            </li>

            <li>
              <a href="https://tiktok.com/@onlybrokers_alliance" target="_blank" rel="noopener noreferrer" className="ftr__contactLink">
                <IconTikTok /> @onlybrokers.alliance
              </a>
            </li>
          </ul>
        </div>

        {/* BOTTOM */}
        <div className="ftr__bottom">
          <span>© {year} ONLYBROKERS Alliance</span>
          <span className="ftr__muted">{t("footer.invite")}</span>
        </div>

      </Container>
    </footer>
  );
}
