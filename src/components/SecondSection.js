import Ellipse1 from "../img/Ellipse 1.svg"
import Ellipse2 from "../img/Ellipse 2.svg"
import Ellipse3 from "../img/Ellipse 3.svg"


const SecondSection = () => {
    return(
        <div className="mx-32 mb-40 max-md:mx-0">
            <div className="flex flex-col items-center gap-10 max-md:w-full">
                <h1 className="font-semibold text-5xl max-md:text-4xl">How it Works</h1>
                <p className="w-2/4 text-2xl text-center font-semibold text-gray-500 max-md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor.</p>
            </div>
            <div className="flex mt-20 gap-24 max-md:flex-wrap">
                <div className="w-80 flex flex-col items-center max-md:w-full">
                    <img className="w-52 h-52 mb-14" src={Ellipse1} alt="Imagem" />
                    <h2 className="text-2xl font-semibold mb-3">In-app transer</h2>
                    <p className="text-gray-500 text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat </p>
                </div>
                <div className="w-80 flex flex-col items-center max-md:w-full">
                    <img className="w-52 h-52 mb-14" src={Ellipse2} alt="Imagem" />
                    <h2 className="text-2xl font-semibold mb-3">In-app transer</h2>
                    <p className="text-gray-500 text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat </p>
                </div>
                <div className="w-80 flex flex-col items-center max-md:w-full">
                    <img className="w-52 h-52 mb-14" src={Ellipse3} alt="Imagem" />
                    <h2 className="text-2xl font-semibold mb-3">In-app transer</h2>
                    <p className="text-gray-500 text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat </p>
                </div>
            </div>
        </div>
    )
}

export default SecondSection;