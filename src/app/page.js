import HomePage from "@/component/home/Index";
import Layout from "@/component/layout/Index";
import React from "react";
import Loading from "./loading";

const page = () => {
  const variant = "blue";
  return (
    <>
      <Loading />
      <Layout>
        <HomePage variant={variant} />
      </Layout>
    </>
  );
};

export default page;
