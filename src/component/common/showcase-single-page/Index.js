import React from "react";
import BreadCrumbs from "./breadcrumbs/BreadCrumbs";
import Content from "./Content";
import Banner from "./Banner";
import DynamicContent from "./DynamicContent";
import Review from "./Review";
import ExploreMore from "./explore-more/ExploreMore";
import Cta from "../cta/Cta";

const SinglePage = ({ pageData }) => {
  return (
    <>
      <section className="bg-black text-white py1 pb-[unset]">
        <BreadCrumbs pageData={pageData} />
        <div className="myContainer">
          <Content pageData={pageData} />
          <Banner pageData={pageData} />
        </div>
        <DynamicContent pageData={pageData} />
        <Review pageData={pageData} />
        <ExploreMore data={pageData.relatedCaseStudies} />
      </section>
    </>
  );
};

export default SinglePage;
