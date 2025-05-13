type props = {
    name: string;
    href: string;
}
const NavButton = (props: props) => {
    return (
        <button className="bg-transparent hover:underline hover:text-shadow-[1px_0_0_rgb(0_0_0)] tracking-wider text-secondary font-semibold cursor-pointer">
           <a href={"#"+props.href} className="h-max w-full py-2 px-4 ">{props.name}</a>
        </button>
    )
}

export default NavButton;