// src/components/sections/ForWhom/ForWhom.jsx
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import "./ForWhom.css";

const items = [
  { title: "Brokers & Agents", text: "Introduce clients, earn commissions, keep protection rules." },
  { title: "Agencies", text: "Scale through structured referral levels and team tracking." },
  { title: "Investors", text: "Submit a request and get served through the platform flow." },
  { title: "Referral Partners", text: "Bring connections, get rewarded. No public marketplace noise." },
];

export default function ForWhom() {
  return (
    <section className="sec" id="for-whom" aria-labelledby="forwhom-title">
      <Container>
        <header className="sec__head">
          <h2 className="sec__title" id="forwhom-title">Who this is for</h2>
          <p className="sec__sub">
            If you bring clients, capital or connections — this platform works for you.
          </p>
        </header>

        <div className="grid4" role="list">
          {items.map((it) => (
            <Card key={it.title} className="tile" role="listitem">
              <div className="tile__top">
                <div className="tile__t">{it.title}</div>
              </div>
              <div className="tile__p">{it.text}</div>
              <div className="tile__hint">Partner-first access • Trackable attribution</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
