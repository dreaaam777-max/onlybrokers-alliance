import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import "./About.css";

export default function About() {
  const { t } = useTranslation();

  const bullets = useMemo(
    () => [
      {
        id: "not_brokerage",
        k: t("about.not_brokerage.title"),
        v: t("about.not_brokerage.desc"),
      },
      {
        id: "not_marketplace",
        k: t("about.not_marketplace.title"),
        v: t("about.not_marketplace.desc"),
      },
      {
        id: "not_public",
        k: t("about.not_public.title"),
        v: t("about.not_public.desc"),
      },
    ],
    [t]
  );

  return (
    <section className="sec" id="about" aria-labelledby="about-title">
      <Container>
        <div className="about">
          {/* LEFT IMAGE */}
          <div className="about__media">
            <img
              src="/grid.png"
              alt="ONLYBROKERS Alliance network"
              className="about__img"
              loading="lazy"
            />
            <div className="about__overlay" />

            <div className="about__mediaContent">
              <h2 className="about__title" id="about-title">
                {t("about.title")}
              </h2>

              <p className="about__sub">{t("about.subtitle")}</p>

              <div className="about__note">{t("about.note")}</div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="about__cards" role="list" aria-label={t("about.aria")}>
            {bullets.map((b) => (
              <Card key={b.id} className="about__card" role="listitem">
                <div className="about__k">
                  <span className="about__tag">NOT</span>
                  {b.k}
                </div>
                <div className="about__v">{b.v}</div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
