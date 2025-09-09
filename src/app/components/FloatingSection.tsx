"use client";

import React, { FC } from "react";
import Image from "next/image";
import FadeInOnScroll from "./FadeInOnScroll";
import FloatingBox from "./FloatingBox";
import { Typewriter } from "react-simple-typewriter";

const FloatingSection: FC = () => {
  return (
    <section
      className="relative w-full bg-cover bg-top overflow-hidden"
      style={{
        backgroundImage: "url('/Mask group (2).png')",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:py-16 py-12 flex flex-col items-center">
        <FadeInOnScroll className="flex flex-col items-center">
          <p className="text-center text-gray-500 max-w-2xl">
            The simplest way to tokenize your portfolio. Access real estate, art,
            DeFi strategies, and even tokenized US Treasury bills. No complex
            wallet setup. Accessible in just a few clicks.
          </p>
          <button className="mt-6 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition">
            Download app Now
            <Image
              src="/qrcircle.png"
              alt="Arrow Right"
              width={28}
              height={28}
              className="inline-block ml-2"
            />
          </button>
        </FadeInOnScroll>

        <div className="relative w-full flex justify-center mt-12">
          {/* <FadeInOnScroll>
            <div className="absolute top-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 text-center overflow-auto opacity-[0.08] max-w-[1350px] mx-auto w-full">
              <h2 className="md:text-[80px] text-4xl font-semibold tracking-widest text-black/98 text-wrap ">
                Buy, Sell & send tokenized Assets in seconds.
              </h2>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="absolute top-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 text-center overflow-auto opacity-[0.08] max-w-[1350px] mx-auto w-full">
              <h2 className="relative inline-block md:text-[80px] text-4xl font-semibold tracking-widest text-black/90 text-wrap overflow-hidden">
                <span className="relative inline-block bg-gradient-to-r from-black via-gray-400 to-black bg-[length:200%_100%] bg-clip-text text-transparent animate-shine">
                  Buy, Sell & send tokenized Assets in seconds.
                </span>
              </h2>
            </div>
          </FadeInOnScroll> */}
          <FadeInOnScroll>
            <div className="absolute top-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 text-center overflow-auto opacity-[0.08] max-w-[1350px] mx-auto w-full">
              <h2 className="md:text-[80px] text-4xl font-semibold tracking-widest text-black/98 text-wrap">
                <Typewriter
                  words={["Buy, Sell & send tokenized Assets in seconds."]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
            </div>
          </FadeInOnScroll>

          {/* Phone Left - Floating on Y-axis */}
          <FadeInOnScroll>
            <FloatingBox
              duration={3}
              delay={0.2}
              amplitude={15}
              axis="y"
              className="z-10"
            >
              <Image
                src="/image 226.png"
                alt="Phone left"
                width={500}
                height={500}
                className="w-[250px] md:w-[500px] md:-mr-16 -mr-2 drop-shadow-2xl"
              />
            </FloatingBox>
          </FadeInOnScroll>

          {/* Phone Right - Floating on Y-axis */}
          <FadeInOnScroll>
            <FloatingBox
              duration={3.5}
              delay={0.4}
              amplitude={20}
              axis="y"
              className="z-20"
            >
              <Image
                src="/image 227.png"
                alt="Phone right"
                width={500}
                height={500}
                className="w-[250px] md:w-[500px] md:-ml-14 -ml-2 drop-shadow-2xl"
              />
            </FloatingBox>
          </FadeInOnScroll>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20 w-full">
          <FadeInOnScroll>
            <div>
              <div className="space-y-4 mb-5 rounded-2xl shadow p-6">
                <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-2">
                  <Image src="/icon.svg" alt="Bitcoin" width={50} height={50} />
                  <span className="text-gray-800">Enabling assets liquidity</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-2">
                  <Image src="/icon2.svg" alt="Bitcoin" width={50} height={50} />
                  <span className="text-gray-800">Reducing entry barriers</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-2">
                  <Image src="/icon3.svg" alt="Bitcoin" width={50} height={50} />
                  <span className="text-gray-800">Reducing entry barriers</span>
                </div>
              </div>
              <h4 className="text-black font-bold mb-3">
                Democratizing Access to<br className="md:block hidden" /> Global Assets.
              </h4>
              <p className="text-[#676767] text-sm">
                We believe that the future of finance lies in transparency,
                accessibility, and decentralization. We have made DeFi and RWAs
                accessible.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div>
              <div className="space-y-4 mb-5 rounded-2xl shadow p-6 flex flex-col">
                <FloatingBox duration={2.5} delay={0.1} axis="y" amplitude={8}>
                  <div className="bg-gray-50 rounded-xl shadow p-4 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <Image src="/icon1.png" alt="Bitcoin" width={50} height={50} />
                      <div>
                        <p className="text-gray-700">Generate Profit</p>
                        <p className="text-sm text-gray-500">01/02/2025</p>
                      </div>
                    </div>
                    <p className="font-bold text-green-600">+ $15.08</p>
                  </div>
                </FloatingBox>
                <FloatingBox duration={3} delay={0.3} axis="y" amplitude={10}>
                  <div className="bg-gray-50 rounded-xl shadow p-4 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <Image src="/icon1.png" alt="Bitcoin" width={50} height={50} />
                      <div>
                        <p className="text-gray-700">Generate Profit</p>
                        <p className="text-sm text-gray-500">01/02/2025</p>
                      </div>
                    </div>
                    <p className="font-bold text-green-600">+ $15.08</p>
                  </div>
                </FloatingBox>
                <FloatingBox duration={2.8} delay={0.5} axis="y" amplitude={6}>
                  <div className="bg-gray-50 rounded-xl shadow p-4 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <Image src="/icon1.png" alt="Bitcoin" width={50} height={50} />
                      <div>
                        <p className="text-gray-700">Generate Profit</p>
                        <p className="text-sm text-gray-500">01/02/2025</p>
                      </div>
                    </div>
                    <p className="font-bold text-green-600">+ $15.08</p>
                  </div>
                </FloatingBox>
              </div>
              <h4 className="text-black font-bold mb-3">
                Tokenized assets now accessible<br className="md:block hidden" /> with cards or crypto.
              </h4>
              <p className="text-[#676767] text-sm">
                Say goodbye to the hassle of setting up wallets and navigating
                protocols. We have made DeFi and RWAs accessible in just a few
                clicks.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div>
              <div className="space-y-4 mb-5 rounded-2xl shadow p-6 flex flex-col">
                <FloatingBox duration={2.7} delay={0.2} axis="y" amplitude={7}>
                  <div className="bg-gray-50 rounded-xl shadow p-4 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <Image src="/icon1.png" alt="Bitcoin" width={50} height={50} />
                      <div>
                        <p className="text-gray-700">Generate Profit</p>
                        <p className="text-sm text-gray-500">01/02/2025</p>
                      </div>
                    </div>
                    <p className="font-bold text-green-600">+ $15.08</p>
                  </div>
                </FloatingBox>
                <FloatingBox duration={3.2} delay={0.4} axis="y" amplitude={9}>
                  <div className="bg-gray-50 rounded-xl shadow p-4 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <Image src="/icon1.png" alt="Bitcoin" width={50} height={50} />
                      <div>
                        <p className="text-gray-700">Generate Profit</p>
                        <p className="text-sm text-gray-500">01/02/2025</p>
                      </div>
                    </div>
                    <p className="font-bold text-green-600">+ $15.08</p>
                  </div>
                </FloatingBox>
                <FloatingBox duration={2.9} delay={0.6} axis="y" amplitude={5}>
                  <div className="bg-gray-50 rounded-xl shadow p-4 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <Image src="/icon1.png" alt="Bitcoin" width={50} height={50} />
                      <div>
                        <p className="text-gray-700">Generate Profit</p>
                        <p className="text-sm text-gray-500">01/02/2025</p>
                      </div>
                    </div>
                    <p className="font-bold text-green-600">+ $15.08</p>
                  </div>
                </FloatingBox>
              </div>
              <h4 className="text-black font-bold mb-3">
                Tokenized assets now accessible<br className="md:block hidden" /> with cards or crypto.
              </h4>
              <p className="text-[#676767] text-sm">
                Say goodbye to the hassle of setting up wallets and navigating
                protocols. We have made DeFi and RWAs accessible in just a few
                clicks.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
};

export default FloatingSection;