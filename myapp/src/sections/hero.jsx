import Navbar from "./navbar";
import hero1 from "../assets/hero1.png";
import shield from "../assets/shield.png";
import logo from "../assets/logo.png";
import {Call,Property,Startnow,Learnmore,Allprop,Booknow,Aboutus} from "../Components/Button";

function Hero() {
  return (
    <div>
      {/* Hero background section */}
      <div className="lg:h-250 lg:w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${hero1})` }}>
        <Navbar />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <img src={logo} alt="logo" className="w-16" />
          <h1 className="text-4xl font-bold text-white">Havenly</h1>
        </div>

        <div className="call absolute top-4 right-4"><Call /></div>
        <div className="mt-52 ml-20">
          <h1 className="text-7xl font-bold text-white font-sans font-medium">Find a home that </h1>
          <h1 className="text-7xl font-bold text-white font-sans font-medium">feels like haven.</h1>
        </div>
        <div className="mt-7 ml-21 gap-5 flex">
          <Property /><Startnow />
        </div>
        <div className="ml-20 mt-8 gap-4 flex items-center">
          <img src={shield} alt="shield" />
          <h2 className="text-white text-lg font-normal">Trusted by families, first-time buyers and professionals across the city.</h2>
        </div>
        <div className="bottom-1 ml-15 text-[#D0FF00] text-[320px] font-bold tracking-wider">Havenly.</div>
      </div>

      {/* Stats row — now correctly OUTSIDE the background div but INSIDE the outer wrapper */}
      <div className="max-w-6xl mx-auto flex justify-between items-start text-center mt-15 mb-15 gap-10">
        <div className="flex"><h1 className="text-5xl font-bold">500+</h1><p className="mt-1">HOMES SOLD &<br /> RENTED</p></div>
        <div className="flex"><h1 className="text-5xl font-bold">98%</h1><p>CUSTOMER SATISFACTION<br /> RATE</p></div>
        <div className="flex"><h1 className="text-5xl font-bold">10+</h1><p>YEARS OF LOCAL<br /> MARKET EXPERTISE</p></div>
        <div className="flex"><h1 className="text-5xl font-bold">300+</h1><p>HAPPY FAMILIES<br /> SERVED</p></div>
      </div>

      <div className="px-10"><div className="border-t border-gray-500 my-6"></div></div>
    </div>
  );
}

export default Hero;
