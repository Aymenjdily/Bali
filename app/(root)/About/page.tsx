import { Flex } from "@radix-ui/themes";
import React from "react";
import Navbar from "../Navbar";
import Overview from "../components/Overview";

const AboutPage = () => {
  const getYear = new Date().getFullYear();

  return (
    <Flex
      direction={"column"}
      px="5"
      justify={"between"}
      py="9"
      gap="9"
      className="max-w-7xl mx-auto min-h-screen"
    >
      <Navbar />
      <Overview />
      <p className="text-gray-600">&copy; {getYear} Bali - by Aymen Jdily</p>
    </Flex>
  );
};

export default AboutPage;
