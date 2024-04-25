import React from 'react';
import { Particles } from './particles';
const Benefits = () => {
  return (
    <div className="max-w-sm mx-auto bg-gray-800 text-gray-200 rounded-lg shadow-md p-6 mt-5 border border-gray-200" data-aos='fade-down'>
        <Particles
                      className="absolute inset-0 -z-10 opacity-40 group-hover:item:opacity-100 transition-opacity duration-1000 ease-in-out"
                      quantity={100}  // Simplified quantity for a consistent look
                      color="#34d399"  // Single color for particles
                      vy={-0.2}
                    />
                    
      <h2 className="text-lg font-semibold text-gray-200 mb-3">Benefits</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li className="text-white font-semibold">Save Time & Effort: Let professionals handle your social media strategy and execution.</li>
        <li className="text-white font-semibold">Expert Management: Access to social media experts to grow your accounts efficiently.</li>
        <li className="text-white font-semibold">Rapid Growth Guarantee: Achieve 10K followers within a month or enjoy our services for free.</li>
      </ul>
      <h2 className="pt-10 text-lg font-semibold text-gray-200 mb-3">How It Works</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li className="text-white font-semibold">Sign Up: Quick and easy sign-up with minimal information required.</li>
        <li className="text-white font-semibold">We Strategize: Our experts formulate a personalized plan.</li>
        <li className="text-white font-semibold">You Grow: Watch your followers increase with real-time updates.</li>
      </ul>
    </div>
  );
}

export default Benefits;
