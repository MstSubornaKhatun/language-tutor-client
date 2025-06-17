import React from "react";
import Banner from "../../components/Banner";
import Stats from "../../components/Stats";
import LanguageCategory from "../../components/LanguageCategory";
import WhyChooseUs from "../../components/WhyChooseUs";
import JoinAsTutor from "../../components/JoinAsTutor";
import FAQ from "../../components/FAQ";
const Home = () => {
  return (
    <div>
      <Banner />
      <Stats />
      <LanguageCategory />
      <WhyChooseUs />
      <JoinAsTutor />
      <FAQ />
    </div>
  );
};

export default Home;
