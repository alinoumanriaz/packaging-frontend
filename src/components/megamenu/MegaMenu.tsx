"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  IoFastFoodOutline,
  IoFlowerOutline,
  IoGiftOutline,
  IoMedicalOutline,
  IoShirtOutline,
} from "react-icons/io5";
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
  GiRecycle,
  GiCarWheel,
  GiGamepad,
  GiFactoryArm,
  GiNotebook,
  GiDogBowl,
  GiKitchenScale,
  GiSportMedal,
  GiAmmoBox,
  GiBrickWall,
  GiFishingBoat,
  GiFlowerPot,
  GiGraduateCap,
  GiGuitarHead,
  GiJetPack,
  GiPaintBrush,
  GiPartyFlags,
  GiWheat,
  GiCardboardBoxClosed,
} from "react-icons/gi";
import {
  MdOutlineDesignServices,
  MdOutlineFeaturedPlayList,
  MdOutlineInventory2,
  MdOutlineLocalShipping,
  MdOutlineMail,
  MdOutlineTakeoutDining,
  MdOutlineWindow,
} from "react-icons/md";
import { FishSymbolIcon } from "lucide-react";

interface MegaMenu {
  type: string;
  onClose: () => void;
}

const industryItems = [
  { name: "Food & Beverage", icon: IoFastFoodOutline },
  { name: "Pharmaceutical", icon: IoMedicalOutline },
  { name: "Cosmetics & Beauty", icon: IoFlowerOutline },
  { name: "Electronics", icon: MdOutlineDesignServices },
  { name: "Retail & Apparel", icon: IoShirtOutline },
  { name: "Gift & Luxury", icon: IoGiftOutline },
  { name: "E-commerce & Shipping", icon: MdOutlineLocalShipping },
  { name: "Healthcare & Medical", icon: IoMedicalOutline },
  { name: "Automotive", icon: GiCarWheel },
  { name: "Industrial & Machinery", icon: GiFactoryArm },
  { name: "Toys & Games", icon: GiGamepad },
  { name: "Books & Publishing", icon: GiBookCover },
  { name: "Office Supplies", icon: GiNotebook },
  { name: "Jewelry & Watches", icon: GiGemNecklace },
  { name: "Pet Supplies", icon: GiDogBowl },
  { name: "Home & Kitchen", icon: GiKitchenScale },
  { name: "Sports & Fitness", icon: GiSportMedal },
  { name: "Agriculture", icon: GiWheat },
  { name: "Floral", icon: GiFlowerPot },
  { name: "Military & Defense", icon: GiAmmoBox },
  { name: "Aerospace", icon: GiJetPack },
  { name: "Art & Crafts", icon: GiPaintBrush },
  { name: "Musical Instruments", icon: GiGuitarHead },
  { name: "Event & Wedding", icon: GiPartyFlags },
  { name: "Educational", icon: GiGraduateCap },
  // { name: "Cannabis & CBD", icon: <GiCannabisLeaf className="size-6" /> },
  { name: "Recycling & Waste", icon: GiRecycle },
  { name: "Construction", icon: GiBrickWall },
  { name: "Marine & Fishing", icon: GiFishingBoat },
];

const styleItems = [
  // Standard Box Styles
  { name: "Regular Slotted Container (RSC)", icon: GiCardboardBoxClosed },
  { name: "Full Overlap Box (FOL)", icon: GiCardboardBox },
  { name: "Half-Slotted Container (HSC)", icon: GiCardboardBox },

  // Specialty Box Styles
  { name: "Mailer Boxes", icon: MdOutlineMail },
  { name: "Display Boxes", icon: MdOutlineWindow },
  { name: "Tuck Top Boxes", icon: MdOutlineFeaturedPlayList },
  { name: "Gable Boxes", icon: IoGiftOutline },
  { name: "Drawer Boxes", icon: MdOutlineInventory2 },
  { name: "Telescoping Boxes", icon: GiCardboardBox },
  { name: "Five Panel Folder", icon: GiCardboardBox },

  // Luxury Packaging
  { name: "Rigid Boxes", icon: GiWoodenCrate },
  { name: "Clamshell Boxes", icon: FishSymbolIcon },
  { name: "Book Style Boxes", icon: GiBookCover },
  { name: "Jewelry Boxes", icon: GiGemNecklace },

  // Food Packaging
  { name: "Takeout Boxes", icon: MdOutlineTakeoutDining },
  { name: "Pizza Boxes", icon: GiPizzaCutter },
  { name: "Bakery Boxes", icon: GiCroissant },

  // Shipping Styles
  { name: "Bulk Shipping Boxes", icon: MdOutlineLocalShipping },
  { name: "Wardrobe Boxes", icon: GiClothes },
  { name: "Tube Boxes", icon: GiRolledCloth },

  // Customizable Options
  { name: "Custom Printed Boxes", icon: MdOutlineDesignServices },
  { name: "Window Cutout Boxes", icon: MdOutlineWindow },
  { name: "Die-Cut Boxes", icon: GiScissors },

  // Unique Shapes
  { name: "Hexagonal Boxes", icon: GiHexes },
  //   { name: "Pyramid Boxes", icon: <GiPyramid className="size-6" /> },
  //   { name: "Cylinder Boxes", icon: <GiCylinder className="size-6" /> },

  // Functional Styles
  { name: "Folding Cartons", icon: GiCardboardBox },
  { name: "Pop-Up Boxes", icon: GiPresent },
  { name: "Magnetic Closure Boxes", icon: GiMagnet },

  // Eco-Friendly Styles
  { name: "Recyclable Boxes", icon: GiRecycle },
  { name: "Compostable Boxes", icon: GiLeafSwirl },
  //   { name: "Minimalist Packaging", icon: <GiMinimalist className="size-6" /> }
];


// const material =[
//     {
//         icon: '',
//         name: '',
//         link: ''
//     }
// ]

const MegaMenu: React.FC<MegaMenu> = ({ type, onClose }) => {
  let content: React.ReactNode | null = null;
  console.log(type);

  switch (type) {
    case "Industry":
      content = (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6">
          {industryItems.map((item, idx) => (
            <div
              key={idx}
              className="group flex justify-start space-x-2 items-center  p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-transparent dark:hover:ring-gray-600/20 dark:hover:ring-1 transition"
            >
              <item.icon className={"size-6"} />
              <div className="">{item.name}</div>
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
              className="group flex justify-start items-center space-x-2 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-transparent dark:hover:ring-gray-600/20 dark:hover:ring-1 transition"
            >
              <IoFastFoodOutline className="size-6" />
              <div className="">Material Box</div>
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
              className="group flex justify-start space-x-3 items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:ring-gray-600/20 dark:hover:ring-1 transition"
            >
              <item.icon className="size-5" />
              <div className="">{item.name}</div>
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
        className="bg-white backdrop-blur-2xl w-[95%] h-fit rounded-lg shadow-xl ring-1 ring-gray-200 dark:ring-gray-500/10 p-6  "
      >
        {content}
      </motion.div>
    </div>
  );
};

export default MegaMenu;
