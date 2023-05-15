import Logo from "../img/Logo.svg"
import navbar from "../img/navbar.png"

const Navbar = () => {
    return(
      <div className="flex justify-between px-14 py-5 items-center">
        <div className="flex items-center gap-x-3.5">
          <img className="w-14 h-14" src={Logo} alt="Imagem" />
          <p className="text-2xl font-semibold text-indigo-500">Sendpay</p>
        </div>
        <div className="flex gap-x-7 text-base font-bold max-lg:hidden">
            <a href="#">send money</a>
            <a href="#">recive money</a>
            <a href="#">language</a>
            <a href="#">how it work</a>
        </div>
        <div className="flex gap-x-5 max-lg:hidden">
            <a className="border-2 border-slate-400 w-24 h-10 flex justify-center items-center font-bold" href="#">Sign in</a>
            <a className="bg-indigo-500 text-white border-2 border-slate-400 w-24 h-10 flex justify-center items-center font-bold" href="#">Register</a>
        </div>
          <img className="w-10 hidden max-lg:block" src={navbar} alt="Imagem" />
      </div>
    )
}

export default Navbar;