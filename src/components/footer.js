import Button from "./button";
import InputGray from "./input_gray";

export default function Footer() {
  return (
    <div>
      <div className="md:hidden w-full flex justify-center mb-5 scale-75">
        <img className="mb-2" src="/logo.svg" alt="" />
      </div>

      <div className="content max-w-[1440px] m-auto flex flex-col items-center justify-center py-[2rem] md:pt-[0rem] md:pb-[6rem] px-[2rem] md:px-[3rem] text-[1.2rem] bg-black md:bg-transparent text-left">
        <div className="hidden md:flex w-full items-start justify-between">
          <div className="flex flex-col items-start justify-center gap-2">
            <img className="mb-2" src="/logo.svg" alt="" />
            <div className="flex gap-2 items-center">
              <img src="/gmail.svg" alt="" />
              <span className="text-base text-white leading-6 font-syne">
                info@bigtimeridez.com
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/location.svg" alt="" />
              <span className="text-base text-white leading-6 font-syne">
                4140 California. place of work 31134
              </span>
            </div>
          </div>

          <div className="flex flex-col text-[1.2rem] gap-4 items-start">
            <div className="font-syne font-bold text-lg leading-[27.9px] tracking-tight">
              Company
            </div>
            <a
              href="#"
              className="text-base text-white leading-6 font-syne hover:text-[#A1A1A1]"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-base text-white leading-6 font-syne hover:text-[#A1A1A1]"
            >
              Services
            </a>
            <a
              href="#"
              className="text-base text-white leading-6 font-syne hover:text-[#A1A1A1]"
            >
              Contact Us
            </a>
          </div>

          <div className="flex flex-col text-[1.2rem] gap-4 items-start">
            <div className="font-syne font-bold text-lg leading-[27.9px] tracking-tight">
              Company Service
            </div>
            <a
              href="#"
              className="text-base text-white leading-6 font-syne hover:text-[#A1A1A1]"
            >
              Pricing Plan
            </a>
            <a
              href="#"
              className="text-base text-white leading-6 font-syne hover:text-[#A1A1A1]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-base text-white leading-6 font-syne hover:text-[#A1A1A1]"
            >
              Terms & Conditions
            </a>
          </div>

          <div className="flex flex-col text-[1.2rem] gap-4 items-start text-left">
            <div className="font-syne font-bold text-lg leading-[27.9px] tracking-tight">
              Subscribe to Our Newsletter
            </div>
            <span className="text-base text-white leading-6 font-syne">
              Enter your email below to be the first to know about
              <br /> new collections.
            </span>
            <InputGray />
          </div>
        </div>

        <div className="hidden md:block w-full border-solid border-t-[2px] border-[#323232] mt-8 mb-4"></div>
        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-[1rem] md:gap-0">
          <div className="text-[0.8rem] md:text-[1.2rem]">
            ©2024 Bigtimeridez All Rights are reserved️{" "}
          </div>
          <div className="flex gap-4  md:gap-8">
            <a className="w-[20px] md:w-[32px]" href="#">
              <img className="w-full" src="/facebook.svg" alt="" />
            </a>
            <a className="w-[20px] md:w-[32px]" href="#">
              <img className="w-full" src="/instagram.svg" alt="" />
            </a>
            <a className="w-[20px] md:w-[32px]" href="#">
              <img className="w-full" src="/x.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
