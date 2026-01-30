// src/components/sections/Commissions/Commissions.jsx
import { useTranslation } from "react-i18next";
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import "./Commissions.css";

export default function Commissions() {
  const { t } = useTranslation();

  const rows = [
    {
      k: "3%",
      v: t("commissions.deal_partner"),
      t: t("commissions.deal_reward"),
    },
    {
      k: "+1%",
      v: t("commissions.invited_partner"),
      t: t("commissions.level_1"),
    },
    {
      k: "+1%",
      v: t("commissions.second_level"),
      t: t("commissions.level_2"),
    },
    {
      k: "5%",
      v: t("commissions.agencies"),
      t: t("commissions.agency_program"),
    },
  ];

  return (
    <section
      className="sec"
      id="commissions"
      aria-labelledby="com-title"
    >
      <Container>
        <header className="sec__head">
          <h2 className="sec__title" id="com-title">
            {t("commissions.title")}
          </h2>
          <p className="sec__sub">
            {t("commissions.subtitle")}
          </p>
        </header>

        <div
          className="com__grid"
          role="list"
          aria-label={t("commissions.aria")}
        >
          {rows.map((r, idx) => (
            <Card
              key={`${r.k}-${idx}`}
              className={`com__card ${idx === 0 ? "com__card--primary" : ""}`}
              role="listitem"
            >
              <div className="com__tag">{r.t}</div>
              <div className="com__k">{r.k}</div>
              <div className="com__v">{r.v}</div>
            </Card>
          ))}
        </div>

        <div className="com__note" role="note">
          {t("commissions.note")}
        </div>
      </Container>
    </section>
  );
}
