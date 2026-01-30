import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import "./Benefits.css";

export default function Benefits() {
  const { t } = useTranslation();

  const items = useMemo(
    () => [
      { id: "no_license", title: t("benefits.no_license.title"), desc: t("benefits.no_license.desc") },
      { id: "no_legal_risk", title: t("benefits.no_legal_risk.title"), desc: t("benefits.no_legal_risk.desc") },
      { id: "no_inventory", title: t("benefits.no_inventory.title"), desc: t("benefits.no_inventory.desc") },
      { id: "scalable_income", title: t("benefits.scalable_income.title"), desc: t("benefits.scalable_income.desc") },
    ],
    [t]
  );

  return (
    <section className="sec" id="benefits" aria-labelledby="benefits-title">
      <Container>
        <header className="sec__head">
          <h2 className="sec__title" id="benefits-title">
            {t("benefits.title")}
          </h2>
          <p className="sec__sub">{t("benefits.subtitle")}</p>
        </header>

        <div className="ben" role="list" aria-label={t("benefits.title")}>
          {items.map((it) => (
            <Card key={it.id} className="ben__card" role="listitem">
              <div className="ben__t">{it.title}</div>
              <div className="ben__p">{it.desc}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
