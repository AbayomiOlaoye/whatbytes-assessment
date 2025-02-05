import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png'
import ThemeToggle from '../Theme/ThemeToggle';

const Header = () => {
  return (
    <header className="fixed h-[80px] top-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-white shadow-md dark:bg-gray-800">
      <Image
        src={logo}
        alt='Whatbytes logo'
        className="max-w-[60%]"
      />

      <article className="flex justify-end items-center gap-3">
        <ThemeToggle />
        <div className="flex items-center space-x-2 bg-gray-100 py-2 px-4 rounded-full dark:bg-gray-700">
          <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-500"></div>
          <span className="text-sm text-black font-semibold dark:text-white">Oluwatoyin Olaoye</span>
        </div>
      </article>
    </header>
  )
}

export default Header