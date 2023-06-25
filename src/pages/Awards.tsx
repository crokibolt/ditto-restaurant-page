import { GiLaurels, GiLaurelCrown } from "react-icons/gi";
import trophy from "/src/assets/trophy-transparent.png";

function Awards() {
  return (
    <div
      id="awards"
      className="h-screen w-screen bg-[url('/src/assets/bg-awards.jpg')] bg-no-repeat bg-cover py-8 px-6 md:px-16 flex flex-col gap-8 text-yellow-400"
    >
      <h1 className="font-sans text-center text-3xl md:text-5xl">Our awards</h1>
      <div className="flex h-full overflow-y-hidden">
        <div className="w-[50vw] md:w-[60vw] h-full">
          <div className="my-[200px] md:pl-[20px] lg:pl-[190px] font-tangerine text-3xl md:text-4xl lg:text-5xl">
            <p className="relative mb-9">
              <span className="mr-[25px]">
                <GiLaurels className="absolute top-2 -left-3 md:-left-4 text-3xl md:text-5xl" />{" "}
                2
              </span>
              Amazing Food Competition
            </p>
            <p className="relative mb-9">
              <span className="mr-[25px]">
                <GiLaurels className="absolute top-2 -left-3 md:-left-4 text-3xl md:text-5xl" />{" "}
                3
              </span>
              Awesome Constest of Cuisine
            </p>
            <p className="relative mb-9">
              <span className="mr-[25px]">
                <GiLaurels className="absolute top-2 -left-3 md:-left-4 text-3xl md:text-5xl" />{" "}
                2
              </span>
              Adam Sandler's Pizzathon 48th Edition
            </p>
          </div>
        </div>
        <div className="shrink max-h-full h-full border-r-2 border-r-yellow-400"></div>
        <div className="flex-1 text-center font-tangerine text-3xl md:text-4xl lg:text-5xl my-auto">
          <img src={trophy} alt="" className="max-h-[600px] mx-auto mb-9" />
          <p className="relative mb-9">
            <span className="">
              <GiLaurelCrown className="text-4xl md:text-5xl inline mb-2" />
            </span>
            Super Duper Awesome Contest
          </p>
        </div>
      </div>
    </div>
  );
}

export default Awards;
