import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import "./AllianceLeadership.css";

export default function AllianceLeadership() {
  const { t } = useTranslation();

  const leaders = useMemo(
    () => [
      {
        name: "Stanislav Pohosov",
        photo: "/Stas.jpg",
      },
      {
        name: "Denys Bilous",
        photo: "/Denys.jpg",
      },
    ],
    []
  );

  return (
    <section className="sec" id="leadership" aria-labelledby="leadership-title">
      <Container>
        <header className="sec__head">
          <h2 className="sec__title" id="leadership-title">
            {t("leadership.title")}
          </h2>

          <p className="sec__sub">{t("leadership.subtitle")}</p>
        </header>

        <div className="ldr" role="list" aria-label={t("leadership.aria")}>
          {leaders.map((p) => (
            <Card key={p.name} className="ldr__card" role="listitem">
              <div className="ldr__avatar">
                <img
                  src={p.photo}
                  alt={`${p.name} — ${t("leadership.role")}`}
                  className="ldr__img"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="ldr__info">
                <div className="ldr__name">{p.name}</div>
                <div className="ldr__role">{t("leadership.role")}</div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
