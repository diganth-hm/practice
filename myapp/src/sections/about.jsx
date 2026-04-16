import {Aboutus,Learnmore} from "../Components/Button";
import aboutimage from "../assets/aboutimage.png"
function About(){
    return(
        <div id="about" className=" flex mt-20">
            <div className="w-40 ml-10"><Aboutus/></div>
        <div className="about-section px-10 w-280  ml-80 mb-10">
        <div className="">
          <p className="text-3xl">At Haven, we believe a home is more than just walls- it's where life happens. Our team blends passion,market insight, and a personal touch to help every client feel  confident and cared for. From first time buyers to seasoned investors , we make property journeys simple and exciting.</p>
           <div className="mt-5 mb-5"><Learnmore/></div>
           </div>   
         <div className="h-20  mt-20"> <img src={aboutimage} alt="About Us" className="about-image" /></div>
       
        </div>
        </div>
    )
}
export default About;