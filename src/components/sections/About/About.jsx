// src/components/sections/About/About.jsx
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import "./About.css";

const bullets = [
  { k: "Not a brokerage", v: "We don’t act as a public broker marketplace." },
  { k: "Not a marketplace", v: "No open listings. No uncontrolled traffic." },
  { k: "Not public access", v: "Entry is partner-first, invitation-based." },
];

export default function About() {
  return (
    <section className="sec" id="about" aria-labelledby="about-title">
      <Container>
        <div className="about">
          <header className="about__head">
            <h2 className="sec__title" id="about-title">What is ONLYBROKERS Alliance</h2>
            <p className="sec__sub">
              A closed partner hub connecting clients, deals and professionals through referrals.
            </p>

            <div className="about__note">
              Built to keep access controlled, attribution trackable, and partners protected.
            </div>
          </header>

          <div className="about__cards" role="list" aria-label="Clarifications">
            {bullets.map((b) => (
              <Card key={b.k} className="about__card" role="listitem">
                <div className="about__k">
                  <span className="about__tag">NOT</span>
                  {b.k}
                </div>
                <div className="about__v">{b.v}</div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
