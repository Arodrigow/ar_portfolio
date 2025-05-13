type props = {
    text: string;
    color: string;
}

const SectionTitle = (props: props) => {
    return (
        <h1 className={
            `
            text-5xl ${props.color} font-bold
            text-center
            w-1/4 
            `
        }
        >
            {props.text}
        </h1>
    )
}

export default SectionTitle;