"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdOutlineBarChart, MdWork } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';

const aside = [
  {
    id: '001',
    link: "Dashboard",
    href: "/",
    icon: <MdOutlineBarChart />
  },
  {
    id: '002',
    link: "Skill Test",
    href: "/",
    icon: <FaAward />
  },
  {
    id: '003',
    link: "Internship",
    href: "/",
    icon: <MdWork />
  }
]

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.innerWidth > 768 ? setIsOpen(true) : setIsOpen(false);
  },[]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden max-h-fit m-4 my-3 p-2 absolute z-50 bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Open navigation menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600 dark:text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <nav
        className={`bg-white md:translate-x-0 fixed top-[80px] left-0 py-20  md:h-full w-64 p-4 space-y-4 shadow-md dark:bg-gray-800 dark:border-r text-black dark:text-white dark:border-gray-700 md:static md:w-64 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {aside.map((nav) => (
          <Link
            key={nav.id}
            href={nav.href}
            className="flex active:text-blue-500 focus:text-blue-500 items-center space-x-2 py-2 px-4 hover:bg-gray-100 rounded-md cursor-pointer dark:hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            {nav.icon}
            <span>{nav.link}</span>
          </Link>
        ))}
      </nav>
    </>
  )
}

export default Aside