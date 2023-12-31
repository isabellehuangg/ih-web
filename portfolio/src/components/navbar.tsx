import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarItem {
  link: string;
  heading: string;
}

interface NavbarProps {
  navbarData: NavbarItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navbarData }) => {
  return (
    <nav className="flex flex-row items-center justify-between p-2 gradient-nav border-b-2 border-green">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/smiski_laptop.png" alt="Smiski on Laptop" width={40} height={40} className="ml-2" />
        </Link>
      </div>
      <div className="ml-auto">
        <ul className="flex gap-1">
          {navbarData.map((item, index) => (
            <li key={index}>
              <Link href={item.link} className="text-green font-semibold m-2 py-1 px-2 hover:underline">{item.heading}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
