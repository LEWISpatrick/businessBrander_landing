import React from 'react';
import { Separator } from '@radix-ui/react-separator';
import Link from 'next/link';
import { ArrowRight , Check} from 'lucide-react';
import { cn } from "@/libs/utils";
import { Particles } from './particles';
const WhatWeDo = () => {
  return (
    <div className='pt-80 mt-10 text-center'>
        <h1 className="font-bold tracking-tight text-5xl lg:text-6xl pb-3"  data-aos='fade-down'
            >
            What We Do
        </h1>
        <div className='flex items-center justify-center'>
            <Separator className='mb-2 bg-slate-100/20 h-1 w-80' />
        </div>
        <div className="max-w-sm mx-auto bg-gray-800 text-gray-200 rounded-lg shadow-md p-6 mt-5 border border-gray-200" data-aos='fade-down'>
                 <Particles
                      className="absolute inset-0 -z-10 opacity-40 group-hover:item:opacity-100 transition-opacity duration-1000 ease-in-out"
                      quantity={100}  // Simplified quantity for a consistent look
                      color="#34d399"  // Single color for particles
                      vy={-0.2}
                    />
            <ul className="space-y-3 mb-5 font-semibold">
                <li className=" mb-5 flex items-start">
                <Check
                              className={cn("h-6 w-5 flex-none", {"text-emerald-400": true})}
                              aria-hidden="true"
                            />
                    We help Mexican restaurants in Atlanta grow their social media.
                </li>
                <li className=" mb-5 flex items-start ">
                <Check
                              className={cn("h-6 w-5 flex-none", {"text-emerald-400": true})}
                              aria-hidden="true"
                            />
                    We guarantee follower growth for your business.
                </li>
            </ul>
            <p className=' text-sm mb-5'>Grow social media → get more clients → make more money <span className='text-xl font-bold'>💰</span></p>
            <Link href="#calendly" className="justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-2 text-black bg-white hover:bg-opacity-80">
                Book a free call
                <ArrowRight className="w-4 h-4 ml-1 text-zinc-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out" />
            </Link>
        </div>
    </div>
  );
}

export default WhatWeDo;
