// src/components/sections/Join/Join.jsx
import { useId, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../layout/Container/index.jsx";
import Card from "../../ui/Card/Card.jsx";
import Button from "../../ui/Button/Button.jsx";
import "./Join.css";

export default function Join() {
  const { t } = useTranslation();

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const formId = useId();

  const roleOptions = useMemo(() => {
    const arr = t("join.form.roles", { returnObjects: true });
    return Array.isArray(arr) ? arr : [];
  }, [t]);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      role: String(fd.get("role") || "").trim(),
      msg: String(fd.get("msg") || "").trim(),
      page: typeof window !== "undefined" ? window.location.href : "",
    };

    try {
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let detail = "";
        try {
          const data = await res.json();
          detail = data?.error ? ` (${data.error})` : "";
        } catch {}
        throw new Error(`Request failed: ${res.status}${detail}`);
      }

      setStatus(t("join.status_success"));
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus(t("join.status_error"));
    } finally {
      setLoading(false);
    }
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
                  {t("join.title")}
                </h2>
                <p className="sec__sub join__subOnMedia">{t("join.subtitle")}</p>
              </div>
            </div>

            <div className="join__mini" role="note">
              {t("join.mini")}
            </div>

            <ul className="join__points" aria-label={t("join.points_aria")}>
              <li>{t("join.points.p1")}</li>
              <li>{t("join.points.p2")}</li>
              <li>{t("join.points.p3")}</li>
            </ul>
          </div>

          <Card className="join__card">
            <form className="join__form" onSubmit={onSubmit} aria-describedby={`${formId}-note`}>
              <label className="join__label" htmlFor={`${formId}-name`}>
                {t("join.form.name_label")}
              </label>
              <input
                className="join__input"
                id={`${formId}-name`}
                name="name"
                required
                autoComplete="name"
                placeholder={t("join.form.name_ph")}
              />
              <div className="join__help">{t("join.form.name_help")}</div>

              <label className="join__label" htmlFor={`${formId}-email`}>
                {t("join.form.email_label")}
              </label>
              <input
                className="join__input"
                id={`${formId}-email`}
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                placeholder={t("join.form.email_ph")}
              />
              <div className="join__help">{t("join.form.email_help")}</div>

              <label className="join__label" htmlFor={`${formId}-role`}>
                {t("join.form.role_label")}
              </label>
              <select
                className="join__input"
                id={`${formId}-role`}
                name="role"
                defaultValue={roleOptions[0] || ""}
              >
                {roleOptions.map((r, idx) => (
                  <option key={`role-${idx}`} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <div className="join__help">{t("join.form.role_help")}</div>

              <label className="join__label" htmlFor={`${formId}-msg`}>
                {t("join.form.msg_label")}
              </label>
              <textarea
                className="join__input join__ta"
                id={`${formId}-msg`}
                name="msg"
                placeholder={t("join.form.msg_ph")}
              />
              <div className="join__help">{t("join.form.msg_help")}</div>

              <div className="join__actions">
                <Button type="submit" disabled={loading}>
                  {loading ? t("join.form.sending") : t("request_access")}
                </Button>
                <Button as="a" href="#faq" variant="ghost">
                  {t("join.form.read_faq")}
                </Button>
              </div>

              <div className="join__note" id={`${formId}-note`}>
                {t("join.note")}
              </div>

              {status ? (
                <div className="join__status" role="status">
                  {status}
                </div>
              ) : null}
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
