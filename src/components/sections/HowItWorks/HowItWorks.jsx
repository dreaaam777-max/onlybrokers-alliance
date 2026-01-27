// src/components/sections/HowItWorks/HowItWorks.jsx
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import "./HowItWorks.css";

const steps = [
  "Partner joins by invitation",
  "Gets access to verified projects",
  "Introduces client or partner",
  "Platform closes the deal",
  "Commissions distributed",
];

export default function HowItWorks() {
  return (
    <section className="sec" id="how-it-works" aria-labelledby="hiw-title">
      <Container>
        <header className="sec__head">
          <h2 className="sec__title" id="hiw-title">How the system works</h2>
          <p className="sec__sub">Clear flow. Controlled access. Trackable attribution.</p>
        </header>

        <div className="hiw" role="list" aria-label="Process steps">
          {steps.map((s, i) => (
            <Card key={s} className="hiw__item" role="listitem">
              <div className="hiw__top">
                <div className="hiw__n" aria-hidden="true">{i + 1}</div>
                <div className="hiw__chip">Step {i + 1}</div>
              </div>

              <div className="hiw__t">{s}</div>

              <div className="hiw__mini">
                Platform-managed • Partner-safe • Rule-based attribution
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
