'use client';

import { useState } from 'react';
import Link from 'next/link';

const links = [
  { name: 'Products', href: '/download' },
  { name: 'Use cases', href: '/home' },
  { name: 'Support', href: '/' },
  { name: 'Get TNOS', href: '/download' },
  { name: 'About us', href: '/' },
];

export default function BarNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleBarNav() {
    setIsOpen(!isOpen);
  }

  return (
  <>

  <nav>
    <button onClick={toggleBarNav} className="fixed right-0 top-6 z-30 m-3 text-xl bg-white dark:bg-black p-1 rounded opacity-50 text-black dark:text-white p-2">
      {isOpen ? '✖' : '☰'}
    </button>

    {isOpen && (
    <div>
      <div className="fixed flex flex-row justify-between top-0 p-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <Link href="/">
        TNOS
      </Link>
      <p>tu-nguyen@tu-nguyen.org</p>
      </div>
      <div className="grid md:flex justify-center fixed top-8 z-20 bg-white dark:bg-black w-full h-full md:h-18 overflow-auto">
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href} className="bg-black text-white dark:bg-white dark:text-black text-center hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 rounded-lg m-3 p-3 w-28 h-12">
            {link.name}
          </Link>
        );
      })}
      </div>
    </div>
    )}
  </nav>

  </>
  );
}
