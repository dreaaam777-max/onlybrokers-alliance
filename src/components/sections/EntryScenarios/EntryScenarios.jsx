// src/components/sections/EntryScenarios/EntryScenarios.jsx
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import Button from "../../ui/Button/Button.jsx";
import "./EntryScenarios.css";

export default function EntryScenarios() {
  return (
    <section
      className="sec"
      id="entry-scenarios"
      aria-labelledby="entry-title"
    >
      <Container>
        <header className="sec__head">
          <h2 className="sec__title" id="entry-title">
            Two entry scenarios
          </h2>
          <p className="sec__sub">
            One ecosystem — two ways people enter it.  
            Access and monetization stay partner-first.
          </p>
        </header>

        <div className="es__grid">
          {/* Scenario A — Clients */}
          <Card className="es__card es__card--clients">
            <div className="es__tag">Scenario A</div>
            <h3 className="es__h">Clients</h3>
            <p className="es__p">
              Investors or buyers arrive via partner introduction or a direct
              platform request. The platform routes the request and verified
              professionals close the deal.
            </p>

            <div className="es__note">
              Clients are served exclusively through partners or the platform
              flow.
            </div>
          </Card>

          {/* Scenario B — Partners */}
          <Card className="es__card es__card--partners">
            <div className="es__tag es__tag--gold">Scenario B</div>
            <h3 className="es__h">Partners</h3>
            <p className="es__p">
              Brokers, agencies and referral partners join by invitation, get
              access to verified projects, and earn through deals and structured
              referrals.
            </p>

            <div className="es__actions">
              <Button as="a" href="#join">
                Request Partner Access
              </Button>
              <Button as="a" href="#commissions" variant="ghost">
                View commission model
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
