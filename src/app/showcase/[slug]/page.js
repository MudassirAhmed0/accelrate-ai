import Loading from "@/app/loading";
import SinglePage from "@/component/common/showcase-single-page/Index";
import Layout from "@/component/layout/Index";
import { caseStudiesData } from "@/component/show-case/Index";
import React from "react";

const page = async ({ params }) => {
  const slug = (await params).slug;

  // get the data for the post
  const pageData = caseStudiesData.find((caseStudy) => caseStudy.slug === slug);
  return (
    <>
      <Loading />
      <Layout>
        <SinglePage pageData={pageData} />
      </Layout>
    </>
  );
};

export default page;
