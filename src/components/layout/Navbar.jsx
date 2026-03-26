"use client";
import { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Logo from "../../assets/Logo/Logo2.png";
import Image from "next/image";
import Link from "next/link";
import { NAVBAR_TABS } from "@/constant/tabs";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-amber-100 transition-shadow duration-300 bg-white ${
        hasScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 md:px-4 xl:px-0 h-15 flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center gap-1">
            <Image
              src={Logo}
              alt="TrustOnServices logo"
              className="w-7 sm:w-9 h-auto object-contain"
            />
            <div className="leading-tight">
              <h1 className="text-[16px] sm:text-[17px] font-bold text-[#111828]">
                TrustOn<span className="text-[#AF0D5A]">Services</span>
              </h1>
              <p className="text-[9px] sm:text-[9px] font-serif text-[#555] font-medium">
                Happy customers, happy us!
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-6 text-[15px] font-medium">
          {NAVBAR_TABS.map(({ PATH, TABNAME }) => (
            <Link href={PATH} key={TABNAME}>
              <li className="font-serif list-none  hover:text-[#AF0D5A] relative cursor-pointer transition-colors">
                <span className="after:absolute tracking-[1.1px] text-[16px] after:content-[''] after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-[#AF0D5A] hover:after:w-full after:transition-all after:duration-300">
                  {TABNAME}
                </span>
              </li>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-[28px] text-[#111]"
          >
            {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
