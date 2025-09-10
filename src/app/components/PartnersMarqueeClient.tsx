"use client";

import Image from "next/image";
import FadeInOnScroll from "./FadeInOnScroll";

interface Partner {
  id: number;
  logo: string;
  alt: string;
}

export default function PartnersMarqueeClient({ partners }: { partners: Partner[] }) {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <>
      <FadeInOnScroll>
        <h2 className="font-bold text-gray-900 text-center max-w-[629px] mx-auto">
          Helping teams at the world best Companies
        </h2>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <div className="relative">
          <div className="flex overflow-hidden pt-10 sm:pt-20">
            <div className="flex animate-marquee whitespace-nowrap">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 px-8"
                >
                  <div className="min-w-[200px]">
                    <div className="relative h-16 w-full mb-3">
                      <Image
                        src={partner.logo}
                        alt={partner.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInOnScroll>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}
