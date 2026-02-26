import { useEffect } from "react"
import './App.css'
import './styles/fontFamily.css'
import Homepage from './pages/Homepage'
import AboutMe from './pages/AboutMe'
import AboutMeSMM from "./pages/AboutMeSMM"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            window.history.replaceState(
              null,
              "",
              `#${entry.target.id}`
            );
          }
        });
      },
      {
        threshold: 0.6
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Homepage />
      <AboutMe />
      <AboutMeSMM />
      <Projects />
      <Contact />
    </>
  )
}

export default App