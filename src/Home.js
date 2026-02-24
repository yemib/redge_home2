import { useEffect, useState } from "react";
import "./home.css";
import Navbar from "./home_components/Navbar";
import Hero from "./home_components/Hero";
import { AuthProvider } from "./util/api";
import { BrowserRouter } from "react-router-dom";
import Values from "./home_components/Values";
import Ecosystem from "./home_components/Ecosystem";
import Savings from "./home_components/savings";
import Footer from "./home_components/Footer";
import Investments from "./home_components/investment";
import Loan from "./home_components/loan";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);



  // Scroll animation observer
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach(section => observer.observe(section));
  }, []);

  // Apply theme



  return (
    <BrowserRouter>

      <AuthProvider>

        <div className="home">

          {/* NAVBAR */}
          <Navbar />


          {/* HERO */}
          <Hero />

          {/* VALUES */}

          <Values />


          {/* ECOSYSTEM */}
          <Ecosystem />


          {/* ================= PRODUCTS ================= */}
          {/* ================= SAVINGS PRODUCTS ================= */}
          <Savings />



          {/* ================= INVESTMENTS ================= */}
          <Investments />




          {/* ================= LOANS ================= */}
          <Loan />



          {/* CTA */}
          <section className="cta reveal">
            <h2>Grow Together With Redge</h2>
            <p>
              Join a new generation of intelligent financial platforms
              built for people and powered by trust.
            </p>
            <button className="btn-primary">Get Started Now</button>
          </section>

          {/* FOOTER */}
          <Footer />

        </div>

      </AuthProvider>
    </BrowserRouter>

  );
}
