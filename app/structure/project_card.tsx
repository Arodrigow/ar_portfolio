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
        flex flex-col justify-start items-center
        w-[400px]  h-[500px]
        bg-secondary
        rounded-lg
        overflow-hidden
        shadow-accent shadow-sm
        ">
            <div className="w-full ">
                <Image src={props.image} alt={props.title} />
            </div>
            <div className="
            flex flex-col
            py-4 px-6 gap-10
            ">
                <h2 className="font-bold text-primary text-center">{props.title}</h2>
                <span className="h-[80px] overflow-y-auto">{props.description}</span>
                <div className="
                flex flex-col gap-1">
                    <Link href={props.link} rel="noopenner noreferrer" target="_blank" className="text-primary font-semibold hover:text-shadow-[1px_0_0_rgb(0_0_0)]">Visitar</Link>
                    <div>
                        <span>Tech: </span>
                        {props.technologies.map((tech, index) => (
                            <span key={"Tech" + props.title + index} className="text-sm text-gray-500">
                                {props.technologies.length === index +1 ? tech : tech + ", "}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;