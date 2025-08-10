import React from "react";
import Container from "./Container";

interface IProps {
  title: string;
  description: string;
}

const AllPagesBanner = ({ title, description }: IProps) => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center h-60">
        <div className="text-5xl font-bold">{title}</div>
        <div>{description}</div>
      </div>
    </Container>
  );
};

export default AllPagesBanner;
