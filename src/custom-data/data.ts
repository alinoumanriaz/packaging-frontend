import { Leaf } from "lucide-react";
import { GiLiquidSoap } from "react-icons/gi";
import {
  LuBox,
  LuFlame,
  LuGem,
  LuGift,
  LuLaptop,
  LuLeaf,
  LuPuzzle,
  LuShoppingBag,
  LuShirt,
  LuArchive,
  LuBookOpen,
  // LuScissors,
  LuMail,
  LuList,
  LuPackage,
  LuLayers,
  // LuLayoutGrid,
  // LuGrid2X2,
  // LuLayoutList,
} from "react-icons/lu";

export const IndustryItems = [
  { name: "Custom Boxes", icon: LuBox, slug: "custom-boxes" },
  { name: "Cosmetic Boxes", icon: Leaf, slug: "cosmetics-boxes" },
  { name: "Retail Boxes", icon: LuShoppingBag, slug: "retail-boxes" },
  { name: "Candle Boxes", icon: LuFlame, slug: "candle-boxes" },
  { name: "Gift Boxes", icon: LuGift, slug: "gift-boxes" },
  { name: "Electronics Boxes", icon: LuLaptop, slug: "electronics-boxes" },
  { name: "Apparel & Clothing Boxes", icon: LuShirt, slug: "apparel-clothing-boxes" },
  { name: "Toys & Games Boxes", icon: LuPuzzle, slug: "toys-games-boxes" },
  { name: "Soap Boxes", icon: GiLiquidSoap, slug: "soap-boxes" },
  { name: "Jewelry Boxes", icon: LuGem, slug: "jewelry-boxes" }
];

export const StyleItems = [
  { name: "Mailer Boxes", icon: LuMail, slug: "mailer-boxes" },
  // { name: "Display Boxes", icon: LuLayoutList, slug: "display-boxes" },
  { name: "Tuck Top Boxes", icon: LuList, slug: "tuck-top-boxes" },
  { name: "Gable Boxes", icon: LuPackage, slug: "gable-boxes" },
  { name: "Drawer Boxes", icon: LuLayers, slug: "drawer-boxes" },
  { name: "Book Style Boxes", icon: LuBookOpen, slug: "book-style-boxes" },
  // { name: "Custom Printed Boxes", icon: LuGrid2X2, slug: "custom-printed-boxes" },
  // { name: "Window Cutout Boxes", icon: LuLayoutGrid, slug: "window-cutout-boxes" },
  // { name: "Die-Cut Boxes", icon: LuScissors, slug: "die-cut-boxes" }
];

export const materialItems = [
  { name: "Corrugated Boxes", icon: LuBox, slug: "corrugated-boxes" },
  { name: "Kraft Boxes", icon: LuLeaf, slug: "kraft-boxes" },
  { name: "Cardboard Boxes", icon: LuBox, slug: "cardboard-boxes" },
  { name: "Rigid Boxes", icon: LuGift, slug: "rigid-boxes" },
  { name: "Bux Board Boxes", icon: LuArchive, slug: "bux-board-boxes" }
];
