import { Link, useNavigate } from "react-router-dom";
import HeaderSection from "./HeaderSection";
import CategoryPagination from "./pagination";
import { useEffect, useState } from "react";
import Additem from "./additem";
import Confirm from "./confirm";
import { deleteService, getService } from "../../utils/services";
import toast from "react-hot-toast";
import EditItem from "./editItem";
import { useAuth } from "../../hooks/use-auth";

const Manage = () => {
  const [addItemModal, setAddItemModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState("");
  const [editeModal, setEditModal] = useState(null);

  const [CateList, setCate_List] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);

  const { isLoggedIn, loading } = useAuth();
  const navigate = useNavigate();

  const handleConfirm = async () => {
    const res = await deleteService(`/categories/${confirmModal}`);
    if (res) {
      toast.success(res.data.message);
    }
  };

  useEffect(() => {
    if (!isLoggedIn && !loading) navigate("/signin");
  }, [loading, isLoggedIn]);

  useEffect(() => {
    if (!addItemModal && !confirmModal && !editeModal) {
      getService("/categories").then((res) => {
        if (res) console.log("==========>", res.data);
        if (res) setCate_List(res.data);
      });
    }
  }, [addItemModal, confirmModal, editeModal]);

  return (
    <div >
      <HeaderSection />

      <div className="max-w-[1240px] mx-auto px-12 md:px-0">
        <div className="flex flex-col gap-[64px] pt-[80px] pb-1 md:pb-[64px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[64px]">
            {currentItems.map((item, index) => (
              <Link to={`#`} key={index}>
                <div className="flex flex-row gap-[32px] justify-center">
                  <div className="relative border-b-2 w-full max-w-sm mx-auto justify-self-center border-b-[#545454] hover:border-b-[#A5FF2B] text-left pb-3 transition-colors duration-300">
                    <div className="mb-3 cursor-pointer">
                      <div className="w-full aspect-[9/10]">
                        <img
                          src={`${item.files.length
                            ? `${process.env.REACT_APP_API_URL}/${item.files[0]}`
                            : ""
                            }`}
                          /* src={`${item.image}`} */ alt=""
                          className="w-96 aspect-[9/10] object-cover"
                        />
                        <div className="absolute right-2 top-2">
                          <button
                            onClick={() => setEditModal(item)}
                            className="bg-[#282828] px-6 py-1 text-md text-[#A5FF2B]"
                          >
                            Edit
                          </button>
                        </div>

                        <div className="absolute right-2 bottom-2">
                          <button
                            onClick={() => setConfirmModal(item.category_id)}
                            className="bg-[#ffffff] px-2 rounded-sm py-2 text-md text-[#A5FF2B]"
                          >
                            <img src={`/images/delete.svg`} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-syne  truncate font-normal text-sm sm:text-base text-[#A1A1A1] leading-6">
                        {item.car_name}
                      </div>
                      <div className="font-syne font-bold tracking-tight text-xl sm:text-2xl leading-tight text-white truncate">
                        {item.description}
                      </div>
                      <div className="font-syne font-bold tracking-tight text-xl sm:text-2xl leading-tight text-white">
                        ${item.daily_rate}
                        <span className="font-syne font-normal text-sm sm:text-base text-white leading-6 ml-1">
                          /day
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            <div className="flex flex-row gap-[32px]  max-md:w-96 max-md:justify-self-center items-center justify-center">
              <div className="relative flex flex-col gap-[16px] ">
                <div className="relative">
                  <div className="flex flex-col gap-6 m-20">
                    <button
                      onClick={() => setAddItemModal(!addItemModal)}
                      className="bg-[#7baa38cc] sm:bg-[#282828] px-6 py-4 sm:py-6 text-md text-[#A5FF2B] rounded-md"
                    >
                      <img
                        className="w-[30px] sm:w-auto"
                        src="/images/plus.svg"
                        alt=""
                      />
                    </button>
                    <a className="hidden sm:block underline text-white text-lg cursor-pointer">
                      Add item
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {addItemModal && <Additem setAddItemModal={setAddItemModal} />}
        {editeModal && (
          <EditItem data={editeModal} setAddItemModal={setEditModal} />
        )}
        {confirmModal && (
          <Confirm
            handleConfirm={handleConfirm}
            setConfirmModal={setConfirmModal}
          />
        )}
        <div className="mb-20">
          <CategoryPagination
            itemsPerPage={5}
            setCurrentItems={setCurrentItems}
            items={CateList}
          />
        </div>

      </div>
    </div>
  );
};

export default Manage;
