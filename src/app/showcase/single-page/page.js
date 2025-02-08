import Loading from "@/app/loading";
import Layout from "@/component/layout/Index";
import SinglePage from "@/component/single-page/Index";
import React from "react";

const page = () => {
  const variant = "blue";
  return (
    <>
      <Loading />
      <Layout>
        <SinglePage variant={variant} />
      </Layout>
    </>
  );
};

export default page;
