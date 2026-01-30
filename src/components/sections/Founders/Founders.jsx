// src/components/sections/Founders/Founders.jsx
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import "./Founders.css";

export default function Founders() {
  const { t } = useTranslation();

  const people = useMemo(
    () => [
      {
        id: "surena",
        name: "Surena Nikolyan",
        bio: t("founders.cards.surena"),
      },
      {
        id: "nazih",
        name: "Nazih Khan",
        bio: t("founders.cards.nazih"),
      },
    ],
    [t]
  );

  return (
    <section className="sec" id="founders" aria-labelledby="founders-title">
      <Container>
        <div className="fnd">
          <header className="sec__head fnd__head">
            <h2 className="sec__title" id="founders-title">
              {t("founders.title")}
            </h2>
            <p className="sec__sub">{t("founders.subtitle")}</p>
          </header>

          <div className="fnd__grid" role="list" aria-label={t("founders.aria")}>
            {people.map((p) => (
              <Card key={p.id} className="fnd__card" role="listitem">
                <h3 className="fnd__name">
                  <span className="fnd__accent">{p.name}</span>
                </h3>
                <p className="fnd__p">{p.bio}</p>
              </Card>
            ))}
          </div>

          <div className="fnd__note" role="note">
            {t("founders.note")}
          </div>
        </div>
      </Container>
    </section>
  );
}
