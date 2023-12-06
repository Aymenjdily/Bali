import { Flex } from "@radix-ui/themes";
import React from "react";
import Navbar from "../Navbar";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  const getYear = new Date().getFullYear();

  return (
    <Flex
      direction={"column"}
      px="5"
      justify={"between"}
      py="9"
      className="max-w-7xl mx-auto min-h-screen"
      gap="9"
    >
      <Navbar />
      <Flex align={"center"} justify={"center"} gap="6" direction={"column"}>
        <h1 className="text-2xl font-bold">Message me</h1>
        <ContactForm />
      </Flex>
      <p className="text-gray-600">&copy; {getYear} Bali - by Aymen Jdily</p>
    </Flex>
  );
};

export default ContactPage;
