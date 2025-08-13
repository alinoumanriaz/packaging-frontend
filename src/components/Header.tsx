"use client";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { GoChevronDown } from "react-icons/go";
import { RiShoppingCartLine } from "react-icons/ri";
import MegaMenu from "./megamenu/MegaMenu";

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
  const menuTimer = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleMenuOpen = (type: MegaMenuType) => {
    if (menuTimer.current) {
      clearTimeout(menuTimer.current);
    }
    setMegaMenu({ open: true, type });
  };

  const handleMenuClose = () => {
    menuTimer.current = setTimeout(() => {
      setMegaMenu({ open: false, type: "" });
    }, 200); // Small delay to allow moving to mega menu
  };

  const cancelMenuClose = () => {
    if (menuTimer.current) {
      clearTimeout(menuTimer.current);
    }
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
    <header className="relative">
      {/* top header */}
      <div className="bg-green-950 text-sm text-white flex justify-center items-center h-8 w-full">
        Free shipping on orders over $50
      </div>
      
      {/* main header */}
      <div className="w-full flex justify-center items-center">
        <div className="w-[95%] flex justify-between items-center py-4">
          <Link href={"/"} className="font-semibold text-3xl">
            PackBox
          </Link>
          <div className="relative">
            <input
              className="border-style placeholder:text-gray-400/60 text-sm w-96 outline-none focus:ring-1 focus:ring-gray-700/40 py-2 pl-2 pr-8 bg-white rounded-md"
              placeholder="Search by product, categories..."
              type="search"
              aria-label="Search products"
            />
            <BiSearch className="absolute size-5 top-2 right-2.5 z-10 text-gray-500" />
          </div>
          <div className="flex justify-end items-center space-x-6">
            {user ? (
              <Link href="/account" className="hover:text-green-700 transition">
                {user.username}
              </Link>
            ) : (
              <Link href="/login" className="hover:text-green-700 transition">
                Login
              </Link>
            )}
            <button className="w-10 h-10 border-style flex justify-center items-center bg-white shadow-2xs rounded-md hover:bg-gray-50 transition">
              <RiShoppingCartLine className="size-5" />
              <span className="sr-only">Cart</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* navbar */}
      <div className="w-full flex justify-center items-center">
        <div className="w-[95%] flex justify-between items-center text-[15px] text-gray-800">
          <Link href={"/pages/category"} className="font-semibold hover:text-green-700 transition">
            All Products
          </Link>
          
          <div className="w-0.5 h-5 bg-gray-200"></div>
          
          <div 
            className="flex justify-center items-center space-x-8 pb-2 pt-1"
            ref={navRef}
          >
            <div
              onMouseEnter={() => handleMenuOpen("Industry")}
              onMouseLeave={handleMenuClose}
              className="flex justify-center items-center cursor-pointer hover:text-green-700 transition"
            >
              <span className="pr-2">Boxes By Industry</span>
              <GoChevronDown className="size-4" />
            </div>
            
            <div
              onMouseEnter={() => handleMenuOpen("Material")}
              onMouseLeave={handleMenuClose}
              className="flex justify-center items-center cursor-pointer hover:text-green-700 transition"
            >
              <span className="pr-2">Boxes By Material</span>
              <GoChevronDown className="size-4" />
            </div>
            
            <div
              onMouseEnter={() => handleMenuOpen("Style")}
              onMouseLeave={handleMenuClose}
              className="flex justify-center items-center cursor-pointer hover:text-green-700 transition"
            >
              <span className="pr-2">Boxes By Style</span>
              <GoChevronDown className="size-4" />
            </div>
            
            <Link href="/blog" className="hover:text-green-700 transition">
              Blog
            </Link>
          </div>
          
          <div className="w-0.5 h-5 bg-gray-200"></div>
          
          <div className="flex justify-center items-center space-x-8">
            <Link href="/sustainability" className="hover:text-green-700 transition">
              Sustainability
            </Link>
            <Link href="/about" className="hover:text-green-700 transition">
              Company
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mega Menu */}
      {megaMenu.open && (
        <div 
          onMouseEnter={cancelMenuClose}
          onMouseLeave={handleMenuClose}
          className="absolute w-full left-0 z-20"
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