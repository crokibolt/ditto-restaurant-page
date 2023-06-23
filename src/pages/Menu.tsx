import bgCocktails from "/src/assets/bg-cocktails-1.jpg";
import bgFood from "/src/assets/bg-food-1.jpg";
import food from "../data/food";
import drinks from "../data/cocktails";
import { useState } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";

type DataItem = {
  name: string;
  ingredients: string;
  price: string;
};

type Props = {
  data: DataItem[];
  title: string;
  bg: string;
};

const transitions = ["translate-x-0", "-translate-x-[100vw]"];
function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(1);
  return (
    <div id="menu" className="w-screen h-screen relative">
      <h1 className="text-3xl md:text-5xl text-center text-yellow-400 bg-black tracking-wider font-semibold h-[75px] py-3">
        MENU
      </h1>
      <div
        className={
          "w-[200vw] flex transition-all duration-300 ease-in-out" +
          ` ${transitions[selectedMenu - 1]}`
        }
      >
        <MiniMenu data={drinks} title="Drinks" bg={bgCocktails} />
        <MiniMenu data={food} title="Food" bg={bgFood} />
      </div>
      {selectedMenu == 1 && (
        <div
          className={
            "absolute text-white top-[45vh] md:top-[65vh]  lg:top-[50vh] right-2 md:right-[45vw] lg:right-12 text-[25px] md:text-[50px] lg:text-[90px] cursor-pointer transition-all ease-in duration-100 hover:translate-x-4"
          }
          onClick={() => setSelectedMenu(2)}
        >
          <HiArrowSmRight />
        </div>
      )}
      {selectedMenu == 2 && (
        <div
          className={
            "absolute text-white top-[45vh] md:top-[65vh] lg:top-[50vh] left-2 md:left-[50vw] lg:left-12 text-[25px]  md:text-[50px] lg:text-[90px] cursor-pointer transition-all ease-in duration-100 hover:-translate-x-4"
          }
          onClick={() => setSelectedMenu(1)}
        >
          <HiArrowSmLeft />
        </div>
      )}
    </div>
  );
}

const MiniMenu = ({ data, title, bg }: Props) => {
  return (
    <div
      className="h-[calc(100vh-75px)] flex flex-col lg:flex-row flex-wrap gap-8 md:gap-16 lg:gap-0 w-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-yellow-400 font-tangerine text-5xl md:text-7xl text-center w-screen h-fit pt-12 flex-shrink-0">
        {title}
      </h2>
      <div className="w-screen flex justify-around gap-4 mt-[85px] md:mt-0 lg:pt-6 px-10 md:px-5 lg:px-10">
        <div className="text-white text-left">
          <MenuItem
            name={data[0].name}
            ingredients={data[0].ingredients}
            price={data[0].price}
          />
          <MenuItem
            name={data[1].name}
            ingredients={data[1].ingredients}
            price={data[1].price}
          />
          <MenuItem
            name={data[2].name}
            ingredients={data[2].ingredients}
            price={data[2].price}
          />
        </div>
        <div className="text-white text-right">
          <MenuItem
            name={data[3].name}
            ingredients={data[3].ingredients}
            price={data[3].price}
          />
          <MenuItem
            name={data[4].name}
            ingredients={data[4].ingredients}
            price={data[4].price}
          />
          <MenuItem
            name={data[5].name}
            ingredients={data[5].ingredients}
            price={data[5].price}
          />
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ name, ingredients, price }: DataItem) => {
  return (
    <div className="mb-3 md:mb-6 lg:mb-9">
      <p className="italic text-lg md:text-2xl lg:text-3xl font-semibold">
        {name}
      </p>
      <p className="text-sm md:text-base lg:text-lg">{ingredients}</p>
      <p className="text-sm md:text-base lg:text-xl">{price}</p>
    </div>
  );
};

export default Menu;
