"use client";

import React, { FC } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
// import LightRayBackground from "./LightRayBackground";
import RayBackground from "./RayBackground";
import GradientLines from "./GradientLines";
import FadeInOnScroll from "./FadeInOnScroll";
import DotGrid from "./DotGrid";
// import SplashCursor from './SplashCursor';
// import Plasma from "./Plasma";

// Dynamically import InfinityCanvas to disable SSR
const InfinityCanvas = dynamic(() => import("./InfinityCanvas"), { ssr: false });

const TokenizationStep: FC = () => {
    return (
        <section className="relative overflow-hidden">
            <div style={{ width: '100%', height: '100%', position: 'absolute' }} className="z-1">
                <DotGrid
                    dotSize={2}
                    gap={15}
                    baseColor="#5227FF"
                    activeColor="#5227FF"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>

            {/* <SplashCursor /> */}
            {/* <LightRayBackground className="-z-10" /> */}
            {/* <div style={{ width: '100%', height: '100%', position: 'absolute' }} className="z-10">
                <Plasma
                    color="#ffffffff"
                    speed={0.6}
                    direction="forward" 
                    scale={1.1}
                    opacity={0.8}
                    mouseInteractive={true}
                />
            </div> */}
            <RayBackground
                className="absolute inset-0 z-0"
                circleCount={4}
                circleBaseSize={200}
                circleSpacing={160}
                circleBorders={[
                    "border-[#2A2A2A]",
                    "border-[#3A3A3A]",
                    "border-[#4A4A4A]",
                    "border-[#5A5A5A]",
                ]}
                circleBackgrounds={[
                    "bg-[#2A2A2A]/20",
                    "bg-[#3A3A3A]/20",
                    "bg-[#4A4A4A]/20",
                    "bg-[#5A5A5A]/20",
                ]}
                circlePositionClass="absolute top-2/7 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <GradientLines className="absolute inset-0 z-0" />

            <div className="sm:py-20 py-12 relative max-w-[1280px] mx-auto">
                <div className="relative z-10">
                    <FadeInOnScroll>
                        <h2 className="text-center sm:pb-0 pb-8 text-white">
                            Why Tokenization is the Future of
                            <br className="hidden lg:block" /> Capital Markets.
                        </h2>
                    </FadeInOnScroll>

                    <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
                        <FadeInOnScroll className="relative md:h-[700px] h-[400px] w-full">
                            <InfinityCanvas />
                            <Image
                                src="/leftphone.png"
                                alt="Phone UI"
                                width={700}
                                height={700}
                                className="drop-shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            />
                        </FadeInOnScroll>
                        <FadeInOnScroll className="w-full md:w-1/2 flex flex-col items-center text-center max-w-[463px]">
                            <Image
                                src="/Check.svg"
                                alt="Check"
                                width={91}
                                height={91}
                                className="pb-9"
                            />
                            <h3 className="pb-4">Connect & Verify Your Assets</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Upload details of your physical or financial asset (real estate,
                                art, securities, etc.) Our platform handles legal compliance and
                                performs quick KYC/AML checks.
                            </p>
                        </FadeInOnScroll>
                    </div>

                    <div className="mx-auto flex flex-col md:flex-row items-center justify-between mt-12">
                        <FadeInOnScroll className="w-full md:w-1/2 flex flex-col items-center text-center max-w-[463px]">
                            <Image
                                src="/Group 21 (1).svg"
                                alt="Check"
                                width={91}
                                height={91}
                                className="pb-9"
                            />
                            <h3 className="pb-4">Tokenize Instantly</h3>
                            <p className="text-gray-300 leading-relaxed">
                                With one click, mint tokens backed by your verified asset. Each token
                                is created using secure smart contracts on a blockchain of your choice
                                (Ethereum, Polygon, etc.).
                            </p>
                        </FadeInOnScroll>
                        <FadeInOnScroll className="relative md:h-[700px] h-[400px] w-full">
                            <InfinityCanvas />
                            <Image
                                src="/RIGHTPHONE.png"
                                alt="Phone UI"
                                width={700}
                                height={700}
                                className="drop-shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            />
                        </FadeInOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TokenizationStep;
