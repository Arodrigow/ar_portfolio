import siimas from "@/public/images/projects/siimas.webp"
import hidronaf from "@/public/images/projects/hidronaf.webp"
import fluem_main from "@/public/images/projects/fluem_main.webp"

export const ProjectsData = [
    {
        title: "SIIMAS",
        description: "Desenvolvimento de um sistema de gerenciamento de informações para o setor de engenharia.",
        image: siimas,
        link: "https://siimas.com.br",
        technologies: ["Next.js", "Tailwind CSS", "NestJS", "PostgreSQL", "TypeScript", "Leaflet"],
    },
    {
        title: "HIDRONAF",
        description: "Desenvolvimento de um site para o grupo HIDRONAF.",
        image: hidronaf,
        link: "https://www.hidronaf.com/",
        technologies: ["React", "Next.js", "Tailwind CSS", "Leaflet", "TypeScript"],
    }, {
        title: "Fluem Engenharia",
        description: "Desenvolvimento de um sistema para a empresa Fluem Engenharia.",
        image: fluem_main,
        link: "https://fluem.com.br/",
        technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    },

]