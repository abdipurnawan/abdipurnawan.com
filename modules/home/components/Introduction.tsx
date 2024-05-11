import Link from 'next/link';

import { TbCoffee } from 'react-icons/tb';

import { SAWERIA_URL } from '@/common/constant';

export default function Introduction() {
  return (
    <section className="bg-cover bg-no-repeat space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 text-2xl lg:text-3xl font-medium font-sora">
          <h1>Hi, I&apos;m Abdi</h1> <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <Link href={SAWERIA_URL} target="_blank" className="">
          <TbCoffee size={25} />
        </Link>
      </div>

      <div className="space-y-4">
        <ul className="flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700 dark:text-neutral-400">
          <li>Software Engineer</li>
          <li>
            Based in Denpasar, Bali <span className="ml-1">🇮🇩</span>
          </li>
        </ul>
        <p className="leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300">
          I am a full stack developer based in Bali, Indonesia, with a passion for crafting web applications. My
          expertise lies in working with Laravel and Next.js, which allows me to create dynamic and interactive
          websites. I am also enthusiastic about staying up-to-date with the latest technology stack, constantly seeking
          opportunities to expand my knowledge and skills in the ever-evolving world of web development.
        </p>
      </div>
    </section>
  );
}
