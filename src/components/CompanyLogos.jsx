import { companyLogos } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const CompanyLogos = ({ className }) => {
  useGSAP(() => {
    gsap.from("#tag", {
      scrollTrigger: {
        trigger: "#chip",
        toggleActions: "restart reverse restart reverse",
        start: "20% top",
      },
      opacity: 0,
      scale: 0.5,
      duration: 2,
      ease: "power2.inOut",
    });
  });
  return (
    <div className={className}>
      <h5 id="tag" className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
