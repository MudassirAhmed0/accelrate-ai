import Loading from "@/app/loading";
import SinglePage from "@/component/common/showcase-single-page/Index";
import Layout from "@/component/layout/Index";
import React from "react";

const page = () => {
  const variant = "blue";
  const content = {
    heading:
      "From Missed Opportunities to Instant Lead Engagement: How AI Appointment Booking Voice Agents Changed the Game for this B2B Technology & SaaS company!",
  };

  const bannerImage = {
    image:
      "https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  const dynamicContent = {
    content: `
    <ul role="list">
      <li><strong>Industry:</strong> B2B Technology & SaaS</li>
      <li><strong>Company Size:</strong> Mid-sized enterprise</li>
      <li><strong>Location:</strong> Australia</li>
      <li><strong>Service Provided:</strong> AI-Powered Outbound & Inbound Call Automation</li>
      <li><strong>Tools Used:</strong> Cal.com, Vapi AI, Make.com, Python</li>
    </ul> 

    <h2>Challenges & Objectives</h2>   
    <div>
      <strong>Challenges:</strong>   
      <ul role="list">
        <li>Manual outbound calling was inefficient and resource-intensive</li>
        <li>Appointment scheduling required human intervention, leading to delays</li>
        <li>Missed follow-ups resulted in lost business opportunities</li>
      </ul>

      <strong>Objectives:</strong>   
      <ul role="list">
        <li>Automate outbound sales calls to qualify and schedule appointments</li>
        <li>Implement an AI-powered agent to handle customer inquiries</li>
        <li>Integrate an automated follow-up mechanism for potential leads</li>
      </ul>
    </div> 

    <h2>Our Solution</h2>   
    <div>
      <strong>Technology & Tools Used:</strong>  
      <ul role="list">
        <li><a href="https://cal.com" target="_blank" rel="noopener noreferrer">Cal.com</a> for automated appointment booking</li>
        <li><a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">Vapi.ai</a> for AI-driven voice agent</li>
        <li><a href="https://www.make.com" target="_blank" rel="noopener noreferrer">Make.com</a> for workflow automation</li>
        <li>Python for custom integrations</li>
      </ul>

      <strong>Implementation Process:</strong>   
      <ol>
        <li><strong>Assessment:</strong> Analyzed the client’s outbound sales process and appointment scheduling workflow.</li>
        <li><strong>AI Integration:</strong> Developed "Chris," an AI agent capable of both inbound and outbound calls, trained on the client’s knowledge base.</li>
        <li><strong>Testing & Optimization:</strong> Ensured the AI agent effectively handled queries, scheduled appointments, and followed up with leads.</li>
        <li><strong>Deployment:</strong> Implemented Chris to operate during working hours, adhering to follow-up rules and automating appointment confirmation via email.</li>
      </ol>
    </div> 

    <h2>Results & Impact</h2>   
    <div>
      <strong>Key Outcomes:</strong>   
      <ul role="list">
        <li>Reduction in manual call handling</li>
        <li>Increase in qualified appointment bookings</li> 
        <li><strong>Automated follow-ups</strong> reduced missed opportunities</li>
        <li><strong>Increased accuracy</strong> reducing errors in appointment scheduling and confirmation</li>
      </ul>
    </div> 

    <div>
      <h5>Client Feedback:</h5>
      <blockquote>
        “The AI agent has significantly reduced our workload and improved lead conversions. The automation ensures we never miss follow-ups and customers get instant scheduling assistance.”
      </blockquote>
    </div>

    <p><strong>Confidentiality Notice:</strong> For confidentiality reasons, all client names and identifying details have been altered.</p>
    <div>
      <h5>Looking to elevate your operations with automation that thinks for you?</h5>
      <p>Discover <a href="/" target="_blank" rel="noopener noreferrer">the offerings from our AI Voice Agent Services <span>&#8594;</span>
</a></p>
    </div>
  `,
  };

  const review = {
    review:
      "“Working with team Accelerate-AI has been an absolute pleasure! Their mastery in chatbot development is truly remarkable, delivering solutions that are not only technically sound but also delightfully user-friendly. The team has an incredible knack for turning complex requirements into seamless, intelligent conversations that feel natural and engaging. Their ability to implement custom features and integrations sets them apart. Their attention to detail and focus on quality ensure every project is executed flawlessly. Beyond their technical expertise, their collaborative nature and problem-solving mindset make them a valued partner who’s always ready to go above and beyond. We’re grateful for the innovation and dedication Accelerate-AI team brought to the table. Their work has made a huge difference, and we look forward to working with him on future projects.”",
    name: "Diat Khan ",
    info: "CEO - Remote Office, Australia ",
    logo: "/images/testimonials/profiles/2.jpeg",
  };

  return (
    <>
      <Loading />
      <Layout>
        <SinglePage
          variant={variant}
          content={content}
          bannerImage={bannerImage}
          dynamicContent={dynamicContent}
          review={review}
        />
      </Layout>
    </>
  );
};

export default page;
