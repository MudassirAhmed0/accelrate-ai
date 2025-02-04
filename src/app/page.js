import HomePage from "@/component/home/Index";
import Layout from "@/component/layout/Index";
import React from "react";

const page = () => {
  const variant = "blue";
  return (
    <Layout>
      <HomePage variant={variant} />
    </Layout>
  );
};

export default page;
