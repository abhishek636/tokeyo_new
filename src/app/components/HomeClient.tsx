"use client";

import dynamic from "next/dynamic";

const InfinitySection = dynamic(() => import("@/app/components/InfinitySection"), { ssr: false });
const PartnersMarquee = dynamic(() => import("@/app/components/PartnersMarquee"), { ssr: false });
const TokenizationSection = dynamic(() => import("@/app/components/TokenizationSection"));
const TokenizationStep = dynamic(() => import("@/app/components/TokenizationStep"), { ssr: false });
const FloatingSection = dynamic(() => import("@/app/components/FloatingSection"), { ssr: false });
const Token = dynamic(() => import("@/app/components/Token"));
const ProfileTooltipSection = dynamic(() => import("@/app/components/ProfileTooltipSection"), { ssr: false });
const FadeInOnScroll = dynamic(() => import("@/app/components/FadeInOnScroll"), { ssr: false });

export default function HomeClient() {
  return (
    <div>
      <InfinitySection />
      <FadeInOnScroll>
        <PartnersMarquee />
      </FadeInOnScroll>
      <TokenizationSection />
      <TokenizationStep />
      <FloatingSection />
      <Token />
      <ProfileTooltipSection />
    </div>
  );
}
