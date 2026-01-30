import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "../Container/index.jsx";
import Button from "../../ui/Button/Button.jsx";
import "./Header.css";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export default function Header() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const [pendingScroll, setPendingScroll] = useState(null);

  const navItems = useMemo(
    () => [
      { id: "for-whom", label: t("nav_for_whom") },
      { id: "about", label: t("nav_about") },
      { id: "how_it_works", label: t("nav_how_it_works") },
      { id: "commissions", label: t("nav_commissions") },
      { id: "faq", label: t("nav_faq") },
    ],
    [t]
  );

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (pathname !== "/" || !pendingScroll) return;

    let tries = 0;
    const maxTries = 20;

    const tick = () => {
      tries += 1;
      const ok = scrollToId(pendingScroll);
      if (ok || tries >= maxTries) {
        setPendingScroll(null);
        return;
      }
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [pathname, pendingScroll]);

  function goToSection(id) {
    const realId = id === "how_it_works" ? "how-it-works" : id;

    if (isHome) {
      scrollToId(realId);
      setOpen(false);
      return;
    }
    setPendingScroll(realId);
    navigate("/");
  }

  function setLang(lng) {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    try {
      localStorage.setItem("lng", lng);
    } catch {}
  }

  const activeLang = i18n.language?.startsWith("ru") ? "ru" : "en";

  return (
    <header className="hdr" data-open={open ? "true" : "false"}>
      <Container>
        <div className="hdr__row">
          <Link to="/" className="hdr__brand" aria-label={t("brand_home_aria")}>
            <span className="hdr__logo" aria-hidden="true">
              <img
                className="hdr__logoImg"
                src="/logo.png"
                alt=""
                width="40"
                height="40"
                loading="eager"
                decoding="async"
              />
            </span>

            <div className="hdr__name">
              <strong>ONLYBROKERS</strong>
              <span>Alliance</span>
            </div>
          </Link>

          <nav className="hdr__nav" aria-label={t("nav_aria")}>
            {navItems.map((n) => (
              <button
                key={n.id}
                className="hdr__link"
                type="button"
                onClick={() => goToSection(n.id)}
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="hdr__actions">
            <Button
              as="a"
              href={isHome ? "#join" : "/#join"}
              onClick={(e) => {
                e.preventDefault();
                goToSection("join");
              }}
            >
              {t("request_access")}
            </Button>

            {/* ✅ language pills (same look as footer) */}
            <div className="hdr__lang" role="group" aria-label={t("lang_switch_aria")}>
              <button
                type="button"
                className={`hdr__pill ${activeLang === "en" ? "" : "hdr__pill--ghost"}`}
                aria-pressed={activeLang === "en"}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <button
                type="button"
                className={`hdr__pill ${activeLang === "ru" ? "" : "hdr__pill--ghost"}`}
                aria-pressed={activeLang === "ru"}
                onClick={() => setLang("ru")}
              >
                RU
              </button>
            </div>

            <button
              className="hdr__burger"
              type="button"
              aria-label={open ? t("menu_close") : t("menu_open")}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div
          className="hdr__mobile"
          role="dialog"
          aria-modal="true"
          aria-label={t("mobile_menu_aria")}
          aria-hidden={!open}
        >
          <button
            className="hdr__overlay"
            type="button"
            aria-label={t("menu_close")}
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          />

          <div className="hdr__mobileInner">
            {navItems.map((n) => (
              <button
                key={n.id}
                className="hdr__mLink"
                type="button"
                onClick={() => goToSection(n.id)}
              >
                {n.label}
              </button>
            ))}

            <div className="hdr__mCta">
              <Button
                as="a"
                href={isHome ? "#join" : "/#join"}
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("join");
                }}
              >
                {t("request_access")}
              </Button>
            </div>

            {/* ✅ mobile language */}
            <div className="hdr__mLang" role="group" aria-label={t("lang_switch_aria")}>
              <button
                type="button"
                className={`hdr__pill ${activeLang === "en" ? "" : "hdr__pill--ghost"}`}
                aria-pressed={activeLang === "en"}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <button
                type="button"
                className={`hdr__pill ${activeLang === "ru" ? "" : "hdr__pill--ghost"}`}
                aria-pressed={activeLang === "ru"}
                onClick={() => setLang("ru")}
              >
                RU
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
