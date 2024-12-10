const ApplySection = () => {
  return (
    <div className="absolute top-[520px] md:top-[650px] w-full  justify-center flex ">
      <div className="  bg-[#171717] md:w-[716px] w-[313px]    text-center ">
        <div className=" bg-green p-4  text-[20px]  font-semibold">
          Apply Now
        </div>
        <div className=" flex  md:h-72 h-80 justify-center items-center">
          <div className="flex-col">
            <div>
              <div className="text-green font-yapari text-2xl  md:text-[36px]  font-[400]  ">
                5690
              </div>
              <div className="text-[16px] font-[500] leading-10 text-[#fff]">
                Trips hosted
              </div>
            </div>
            <br />
            <div>
              <div className="text-green font-yapari text-2xl  md:text-[36px]  font-[400]">
                $300,000
              </div>
              <div className="text-[16px] font-[500] leading-10 text-[#fff]">
                Money paid out to Investors
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplySection;
