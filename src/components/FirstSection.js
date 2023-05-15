import img1 from "../img/img1.svg"


const FirstSection = () => {
    return(
        <div className="flex justify-between flex-wrap mb-48">
            <div className="pt-24 pl-16 w-2/5 flex flex-col max-lg:w-full max-md:px-6">
                <h1 className="font-semibold text-5xl pb-12">Sending Money is Easir than before</h1>
                <p className="text-xl text-gray-500 pb-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, possimus deleniti eaque recusandae commodi, nulla illum</p>
                <div className="flex gap-x-5">
                    <a className="bg-indigo-500 text-white border-2 border-slate-400 w-32 h-12 flex justify-center items-center" href="#">Register</a>
                    <a className="border-2 border-slate-400 w-32 h-12 flex justify-center items-center" href="#">learn more</a>
                </div>
            </div>
            <div className="pt-16 pr-4 flex justify-center max-lg:w-full max-lg:mt-20">
                <img src={img1} alt="imagem" />
            </div>
        </div>      
    )
}

export default FirstSection;