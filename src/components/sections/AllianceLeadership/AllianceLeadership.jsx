// src/components/sections/AllianceLeadership/AllianceLeadership.jsx
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import "./AllianceLeadership.css";

const leaders = [
  {
    name: "Stanislav Pohosov",
    role: "Founding Partner, Alliance",
    photo: "/Stas.jpg",
  },
  {
    name: "Denys Bilous",
    role: "Founding Partner, Alliance",
    photo: "/Denys.jpg",
  },
];

export default function AllianceLeadership() {
  return (
    <section
      className="sec"
      id="leadership"
      aria-labelledby="leadership-title"
    >
      <Container>
        <header className="sec__head">
          <h2 className="sec__title" id="leadership-title">
            Alliance Leadership
          </h2>
          <p className="sec__sub">
            Founded and operated by partners managing access, attribution, and partner protection.
          </p>
        </header>

        <div
          className="ldr"
          role="list"
          aria-label="Alliance leadership team"
        >
          {leaders.map((p) => (
            <Card key={p.name} className="ldr__card" role="listitem">
              <div className="ldr__avatar">
                <img
                  src={p.photo}
                  alt={`${p.name} — ${p.role}`}
                  className="ldr__img"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="ldr__info">
                <div className="ldr__name">{p.name}</div>
                <div className="ldr__role">{p.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
