const HeaderSection = ({ data = {} }) => {
  return (
    <div
      className="w-full md:h-[275px] h-[334px]"
      style={{
        backgroundImage: `url(${window.innerWidth < 395
          ? "/images/request_bg.jpg"
          : "/images/request_bg.jpg"
          })`,
        backgroundSize: "100%",
      }}
    >
      <div className="content absolute w-full top-40 flex justify-center">
        <div className="flex flex-col gap-[8px]  items-center md:px-auto ">
          <div className="text-[48px] font-semibold tracking-[-2%] leading-[60.48px] text-[#FFFFFF] md:text-center text-left">
            {data.car_name || ''}
          </div>
          <div className="w-full flex flex-row gap-[6px] md:justify-center justify-start md:text-center text-left">
            <div>Home</div>
            <div>&gt;</div>
            <div>{data.car_name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
