import React from "react";
import BreadCrumbs from "./breadcrumbs/BreadCrumbs";
import Content from "./Content";
import Banner from "./Banner";
import DynamicContent from "./DynamicContent";
import Review from "./Review";
import ExploreMore from "./explore-more/ExploreMore";
import Cta from "../cta/Cta";
import Backgrounds from "@/component/service-singlepage/hero/backgrounds/Backgrounds";

const SinglePage = ({ pageData }) => {
  return (
    <>
      <section className="relative lg:pt-[11.4583333333vw] lg:pb-[6.25vw] py1 sm:pt-[180px] pt-[120px] bg-black text-white fullVh fullSvh flex flex-col justify-end">
        <BreadCrumbs pageData={pageData} />
        <Backgrounds image={pageData?.images[0]} />
        <Content pageData={pageData} />
      </section>
      <section className="bg-black text-white">
        <Banner pageData={pageData} />
        <DynamicContent pageData={pageData} />
        <Review pageData={pageData} />
        <ExploreMore data={pageData.relatedCaseStudies} />
      </section>
    </>
  );
};

export default SinglePage;
