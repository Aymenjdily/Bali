"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { WorksContent } from "@/constants";
import Image from "next/image";
import { Flex } from "@radix-ui/themes";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

const Works = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };
  const getYear = new Date().getFullYear();

  return (
    <>
      <Swiper
        modules={[Navigation]}
        breakpoints={breakpoints}
        spaceBetween={50}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        pagination={{ clickable: true }}
        className="mt-10 gap-10 flex w-full"
      >
        {WorksContent.map((work) => (
          <SwiperSlide key={work.src} className="h-full w-full flex">
            <div className="relative w-full h-96">
              <Image
                src={work.src}
                alt={work.label}
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <h1 className="font-bold mt-2">{work.label}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
      <Flex direction={"column"} className="w-full" gap='5'>
        <p className="text-start text-sm text-gray-400">
          swipe to view <br /> next or previous
        </p>
        <Flex align={"center"} justify={"between"}>
          <Flex>
            <button className="arrow-right flex arrow bg-black hover:bg-slate-800 cursor-pointer hover:text-lightBlue transition-colors text-white px-2 py-2 rounded-full mr-5 text-xl">
              <AiOutlineCaretLeft />
            </button>
            <button className="arrow-left flex arrow bg-black hover:bg-slate-800 cursor-pointer hover:text-lightBlue transition-colors text-white px-2 py-2 rounded-full ml-5 text-xl">
              <AiOutlineCaretRight />
            </button>
          </Flex>
          <p className="text-gray-600">
            &copy; {getYear} Bali - by Aymen Jdily
          </p>
        </Flex>
      </Flex>
    </>
  );
};

export default Works;
