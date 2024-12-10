import { useNavigate } from "react-router-dom";

export default function Car({ img, name, desc, price, unit, id }) {
  const navigate = useNavigate();


  return (
    <div
      className="border-b-2 w-full max-w-sm mx-auto justify-self-center border-b-[#545454] hover:border-b-[#A5FF2B] text-left pb-3 transition-colors duration-300"
      onClick={() => {
        if (id) {
          navigate(`/request/${id}`);
        }
      }}
    >
      <div className="mb-3 cursor-pointer">
        <div className="relative w-full aspect-[9/10]">

          <img className="w-96 aspect-[9/10] object-cover" src={img} />
        </div>
      </div>
      <div className="space-y-2">
        <div className="font-syne  truncate font-normal text-sm sm:text-base text-[#A1A1A1] leading-6">
          {name}
        </div>
        <div className="font-syne font-bold tracking-tight text-xl sm:text-2xl leading-tight text-white truncate">
          {desc}
        </div>
        <div className="font-syne font-bold tracking-tight text-xl sm:text-2xl leading-tight text-white">
          ${price}
          <span className="font-syne font-normal text-sm sm:text-base text-white leading-6 ml-1">
            /{unit}
          </span>
        </div>
      </div>
    </div>);
}
