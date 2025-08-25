"use client";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { GoChevronDown } from "react-icons/go";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import MegaMenu from "./megamenu/MegaMenu";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

type MegaMenuType = "Industry" | "Material" | "Style" | "";

interface MegaMenuState {
  open: boolean;
  type: MegaMenuType;
}

const Header = () => {
  const pathname = usePathname();
  const { user } = useAppSelector((state) => state.currentUser);
  const [megaMenu, setMegaMenu] = useState<MegaMenuState>({
    open: false,
    type: "",
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuTimer = useRef<NodeJS.Timeout | null>(null);
  // const navRef = useRef<HTMLDivElement>(null);

  const handleMenuOpen = (type: MegaMenuType) => {
    if (menuTimer.current) {
      clearTimeout(menuTimer.current);
    }
    setMegaMenu({ open: true, type });
  };

  const handleMenuClose = () => {
    menuTimer.current = setTimeout(() => {
      setMegaMenu({ open: false, type: "" });
    }, 200);
  };

  const cancelMenuClose = () => {
    if (menuTimer.current) {
      clearTimeout(menuTimer.current);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    return () => {
      if (menuTimer.current) {
        clearTimeout(menuTimer.current);
      }
    };
  }, []);

  if (pathname.startsWith("/user")) {
    return null;
  }

  return (
    <header className=" shadow  sticky top-0 z-30">
      {/* top header */}
      <div className="bg-blue-800 text-xs md:text-sm text-white text-center py-1 px-4 w-full">
        Free shipping on orders over $50
      </div>

      {/* main header */}
      <div className="w-full flex justify-center items-center bg-white">
        <div className="w-full px-2 md:px-6 lg:px-10 flex justify-between items-center py-3 md:py-4 ">
          {/* Mobile menu button */}
          <button
            className="md:hidden w-9 h-9 md:w-10 md:h-10 border border-gray-200 flex justify-center items-center bg-white shadow-xs rounded-md hover:bg-gray-50 transition"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <RiCloseLine className="size-6" />
            ) : (
              <RiMenuLine className="size-6" />
            )}
          </button>

          <Link href={"/"} className="">
            <Image
              className="md:w-40 w-32"
              src={"/unique custom boxes.png"}
              alt="Unique Custom Boxes"
              width={160}
              height={50}
              priority
            />
          </Link>

          {/* Search bar - hidden on mobile */}
          <div className="px-12 relative md:flex flex-1 justify-start items-center space-x-6 hidden">
            <div
              onMouseEnter={() => handleMenuOpen("Industry")}
              onMouseLeave={handleMenuClose}
              className="flex justify-center items-center cursor-pointer hover:text-green-700 transition"
            >
              <span className="pr-1.5">Boxes By Industry</span>
              <GoChevronDown className="size-3.5" />
            </div>

            <div
              onMouseEnter={() => handleMenuOpen("Material")}
              onMouseLeave={handleMenuClose}
              className="flex justify-center items-center cursor-pointer hover:text-green-700 transition"
            >
              <span className="pr-1.5">Boxes By Material</span>
              <GoChevronDown className="size-3.5" />
            </div>

            <div
              onMouseEnter={() => handleMenuOpen("Style")}
              onMouseLeave={handleMenuClose}
              className="flex justify-center items-center cursor-pointer hover:text-green-700 transition"
            >
              <span className="pr-1.5">Boxes By Style</span>
              <GoChevronDown className="size-3.5" />
            </div>
          </div>
          <button className="hidden md:flex items-center space-x-4 md:space-x-3 ">
            <div className="w-9 h-9 md:w-10 md:h-10 border border-gray-200 flex justify-center items-center bg-white shadow-xs rounded-md hover:bg-gray-50 transition">
              <BiSearch className="size-6" />
              <span className="sr-only">Search</span>
            </div>
          </button>
          <button className="md:hidden w-9 h-9 border border-gray-200 flex justify-center items-center bg-green-600 text-white rounded-md hover:bg-green-700 transition">
            <FaPhoneAlt className="size-5" />
          </button>
          <button className="hidden md:flex items-center ml-6 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md transition">
            <FaPhoneAlt className="size-5 mr-2" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xs font-medium opacity-80">Call Us</span>
              <span className="text-sm md:text-base font-semibold">
                +44-7884-529639
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-white border-b h-screen shadow-sm fixed z-50 overflow-auto">
          <div className="px-4 py-3">
            {/* Mobile search */}
            <div className="relative mb-4">
              <input
                className="border border-gray-300 placeholder:text-gray-400/60 text-sm w-full outline-none focus:ring-1 focus:ring-gray-700/40 py-2 pl-3 pr-8 bg-white rounded-md"
                placeholder="Search products..."
                type="search"
                aria-label="Search products"
              />
              <BiSearch className="absolute size-5 top-2.5 right-3 z-10 text-gray-500" />
            </div>

            <div className="flex flex-col space-y-4">
              <Link
                href="/pages/category"
                className="font-medium hover:text-green-700 transition py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                All Products
              </Link>

              <div className="border-t border-gray-100 pt-2">
                <button
                  className="flex items-center justify-between w-full py-2"
                  onClick={() =>
                    setMegaMenu((prev) => ({
                      open: prev.type === "Industry" ? !prev.open : true,
                      type: "Industry",
                    }))
                  }
                >
                  <span>Boxes By Industry</span>
                  <GoChevronDown
                    className={`size-4 transition-transform ${
                      megaMenu.open && megaMenu.type === "Industry"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {megaMenu.open && megaMenu.type === "Industry" && (
                  <div className="pl-4 py-2">
                    <MegaMenu
                      type="Industry"
                      mobile
                      onClose={() => setMegaMenu({ open: false, type: "" })}
                    />
                  </div>
                )}
              </div>

              <div className="border-t border-gray-100 pt-2">
                <button
                  className="flex items-center justify-between w-full py-2"
                  onClick={() =>
                    setMegaMenu((prev) => ({
                      open: prev.type === "Material" ? !prev.open : true,
                      type: "Material",
                    }))
                  }
                >
                  <span>Boxes By Material</span>
                  <GoChevronDown
                    className={`size-4 transition-transform ${
                      megaMenu.open && megaMenu.type === "Material"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {megaMenu.open && megaMenu.type === "Material" && (
                  <div className="pl-4 py-2">
                    <MegaMenu
                      type="Material"
                      mobile
                      onClose={() => setMegaMenu({ open: false, type: "" })}
                    />
                  </div>
                )}
              </div>

              <div className="border-t border-gray-100 pt-2">
                <button
                  className="flex items-center justify-between w-full py-2"
                  onClick={() =>
                    setMegaMenu((prev) => ({
                      open: prev.type === "Style" ? !prev.open : true,
                      type: "Style",
                    }))
                  }
                >
                  <span>Boxes By Style</span>
                  <GoChevronDown
                    className={`size-4 transition-transform ${
                      megaMenu.open && megaMenu.type === "Style"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {megaMenu.open && megaMenu.type === "Style" && (
                  <div className="pl-4 py-2">
                    <MegaMenu
                      type="Style"
                      mobile
                      onClose={() => setMegaMenu({ open: false, type: "" })}
                    />
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                className="py-1 hover:text-green-700 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                href="/sustainability"
                className="py-1 hover:text-green-700 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sustainability
              </Link>

              <Link
                href="/about"
                className="py-1 hover:text-green-700 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Company
              </Link>

              {user ? (
                <Link
                  href="/account"
                  className="py-1 hover:text-green-700 transition border-t border-gray-100 pt-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Account
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="py-1 hover:text-green-700 transition border-t border-gray-100 pt-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mega Menu (Desktop) */}
      {megaMenu.open && !mobileMenuOpen && (
        <div
          onMouseEnter={cancelMenuClose}
          onMouseLeave={handleMenuClose}
          className=" justify-center relative items-center z-40 hidden md:flex"
        >
          <MegaMenu
            onClose={() => setMegaMenu({ open: false, type: "" })}
            type={megaMenu.type}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
