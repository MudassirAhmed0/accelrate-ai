import React from "react";
import Hero from "./hero/Hero";
import TabsSections from "./tabs-section/TabsSections";
import VideoTestimonials from "../home/video-testimonials/VideoTestimonials";

const tabs = [
  {
    title: "All",
    slug: "",
  },
  {
    title: "AI Chat Agents",
    slug: "ai-chat-agents",
  },
  {
    title: "AI Voice Agents",
    slug: "ai-voice-agents",
  },
  {
    title: "Workflow Automations",
    slug: "workflow-automations",
  },
  {
    title: "AI Consulting",
    slug: "ai-consulting",
  },
  {
    title: "Web Design & Development",
    slug: "web-design-development",
  },
];

const cardsData = [
  {
    images: [
      "https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://accelerate-tech-ai.notion.site/image/attachment%3A6bd7f00d-c906-4992-898f-c97bd81b0a65%3AScreenshot_2025-02-25_at_10.24.53_AM.png?table=block&id=1a56ef92-20db-80be-87ce-c16676b7f608&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=2000&userId=&cache=v2",
      "https://accelerate-tech-ai.notion.site/image/attachment%3A7b98e9cf-4d9e-4f47-8b44-ce0bc161cf9e%3AScreenshot_2025-02-13_at_6.49.10_AM.png?table=block&id=1996ef92-20db-80b1-b00b-f9fdd0d14bbd&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2",
      "https://accelerate-tech-ai.notion.site/image/attachment%3Aaa084ce1-3599-4681-b5b3-cbdfecc2cd72%3AAI_Voice_Agents__Bots.png?table=block&id=19e6ef92-20db-80f9-8685-ea491d0dfe24&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2",
    ],
    desc: "From Missed Opportunities to Instant Lead Engagement: How AI Appointment Booking Voice Agents Changed the Game for this B2B Technology & SaaS company!",
    featured: true,
  },
  {
    images: [
      "https://images.pexels.com/photos/3913031/pexels-photo-3913031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6153344/pexels-photo-6153344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://accelerate-tech-ai.notion.site/image/attachment%3A0940561b-14af-4635-9fc8-6581275e4a16%3AScreenshot_2025-02-25_at_10.15.57_AM.png?table=block&id=1a56ef92-20db-80f7-85da-ec1235556c93&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=2000&userId=&cache=v2",
      "https://images.pexels.com/photos/5905960/pexels-photo-5905960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    desc: "From Confusion to Clarity: How AI Empowered Student Engagement!",
    featured: true,
  },
  {
    images: [
      "https://images.pexels.com/photos/6169192/pexels-photo-6169192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://accelerate-tech-ai.notion.site/image/attachment%3A1fb1d694-e3ed-4c21-9a96-9cbf0e23049d%3AScreenshot_2025-02-25_at_11.54.27_AM.png?table=block&id=1a56ef92-20db-800e-9b8b-db14ea134e30&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=2000&userId=&cache=v2",
      // "https://www.pexels.com/photo/person-shopping-online-7679865/",
      // "https://www.pexels.com/photo/man-in-white-shirt-standing-beside-woman-in-white-shirt-6169641/",
    ],
    desc: "From Manual Mishaps to Automated Excellence: Revolutionizing Purchase Order Management",
    featured: false,
  },
  {
    images: [
      "https://images.pexels.com/photos/5474299/pexels-photo-5474299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://accelerate-tech-ai.notion.site/image/attachment%3A6ed2636c-bed4-4a9f-9201-1d79ca2cfcda%3AUntitled_design_(1).png?table=block&id=1a36ef92-20db-8022-ab04-cb9dfeda9c8d&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2",
      // "https://accelerate-tech-ai.notion.site/image/attachment%3A8db8b2d0-c86d-4e6d-ad31-be9bd78a2986%3AScreenshot_2025-02-23_at_8.26.50_PM.png?table=block&id=1a36ef92-20db-80d7-abab-e9f094b8fa47&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2",
    ],
    desc: "From Manual Data Entry to Automated Brilliance: How AI Revolutionized Video Data Management",
    featured: false,
  },
  {
    images: [
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://accelerate-tech-ai.notion.site/image/attachment%3A03c461a6-1c2f-4b1f-ae7d-cfe3a1e82867%3AScreenshot_2025-02-23_at_8.39.39_PM.png?table=block&id=1a36ef92-20db-8023-9349-e7190fb288c0&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2",
      // "https://accelerate-tech-ai.notion.site/image/attachment%3A4d64feff-ac52-460d-acd0-6b0d1b28a8c5%3AScreenshot_2025-02-23_at_8.40.02_PM.png?table=block&id=1a36ef92-20db-80c1-ae61-dee2a5ddbe3a&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2",
    ],
    desc: "From Outdated Listings to a Digital Showcase: Transforming Real Estate in Canada",
    featured: false,
  },
  {
    images: [
      "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg",
      "https://accelerate-tech-ai.notion.site/image/attachment%3Ac686ed44-4c67-426a-b994-8dd8cb924446%3AScreenshot_2025-02-23_at_8.57.08_PM.png?table=block&id=1a36ef92-20db-806e-b507-f21f538ca276&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2",
      // "https://accelerate-tech-ai.notion.site/image/attachment%3Aadd491cb-05fe-4a19-be37-8ac81066999a%3AScreenshot_2025-02-23_at_8.57.40_PM.png?table=block&id=1a36ef92-20db-8067-b368-fcbfdba6e38f&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2",
      // "https://accelerate-tech-ai.notion.site/image/attachment%3A6dec2c61-df68-4ac9-91dc-e72315bd1478%3AScreenshot_2025-02-23_at_8.57.50_PM.png?table=block&id=1a36ef92-20db-809e-85a4-f73d68b4a5c3&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2",
    ],
    desc: "How We Did Shopify Chat Fusion: Blending AI with E-Commerce Excellence",
    featured: false,
  },
];

const ShowCasePage = () => {
  return (
    <>
      <Hero />
      <TabsSections tabs={tabs} cardsData={cardsData} />
      <VideoTestimonials
        heading={"testimonials"}
        id={"show-case-testimonials"}
      />
    </>
  );
};

export default ShowCasePage;
