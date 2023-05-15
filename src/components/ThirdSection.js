import Boneco from "../img/Boneco.svg"

const ThirdSection = () => {
    return (
        <div className="flex justify-between mx-24 mb-80 flex flex-wrap max-lg:justify-center">
            <img className="mt-24" src={Boneco} alt="Imagem" />
            <div className="w-96 mt-48">
                <h1 className="font-semibold text-4xl mb-12">Real-time Currency balance check</h1>
                <p className="text-xl text-gray-500 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed.</p>
                <a className="text-xl text-violet-600 font-semibold" href="#">Ream More</a>
            </div>
        </div>
    )
}

export default ThirdSection;
