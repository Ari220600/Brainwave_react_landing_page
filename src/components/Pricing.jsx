import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { MouseParallax } from "react-just-parallax";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hdng",
      {
        opacity: 0,
        scale: 0.5,
        x: -100,
        duration: 1,
        ease: "power2.inOut",
      },
      {
        scrollTrigger: {
          trigger: "#pricing",
          toggleActions: "restart reverse restart reverse",
          start: "top 50% bottom 80%",
        },
        stagger: 0.1,
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <MouseParallax>
          <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
            <img
              src={smallSphere}
              className="relative z-1"
              width={255}
              height={255}
              alt="Sphere"
            />
            <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <img
                src={stars}
                className="w-full"
                width={950}
                height={400}
                alt="Stars"
              />
            </div>
          </div>
        </MouseParallax>

        <Heading
          className={`hdng`}
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
