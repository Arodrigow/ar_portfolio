import { About as ab } from "@/public/text/about/content_ptbr"

const AboutSection = () => {
    return (
        <div id="about" className="
         flex flex-row justify-center items-center 
         h-[calc(100vh-48px)] w-full 
         px-40 gap-20
         bg-white
         "
        >
            <h1 className="
            text-5xl text-[#0a192f] font-bold
            text-center
            w-1/4 
            "
            >
                {ab.Title}
            </h1>
            <span className="w-3/4">{ab.Content1}</span>
        </div>
    );
}

export default AboutSection;