import Logo from "../img/Logo.svg"
import Banker from "../img/Banker.svg"
import Clock from "../img/Clock.svg"
import Phone from "../img/Phone.svg"
import Car from "../img/Car.svg"

const FourthSection = () => {
    return(
        <div className="mx-24 mb-40 max-md:mx-0 max-md:w-full">
            <div>
                <div className="flex justify-center gap-4 flex-wrap">
                    <h1 className="font-semibold text-5xl max-md:text-2xl">We are giving Services</h1>
                    <div className="flex items-center gap-x-3.5">
                        <img className="w-14 h-14" src={Logo} alt="Imagem" />
                        <p className="text-2xl font-semibold text-indigo-500">Sendpay</p>
                    </div>
                </div>
                <p className="mt-16 flex justify-center text-lg font-semibold text-gray-500 mb-10 max-sm:mx-10 max-md:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            </div>
            <div className="flex flex-wrap gap-14 justify-center max-md:pt-20">
                <div className="w-2/5 flex mb-20 max-md:w-full max-md:mx-10">
                    <img src={Banker} alt="Imagem" />
                    <div className="pt-3 pl-3">
                        <h2 className="font-semibold text-2xl">Bank Transfer</h2>
                        <p className="font-semibold text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nunc eu.</p>
                    </div>
                </div>
                <div className="w-2/5 flex mb-20 max-md:w-full max-md:mx-10">
                    <img src={Clock} alt="Imagem" />
                    <div className="pt-3 pl-3">
                        <h2 className="font-semibold text-2xl">Faster Transer</h2>
                        <p className="font-semibold text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nunc eu.</p>
                    </div>
                </div>
                <div className="w-2/5 flex mb-20 max-md:w-full max-md:mx-10">
                    <img src={Phone} alt="Imagem" />
                    <div className="pt-3 pl-3">
                        <h2 className="font-semibold text-2xl">Mobile Recharge</h2>
                        <p className="font-semibold text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nunc eu.</p>
                    </div>
                </div>
                <div className="w-2/5 flex mb-20 max-md:w-full max-md:mx-10">
                    <img src={Car} alt="Imagem" />
                    <div className="pt-3 pl-3">
                        <h2 className="font-semibold text-2xl">Easy and Fast</h2>
                        <p className="font-semibold text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nunc eu.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthSection;