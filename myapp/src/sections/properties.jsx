import { Allprop,Booknow } from "../Components/Button";
import prop1 from "../assets/prop1.png";
import prop2 from "../assets/prop2.png";
import prop3 from "../assets/prop3.png";
import loc from "../assets/loc.png";
import bed from "../assets/bed.png";
import bath from "../assets/bath.png";

function Properties() {
    return (
        <div id="properties" className="mt-70 w-370 ">
            <div className="flex justify-between">
                <h1 className="ml-10 text-7xl font-semibold">Featured <br />Properties</h1>
                <div className="mt-10"><Allprop /></div>

            </div>
            <div className="flex justify-between ml-10 gap-15 mt-10 ">
                <div
                    className="prop1 w-120 h-150 bg-cover bg-center rounded-4xl"
                    style={{ backgroundImage: `url(${prop1})` }}
                ><div className="h-50   mt-98 ml-2 mr-2 mb-2 bg-white-900  hover:shadow-3xl rounded-4xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white">
                        <div className=" ml-10">
                            <h1 className="text-white text-2xl mt-5">Maple Grove Residence</h1>
                            <div className="flex">
                                <img src={loc} alt="Location" />
                                <h2 className="text-white">Willow Park District</h2>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex mt-2">
                                    <img src={bed} alt="Bedrooms" />
                                    <h3 className="text-white ml-2">3 Beds</h3>
                                </div>
                                <div className="flex mt-2">
                                    <img src={bath} alt="Bathrooms" />
                                    <h3 className="text-white ml-2">2 Baths</h3>
                                </div>
                            </div>
                         <div className="flex justify-between mr-5"><h1 className="text-white text-3xl font-semibold">$12,000</h1> <Booknow/></div>

                        </div>

                    </div></div>
                <div className="prop2  w-120 h-150 bg-cover bg-center rounded-4xl"
                    style={{ backgroundImage: `url(${prop2})` }}
                ><div className="h-50   mt-98 ml-2 mr-2 mb-2 bg-white-900  hover:shadow-3xl rounded-4xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white">
                        <div className=" ml-10">
                            <h1 className="text-white text-2xl mt-5">Maple Grove Residence</h1>
                            <div className="flex">
                                <img src={loc} alt="Location" />
                                <h2 className="text-white">Willow Park District</h2>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex mt-2">
                                    <img src={bed} alt="Bedrooms" />
                                    <h3 className="text-white ml-2">3 Beds</h3>
                                </div>
                                <div className="flex mt-2">
                                    <img src={bath} alt="Bathrooms" />
                                    <h3 className="text-white ml-2">2 Baths</h3>
                                </div>
                            </div>
                         <div className="flex justify-between mr-5"><h1 className="text-white text-3xl font-semibold">$12,000</h1> <Booknow/></div>

                        </div>

                    </div></div>
                <div className="prop3 w-120 h-150 bg-cover bg-center rounded-4xl"
                    style={{ backgroundImage: `url(${prop3})` }}
                ><div className="h-50   mt-98 ml-2 mr-2 mb-2 bg-white-900  hover:shadow-3xl rounded-4xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white">
                        <div className=" ml-10">
                            <h1 className="text-white text-2xl mt-5">Maple Grove Residence</h1>
                            <div className="flex">
                                <img src={loc} alt="Location" />
                                <h2 className="text-white">Willow Park District</h2>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex mt-2">
                                    <img src={bed} alt="Bedrooms" />
                                    <h3 className="text-white ml-2">3 Beds</h3>
                                </div>
                                <div className="flex mt-2">
                                    <img src={bath} alt="Bathrooms" />
                                    <h3 className="text-white ml-2">2 Baths</h3>
                                </div>
                            </div>
                         <div className="flex justify-between mr-5"><h1 className="text-white text-3xl font-semibold">$12,000</h1> <Booknow/></div>

                        </div>

                    </div></div>
            </div>
        </div>
    )
}
export default Properties;