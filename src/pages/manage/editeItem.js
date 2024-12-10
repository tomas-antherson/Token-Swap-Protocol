import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { postService, putService } from "../../utils/services";

const EditeItem = ({ setAddItemModal, data }) => {
  const [car_name, setCarName] = useState("");
  const [daily_rate, setDailyRate] = useState(0);
  const [weekly_rate, setWeeklyRate] = useState(0);
  const [seats, setSeats] = useState(1);
  const [gas, setGas] = useState("");
  const [horse_power, sethorsePower] = useState(0);

  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState();
  const [details, setdetails] = useState([]);
  const thumbnailRef = useRef(null);
  const detailRef = useRef(null);
  const detailRefSingle = useRef(null);
  const [imageToChange, setImamageToChange] = useState(0);
  const [changedImages, setChangedImages] = useState([]);

  useEffect(() => {
    setCarName(data.car_name);
    setDailyRate(data.daily_rate);
    setWeeklyRate(data.weekly_rate);
    setGas(data.gas);
    sethorsePower(data.horse_power);
    setDescription(data.description);
  }, [data]);

  const handleSave = async () => {
    if (!car_name) {
      toast.error("Please input the name of the car");
      return;
    }
    let files = [];
    const formData = new FormData();
    if (thumbnail) formData.append("carFiles", thumbnail);
    if (details && details.length > 0) {
      for (const file of details) {
        formData.append("carFiles", file); // Key name matches backend
      }
    }
    if (thumbnail || details.length) {
      const response = await postService("/files/upload", formData, {
        "Content-Type": "multipart/form-data",
      });
      if (response) {
        files = response.data.files;
      }
    }
    const res = await putService(`/categories/${data.category_id}`, {
      car_name,
      daily_rate,
      weekly_rate,
      seats,
      gas,
      horse_power,
      description,
      files,
      changes: changedImages
        .filter(
          (value, index, self) => self.indexOf(value) === index && value < 5
        )
        .sort(),
    });
    if (res) toast.success("Updated successfuly");
    setAddItemModal(null);
  };

  const getLength = () => {
    return data.files.length - 1 > details.length
      ? data.files.length - 1
      : details.length;
  };

  return (
    <>
      <input
        type="file"
        onChange={(e) => {
          setThumbnail(e.target.files[0]);
          setChangedImages((prev) => [...prev, 0]);
        }}
        ref={thumbnailRef}
        className="hidden"
      />
      <input
        type="file"
        onChange={(e) => {
          if (details.length < 4) {
            setdetails([...details, ...e.target.files].splice(0, 4));
            setChangedImages((prev) => [
              ...prev,
              ...[...details, ...e.target.files].map((_, id) => id + 1),
            ]);
          } else {
          }
        }}
        multiple={true}
        ref={detailRef}
        className="hidden"
      />
      <input
        ref={detailRefSingle}
        type="file"
        onChange={(e) => {
          if (!e.target.files.length) return;
          if (getLength() > imageToChange) {
            details[imageToChange] = e.target.files[0];
            setdetails([...details]);
            setChangedImages((prev) => [...prev, imageToChange + 1]);
          } else {
            details[getLength()] = e.target.files[0];
            setdetails([...details]);
            setChangedImages((prev) => [...prev, getLength()]);
          }

          setImamageToChange();
        }}
        className="hidden"
      />

      <div className="fixed flex justify-center items-center left-0 right-0 bottom-0 top-0 text-white z-[999]">
        <div
          onClick={() => setAddItemModal(false)}
          className="fixed left-0 right-0 bottom-0 top-0 bg-black opacity-60"
        ></div>

        <div className="m-[18px] sm:m-auto p-10 max-w-[800px] max-h-[80vh] sm:max-h-[90vh] overflow-auto w-full h-full z-10 bg-[#151515] rounded-md">
          <div className="flex flex-col gap-4">
            {/* Main Image Upload */}
            <div className="relative aspect-[701/369] w-full bg-[#383838] rounded-md overflow-hidden">
              {thumbnail || (data.files && data.files.length > 0) ? (
                <img
                  src={
                    thumbnail
                      ? URL.createObjectURL(thumbnail)
                      : `${process.env.REACT_APP_API_URL}/${data.files[0]}`
                  }
                  alt="Car thumbnail"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center" />
              )}

              <button
                onClick={() => thumbnailRef.current?.click()}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-6 py-4 bg-[#A5FF2B] rounded hover:bg-[#94e627] transition-colors"
              >
                <img
                  className="w-6 h-6 md:w-8 md:h-8"
                  src="/images/upload.svg"
                  alt=""
                />
                <span className="text-black whitespace-nowrap font-medium">
                  Upload new photo
                </span>
              </button>
            </div>

            {/* Detail Images Grid */}
            <div className=" flex justify-between gap-4 overflow-x-auto md:overflow-hidden">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setImamageToChange(index);
                    if (detailRefSingle.current)
                      detailRefSingle.current.click();
                  }}
                  className="aspect-[162.5/125] w-[126px]  md:w-[162px] bg-[#383838] rounded-md overflow-hidden"
                >
                  {(details[index] ||
                    (data.files && data.files[index + 1])) && (
                    <img
                      src={
                        details[index]
                          ? URL.createObjectURL(details[index])
                          : `${process.env.REACT_APP_API_URL}/${
                              data.files[index + 1]
                            }`
                      }
                      alt={`Detail ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Upload Button */}
            <div className="flex items-center gap-4 text-xs md:text-sm">
              <button
                onClick={() => detailRef.current?.click()}
                className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-[#A5FF2B] rounded hover:bg-[#94e627] transition-colors"
              >
                <img
                  className="w-5 h-5 md:w-6 md:h-6"
                  src="/images/upload.svg"
                  alt=""
                />
              </button>
              <span>Upload up to 4 images of your choice</span>
            </div>
            <div className="justify-start flex flex-col items-start border-b border-[#A5FF2B] gap-1 w-full">
              <div className="text-[10px] md:text-[15px] opacity-25 md:opacity-100">
                Car Name
              </div>
              <input
                className=" border-none bg-none w-full bg-transparent focus:border-none focus:outline-none"
                value={car_name}
                onChange={(e) => setCarName(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between gap-8">
              <div className="justify-start flex flex-col items-start border-b border-[#A5FF2B] gap-1 w-full">
                <div className="text-[10px] md:text-[15px] opacity-25 md:opacity-100">
                  Input Daily Rate
                </div>
                <input
                  className=" border-none bg-none w-full bg-transparent focus:border-none focus:outline-none"
                  type="number"
                  min={0}
                  value={daily_rate}
                  onChange={(e) => setDailyRate(e.target.value)}
                />
              </div>
              <div className="justify-start flex flex-col items-start border-b border-[#A5FF2B] gap-1 w-full">
                <div className="text-[10px] md:text-[15px] opacity-25 md:opacity-100">
                  Input Weekly Rate
                </div>
                <input
                  className=" border-none bg-none w-full bg-transparent focus:border-none focus:outline-none"
                  value={weekly_rate}
                  type="number"
                  min={0}
                  onChange={(e) => setWeeklyRate(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-8">
              <div className="w-full">
                <div className="flex text-[#A5FF2B] text-[15px] md:text-2xl">
                  SPECIFICATIONS:
                </div>
                <div className=" mt-10 justify-start flex flex-col items-start border-b border-[#A5FF2B] gap-1 w-full">
                  <div className="text-[10px] md:text-[15px] opacity-25 md:opacity-100">
                    Seats
                  </div>
                  <input
                    className=" border-none bg-none w-full bg-transparent focus:border-none focus:outline-none"
                    type="number"
                    min={1}
                    value={seats}
                    onChange={(e) => setSeats(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="justify-start flex flex-col items-start border-b border-[#A5FF2B] gap-1 w-full">
                  <div className="text-[10px] md:text-[15px] opacity-25 md:opacity-100">
                    Gas
                  </div>
                  <input
                    className=" border-none bg-none w-full bg-transparent focus:border-none focus:outline-none"
                    value={gas}
                    onChange={(e) => setGas(e.target.value)}
                  />
                </div>
                <div className="mt-5 justify-start flex flex-col items-start border-b border-[#A5FF2B] gap-1 w-full">
                  <div className="text-[10px] md:text-[15px] opacity-25 md:opacity-100">
                    Horse Power
                  </div>
                  <input
                    className=" border-none bg-none w-full bg-transparent focus:border-none focus:outline-none"
                    value={horse_power}
                    onChange={(e) => sethorsePower(e.target.value)}
                    type="number"
                    min={0}
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 justify-start flex flex-col items-start border-b border-[#A5FF2B] gap-1 w-full">
              <div className="text-[10px] md:text-[15px] opacity-25 md:opacity-100">
                Description
              </div>
              <textarea
                rows={3}
                className=" border-none bg-none w-full bg-transparent focus:border-none focus:outline-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="w-full flex justify-end items-center md:mt-[14px] mt-[18px]">
              <button
                onClick={handleSave}
                className="md:w-[178px] w-full h-[57px] text-black text-[0.8rem] md:text-[1.2rem] bg-[#a5ff2b] px-[18px] cursor-pointer flex gap-2"
              >
                <div className="flex justify-between items-center w-full h-full">
                  <span className="text-black font-syne text-xl leading-[30px]">
                    save
                  </span>
                  <img
                    className="min-w-[57px] min-h-[57px]"
                    src="/images/tire_svgrepo.com.svg"
                    alt="tire"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditeItem;
