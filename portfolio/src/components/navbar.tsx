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
    <nav className="navbar">
      <div className="navbar-icon">
        <Link href="/">
          <Image src="/smiski_laptop.png" alt="Smiski on Laptop" width={40} height={40} className="ml-2" />
        </Link>
      </div>
      <div className="navbar-rhs">
        <ul className="navbar-items">
          {navbarData.map((item, index) => (
            <li key={index}>
              <Link href={item.link} className="navbar-item">{item.heading}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
