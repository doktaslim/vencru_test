import { HiOutlineFlag } from "react-icons/hi";
import {
  FiHome,
  FiBarChart2,
  FiUsers,
  FiSearch,
  FiLogOut,
} from "react-icons/fi";
import { ImStack } from "react-icons/im";
import { BsCheck2Square } from "react-icons/bs";
import { SlSupport, SlSettings } from "react-icons/sl";
import Logo from "../assets/logo.png";
import { links } from "../constants/aside";
import ImageAd from "../assets/image-ad.png";
import Avater from "../assets/avatar.png";
import { Drawer } from "antd";

export default function AsideLayout({showMobileMenu, setShowMobileMenu}) {
  const user = {
    name: "Olivia Rhye",
    email: "olivia@untitledui.com",
  };
  return (
    <>
      <aside className='overflow-y-auto scroll text-gray-normal hidden md:block md:w-[19.5vw]  p-4 bg-white border border-r-slate-100 space-y-6'>
        {/* Logo */}
        <div className="font-medium text-xl flex items-center space-x-2">
          <div className="h-10 w-10">
            <img src={Logo} alt="" />
          </div>
          <span>Untitled UI</span>
        </div>

        {/* Search */}
        <form className="relative h-11 border rounded-md w-full">
          <FiSearch className="absolute text-gray-normal top-2 left-3 text-2xl" />
          <input
            type="search"
            name=""
            placeholder="Search"
            className="w-full h-full rounded-md pl-11 pr-2 outline-none"
          />
        </form>

        {/* Links */}
        <div className="w-full flex flex-col space-y-1">
          {links.slice(0, -2).map(({ id, count, title }) => (
            <div
              key={id}
              className={`h-10 min-h-10 max-h-10 p-2 rounded-md cursor-pointer w-full font-medium text-[16px] flex items-center justify-between hover:bg-gray-primary`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl">
                  {title === "Home" ? (
                    <FiHome />
                  ) : title === "Dashboard" ? (
                    <FiBarChart2 />
                  ) : title === "Projects" ? (
                    <ImStack />
                  ) : title === "Tasks" ? (
                    <BsCheck2Square />
                  ) : title === "Reporting" ? (
                    <HiOutlineFlag />
                  ) : title === "Users" ? (
                    <FiUsers />
                  ) : null}
                </span>
                <span>{title}</span>
              </div>

              {count ? (
                <span className="h-7 w-8 grid place-items-center text-sm rounded-full bg-gray-primary">
                  {count}
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col space-y-1">
          {links.slice(-2).map(({ id, title }) => (
            <div
              key={id}
              className={`${
                title === "Settings" ? "bg-gray-primary" : ""
              } h-10 min-h-10 max-h-10 p-2 rounded-md cursor-pointer w-full font-medium text-[16px] flex items-center justify-between hover:bg-gray-primary`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl">
                  {title === "Support" ? (
                    <SlSupport />
                  ) : title === "Settings" ? (
                    <SlSettings />
                  ) : null}
                </span>
                <span>{title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block rounded-md bg-gray-primary p-3 py-4">
          <div className="space-y-2 font-medium">
            <p className="text-xs text-gray-900">New features available!</p>
            <p className="text-xs">
              Check out the new dashboard view. Pages now load faster.
            </p>

            <div className="h-[150px] w-full">
              <img
                src={ImageAd}
                alt=""
                className="h-full w-full object-contain rounded-md"
              />
            </div>

            <div className="flex items-center space-x-3 text-sm">
              <p>Dismiss</p>
              <p className="text-purple-600">What's new?</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex items-center space-x-2 w-full">
          <div className="h-14 w-14">
            <img src={Avater} alt="" className="h-full w-full object-contain" />
          </div>
          <div className="text-sm w-full">
            <div className="flex items-center justify-between">
              <p className="font-medium text-gray-900">{user.name}</p>
              <FiLogOut className="text-xl" />
            </div>
            <p>{user.email}</p>
          </div>
        </div>
      </aside>

      <Drawer
        open={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
        placement="left"
          width={290}
          headerStyle={{
              display: "none",
          }}
          bodyStyle={{
              padding: "0px",
              fontFamily: "Inter",
          }}
      >
        <aside className='overflow-y-auto scroll text-gray-normal p-4 space-y-6'>
        {/* Logo */}
        <div className="font-medium text-xl flex items-center space-x-2">
          <div className="h-10 w-10">
            <img src={Logo} alt="" />
          </div>
          <span>Untitled UI</span>
        </div>

        {/* Search */}
        <form className="relative h-11 border rounded-md w-full">
          <FiSearch className="absolute text-gray-normal top-2 left-3 text-2xl" />
          <input
            type="search"
            name=""
            placeholder="Search"
            className="w-full h-full rounded-md pl-11 pr-2 outline-none"
          />
        </form>

        {/* Links */}
        <div className="w-full flex flex-col space-y-1">
          {links.slice(0, -2).map(({ id, count, title }) => (
            <div
              key={id}
              className={`h-10 min-h-10 max-h-10 p-2 rounded-md cursor-pointer w-full font-medium text-[16px] flex items-center justify-between hover:bg-gray-primary`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl">
                  {title === "Home" ? (
                    <FiHome />
                  ) : title === "Dashboard" ? (
                    <FiBarChart2 />
                  ) : title === "Projects" ? (
                    <ImStack />
                  ) : title === "Tasks" ? (
                    <BsCheck2Square />
                  ) : title === "Reporting" ? (
                    <HiOutlineFlag />
                  ) : title === "Users" ? (
                    <FiUsers />
                  ) : null}
                </span>
                <span>{title}</span>
              </div>

              {count ? (
                <span className="h-7 w-8 grid place-items-center text-sm rounded-full bg-gray-primary">
                  {count}
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col space-y-1">
          {links.slice(-2).map(({ id, title }) => (
            <div
              key={id}
              className={`${
                title === "Settings" ? "bg-gray-primary" : ""
              } h-10 min-h-10 max-h-10 p-2 rounded-md cursor-pointer w-full font-medium text-[16px] flex items-center justify-between hover:bg-gray-primary`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl">
                  {title === "Support" ? (
                    <SlSupport />
                  ) : title === "Settings" ? (
                    <SlSettings />
                  ) : null}
                </span>
                <span>{title}</span>
              </div>
            </div>
          ))}
        </div>

        <hr />

        <div className="flex items-center space-x-2 w-full">
          <div className="h-14 w-14">
            <img src={Avater} alt="" className="h-full w-full object-contain" />
          </div>
          <div className="text-sm w-full">
            <div className="flex items-center justify-between">
              <p className="font-medium text-gray-900">{user.name}</p>
              <FiLogOut className="text-xl" />
            </div>
            <p>{user.email}</p>
          </div>
        </div>
      </aside>
      </Drawer>
    </>
  );
}
