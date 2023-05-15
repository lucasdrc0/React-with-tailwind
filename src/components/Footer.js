import Logo from "../img/Logo.svg"
import Facebook from "../img/Facebook.svg"
import Github from "../img/Github.svg"
import Twitter from "../img/Twitter.svg"


const Footer = () => {
    return (
        <div className="flex justify-around flex-wrap">
            <div className="mt-20 mb-52 max-md:mb-20">
            <div className="flex items-center gap-x-3.5 mb-12">
                <img className="w-14 h-14" src={Logo} alt="Imagem" />
                <p className="text-2xl font-semibold text-indigo-500">Sendpay</p>
            </div>
                <p className="font-semibold text-lg text-gray-500 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo.</p>
            </div>
            <div className="flex gap-20 max-sm:gap-10 mt-28 max-md:mt-0">
                <div className="flex flex-col gap-10 font-semibold text-lg">
                    <a href="#">Products</a>
                    <a href="#">Products</a>
                    <a href="#">Products</a>
                    <a href="#">Products</a>
                </div>
                <div className="flex flex-col gap-10 font-semibold text-lg">
                    <a href="#">About</a>
                    <a href="#">About</a>
                    <a href="#">About</a>
                    <a href="#">About</a>
                    <a href="#">About</a>
                </div>
                <div className="flex flex-col gap-10 font-semibold text-lg">
                    <a href="#">Catalog</a>
                    <a href="#">Catalog</a>
                    <a href="#">Catalog</a>
                    <a href="#">Catalog</a>
                </div>
            </div>
            <div className="mt-20 bg-violet-600 w-56 h-80 rounded-3xl text-white flex flex-col justify-around px-5 max-lg:w-full max-lg:mx-10">
                <h1 className="font-extrabold text-2xl">Social Contacts</h1>
                <div className="flex items-center gap-2.5  justify-between">
                    <h2 className="font-medium text-2xl">Facebook</h2>
                    <img src={Facebook} alt="Imagem" />
                </div>
                <div className="flex items-center gap-2.5 justify-between">
                    <h2 className="font-medium text-2xl">Github</h2>
                    <img src={Github} alt="Imagem" />
                </div>
                <div className="flex items-center gap-2.5 justify-between">
                    <h2 className="font-medium text-2xl">Twitter</h2>
                    <img src={Twitter} alt="Imagem" />
                </div>
            </div>
        </div>
    )
}

export default Footer;