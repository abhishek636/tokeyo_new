"use client";
import FloatingBox from "./FloatingBox";
import Image from "next/image";
// const NeonBlob = dynamic(() => import("@/app/components/NeonBlob"), { ssr: false });
import Orb from "./Orb";
import Galaxy from "./Galaxy";

export default function TokenizationSection() {
  return (
    <section className="relative flex flex-col items-center justify-center pb-12 sm:pb-20 bg-black text-white overflow-hidden">
      {/* Blob 3D Image */}
      {/* <div className="relative  flex items-center justify-center"> */}
      {/* <Image
          src="/blob.png" // Replace with your 3D blob image path
          alt="3D Blob"
          width={660}
          height={700}
          className="z-10"
        /> */}

      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1}
          glowIntensity={0.2}
          saturation={0.8}
          hueShift={240}
        />
      </div>
      <div className="relative w-full sm:h-[700px] h-[350px] flex items-center justify-center">
        {/* <NeonBlob /> */}
        <div style={{ width: '100%', height: '100%' }}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>


        {/* Floating Badges */}
        <FloatingBox className="absolute left-1/4 sm:left-1/3 sm:top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10">
          <Image
            src="/eth.png"
            alt="Ethereum"
            width={91}
            height={91}
            className="w-16 h-16 md:w-[91px] md:h-[91px]"
          />
        </FloatingBox>

        <FloatingBox className="absolute sm:right-1/3 sm:top-1/2 right-1/4 transform -translate-y-1/2 translate-x-1/2">
          <Image
            src="/btc.png"
            alt="Ethereum"
            width={91}
            height={91}
            className="w-16 h-16 md:w-[91px] md:h-[91px]"
          />
        </FloatingBox>

        <FloatingBox className="absolute right-1/4 left-0 top-2/3 transform -translate-y-1/2 translate-x-1/2 z-10">
          <div className=" bg-white/10 backdrop-blur-xs w-fit sm:px-8 px-4 py-2 sm:py-4.5 rounded-full sm:text-xl shadow-md">
            24/7 Global Liquidity
          </div>
        </FloatingBox>

        <FloatingBox className="absolute bottom-0 left-1/4 transform translate-y-1/2">
          <Image
            src="/sol1.png"
            alt="Ethereum"
            width={91}
            height={91}
            className="w-16 h-16 md:w-[91px] md:h-[91px]"
          />
        </FloatingBox>

        {/* <div className="absolute bottom-1/24 right-0 z-10">
          <div className=" bg-white/10 backdrop-blur-xs w-fit px-8 py-4.5 rounded-full text-xl shadow-md">
            Fractional Ownership
          </div>
        </div> */}

        <FloatingBox className="absolute bottom-1/24 right-1/5 z-10">
          {/* Outer gradient border */}
          <div className="relative px-[1px] py-[1px] rounded-full bg-gradient-to-r from-white/15 to-white/5">
            {/* Inner content → change bg color here */}
            <div className="bg-black/40 backdrop-blur-sm sm:px-8 px-4 py-2 sm:py-4.5 rounded-full sm:text-xl text-white">
              Institutional-Grade Compliance
            </div>
          </div>
        </FloatingBox>

        <FloatingBox className="absolute sm:bottom-1/10 sm:left-1/4 left-1/8 z-10">
          {/* Outer gradient border */}
          <div className="relative px-[1px] py-[1px] rounded-full bg-gradient-to-r from-white/15 to-white/5">
            {/* Inner content → change bg color here */}
            <div className=" backdrop-blur-sm sm:px-8 px-4 py-2 sm:py-4.5 rounded-full sm:text-xl text-white bg-black/40">
              Fractional Ownership
            </div>
          </div>
        </FloatingBox>

        {/* <div className="absolute bottom-1/10 left-0 z-10">
          <div className=" bg-white/10 backdrop-blur-xs w-fit px-8 py-4.5 rounded-full text-xl shadow-md">
            Fractional Ownership
          </div>
        </div> */}
      </div>
    </section>
  );
}
