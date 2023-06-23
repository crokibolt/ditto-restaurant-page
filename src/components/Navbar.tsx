import { useState } from "react";
import NavbarItem from "./NavbarItem";
import { HiMenu } from "react-icons/hi";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [showMobile, setShowMobile] = useState(false);

  function toggleMobileMenu() {
    setShowMobile((prev) => !prev);
  }

  return (
    <div className="overflow-hidden">
      <div
        id="home"
        className="w-screen bg-black text-white h-[80px] font-sans py-4 px-4 lg:px-8 flex flex-wrap justify-between content-center items-center overflow-x-hidden"
      >
        <p className="text-xl md:text-2xl lg:text-3xl tracking-widest select-none">
          DITTO
        </p>
        <div className="hidden md:flex md:flex-wrap gap-4 items-center justify-center md:text-base lg:text-lg lg:pr-6">
          <NavbarItem reference={"#home"} text={"Home"} />
          <NavbarItem reference={"#about"} text={"About us"} />
          <NavbarItem reference={"#menu"} text={"Menu"} />
          <NavbarItem reference={"#awards"} text={"Awards"} />
          <NavbarItem reference={"#chef"} text={"Chef"} />
          <NavbarItem reference={"#contact"} text={"Contact Us"} />
        </div>
        <div className="block text-lg md:hidden" onClick={toggleMobileMenu}>
          <HiMenu />
        </div>
      </div>
      <MobileMenu toggle={toggleMobileMenu} isVisible={showMobile} />
    </div>
  );
}

export default Navbar;
