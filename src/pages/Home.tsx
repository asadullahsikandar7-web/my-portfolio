import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/hero/Hero";
import { About } from "../components/about/About";
import { Services } from "../components/services/Services";
import { Projects } from "../components/projects/Projects";
import { Skills } from "../components/skills/Skills";
import { Journey } from "../components/journey/Journey";
import { Thinking } from "../components/thinking/Thinking";
import { Contact } from "../components/contact/Contact";

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Journey />
      <Thinking />
      <Contact />
    </>
  );
}
