function AboutUs() {
  return (
    <div
      id="about"
      className="h-screen w-screen bg-[url(/src/assets/bg-about.jpg)] bg-cover bg-no-repeat flex flex-col items-center gap-4 md:gap-8 py-8 md:py-16 lg:py-24 scroll-smooth"
    >
      <div className="text-yellow-400 italic text-center text-3xl md:text-4xl lg:text-5xl tracking-wider font-sans font-bold">
        <h1>ABOUT US</h1>
      </div>
      <div className="w-full h-full flex">
        <div className="flex-1 py-3 md:py-6 lg:py-8 px-6 md:px-12 lg:px-16 lg:my-auto">
          <h3 className="text-yellow-400 text-center text-xl md:text-2xl lg:text-3xl tracking-wide font-semibold mb-10 md:mb-8">
            Our history
          </h3>
          <p className="text-white text-sm md:text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sed turpis enim. Nunc iaculis, mi vitae pharetra rutrum, elit orci
            lacinia ligula, at malesuada massa quam at nulla. Maecenas varius at
            neque non imperdiet. Nulla dictum erat vel augue rutrum, eu commodo
            dui aliquet. Aliquam porta euismod imperdiet. In semper diam ac ante
            ultrices, sit amet tempor sapien faucibus. Morbi nec tellus at est
            fringilla blandit. Sed auctor, felis ac gravida posuere, sapien
            felis sodales risus, in pharetra tortor diam vel leo. Duis eget elit
            nec sem tincidunt suscipit sit amet ullamcorper arcu. Fusce pharetra
            justo non sodales cursus.
          </p>
        </div>
        <div className="shrink border-r-2 border-r-yellow-400"></div>
        <div className="flex-1 py-3 md:py-6 lg:py-8 px-6 md:px-12 lg:px-16 lg:my-auto">
          <h3 className="text-yellow-400 text-center text-xl md:text-2xl lg:text-3xl tracking-wide font-semibold mb-3 md:mb-8">
            What makes us special
          </h3>
          <p className="text-white text-sm md:text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sed turpis enim. Nunc iaculis, mi vitae pharetra rutrum, elit orci
            lacinia ligula, at malesuada massa quam at nulla. Maecenas varius at
            neque non imperdiet. Nulla dictum erat vel augue rutrum, eu commodo
            dui aliquet. Aliquam porta euismod imperdiet. In semper diam ac ante
            ultrices, sit amet tempor sapien faucibus. Morbi nec tellus at est
            fringilla blandit. Sed auctor, felis ac gravida posuere, sapien
            felis sodales risus, in pharetra tortor diam vel leo. Duis eget elit
            nec sem tincidunt suscipit sit amet ullamcorper arcu. Fusce pharetra
            justo non sodales cursus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
