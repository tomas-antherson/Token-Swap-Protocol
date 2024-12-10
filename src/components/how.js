import { LuCalendarDays } from "react-icons/lu";
import { FaCarRear } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
import { LuClipboardCheck } from "react-icons/lu";

export default function How({ icon, title, desc }) {
  return (
    <div className="flex flex-row md:flex-col border border-[#424448] hover:border-[#A5FF2B] text-left hover:bg-[#A5FF2B] p-5 group gap-5">
      <div className="mb-0 md:mb-7">
        {icon === "car" ? (
          <FaCarRear className="w-[25px] h-[25px] md:w-10 md:h-10 text-white group-hover:text-[#171717]" />
        ) : icon === "calendar" ? (
          <LuCalendarDays className="w-[25px] h-[25px] md:w-10 md:h-10 text-white group-hover:text-[#171717]" />
        ) : icon === "card" ? (
          <FaRegCreditCard className="w-[25px] h-[25px] md:w-10 md:h-10 text-white group-hover:text-[#171717]" />
        ) : icon === "check" ? (
          <LuClipboardCheck className="w-[25px] h-[25px] md:w-10 md:h-10 text-white group-hover:text-[#171717]" />
        ) : null}
      </div>
      <div>
        <div className="font-syne font-bold text-base md:text-2xl text-white leading-[21.12px] md:leading-[31.68px] tracking-tight group-hover:text-[#171717]">
          {title}
        </div>
        <div className="font-syne font-normal text-[10px] md:text-base text-[#A1A1A1] leading-4 md:leading-6 group-hover:text-[#171717]">
          {desc}
        </div>
      </div>
    </div>
  );
}
