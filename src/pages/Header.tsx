import bg from "../assets/bg-header.jpg";

function Header() {
  function scrollToMenu() {
    const menu = document.getElementById("menu");
    menu?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <div
      className="w-screen h-[calc(100vh-80px)] block overflow-hidden py-[50px] px-[16px] md:py-[160px] md:px-[50px] lg:py-[200px] lg:px-[500px] text-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="font-tangerine text-4xl md:text-5xl text-yellow-400 animate-fadeInLeft mb-6">
        You know what they say, go to Ditto and dine the right way
      </h1>
      <p className="text-gray-300 text-base md:text-lg animate-fadeInLeft animation-duration">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
        turpis enim. Nunc iaculis, mi vitae pharetra rutrum, elit orci lacinia
        ligula, at malesuada massa quam at nulla. Maecenas varius at neque non
        imperdiet. Nulla dictum erat vel augue rutrum, eu commodo dui aliquet.
        Aliquam porta euismod imperdiet. In semper diam ac ante ultrices, sit
        amet tempor sapien faucibus. Morbi nec tellus at est fringilla blandit.
        Sed auctor, felis ac gravida posuere, sapien felis sodales risus, in
        pharetra tortor diam vel leo. Duis eget elit nec sem tincidunt suscipit
        sit amet ullamcorper arcu. Fusce pharetra justo non sodales cursus.
      </p>
      <button
        onClick={scrollToMenu}
        className="bg-yellow-400 bg-opacity-50 italic p-[6px] text-xl rounded-lg md:p-[10px] md:text-2xl mt-[30px] hover:bg-opacity-100 transition-all duration-300 ease-linear animate-animate-fadeInLeft"
      >
        Check our menu
      </button>
    </div>
  );
}

export default Header;
