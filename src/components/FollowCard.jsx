import React, { useRef } from "react";
import "./FollowCard.css"; // Import the corresponding styles

const FollowCard = ({ children, containerClass }) => {
	const cardRef = useRef(null);

	const rotateCard = (event) => {
		const card = cardRef.current;
		const rect = card.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const deltaX = event.clientX - centerX;
		const deltaY = event.clientY - centerY;

		const rotateX = (deltaY / rect.height) * 15;
		const rotateY = -(deltaX / rect.width) * 15;

		card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

		const glowX = event.clientX - rect.left;
		const glowY = event.clientY - rect.top;

		card.style.setProperty("--glow-x", `${glowX}px`);
		card.style.setProperty("--glow-y", `${glowY}px`);
	};

	const handleMouseLeave = () => {
		const card = cardRef.current;
		card.style.transition = "transform 0.3s";
		card.style.transform = "rotateX(0) rotateY(0)";
	};

	return (
		<div
			ref={cardRef}
			className="hover-card flex flex-col justify-center items-center w-full h-full bg-custom-transparent-white backdrop-blur-md rounded-lg transform transition-transform overflow-hidden outline outline-1 outline-custom-transparent-white relative p-4 after:bg-custom-white"
			onMouseMove={rotateCard}
			onMouseEnter={() => (cardRef.current.style.transition = "none")}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</div>
	);
};

export default FollowCard;
