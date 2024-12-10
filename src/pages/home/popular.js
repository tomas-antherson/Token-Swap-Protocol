// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";
import Car from "../../components/car";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { useState, useEffect } from "react";

import { getService } from "../../utils/services";

export const PopularSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getService("/categories/popular").then((res) => {
      if (res && res.data.length) {
        setData(res.data);
      }
    });
  }, []);

  return (
    <div className="p-12 md:px-32 md:py-16 max-w-[1440px] m-auto">
      <div className="text-white text-2xl md:text-5xl font-semibold font-syne leading-6 md:leading-[60.48px] tracking-tight text-left">
        Most Popular Car Rental Deals
      </div>
      <div className="text-[#A1A1A1] text-sm md:text-xl leading-[21px] md:leading-[30px] tracking-tight font-syne font-normal text-left mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lorem
        sagittis, proin ut
        <br />
        lectus sed ut. Enim egestas enim id duis.
      </div>
      <div className="   grid-cols-1 md:grid-cols-3 gap-6 md:gap-[64px]  hidden md:grid">
        {data.map(
          ({ car_name, daily_rate, files, category_id, description }) => (
            <Car
              name={car_name}
              key={category_id}
              id={category_id}
              desc={description}
              price={daily_rate}
              unit={"day"}
              img={
                files.length
                  ? `${process.env.REACT_APP_API_URL}/${files[0]}`
                  : ""
              }
            />
          )
        )}
      </div>
      <Swiper
        navigation={{
          enabled: true,
          nextEl: ".slider-button-next",
          prevEl: ".slider-button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper md:!hidden mt-12"
      >
        {data.map(
          ({ car_name, daily_rate, files, category_id, description }) => (
            <SwiperSlide key={category_id}>
              <Car
                name={car_name}
                desc={description}
                price={daily_rate}
                unit={"day"}
                id={category_id}
                img={
                  files.length
                    ? `${process.env.REACT_APP_API_URL}/${files[0]}`
                    : ""
                }
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
      <div className="flex flex-row justify-between mt-3 md:hidden">
        <button className="slider-button-prev w-[30px] h-[30px] bg-[#A5FF2B] rounded-sm">
          <IoArrowBackSharp className="m-auto" />
        </button>
        <button className="slider-button-next w-[30px] h-[30px] bg-[#A5FF2B] rounded-sm">
          <IoArrowForwardSharp className="m-auto" />
        </button>
      </div>
    </div>
  );
};
