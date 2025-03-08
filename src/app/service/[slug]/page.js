import Loading from "@/app/loading";
import { servicesData } from "@/component/layout/header/dropdown/DropDown";
import Layout from "@/component/layout/Index";
import ServiceSinglePage from "@/component/service-singlepage/Index";
import React from "react";

const page = async ({ params }) => {
  const slug = (await params).slug;
  const formattedSlug = decodeURIComponent(slug).replace(/-/g, " ");

  // Find the matching service
  const pageData = servicesData.find(
    (service) => service.slug.toLowerCase() === formattedSlug.toLowerCase()
  );
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
