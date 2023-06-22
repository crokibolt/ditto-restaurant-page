type ItemProps = {
  reference: string;
  text: string;
};

function NavbarItem({ reference, text }: ItemProps) {
  return (
    <p className="group">
      <a href={reference}>{text}</a>
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-gray-300"></span>
    </p>
  );
}

export default NavbarItem;
