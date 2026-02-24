import "./products.css";
import { useContext } from "react";
import { AuthContext } from "../util/api";

export default function Investments() {

    const { theme } = useContext(AuthContext);

    return (
        <div className={theme}>
            <section className="products reveal" id="investments">
                <div className="products-header">
                    <h2>Investment Packages</h2>
                    <p className="products-intro">
                        Grow your wealth confidently with carefully structured investment
                        plans designed to balance security, returns, and transparency.
                    </p>
                </div>

                <div className="products-grid">

                    {/* AJO SAVINGS */}
                    <div className="product-card">
                        {/*  <span className="product-tag">Popular</span> */}

                        <h3>Secure Capital</h3>
                        <p className="product-desc">
                            A low-risk investment plan focused on capital preservation.
                            Ideal for individuals seeking steady growth with minimal exposure.
                        </p>

                        <ul className="product-features">
                            <li> Capital protection focused</li>
                            <li> Predictable returns</li>
                            <li> Ideal for cautious investors</li>
                        </ul>

                        <button className="product-btn">Learn More</button>
                    </div>

                    {/* AGENT SAVINGS */}
                    <div className="product-card highlight">
                        {/*    <span className="product-tag accent">Trusted</span> */}

                        <h3>Fortune Builder</h3>
                        <p className="product-desc">
                            A balanced investment package designed for long-term wealth creation,
                            combining smart diversification and growth strategies.
                        </p>

                        <ul className="product-features">
                            <li> Balanced risk & reward</li>
                            <li> Medium to long-term growth</li>
                            <li> Ideal for wealth builders</li>
                        </ul>

                        <button className="product-btn dark">Learn More</button>
                    </div>

                    {/* GROUP SAVINGS */}
                    <div className="product-card">


                        <h3>Fidelity Package</h3>
                        <p className="product-desc">
                            A premium investment option offering higher returns
                            through advanced portfolio management strategies.
                        </p>

                        <ul className="product-features">
                            <li>Higher return potential</li>
                            <li> Actively managed funds</li>
                            <li> For experienced investors</li>
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