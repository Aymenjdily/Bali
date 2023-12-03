"use client";

import { NavLinks } from "@/constants";
import { DropdownMenu, Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";
import { usePathname } from "next/navigation";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav>
      <Flex align={"center"} justify={"between"}>
        <Image src="/logo.png" alt="bali" width={80} height={80} />
        <ul className="md:flex hidden items-center gap-5">
          {NavLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={classnames({
                  "font-medium px-3 py-2 hover:bg-black hover:text-white duration-250 transition-colors":
                    true,
                  "bg-black text-white font-bold": link.href === pathname,
                })}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden flex">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <button className="outline-none text-3xl">
                <TiThMenu />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content color="gray" className="p-5">
              {NavLinks.map((link) => (
                <DropdownMenu.Item key={link.href} className="my-3">
                  <Link
                    href={link.href}
                    className={classnames({
                      "font-medium  text-lg  transition-colors":
                        true,
                      "font-extrabold": link.href === pathname,
                    })}
                  >
                    {link.label}
                  </Link>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </Flex>
    </nav>
  );
};

export default Navbar;
