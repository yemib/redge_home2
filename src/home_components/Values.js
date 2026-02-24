import { useContext } from "react";
import { AuthContext } from "../util/api";

export default function Values() {

  const { theme } = useContext(AuthContext);
  return (
    <div className={theme}>
      <section className="values reveal" id="about">
        <div className="values-container">
          <header className="values-header">
            <h2>What We Stand For</h2>
            <p>
              Millions of informal businesses remain excluded from traditional
              finance. Redge exists to change that.
            </p>
          </header>

          <div className="values-grid">
            <article className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community-Driven</h3>
              <p>
                Financial systems designed around trust, collaboration,
                and local participation.
              </p>
            </article>

            <article className="value-card featured">
              <div className="value-icon">🔐</div>
              <h3>Secure & Inclusive</h3>
              <p>
                Cluster-based security models ensure safety
                without limiting access.
              </p>
            </article>

            <article className="value-card">
              <div className="value-icon">📊</div>
              <h3>AI-Powered Growth</h3>
              <p>
                Intelligent analytics and predictive insights
                drive smarter financial outcomes.
              </p>
            </article>
          </div>
        </div>

        <div className="hero-divider">
          <span></span>
        </div>
      </section>

    </div>

  );
}
