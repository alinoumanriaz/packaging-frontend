'use client'
import React, { useEffect } from "react";

const Popup = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  useEffect(() => {
    // Disable background scroll
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scroll when popup closes
      document.body.style.overflow = originalStyle;
    };
  }, []);
  return (
    <div className="inset-0 absolute w-full flex justify-center items-center bg-black/5 h-screen backdrop-blur-sm z-50">
      {children}
    </div>
  );
};

export default Popup;
