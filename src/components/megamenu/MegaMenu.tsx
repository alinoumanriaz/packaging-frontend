"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface MegaMenuProps {
  type: string;
  onClose: () => void;
  mobile?: boolean;
  industries: Array<{ imageUrl: string; name: string; slug: string }>;
  materials: Array<{ imageUrl: string; name: string; slug: string }>;
  styles: Array<{ imageUrl: string; name: string; slug: string }>;
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  type,
  onClose,
  mobile = false,
  industries,
  materials,
  styles,
}) => {
  const renderContent = () => {
    switch (type) {
      case "Industry":
        return (
          <div
            className={`grid ${
              mobile
                ? "grid-cols-1"
                : "grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
            } gap-3 w-[900px]`}
          >
            {industries.map((item, idx) => (
              <Link
                href={`/${item.slug}`}
                key={idx}
                className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 hover:ring-1 hover:ring-gray-200 transition-colors"
                onClick={onClose}
              >
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="flex-shrink-0 object-cover rounded-md w-12 h-12"
                  />
                ) : (
                  <div className="size-5 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">📦</span>
                  </div>
                )}
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        );

      case "Material":
        return (
          <div
            className={`grid ${
              mobile
                ? "grid-cols-1"
                : "grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3"
            } gap-3 w-[900px]`}
          >
            {materials.map((item, idx) => (
              <Link
                href={`/${item.slug}`}
                key={idx}
                className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 hover:ring-1 hover:ring-gray-200 transition-colors"
                onClick={onClose}
              >
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="flex-shrink-0 object-cover rounded-md w-12 h-12"
                  />
                ) : (
                  <div className="size-5 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">📦</span>
                  </div>
                )}
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        );

      case "Style":
        return (
          <div
            className={`grid ${
              mobile
                ? "grid-cols-1"
                : "grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
            } gap-3  w-[900px]`}
          >
            {styles.map((item, idx) => (
              <Link
                href={`/${item.slug}`}
                key={idx}
                className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 hover:ring-1 hover:ring-gray-200 transition-colors"
                onClick={onClose}
              >
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={50}
                    height={50}
                    loading="eager"
                    className="flex-shrink-0 object-cover rounded-md w-12 h-12"
                  />
                ) : (
                  <div className="size-5 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">📦</span>
                  </div>
                )}
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
        <div className="py-2 pl-4 pr-2">{renderContent()}</div>
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
      className="absolute -top-4 z-20 bg-white shadow-md rounded-md border-1 border-gray-200"
    >
      <div className="container mx-auto px-4 py-6">{renderContent()}</div>
    </motion.div>
  );
};

export default MegaMenu;
