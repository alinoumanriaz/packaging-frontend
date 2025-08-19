"use client";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { GoChevronDown } from "react-icons/go";
import { RiMenuLine, RiCloseLine, RiUserLine } from "react-icons/ri";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <header className="relative">
      {/* top header */}
      <div className="bg-green-950 text-xs md:text-sm text-white text-center py-1 px-4 w-full">
        Free shipping on orders over $50
      </div>
      
      {/* main header */}
      <div className="w-full flex justify-center items-center">
        <div className="w-full px-4 md:px-6 lg:px-10 flex justify-between items-center py-3 md:py-4 ">
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
          
          <Link href={"/"} className="font-semibold text-2xl md:text-3xl">
            PackBox
          </Link>
          
          {/* Search bar - hidden on mobile */}
          <div className="hidden md:block relative flex-1 max-w-md mx-4">
            <input
              className="border border-gray-300 placeholder:text-gray-400/60 text-sm w-full outline-none focus:ring-1 focus:ring-gray-700/40 py-2 pl-3 pr-8 bg-white rounded-md"
              placeholder="Search by product, categories..."
              type="search"
              aria-label="Search products"
            />
            <BiSearch className="absolute size-5 top-2.5 right-3 z-10 text-gray-500" />
          </div>
          
          <div className="flex items-center space-x-4 md:space-x-6">
            {user ? (
              <Link 
                href="/account" 
                className="hidden sm:inline hover:text-green-700 transition text-sm md:text-base"
              >
                {user.username}
              </Link>
            ) : (
              <Link 
                href="/login" 
                className="hidden sm:inline hover:text-green-700 transition text-sm md:text-base"
              >
                Login
              </Link>
            )}
            <button 
              className="w-9 h-9 md:w-10 md:h-10 border border-gray-200 flex justify-center items-center bg-white shadow-xs rounded-md hover:bg-gray-50 transition"
            >
              <RiUserLine className="size-5" />
              <span className="sr-only">User</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Desktop navbar */}
      <div className="hidden md:flex w-full justify-center items-center">
        <div className="w-full px-6 lg:px-10 flex justify-between items-center text-[15px] text-gray-800">
          <Link href={"/pages/category"} className="font-semibold hover:text-green-700 transition py-3">
            All Products
          </Link>
          
          <div className="w-px h-5 bg-gray-200"></div>
          
          <div 
            className="flex justify-center items-center space-x-6 lg:space-x-8 py-2"
            ref={navRef}
          >
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
            
            <Link href="/blog" className="hover:text-green-700 transition">
              Blog
            </Link>
          </div>
          
          <div className="w-px h-5 bg-gray-200"></div>
          
          <div className="flex justify-center items-center space-x-6 lg:space-x-8">
            <Link href="/sustainability" className="hover:text-green-700 transition">
              Sustainability
            </Link>
            <Link href="/about" className="hover:text-green-700 transition">
              Company
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-white border-b shadow-sm">
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
                  onClick={() => setMegaMenu(prev => ({
                    open: prev.type === "Industry" ? !prev.open : true,
                    type: "Industry"
                  }))}
                >
                  <span>Boxes By Industry</span>
                  <GoChevronDown className={`size-4 transition-transform ${megaMenu.open && megaMenu.type === "Industry" ? "rotate-180" : ""}`} />
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
                  onClick={() => setMegaMenu(prev => ({
                    open: prev.type === "Material" ? !prev.open : true,
                    type: "Material"
                  }))}
                >
                  <span>Boxes By Material</span>
                  <GoChevronDown className={`size-4 transition-transform ${megaMenu.open && megaMenu.type === "Material" ? "rotate-180" : ""}`} />
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
                  onClick={() => setMegaMenu(prev => ({
                    open: prev.type === "Style" ? !prev.open : true,
                    type: "Style"
                  }))}
                >
                  <span>Boxes By Style</span>
                  <GoChevronDown className={`size-4 transition-transform ${megaMenu.open && megaMenu.type === "Style" ? "rotate-180" : ""}`} />
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
          className=" justify-center relative items-center z-20 hidden md:flex"
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