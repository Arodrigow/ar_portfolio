const Hero = () => {
    return (
        <section id="home" className="flex flex-col justify-center items-center h-[calc(100vh-48px)] bg-gradient-to-b from-primaryLight to-primary">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl text-secondary font-bold">Hello, I'm [Your Name]</h1>
                <p className="text-xl text-lead mt-4">I'm a [Your Profession]</p>
                <button className="mt-6 px-6 py-3 bg-accent text-secondary rounded-lg hover:bg-accentLight transition duration-300">Contact Me</button>
            </div>
        </section>
    )
}

export default Hero;