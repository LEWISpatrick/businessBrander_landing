import { HighlighterItem, HighlightGroup } from "./highlighter";
import Link from "next/link";
import { Particles } from "./particles";
import { ArrowRight, Check } from "lucide-react";
import { useMemo } from "react";
import { cn } from "@/libs/utils";
import { Separator } from "@radix-ui/react-separator";

const tiers = [
  {
    name: "Launch Special",
    price: "129",
    description: "Reach 1K Followers in Just One Month or Pay Nothing!",
    features: [
      "Manage social media", "Get social media to 1k+ Followers",
       "+Bonus: Website+hosting+domain", 
       "+Bonus: 15 min weekly call with marketing professional", // Added bonus feature ], cta: "Get Started for FREE", condition: "Reach 1K Followers in Just One Month or Pay Nothing!"  // Added bonus feature
        "Bonus: $50 Google Ads Credit: Perfect for boosting visibility and driving targeted traffic."
      ],
    cta: "Get Started for FREE",
    condition: "Exclusive offer for our first five clients",
  },
];

export const Pricing: React.FC = () => {
  return (
    <section className="relative" id='pricing'>
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-0 flex items-center justify-center w-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-primary-500 rounded-full blur-[120px] opacity-50" />
        </div>
      </div>
      
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <div className="inline-flex pb-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-200">
              Pricing Plans
            </div>
            <h2 className="pb-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
              Simple and transparent
            </h2>
            <p className="text-lg text-zinc-400">
              Grow Your Business Now
            </p>
            <div className="flex items-center justify-center">
                <Separator className="mt-3 bg-slate-100/20 h-1 w-80"/>
            </div>
          </div>
          <HighlightGroup className="grid gap-6 md:grid-cols-12 group">
            {tiers.map((tier, i) => (
              <div
                key={tier.name}
                className="md:col-span-12 lg:col-span-4 lg:col-start-5 group/item"  // Centering the box on large screens
                data-aos="fade-down"
              >
                <HighlighterItem>
                  <div className="relative bg-gray-800 rounded-[inherit] z-20 overflow-hidden border border-gray-200">
                    <Particles
                      className="absolute inset-0 -z-10 opacity-40 group-hover:item:opacity-100 transition-opacity duration-1000 ease-in-out"
                      quantity={50}  // Simplified quantity for a consistent look
                      color="#34d399"  // Single color for particles
                      vy={-0.2}
                    />
                    <div className="flex flex-col p-8">
                      <h3 id={tier.name} className="text-lg font-semibold">{tier.name}</h3>
                      <h3 className="inline-flex items-baseline pb-1 mt-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
                        <span className="text-4xl">${tier.price}</span>
                        <span className="text-lg">/ month</span>
                      </h3>
                      <p className="mt-4 text-sm text-zinc-400">{tier.description}</p>
                      <div className="mt-4 text-xs italic text-zinc-500">{tier.condition}</div>
                      <ul className="mt-8 text-sm space-y-3 text-zinc-300">
                        {tier.features.map((feature, index) => (
                          <li key={index} className="flex gap-x-3">
                            <Check
                              className={cn("h-6 w-5 flex-none", {"text-emerald-400": true})}
                              aria-hidden="true"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        className="mt-16 flex items-center justify-center w-full px-4 py-1.5 font-medium transition duration-150 ease-in-out rounded text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                        href="/overview"
                      >
                        {tier.cta}
                        <ArrowRight className="w-3 h-3 ml-1 text-primary-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
            ))}
          </HighlightGroup>
        </div>
      </div>
    </section>
  );
};
