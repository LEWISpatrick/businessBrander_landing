import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import Benefits from "./benefits";
import HowItWorks from "./howitworks";
import { Particles } from './particles';

export const GrowSocial = () => {
  return (
            
            <div className='text-center pt-80'>
                <Particles className='absolute inset-0 -z-10'/>
      

                    <h1 className="font-bold tracking-tight text-5xl mt-20 lg:text-6xl pb-10" 
                        data-aos='fade-down'>
                        Grow Your Social Media Presence <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r 
                        from-cyan-400 via-blue-600 to-cyan-500">Effortlessly</span>
                    </h1>


                            <span className=' text-lg text-zinc-100/40 font-medium ' data-aos='fade-down'>
                            Reach 10K Followers in Just Three Months or Pay Nothing!
                            </span>
                            <div className='flex items-center justify-center' >
                                <Separator className='mt-3 mb-2 bg-slate-100/20 h-1 w-80' data-aos='fade-down'/>
                            </div>
                            <Benefits />
                            
                            <div className="pt-10 flex items-center justify-center w-full sm:flex-row" >
                            <Link
                                className="justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded 
                                        px-2 sm:px-4 py-1 text-sm sm:text-base md:text-lg
                                        text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group mb-4 sm:mb-8 md:mb-16"
                                href="#pricing" data-aos='fade-down'>
                                
                                Sign Up Now — First 5 Clients Get an Exclusive $150/mo Deal! <ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 ml-1 text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out" />
                                
                            </Link>

                    </div>
        </div>
  )
}
