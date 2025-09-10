// No "use client"

import PartnersMarqueeClient from "./PartnersMarqueeClient";
const partners = [
  { id: 1, logo: "/sliderimage/microsoft.png", alt: "Partner 1 Logo" },
  { id: 2, logo: "/sliderimage/Deloitte-Logo-PNG-Photo 1.svg", alt: "Partner 2 Logo" },
  { id: 3, logo: "/sliderimage/Ondo.svg", alt: "Partner 3 Logo" },
  { id: 4, logo: "/sliderimage/toppng.png", alt: "Partner 4 Logo" },
  { id: 5, logo: "/sliderimage/Midas.png", alt: "Partner 5 Logo" },
  { id: 6, logo: "/sliderimage/toppng.png", alt: "Partner 6 Logo" },
];

export default function PartnersMarquee() {
  return (
    <section className="sm:py-16 py-10 w-full">
      <div
        className="mx-auto my-0 px-4 sm:px-6 md:px-8 pt-8 sm:pt-20 pb-8 sm:pb-20 bg-cover bg-center relative max-w-[95%] rounded-[20px] sm:rounded-[40px]"
        style={{ backgroundImage: "url('/Mask group.png')" }}
      >
        {/* Client wrapper for animations */}
        <PartnersMarqueeClient partners={partners} />
      </div>
    </section>
  );
}
