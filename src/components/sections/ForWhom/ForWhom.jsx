import { useTranslation } from "react-i18next";
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import "./ForWhom.css";

export default function ForWhom() {
  const { t } = useTranslation();

  const items = [
    {
      title: t("forWhom.items.brokers.title"),
      text: t("forWhom.items.brokers.text"),
    },
    {
      title: t("forWhom.items.agencies.title"),
      text: t("forWhom.items.agencies.text"),
    },
    {
      title: t("forWhom.items.investors.title"),
      text: t("forWhom.items.investors.text"),
    },
    {
      title: t("forWhom.items.referral.title"),
      text: t("forWhom.items.referral.text"),
    },
  ];

  return (
    <section className="sec" id="for-whom" aria-labelledby="forwhom-title">
      <Container>
        <header className="sec__head">
          <h2 className="sec__title" id="forwhom-title">
            {t("forWhom.title")}
          </h2>
          <p className="sec__sub">{t("forWhom.subtitle")}</p>
        </header>

        <div className="grid4" role="list" aria-label={t("forWhom.aria")}>
          {items.map((it) => (
            <Card key={it.title} className="tile" role="listitem">
              <div className="tile__top">
                <div className="tile__t">{it.title}</div>
              </div>

              <div className="tile__p">{it.text}</div>

              <div className="tile__hint">
                {t("forWhom.hint")}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
