import Layout from "@/component/layout/Index";
import React from "react";
import ShowCasePage from "@/component/show-case/Index";
import Loading from "../loading";

const page = () => {
  const variant = "blue";
  return (
    <>
      <Loading />
      <Layout>
        <ShowCasePage variant={variant} />
      </Layout>
    </>
  );
};

export default page;
