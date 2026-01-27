// src/components/sections/Commissions/Commissions.jsx
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import "./Commissions.css";

const rows = [
  { k: "3%", v: "Deal partner", t: "Deal reward" },
  { k: "+1%", v: "Invited partner", t: "Referral level 1" },
  { k: "+1%", v: "Second level", t: "Referral level 2" },
  { k: "5%", v: "Agencies", t: "Agency program" },
];

export default function Commissions() {
  return (
    <section className="sec" id="commissions" aria-labelledby="com-title">
      <Container>
        <header className="sec__head">
          <h2 className="sec__title" id="com-title">Commission model</h2>
          <p className="sec__sub">Structured rewards. Rule-based attribution. Partner-first access.</p>
        </header>

        <div className="com__grid" role="list" aria-label="Commission tiers">
          {rows.map((r, idx) => (
            <Card
              className={`com__card ${idx === 0 ? "com__card--primary" : ""}`}
              key={r.v}
              role="listitem"
            >
              <div className="com__tag">{r.t}</div>
              <div className="com__k">{r.k}</div>
              <div className="com__v">{r.v}</div>
            </Card>
          ))}
        </div>

        <div className="com__note" role="note">
          Attribution is tracked by partner introduction and project rules. Rewards apply only after
          defined deal milestones are met.
        </div>
      </Container>
    </section>
  );
}
