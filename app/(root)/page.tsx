import { Box, Flex } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Home() {
  const getYear = new Date().getFullYear()
  return (
    <Flex className='min-h-screen'>
      <div className='h-min-screen flex-1 justify-center md:flex hidden bg-[#F2F2F2]'>
        <Flex direction={"column"} p="9" justify={"between"} className='h-full'>
          <Image
            src="/logo.png"
            alt="Bali"
            width={80}
            height={80}
            quality={100}
          />
          <Flex direction={"column"} gap="5">
            <h1 className='text-7xl font-[900]'>
              Call me <br />
              Mohamed
            </h1>
            <p className='text-xl text-gray-600'>
              Film Maker | Visual Storyteller
            </p>
            <Flex align={"center"} gap="4">
              <Link href="/Portfolio" className='btn border-none text-white rounded-none w-32'>
                Portfolio
              </Link>
              <Link href="/Contact" className='btn btn-active bg-gray-200 border-none text-black hover:text-white rounded-none w-32'>
                Contact me
              </Link>
            </Flex>
          </Flex>
          <p className='text-gray-600'>
            &copy; {getYear} Bali - by Aymen Jdily
          </p>
        </Flex>
      </div>
      <Flex className='flex-1 relative'>
        <Image
          src="/home.png"
          alt="home"
          fill
          quality={100}
          className='object-cover'
        />
        <div className='absolute md:hidden flex min-h-screen w-full'>
          <Flex direction={"column"} p="9" justify={"between"} className='min-h-screen' width={"100%"}>
            <Image
              src="/logo.png"
              alt="Bali"
              width={80}
              height={80}
              quality={100}
            />
            <Flex direction={"column"} gap="5">
              <h1 className='md:text-6xl text-5xl font-[900] text-white'>
                Call me <br />
                Mohamed
              </h1>
              <p className='text-xl text-gray-200'>
                Film Maker | Visual Storyteller
              </p>
              <Flex align={"center"} gap="4">
                <Link href="/Portfolio" className='btn border-none bg-white text-black hover:text-white rounded-none w-32'>
                  Portfolio
                </Link>
                <Link href="/Contact" className='btn btn-active bg-gray-400 border-none text-black hover:text-white rounded-none w-32'>
                  Contact me
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </Flex>
  )
}
