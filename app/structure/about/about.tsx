import { About as ab } from "@/public/text/about/content_ptbr"
import SectionTitle from "../section_title";

const AboutSection = () => {
    return (
        <section id="about" className="
         flex flex-row justify-center items-center 
         h-[calc(100vh-48px)] w-full 
         px-40 gap-20
         bg-white
         "
        >
            <SectionTitle text={ab.Title} color="text-[#0a192f]"></SectionTitle>
            <span className="w-3/4">{ab.Content1}</span>
        </section>
    );
}

export default AboutSection;