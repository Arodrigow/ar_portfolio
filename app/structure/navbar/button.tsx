type props = {
    name: string;
    href: string;
}
const NavButton = (props: props) => {
    return (
        <button className="bg-transparent hover:underline hover:text-shadow-[1px_0_0_rgb(0_0_0)] tracking-wider text-white font-semibold py-2 px-4 cursor-pointer">
           <a href={"#"+props.href}>{props.name}</a>
        </button>
    )
}

export default NavButton;