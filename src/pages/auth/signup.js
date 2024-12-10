import { useState } from "react";
import Header from "../../components/header";
import toast from "react-hot-toast";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../../utils/validation";
import { postService } from "../../utils/services";
import { Navigate, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChange = (field, value) => {
    switch (field) {
      case "firstname":
        setUserData({ ...userData, firstname: value });
        break;
      case "lastname":
        setUserData({ ...userData, lastname: value });
        break;
      case "email":
        setUserData({ ...userData, email: value });
        break;
      case "password":
        setUserData({ ...userData, password: value });
        break;
    }
  };

  const handleSignUp = async () => {
    const { firstname, lastname, email, password } = userData;
    if (!validateName(firstname)) {
      toast.error(
        "Please enter a valid first name (2–50 characters, only letters and hyphens)."
      );
      return;
    }

    if (!validateName(lastname)) {
      toast.error(
        "Please enter a valid last name (2–50 characters, only letters and hyphens)."
      );
      return;
    }

    if (!validateEmail(email)) {
      toast.error(
        "Please enter a valid email address (e.g., user@example.com)."
      );
      return;
    }

    if (!validatePassword(password)) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    const res = await postService("/auth/signup", userData);
    if (res) {
      toast.success("Sign-up was successful!");
      navigate("/");
    }
  };

  return (
    <>
      <div
        className="h-screen	w-screen overflow-hidden"
        style={{
          backgroundImage: `url(${window.innerWidth < 395
            ? "/images/auth_mobile_bg.jpg"
            : "/images/auth_desktop_bg.jpg"
            })`,
        }}
      >
        {/* Header */}
        <Header />

        {/* SignIn Form */}
        <div className="w-full h-full flex justify-center items-center pt-28 md:pt-[5%]">
          <div
            className="w-full h-fit pb-20 md:pb-0 md:h-auto md:max-w-[972px] md:max-h-[586px], max-w-[343px] max-h-[558px], rounded border-2 border-transparent bg-[#D9D9D91A]"
            style={{
              borderImage:
                "linear-gradient(238.03deg, rgba(165, 255, 43, 0) 12.86%, rgba(100, 154, 28, 0) 49.63%, rgba(165, 255, 43, 0) 87.14%)",
              borderImageSlice: 1,
              boxShadow: "0px 4px 42.6px 10px rgba(0, 0, 0, 0.698)",
            }}
          >
            <div className="md:px-[104px] px-[22px]">
              {/* SignIn Logo */}
              <div className="md:my-[73px] my-[55px]">
                <div className="w-full h-full md:flex hidden justify-center items-center">
                  <div className="w-full max-w-[457px] flex flex-col gap-1">
                    <div className="max-w-[457px] w-full relative">
                      {/* LOGIN text desktop */}
                      <div className="w-full flex justify-center items-center">
                        <span className="uppercase font-syne text-center text-7xl font-extrabold text-white leading-[86.4px] tracking-tight">
                          SIGNUP
                        </span>
                      </div>
                      {/* LOGIN green line */}
                      <div className="absolute top-0 h-full w-full md:flex hidden justify-between items-center">
                        <div className="bg-gradient-to-r from-[#A5FF2B] to-transparent -rotate-180	w-[30px] h-[16px]" />
                        <div className="bg-gradient-to-r from-[#A5FF2B] to-transparent w-[30px] h-[16px]" />
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <span className="text-xl leading-[30px] font-normal	text-white  tracking-tight">
                        Sign-up to login !
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full md:hidden flex justify-start items-center">
                  <div className="flex flex-col gap-1">
                    <div className="w-auto flex gap-1 items-center">
                      <span className="uppercase font-syne text-center text-2xl font-extrabold text-white leading-[24px] tracking-tight">
                        SIGNUP
                      </span>
                      <div className="bg-gradient-to-r from-[#A5FF2B] to-transparent w-[41px] h-[16px]" />
                    </div>
                    <div className="flex justify-center items-center">
                      <span className="text-[11px] leading-[16.5px] font-normal text-white tracking-tight">
                        Sign-up to login !
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* SignIn Form */}
              <div className="">
                <input
                  className="bg-[#FFFFFF1A] backdrop-blur-[15px] md:h-56px h-50px w-full px-[1rem] md:px-[1.8rem] py-4 text-[#A5FF2B] border-solid border-[1px] border-[#A5FF2B] border-opacity-40 placeholder-[#A5FF2B] "
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => onChange("firstname", e.target.value)}
                ></input>
                <input
                  className="bg-[#FFFFFF1A] backdrop-blur-[15px] md:h-56px h-50px w-full px-[1rem] md:px-[1.8rem] py-4 text-[#A5FF2B] border-solid border-[1px] border-[#A5FF2B] border-opacity-40 placeholder-[#A5FF2B] md:mt-[26px] mt-[28px]"
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => onChange("lastname", e.target.value)}
                ></input>
                <input
                  className="bg-[#FFFFFF1A] backdrop-blur-[15px] md:h-56px h-50px w-full px-[1rem] md:px-[1.8rem] py-4 text-[#A5FF2B] border-solid border-[1px] border-[#A5FF2B] border-opacity-40 placeholder-[#A5FF2B] md:mt-[26px] mt-[28px]"
                  type="text"
                  placeholder="Email"
                  onChange={(e) => onChange("email", e.target.value)}
                ></input>
                <input
                  className="bg-[#FFFFFF1A] backdrop-blur-[15px] md:h-56px h-50px w-full px-[1rem] md:px-[1.8rem] py-4  text-[#A5FF2B] border-solid border-[1px] border-[#A5FF2B] border-opacity-40 placeholder-[#A5FF2B] md:mt-[26px] mt-[28px]"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => onChange("password", e.target.value)}
                ></input>
                <div className="w-full flex justify-end items-center md:mb-[73px]  md:mt-[14px] mt-[18px]">
                  <button
                    onClick={handleSignUp}
                    className="md:w-[178px] w-full h-[57px] text-black text-[0.8rem] md:text-[1.2rem] bg-[#a5ff2b] px-[18px] cursor-pointer flex gap-2"
                  >
                    <div className="flex justify-between items-center w-full h-full">
                      <span className="text-black font-syne text-xl leading-[30px]">
                        Sign-up
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
        </div>

        {/* Seqare */}
        <img
          className="md:block hidden absolute right-0 top-[20%]"
          src="/images/auth/desktop_sequare_1.svg"
          alt="square"
        />
        <img
          className="md:block hidden absolute bottom-0 left-[5%]"
          src="/images/auth/desktop_sequare_2.svg"
          alt="square"
        />
        <img
          className="md:hidden block absolute left-0 top-[16%]"
          src="/images/auth/mobile_sequare_1.svg"
          alt="square"
        />
        <img
          className="md:hidden block absolute right-0 bottom-[14%]"
          src="/images/auth/mobile_sequare_2.svg"
          alt="square"
        />
      </div>
    </>
  );
};

export default SignUp;
