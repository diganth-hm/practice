function Navbar() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="navbar flex justify-between items-center md:w-1/2 lg:w-1/2 xl:w-1/2 mx-auto py-5">
            <button onClick={() => scrollTo("properties")} className="nav-link lg:text-base md:text-sm text-white bg-transparent border-none cursor-pointer">Properties</button>
            <button onClick={() => scrollTo("about")} className="nav-link lg:text-base md:text-sm text-white bg-transparent border-none cursor-pointer">About</button>
            <button onClick={() => scrollTo("why")} className="nav-link lg:text-base md:text-sm text-white bg-transparent border-none cursor-pointer">Why Heavenly</button>
            <button onClick={() => scrollTo("testimonials")} className="nav-link lg:text-base md:text-sm text-white bg-transparent border-none cursor-pointer">Testimonials</button>
            <button onClick={() => scrollTo("contact")} className="nav-link lg:text-base md:text-sm text-white bg-transparent border-none cursor-pointer">Contact</button>
        </div>
    );
}

export default Navbar;
