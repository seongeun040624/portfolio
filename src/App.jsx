import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

import "./App.scss";

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    const headerOffset = 100;

    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");

      const timer = setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          const top =
            element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

          window.scrollTo({
            top,
            behavior: "smooth",
          });
        }
      }, 50);

      return () => clearTimeout(timer);
    }

    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  }, [location]);

  return null;
}

function AppLayout() {
  return (
    <div className="wrap">
      <ScrollHandler />
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;