// src/components/layout/Header/index.jsx
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../Container/index.jsx";
import Button from "../../ui/Button/Button.jsx";
import "./Header.css";

const NAV = [
  { id: "for-whom", label: "For whom" },
  { id: "about", label: "About" },
  { id: "how-it-works", label: "How it works" },
  { id: "commissions", label: "Commissions" },
  { id: "faq", label: "FAQ" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const [pendingScroll, setPendingScroll] = useState(null);

  const navItems = useMemo(() => NAV, []);

  // закрывать меню при смене route
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // блокируем скролл под мобильным меню
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // После перехода на Home — делаем scroll стабильно
  useEffect(() => {
    if (pathname !== "/" || !pendingScroll) return;

    // пробуем несколько кадров, чтобы секции успели появиться
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
    if (isHome) {
      scrollToId(id);
      setOpen(false);
      return;
    }
    setPendingScroll(id);
    navigate("/", { replace: false });
  }

  return (
    <header className="hdr" data-open={open ? "true" : "false"}>
      <Container>
        <div className="hdr__row">
          <Link to="/" className="hdr__brand" aria-label="ONLYBROKERS Alliance Home">
            <span className="hdr__logo" aria-hidden="true">OB</span>
            <div className="hdr__name">
              <strong>ONLYBROKERS</strong>
              <span>Alliance</span>
            </div>
          </Link>

          <nav className="hdr__nav" aria-label="Primary navigation">
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
              variant="gold"
              onClick={(e) => {
                e.preventDefault();
                goToSection("join");
              }}
            >
              Request Partner Access
            </Button>

            <button
              className="hdr__burger"
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="hdr__mobile"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          {/* overlay */}
          <button
            className="hdr__overlay"
            type="button"
            aria-label="Close menu"
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
                Request Partner Access
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
