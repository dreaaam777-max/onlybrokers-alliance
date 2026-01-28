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

          {/* LEFT IMAGE */}
          <div className="about__media">
            <img
              src="/grid.png"
              alt="ONLYBROKERS Alliance network"
              className="about__img"
            />
            <div className="about__overlay" />

            <div className="about__mediaContent">
              <h2 className="about__title" id="about-title">
                What is ONLYBROKERS Alliance
              </h2>

              <p className="about__sub">
                A private partner alliance connecting vetted clients, deals,
                and professionals through controlled referrals.
              </p>

              <div className="about__note">
                Built for controlled access, transparent attribution,
                and long-term partner protection.
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
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
