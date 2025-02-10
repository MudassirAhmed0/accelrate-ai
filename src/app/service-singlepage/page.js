import Layout from "@/component/layout/Index";
import React from "react";
import Loading from "../loading";
import ServiceSinglePage from "@/component/service-singlepage/Index";

const page = () => {
  const variant = "blue";
  return (
    <>
      <Loading />
      <Layout>
        <ServiceSinglePage variant={variant} />
      </Layout>
    </>
  );
};

export default page;
