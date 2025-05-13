const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[calc(100vh-48px)] bg-gradient-to-b from-[#0a192f] to-[#0a192f]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl text-white font-bold">Hello, I'm [Your Name]</h1>
                <p className="text-xl text-gray-400 mt-4">I'm a [Your Profession]</p>
                <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">Contact Me</button>
            </div>
        </div>
    )
}

export default Hero;