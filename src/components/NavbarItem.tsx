import { MouseEvent } from "react";

type ItemProps = {
  reference: string;
  text: string;
};

function NavbarItem({ reference, text }: ItemProps) {
  function scrollToElement(e: MouseEvent) {
    e.preventDefault();
    const element = document.querySelector(reference);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <p className="group">
      <a href={reference} onClick={scrollToElement}>
        {text}
      </a>
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-gray-300"></span>
    </p>
  );
}

export default NavbarItem;
