import NavbarItem from "./NavbarItem";
import { AiOutlineClose } from "react-icons/ai";

type MobileProps = {
  toggle: () => void;
  isVisible: boolean;
};

function MobileMenu({ toggle, isVisible }: MobileProps) {
  const redirect = () => {
    setTimeout(() => {
      toggle();
    }, 500);
  };
  return (
    <div
      id="container"
      className={
        "z-50 h-screen w-screen absolute md:hidden font-sans text-white top-0 left-0 bg-black flex flex-col items-center justify-evenly text-xl transition-all ease-in-out duration-700" +
        (isVisible ? " translate-x-0" : " translate-x-[100vw]")
      }
    >
      <div onClick={redirect}>
        <NavbarItem reference={"#home"} text={"Home"} />
      </div>
      <div onClick={redirect}>
        <NavbarItem reference={"#menu"} text={"Menu"} />
      </div>
      <div onClick={redirect}>
        <NavbarItem reference={"#about"} text={"About us"} />
      </div>
      <div onClick={redirect}>
        <NavbarItem reference={"#awards"} text={"Awards"} />
      </div>

      <div onClick={redirect}>
        <NavbarItem reference={"#chef"} text={"Chef"} />
      </div>

      <div onClick={redirect}>
        <NavbarItem reference={"#contact"} text={"Contact Us"} />
      </div>

      <div className="absolute top-5 right-4 text-lg" onClick={toggle}>
        <AiOutlineClose />
      </div>
    </div>
  );
}

export default MobileMenu;
