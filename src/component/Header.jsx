import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../style/header.scss";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [projectMenuOpen, setProjectMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const headerOffset = 100;
    const element = document.getElementById(sectionId);

    if (element) {
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  const handleSectionMove = (sectionId) => {
    setActiveSection(sectionId);

    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }

    setProjectMenuOpen(false);
  };

  const handleProjectsPageMove = () => {
    setActiveSection("projects");
    navigate("/projects");
    setProjectMenuOpen(false);
  };

  useEffect(() => {
    if (location.pathname.startsWith("/projects")) {
      setActiveSection("projects");
      return;
    }

    if (location.pathname !== "/") return;

    const handleScrollSpy = () => {
      const headerOffset = 120;
      const sectionIds = ["home", "about", "projects", "contact"];

      let currentSection = "home";

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);

        if (!element) return;

        const top = element.offsetTop - headerOffset;
        const bottom = top + element.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScrollSpy();
    window.addEventListener("scroll", handleScrollSpy);

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [location.pathname]);

  const isHomeActive =
    location.pathname === "/" && activeSection === "home";

  const isAboutActive =
    location.pathname === "/" && activeSection === "about";

  const isProjectsActive =
    location.pathname.startsWith("/projects") ||
    (location.pathname === "/" && activeSection === "projects");

  const isContactActive =
    location.pathname === "/" && activeSection === "contact";

  return (
    <header className="header">
      <div className="inner">
        <h1 className="logo">
          <Link
            to="/"
            onClick={() => {
              setActiveSection("home");
              setProjectMenuOpen(false);
            }}
          >
            Portfolio
          </Link>
        </h1>

        <nav className="gnb">
          <button
            type="button"
            className={isHomeActive ? "active" : ""}
            onClick={() => handleSectionMove("home")}
          >
            Home
          </button>

          <button
            type="button"
            className={isAboutActive ? "active" : ""}
            onClick={() => handleSectionMove("about")}
          >
            About
          </button>

          <div
            className={`gnb-item has-depth ${projectMenuOpen ? "open" : ""}`}
            onMouseEnter={() => setProjectMenuOpen(true)}
            onMouseLeave={() => setProjectMenuOpen(false)}
          >
            <button
              type="button"
              className={isProjectsActive ? "active" : ""}
              onClick={() => handleSectionMove("projects")}
            >
              Projects
            </button>

            <div className="depth2">
              <button type="button" onClick={handleProjectsPageMove}>
                All Projects
              </button>
            </div>
          </div>

          <button
            type="button"
            className={isContactActive ? "active" : ""}
            onClick={() => handleSectionMove("contact")}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;