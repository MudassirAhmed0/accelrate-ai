import Layout from "@/component/layout/Index";
import React from "react";
import ShowCasePage from "@/component/show-case/Index";
import Loading from "../loading";
import getStaticMetaData from "@/utils/seo/getStaticMetaData";

export const metadata = getStaticMetaData({
  title: "Accelerate AI || Showcase Page",
  description: ` We help businesses scale with AI-powered conversations, automation,
          and next-gen digital experiences.`,
  isRobotFollow: true,
});

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
