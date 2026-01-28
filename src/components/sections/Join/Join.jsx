// src/components/sections/Join/Join.jsx
import { useId, useState } from "react";
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import Button from "../../ui/Button/Button.jsx";
import "./Join.css";

export default function Join() {
  const [status, setStatus] = useState("");
  const formId = useId();

  function onSubmit(e) {
    e.preventDefault();
    setStatus("Request received. Our team will review and respond by email.");
    e.currentTarget.reset();
  }

  return (
    <section className="sec" id="join" aria-labelledby="join-title">
      <Container>
        <div className="join">
          <div className="join__left">
            {/* IMAGE CARD (LEFT) */}
            <div className="join__media" aria-hidden="true">
              <img className="join__img" src="/enter.png" alt="" loading="lazy" />

              <div className="join__mediaOverlay" />

              <div className="join__mediaText">
                <h2 className="sec__title join__titleOnMedia" id="join-title">
                  How to join
                </h2>
                <p className="sec__sub join__subOnMedia">
                  1) Request access → 2) Review &amp; approval → 3) Onboarding → 4) Start working
                </p>
              </div>
            </div>

            <div className="join__mini" role="note">
              Entry by invitation only. Partners-first ecosystem.
            </div>

            <ul className="join__points" aria-label="What happens next">
              <li>Requests are reviewed against program rules and availability.</li>
              <li>Approved partners receive onboarding instructions and access details.</li>
              <li>Attribution and commissions are tracked by platform rules.</li>
            </ul>
          </div>

          <Card className="join__card">
            <form className="join__form" onSubmit={onSubmit} aria-describedby={`${formId}-note`}>
              <label className="join__label" htmlFor={`${formId}-name`}>
                Name
              </label>
              <input
                className="join__input"
                id={`${formId}-name`}
                name="name"
                required
                autoComplete="name"
                placeholder="Your full name"
              />
              <div className="join__help">Use the name you want shown in partner records.</div>

              <label className="join__label" htmlFor={`${formId}-email`}>
                Email
              </label>
              <input
                className="join__input"
                id={`${formId}-email`}
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                placeholder="you@email.com"
              />
              <div className="join__help">We’ll reply to this email after review.</div>

              <label className="join__label" htmlFor={`${formId}-role`}>
                Role
              </label>
              <select className="join__input" id={`${formId}-role`} name="role" defaultValue="Broker / Agent">
                <option>Broker / Agent</option>
                <option>Agency</option>
                <option>Investor</option>
                <option>Referral Partner</option>
              </select>
              <div className="join__help">This helps us route your request correctly.</div>

              <label className="join__label" htmlFor={`${formId}-msg`}>
                Message (optional)
              </label>
              <textarea
                className="join__input join__ta"
                id={`${formId}-msg`}
                name="msg"
                placeholder="Tell us what you bring: clients / capital / connections"
              />
              <div className="join__help">Short and clear is best.</div>

              <div className="join__actions">
                <Button type="submit">Request Partner Access</Button>
                <Button as="a" href="#faq" variant="ghost">Read FAQ</Button>
              </div>

              <div className="join__note" id={`${formId}-note`}>
                By submitting, you agree that your request will be reviewed under program rules.
                No public access. No open marketplace.
              </div>

              {status ? <div className="join__status" role="status">{status}</div> : null}
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
