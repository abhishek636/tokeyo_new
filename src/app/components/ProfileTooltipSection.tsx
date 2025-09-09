"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeInOnScroll from "./FadeInOnScroll";

interface Profile {
  name: string;
  image: string;
  tooltip: string;
}

const profiles: Profile[] = [
  { name: "Profile 1", image: "/Ellipse 12.png", tooltip: "may I help you?" },
  { name: "Profile 2", image: "/Ellipse 13.png", tooltip: "may I help you?" },
  { name: "Profile 3", image: "/Ellipse 14.png", tooltip: "may I help you?" },
  { name: "Profile 4", image: "/Ellipse 15.png", tooltip: "may I help you?" },
  { name: "Profile 5", image: "/Ellipse 16.png", tooltip: "may I help you?" },
  { name: "Profile 6", image: "/Ellipse 17.png", tooltip: "may I help you?" },
  { name: "More", image: "/plus.png", tooltip: "Join more" },
];

const ProfileTooltipSection: FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="justify-center flex flex-col items-center text-center sm:py-16 py-12">
      <FadeInOnScroll>
        <h2 className="text-white">We help financial Team</h2>
      </FadeInOnScroll>
      <div className="flex flex-col justify-center items-center sm:pt-14 pt-8 bg-black text-center">
        <FadeInOnScroll className="flex flex-wrap px-4 md:px-auto justify-center items-center sm:pb-20 pb-8 gap-4 ms:gap-0">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              className={`relative group -ml-6 first:ml-0 ${hovered === index ? "z-20" : "z-0"
                } transition-all duration-300 ease-in-out hover:scale-115 hover:-translate-y-3`}
              onHoverStart={() => setHovered(index)}
              onHoverEnd={() => setHovered(null)}
            >
              <motion.div
                initial={{ y: 0 }}
                animate={{
                  y: [0, -12, 0, 12, 0],
                  scale: hovered === index ? 1.2 : 1,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white shadow-md cursor-pointer bg-gray-800 flex justify-center items-center"
              >
                {profile.image === "/plus.png" ? (
                  <span className="text-white text-3xl font-bold">+</span>
                ) : (
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>

              {hovered === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -10 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-1/2 -translate-x-1/2 -top-14 bg-black text-white text-sm rounded-lg px-3 py-1 shadow-md whitespace-nowrap"
                >
                  {profile.tooltip}
                </motion.div>
              )}
            </motion.div>
          ))}
        </FadeInOnScroll>
        <FadeInOnScroll>
          <button className="flex items-center text-black gap-3 px-8 py-4 bg-white rounded-full text-lg font-medium hover:bg-gray-100 transition shadow-[0px_0px_10px_rgba(255,255,255,0.55)]">
            Join our Communities
            <Image src="/hands.png" alt="Arrow Right" width={34} height={34} />
          </button>
        </FadeInOnScroll>
      </div>
    </section>
  );
};

export default ProfileTooltipSection;