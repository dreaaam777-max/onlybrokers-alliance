import { Link } from "react-router-dom";
import MetaSEO from "../../components/seo/MetaSEO";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Container from "../../components/layout/Container";
import "./NotFound.css";

export default function NotFound() {
  return (
    <>
      <MetaSEO
        title="Page not found — ONLYBROKERS Alliance"
        description="The page you are looking for does not exist."
        canonical="/404"
        noindex
      />

      <Header />

      <main className="nf">
        <Container>
          <div className="nf__card">
            <div className="nf__badge">404</div>
            <h1 className="nf__h1">Page not found</h1>
            <p className="nf__p">
              This URL doesn’t exist or was moved. Use the button below to return to the partner hub.
            </p>

            <div className="nf__actions">
              <Link className="nf__btn nf__btn--gold" to="/">
                Back to Home
              </Link>

              <Link className="nf__btn nf__btn--ghost" to="/#join">
                Request Partner Access
              </Link>
            </div>

            <div className="nf__hint">
              Tip: check the URL or use the navigation menu.
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
