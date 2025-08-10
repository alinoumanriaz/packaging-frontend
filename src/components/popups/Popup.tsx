
import React from "react";

const Popup = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="inset-0 absolute w-full flex justify-center items-center bg-black/5 h-screen backdrop-blur-sm z-50">
      {children}
    </div>
  );
};

export default Popup;
