import { companyLogos } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const CompanyLogos = ({ className }) => {
  useGSAP(() => {
    gsap.fromTo(
      ".logos",
      {
        opacity: 0,
        scale: 0,
        duration: 1,
      },
      {
        scrollTrigger: {
          trigger: "#tag",
          toggleActions: "restart reverse restart reverse",
          start: "top 50% bottom 80%",
        },
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.1,
      }
    );
  });
  return (
    <div className={className}>
      <h5 id="tag" className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem] logos"
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
