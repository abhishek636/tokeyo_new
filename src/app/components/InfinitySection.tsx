"use client";

import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import InfinityCanvas from "./InfinityCanvas";
import LightRayBackground from './LightRayBackground';
// Make sure this component exists
import RayBackground from './RayBackground';
import FadeInOnScroll from "./FadeInOnScroll";

const InfinitySection: FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="relative w-full  overflow-hidden">


      {/* LightRayBackground is now placed as a background with a z-index */}
      <LightRayBackground className="z-10 w-full" />
      {/* RayBackground is another background layer that should be behind the rays */}
      <RayBackground className="z-0" />

      <FadeInOnScroll>
        <h1 className="md:text-[100px] text-white font-semibold text-center leading-[1.2] z-20 max-w-[972px] md:pt-[175px] mb-4 pt-30 mx-auto relative">
          Tokenize Real World Assets in One Click
        </h1>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className="relative md:h-[700px] h-[300px]">
          {!isMobile && (
            <>
              <Image
                src="/eth.png"
                alt="Ethereum"
                width={70}
                height={70}
                className="absolute left-[32%] top-[15%] animate-float z-30"
              />
              <Image
                src="/btc.png"
                alt="Bitcoin"
                width={70}
                height={70}
                className="absolute right-[37%] top-[19%] animate-float-delay z-30"
              />
              <Image
                src="/sol.png"
                alt="Solana"
                width={70}
                height={70}
                className="absolute left-[40%] bottom-[36%] animate-float z-30"
              />
              <Image
                src="/sol1.png"
                alt="Solana Variant"
                width={70}
                height={70}
                className="absolute right-[37%] bottom-[35%] animate-float-delay z-30"
              />
            </>
          )}
          <div className="relative w-full h-full ">
            <InfinityCanvas />
          </div>
          <Image
            src="/phone-mockup.png"
            alt="App Preview"
            fill
            className="object-contain z-10"
          />
        </div>
        <div className="text-center relative z-40 md:-mt-[100px] -mt-[50px] bg-black">
          <div className="px-[1px] mb-4 sm:mb-10 py-[1px] rounded-full bg-gradient-to-r from-[#2388ffa3] to-[#2384ff69] flex items-center justify-center w-fit mx-auto shadow-[0px_4px_74px_0px_#68B7FF59]">
            <Link href="#" className="px-7.5 py-3 bg-black text-white rounded-full font-medium text-[18px] font-medium hover:bg-opacity-90 transition flex gap-3 items-center">
              Download By App
              <Image
                src="/apple.svg"
                alt="Illustration"
                width={28}
                height={28}
                className="md:w-[34px] md:h-[34px]"
              />
            </Link>
          </div>
          <p className="md:text-[20px] mb-4 sm:mb-0  text-base text-white">
            Do not be Late today- Get Early Access Now
          </p>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default InfinitySection;