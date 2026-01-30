// src/components/sections/Hero/Hero.jsx
import { useTranslation } from "react-i18next";
import Container from "../../layout/Container";
import Button from "../../ui/Button/Button";
import "./Hero.css";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero" id="hero" aria-label="ONLYBROKERS Alliance">
      {/* BACKGROUND IMAGE */}
      <div className="hero__bg" aria-hidden="true" />

      {/* OVERLAY */}
      <div className="hero__overlay" aria-hidden="true" />

      <Container>
        <div className="hero__grid">
          <div className="hero__left">
            <div className="hero__badge" role="note">
              {t("hero.badge")}
            </div>

            <h1 className="hero__h1">
              {t("hero.h1_line1")}{" "}
              <span className="hero__accent">{t("hero.h1_accent")}</span>{" "}
              {t("hero.h1_line2")}
            </h1>

            <p className="hero__sub">{t("hero.sub")}</p>

            <div className="hero__actions" aria-label={t("hero.actions_aria")}>
              <Button as="a" href="#join">
                {t("request_access")}
              </Button>
              <Button as="a" href="#about" variant="ghost">
                {t("hero.cta_secondary")}
              </Button>
            </div>

            <ul className="hero__meta" aria-label={t("hero.meta_aria")}>
              <li>{t("hero.meta.not_brokerage")}</li>
              <li>{t("hero.meta.not_marketplace")}</li>
              <li>{t("hero.meta.closed_hub")}</li>
            </ul>
          </div>

          <div className="hero__right" aria-hidden="true">
            <div className="hero__panel">
              <div className="hero__panelTop">
                <span className="hero__dot" />
                <span className="hero__dot" />
                <span className="hero__dot" />
                <span className="hero__panelTitle">{t("hero.panel.title")}</span>
              </div>

              <div className="hero__panelBody">
                <div className="hero__kpi">
                  <div className="hero__k">{t("hero.panel.kpi1.k")}</div>
                  <div className="hero__v">{t("hero.panel.kpi1.v")}</div>
                </div>

                <div className="hero__kpi">
                  <div className="hero__k">{t("hero.panel.kpi2.k")}</div>
                  <div className="hero__v">{t("hero.panel.kpi2.v")}</div>
                </div>

                <div className="hero__kpi">
                  <div className="hero__k">{t("hero.panel.kpi3.k")}</div>
                  <div className="hero__v">{t("hero.panel.kpi3.v")}</div>
                </div>
              </div>
            </div>

            <div className="hero__glow" />
            <div className="hero__grain" />
          </div>
        </div>
      </Container>
    </section>
  );
}
