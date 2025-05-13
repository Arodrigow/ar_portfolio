import { Projects as prj } from '@/public/text/projects/content_ptbr'
import SectionTitle from '../section_title';
import { ProjectsData as data } from '@/public/data/projects'
import ProjectCard from '../project_card';

const ProjectsSection = () => {



    return (
        <section id="projects" className="
                 flex flex-col justify-center items-center
                 min-h-[calc(100vh-48px)] w-full 
                 px-40 gap-20
                 bg-gradient-to-b from-primaryLight to-primary
                 "
        >
            <SectionTitle text={prj.Title} color="text-secondary"></SectionTitle>
            <div className='
            flex flex-row justify-center items-center flex-wrap
            gap-10
            '>
                {
                    data.map(
                        (project, index) =>
                            <ProjectCard
                                key={"ProjectCard" + index}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                image={project.image}
                                link={project.link}
                            ></ProjectCard>
                    )
                }
            </div>
        </section>
    )
}

export default ProjectsSection;