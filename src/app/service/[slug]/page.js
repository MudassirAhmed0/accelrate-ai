import Loading from "@/app/loading";
import { servicesData } from "@/component/layout/header/dropdown/DropDown";
import Layout from "@/component/layout/Index";
import ServiceSinglePage from "@/component/service-singlepage/Index";
import React from "react";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const pageData = servicesData.find((caseStudy) => caseStudy.slug === slug);
  return getStaticMetaData({
    title: pageData.hero.heading,
    description: pageData.hero.desc,
    isRobotFollow: true,
  });
}
const page = async ({ params }) => {
  const slug = (await params).slug;

  // Find the matching service
  const pageData = servicesData.find((service) => service.slug === slug);
  return (
    <>
      <Loading />
      <Layout>
        <ServiceSinglePage pageData={pageData} />
      </Layout>
    </>
  );
};

export default page;
