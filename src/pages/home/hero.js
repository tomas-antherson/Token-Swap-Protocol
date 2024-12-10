import { BiSearchAlt } from "react-icons/bi";

export const HeroSection = () => {
  return (
    <div className="pt-20 md:pt-[124px] md:bg-hero-pattern bg-cover md:pb-10 flex flex-col items-center relative bg-center">
      <div className="flex md:flex-row flex-col gap-6 pt-14 max-w-[1440px] m-auto px-12 mb-10 md:mb-32 z-10">
        <div className="font-semibold font-syne text-white text-2xl md:text-7xl tracking-tight leading-6 md:leading-[52.56px] text-left">
          Rent Your
          <br />
          Dream Exotic Cars.
        </div>
        <div className="flex flex-col gap-7">
          <div className="font-normal font-syne text-white text-sm md:text-xl tracking-tight leading-[21px] md:leading-[30px] md:max-w-[503px] text-left">
            Whether it’s for a special event or a day of indulgence, we ensure a
            seamless rental experience that’s as luxurious as the cars we
            provide.
          </div>
          <div className="flex flex-row md:gap-4 gap-3">
            <div className="w-[130px] md:w-[154px] h-[56px] md:text-base text-black text-sm  bg-[#a5ff2b] px-[1rem] md:px-[1.4rem] py-[0.6rem] items-center md:py-[1rem] cursor-pointer hover:bg-white transition-all duration-300 ease-in-out flex gap-2">
              Book Now
              <img
                className="h-[1.2rem]  md:h-auto"
                src="/arrow-right.svg"
                alt=""
              />
            </div>
            <div className="w-[130px] md:w-[154px] h-[56px] md:text-base text-sm text-[#a5ff2b] border-solid border-[1px] border-[#a5ff2b] items-center px-[1rem] md:px-[1.4rem] py-[0.6rem] md:py-[1rem] cursor-pointer hover:bg-white transition-all duration-300 ease-in-out justify-center flex gap-2">
              How It Works
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden px-5 h-[220px] w-full z-10">
        <div className="w-full h-[220px] bg-hero-pattern bg-cover bg-center"></div>
      </div>
      <div className="py-4 flex flex-row bg-[#242528] w-fit items-center rounded-sm md:rounded-none px-4 md:px-0 -mt-7 md:mt-0 z-10">
        <div className="font-medium text-xs leading-[8.76px] font-syne tracking-tight text-white md:hidden">
          Search
        </div>
        <div className="md:flex flex-row gap-2 items-center px-6 border-r border-[#424448] hidden">
          <img src="/images/car.svg" alt="" className="w-[24px] h-[24px]" />
          <input
            className="text-white text-lg tracking-tight leading-7 font-normal font-syne border-0 bg-transparent outline-none w-24"
            placeholder="Select Car"
          />
        </div>
        <div className="md:flex flex-row gap-2 items-center px-6 border-r border-[#424448] hidden">
          <img src="/images/Vector.svg" alt="" className="w-[24px] h-[24px]" />
          <input
            className="text-white text-lg tracking-tight leading-7 font-normal font-syne border-0 bg-transparent outline-none w-24"
            placeholder="Location"
          />
        </div>
        <div className="md:flex flex-row gap-2 items-center px-6 border-r border-[#424448] hidden">
          <img
            src="/images/calendar.svg"
            alt=""
            className="w-[24px] h-[24px]"
          />
          <input
            className="text-white text-lg tracking-tight leading-7 font-normal font-syne border-0 bg-transparent outline-none w-24"
            placeholder="Pickup Date"
          />
        </div>
        <div className="md:flex flex-row gap-2 items-center px-6 hidden">
          <img
            src="/images/calendar.svg"
            alt=""
            className="w-[24px] h-[24px]"
          />
          <input
            className="text-white text-lg tracking-tight leading-7 font-normal font-syne border-0 bg-transparent outline-none w-24"
            placeholder="Return Date"
          />
        </div>
        <div className="px-0 md:px-6 ml-4 md:ml-0">
          <button className="w-[34px] h-[34px] rounded-[3px] md:w-[97px] md:h-[56px] md:rounded-none md:text-[16px] text-black text-[0.8rem]  bg-[#a5ff2b] hover:bg-white transition-all duration-300 ease-in-out flex gap-2 items-center justify-center">
            <span className="hidden md:block">Search</span>
            <BiSearchAlt className="block md:hidden w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
      <div className="hidden md:block absolute top-0 left-0 w-full h-full opacity-30 z-0 bg-[#1C1C1C]"></div>
    </div>
  );
};
