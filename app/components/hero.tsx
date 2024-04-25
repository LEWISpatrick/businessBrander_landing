import React from 'react';
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { Particles } from './particles';

export const Hero = () => {
    return (
        <div className="pt-80">
              <Particles className='absolute inset-0 -z-10'/>
              <Particles className='absolute inset-0 -z-10'/>
              <Particles className='absolute inset-0 -z-10'/>
              <Particles className='absolute inset-0 -z-10'/>
              <Particles className='absolute inset-0 -z-10'/>
              <Particles className='absolute inset-0 -z-10'/>
              <Particles className='absolute inset-0 -z-10'/>
              <Particles className='absolute inset-0 -z-10'/>
                <div className="text-center px-8">

                    <div className="mb-6" data-aos='fade-down'>
                        <Link href="https://www.instagram.com/businesbrander/"
                        target="_blank">
                            <div className="relative inline-flex before:absolute before:inset-0">
                                <div className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border rounded-full text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full group border-slate-100/40"
                                    target="_blank">
                                    <span className="relative inline-flex items-center">
                                        <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out">
                                             Instagram {" "}
                                        </span>
                                         -&gt;
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <h1 className='pb-4 font-extrabold tracking-tight text-transparent
                                text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                                bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-500'
                        data-aos='fade-down'>
                        BusinessBrander
                    </h1>

                    <span className='mb-4 sm:mb-8 text-sm sm:text-lg text-zinc-100/60 sm:text-zinc-100/40 font-medium'
                        data-aos='fade-down' data-aos-delay='250'>
                        Grow social media →  get more clients → make more money 💸.
                    </span>

                </div>

                <div className="pt-10 flex items-center justify-center w-full sm:flex-row" data-aos='fade-down' data-aos-delay='450'>
                <Link
                    className="justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5 text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                    href="#calendly">
                    
                    Book a free call <ArrowRight className="w-3 h-3 ml-1 text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out" />
                    
                </Link>
            </div>
       

        </div>
    );
};
