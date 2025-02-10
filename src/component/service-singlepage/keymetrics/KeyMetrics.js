"use client";
import React, { useState } from "react";
import Accordion from "./accordion/Accordion";
import Image from "next/image";
const items = [
  {
    bannerImage:
      "https://cdn.prod.website-files.com/6705382c85d21c496de94fa5/675c3919286ce1bbb5f403e4_webdesign-design-system-digidop-agency.webp",
    title: "Scalability (Design System)",
    content: `
      <p>A well-structured <strong>design system</strong> enables your website to grow alongside your business by incorporating reusable components that streamline the development process. This approach can save up to <strong>50%</strong> of the time spent on design and development compared to traditional methods.</p>
      <br/>
      <p>It allows for easy addition of new features, pages, and content while maintaining design consistency throughout your website, ensuring scalability and a seamless user experience.</p>
    `,
  },
  {
    bannerImage:
      "https://cdn.prod.website-files.com/6705382c85d21c496de94fa5/6773c98000063cd04b4c6f58_webflow-seo.webp",
    title: "SXO (UX/Sitemap)",
    content: `
      <p>Good web design prioritizes <strong>user experience</strong>, a well-structured <strong>sitemap</strong>, and optimized <strong>copywriting</strong>—each crucial for <strong>SEO</strong> and <strong>conversion</strong>.</p>
      <br/>
      <p>By ensuring your website is easy to navigate, optimized for <strong>search engines</strong>, and the <strong>content</strong> is tailored for <strong>SEO performance</strong>, you enable search engines to crawl your site effectively. This boosts your <strong>rankings</strong>, drives <strong>organic traffic</strong>, and enhances both <strong>user engagement</strong> and <strong>conversion rates</strong>.</p>
    `,
  },
  {
    bannerImage:
      "https://cdn.prod.website-files.com/6705382c85d21c496de94fa5/6773c9809a04c1b58ecd1467_webflow-a-b-tests-conversion.webp",
    title: "Conversion (CRO)",
    content: `
      <p>A well-designed website strategically guides visitors through their buyer’s journey. With clear <strong>calls-to-action</strong> and intuitive navigation, it encourages users to take the next step, leading to higher conversions and turning visitors into customers.</p>
    `,
  },
  {
    bannerImage:
      "https://cdn.prod.website-files.com/6705382c85d21c496de94fa5/67518f9112af9e4848d41a01_webdesign-branding.jpg",
    title: "Branding (UI/Art Direction)",
    content: `
      <p>A strong <strong>UI</strong> and consistent <strong>art direction</strong> are key to reinforcing your brand identity.</p>
      <br/>
      <p>They help make your business <strong>more recognizable</strong> and foster <strong>trust</strong> with your audience, creating a memorable and impactful user experience that resonates with your customers.</p>
    `,
  },
  {
    bannerImage:
      "https://cdn.prod.website-files.com/6705382c85d21c496de94fa5/675c3977d8d98f4151eefb45_webdesign-responsive.webp",
    title: "Responsiveness and Performance",
    content: `
      <p>A well-optimized web design ensures your website provides a <strong>smooth experience</strong> on all devices, offering <strong>fast loading times</strong> and <strong>user-friendly navigation</strong>.</p>
      <br/>
      <p>In 2025, with mobile devices generating approximately <strong>60% of global web traffic</strong>, having a <strong>responsive website</strong> is crucial for engaging mobile users and <strong>reducing bounce rates</strong>.</p>
    `,
  },
  {
    bannerImage:
      "https://cdn.prod.website-files.com/6705382c85d21c496de94fa5/675c3919286ce1bbb5f403e4_webdesign-design-system-digidop-agency.webp",
    title: "Scalability (Design System)",
    content: `
      <p>A well-structured <strong>design system</strong> enables your website to grow alongside your business by incorporating reusable components that streamline the development process. This approach can save up to <strong>50%</strong> of the time spent on design and development compared to traditional methods.</p>
      <br/>
      <p>It allows for easy addition of new features, pages, and content while maintaining design consistency throughout your website, ensuring scalability and a seamless user experience.</p>
    `,
  },
  {
    bannerImage:
      "https://cdn.prod.website-files.com/6705382c85d21c496de94fa5/6773c98000063cd04b4c6f58_webflow-seo.webp",
    title: "SXO (UX/Sitemap)",
    content: `
      <p>Good web design prioritizes <strong>user experience</strong>, a well-structured <strong>sitemap</strong>, and optimized <strong>copywriting</strong>—each crucial for <strong>SEO</strong> and <strong>conversion</strong>.</p>
      <br/>
      <p>By ensuring your website is easy to navigate, optimized for <strong>search engines</strong>, and the <strong>content</strong> is tailored for <strong>SEO performance</strong>, you enable search engines to crawl your site effectively. This boosts your <strong>rankings</strong>, drives <strong>organic traffic</strong>, and enhances both <strong>user engagement</strong> and <strong>conversion rates</strong>.</p>
    `,
  },
  {
    bannerImage:
      "https://cdn.prod.website-files.com/6705382c85d21c496de94fa5/6773c9809a04c1b58ecd1467_webflow-a-b-tests-conversion.webp",
    title: "Conversion (CRO)",
    content: `
      <p>A well-designed website strategically guides visitors through their buyer’s journey. With clear <strong>calls-to-action</strong> and intuitive navigation, it encourages users to take the next step, leading to higher conversions and turning visitors into customers.</p>
    `,
  },
  {
    bannerImage:
      "https://cdn.prod.website-files.com/6705382c85d21c496de94fa5/67518f9112af9e4848d41a01_webdesign-branding.jpg",
    title: "Branding (UI/Art Direction)",
    content: `
      <p>A strong <strong>UI</strong> and consistent <strong>art direction</strong> are key to reinforcing your brand identity.</p>
      <br/>
      <p>They help make your business <strong>more recognizable</strong> and foster <strong>trust</strong> with your audience, creating a memorable and impactful user experience that resonates with your customers.</p>
    `,
  },
  {
    bannerImage:
      "https://cdn.prod.website-files.com/6705382c85d21c496de94fa5/675c3977d8d98f4151eefb45_webdesign-responsive.webp",
    title: "Responsiveness and Performance",
    content: `
      <p>A well-optimized web design ensures your website provides a <strong>smooth experience</strong> on all devices, offering <strong>fast loading times</strong> and <strong>user-friendly navigation</strong>.</p>
      <br/>
      <p>In 2025, with mobile devices generating approximately <strong>60% of global web traffic</strong>, having a <strong>responsive website</strong> is crucial for engaging mobile users and <strong>reducing bounce rates</strong>.</p>
    `,
  },
];

