// src/components/sections/Protection/Protection.jsx
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import "./Protection.css";

export default function Protection() {
  const { t } = useTranslation();

  const items = useMemo(() => {
    const arr = t("protection.items", { returnObjects: true });
    return Array.isArray(arr) ? arr : [];
  }, [t]);

  return (
    <section className="sec" id="protection" aria-labelledby="prot-title">
      <Container>
        <header className="sec__head">
          <h2 className="sec__title" id="prot-title">
            {t("protection.title")}
          </h2>
          <p className="sec__sub">{t("protection.subtitle")}</p>
        </header>

        <div className="prot" role="list" aria-label={t("protection.aria")}>
          {items.map((it, idx) => (
            <Card key={`prot-${idx}`} className="prot__card" role="listitem">
              <div className="prot__icon" aria-hidden="true">
                ✓
              </div>
              <div className="prot__t">{it.t}</div>
              <div className="prot__p">{it.p}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
