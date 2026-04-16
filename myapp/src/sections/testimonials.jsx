import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import samir from "../assets/samir.png";
import testimonialbg from "../assets/testimonialbg.png";
import { useState } from "react";

function Testimonials() {
    const [open, setOpen] = useState(1);
    return (
        <div id="testimonials" className="mt-20 ml-10 mr-10">
            <div className="text-center"><h1 className="text-7xl font-bold">Words from the</h1><h1 className="text-7xl font-bold">People who  found home</h1></div>
            <div className="relative mt-10 w-full h-80 bg-cover bg-center rounded-4xl" style={{ backgroundImage: `url(${testimonialbg})` }}>
                <div className="absolute left-10 top-1/2 -translate-y-1/2 flex  gap-50">
                    <img src={person2} alt="person" className="w-20 h-24 mt-12 rounded-2xl object-cover opacity-80" />
                    <img src={person1} alt="person" className="w-25 h-30 mt-6 rounded-2xl object-cover opacity-80" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <img src={samir} alt="Samir" className="w-36 h-52 rounded-2xl object-cover border-4 border-[#D0FF00]" />
                </div>
                <div className="absolute right-10 top-1/2 -translate-y-1/2 w-80 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 rounded-2xl p-6">
                    <p className="text-white text-sm">Havenly didn't just help us buy a house. They helped us understand what we actually needed. Every step felt clear .No pressure..Just honesty to anyone buying for the first time</p>
                    <h3 className="text-white font-bold mt-4">SAMIR REHAMN</h3>
                    <p className="text-white text-xs">UX DESIGNER</p>
                    <div className="mt-2 flex justify-end"><button className="bg-[#D0FF00] rounded-full w-8 h-8 flex items-center justify-center text-black font-bold">→</button></div>
                </div>
            </div>
            <div className="flex mt-20 gap-10">
                <div className="w-80 bg-[#E5E5E5] rounded-4xl p-10">
                    <span className="bg-[#D0FF00] text-black text-sm font-semibold px-4 py-1 rounded-full">FAQ</span>
                    <h1 className="text-5xl font-bold mt-6">Everything you need to know</h1>
                    <p className="text-lg mt-10">Have a custom question? contact us any time.</p>
                    <div className="mt-6"><button className="bg-black text-white px-6 py-3 rounded-full text-sm">Contact Us Now</button></div>
                </div>
                <div className="flex-1">
                    <div className="border-b border-gray-300 py-5"><div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(open === 1 ? null : 1)}><h3 className="text-lg font-medium">1. How do I know which home is right for me?</h3><span className="text-xl"></span></div>{open === 1 && <p className="text-gray-600 mt-3 text-sm">We start by learning about your lifestyle, budget, and what "home" feels like to you. From there, we guide you through options that genuinely fit your needs. No pressure. No confusion. Just clarity.</p>}</div>
                    <div className="border-b border-gray-300 py-5"><div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(open === 2 ? null : 2)}><h3 className="text-lg font-medium">2. Do you charge for the first consultation?</h3><span className="text-xl"></span></div></div>
                    <div className="border-b border-gray-300 py-5"><div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(open === 3 ? null : 3)}><h3 className="text-lg font-medium">3. Can you help first-time homebuyers?</h3><span className="text-xl"></span></div></div>
                    <div className="border-b border-gray-300 py-5"><div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(open === 4 ? null : 4)}><h3 className="text-lg font-medium">4. What areas do you work in?</h3><span className="text-xl"></span></div></div>
                    <div className="border-b border-gray-300 py-5"><div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(open === 5 ? null : 5)}><h3 className="text-lg font-medium">5. How long does the home-buying process usually take?</h3><span className="text-xl"></span></div></div>
                    <div className="border-b border-gray-300 py-5"><div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(open === 6 ? null : 6)}><h3 className="text-lg font-medium">6. Can I sell my current home through you too?</h3><span className="text-xl"></span></div></div>
                </div>
            </div>
        </div>
    );
}
export default Testimonials;
