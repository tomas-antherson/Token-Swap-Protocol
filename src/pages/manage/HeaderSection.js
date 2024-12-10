const HeaderSection = () => {
  return (
    <div
      className="w-full pt-28 bg-gradient-to-b from-black to-transparent"
      style={
        {
          // opacity: 0.64
        }
      }
    >
      <div className="flex items-center justify-center ">
        <img src={`/images/dark-car.png`} alt="" />
      </div>
      <div className="content absolute w-full top-52 flex justify-center">
        <div className="flex flex-col gap-[8px]  items-center">
          <div className="text-[48px] font-semibold tracking-tight leading-[60.48px] text-[#FFFFFF]">
            Manager Cars
          </div>
          <div className="flex flex-row gap-[6px]">
            {/* <div className="manage-border w-[458px] h-1 border-t-2"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
