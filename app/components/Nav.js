"use client";

import Link from "next/link";
import { useState } from "react";
import { menuItems } from "./MenuItems";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-black py-8 ">
      <div className="flex justify-between items-center">
        <div className="lg:hidden md:block" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </div>
      </div>
      <ul
        className={`md:flex md:justify-center md:items-center ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {menuItems.map((item) => (
          <li key={item.id} className="mr-6">
            <Link href={item.link}>
              <span className="hover:text-gray-400 text-lg">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
