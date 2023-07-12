'use client'

import { MdExpandMore } from 'react-icons/md';
import Link from 'next/link';

const AnimatedButton = () => {
  return (
    <Link href="/timeline" className='mx-auto'>
      <button className={`mx-auto text-accent2 font-bold border border-accent2 rounded-full animate-bounce`}>
        <MdExpandMore className="inline-block m-1 text-4xl" />
      </button>
    </Link>
  );
};

export default AnimatedButton;
