import React from "react";
import { useState, useEffect } from "react";
import Car from "../../components/car";
import { getService } from "../../utils/services";


const CarsSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getService("/categories").then((res) => {
      if (res&&res.data.length) {
        setData(res.data.splice(0, 3));
      }
    });
  }, []);


  return (
    <div className="p-12 md:px-32 md:pt-28  max-w-[1440px] m-auto">
      
      <div className="  grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-[64px]">
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
    </div>
  );
};

export default CarsSection;






// export const RideSection = () => {
  

//   return (
//     <div className="p-12 md:px-32 md:py-16 max-w-[1440px] m-auto">
//       <div className="text-white text-2xl md:text-5xl font-semibold font-syne leading-6 md:leading-[60.48px] tracking-tight text-left">
//         Ride To Destinations
//         <br />
//         With Maximum Comfort
//       </div>
//       <div className="text-[#A1A1A1] text-sm md:text-xl leading-[21px] md:leading-[30px] tracking-tight font-syne font-normal text-left mt-6">
//         Founded in Southern California, our mission is to offer an unparalleled
//         fleet of high-performance and exotic
//         <br />
//         vehicles that turn heads and ignite passions.
//       </div>
//       <div className="  grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[64px]">
//         {data.map(
//           ({ car_name, daily_rate, files, category_id, description }) => (
//             <Car
//               name={car_name}
//               key={category_id}
//               id={category_id}
//               desc={description}
//               price={daily_rate}
//               unit={"day"}
//               img={
//                 files.length
//                   ? `${process.env.REACT_APP_API_URL}/${files[0]}`
//                   : ""
//               }
//             />
//           )
//         )}
//       </div>
//     </div>
//   );
// };
