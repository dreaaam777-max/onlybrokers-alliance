// src/components/sections/FAQ/FAQ.jsx
import { Link } from "react-router-dom";
import Container from "../../layout/Container/index.jsx";
import Accordion from "../../ui/Accordion/Accordion.jsx";
import Button from "../../ui/Button/Button.jsx";
import "./FAQ.css";

const items = [
  {
    q: "Am I a broker?",
    a: "No. ONLYBROKERS Alliance is a closed partner and referral ecosystem. It does not operate as a public brokerage."
  },
  {
    q: "Do I need a license?",
    a: "License requirements depend on your role and jurisdiction. The reward structure is positioned as referral and marketing participation, not brokerage representation."
  },
  {
    q: "Who works directly with the client?",
    a: "Verified professionals handle the deal execution. Partners are responsible for introductions and attribution tracking."
  },
  {
    q: "How is a client assigned?",
    a: "Clients are assigned through partner introduction and platform routing rules, based on project criteria."
  },
  {
    q: "Can my client be reassigned?",
    a: "Platform protection rules prevent unfair reassignment. Time-window and activity logic are applied automatically."
  },
  {
    q: "Is this MLM?",
    a: "No. Rewards are tied to real deals, verified projects, and tracked attribution — not recruitment."
  },
  {
    q: "When do I get paid?",
    a: "After defined deal milestones or closing conditions are met, according to program rules."
  },
];

export default function FAQ() {
  return (
    <section className="sec" id="faq" aria-labelledby="faq-title">
      <Container>
        <header className="sec__head">
          <h2 className="sec__title" id="faq-title">FAQ</h2>
          <p className="sec__sub">
            Clear answers to common questions before requesting partner access.
          </p>
        </header>

        <div className="faq__wrap">
          <Accordion items={items} />
        </div>

        {/* ✅ Read more */}
        <div className="faq__more" aria-label="Read full rules">
          <Button as="a" href="/affiliate-rules" variant="ghost">
            Read full rules
          </Button>

          {/* На случай если захочешь именно react-router Link:
              <Link className="btn btn--ghost" to="/affiliate-rules">Read full rules</Link>
          */}
        </div>
      </Container>
    </section>
  );
}
