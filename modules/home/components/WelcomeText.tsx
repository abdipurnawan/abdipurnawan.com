'use client';

import { TypeAnimation } from 'react-type-animation';

export default function WelcomeText() {
  return (
    <div className="flex gap-2 text-2xl lg:text-3xl font-medium font-sora">
      {/* <div className="mr-1 animate-waving-hand">👋</div> */}
      <h1>
        <span className="mr-2">Hi, I&apos;m</span>
        <TypeAnimation
          sequence={[`Abdi Purnawan`, 2000, `Software Engineer`, 2000]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
        />
      </h1>
    </div>
  );
}
