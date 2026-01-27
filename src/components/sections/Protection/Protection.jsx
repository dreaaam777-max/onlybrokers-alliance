// src/components/sections/Protection/Protection.jsx
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import "./Protection.css";

const items = [
  {
    t: "Client lock",
    p: "Partner attribution is locked after a verified client introduction within defined rules."
  },
  {
    t: "No lead stealing",
    p: "Projects and clients cannot be reassigned outside the platform attribution logic."
  },
  {
    t: "Fair 14-day rule",
    p: "Clear activity window protects partner claims and prevents silent takeovers."
  },
  {
    t: "Project-based attribution",
    p: "Rewards are tied to specific projects, actions, and milestones — not promises."
  },
];

export default function Protection() {
  return (
    <section className="sec" id="protection" aria-labelledby="prot-title">
      <Container>
        <header className="sec__head">
          <h2 className="sec__title" id="prot-title">Partner protection</h2>
          <p className="sec__sub">
            Trust is enforced by rules, attribution logic, and platform control — not verbal agreements.
          </p>
        </header>

        <div className="prot" role="list" aria-label="Partner protection rules">
          {items.map((it) => (
            <Card key={it.t} className="prot__card" role="listitem">
              <div className="prot__icon" aria-hidden="true">✓</div>
              <div className="prot__t">{it.t}</div>
              <div className="prot__p">{it.p}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
