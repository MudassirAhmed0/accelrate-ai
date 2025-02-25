import React from "react";
import BreadCrumbs from "./breadcrumbs/BreadCrumbs";
import Content from "./Content";
import Banner from "./Banner";
import DynamicContent from "./DynamicContent";
import Review from "./Review";
import ExploreMore from "./explore-more/ExploreMore";
import Cta from "../cta/Cta";

const SinglePage = ({ content, bannerImage, dynamicContent, review }) => {
  return (
    <>
      <section className="bg-black text-white py1 pb-[unset]">
        <BreadCrumbs />
        <div className="myContainer">
          <Content content={content} />
          <Banner bannerImage={bannerImage} />
        </div>
        <DynamicContent dynamicContent={dynamicContent} />
        <Review review={review} />
        <ExploreMore />
      </section>
    </>
  );
};

export default SinglePage;
