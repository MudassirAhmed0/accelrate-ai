import React from "react";
import BreadCrumbs from "./breadcrumbs/BreadCrumbs";
import Content from "./Content";
import Banner from "./Banner";
import DynamicContent from "./DynamicContent";
import Review from "./Review";
import ExploreMore from "./explore-more/ExploreMore";
import Cta from "../common/cta/Cta";

const SinglePage = () => {
  return (
    <>
      <section className="bg-black text-white py1 pb-[unset]">
        <BreadCrumbs />
        <div className="myContainer">
          <Content />
          <Banner />
        </div>
        <DynamicContent />
        <Review />
        <ExploreMore />
      </section>
    </>
  );
};

export default SinglePage;
