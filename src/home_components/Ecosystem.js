import { useContext } from "react";
import { AuthContext } from "../util/api";

import "./ecosystem.css";

export default function Ecosystem() {

  const { theme } = useContext(AuthContext);
  return (

    <div className={theme}>
      <section className="ecosystem reveal" id="ecoproducts">
        <div className="ecosystem-header">
          <h2>Our Ecosystem</h2>
          <p>
            A powerful financial ecosystem designed to help you save smarter,
            transact transparently, and grow confidently.
          </p>
        </div>

        <div className="eco-grid">
          <div className="eco-card">
            <span className="eco-icon">💰</span>
            <h4>Savings Clusters</h4>
            <p>Collaborative savings groups that help you grow funds faster.</p>
          </div>

          <div className="eco-card">
            <span className="eco-icon">👥</span>
            <h4>Community Wallets</h4>
            <p>Shared wallets for teams, families, and communities.</p>
          </div>

          <div className="eco-card">
            <span className="eco-icon">⚡</span>
            <h4>Smart Loans</h4>
            <p>Quick, flexible loans powered by intelligent analysis.</p>
          </div>

          <div className="eco-card">
            <span className="eco-icon">🤖</span>
            <h4>AI Credit Scoring</h4>
            <p>Fair credit evaluation using real financial behaviour.</p>
          </div>

          <div className="eco-card">
            <span className="eco-icon">🔍</span>
            <h4>Transparent Transactions</h4>
            <p>Every transaction is clear, secure, and fully traceable.</p>
          </div>
        </div>

        <div className="hero-divider">
          <span></span>
        </div>

      </section>

    </div>

  );
}
