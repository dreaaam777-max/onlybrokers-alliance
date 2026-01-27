// src/components/sections/FinalCTA/FinalCTA.jsx
import Container from "../../layout/Container/index.jsx";
import Button from "../../ui/Button/Button.jsx";
import Card from "../../ui/Card/Card.jsx";
import "./FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="sec" id="cta-final" aria-labelledby="cta-final-title">
      <Container>
        <div className="cta">
          <Card className="cta__card">
            <div className="cta__left">
              <h2 className="cta__t" id="cta-final-title">
                Ready to join the partner-only ecosystem?
              </h2>
              <p className="cta__p">
                Request Partner Access. Entry by invitation only.
              </p>
              <div className="cta__note">
                No public access. No open marketplace. Requests are reviewed under program rules.
              </div>
            </div>

            <div className="cta__right" aria-label="Final actions">
              <Button as="a" href="#join">Request Partner Access</Button>
              <Button as="a" href="#hero" variant="ghost">Back to top</Button>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

