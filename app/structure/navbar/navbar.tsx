import NavButton from "./button";
import NavLogo from "./logo";

const Navbar = () => {
    const topics = ['Início', 'Sobre', 'Projetos', 'Habilidades', 'Contato']
    const hrefs = ['home', 'about', 'projects', 'skills', 'contact']
    return <nav className="flex flex-row justify-between items-center sticky top-0 h-[48px] bg-primary">
        <NavLogo></NavLogo>
        <div className="flex flex-row gap-2 bg-primary">
            {
                topics.map(
                    (topic, index) =>
                        <NavButton key={"NavButton" + index} name={topic} href={hrefs[index]}></NavButton>
                )
            }
        </div>
    </nav>
}

export default Navbar;