import { useState } from 'react';
import { InlineWidget } from "react-calendly";
import { Separator } from '@radix-ui/react-separator';

export const Calendly = () => {
    const [showWidget, setShowWidget] = useState(false);

    return (
        <div className="text-center pt-96" id='calendly'>
            <h1 className="pb-4 font-bold tracking-tight text-4xl">Ready to transform your Business? <br />
            Book a 
            <span className="text-transparent bg-clip-text bg-gradient-to-r 
                        from-cyan-400 via-blue-600 to-cyan-500"> FREE </span>
             Marketing Consultation Below!
            </h1>
            <div className='flex items-center justify-center' >
                                <Separator className='mt-3 mb-2 bg-slate-100/20 h-1 w-80' data-aos='fade-down'/>
                            </div>
                            {!showWidget && (
                <button onClick={() => setShowWidget(true)} className="transition duration-150 ease-in-out font-medium rounded px-4 py-2 text-black bg-white hover:bg-opacity-80">
                    Schedule Now
                </button>
            )}
            {showWidget && 
                <InlineWidget 
                    url="https://calendly.com/patricklewis2009/free-15-minute-call-with-a-marketing-professional" 
                    styles={{height: '1000px', borderRadius: "5px"}}
                    
                />
            }
        </div>
    );
};
