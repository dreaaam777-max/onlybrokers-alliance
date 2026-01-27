import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import "./Benefits.css";

const items = [
  { t: "No license required", p: "Partner/referral participation with clear rules." },
  { t: "No legal risk", p: "Structured flow with platform-managed closing." },
  { t: "No inventory search", p: "Access verified projects inside the hub." },
  { t: "Scalable income", p: "Commissions + referral levels for teams." },
];

export default function Benefits() {
  return (
    <section className="sec" id="benefits">
      <Container>
        <header className="sec__head">
          <h2 className="sec__title">Why partners join</h2>
          <p className="sec__sub">Simple, rational reasons — without hype.</p>
        </header>

        <div className="ben">
          {items.map((it) => (
            <Card key={it.t} className="ben__card">
              <div className="ben__t">{it.t}</div>
              <div className="ben__p">{it.p}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
