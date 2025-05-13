import AboutSection from "./structure/about/about";
import Hero from "./structure/hero/hero";
import Navbar from "./structure/navbar/navbar";

export default function Home() {
  return (
    //Nav - Done
    //Hero - Estrutura feita, falta estilizar
    //About - Estrutura feita, falta estilizar
    //Projects
    //Skills
    //Contact
    //Footer
    <div className="flex flex-col bg-[#0a192f]">
      <Hero></Hero>
      <Navbar></Navbar>
      <AboutSection></AboutSection>
    </div>
  );
}
