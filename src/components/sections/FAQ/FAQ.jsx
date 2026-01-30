// src/components/sections/FAQ/FAQ.jsx
import Container from "../../layout/Container/index.jsx";
import Accordion from "../../ui/Accordion/Accordion.jsx";
import Button from "../../ui/Button/Button.jsx";
import { useTranslation } from "react-i18next";
import "./FAQ.css";

export default function FAQ() {
  const { t } = useTranslation();

  const items = [
    { q: t("faq.items.am_i_broker.q"), a: t("faq.items.am_i_broker.a") },
    { q: t("faq.items.need_license.q"), a: t("faq.items.need_license.a") },
    { q: t("faq.items.who_works_client.q"), a: t("faq.items.who_works_client.a") },
    { q: t("faq.items.how_assigned.q"), a: t("faq.items.how_assigned.a") },
    { q: t("faq.items.reassigned.q"), a: t("faq.items.reassigned.a") },
    { q: t("faq.items.is_mlm.q"), a: t("faq.items.is_mlm.a") },
    { q: t("faq.items.when_paid.q"), a: t("faq.items.when_paid.a") },
  ];

  return (
    <section className="sec" id="faq" aria-labelledby="faq-title">
      <Container>
        <header className="sec__head">
          <h2 className="sec__title" id="faq-title">{t("faq.title")}</h2>
          <p className="sec__sub">{t("faq.subtitle")}</p>
        </header>

        <div className="faq__wrap">
          <Accordion items={items} />
        </div>

        <div className="faq__more" aria-label="Read full rules">
          <Button as="a" href="/affiliate-rules" variant="ghost">
            {t("faq.read_rules")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
