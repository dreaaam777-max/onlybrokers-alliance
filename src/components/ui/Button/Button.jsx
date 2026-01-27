// src/components/ui/Button/Button.jsx
import "./Button.css";

export default function Button({
  as = "button",
  href,
  onClick,
  variant = "gold",
  children,
  type = "button",
  disabled = false,
  ariaLabel,
  target,
  rel,
}) {
  const className = `btn btn--${variant} ${disabled ? "is-disabled" : ""}`.trim();

  if (as === "a") {
    const safeRel = target === "_blank" ? (rel || "noopener noreferrer") : rel;
    return (
      <a
        className={className}
        href={disabled ? undefined : href}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        aria-label={ariaLabel}
        aria-disabled={disabled ? "true" : "false"}
        tabIndex={disabled ? -1 : undefined}
        target={target}
        rel={safeRel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
