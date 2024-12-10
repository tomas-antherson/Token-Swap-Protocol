import HeaderSection from "./HeaderSection";
import CategoryPagination from "./pagination";
import { BrandsSection } from "../home/brands";
import { useEffect, useState } from "react";
import { getService } from "../../utils/services";
import Car from "../../components/car";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Category = () => {
  const [CateList, setCate_List] = useState([]);

  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    getService("/categories").then((res) => {
      if (res) {
        setCate_List(res.data);
      }
    });
  }, []);

  return (
    <div >
      <HeaderSection />
      <BrandsSection />
      <div className="p-12  px-0 md:px-32 md:py-16 max-w-[1440px] m-auto ">
        <div className="flex flex-col gap-[64px]  pb-[64px] px-10 md:px-0">
          <div className="flex flex-col lg:flex-row justify-between items-end">
            <div className="text-base md:text-[32px] font-semibold tracking-[-2%] leading-4 md:leading-[40.32px] text-[#FFFFFF] text-left mb-7 md:mb-0 pb-14 lg:pb-0  max-sm: w-full  ">
              Cars for every taste and budget,
              <br /> available for rent at your convenience
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-fit  ">
              <div className="w-full  md:w-[220px] h-[48px] gap-[10px]">
                <div className="relative">
                  <select
                    id="countries"
                    className="h-12 border border-[#D6D2D2] text-[#D6D2D2] bg-transparent text-base rounded-lg block w-full py-2.5 px-4 pr-12 focus:outline-none appearance-none"
                  >
                    <option className="text-[#D6D2D2] bg-black">
                      Sort by Price
                    </option>
                    <option value="US" className="text-[#D6D2D2] bg-black">
                      Sort by Area
                    </option>
                    <option value="CA" className="text-[#D6D2D2] bg-black">
                      Sort by Color
                    </option>
                    <option value="FR" className="text-[#D6D2D2] bg-black">
                      Sort by Type
                    </option>
                  </select>

                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#D6D2D2] text-xl">
                    <MdOutlineKeyboardArrowDown />
                  </span>
                </div>
              </div>
              <div className="w-full  md:w-[220px] h-[48px] gap-[10px]">
                <div className=" relative">
                  <select
                    id="countries"
                    className="h-12 border border-[#D6D2D2] text-[#D6D2D2] bg-transparent text-base rounded-lg block w-full py-2.5 px-4 pr-12 focus:outline-none appearance-none"
                  >
                    <option className="text-[#D6D2D2] bg-black">
                      Sort by Popularity
                    </option>
                    <option value="US" className="text-[#D6D2D2] bg-black">
                      Sort by Area
                    </option>
                    <option value="CA" className="text-[#D6D2D2] bg-black">
                      Sort by Color
                    </option>
                    <option value="FR" className="text-[#D6D2D2] bg-black">
                      Sort by Type
                    </option>
                  </select>
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#D6D2D2] text-xl">
                    {" "}
                    <MdOutlineKeyboardArrowDown />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[64px]">
            {currentItems.map(
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
        </div>

        <CategoryPagination
          setCurrentItems={setCurrentItems}
          items={CateList}
          itemsPerPage={9}
        />

      </div>
    </div>
  );
};

export default Category;
