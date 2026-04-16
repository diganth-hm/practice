import People from "../assets/People.png";
import hand from "../assets/hand.png";
import like from "../assets/like.png";
import Brain from "../assets/brain.png";


function why() {
    return (
        <div id="why" className="mt-20 ml-10 mr-10">
            <div className="w-1/2 ml-120"> <h1 className="text-7xl font-bold" >Why homebuyers</h1><h1 className="ml-15 text-7xl font-bold"> trust heavenly </h1></div>
            <div className="flex gap-90 mt-20">
                <div className="w-90 h-90 bg-[#E5E5E5] rounded-4xl"><div className="bg-white mt-20 ml-35  rounded-full p-2 inline-block">
                    <img src={People} alt="group" className="w-16 h-16 rounded-full object-cover" />
                </div>
                  <div className="ml-15">  <h1 className="text-xl font-semibold ml-15 mt-10">Human-First </h1><h1 className="text-xl font-semibold ml-18"> Approach</h1></div>
                    <p className="text-lg font-normal text-black ml-7 mt-5 mr-5">We listen before we recommend.your comfort guides every step</p>
                </div>
                <div className="w-90 h-90 bg-[#E5E5E5] rounded-4xl"><div className="bg-white mt-20 ml-35  rounded-full p-2 inline-block">
                    <img src={Brain} alt="group" className="w-16 h-16 rounded-full object-cover" />
                </div>
                    <h1>Neighborhood Knowledge</h1>
                    <p>We know  the streets , the people,the community culture</p>
                </div>
            </div >
            <div className="flex ml-90 gap-95 mt-1">
                <div className="w-90 h-90 bg-[#E5E5E5] rounded-4xl">
                    <div className="bg-white mt-20 ml-35  rounded-full p-2 inline-block">
                    <img src={like} alt="group" className="w-16 h-16 rounded-full object-cover" />
                </div>
                <h1>Clear,Honest Information</h1><p>No hidden fees.No confusinglanguage. Just clarity you can rely on</p></div>
                <div className="w-90 h-90 bg-[#E5E5E5] rounded-4xl">
                    <div className="bg-white mt-20 ml-35  rounded-full p-2 inline-block">
                    <img src={hand} alt="group" className="w-16 h-16 rounded-full object-cover" />
                </div>
                <h1>Stress-Free Guidance</h1>
                <p>From search to closing,we supportyou with steady ,calm commmunication</p>
                </div>
            </div>
        </div>
    );
}
export default why;