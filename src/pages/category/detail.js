
const Detail = () => {



  return (
    <>
      <div
        className="w-full h-[275px]"
        style={{
          backgroundImage: "url(/images/category_detail.jpg)",
          backgroundSize: "100%",
        }}
      >
        <div className="content w-full h-full flex justify-center items-center">
          <div className="flex flex-col gap-[8px]  items-center">
            <div className="text-[48px] font-semibold tracking-tight leading-[60.48px] text-[#FFFFFF]">
              Lamborghini Huracan
            </div>
            <div className="flex flex-row gap-[6px]">
              <div>Home</div>
              <div>&gt;</div>
              <div>Lamborghini Huracan</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[60px] pb-[76px] flex flex-col gap-[58px]">
        <div className="w-full flex justify-center">
          <div className="flex flex-row gap-[20px] items-center" id="abc">
            <div className="w-[583px] h-[390px] rounded-[4px]">
              <img
                src="/images/car1.png"
                alt=""
                className="w-full h-full object-cover rounded-[4px]"
              />
            </div>
            <div className="flex flex-col gap-[18px]">
              <div>
                <img
                  src="/images/car1.png"
                  alt=""
                  className="w-[128px] h-[85px] rounded-[4px]"
                />
              </div>

              <div>
                <img
                  src="/images/car1.png"
                  alt=""
                  className="w-[128px] h-[85px] rounded-[4px]"
                />
              </div>

              <div>
                <img
                  src="/images/car1.png"
                  alt=""
                  className="w-[128px] h-[85px] rounded-[4px]"
                />
              </div>

              <div>
                <img
                  src="/images/car1.png"
                  alt=""
                  className="w-[128px] h-[85px] rounded-[4px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[24px] px-[24px]">
              <div className="text-[17.29px] h-[40px] leading-[20.74px] tracking-[-0.26%] text-[#A1A1A1]">
                SPECS
              </div>
              <div className="rounded-[4.32px] w-[126.5px] border-[1px] border-[#424448] py-[8.5px] px-[17.74] gap-[3.5]">
                <div className="w-full flex flex-col gap-[3px] justify-center">
                  <div className="flex justify-center">
                    <img
                      src="/images/gas.svg"
                      alt=""
                      className="w-[26px] h-[26px] "
                    ></img>
                  </div>
                  <div className="text-[21.61px] leading-[26px] tracking-[-0.26%] font-bold text-white">
                    800 KM
                  </div>
                  <div className="text-[10.8px] leading-[12.96px] text-[#A1A1A1] tracking-[1.08%]">
                    GAS
                  </div>
                </div>
              </div>
              <div className="rounded-[4.32px] w-[126.5px] border-[1px] border-[#424448] py-[8.5px] px-[17.74] gap-[3.5]">
                <div className="w-full flex flex-col gap-[3px] justify-center">
                  <div className="flex justify-center">
                    <img
                      src="/images/seat.svg"
                      alt=""
                      className="w-[26px] h-[26px] "
                    ></img>
                  </div>
                  <div className="text-[21.61px] leading-[26px] tracking-[-0.26%] font-bold text-white">
                    4
                  </div>
                  <div className="text-[10.8px] leading-[12.96px] text-[#A1A1A1] tracking-[1.08%]">
                    SEATS
                  </div>
                </div>
              </div>
              <div className="rounded-[4.32px] w-[126.5px] border-[1px] border-[#424448] py-[8.5px] px-[17.74] gap-[3.5]">
                <div className="w-full flex flex-col gap-[3px] justify-center">
                  <div className="flex justify-center">
                    <img
                      src="/images/power.svg"
                      alt=""
                      className="w-[26px] h-[26px] "
                    ></img>
                  </div>
                  <div className="text-[21.61px] leading-[26px] tracking-[-0.26%] font-bold text-white">
                    335
                  </div>
                  <div className="text-[10.8px] leading-[12.96px] text-[#A1A1A1] tracking-[1.08%]">
                    HORSE POWER
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[496px] border-solid border-[1px] border-[#3A3B3F] p-[24px] flex flex-col gap-[24px]">
            <div className="flex flex-row gap-[10px]">
              <div className="w-1/2 p-[8px] flex justify-between bg-[#424448] rounded-[8px]">
                <div className="flex flex-row ">
                  <p className="text-[10px] text-white leading-[18px]">
                    Price :
                  </p>
                  <p className="text-[13px] leading-[18px] text-[#A5FF2B]">
                    1,000$/day
                  </p>
                </div>
                <div className="text-[10px] text-white h-full items-center">
                  Daily
                </div>
              </div>
              <div className="w-1/2 p-[8px] flex justify-between bg-[#424448] rounded-[8px]">
                <div className="flex flex-row ">
                  <p className="text-[10px] text-white leading-[18px]">
                    Price :
                  </p>
                  <p className="text-[13px] leading-[18px] text-[#A5FF2B]">
                    4,000$/week
                  </p>
                </div>
                <div className="text-[10px] text-white h-full items-center">
                  Week
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[8px]">
              <button className="w-full bg-[#A5FF2B] h-[32px]  items-center  text-[10px] leading-[18px]">
                Joyride
              </button>
              <button className="w-full border-[#424448] border-[1px] h-[32px]  items-center text-white text-[10px] leading-[18px]">
                Wedding
              </button>
              <button className="w-full border-[#424448] border-[1px] h-[32px]  items-center text-white text-[10px] leading-[18px]">
                Corporate
              </button>
            </div>
            <div className="flex flex-col gap-[24px]">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-[#171717] text-white px-[16px]  py-[12px] border-[1px] border-[#424448] rounded-[8px]  w-full focus:outline-none focus:border-gray-500 "
                />
              </div>
            </div>
            <div>
              <input
                type="date"
                placeholder="Email"
                className="bg-[#171717] text-white px-[16px]  py-[12px] border-[1px] border-[#424448] rounded-[8px]  w-full focus:outline-none focus:border-gray-500 "
              />
            </div>
            <div className="flex flex-col gap-[24px]">
              <div>
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="bg-[#171717] text-white px-[16px]  py-[12px] border-[1px] border-[#424448] rounded-[8px]  w-full focus:outline-none focus:border-gray-500 "
                />
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-[#171717] text-white px-[16px]  py-[12px] border-[1px] border-[#424448] rounded-[8px]  w-full focus:outline-none focus:border-gray-500 "
                />
              </div>
            </div>
            <div className="flex flex-row gap-[8px] justify-end p-[8px] bg-[#424448] rounded-[8px]  ">
              <p className="text-[14px] text-white leading-[25px]">
                1-6 Days :
              </p>
              <p className="text-[16px] leading-[19px] text-[#A5FF2B]">
                1,000$/week
              </p>
            </div>
            <button className="bg-[#A5FF2B] px-[16px] py-[12px]  text-[14px] leading-[17px] text-[#171717] w-full">
              Submit a Request
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
