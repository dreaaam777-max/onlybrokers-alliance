// src/components/sections/HowItWorks/HowItWorks.jsx
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import "./HowItWorks.css";

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = useMemo(() => {
    // важно: returnObjects:true чтобы получить массив
    const arr = t("howItWorks.steps", { returnObjects: true });
    return Array.isArray(arr) ? arr : [];
  }, [t]);

  return (
    <section className="sec" id="how-it-works" aria-labelledby="hiw-title">
      <Container>
        <header className="sec__head">
          <h2 className="sec__title" id="hiw-title">
            {t("howItWorks.title")}
          </h2>
          <p className="sec__sub">{t("howItWorks.subtitle")}</p>
        </header>

        <div className="hiw" role="list" aria-label={t("howItWorks.aria")}>
          {steps.map((s, i) => (
            <Card key={`hiw-${i}`} className="hiw__item" role="listitem">
              <div className="hiw__top">
                <div className="hiw__n" aria-hidden="true">
                  {i + 1}
                </div>
                <div className="hiw__chip">{t("howItWorks.step_label", { n: i + 1 })}</div>
              </div>

              <div className="hiw__t">{s}</div>

              <div className="hiw__mini">{t("howItWorks.mini")}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
