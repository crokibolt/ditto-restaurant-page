import chef from "/src/assets/chef-pic.jpg";

function ChefNotes() {
  return (
    <div
      id="chef"
      className="w-screen h-fit md:h-screen bg-gradient-to-br from-black via-gray-700 to-gray-300 py-10"
    >
      <h1 className="text-3xl md:text-5xl text-center font-bold mb-4 md:mb-8">
        Our Chef
      </h1>
      <div className="w-screen h-fit md:h-[calc(100vh-200px)] md:flex gap-6 px-4 md:px-9 lg:px-12">
        <div className="w-full md:w-[50%] md:shrink-0 md:mt-[90px] lg:mt-0">
          <img
            src={chef}
            alt=""
            className="max-h-[300px] mx-auto mb-[40px] md:mb-0 md:mx-0 md:max-h-[50%] lg:max-h-full rounded-md border-2 border-red-800 shadow-xl shadow-black"
          />
        </div>
        <div className="md:flex-1 font-semibold text-sm md:text-base lg:text-lg">
          <p className="md:my-[90px] lg:my-[165px] lg:w-[600px]">
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
          <p className="font-hallelujah font-bold text-center mt-[40px] md:text-left text-5xl md:text-6xl">
            Milton Kawirpi
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChefNotes;
