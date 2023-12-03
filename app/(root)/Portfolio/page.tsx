import { Flex } from "@radix-ui/themes";
import React from "react";
import Navbar from "../Navbar";
import Works from "../components/Works";

const PortfolioPage = () => {

  return (
    <Flex
      direction={"column"}
      px="5"
      justify={"between"}
      py="9"
      className="max-w-7xl mx-auto min-h-screen"
    >
      <Navbar />
      <Works />
    </Flex>
  );
};

export default PortfolioPage;
