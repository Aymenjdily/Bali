import { Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from 'react-icons/fa'

const Overview = () => {
  return (
    <>
        <div className="md:flex hidden">
            <Flex align={"center"} gap="6">
            <Image src="/me.jpg" alt="Mohamed" width={400} height={0} quality={100} />
            <Flex direction={"column"} gap="5">
                <h1 className="text-4xl font-extrabold">Mossi Bali</h1>
                <p className="text-gray-600">
                Meet Mohamed, a 22-year-old with a year-long devotion to the art of
                photography and filmmaking. His passion-driven journey centers on
                capturing moments and crafting compelling visual narratives. Through
                his lens, he immortalizes stories that resonate deeply, blending
                youthful energy with a seasoned eye for detail. Join Mohamed on his
                enchanting journey of visual storytelling.
                </p>
                <Flex>
                    <Link target="_blank" href="https://www.instagram.com/mossi_balli/">
                        <Flex className="bg-black text-white rounded-full" p="3">
                            <FaInstagram />
                        </Flex>
                    </Link>
                </Flex>
            </Flex>
            </Flex>
        </div>
        <div className="md:hidden flex">
            <Flex className="relative w-full h-[70vh]">
             <Image src="/me.jpg" alt="Mohamed" fill quality={100} className="object-cover" />
             <div className="w-full h-full bg-black/40 absolute" />
             <Flex direction={"column"} gap="5" className="absolute h-full" p="5" justify={"center"}>
                <h1 className="text-4xl font-extrabold text-white">Mossi Bali</h1>
                <p className="text-gray-200">
                Meet Mohamed, a 22-year-old with a year-long devotion to the art of
                photography and filmmaking. His passion-driven journey centers on
                capturing moments and crafting compelling visual narratives. Through
                his lens, he immortalizes stories that resonate deeply, blending
                youthful energy with a seasoned eye for detail. Join Mohamed on his
                enchanting journey of visual storytelling.
                </p>
                <Flex>
                    <Link target="_blank" href="https://www.instagram.com/mossi_balli/">
                        <Flex className="bg-white text-black rounded-full text-xl" p="3">
                            <FaInstagram />
                        </Flex>
                    </Link>
                </Flex>
            </Flex>
            </Flex>
        </div>
    </>
  );
};

export default Overview;
