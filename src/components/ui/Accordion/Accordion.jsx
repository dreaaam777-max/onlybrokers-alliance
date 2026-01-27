// src/components/ui/Accordion/Accordion.jsx
import { useId, useState } from "react";
import "./Accordion.css";

export default function Accordion({ items = [], defaultOpen = 0 }) {
  const uid = useId();
  const [openIndex, setOpenIndex] = useState(
    items.length ? Math.max(-1, Math.min(defaultOpen, items.length - 1)) : -1
  );

  return (
    <div className="acc">
      {items.map((it, idx) => {
        const isOpen = idx === openIndex;
        const btnId = `${uid}-acc-btn-${idx}`;
        const panelId = `${uid}-acc-panel-${idx}`;

        return (
          <div className={`acc__item ${isOpen ? "is-open" : ""}`} key={it.q}>
            <button
              id={btnId}
              className="acc__btn"
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
            >
              <span className="acc__q">{it.q}</span>
              <span className="acc__icon" aria-hidden="true">
                {isOpen ? "–" : "+"}
              </span>
            </button>

            <div
              id={panelId}
              className="acc__panel"
              role="region"
              aria-labelledby={btnId}
            >
              <div className="acc__panelInner">
                <div className="acc__a">{it.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
