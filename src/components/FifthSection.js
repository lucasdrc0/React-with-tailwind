import Photo1 from "../img/Photo1.svg"
import Photo2 from "../img/Photo2.svg"
import Photo3 from "../img/Photo3.svg"

const FifthSection = () => {
    return(
        <div className="bg-violet-600 flex justify-between pb-16 flex flex-wrap">
            <div>
                <h2 className="font-light text-4xl italic text-white w-36 h-48 mt-16 ml-28">People Are Saying About Us</h2>
                <p className="text-white text-normal text-2xl ml-28 mb-28">See all </p>
            </div>
            <div className="mt-16 flex gap-10 max-lg:flex-wrap mx-5">
                <div className="bg-white w-72 h-80 rounded-2xl p-7 max-md:w-full">
                    <p className="font-medium text-xl text-left italic w-52 h-44">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae.</p>
                    <div className="flex">
                        <img className="mr-5" src={Photo1} alt="" />
                        <div>
                            <h3 className="font-semibold text-xl">Dev Opter</h3>
                            <p className="font-semibold text-gray-500">Design</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-72 h-80 rounded-2xl p-7 max-md:w-full">
                    <p className="font-medium text-xl text-left italic w-52 h-44">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae.</p>
                    <div className="flex">
                        <img className="mr-5" src={Photo2} alt="" />
                        <div>
                            <h3 className="font-semibold text-xl">Dev Opter</h3>
                            <p className="font-semibold text-gray-500">Design</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-72 h-80 rounded-2xl p-7 max-md:w-full">
                    <p className="font-medium text-xl text-left italic w-52 h-44">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae.</p>
                    <div className="flex">
                        <img className="mr-5" src={Photo3} alt="" />
                        <div>
                            <h3 className="font-semibold text-xl">Dev Opter</h3>
                            <p className="font-semibold text-gray-500">Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FifthSection;