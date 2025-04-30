import React from "react";
import MainSection from "@/components/sections/MainSection";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Meta from "@/components/sections/Meta";

const Index = () => {
  return (
    <>
        <Meta
            title="Some Company - Main Page"
            description="Most important title on the page"
        />
      <Header />
      <MainSection />
      <Footer/>
    </>
  );
};

export default Index;
