// src/components/sections/EntryScenarios/EntryScenarios.jsx
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import Button from "../../ui/Button/Button.jsx";
import { useTranslation } from "react-i18next";
import "./EntryScenarios.css";

export default function EntryScenarios() {
  const { t } = useTranslation();

  return (
    <section className="sec" id="entry-scenarios" aria-labelledby="entry-title">
      <Container>
        <header className="sec__head">
          <h2 className="sec__title" id="entry-title">{t("entry.title")}</h2>
          <p className="sec__sub">
            {t("entry.subtitle.line1")}<br />
            {t("entry.subtitle.line2")}
          </p>
        </header>

        <div className="es__grid">
          <Card className="es__card es__card--clients">
            <div className="es__tag">{t("entry.scenarioA.tag")}</div>
            <h3 className="es__h">{t("entry.scenarioA.title")}</h3>
            <p className="es__p">{t("entry.scenarioA.desc")}</p>
            <div className="es__note">{t("entry.scenarioA.note")}</div>
          </Card>

          <Card className="es__card es__card--partners">
            <div className="es__tag es__tag--gold">{t("entry.scenarioB.tag")}</div>
            <h3 className="es__h">{t("entry.scenarioB.title")}</h3>
            <p className="es__p">{t("entry.scenarioB.desc")}</p>

            <div className="es__actions">
              <Button as="a" href="#join">{t("request_access")}</Button>
              <Button as="a" href="#commissions" variant="ghost">
                {t("entry.scenarioB.cta_secondary")}
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
