"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoFastFoodOutline, IoGiftOutline } from "react-icons/io5";
import {
//   GiCardboardBoxClosed,
  GiCardboardBox,
//   GiTakeoutFood,
  GiPizzaCutter,
  GiCroissant,
  GiScissors,
  GiHexes,
//   GiPyramid,
//   GiCylinder,
  GiPresent,
  GiMagnet,
  GiLeafSwirl,
//   GiMinimalist,
  GiWoodenCrate,
  GiBookCover,
  GiGemNecklace,
  GiClothes,
  GiRolledCloth,
  GiRecycle
} from "react-icons/gi";
import { MdOutlineDesignServices, MdOutlineFeaturedPlayList, MdOutlineInventory2, MdOutlineLocalShipping, MdOutlineMail, MdOutlineWindow } from "react-icons/md";

interface MegaMenu {
  type: string;
  onClose: () => void;
}
const styleItems = [
  // Standard Box Styles
//   { name: "Regular Slotted Container (RSC)", icon: <GiCardboardBoxClosed className="size-6" /> },
//   { name: "Full Overlap Box (FOL)", icon: <GiCardboardBox className="size-6" /> },
//   { name: "Half-Slotted Container (HSC)", icon: <GiCardboardPack className="size-6" /> },
  
  // Specialty Box Styles
  { name: "Mailer Boxes", icon: <MdOutlineMail className="size-6" /> },
  { name: "Display Boxes", icon: <MdOutlineWindow className="size-6" /> },
  { name: "Tuck Top Boxes", icon: <MdOutlineFeaturedPlayList className="size-6" /> },
  { name: "Gable Boxes", icon: <IoGiftOutline className="size-6" /> },
  { name: "Drawer Boxes", icon: <MdOutlineInventory2 className="size-6" /> },
  { name: "Telescoping Boxes", icon: <GiCardboardBox className="size-6" /> },
  { name: "Five Panel Folder", icon: <GiCardboardBox className="size-6" /> },
  
  // Luxury Packaging
  { name: "Rigid Boxes", icon: <GiWoodenCrate className="size-6" /> },
//   { name: "Clamshell Boxes", icon: <GiShellfish className="size-6" /> },
  { name: "Book Style Boxes", icon: <GiBookCover className="size-6" /> },
  { name: "Jewelry Boxes", icon: <GiGemNecklace className="size-6" /> },
  
  // Food Packaging
//   { name: "Takeout Boxes", icon: <GiTakeoutFood className="size-6" /> },
  { name: "Pizza Boxes", icon: <GiPizzaCutter className="size-6" /> },
  { name: "Bakery Boxes", icon: <GiCroissant className="size-6" /> },
  
  // Shipping Styles
  { name: "Bulk Shipping Boxes", icon: <MdOutlineLocalShipping className="size-6" /> },
  { name: "Wardrobe Boxes", icon: <GiClothes className="size-6" /> },
  { name: "Tube Boxes", icon: <GiRolledCloth className="size-6" /> },
  
  // Customizable Options
  { name: "Custom Printed Boxes", icon: <MdOutlineDesignServices className="size-6" /> },
  { name: "Window Cutout Boxes", icon: <MdOutlineWindow className="size-6" /> },
  { name: "Die-Cut Boxes", icon: <GiScissors className="size-6" /> },
  
  // Unique Shapes
  { name: "Hexagonal Boxes", icon: <GiHexes className="size-6" /> },
//   { name: "Pyramid Boxes", icon: <GiPyramid className="size-6" /> },
//   { name: "Cylinder Boxes", icon: <GiCylinder className="size-6" /> },
  
  // Functional Styles
  { name: "Folding Cartons", icon: <GiCardboardBox className="size-6" /> },
  { name: "Pop-Up Boxes", icon: <GiPresent className="size-6" /> },
  { name: "Magnetic Closure Boxes", icon: <GiMagnet className="size-6" /> },
  
  // Eco-Friendly Styles
  { name: "Recyclable Boxes", icon: <GiRecycle className="size-6" /> },
  { name: "Compostable Boxes", icon: <GiLeafSwirl className="size-6" /> },
//   { name: "Minimalist Packaging", icon: <GiMinimalist className="size-6" /> }
];

const IndustryMenu: React.FC<MegaMenu> = ({ type, onClose }) => {
  let content: React.ReactNode  | null = null;
  console.log(type)

  switch (type) {
    case "Industry":
      content = (
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-6">
          {[...Array(30)].map((_, idx) => (
            <div
              key={idx}
              className="group flex justify-start items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-transparent dark:hover:ring-gray-600/20 dark:hover:ring-1 transition"
            >
              <IoFastFoodOutline className="size-6" />
              <div className="pl-4">Industry Box</div>
            </div>
          ))}
        </div>
      );
      break;

    case "Material":
      content = (
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-6">
          {[...Array(30)].map((_, idx) => (
            <div
              key={idx}
              className="group flex justify-start items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-transparent dark:hover:ring-gray-600/20 dark:hover:ring-1 transition"
            >
              <IoFastFoodOutline className="size-6" />
              <div className="pl-4">Material Box</div>
            </div>
          ))}
        </div>
      );
      break;
    case "Style":
      content = (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6">
          {styleItems.map((item, idx) => (
            <div
              key={idx}
              className="group flex justify-start items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-transparent dark:hover:ring-gray-600/20 dark:hover:ring-1 transition"
            >
              {item.icon}
              <div className="pl-4">{item.name}</div>
            </div>
          ))}
        </div>
      );
      break;
  }

  return (
    <div className="hidden md:flex absolute inset-0 justify-center z-20 ">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        onMouseLeave={onClose}
        className="bg-white dark:bg-transparent backdrop-blur-2xl w-[95%] h-fit rounded-lg shadow-xl ring-1 ring-gray-200 dark:ring-gray-500/10 p-6 "
      >
        {content}
      </motion.div>
    </div>
  );
};

export default IndustryMenu;