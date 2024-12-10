const ImageSection = ({ data = {} }) => {
  const specsList = [
    {
      icon: "/images/request/request1.svg",
      num: data.gas,
      unit: "GAS",
    },
    {
      icon: "/images/request/request2.svg",
      num: data.seats,
      unit: "SEATS",
    },
    {
      icon: "/images/request/request3.svg",
      num: data.horse_power,
      unit: 'HORSE POWER',
    },
  ];

  const files = data.files || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col  md:flex-row gap-4 md:gap-6  md:justify-center">
        {/* Main Image */}
        <div className="flex-1 max-w-[348px] md:max-w-[583.15px] w-full justify-self-center">
          {files.length ? (
            <img
              className="w-full rounded-lg aspect-[582/389] object-cover"
              src={`${process.env.REACT_APP_API_URL}/${files[0].file_name}`}
              alt="Main vehicle view"
            />
          ) : (
            <div className="w-full rounded-lg aspect-[16/9] bg-gray-800" />
          )}
        </div>

        {/* Thumbnails */}
        <div className="flex md:flex-col max-w-[348px] gap-3 md:gap-4 overflow-x-auto  md:justify-center md:overflow-x-visible">
          {[...Array(4)].map((_, index) => (
            <div
              key={`preview-${index}`}
              className="flex-shrink-0 w-[78px] md:w-32"
            >
              {files.length > index + 1 ? (
                <img
                  className="w-full rounded aspect-square md:aspect-[128/85] object-cover"
                  src={`${process.env.REACT_APP_API_URL}/${files[index + 1].file_name}`}
                  alt={`Vehicle preview ${index + 1}`}
                />
              ) : (
                <div className="w-full rounded aspect-square md:aspect-[128/85] bg-gray-800" />
              )}
            </div>
          ))}
        </div>

        {/* Specs */}
        <div className="md:w-32 max-w-[348px]">
          <div className="flex md:flex-col items-center justify-between gap-4 mb-4">
            <div className="h-[2px] md:w-full bg-gradient-to-r to-[#A5FF2B] from-transparent opacity-35 flex-1 md:hidden  " />
            <h2 className="font-syne font-semibold text-[#A1A1A1] text-lg">
              SPECS
            </h2>
            <div className="h-[2px] md:w-full bg-gradient-to-r from-[#A5FF2B] to-transparent opacity-35 flex-1 md:hidden " />
          </div>

          <div className="grid grid-cols-3 md:grid-cols-1 md:gap-9 gap-3">
            {specsList.map((item, index) => (
              <div
                key={`spec-${index}`}
                className="p-2 aspect-[107/89]  md:aspect-[126/89] rounded border border-[#424448] bg-[#FFFFFF12] backdrop-blur-sm"
              >
                <div className="flex flex-col items-center gap-1">
                  <img
                    className="w-6 h-6 md:w-6 md:h-6"
                    src={item.icon}
                    alt=""
                  />
                  <div className="font-syne font-bold text-white text-lg md:text-[20px] md:leading-6">
                    {item.num}
                  </div>
                  <div className="text-[#A1A1A1] text-[12px] leading-3 ">
                    {item.unit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
