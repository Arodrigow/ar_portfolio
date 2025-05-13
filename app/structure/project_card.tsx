import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type props = {
    title: string;
    description: string;
    technologies: string[];
    image: StaticImageData;
    link: string;
}

const ProjectCard = (props: props) => {
    return (
        <div className="
        flex flex-col justify-center items-center
        w-2/12
        ">
            <div>
                <Image src={props.image} alt={props.title} />
            </div>
            <div>
                <h2>{props.title}</h2>
                <div>
                    <span>{props.description}</span>
                    <Link href={props.link} rel="noopenner noreferrer" target="_blank">Visitar</Link>
                </div>
                <div>
                    {props.technologies.map((tech, index) => (
                        <span key={"Tech" + props.title + index} className="text-sm text-gray-500">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;