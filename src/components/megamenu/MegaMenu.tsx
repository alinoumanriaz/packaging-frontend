"use client";
import React from "react";
import { motion } from "framer-motion";

// import { FishSymbol } from "lucide-react";
import Link from "next/link";
import { IndustryItems, materialItems, StyleItems } from "@/custom-data/data";

interface MegaMenuProps {
  type: string;
  // menuClose: () => void;
  onClose: () => void;
  mobile?: boolean;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ type, onClose, mobile = false }) => {
  const renderContent = () => {
    switch (type) {
      case "Industry":
        return (
          <div className={`grid ${mobile ? "grid-cols-1" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-3"} gap-3`}>
            {IndustryItems.map((item, idx) => (
              <Link
                href={`/${item.slug}`}
                key={idx}
                className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 hover:ring-1 hover:ring-gray-200 transition-colors"
                onClick={onClose}
              >
                <item.icon className="size-5 text-gray-600 flex-shrink-0" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        );

      case "Material":
        return (
          <div className={`grid ${mobile ? "grid-cols-1" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3"} gap-3`}>
            {materialItems.map((item, idx) => (
              <Link
                href={`/${item.slug}`}
                key={idx}
                className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 hover:ring-1 hover:ring-gray-200 transition-colors"
                onClick={onClose}
              >
                <item.icon className="size-5 text-gray-600 flex-shrink-0" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        );

      case "Style":
        return (
          <div className={`grid ${mobile ? "grid-cols-1" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-3"} gap-3`}>
            {StyleItems.map((item, idx) => (
              <Link
                href={`/${item.slug}`}
                key={idx}
                className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 hover:ring-1 hover:ring-gray-200 transition-colors"
                onClick={onClose}
              >
                <item.icon className="size-5 text-gray-600 flex-shrink-0" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  if (mobile) {
    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <div className="py-2 pl-4 pr-2">
          {renderContent()}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      onMouseLeave={onClose}
      className="absolute top-0 z-20 bg-white shadow-md rounded-md border-1 border-gray-200"
    >
      <div className="container mx-auto px-4 py-6">
        {renderContent()}
      </div>
    </motion.div>
  );
};

export default MegaMenu;