import React from "react";
import Hero from "./hero/Hero";
import TabsSections from "./tabs-section/TabsSections";
import VideoTestimonials from "../home/video-testimonials/VideoTestimonials";
import Cta from "../common/cta/Cta";

const tabs = [
  {
    title: "All",
    slug: ""
  },
  {
    title: "AI Chat Agents",
    slug: "ai-chat-agents"
  },
  {
    title: "AI Voice Agents",
    slug: "ai-voice-agents"
  },
  {
    title: "Workflow Automations",
    slug: "workflow-automations"
  },
  {
    title: "AI Consulting",
    slug: "ai-consulting"
  },
  {
    title: "Web Design & Development",
    slug: "web-design-development"
  }
];


const cardsData=[
  {
    images:['https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',,"https://accelerate-tech-ai.notion.site/image/attachment%3A7b98e9cf-4d9e-4f47-8b44-ce0bc161cf9e%3AScreenshot_2025-02-13_at_6.49.10_AM.png?table=block&id=1996ef92-20db-80b1-b00b-f9fdd0d14bbd&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2","https://accelerate-tech-ai.notion.site/image/attachment%3Aaa084ce1-3599-4681-b5b3-cbdfecc2cd72%3AAI_Voice_Agents__Bots.png?table=block&id=19e6ef92-20db-80f9-8685-ea491d0dfe24&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2"],
    desc:"From Missed Opportunities to Instant Lead Engagement: How AI Appointment Booking Voice Agents Changed the Game for this B2B Technology & SaaS company!",
    featured:true,
  },
  {
    images:["https://accelerate-tech-ai.notion.site/image/attachment%3A60f07eea-230e-4f04-a3cb-e326062795fa%3AScreenshot_2025-02-18_at_10.32.31_PM.png?table=block&id=19e6ef92-20db-809a-baa9-c399daab9f3a&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2","https://images.pexels.com/photos/3913031/pexels-photo-3913031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://accelerate-tech-ai.notion.site/image/attachment%3A2eb3a55b-403c-4a4c-a79b-9fa2d523bc2f%3AAI_Voice_Agents__Bots_(1).png?table=block&id=1a26ef92-20db-808e-ab87-c3a9b4783be1&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2"],
    desc:"From Confusion to Clarity: How AI Empowered Student Engagement!",
    featured:true,
  },
  {
    images:["https://images.pexels.com/photos/6169192/pexels-photo-6169192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
    desc:"From Manual Mishaps to Automated Excellence: Revolutionizing Purchase Order Management",
    featured:false,
  },
  {
    images:[],
    desc:"",
    featured:false,
  },
  {
    images:[],
    desc:"",
    featured:false,
  },
  {
    images:[],
    desc:"",
    featured:false,
  },
  {
    images:[],
    desc:"",
    featured:false,
  },


]

const ShowCasePage = () => {
  return (
    <>
      <Hero />
      <TabsSections tabs={tabs} />
      <VideoTestimonials
        heading={"testimonials"}
        id={"show-case-testimonials"}
      />
    </>
  );
};

export default ShowCasePage;
