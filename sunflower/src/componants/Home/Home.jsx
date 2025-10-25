import React from "react";
import HeroSlider from "./HeroSlider";
import PopularSkills from "./PopularSkills"
import TopRatedProviders from "./TopRatedProviders"
import HowItWorks from "./HowItWorks";

const Home =()=>{
    return(
    <>
        <HeroSlider></HeroSlider>
        <PopularSkills></PopularSkills>
        <TopRatedProviders></TopRatedProviders>
        <HowItWorks></HowItWorks>
    </>
    );
};

export default Home;