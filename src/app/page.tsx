"use client";

import InfinitySection from "@/app/components/InfinitySection";
import PartnersMarquee from "@/app/components/PartnersMarquee";
import TokenizationSection from "@/app/components/TokenizationSection";
import TokenizationStep from "@/app/components/TokenizationStep";
import FloatingSection from "@/app/components/FloatingSection";
import Token from "@/app/components/Token";
import ProfileTooltipSection from "@/app/components/ProfileTooltipSection";
import FadeInOnScroll from "@/app/components/FadeInOnScroll";

export default function Home() {
  return (
    <div>
      <InfinitySection />
      <FadeInOnScroll>
        <PartnersMarquee />
      </FadeInOnScroll>
      <TokenizationSection />
      <TokenizationStep />
      <FloatingSection />
      <FadeInOnScroll>
        <Token />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <ProfileTooltipSection />
      </FadeInOnScroll>
    </div>
  );
}