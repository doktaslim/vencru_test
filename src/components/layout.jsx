import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "../assets/logo.png";
import AsideLayout from "./aside-layout";

export default function Layout({ children }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <>
      <main className="h-[100vh] font-body">
        <div className="h-full w-[100vw] flex">
          <AsideLayout showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />

          <section className="h-full w-full md:w-[81.5vw] bg-gray-primary">
            {/* hide the navbar on desktop */}
            <nav className="sticky top-0 z-50 flex items-center justify-between px-4 md:hidden h-[8vh] bg-white border-b">
              <div className="font-medium text-2xl text-black flex items-center space-x-1">
                <div className="h-10 w-10">
                  <img src={Logo} alt="" />
                </div>
                <span>Untitled Ui</span>
              </div>

              <button onClick={handleShowMobileMenu} className="outline-none">
                <HiOutlineMenuAlt3 className="text-2xl" />
              </button>
            </nav>

            
              {children}
          </section>
        </div>
      </main>
    </>
  );
}
