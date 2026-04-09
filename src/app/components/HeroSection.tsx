import { useRef } from "react";

export function HeroSection() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen w-full overflow-hidden bg-primary"
    >
      {/* Fullscreen Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/Videos/Kanjiras-Luxeves-Pavilion-backwater-wedding-destination.webm"
      >
        Your browser does not support the video tag.
      </video>

      {/* Subtle Overlay to ensure navigation contrast at the top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />
      
    </section>
  );
}
