"use client";

import { Flex, TextField } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const ContactForm = () => {
  return (
    <Flex gap="5" direction={"column"}>
      <Flex direction={"column"} gap="5">
        <Flex direction={"column"} gap="2">
          <label className="font-bold text-sm">Name</label>
          <input  disabled className="input input-bordered bg-transparent border-black md:w-[500px]" />
        </Flex>
        <Flex direction={"column"} gap="2">
          <label className="font-bold text-sm">Email</label>
          <input disabled className="input input-bordered bg-transparent border-black" />
        </Flex>
        <Flex direction={"column"} gap="2">
          <label className="font-bold text-sm">Name</label>
          <textarea disabled className="input input-bordered bg-transparent border-black h-44" />
        </Flex>
        <Flex align={"center"} gap="3">
          <button className="btn text-white">
            Send
          </button>
        </Flex>
      </Flex>
      <Flex gap="5" className="" align={"center"} justify={"center"} mt="5">
        <Link href="https://www.instagram.com/mossi_balli/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==">
          <Flex align={"center"} gap="2">
            <FaInstagram className="text-xl" />
            <span>Instagram</span>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

export default ContactForm;
