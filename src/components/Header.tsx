"use client";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";

const Header = () => {
  const pathname = usePathname();
  const { user } = useAppSelector((state) => state.currentUser);
  console.log({headeruser: user})

  if (pathname.startsWith("/user")) {
    return null;
  }
  return (
    <header className="">
      {/* top header */}
      <div className="bg-green-950  text-white flex justify-center items-center h-8 w-full">
        hello are you there
      </div>
      {/* main header  */}
      <div className="w-full flex justify-center items-center">
        <div className=" w-[95%] flex justify-between items-center py-4 ">
          <Link href={'/'} className="font-semibold text-3xl">PackBox</Link>
          <div className="relative">
            <input
              className="border-style placeholder:text-gray-400/60 text-sm w-96 outline-none focus:ring-1 focus:ring-gray-700/40 py-2 pl-2 pr-8 bg-white rounded-md"
              placeholder="Search by product, categories..."
              type="input"
              name=""
              id=""
            />
            <BiSearch className="absolute size-5 top-2 right-2.5 z-10 text-gray-500" />
          </div>
          <div className="flex justify-end items-center space-x-6">
            {user ? <div>{user.username}</div> : <div>Login</div>}
            <div className="w-10 h-10 border-style flex justify-center items-center bg-white shadow-2xs rounded-md">
              <RiShoppingCartLine className="size-5" />
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="w-full flex justify-center items-center">
        <div className="w-[95%] flex justify-between items-center text-[15px] text-gray-800">
          <Link href={'/pages/category'} className="font-semibold">All Products</Link>
          <div className="w-0.5 h-5 bg-gray-200"></div>
          <div className=" flex justify-center items-center space-x-8 pb-2 pt-1">
            <Link href={'/pages/category/slug'}>Gifts and Entertainments</Link>
            <Link href={'/pages/blogs/slug'}>Fashion and clothings</Link>
            <div>categring industory</div>
            <div>wellness and beauty</div>
            <div>further</div>
          </div>
          <div className="w-0.5 h-5 bg-gray-200"></div>
          <div className=" flex justify-center items-center  space-x-8">
            <Link href={'/pages/blogs/slug'}>Sustinbility</Link>
            <Link href={'/pages/blogs'}>Compny</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
