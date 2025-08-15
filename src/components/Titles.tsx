import React from "react";

interface titleProps {
  title?: string;
  subtitle?: string;
  paragraph?: string;
  className?: string;
}

const Titles = ({ title, subtitle, paragraph, className }: titleProps) => {
  return (
    <div className={`text-center ${className} flex flex-col space-y-1 md:space-y-4 text-sm`}>
      <h2 className="md:text-4xl text-2xl font-extrabold ">{title}</h2>
      <h3 className="text-gray-600">{subtitle}</h3>
      <p className="text-gray-600">{paragraph}</p>
    </div>
  );
};

export default Titles;
