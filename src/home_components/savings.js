import "./products.css";
import { useContext } from "react";
import { AuthContext } from "../util/api";

export default function Savings() {

    const { theme } = useContext(AuthContext);

    return (
        <div className={theme}>
            <section className="products reveal" id="products">
                <div className="products-header">
                    <h2>Our Savings Products</h2>
                    <p className="products-intro">
                        Flexible savings solutions designed to fit different lifestyles,
                        communities, and financial goals — all powered by trust and technology.
                    </p>
                </div>

                <div className="products-grid">

                    {/* AJO SAVINGS */}
                    <div className="product-card">
                        <span className="product-tag">Popular</span>

                        <h3>Ajo Savings</h3>
                        <p className="product-desc">
                            A modern version of traditional rotating savings.
                            Save consistently and receive a full payout at your turn,
                            backed by smart tracking and community accountability.
                        </p>

                        <ul className="product-features">
                            <li>Daily or weekly contributions</li>
                            <li>Automated tracking & reminders</li>
                            <li>Transparent payout schedule</li>
                        </ul>

                        <button className="product-btn">Learn More</button>
                    </div>

                    {/* AGENT SAVINGS */}
                    <div className="product-card highlight">
                        <span className="product-tag accent">Trusted</span>

                        <h3>Agent Savings</h3>
                        <p className="product-desc">
                            Save securely through verified agents within your community.
                            Ideal for users who prefer assisted savings with digital records.
                        </p>

                        <ul className="product-features">
                            <li>Trusted community agents</li>
                            <li>Digital confirmation for deposits</li>
                            <li>Reduced risk & higher trust</li>
                        </ul>

                        <button className="product-btn dark">Learn More</button>
                    </div>

                    {/* GROUP SAVINGS */}
                    <div className="product-card">
                        <span className="product-tag">Collaborative</span>

                        <h3>Group Savings</h3>
                        <p className="product-desc">
                            Pool funds with friends, families, or associations
                            to reach shared financial goals faster and safer.
                        </p>

                        <ul className="product-features">
                            <li>Shared wallets & permissions</li>
                            <li>Collective goal tracking</li>
                            <li>Built-in accountability</li>
                        </ul>

                        <button className="product-btn">Learn More</button>
                    </div>

                </div>
                <div className="hero-divider">
                    <span></span>
                </div>
            </section>


        </div>


    );
}