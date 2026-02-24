import { useEffect, useState  , useContext } from "react";
import "./Navbar.css";
import { AuthContext } from "../util/api";



export default function Navbar() {

  const { theme   , changetheme } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");


  const sections = [ "home" , "products", "investments", "loans", "contact"];

  // 🔥 Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 120;
          const sectionHeight = section.offsetHeight;

          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            current = id;
          }
        }
      });

      if (current) setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <header className={`nav ${theme}`}>
        <div className="nav-logo">Redge</div>

        <nav className="nav-links">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={activeLink === item ? "active" : ""}
              onClick={() => handleClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

           <a     href="https://app.redge.centernut.com" className="active">Get Started</a>

        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => changetheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

         
          <div
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div  style={{ zIndex:323292839}} className={`mobile-menu ${theme}`}>
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={activeLink === item ? "active" : ""}
              onClick={() => handleClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

              <a     href="https://app.redge.centernut.com" className="active">Get Started</a>
        </div>
      )}

      {/* PAGE SPACER */}
      <div className="page-wrapper" />
    </>
  );
}
