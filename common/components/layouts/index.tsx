'use client';

import { usePathname } from 'next/navigation';

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { ReactNode, useEffect } from 'react';

import Sidebar from './sidebar';
import { Meteors } from '../elements/Meteors';

interface LayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  const pathName = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50
    });
  }, []);
  return (
    <div className="flex flex-col justify-center lg:flex-row lg:gap-5 lg:pt-10">
      <div className="flex flex-col lg:flex-row w-full justify-center lg:gap-5">
        {pathName !== '/me' && (
          <header>
            <Sidebar />
          </header>
        )}
        <main className="lg:max-w-[854px] transition-all duration-300 w-full lg:min-h-screen overflow-y-auto no-scrollbar">
          <Meteors number={20} />
          {children}
        </main>
      </div>
    </div>
  );
}
