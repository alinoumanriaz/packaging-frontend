import React from "react";

interface IProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const AllPagesBanner = ({ title, description, imageUrl }: IProps) => {
  return (
      <div
        style={
          imageUrl
            ? {
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
        className={`flex flex-col justify-center items-center w-full ${
          imageUrl ? "h-80 my-4 text-white " : "h-60"
        }`}
      >
        <div className="w-full text-center backdrop-blur-sm h-1/2 flex flex-col justify-center items-center">
          <div className="text-5xl font-bold">{title}</div>
        <div>{description}</div>
        </div>
      </div>
  );
};

export default AllPagesBanner;
