import { Flex } from "@radix-ui/themes";
import React from "react";
import Navbar from "../Navbar";

const ContactPage = () => {
  const getYear = new Date().getFullYear();

  return (
    <Flex
      direction={"column"}
      px="5"
      justify={"between"}
      py="9"
      className="max-w-7xl mx-auto min-h-screen"
    >
      <Navbar />
      <Flex>
        <h1 className="text-5xl font-bold">
            Under Work...
        </h1>
      </Flex>
      <p className="text-gray-600">&copy; {getYear} Bali - by Aymen Jdily</p>
    </Flex>
  );
};

export default ContactPage;
