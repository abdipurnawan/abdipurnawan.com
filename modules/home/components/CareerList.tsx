import Link from 'next/link';

import { HiOutlineBriefcase as CareerIcon } from 'react-icons/hi';
import { LuArrowUpRightFromCircle } from 'react-icons/lu';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { CAREERS } from '@/common/constant/careers';

import CareerCard from './CareerCard';

const RESUME_URL = 'https://read.cv/abdipurnawan';

export default function CareerList() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Career" icon={<CareerIcon className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My professional career journey.</p>
          <Link
            href={RESUME_URL}
            target="_blank"
            passHref
            className="flex gap-2 transition-all duration-300 items-center text-neutral-600 dark:text-neutral-500 hover:text-neutral-700 hover:dark:text-neutral-300"
            data-umami-event="Download Resume"
          >
            <LuArrowUpRightFromCircle />
            <span>View My Journey</span>
          </Link>
        </SectionSubHeading>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {CAREERS?.map((career, index) => <CareerCard key={index} {...career} />)}
      </div>
    </section>
  );
}
