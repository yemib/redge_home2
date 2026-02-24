import "./products.css";
import { useContext } from "react";
import { AuthContext } from "../util/api";

export default function Loan() {

    const { theme } = useContext(AuthContext);

    return (
        <div className={theme}>
            <section className="products reveal" id="loans">
                <div className="products-header">
                    <h2>Loan Packages</h2>
                    <p className="products-intro">
                        Access flexible and transparent loan options designed
                        to support individuals, agents, and small businesses.
                    </p>
                </div>

                <div className="products-grid">

                    {/* AJO SAVINGS */}
                    <div className="product-card">
                        {/*  <span className="product-tag">Popular</span> */}

                        <h3>Agent Loan</h3>
                        <p className="product-desc">
                            Short-term working capital loans designed for trusted agents
                  to grow operations and meet daily financial needs.
                        </p>

                        <ul className="product-features">
                             <li> Fast approval</li>
                  <li> Flexible repayment</li>
                  <li> Community-backed trust model</li>
                        </ul>

                        <button className="product-btn">Apply Now</button>
                    </div>

                    {/* AGENT SAVINGS */}
                    <div className="product-card highlight">
                        {/*    <span className="product-tag accent">Trusted</span> */}

                        <h3>Monthly Loan</h3>
                        <p className="product-desc">
                             Structured monthly loans with predictable repayments,
                  suitable for personal needs and small business growth.
                        </p>

                        <ul className="product-features">
                           <li> Fixed monthly repayment</li>
                  <li> Transparent interest structure</li>
                  <li> Flexible loan tenure</li>
                        </ul>

                        <button className="product-btn dark">Apply Now</button>
                    </div>

                
                </div>
              
            </section>


        </div>


    );
}