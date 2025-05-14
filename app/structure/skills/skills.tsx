import { Skills as skl } from "@/public/text/skills/content_ptbr"
import SectionTitle from "../section_title";
import { SkillsData as data } from "@/public/data/skills"
import SkillsCard from "./skills_card";

const SkillsSection = () => {
    return (
        <section id="skills" className="
                 flex flex-col justify-center items-center
                 min-h-[calc(100vh-48px)] w-full 
                 px-40 gap-20
                 bg-gradient-to-b from-secondary to-secondary
                 ">
            <SectionTitle text={skl.Title} color="text-primary"></SectionTitle>
            <div className="
        flex flex-row flex-wrap items-center justify-center gap-5
        w-[90%]  h-[600px] p-20
        bg-primary
        rounded-lg
        overflow-hidden
        shadow-black shadow-sm
        ">
                {
                    data.map((skill, index) => (
                        <SkillsCard alt={skill.alt} image={skill.image} level={skill.nivel} title={skill.title} key={"Skill"+index}></SkillsCard>
                ))
                }
            </div>
        </section>
    )
}

export default SkillsSection;