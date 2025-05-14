import AboutSection from "./structure/about/about";
import Hero from "./structure/hero/hero";
import Navbar from "./structure/navbar/navbar";
import ProjectsSection from "./structure/projects/projects";
import SkillsSection from "./structure/skills/skills";

export default function Home() {
  return (
    //Nav - Done
    //Hero - Estrutura feita, falta estilizar
    //About - Estrutura feita, falta estilizar
    //Projects - Estrutura feita, falta estilizar
    //Skills - Estrutura feita, falta estilizar
    //Contact
    //Footer
    <div className="flex flex-col bg-[#0a192f]">
      <Hero></Hero>
      <Navbar></Navbar>
      <AboutSection></AboutSection>
      <ProjectsSection></ProjectsSection>
      <SkillsSection></SkillsSection>
    </div>
  );
}
