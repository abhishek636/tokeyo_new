"use client";

import dynamic from "next/dynamic";

const InfinitySection = dynamic(() => import("@/app/components/InfinitySection"), { ssr: true });
// const PartnersMarquee = dynamic(() => import("@/app/components/PartnersMarquee"), { ssr: true });
const MaskedSection = dynamic(() => import("@/app/components/MaskedSection"), { ssr: true });
const TokenizationSection = dynamic(() => import("@/app/components/TokenizationSection"));
const TokenizationStep = dynamic(() => import("@/app/components/TokenizationStep"), { ssr: true });
const FloatingSection = dynamic(() => import("@/app/components/FloatingSection"), { ssr: true });
const Token = dynamic(() => import("@/app/components/Token"));
const ProfileTooltipSection = dynamic(() => import("@/app/components/ProfileTooltipSection"), { ssr: true });
const FadeInOnScroll = dynamic(() => import("@/app/components/FadeInOnScroll"), { ssr: true });


export default function HomeClient() {
  return (
    <div>
      <InfinitySection />
      <FadeInOnScroll>
        <MaskedSection />
      </FadeInOnScroll>
      <TokenizationSection />
      <TokenizationStep />
      <FloatingSection />
      <Token />
      <ProfileTooltipSection />
    </div>
  );
}
