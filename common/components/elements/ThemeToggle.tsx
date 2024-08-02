'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';

import clsxm from '@/common/libs/clsxm';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30
};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const isOn = resolvedTheme === 'dark';

  return (
    <motion.div
      className={clsxm(
        'group relative w-16 h-8 flex items-center rounded-full py-1 px-0.5 cursor-pointer select-none',
        isOn ? 'bg-white bg-opacity-20' : 'bg-black bg-opacity-5 border'
      )}
      onClick={toggleTheme}
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20
      }}
    >
      <div className="absolute right-2 z-0 pointer-events-none">
        <LuMoon className="text-black" size={18} />
      </div>
      <div className="absolute left-2 z-0 pointer-events-none">
        <LuSun className="text-white" size={18} />
      </div>
      <motion.div
        className={clsxm(
          'z-10 flex justify-center items-center h-7 w-7 rounded-full',
          isOn ? 'ml-auto bg-white' : 'bg-gray-700'
        )}
        layout
        transition={spring}
      >
        {isOn ? (
          <LuMoon className="text-black pointer-events-none" size={16} />
        ) : (
          <LuSun className="text-white pointer-events-none" size={16} />
        )}
      </motion.div>
    </motion.div>
  );
}
