import React from "react";
import Image from "next/image"; // Import the Image component

export default function Navbar({ navbarData }) {
  return (
    <nav className="flex flex-row items-center justify-between p-2 gradient-nav border-b-2 border-green">
      <div className="flex items-center">
        <a href = "/">
            <Image src="/smiski_laptop.png" alt="Disruptive Logo" width={40} height={40} className="ml-2"/>
        </a>
      </div>
      <div className="ml-auto">
        <ul className="flex gap-1">
            {navbarData.map((item: any, index: any) => (
                <li key={index}>
                    <a href={item.link} className="text-green font-semibold m-2 py-1 px-2 hover:underline">
                        {item.heading}
                    </a>
                </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}