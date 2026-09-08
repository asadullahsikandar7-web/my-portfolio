import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/hero/Hero";
import { About } from "../components/about/About";
import { Journey } from "../components/journey/Journey";
import { Skills } from "../components/skills/Skills";
import { Projects } from "../components/projects/Projects";
import { QualityEngineering } from "../components/quality/QualityEngineering";
import { CurrentlyBuilding } from "../components/building/CurrentlyBuilding";
import { GithubStats } from "../components/github/GithubStats";
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
      <Journey />
      <Skills />
      <Projects />
      <QualityEngineering />
      <CurrentlyBuilding />
      <GithubStats />
      <Thinking />
      <Contact />
    </>
  );
}
