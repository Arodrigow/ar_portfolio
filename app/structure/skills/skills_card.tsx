import Image from "next/image";

type props = {
    title: string;
    level: string;
    alt: string
    image: any;
}

const SkillsCard = (props: props) => {
    return (
        <div className="flex flex-col justify-center items-center w-1/5 h-[200px]">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-secondary">
                <Image src={props.image} alt={props.alt} className="h-auto w-10"></Image>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-secondary font-bold">{props.title}</h2>
            </div>
        </div>
    )
}

export default SkillsCard