// src/components/sections/FinalCTA/FinalCTA.jsx
import { useTranslation } from "react-i18next";
import Container from "../../layout/Container/index.jsx";
import Button from "../../ui/Button/Button.jsx";
import Card from "../../ui/Card/Card.jsx";
import "./FinalCTA.css";

export default function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section className="sec" id="cta-final" aria-labelledby="cta-final-title">
      <Container>
        <div className="cta">
          <Card className="cta__card">
            <div className="cta__left">
              <h2 className="cta__t" id="cta-final-title">
                {t("finalCta.title")}
              </h2>

              <p className="cta__p">
                {t("finalCta.subtitle")}
              </p>

              <div className="cta__note">
                {t("finalCta.note")}
              </div>
            </div>

            <div className="cta__right" aria-label="Final actions">
              <Button as="a" href="#join">
                {t("finalCta.cta_primary")}
              </Button>

              <Button as="a" href="#hero" variant="ghost">
                {t("finalCta.cta_secondary")}
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
