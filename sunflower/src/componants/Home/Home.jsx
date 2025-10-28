import React from "react";
import HeroSlider from "./HeroSlider";
import PopularSkills from "./PopularSkills";
import TopRatedProviders from "./TopRatedProviders";
 import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <>
      <div
        className="mt-10 mb-10"
        style={{
          background:
            "linear-gradient(172deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 28%, rgba(0, 212, 255, 1) 100%)",
        }}
      >
        <HeroSlider />
        <PopularSkills />
        <TopRatedProviders />
         <HowItWorks/>
      </div>
    </>
  );
};

export default Home;