const KeyMetrics = () => {
  const [activeBannerImage, setActiveBannerImage] = useState(
    "https://cdn.prod.website-files.com/6705382c85d21c496de94fa5/675c3919286ce1bbb5f403e4_webdesign-design-system-digidop-agency.webp"
  );
  return (
    <section className="bg-black text-white py1 poppins">
      <div className="relative opacity-0 pointer-events-none">
        {items.map((item, i) => (
          <Image
            key={i}
            fill
            alt="banner"
            unoptimized
            src={item.bannerImage}
            className="opacity-0 pointer-events-none"
          />
        ))}
      </div>
      <div className="myContainer">
        <h2
          data-aos="fade-up"
          className="font-medium normal-case text-center lg:w-[50%] mx-auto"
        >
          Web design has a direct impact on five key metrics
        </h2>
        <div className="lg:mt-[4.16666666667vw] mt-[40px] flex items-start lg:flex-row flex-col-reverse flex-wrap lg:flex-nowrap lg:gap-[5.20833333333vw] gap-[20px] justify-between">
          <div className="lg:sticky lg:top-[6.09375vw] relative aspect-[1/1.23] w-full lg:w-[32.621%] lg:min-w-[32.621%] hidden lg:block">
            <Image fill alt="banner" unoptimized src={activeBannerImage} />
          </div>
          <Accordion
            items={items}
            setActiveBannerImage={setActiveBannerImage}
          />
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
