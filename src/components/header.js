import { useState } from "react";

import Button from "./button";
import { Link, useLocation } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { Drawer } from "./drawer";
import { twMerge } from "tailwind-merge";

export default function Header() {
  const location = useLocation();
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  return (
    <div
      className={twMerge(
        "content absolute  top-0 left-0 w-full z-50 py-[1.5rem] md:py-[2rem] border-solid border-b-[1px] border-[#a5ff2b] md:border-none",
        location.pathname !== "/" && location.pathname !== "/earnwithus"
          ? "bg-transparent"
          : "bg-[#171717]"
      )}
    >
      <div className="m-auto max-w-[1440px] w-full flex items-center justify-between px-[2rem] md:px-[3rem]">
        <Link to="/">
          <div className="w-[120px] md:w-auto">
            <img src="/logo.svg" alt="" />
          </div>
        </Link>
        <div className="text-[1.2rem] gap-12 min-[1085px]:flex hidden">
          <div className="flex items-center hover:text-[#A1A1A1]">
            <Link to="/">Home</Link>
          </div>
          <div className="flex items-center hover:text-[#A1A1A1]">
            <Link to="/category">Category</Link>
          </div>
          <div className="flex items-center hover:text-[#A1A1A1]">
            <a href="#">About Us</a>
          </div>
          <div className="flex items-center hover:text-[#A1A1A1]">
            <a href="#">Blog</a>
          </div>
          <div className="flex items-center hover:text-[#A1A1A1]">
            <Link to="/earnwithus">Earn With Us</Link>
          </div>
          <Link to="/">
            <Button>Book Now</Button>
          </Link>
        </div>
        <div className="block min-[1085px]:hidden">
          <button onClick={() => setVisibleDrawer(true)}>
            <img src="/drawer.svg" alt="" />
          </button>
          <Drawer
            open={visibleDrawer}
            setOpen={setVisibleDrawer}
            panelClassName="w-full sm:w-[300px]"
          >
            <div className="flex flex-col gap-1 px-4 pb-12">
              <div className="flex items-center gap-x-4 h-[64px] mb-4">
                <div className="pt-3 ml-auto">
                  <button
                    onClick={() => {
                      setVisibleDrawer(false);
                    }}
                    className="text-gray-1 hover:text-yellow-1 transition-all"
                  >
                    <IoCloseSharp className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              <div className={"flex flex-col items-start gap-4"}>
                <div className="w-full">
                  <Link
                    to="/"
                    className="group py-2 bg-black rounded-full inline-flex px-6 w-full justify-center"
                    onClick={() => setVisibleDrawer(false)}
                  >
                    <span className="font-bold text-xl">Home</span>
                  </Link>
                </div>
                <div className="w-full">
                  <Link
                    to="/category"
                    className="group py-2 bg-black rounded-full inline-flex px-6 w-full justify-center"
                    onClick={() => setVisibleDrawer(false)}
                  >
                    <span className="font-bold text-xl">Category</span>
                  </Link>
                </div>
                <div className="w-full">
                  <Link
                    to="/aboutus"
                    className="group py-2 bg-black rounded-full inline-flex px-6 w-full justify-center"
                    onClick={() => setVisibleDrawer(false)}
                  >
                    <span className="font-bold text-xl">About Us</span>
                  </Link>
                </div>
                <div className="w-full">
                  <Link
                    to="/earnwithus"
                    className="group py-2 bg-black rounded-full inline-flex px-6 w-full justify-center"
                    onClick={() => setVisibleDrawer(false)}
                  >
                    <span className="font-bold text-xl">Earn With Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
