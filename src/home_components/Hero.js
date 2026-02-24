import { useContext, useEffect, useState } from "react";
import "./hero.css";
import { AuthContext } from "../util/api";

const slides = [
  {
    title: "Smarter Finance",
    highlight: "Built for Communities",
    text: "An AI-powered financial ecosystem designed for Africa — secure clusters, inclusive access, and sustainable growth.",
    cards: ["AI Trust Engine", "Community Clusters", "Smart Lending"],
  },
  {
    title: "Inclusive Banking",
    highlight: "Powered by AI",
    text: "Fair access to savings, credit, and investments with intelligent trust systems.",
    cards: ["AI Credit", "Group Savings", "Risk Control"],
  },
  {
    title: "Grow Together",
    highlight: "Financial Freedom",
    text: "Empowering individuals and communities to grow wealth sustainably through smart finance.",
    cards: ["Wealth Tools", "Secure Wallet", "Smart Growth"],
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const { theme } = useContext(AuthContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <div  className={theme}>
    <section className="hero-wrap" id="home">
      <section className="hero">
        <div className="hero-text">
          <h1>
            {slide.title}
            <span>{slide.highlight}</span>
          </h1>

          <p>{slide.text}</p>

          <div className="hero-actions">
            <button className="btn-primary">Download App</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>

        <div className="hero-cards">
          {slide.cards.map((card, i) => (
            <div key={i} className="glass-card">
              {card}
            </div>
          ))}
        </div>
      </section>

      <div className="hero-divider">
        <span></span>
      </div>
    </section>
    </div>
  );
}
