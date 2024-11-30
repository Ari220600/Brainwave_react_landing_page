import { useState } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Preloader from "./components/Preloader";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoaded(true);
  };
  return (
    <>
      {!isLoaded && <Preloader onComplete={handlePreloaderComplete} />}
      {isLoaded && (
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <Hero />
          <Benefits />
          <Collaboration />
          <Services />
          <Pricing />
          <Roadmap />
          <Footer />
        </div>
      )}
      <ButtonGradient />
    </>
  );
};

export default App;
