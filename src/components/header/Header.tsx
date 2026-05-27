import Button from "../ui/Button.tsx";
import Para from "../ui/Para.tsx";
import bgHero from "../../assets/images/bgHero.webp"

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-20 bg-white  px-4 py-10  md:py-20   md:px-10 md:justify-between lg:max-w-7xl lg:mx-auto">
      <div className="md:w-2/4 flex flex-col gap-6  ">
        <Para className="uppercase rounded-full text-violet-800 text-xs font-inter">
          the new standard of publishing
        </Para>
        <h1 className="text-3xl md:text-4xl font-bold leading-none tracking-normal text-left capitalize font-playfair text-neutral">
          Crafting <span className="italic">digital narritives</span> with the
          precision of a master typesetter.
        </h1>
        <Para className="text-xs text-secondary font-inter md:pr-8">
          ModernCMS blends the soul of traditional editorial workflows with
          high-performance cloud architecture. Empower your newsroom with a
          system built for speed, depth, and clarity
        </Para>
        <div className="flex gap-4">
          <Button className="  cursor-pointer bg-violet-800 hover:bg-violet-500 text-zinc-50 rounded-full  px-6 py-1 md:py-2 md:px-8 hover:-translate-y-0.5 active:translate-y-0.5  transition-all duration-100 text-xs ">
            Request a demo
          </Button>
          <Button className="  cursor-pointer bg-transparent border border-violet-800  text-violet-800 rounded-full  px-6 py-1 md:py-2 md:px-8 hover:-translate-y-0.5 active:translate-y-0.5  transition-all duration-100  text-xs">
            View ecosystem
          </Button>
        </div>
      </div>
      <div className="md:w-2/4 h-full">
        <img
          src={bgHero}
          alt="Header Image"
          className="w-full object-center object-cover h-80 md:h-96  rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Header;
