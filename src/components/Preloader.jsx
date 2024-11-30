import { useState, useEffect, useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import gsap from "gsap";
import { brainwaveSymbol } from "../assets";

const Preloader = ({ onComplete }) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const orbRef = useRef(null);
  const curveRef = useRef(null);

  useEffect(() => {
    // Orb animation using GSAP
    gsap.to(orbRef.current, {
      duration: 5,
      x: Math.random(100) * 5,
      rotate: 360,
      repeat: -1,
      ease: "linear",
    });

    // Curve animation using GSAP
    gsap.fromTo(
      curveRef.current,
      { scale: 1.2, opacity: 0.7 },
      {
        scale: 1.4,
        opacity: 1,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "power1.inOut",
      }
    );

    // Show the prompt after 5 seconds
    const timer = setTimeout(() => setShowPrompt(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    // Exit animation for preloader
    gsap.to("#preloader", {
      opacity: 0,
      y: -100,
      scale: 0.8,
      duration: 1.5,
      ease: "power3.inOut",
      onComplete,
    });
  };

  return (
    <div
      id="preloader"
      className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gradient-to-br from-[#0b002a] via-[#070017] to-[#020009] text-white overflow-hidden"
    >
      {/* Orb */}
      <ScrollParallax strength={0.3}>
        {/* <div
          ref={orbRef}
          className="relative w-48 h-48 md:w-72 md:h-72 rounded-full bg-gradient-to-tr from-[#5829e5] via-[#d82ae5] to-[#29e5e2] shadow-[0_0_60px_10px_rgba(88,41,229,0.6)]"
        /> */}
        <div
          ref={orbRef}
          className="relative w-48 h-48 md:w-72 md:h-72 rounded-full bg-transparent"
        >
          <img src={brainwaveSymbol} width={190} height={40} alt="Brinwave" />
        </div>
      </ScrollParallax>

      {/* Loader Text */}
      <ScrollParallax strength={0.1}>
        <h1 className="mt-10 text-3xl md:text-5xl font-bold text-center tracking-wider">
          <span className="relative">
            AI Loading <br />
            <div
              ref={curveRef}
              className="absolute top-[110%] left-1/2 -translate-x-1/2 w-40 h-10 md:w-52 md:h-12 bg-gradient-to-r from-[#5829e5] via-[#d82ae5] to-[#29e5e2] blur-md"
            />
          </span>
        </h1>
      </ScrollParallax>

      {/* Loading Dots */}
      <p className="mt-5 text-lg md:text-xl tracking-wide flex items-center justify-center gap-2">
        <span className="w-3 h-3 bg-gradient-to-br from-[#5829e5] to-[#29e5e2] rounded-full animate-pulse" />
        <span className="w-3 h-3 bg-gradient-to-br from-[#29e5e2] to-[#d82ae5] rounded-full animate-pulse delay-[0.2s]" />
        <span className="w-3 h-3 bg-gradient-to-br from-[#d82ae5] to-[#5829e5] rounded-full animate-pulse delay-[0.4s]" />
      </p>

      {/* Show Click Prompt After 5 Seconds */}
      {showPrompt && (
        <ScrollParallax strength={0.2}>
          <div className="mt-12 flex flex-col items-center">
            <button
              onClick={handleClick}
              className="px-10 py-4 bg-gradient-to-br from-[#29e5e2] to-[#5829e5] text-xl font-semibold rounded-full shadow-[0_0_30px_5px_rgba(88,41,229,0.5)] hover:scale-110 transition-transform"
            >
              Explore AI
            </button>
          </div>
        </ScrollParallax>
      )}
    </div>
  );
};

export default Preloader;
