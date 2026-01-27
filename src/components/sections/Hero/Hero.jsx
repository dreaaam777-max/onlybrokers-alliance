// src/components/sections/Hero/Hero.jsx
import Container from "../../layout/Container";
import Button from "../../ui/Button/Button";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="ONLYBROKERS Alliance">
      {/* BACKGROUND IMAGE */}
      <div className="hero__bg" aria-hidden="true" />

      {/* OVERLAY */}
      <div className="hero__overlay" aria-hidden="true" />

      <Container>
        <div className="hero__grid">
          <div className="hero__left">
            <div className="hero__badge" role="note">
              Entry by invitation only
            </div>

            <h1 className="hero__h1">
              Exclusive Access to{" "}
              <span className="hero__accent">Real Estate</span> Opportunities
            </h1>

            <p className="hero__sub">
              Partner-only ecosystem for deals, referrals and scalable income.
            </p>

            <div className="hero__actions" aria-label="Primary actions">
              <Button as="a" href="#join">
                Request Partner Access
              </Button>
              <Button as="a" href="#about" variant="ghost">
                Learn how it works
              </Button>
            </div>

            <ul className="hero__meta" aria-label="Key positioning">
              <li>Not a brokerage</li>
              <li>Not a marketplace</li>
              <li>Closed partner hub</li>
            </ul>
          </div>

          <div className="hero__right" aria-hidden="true">
            <div className="hero__panel">
              <div className="hero__panelTop">
                <span className="hero__dot" />
                <span className="hero__dot" />
                <span className="hero__dot" />
                <span className="hero__panelTitle">Partner Hub</span>
              </div>

              <div className="hero__panelBody">
                <div className="hero__kpi">
                  <div className="hero__k">Verified projects</div>
                  <div className="hero__v">Access</div>
                </div>

                <div className="hero__kpi">
                  <div className="hero__k">Referral system</div>
                  <div className="hero__v">Built-in</div>
                </div>

                <div className="hero__kpi">
                  <div className="hero__k">Partner protection</div>
                  <div className="hero__v">Rules</div>
                </div>
              </div>
            </div>

            <div className="hero__glow" />
            <div className="hero__grain" />
          </div>
        </div>
      </Container>
    </section>
  );
}
