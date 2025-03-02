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

 
const categories=["ai-voice-agents","ai-chat-agents","workflow-automations","web-design-development","ai-consulting"] 
export const caseStudiesData = [
  {
    images: [
      "https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6153344/pexels-photo-6153344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://accelerate-tech-ai.notion.site/image/attachment%3A7b98e9cf-4d9e-4f47-8b44-ce0bc161cf9e%3AScreenshot_2025-02-13_at_6.49.10_AM.png?table=block&id=1996ef92-20db-80b1-b00b-f9fdd0d14bbd&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2",
      "https://accelerate-tech-ai.notion.site/image/attachment%3Aaa084ce1-3599-4681-b5b3-cbdfecc2cd72%3AAI_Voice_Agents__Bots.png?table=block&id=19e6ef92-20db-80f9-8685-ea491d0dfe24&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2",
    ],
    desc: "From Missed Opportunities to Instant Lead Engagement: How AI Appointment Booking Voice Agents Changed the Game for this B2B Technology & SaaS company!",
    featured: true,
    slug: "from-missed-opportunities-to-instant-lead-engagement",
    category:categories[0],
    relatedCaseStudies: ["How-AI-Powered-Calls", "From-Chaos-to-Convenience"],
    content: `
  <h2><strong>Client Overview</strong></h2>
  
  <div>
    <p><strong>Industry:</strong> B2B Technology & SaaS</p>
    <p><strong>Company Size:</strong> Mid-sized enterprise</p>
    <p><strong>Location:</strong> Australia</p>
    <p><strong>Service Provided:</strong> AI-Powered Outbound & Inbound Call Automation</p>
    <p><strong>Tools Used:</strong> 
      <a href="https://cal.com" target="_blank" rel="noopener noreferrer">Cal.com</a>, 
      <a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">Vapi AI</a>, 
      <a href="https://www.make.com" target="_blank" rel="noopener noreferrer">Make.com</a>, 
      Python
    </p>
  </div>

  <h2><strong>Challenges & Objectives</strong></h2>
  
  <div>
    <h5><strong>Challenges:</strong></h5>
    <ul>
      <li>Manual outbound calling was inefficient and resource-intensive</li>
      <li>Appointment scheduling required human intervention, leading to delays</li>
      <li>Missed follow-ups resulted in lost business opportunities</li>
    </ul>
  </div>

  <div>
    <h5><strong>Objectives:</strong></h5>
    <ul>
      <li>Automate outbound sales calls to qualify and schedule appointments</li>
      <li>Implement an AI-powered agent to handle customer inquiries</li>
      <li>Integrate an automated follow-up mechanism for potential leads</li>
    </ul>
  </div>

  <h2><strong>Our Solution</strong></h2>

  <div>
    <h5><strong>Technology & Tools Used:</strong></h5>
    <ul>
      <li><a href="https://cal.com" target="_blank" rel="noopener noreferrer">Cal.com</a> for automated appointment booking</li>
      <li><a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">Vapi.ai</a> for AI-driven voice agent</li>
      <li><a href="https://www.make.com" target="_blank" rel="noopener noreferrer">Make.com</a> for workflow automation</li>
      <li>Python for custom integrations</li>
    </ul>
  </div>

  <div>
    <h5><strong>Implementation Process:</strong></h5>
    <ol>
      <li><strong>Assessment:</strong> Analyzed the client’s outbound sales process and appointment scheduling workflow.</li>
      <li><strong>AI Integration:</strong> Developed "Chris," an AI agent capable of both inbound and outbound calls, trained on the client’s knowledge base.</li>
      <li><strong>Testing & Optimization:</strong> Ensured the AI agent effectively handled queries, scheduled appointments, and followed up with leads.</li>
      <li><strong>Deployment:</strong> Implemented Chris to operate during working hours, adhering to follow-up rules and automating appointment confirmation via email.</li>
    </ol>
  </div>

  <h2><strong>Results & Impact</strong></h2>

  <div>
    <h5><strong>Key Outcomes:</strong></h5>
    <ul>
      <li>Reduction in manual call handling</li>
      <li>Increase in qualified appointment bookings</li>
      <li><strong>Automated follow-ups</strong> reduced missed opportunities</li>
      <li><strong>Increased accuracy</strong> in appointment scheduling and confirmation</li>
    </ul>
  </div>

  <div>
    <h5><strong>Client Feedback:</strong></h5>
    <blockquote>“The AI agent has significantly reduced our workload and improved lead conversions. The automation ensures we never miss follow-ups and customers get instant scheduling assistance.”</blockquote>
  </div>

  <hr>

  <p><strong>Confidentiality Notice:</strong> For confidentiality reasons, all client names and identifying details have been altered.</p>
`,
    review: {
      review: `Working with team Accelerate-AI has been an absolute pleasure! Their mastery in chatbot development is truly remarkable, delivering solutions that are not only technically sound but also delightfully user-friendly. The team has an incredible knack for turning complex requirements into seamless, intelligent conversations that feel natural and engaging. </br> Their ability to implement custom features and integrations sets them apart. Their attention to detail and focus on quality ensure every project is executed flawlessly. Beyond their technical expertise, their collaborative nature and problem-solving mindset make them a valued partner who’s always ready to go above and beyond. </br> We’re grateful for the innovation and dedication Accelerate-AI team brought to the table. Their work has made a huge difference, and we look forward to working with him on future projects.`,
      name: "Diat Khan",
      info: "CEO - Remote Office, Australia",
      logo: "/images/testimonials/profiles/2.jpeg",
    },
  },
  {
    images: [
      "https://images.pexels.com/photos/5905960/pexels-photo-5905960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      " https://images.pexels.com/photos/3913031/pexels-photo-3913031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://accelerate-tech-ai.notion.site/image/attachment%3A60f07eea-230e-4f04-a3cb-e326062795fa%3AScreenshot_2025-02-18_at_10.32.31_PM.png?table=block&id=19e6ef92-20db-809a-baa9-c399daab9f3a&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2",
      "https://lh3.google.com/u/0/d/1a16CBPOJbR4vpV3T5rIwxm4ORgYoXdGh=k",
    ],
    desc: "From Confusion to Clarity: How AI Empowered Student Engagement!",
    featured: true,
    slug: "from-confusion-to-clarity",
    category:categories[1],
    relatedCaseStudies: ["How-We-Did-Shopify-Chat", "How-We-Did-Multi-Channel"],
    content: `
  <h2><strong>Client Overview</strong></h2>
  
  <div>
    <p><strong>Industry:</strong> B2B Technology & SaaS</p>
    <p><strong>Company Size:</strong> Mid-sized enterprise</p>
    <p><strong>Location:</strong> Australia</p>
    <p><strong>Service Provided:</strong> AI-Powered Outbound & Inbound Call Automation</p>
    <p><strong>Tools Used:</strong> 
      <a href="https://cal.com" target="_blank" rel="noopener noreferrer">Cal.com</a>, 
      <a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">Vapi AI</a>, 
      <a href="https://www.make.com" target="_blank" rel="noopener noreferrer">Make.com</a>, 
      Python
    </p>
  </div>

  <h2><strong>Challenges & Objectives</strong></h2>
  
  <div>
    <h5><strong>Challenges:</strong></h5>
    <ul>
      <li>Manual outbound calling was inefficient and resource-intensive</li>
      <li>Appointment scheduling required human intervention, leading to delays</li>
      <li>Missed follow-ups resulted in lost business opportunities</li>
    </ul>
  </div>

  <div>
    <h5><strong>Objectives:</strong></h5>
    <ul>
      <li>Automate outbound sales calls to qualify and schedule appointments</li>
      <li>Implement an AI-powered agent to handle customer inquiries</li>
      <li>Integrate an automated follow-up mechanism for potential leads</li>
    </ul>
  </div>

  <h2><strong>Our Solution</strong></h2>

  <div>
    <h5><strong>Technology & Tools Used:</strong></h5>
    <ul>
      <li><a href="https://cal.com" target="_blank" rel="noopener noreferrer">Cal.com</a> for automated appointment booking</li>
      <li><a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">Vapi.ai</a> for AI-driven voice agent</li>
      <li><a href="https://www.make.com" target="_blank" rel="noopener noreferrer">Make.com</a> for workflow automation</li>
      <li>Python for custom integrations</li>
    </ul>
  </div>

  <div>
    <h5><strong>Implementation Process:</strong></h5>
    <ol>
      <li><strong>Assessment:</strong> Analyzed the client’s outbound sales process and appointment scheduling workflow.</li>
      <li><strong>AI Integration:</strong> Developed "Chris," an AI agent capable of both inbound and outbound calls, trained on the client’s knowledge base.</li>
      <li><strong>Testing & Optimization:</strong> Ensured the AI agent effectively handled queries, scheduled appointments, and followed up with leads.</li>
      <li><strong>Deployment:</strong> Implemented Chris to operate during working hours, adhering to follow-up rules and automating appointment confirmation via email.</li>
    </ol>
  </div>

  <h2><strong>Results & Impact</strong></h2>

  <div>
    <h5><strong>Key Outcomes:</strong></h5>
    <ul>
      <li>Reduction in manual call handling</li>
      <li>Increase in qualified appointment bookings</li>
      <li><strong>Automated follow-ups</strong> reduced missed opportunities</li>
      <li><strong>Increased accuracy</strong> in appointment scheduling and confirmation</li>
    </ul>
  </div>

  <div>
    <h5><strong>Client Feedback:</strong></h5>
    <blockquote>“The AI agent has significantly reduced our workload and improved lead conversions. The automation ensures we never miss follow-ups and customers get instant scheduling assistance.”</blockquote>
  </div>

  <hr>

  <p><strong>Confidentiality Notice:</strong> For confidentiality reasons, all client names and identifying details have been altered.</p>
`,
    review: {
      review: `Working with team Accelerate-AI has been an absolute pleasure! Their mastery in chatbot development is truly remarkable, delivering solutions that are not only technically sound but also delightfully user-friendly. The team has an incredible knack for turning complex requirements into seamless, intelligent conversations that feel natural and engaging. </br> Their ability to implement custom features and integrations sets them apart. Their attention to detail and focus on quality ensure every project is executed flawlessly. Beyond their technical expertise, their collaborative nature and problem-solving mindset make them a valued partner who’s always ready to go above and beyond. </br> We’re grateful for the innovation and dedication Accelerate-AI team brought to the table. Their work has made a huge difference, and we look forward to working with him on future projects.`,
      name: "Diat Khan",
      info: "CEO - Remote Office, Australia",
      logo: "/images/testimonials/profiles/2.jpeg",
    },
  },
  {
    images: [
     "https://images.pexels.com/photos/6169192/pexels-photo-6169192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6169641/pexels-photo-6169641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      "https://accelerate-tech-ai.notion.site/image/attachment%3A1fb1d694-e3ed-4c21-9a96-9cbf0e23049d%3AScreenshot_2025-02-25_at_11.54.27_AM.png?table=block&id=1a56ef92-20db-800e-9b8b-db14ea134e30&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2",
      "https://lh3.google.com/u/0/d/1PVRucF6YsjJKeL5l6QGDw3Fnb3qCiZCo=k"
    ],
    desc: "From Manual Mishaps to Automated Excellence: Revolutionizing Purchase Order Management",
    slug: "From-Manual-Mishaps-to-Automated",
    category:categories[2],
    relatedCaseStudies: ["From-Manual-Data-Entry", "From-Outdated-Listings"],
    featured: false,
    content: `
  <h2><strong>Client Overview</strong></h2>
  
  <div>
    <p><strong>Industry:</strong> B2B Technology & SaaS</p>
    <p><strong>Company Size:</strong> Mid-sized enterprise</p>
    <p><strong>Location:</strong> Australia</p>
    <p><strong>Service Provided:</strong> AI-Powered Outbound & Inbound Call Automation</p>
    <p><strong>Tools Used:</strong> 
      <a href="https://cal.com" target="_blank" rel="noopener noreferrer">Cal.com</a>, 
      <a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">Vapi AI</a>, 
      <a href="https://www.make.com" target="_blank" rel="noopener noreferrer">Make.com</a>, 
      Python
    </p>
  </div>

  <h2><strong>Challenges & Objectives</strong></h2>
  
  <div>
    <h5><strong>Challenges:</strong></h5>
    <ul>
      <li>Manual outbound calling was inefficient and resource-intensive</li>
      <li>Appointment scheduling required human intervention, leading to delays</li>
      <li>Missed follow-ups resulted in lost business opportunities</li>
    </ul>
  </div>

  <div>
    <h5><strong>Objectives:</strong></h5>
    <ul>
      <li>Automate outbound sales calls to qualify and schedule appointments</li>
      <li>Implement an AI-powered agent to handle customer inquiries</li>
      <li>Integrate an automated follow-up mechanism for potential leads</li>
    </ul>
  </div>

  <h2><strong>Our Solution</strong></h2>

  <div>
    <h5><strong>Technology & Tools Used:</strong></h5>
    <ul>
      <li><a href="https://cal.com" target="_blank" rel="noopener noreferrer">Cal.com</a> for automated appointment booking</li>
      <li><a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">Vapi.ai</a> for AI-driven voice agent</li>
      <li><a href="https://www.make.com" target="_blank" rel="noopener noreferrer">Make.com</a> for workflow automation</li>
      <li>Python for custom integrations</li>
    </ul>
  </div>

  <div>
    <h5><strong>Implementation Process:</strong></h5>
    <ol>
      <li><strong>Assessment:</strong> Analyzed the client’s outbound sales process and appointment scheduling workflow.</li>
      <li><strong>AI Integration:</strong> Developed "Chris," an AI agent capable of both inbound and outbound calls, trained on the client’s knowledge base.</li>
      <li><strong>Testing & Optimization:</strong> Ensured the AI agent effectively handled queries, scheduled appointments, and followed up with leads.</li>
      <li><strong>Deployment:</strong> Implemented Chris to operate during working hours, adhering to follow-up rules and automating appointment confirmation via email.</li>
    </ol>
  </div>

  <h2><strong>Results & Impact</strong></h2>

  <div>
    <h5><strong>Key Outcomes:</strong></h5>
    <ul>
      <li>Reduction in manual call handling</li>
      <li>Increase in qualified appointment bookings</li>
      <li><strong>Automated follow-ups</strong> reduced missed opportunities</li>
      <li><strong>Increased accuracy</strong> in appointment scheduling and confirmation</li>
    </ul>
  </div>

  <div>
    <h5><strong>Client Feedback:</strong></h5>
    <blockquote>“The AI agent has significantly reduced our workload and improved lead conversions. The automation ensures we never miss follow-ups and customers get instant scheduling assistance.”</blockquote>
  </div>

  <hr>

  <p><strong>Confidentiality Notice:</strong> For confidentiality reasons, all client names and identifying details have been altered.</p>
`,
    review: {
      review: `Working with team Accelerate-AI has been an absolute pleasure! Their mastery in chatbot development is truly remarkable, delivering solutions that are not only technically sound but also delightfully user-friendly. The team has an incredible knack for turning complex requirements into seamless, intelligent conversations that feel natural and engaging. </br> Their ability to implement custom features and integrations sets them apart. Their attention to detail and focus on quality ensure every project is executed flawlessly. Beyond their technical expertise, their collaborative nature and problem-solving mindset make them a valued partner who’s always ready to go above and beyond. </br> We’re grateful for the innovation and dedication Accelerate-AI team brought to the table. Their work has made a huge difference, and we look forward to working with him on future projects.`,
      name: "Diat Khan",
      info: "CEO - Remote Office, Australia",
      logo: "/images/testimonials/profiles/2.jpeg",
    },
  },
  {
    images: [
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://accelerate-tech-ai.notion.site/image/attachment%3A03c461a6-1c2f-4b1f-ae7d-cfe3a1e82867%3AScreenshot_2025-02-23_at_8.39.39_PM.png?table=block&id=1a36ef92-20db-8023-9349-e7190fb288c0&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2",
      "https://accelerate-tech-ai.notion.site/image/attachment%3A4d64feff-ac52-460d-acd0-6b0d1b28a8c5%3AScreenshot_2025-02-23_at_8.40.02_PM.png?table=block&id=1a36ef92-20db-80c1-ae61-dee2a5ddbe3a&spaceId=b4e7c64f-7b0d-4b89-a8f6-ef81552c8f3a&width=1420&userId=&cache=v2",
    ],
    desc: "From Outdated Listings to a Digital Showcase: Transforming Real Estate in Canada",
    slug: "From-Outdated-Listings",
    category:categories[3],
     relatedCaseStudies: ["from-missed-opportunities-to-instant-lead-engagement", "from-confusion-to-clarity"],
    featured: false,
    content: `
  <h2><strong>Client Overview</strong></h2>
  
  <div>
    <p><strong>Industry:</strong> B2B Technology & SaaS</p>
    <p><strong>Company Size:</strong> Mid-sized enterprise</p>
    <p><strong>Location:</strong> Australia</p>
    <p><strong>Service Provided:</strong> AI-Powered Outbound & Inbound Call Automation</p>
    <p><strong>Tools Used:</strong> 
      <a href="https://cal.com" target="_blank" rel="noopener noreferrer">Cal.com</a>, 
      <a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">Vapi AI</a>, 
      <a href="https://www.make.com" target="_blank" rel="noopener noreferrer">Make.com</a>, 
      Python
    </p>
  </div>

  <h2><strong>Challenges & Objectives</strong></h2>
  
  <div>
    <h5><strong>Challenges:</strong></h5>
    <ul>
      <li>Manual outbound calling was inefficient and resource-intensive</li>
      <li>Appointment scheduling required human intervention, leading to delays</li>
      <li>Missed follow-ups resulted in lost business opportunities</li>
    </ul>
  </div>

  <div>
    <h5><strong>Objectives:</strong></h5>
    <ul>
      <li>Automate outbound sales calls to qualify and schedule appointments</li>
      <li>Implement an AI-powered agent to handle customer inquiries</li>
      <li>Integrate an automated follow-up mechanism for potential leads</li>
    </ul>
  </div>

  <h2><strong>Our Solution</strong></h2>

  <div>
    <h5><strong>Technology & Tools Used:</strong></h5>
    <ul>
      <li><a href="https://cal.com" target="_blank" rel="noopener noreferrer">Cal.com</a> for automated appointment booking</li>
      <li><a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">Vapi.ai</a> for AI-driven voice agent</li>
      <li><a href="https://www.make.com" target="_blank" rel="noopener noreferrer">Make.com</a> for workflow automation</li>
      <li>Python for custom integrations</li>
    </ul>
  </div>

  <div>
    <h5><strong>Implementation Process:</strong></h5>
    <ol>
      <li><strong>Assessment:</strong> Analyzed the client’s outbound sales process and appointment scheduling workflow.</li>
      <li><strong>AI Integration:</strong> Developed "Chris," an AI agent capable of both inbound and outbound calls, trained on the client’s knowledge base.</li>
      <li><strong>Testing & Optimization:</strong> Ensured the AI agent effectively handled queries, scheduled appointments, and followed up with leads.</li>
      <li><strong>Deployment:</strong> Implemented Chris to operate during working hours, adhering to follow-up rules and automating appointment confirmation via email.</li>
    </ol>
  </div>

  <h2><strong>Results & Impact</strong></h2>

  <div>
    <h5><strong>Key Outcomes:</strong></h5>
    <ul>
      <li>Reduction in manual call handling</li>
      <li>Increase in qualified appointment bookings</li>
      <li><strong>Automated follow-ups</strong> reduced missed opportunities</li>
      <li><strong>Increased accuracy</strong> in appointment scheduling and confirmation</li>
    </ul>
  </div>

  <div>
    <h5><strong>Client Feedback:</strong></h5>
    <blockquote>“The AI agent has significantly reduced our workload and improved lead conversions. The automation ensures we never miss follow-ups and customers get instant scheduling assistance.”</blockquote>
  </div>

  <hr>

  <p><strong>Confidentiality Notice:</strong> For confidentiality reasons, all client names and identifying details have been altered.</p>
`,
    review: {
      review: `Working with team Accelerate-AI has been an absolute pleasure! Their mastery in chatbot development is truly remarkable, delivering solutions that are not only technically sound but also delightfully user-friendly. The team has an incredible knack for turning complex requirements into seamless, intelligent conversations that feel natural and engaging. </br> Their ability to implement custom features and integrations sets them apart. Their attention to detail and focus on quality ensure every project is executed flawlessly. Beyond their technical expertise, their collaborative nature and problem-solving mindset make them a valued partner who’s always ready to go above and beyond. </br> We’re grateful for the innovation and dedication Accelerate-AI team brought to the table. Their work has made a huge difference, and we look forward to working with him on future projects.`,
      name: "Diat Khan",
      info: "CEO - Remote Office, Australia",
      logo: "/images/testimonials/profiles/2.jpeg",
    },
  },
  {
    images: [
      "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg",
      "https://lh3.google.com/u/0/d/1JTvZMAfk4Lyk8K1x6TxnsmftxoLSOb-6=k", 
    ],
    desc: "How We Did Shopify Chat Fusion: Blending AI with E-Commerce Excellence",
    slug: "How-We-Did-Shopify-Chat",
    category:categories[1],
    relatedCaseStudies: ["from-confusion-to-clarity", "How-We-Did-Multi-Channel"],
    featured: false,
    review: {
      review: `Working with team Accelerate-AI has been an absolute pleasure! Their mastery in chatbot development is truly remarkable, delivering solutions that are not only technically sound but also delightfully user-friendly. The team has an incredible knack for turning complex requirements into seamless, intelligent conversations that feel natural and engaging. </br> Their ability to implement custom features and integrations sets them apart. Their attention to detail and focus on quality ensure every project is executed flawlessly. Beyond their technical expertise, their collaborative nature and problem-solving mindset make them a valued partner who’s always ready to go above and beyond. </br> We’re grateful for the innovation and dedication Accelerate-AI team brought to the table. Their work has made a huge difference, and we look forward to working with him on future projects.`,
      name: "Diat Khan",
      info: "CEO - Remote Office, Australia",
      logo: "/images/testimonials/profiles/2.jpeg",
    },
    content: `
  <h2><strong>Client Overview</strong></h2>
  
  <div>
    <p><strong>Industry:</strong> B2B Technology & SaaS</p>
    <p><strong>Company Size:</strong> Mid-sized enterprise</p>
    <p><strong>Location:</strong> Australia</p>
    <p><strong>Service Provided:</strong> AI-Powered Outbound & Inbound Call Automation</p>
    <p><strong>Tools Used:</strong> 
      <a href="https://cal.com" target="_blank" rel="noopener noreferrer">Cal.com</a>, 
      <a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">Vapi AI</a>, 
      <a href="https://www.make.com" target="_blank" rel="noopener noreferrer">Make.com</a>, 
      Python
    </p>
  </div>

  <h2><strong>Challenges & Objectives</strong></h2>
  
  <div>
    <h5><strong>Challenges:</strong></h5>
    <ul>
      <li>Manual outbound calling was inefficient and resource-intensive</li>
      <li>Appointment scheduling required human intervention, leading to delays</li>
      <li>Missed follow-ups resulted in lost business opportunities</li>
    </ul>
  </div>

  <div>
    <h5><strong>Objectives:</strong></h5>
    <ul>
      <li>Automate outbound sales calls to qualify and schedule appointments</li>
      <li>Implement an AI-powered agent to handle customer inquiries</li>
      <li>Integrate an automated follow-up mechanism for potential leads</li>
    </ul>
  </div>

  <h2><strong>Our Solution</strong></h2>

  <div>
    <h5><strong>Technology & Tools Used:</strong></h5>
    <ul>
      <li><a href="https://cal.com" target="_blank" rel="noopener noreferrer">Cal.com</a> for automated appointment booking</li>
      <li><a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">Vapi.ai</a> for AI-driven voice agent</li>
      <li><a href="https://www.make.com" target="_blank" rel="noopener noreferrer">Make.com</a> for workflow automation</li>
      <li>Python for custom integrations</li>
    </ul>
  </div>

  <div>
    <h5><strong>Implementation Process:</strong></h5>
    <ol>
      <li><strong>Assessment:</strong> Analyzed the client’s outbound sales process and appointment scheduling workflow.</li>
      <li><strong>AI Integration:</strong> Developed "Chris," an AI agent capable of both inbound and outbound calls, trained on the client’s knowledge base.</li>
      <li><strong>Testing & Optimization:</strong> Ensured the AI agent effectively handled queries, scheduled appointments, and followed up with leads.</li>
      <li><strong>Deployment:</strong> Implemented Chris to operate during working hours, adhering to follow-up rules and automating appointment confirmation via email.</li>
    </ol>
  </div>

  <h2><strong>Results & Impact</strong></h2>

  <div>
    <h5><strong>Key Outcomes:</strong></h5>
    <ul>
      <li>Reduction in manual call handling</li>
      <li>Increase in qualified appointment bookings</li>
      <li><strong>Automated follow-ups</strong> reduced missed opportunities</li>
      <li><strong>Increased accuracy</strong> in appointment scheduling and confirmation</li>
    </ul>
  </div>

  <div>
    <h5><strong>Client Feedback:</strong></h5>
    <blockquote>“The AI agent has significantly reduced our workload and improved lead conversions. The automation ensures we never miss follow-ups and customers get instant scheduling assistance.”</blockquote>
  </div>

  <hr>

  <p><strong>Confidentiality Notice:</strong> For confidentiality reasons, all client names and identifying details have been altered.</p>
`,
  },
  {
    images: [
      "https://images.pexels.com/photos/5474299/pexels-photo-5474299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://lh3.google.com/u/0/d/12iae6JExVkJFwaCzVbuzhMTYdM4-mFfF=k"
    ],
    desc: "From Manual Data Entry to Automated Brilliance: How AI Revolutionized Video Data Management",
    slug: "From-Manual-Data-Entry",
    category:categories[2],
    relatedCaseStudies: ["From-Manual-Mishaps-to-Automated", "How-AI-Powered-Calls"],
    featured: false,
    content: `
  <h2><strong>Client Overview</strong></h2>
  
  <div>
    <p><strong>Industry:</strong> B2B Technology & SaaS</p>
    <p><strong>Company Size:</strong> Mid-sized enterprise</p>
    <p><strong>Location:</strong> Australia</p>
    <p><strong>Service Provided:</strong> AI-Powered Outbound & Inbound Call Automation</p>
    <p><strong>Tools Used:</strong> 
      <a href="https://cal.com" target="_blank" rel="noopener noreferrer">Cal.com</a>, 
      <a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">Vapi AI</a>, 
      <a href="https://www.make.com" target="_blank" rel="noopener noreferrer">Make.com</a>, 
      Python
    </p>
  </div>

  <h2><strong>Challenges & Objectives</strong></h2>
  
  <div>
    <h5><strong>Challenges:</strong></h5>
    <ul>
      <li>Manual outbound calling was inefficient and resource-intensive</li>
      <li>Appointment scheduling required human intervention, leading to delays</li>
      <li>Missed follow-ups resulted in lost business opportunities</li>
    </ul>
  </div>

  <div>
    <h5><strong>Objectives:</strong></h5>
    <ul>
      <li>Automate outbound sales calls to qualify and schedule appointments</li>
      <li>Implement an AI-powered agent to handle customer inquiries</li>
      <li>Integrate an automated follow-up mechanism for potential leads</li>
    </ul>
  </div>

  <h2><strong>Our Solution</strong></h2>

  <div>
    <h5><strong>Technology & Tools Used:</strong></h5>
    <ul>
      <li><a href="https://cal.com" target="_blank" rel="noopener noreferrer">Cal.com</a> for automated appointment booking</li>
      <li><a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">Vapi.ai</a> for AI-driven voice agent</li>
      <li><a href="https://www.make.com" target="_blank" rel="noopener noreferrer">Make.com</a> for workflow automation</li>
      <li>Python for custom integrations</li>
    </ul>
  </div>

  <div>
    <h5><strong>Implementation Process:</strong></h5>
    <ol>
      <li><strong>Assessment:</strong> Analyzed the client’s outbound sales process and appointment scheduling workflow.</li>
      <li><strong>AI Integration:</strong> Developed "Chris," an AI agent capable of both inbound and outbound calls, trained on the client’s knowledge base.</li>
      <li><strong>Testing & Optimization:</strong> Ensured the AI agent effectively handled queries, scheduled appointments, and followed up with leads.</li>
      <li><strong>Deployment:</strong> Implemented Chris to operate during working hours, adhering to follow-up rules and automating appointment confirmation via email.</li>
    </ol>
  </div>

  <h2><strong>Results & Impact</strong></h2>

  <div>
    <h5><strong>Key Outcomes:</strong></h5>
    <ul>
      <li>Reduction in manual call handling</li>
      <li>Increase in qualified appointment bookings</li>
      <li><strong>Automated follow-ups</strong> reduced missed opportunities</li>
      <li><strong>Increased accuracy</strong> in appointment scheduling and confirmation</li>
    </ul>
  </div>

  <div>
    <h5><strong>Client Feedback:</strong></h5>
    <blockquote>“The AI agent has significantly reduced our workload and improved lead conversions. The automation ensures we never miss follow-ups and customers get instant scheduling assistance.”</blockquote>
  </div>

  <hr>

  <p><strong>Confidentiality Notice:</strong> For confidentiality reasons, all client names and identifying details have been altered.</p>
`,
    review: {
      review: `Working with team Accelerate-AI has been an absolute pleasure! Their mastery in chatbot development is truly remarkable, delivering solutions that are not only technically sound but also delightfully user-friendly. The team has an incredible knack for turning complex requirements into seamless, intelligent conversations that feel natural and engaging. </br> Their ability to implement custom features and integrations sets them apart. Their attention to detail and focus on quality ensure every project is executed flawlessly. Beyond their technical expertise, their collaborative nature and problem-solving mindset make them a valued partner who’s always ready to go above and beyond. </br> We’re grateful for the innovation and dedication Accelerate-AI team brought to the table. Their work has made a huge difference, and we look forward to working with him on future projects.`,
      name: "Diat Khan",
      info: "CEO - Remote Office, Australia",
      logo: "/images/testimonials/profiles/2.jpeg",
    },
  },
  {
    images: [
      "https://images.pexels.com/photos/8204403/pexels-photo-8204403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/8204403/pexels-photo-8204403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
       
    ],
    desc: "How AI-Powered Calls Transformed Lead Qualification & Sales for This Business!",
    featured: false,
    slug: "How-AI-Powered-Calls",
    category:categories[0],
    relatedCaseStudies: ["from-missed-opportunities-to-instant-lead-engagement", "From-Chaos-to-Convenience"],
    content: `
  <h2><strong>Client Overview</strong></h2>
  
  <div>
    <p><strong>Industry:</strong> Commercial Equipment Sales</p>
    <p><strong>Company Size:</strong> Mid-sized enterprise</p>
    <p><strong>Location:</strong> United States</p>
    <p><strong>Service Provided:</strong> AI-Powered Inbound Call Automation & Lead Management</p>
    <p><strong>Tools Used:</strong> 
      <a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer">Google Cloud Platform</a>, 
      <a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">Vapi.AI</a>, 
      <a href="https://cloud.google.com/pubsub" target="_blank" rel="noopener noreferrer">Pub/Sub</a>, 
      <a href="https://www.hubspot.com" target="_blank" rel="noopener noreferrer">HubSpot</a>, 
      <a href="https://www.make.com" target="_blank" rel="noopener noreferrer">Make.com</a>, 
      Python
    </p>
  </div>

  <h2><strong>Challenges & Objectives</strong></h2>
  
  <div>
    <h5><strong>Challenges:</strong></h5>
    <ul>
      <li>Manual lead qualification was time-consuming and inconsistent</li>
      <li>High volume of email inquiries required manual responses, delaying follow-ups</li>
      <li>Lack of an efficient system to identify and act on high-priority leads</li>
    </ul>
  </div>

  <div>
    <h5><strong>Objectives:</strong></h5>
    <ul>
      <li>Automate the process of lead qualification based on predefined business rules</li>
      <li>Enable AI-driven voice interaction to instantly notify business owners of potential leads</li>
      <li>Streamline the email response process with automated, editable drafts for quick approval</li>
    </ul>
  </div>

  <h2><strong>Our Solution</strong></h2>

  <div>
    <h5><strong>Technology & Tools Used:</strong></h5>
    <ul>
      <li><a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer">Google Cloud Platform</a> for processing and AI services</li>
      <li><a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">Vapi.AI</a> for AI-powered voice interactions</li>
      <li><a href="https://cloud.google.com/pubsub" target="_blank" rel="noopener noreferrer">Pub/Sub</a> for real-time event handling</li>
      <li><a href="https://www.hubspot.com" target="_blank" rel="noopener noreferrer">HubSpot</a> CRM for lead tracking and automation</li>
      <li><a href="https://www.make.com" target="_blank" rel="noopener noreferrer">Make.com</a> for workflow automation</li>
      <li>Python for custom integrations</li>
    </ul>
  </div>

  <div>
    <h5><strong>Implementation Process:</strong></h5>
    <ol>
      <li><strong>Assessment:</strong> Analyzed the client’s lead generation process and pain points in handling email inquiries</li>
      <li><strong>AI Integration:</strong> Developed "Henry," an AI-powered voice agent to classify inquiries and notify the business owner</li>
      <li><strong>Automation Flow:</strong> Emails were classified based on predefined thresholds, triggering automated voice calls for valid leads</li>
      <li><strong>Approval Workflow:</strong> Business owners could approve AI-generated responses in real-time before they were sent to customers</li>
      <li><strong>CRM Integration:</strong> Captured and logged all lead interactions into <a href="https://www.hubspot.com" target="_blank" rel="noopener noreferrer">HubSpot</a> for tracking and analysis</li>
    </ol>
  </div>

  <h2><strong>Results & Impact</strong></h2>

  <div>
    <h5><strong>Key Outcomes:</strong></h5>
    <ul>
      <li>Improved lead response time with automated voice alerts</li>
      <li>Streamlined email inquiry handling with AI-crafted, real-time editable responses</li>
      <li>Reduced manual effort in lead qualification and follow-ups</li>
      <li>Enhanced lead tracking with seamless <a href="https://www.hubspot.com" target="_blank" rel="noopener noreferrer">CRM integration</a></li>
    </ul>
  </div>

  <div>
    <h5><strong>Client Feedback:</strong></h5>
    <blockquote>“The AI automation has helped us instantly qualify and act on leads, reducing delays and improving our customer engagement”</blockquote>
  </div>

  <hr>

  <p><strong>Confidentiality Notice:</strong> For confidentiality reasons, all client names and identifying details have been altered.</p>
`,
    review: {
      review: `Working with team Accelerate-AI has been an absolute pleasure! Their mastery in chatbot development is truly remarkable, delivering solutions that are not only technically sound but also delightfully user-friendly. The team has an incredible knack for turning complex requirements into seamless, intelligent conversations that feel natural and engaging. </br> Their ability to implement custom features and integrations sets them apart. Their attention to detail and focus on quality ensure every project is executed flawlessly. Beyond their technical expertise, their collaborative nature and problem-solving mindset make them a valued partner who’s always ready to go above and beyond. </br> We’re grateful for the innovation and dedication Accelerate-AI team brought to the table. Their work has made a huge difference, and we look forward to working with him on future projects.`,
      name: "Diat Khan",
      info: "CEO - Remote Office, Australia",
      logo: "/images/testimonials/profiles/2.jpeg",
    },
  },
  {
    images: [
      "https://images.pexels.com/photos/7621136/pexels-photo-7621136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7621136/pexels-photo-7621136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
       
    ],
    desc: "How We Did Multi-Channel Chat Integration: From Shopify to Instagram, Converting Conversations into Conversions",
    featured: false,
    slug: "How-We-Did-Multi-Channel",
    relatedCaseStudies: ["from-confusion-to-clarity", "How-We-Did-Shopify-Chat"],
    category:categories[1],
    
  },
  {
    images: [
      "https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
       
    ],
    desc: "From Data Overload to Intelligent Insights: How AI Consulting Transformed Strategic Decision-Making",
    featured: false,
    slug: "From-Data-Overload",
    category:categories[4],
    relatedCaseStudies: ["from-missed-opportunities-to-instant-lead-engagement", "from-confusion-to-clarity"]

    
  },
  {
    images: [
      "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    ],
    desc: "How AI Chatbots Rescued Lost Sales for an E-Commerce Brand!",
     
    slug: "How-AI-Chatbots",
    category:categories[1],
    relatedCaseStudies: ["from-confusion-to-clarity", "How-We-Did-Shopify-Chat"]
,
    content: `
  <h2><strong>Client Overview</strong></h2>

  <div>
    <p><strong>Industry:</strong> E-Commerce</p>
    <p><strong>Company Size:</strong> Growing Online Retailer</p>
    <p><strong>Location:</strong> UAE</p>
    <p><strong>Service Provided:</strong> AI-Powered Customer Engagement & Cart Recovery</p>
    <p><strong>Tools Used:</strong> 
      <a href="https://www.voiceflow.com" target="_blank" rel="noopener noreferrer">Voiceflow</a>, 
      <a href="https://www.shopify.com" target="_blank" rel="noopener noreferrer">Shopify</a>, 
      <a href="https://www.make.com" target="_blank" rel="noopener noreferrer">Make.com</a>, 
      <a href="https://www.pinecone.io" target="_blank" rel="noopener noreferrer">Pinecone</a>, 
      <a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">Vapi AI</a>, 
      <a href="https://www.twilio.com" target="_blank" rel="noopener noreferrer">Twilio</a>, 
      Python
    </p>
  </div>

  <h2><strong>Challenges & Objectives</strong></h2>

  <div>
    <h5><strong>Challenges:</strong></h5>
    <ul>
      <li>High cart abandonment rates impacting sales revenue</li>
      <li>Limited real-time customer support, leading to missed engagement opportunities</li>
      <li>Need for personalized interactions to enhance the shopping experience</li>
    </ul>
  </div>

  <div>
    <h5><strong>Objectives:</strong></h5>
    <ul>
      <li>Implement an AI chatbot to engage with customers proactively</li>
      <li>Reduce cart abandonment by offering real-time assistance and incentives</li>
      <li>Automate customer interactions while integrating with existing systems</li>
    </ul>
  </div>

  <h2><strong>Our Solution</strong></h2>

  <div>
    <h5><strong>Technology & Tools Used:</strong></h5>
    <ul>
      <li><a href="https://www.voiceflow.com" target="_blank" rel="noopener noreferrer">Voiceflow</a> for chatbot automation</li>
      <li><a href="https://www.shopify.com" target="_blank" rel="noopener noreferrer">Shopify</a> for e-commerce platform integration</li>
      <li><a href="https://www.make.com" target="_blank" rel="noopener noreferrer">Make.com</a> for workflow automation</li>
      <li><a href="https://www.pinecone.io" target="_blank" rel="noopener noreferrer">Pinecone</a> for AI-driven personalization</li>
      <li><a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">Vapi.ai</a> for voice-based interactions</li>
      <li><a href="https://www.twilio.com" target="_blank" rel="noopener noreferrer">Twilio</a> for SMS and call-based notifications</li>
      <li>Python for backend integrations</li>
    </ul>
  </div>

  <div>
    <h5><strong>Implementation Process:</strong></h5>
    <ol>
      <li><strong>AI Chatbot Development:</strong> Designed a conversational AI chatbot for instant customer engagement</li>
      <li><strong>Cart Abandonment Detection:</strong> Used Shopify’s cart abandonment webhook to trigger automated interventions</li>
      <li><strong>Incentive Automation:</strong> Created real-time discount coupons and sent them via SMS and phone call (Twilio)</li>
      <li><strong>Personalized Recommendations:</strong> Leveraged AI-driven analytics to suggest relevant products</li>
      <li><strong>CRM Integration:</strong> Tracked all interactions and conversions in the CRM for data-driven decision-making</li>
    </ol>
  </div>

  <h2><strong>Results & Impact</strong></h2>

  <div>
    <h5><strong>Key Outcomes:</strong></h5>
    <ul>
      <li>Significant reduction in cart abandonment rates</li>
      <li>Increased customer engagement through proactive chatbot interactions</li>
      <li>More efficient customer support processes, allowing human agents to focus on complex queries</li>
      <li>Streamlined sales conversions with real-time incentives and follow-ups</li>
    </ul>
  </div>

  <div>
    <h5><strong>Client Feedback:</strong></h5>
    <blockquote>“The AI chatbot transformed our customer engagement strategy, reducing lost sales and making shopping more interactive.”</blockquote>
  </div>

  <hr>

  <p><strong>Confidentiality Notice:</strong> For confidentiality reasons, all client names and identifying details have been altered.</p>
`,
    review: {
      review: `Working with team Accelerate-AI has been an absolute pleasure! Their mastery in chatbot development is truly remarkable, delivering solutions that are not only technically sound but also delightfully user-friendly. The team has an incredible knack for turning complex requirements into seamless, intelligent conversations that feel natural and engaging. </br> Their ability to implement custom features and integrations sets them apart. Their attention to detail and focus on quality ensure every project is executed flawlessly. Beyond their technical expertise, their collaborative nature and problem-solving mindset make them a valued partner who’s always ready to go above and beyond. </br> We’re grateful for the innovation and dedication Accelerate-AI team brought to the table. Their work has made a huge difference, and we look forward to working with him on future projects.`,
      name: "Diat Khan",
      info: "CEO - Remote Office, Australia",
      logo: "/images/testimonials/profiles/2.jpeg",
    },
  },
  {
    images: [
      "https://images.pexels.com/photos/6131578/pexels-photo-6131578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6131578/pexels-photo-6131578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      
    ],
    desc: "From Chaos to Convenience: How AI Helped a Pet Services Brand Handle Bookings Effortlessly!",
    featured: false,
    slug: "From-Chaos-to-Convenience",
    category:categories[0],
    relatedCaseStudies: ["from-missed-opportunities-to-instant-lead-engagement", "How-AI-Powered-Calls"],
    content: `
  <h2><strong>Client Overview</strong></h2>

  <div>
    <p><strong>Industry:</strong> Pet Services</p>
    <p><strong>Company Size:</strong> Fast-Growing Business</p>
    <p><strong>Location:</strong> United States</p>
    <p><strong>Service Provided:</strong> AI-Powered Voice Assistant for Customer Support & Appointment Booking</p>
  </div>

  <h2><strong>Challenges & Objectives</strong></h2>

  <div>
    <h5><strong>Challenges:</strong></h5>
    <ul>
      <li>High call volumes leading to missed customer queries and lost appointments</li>
      <li>Inefficient manual scheduling causing delays and staff overload</li>
      <li>Need for seamless customer engagement without increasing operational costs</li>
    </ul>
  </div>

  <div>
    <h5><strong>Objectives:</strong></h5>
    <ul>
      <li>Automate call handling and appointment scheduling</li>
      <li>Provide real-time service details and personalized interactions</li>
      <li>Integrate AI-driven automation with existing CRM and booking systems</li>
    </ul>
  </div>

  <h2><strong>Our Solution</strong></h2>

  <div>
    <h5><strong>Technology & Tools Used:</strong></h5>
    <ul>
      <li>Python for AI processing</li>
      <li><a href="https://vapi.ai" target="_blank" rel="noopener noreferrer">Vapi.ai</a> for voice-based automation</li>
      <li><a href="https://zapier.com" target="_blank" rel="noopener noreferrer">Zapier</a> for workflow automation</li>
      <li><a href="https://cal.com" target="_blank" rel="noopener noreferrer">Cal.com</a> for appointment scheduling</li>
      <li><a href="https://www.twilio.com" target="_blank" rel="noopener noreferrer">Twilio</a> for call handling and customer communication</li>
    </ul>
  </div>

  <div>
    <h5><strong>Implementation Process:</strong></h5>
    <ol>
      <li><strong>Conversational AI Development:</strong> Designed an intuitive voice assistant to handle inbound and outbound calls</li>
      <li><strong>Call Handling Automation:</strong> The AI agent managed 70% of inbound queries instantly</li>
      <li><strong>Real-Time Service Information:</strong> Provided accurate details on services, pricing, and availability</li>
      <li><strong>Automated Scheduling:</strong> Integrated with <a href="https://cal.com" target="_blank" rel="noopener noreferrer">Cal.com</a> and Google Calendar APIs for seamless appointment bookings</li>
      <li><strong>CRM Synchronization:</strong> Synced all interactions with the client’s CRM to ensure smooth operations and data tracking</li>
      <li><strong>AI Optimization:</strong> Continuously refined the AI model for improved response accuracy and efficiency</li>
    </ol>
  </div>

  <h2><strong>Results & Impact</strong></h2>

  <div>
    <h5><strong>Key Outcomes:</strong></h5>
    <ul>
      <li>Increased efficiency in call handling with automated AI-driven responses</li>
      <li>Reduced missed appointment opportunities through real-time scheduling</li>
      <li>Enhanced customer experience with personalized and instant service</li>
      <li>Streamlined operations, allowing staff to focus on high-priority tasks</li>
    </ul>
  </div>

  <div>
    <h5><strong>Client Feedback:</strong></h5>
    <blockquote>“The AI voice assistant has revolutionized how we handle customer inquiries and bookings, reducing workload while improving response times.”</blockquote>
  </div>

  <hr>

  <p><strong>Confidentiality Notice:</strong> For confidentiality reasons, all client names and identifying details have been altered.</p>
`,
    review: {
      review: `Working with team Accelerate-AI has been an absolute pleasure! Their mastery in chatbot development is truly remarkable, delivering solutions that are not only technically sound but also delightfully user-friendly. The team has an incredible knack for turning complex requirements into seamless, intelligent conversations that feel natural and engaging. </br> Their ability to implement custom features and integrations sets them apart. Their attention to detail and focus on quality ensure every project is executed flawlessly. Beyond their technical expertise, their collaborative nature and problem-solving mindset make them a valued partner who’s always ready to go above and beyond. </br> We’re grateful for the innovation and dedication Accelerate-AI team brought to the table. Their work has made a huge difference, and we look forward to working with him on future projects.`,
      name: "Diat Khan",
      info: "CEO - Remote Office, Australia",
      logo: "/images/testimonials/profiles/2.jpeg",
    },
  },

 
 
  
];
const cardVideos = [
  {
    src: "/videos/home-hero.mp4",
    poster: "/images/testimonials/thumbnail.jpg",
  },

  {
    src: "https://youtu.be/qBXjSlkpwFk?si=Xt8kt6Uq08FbDZZU",
    poster: "/images/testimonials/thumbnail.jpg",
  },

  {
    src: "https://youtu.be/d9a92iJwLWg?si=HX1EL3gOecn_x1YZ",
    poster: "/images/testimonials/thumbnail.jpg",
  },
];
const ShowCasePage = () => {
  return (
    <>
      <Hero />
      <TabsSections tabs={tabs} cardsData={caseStudiesData} />
      <VideoTestimonials
        id={"show-case-testimonials"}
        heading={"testimonials"}
        headingTag={"The Journey with us"}
        videoCard
        data={cardVideos}
      />
    </>
  );
};

export default ShowCasePage;
