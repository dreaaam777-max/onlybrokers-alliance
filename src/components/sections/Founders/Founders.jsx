// src/components/sections/Founders/Founders.jsx
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import "./Founders.css";

export default function Founders() {
  return (
    <section className="sec" id="founders" aria-labelledby="founders-title">
      <Container>
        <div className="fnd">
          <header className="sec__head fnd__head">
            <h2 className="sec__title" id="founders-title">
              Who’s behind the platform?
            </h2>
            <p className="sec__sub">
              Built by real market operators — focused on partner protection, clear attribution,
              and verified deal flow.
            </p>
          </header>

          <div className="fnd__grid" role="list" aria-label="Platform founders">
            <Card className="fnd__card" role="listitem">
              <h3 className="fnd__name">
                <span className="fnd__accent">Surena Nikolyan</span>
              </h3>
              <p className="fnd__p">
                A Dubai real estate broker known for top-tier performance in the UAE market. Over
                the years, he built a systematic approach to deals that prioritizes structure,
                clarity, and measurable results.
              </p>
            </Card>

            <Card className="fnd__card" role="listitem">
              <h3 className="fnd__name">
                <span className="fnd__accent">Nazih Khan</span>
              </h3>
              <p className="fnd__p">
                Co-founder and an experienced specialist in real estate and investments. Together
                with Surena, he helped design a partner-first system that makes access to premium
                opportunities simple, controlled, and transparent.
              </p>
            </Card>
          </div>

          <div className="fnd__note" role="note">
            The platform works with specific verified projects and negotiates partner advantages —
            wholesale terms, limited discounts, furniture packages, installment options, and other
            benefits that are typically unavailable on the open market.
          </div>
        </div>
      </Container>
    </section>
  );
}
