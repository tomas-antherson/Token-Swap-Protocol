export default function Client({ avatar, name, resp, desc, stars }) {
  return (
    <div className="border border-[#3A3B3F] p-5 min-w-full md:min-w-0 md:ml-8 mb-10">
      <div className="flex flex-row mb-5">
        <img className="w-14 h-14 rounded-full" src={avatar} />
        <div className="ml-2">
          <div className="font-syne font-bold text-base leading-6 tracking-tight text-white text-left">
            {name}
          </div>
          <div className="font-syne font-normal text-sm leading-[19.6px] tracking-tight text-[#A1A1A1] mb-3 text-left">
            {resp}
          </div>
        </div>
      </div>
      <div className="font-syne font-normal text-sm leading-[19.6px] text-[#A1A1A1] mb-5 text-left text-wrap overflow-hidden text-ellipsis line-clamp-3">
        {desc}
      </div>
      <div className="flex flex-row gap-1">
        {Array(stars)
          .fill(1)
          .map((_, index) => (
            <img key={index} className="w-5 h-5" src="/images/star.png" />
          ))}
      </div>
    </div>
  );
}
