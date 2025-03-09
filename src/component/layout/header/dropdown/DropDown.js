import LinkBtn from "@/component/common/buttons/LinkBtn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaCalendarCheck,
  FaPhoneAlt,
  FaMoneyBillWave,
  FaShippingFast,
  FaHeadset,
  FaPoll,
  FaBullhorn,
  FaTools,
  FaLanguage,
  FaBell,
  FaKeyboard,
  FaShoppingCart,
  FaFilter,
  FaClipboardList,
  FaChartLine,
  FaBook,
  FaComments,
  FaQuestionCircle,
  FaFileInvoiceDollar,
  FaChartBar,
  FaUsersCog,
  FaBoxes,
  FaTicketAlt,
  FaBalanceScale,
  FaClipboardCheck,
  FaShieldAlt,
  FaTasks,
  FaProjectDiagram,
  FaUserCheck,
  FaSearch,
  FaChartPie,
  FaServer,
  FaShareAlt,
  FaEdit,
} from "react-icons/fa";

export const servicesData = [
  {
    hero: {
      heading: "Intelligent AI Voice Agents & Bots",
      desc: `Empower your business with smart, voice-driven interactions that mimic human conversations -  
elevating <strong>customer engagement</strong>, streamlining <strong>appointment booking</strong>, enhancing <strong>service delivery</strong>,  
and driving <strong>conversions through targeted cold and follow-up calls</strong>.
`,
    },
    slug: "ai-voice-agents-and-bots", // URL-friendly slug
    title: "AI Voice Agents & Bots", // Title derived from slug
    brandLogos: [
      "https://ml-eu.globenewswire.com/Resource/Download/d3c2f313-5934-4eb4-8800-74d8159409a3",
      "https://ph-files.imgix.net/bc16937c-807e-4c49-b9aa-74971c697e31.png?auto=format",
      "https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6713412b0b097b146e9641f3_Retell-mainlogo-black.svg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/2560px-OpenAI_Logo.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twilio-logo-red.svg/2560px-Twilio-logo-red.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twilio-logo-red.svg/2560px-Twilio-logo-red.svg.png",
    ],
    about: {
      filterSlug: "ai-voice-agents",
      heading:
        "At Accelerate-AI, our Voice Agents & Bots leverage advanced speech recognition and synthesis to drive efficiency and enhance customer engagement across various touchpoints.",
      image:
        "https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    process: {
      heading: "Our AI Voice Agent Development Process",
      content: `<ul>
  <li>Deep-dive discovery to map user journeys and identify key voice interactions</li>
  <li>Designing of tailored conversational flows and voice scripts to align with your brand</li>
  <li>Integration of cutting-edge TTS and STT technologies such as ElevenLabs, Google Cloud Speech-to-Text, Amazon Polly, and Microsoft Azure Speech</li>
  <li>Employment of NLP frameworks including TensorFlow, PyTorch, and Hugging Face Transformers for contextual understanding</li>
  <li>Utilization of platforms like Dialogflow, Twilio, and custom SIP integrations for telephony and voice routing</li>
  <li>Iterative testing and optimization to ensure accuracy and natural interaction</li>
</ul>
`,
    },
    grids: [
      {
        title: "Appointment Booking",
        icon: <FaCalendarCheck />,
        area: "1 / 1 / 2 / 4",
      },
      {
        title: "Inbound & Outbound Sales",
        icon: <FaPhoneAlt />,
        area: "1 / 4 / 2 / 6",
      },
      {
        title: "Payment Reminders",
        icon: <FaMoneyBillWave />,
        area: "1 / 6 / 2 / 9",
      },
      {
        title: "Order Tracking & Updates",
        icon: <FaShippingFast />,
        area: "1 / 9 / 2 / 10",
      },
      {
        title: "24/7 Customer Support",
        icon: <FaHeadset />,
        area: "1/10/2/11",
      },

      {
        title: "Survey & Feedback Collection",
        icon: <FaPoll />,
        area: "2 / 1 / 3 / 3",
      },
      {
        title: "Voice-Enabled Marketing",
        icon: <FaBullhorn />,
        area: "2 / 3 / 3 / 9",
      },
      {
        title: "Internal Helpdesk Automation",
        icon: <FaTools />,
        area: "2 / 9 / 3 / 10",
      },
      {
        title: "Multi-Language Support",
        icon: <FaLanguage />,
        area: "2 / 10 / 3 / 11",
      },

      {
        title: "Voice Commerce",
        icon: <FaShoppingCart />,
        area: "3 / 1 / 4 / 2",
      },
      {
        title: "Appointment Reminders",
        icon: <FaBell />,
        area: "3 / 2 / 4 / 3",
      },
      { title: "Survey & Feedback", icon: <FaPoll />, area: "3 / 3 / 4 / 6" },
      {
        title: "Order Tracking & Updates",
        icon: <FaShippingFast />,
        area: "3 / 6 / 4 / 9",
      },
      {
        title: "Real-Time Transcription",
        icon: <FaKeyboard />,
        area: "3 / 9 / 4 / 11",
      },
    ],
    cta: "Schedule an appointment with our AI experts",
    lists: {
      heading:
        "AI Voice Agents have a direct impact on five key Business Metrics",
      content: `<ul>
  <li><strong>Efficiency Gains</strong><br>Slash call handling times and cut operational costs</li>
  <li><strong>Conversion Boost</strong><br>Turbocharge appointment bookings and amplify lead conversions</li>
  <li><strong>Engagement Uplift</strong><br>Elevate customer satisfaction and supercharge engagement</li>
  <li><strong>Scalability</strong><br>Scale support operations while trimming wait times</li>
  <li><strong>Revenue Growth</strong><br>Drive measurable revenue uplift through widespread voice adoption</li>
</ul>
`,
    },
    leftSIdeImages: [
      "https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    hero: {
      heading: "Intelligent AI Chat Agents & Bots",
      desc: `Transform customer support and engagement with chatbots that deliver <strong>personalized, context-aware conversations</strong>  across <strong>digital channels.</strong> 
`,
    },
    slug: "ai-chat-agents-and-bots", // URL-friendly slug
    title: "AI Chat Agents & Bots", // Title derived from slug
    brandLogos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/2560px-OpenAI_Logo.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twilio-logo-red.svg/2560px-Twilio-logo-red.svg.png",
      "https://upload.wikimedia.org/wikipedia/en/c/c7/Dialogflow_logo.svg",
      "https://ml.globenewswire.com/Resource/Download/8ffa0ae9-98bf-486b-b407-426eb03ec175",
    ],
    about: {
      filterSlug: "ai-chat-agents",
      heading:
        "At Accelerate, AI Our AI Chat Agents harness advanced NLP and machine learning to drive instant support and meaningful interactions, reducing reliance on human agents",
      image:
        "https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    process: {
      heading: "Our AI Chat Agent Development Process",
      content: `  <ul>
  <li>Map out customer journeys and design multi-turn dialogue flows using discovery sessions</li>
  <li>Develop chatbots with frameworks such as Rasa, Voiceflow, Langchain, Dialogflow, Langflow, and Microsoft Bot Framework</li>
  <li>Integrate powerful AI engines like OpenAI GPT-4, ChatGPT, and Microsoft Cognitive Services</li>
  <li>Enhance language understanding with libraries from Hugging Face and spaCy</li>
  <li>Connect with omnichannel platforms (WhatsApp, Slack, Telegram, Twilio) for seamless interactions</li>
  <li>Implement continuous monitoring, A/B testing, and analytics to refine performance</li>
</ul>

                `,
    },
    grids: [
      { title: "24/7 Support", icon: <FaHeadset />, area: "1 / 1 / 2 / 4" },
      {
        title: "Lead Qualification",
        icon: <FaFilter />,
        area: "1 / 4 / 2 / 6",
      },
      {
        title: "E-commerce Guidance",
        icon: <FaShoppingCart />,
        area: "1 / 6 / 2 / 9",
      },
      {
        title: "Appointment Scheduling",
        icon: <FaCalendarCheck />,
        area: "1 / 9 / 2 / 10",
      },
      {
        title: "FAQ Automation",
        icon: <FaQuestionCircle />,
        area: "1 / 10 / 2 / 11",
      },

      {
        title: "Order Tracking",
        icon: <FaShippingFast />,
        area: "2 / 1 / 3 / 3",
      },
      { title: "Internal Helpdesk", icon: <FaTools />, area: "2 / 3 / 3 / 9" },
      {
        title: "Feedback Collection",
        icon: <FaPoll />,
        area: "2 / 9 / 3 / 10",
      },
      {
        title: "Conversational Marketing",
        icon: <FaComments />,
        area: "2 / 10 / 3 / 11",
      },

      {
        title: "Event Registration",
        icon: <FaClipboardList />,
        area: "3 / 1 / 4 / 3",
      },
      {
        title: "Personalized Upselling",
        icon: <FaChartLine />,
        area: "3 / 3 / 4 / 6",
      },
      {
        title: "Knowledge Base Access",
        icon: <FaBook />,
        area: "3 / 6 / 4 / 11",
      },
    ],

    cta: "AI Chat Agents have a direct impact on five key Business Metrics",
    lists: {
      heading:
        "AI Voice Agents have a direct impact on five key Business Metrics",
      content: `<ul>
  <li><strong>Efficiency Gains</strong><br>Slash manual chat handling times and reduce operational costs</li>
  <li><strong>Conversion Boost</strong><br>Accelerate lead qualification and speed up your sales funnel</li>
  <li><strong>Engagement Uplift</strong><br>Deliver personalized, real-time interactions that boost satisfaction</li>
  <li><strong>Scalability</strong><br>Handle concurrent sessions without adding extra headcount</li>
  <li><strong>Revenue Growth</strong><br>Harness cross-selling and upselling opportunities through dynamic chat experiences</li>
</ul>
`,
    },
    leftSIdeImages: [
      "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    hero: {
      heading: "Workflow & Business Process Transformation",
      desc: ` Transform your business by <strong>automating routine tasks</strong> and <strong>optimizing workflows</strong>. Our solutions <strong>streamline operations</strong>, <strong>eliminate manual errors</strong>, and <strong>drive efficiency</strong>, enabling you to focus on <strong>strategic growth</strong> and <strong>innovation</strong>.
`,
    },
    slug: "workflow-and-business-process-automation", // URL-friendly slug
    title: "Workflow and Business Process Automation", // Title derived from slug
    brandLogos: [
      "https://banner2.cleanpng.com/20181117/gha/kisspng-scalable-vector-graphics-javascript-python-logo-python-png-1713921410142.webp",
      "https://logos-world.net/wp-content/uploads/2022/01/HubSpot-Logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Pipedrive_Logo.svg",
    ],
    about: {
      filterSlug: "workflow-automations",
      heading:
        "At Accelerate AI, our Workflow Automation solutions leverage cutting-edge integration, custom scripting, and real-time analytics to streamline processes and drive business transformation, significantly reducing manual tasks and optimizing operational efficiency.",
      image:
        "https://images.pexels.com/photos/3183188/pexels-photo-3183188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    process: {
      heading: "Our Workflow & Business Process Automation Process",
      content: `    <ul>
  <li>Map out existing workflows and identify key automation opportunities through comprehensive process analysis</li>
  <li>Design tailored automation strategies aligned with industry best practices and business objectives</li>
  <li>Develop and deploy custom automation solutions using platforms like Zapier, Make.com, n8n, and IFTTT, alongside bespoke scripts in Python or Node.js</li>
  <li>Integrate RPA tools such as UiPath, Automation Anywhere, and Blue Prism for high-volume, repetitive tasks</li>
  <li>Connect seamlessly with legacy systems and cloud platforms (AWS, GCP, Azure) to ensure unified operations</li>
  <li>Implement real-time monitoring and analytics using Power BI, Tableau, or Google Data Studio for continuous optimization</li>
</ul>

                `,
    },
    grids: [
      {
        title: "Invoice Processing",
        icon: <FaFileInvoiceDollar />,
        area: "1 / 1 / 2 / 4",
      },
      {
        title: "Data Entry Automation",
        icon: <FaKeyboard />,
        area: "1 / 4 / 2 / 6",
      },
      {
        title: "Report Generation & Dashboard Automations",
        icon: <FaChartBar />,
        area: "1 / 6 / 2 / 9",
      },
      { title: "CRM Automation", icon: <FaUsersCog />, area: "1 / 9 / 2 / 10" },
      {
        title: "Inventory Management",
        icon: <FaBoxes />,
        area: "1 / 10 / 2 / 11",
      },

      {
        title: "Customer Support Ticketing",
        icon: <FaTicketAlt />,
        area: "2 / 1 / 3 / 3",
      },
      {
        title: "Marketing Campaign Automation",
        icon: <FaBullhorn />,
        area: "2 / 3 / 3 / 9",
      },
      {
        title: "Financial Reconciliation",
        icon: <FaBalanceScale />,
        area: "2 / 9 / 3 / 10",
      },
      {
        title: "Procurement Management",
        icon: <FaClipboardCheck />,
        area: "2 / 10 / 3 / 11",
      },

      {
        title: "Compliance Monitoring",
        icon: <FaShieldAlt />,
        area: "3 / 1 / 4 / 3",
      },
      { title: "Task Automation", icon: <FaTasks />, area: "3 / 3 / 4 / 6" },
      {
        title: "Workflow Orchestration",
        icon: <FaProjectDiagram />,
        area: "3 / 6 / 4 / 11",
      },
    ],

    cta: "Schedule an appointment with our Automation experts",
    lists: {
      heading:
        "Workflow Automations have a direct impact on five key Business Metrics",
      content: `<ul>
  <li><strong>Efficiency Gains</strong><br>Accelerate process throughput and slash manual tasks, driving significant operational efficiency (as noted by McKinsey)</li>
  <li><strong>Error Reduction</strong><br>Minimize human errors and enhance data accuracy for robust, reliable processes (supported by industry insights)</li>
  <li><strong>Scalability</strong><br>Seamlessly expand operations without proportional increases in resource demands, ensuring sustainable growth</li>
  <li><strong>Cost Savings</strong><br>Optimize resource allocation and reduce operational expenditures through streamlined workflows (as observed in Kerney reports)</li>
  <li><strong>Productivity Enhancement</strong><br>Free up valuable human capital to focus on strategic initiatives, boosting overall team productivity</li>
</ul>
`,
    },
    leftSIdeImages: [
      "https://images.pexels.com/photos/8438879/pexels-photo-8438879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    hero: {
      heading: "AI Consulting and Business Transformation",
      desc: ` Transform your business with Accelerate AI’s AI consulting and transformation services. We analyze your existing processes to <strong>uncover hidden opportunities for automation and intelligence</strong>, converting mundane tasks into smart, streamlined workflows. By eliminating manual errors and optimizing operations, we empower you to shift your focus from day-to-day tasks to strategic growth and innovation.`,
    },
    slug: "ai-consulting-and-business-transformation", // URL-friendly slug
    title: "AI Consulting and Business Transformation", // Title derived from slug
    brandLogos: [
      {
        names: [
          "Programming Languages & Frameworks",
          "Cloud AI & Machine Learning Services",
          "Data Engineering & Analytics",
          "MLOps & Deployment Tools",
          "Version Control & Collaboration",
          "RPA Tools",
        ],
      },
    ],
    about: {
      filterSlug: "ai-consulting",
      heading:
        "At Accelerate AI, our AI Consulting & Transformation services harness industry-leading methodologies and advanced analytics to assess your business processes, pinpoint areas ripe for AI integration, and craft bespoke strategies that drive strategic innovation and operational excellence. We transform raw data into actionable insights, enabling you to automate routine tasks and unlock new opportunities for growth.",
      image:
        "https://images.pexels.com/photos/3183188/pexels-photo-3183188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    process: {
      heading: "Our AI Consulting & Transformation Process",
      content: `<ul>
  <li><strong>Process Analysis</strong><br>Mapping out of existing business workflows and identifying key opportunities for AI and automation through comprehensive assessments</li>
  <li><strong>Strategic Planning</strong><br>Designing of customized AI roadmaps that align with industry best practices and your unique business objectives</li>
  <li><strong>Solution Development</strong><br>Development and deployment of tailored AI models and automation solutions using frameworks such as TensorFlow, PyTorch, and scikit-learn alongside custom scripting in Python or Node.js</li>
  <li><strong>Technology Integration</strong><br>Integration of state-of-the-art AI platforms (Microsoft Azure AI, Google Cloud AI, IBM Watson, AWS AI/ML) with your legacy systems and cloud infrastructures for seamless operations</li>
  <li><strong>Change Management</strong><br>Facilitation of smooth adoption through targeted training, robust change management practices, and continuous improvement strategies</li>
  <li><strong>Performance Monitoring</strong><br>Implementation of real-time dashboards and analytics using tools like Power BI, Tableau, or Looker to track impact and optimize AI models over time</li>
</ul>
`,
    },
    grids: [
      {
        title: "Invoice Processing",
        icon: <FaFileInvoiceDollar />,
        area: "1 / 1 / 2 / 4",
      },
      {
        title: "Data Entry Automation",
        icon: <FaKeyboard />,
        area: "1 / 4 / 2 / 6",
      },
      {
        title: "Report Generation & Dashboard Automations",
        icon: <FaChartBar />,
        area: "1 / 6 / 2 / 9",
      },
      { title: "CRM Automation", icon: <FaUsersCog />, area: "1 / 9 / 2 / 10" },
      {
        title: "Inventory Management",
        icon: <FaBoxes />,
        area: "1 / 10 / 2 / 11",
      },

      {
        title: "Customer Support Ticketing",
        icon: <FaTicketAlt />,
        area: "2 / 1 / 3 / 3",
      },
      {
        title: "Marketing Campaign Automation",
        icon: <FaBullhorn />,
        area: "2 / 3 / 3 / 9",
      },
      {
        title: "Financial Reconciliation",
        icon: <FaBalanceScale />,
        area: "2 / 9 / 3 / 10",
      },
      {
        title: "Procurement Management",
        icon: <FaClipboardCheck />,
        area: "2 / 10 / 3 / 11",
      },

      {
        title: "Compliance Monitoring",
        icon: <FaShieldAlt />,
        area: "3 / 1 / 4 / 3",
      },
      { title: "Task Automation", icon: <FaTasks />, area: "3 / 3 / 4 / 6" },
      {
        title: "Workflow Orchestration",
        icon: <FaProjectDiagram />,
        area: "3 / 6 / 4 / 11",
      },
    ],

    cta: "Schedule an appointment with our Automation experts",
    lists: {
      heading:
        "Workflow Automations have a direct impact on five key Business Metrics",
      content: `<ul>
  <li><strong>Efficiency Gains</strong><br>Accelerate process throughput and slash manual tasks, driving significant operational efficiency (as noted by McKinsey)</li>
  <li><strong>Error Reduction</strong><br>Minimize human errors and enhance data accuracy for robust, reliable processes (supported by industry insights)</li>
  <li><strong>Scalability</strong><br>Seamlessly expand operations without proportional increases in resource demands, ensuring sustainable growth</li>
  <li><strong>Cost Savings</strong><br>Optimize resource allocation and reduce operational expenditures through streamlined workflows (as observed in Kerney reports)</li>
  <li><strong>Productivity Enhancement</strong><br>Free up valuable human capital to focus on strategic initiatives, boosting overall team productivity</li>
</ul>
`,
    },
    leftSIdeImages: [
      "https://images.pexels.com/photos/8438879/pexels-photo-8438879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    hero: {
      heading: "Web Design & Development",
      desc: `Empower your business with <strong>visually captivating, high-performance</strong> websites that feel as intuitive as a human conversation – elevating customer engagement, streamlining online appointment bookings, enhancing digital service delivery, and driving conversions with smart, interactive design and seamless functionality.`,
    },
    slug: "web-design-and-development", // URL-friendly slug
    title: "Web Design & Development", // Title derived from slug
    brandLogos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVFipteR2tqCVnH---TvKLazlim_pfwt7CQ&s",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Webflow_logo_2023.svg",
      "https://framerusercontent.com/images/TvJ9grdPgk3sRz6T6XwkpBrFr4k.png?scale-down-to=512",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUxiY3CHfyGGgwhLRkBdKoEmb4lxIOgarRQ&s",
      "https://e7.pngegg.com/pngimages/306/37/png-clipart-node-js-logo-node-js-javascript-web-application-express-js-computer-software-others-miscellaneous-text-thumbnail.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTua8LIm2RXb4ZFLkvx-eIJqT27Xr5dpMhDQA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJe0JBz5AjVpgkcbDWM-FD9vj87nJaZ7vuA&s",
    ],
    about: {
      filterSlug: "web-design-development",
      heading: `At Accelerate-AI, our Web Design & Development services leverage modern frameworks and cutting-edge design principles to create high-performance, visually stunning digital experiences. We focus on delivering seamless user journeys and engaging interfaces across all touchpoints—empowering businesses to captivate audiences, drive conversions, and scale effortlessly.`,
      image:
        "https://images.pexels.com/photos/7550581/pexels-photo-7550581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    process: {
      heading: "Our Web Design & Development Process",
      content: `<ul>
  <li><strong>Deep-Dive Discovery</strong><br>Map user journeys and pinpoint key digital interactions to understand your audience and business goals</li>
  <li><strong>Tailored Design</strong><br>Create custom wireframes and UI/UX designs that align with your brand identity and captivate users</li>
  <li><strong>Cutting-Edge Integration</strong><br>Leverage advanced front-end technologies (HTML5, CSS3, JavaScript frameworks like React, Angular, Vue.js) and CMS platforms (WordPress, Shopify) to build robust websites</li>
  <li><strong>Performance Optimization</strong><br>Employ SEO best practices, progressive web apps (PWAs), and responsive design techniques to ensure fast, seamless user experiences</li>
  <li><strong>Backend & Connectivity</strong><br>Utilize cloud hosting (AWS, Google Cloud, Azure) and custom API integrations for scalable, secure operations</li>
  <li><strong>Iterative Testing & Refinement</strong><br>Continuously test and optimize to deliver a flawless, high-performing digital platform</li>
</ul>
`,
    },
    grids: [
      {
        title: "Engaging User Experience",
        icon: <FaUserCheck />,
        area: "1 / 1 / 2 / 4",
      },
      {
        title: "Seamless Appointment Booking",
        icon: <FaCalendarCheck />,
        area: "1 / 4 / 2 / 6",
      },
      {
        title: "Dynamic E-commerce Integration",
        icon: <FaShoppingCart />,
        area: "1 / 6 / 2 / 9",
      },
      {
        title: "Real-Time Order Tracking",
        icon: <FaShippingFast />,
        area: "1 / 9 / 2 / 10",
      },
      {
        title: "24/7 Customer Support",
        icon: <FaHeadset />,
        area: "1 / 10 / 2 / 11",
      },

      {
        title: "Interactive Feedback Collection",
        icon: <FaPoll />,
        area: "2 / 1 / 3 / 3",
      },
      {
        title: "Multi-Language Capabilities",
        icon: <FaLanguage />,
        area: "2 / 3 / 3 / 9",
      },
      {
        title: "SEO-Optimized Architecture",
        icon: <FaSearch />,
        area: "2 / 9 / 3 / 10",
      },
      {
        title: "Integrated Analytics & Data Insights",
        icon: <FaChartPie />,
        area: "2 / 10 / 3 / 11",
      },

      {
        title: "Secure & Scalable Infrastructure",
        icon: <FaServer />,
        area: "3 / 1 / 4 / 3",
      },
      {
        title: "Social Media Integration",
        icon: <FaShareAlt />,
        area: "3 / 3 / 4 / 6",
      },
      {
        title: "Custom Content Management",
        icon: <FaEdit />,
        area: "3 / 6 / 4 / 11",
      },
    ],

    cta: "Schedule an appointment with our Web Design experts",
    lists: {
      heading: "Web design has a direct impact on five key Business Metrics",
      content: `<ol>
  <li><strong>Scalability (Design System)</strong><br>Enables consistent brand experiences and effortless expansion as your business grows</li>
  <li><strong>SXO (UX/Sitemap)</strong><br>Aligns search optimization with intuitive user journeys, increasing visibility and engagement</li>
  <li><strong>Conversion (CRO)</strong><br>Encourages visitors to take action through streamlined pathways and persuasive design</li>
  <li><strong>Branding (UI/Art Direction)</strong><br>Establishes a memorable visual identity that resonates with users and builds trust</li>
  <li><strong>Responsiveness & Performance</strong><br>Ensures fast load times and a seamless experience across devices, reducing bounce rates and boosting satisfaction</li>
</ol>

`,
    },
    leftSIdeImages: [
      "https://images.pexels.com/photos/3584998/pexels-photo-3584998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
];

const DropDown = ({ headerDropDown, toggleMenu }) => {
  return (
    <div
      ref={headerDropDown}
      className="opacity-0 lg:pointer-events-none group-hover/dropDown:lg:opacity-[1] group-hover/dropDown:lg:pointer-events-auto transition-all duration-500 lg:duration-0 lg:transition-none max-h-0 lg:max-h-[unset] overflow-hidden lg:overflow-visible lg:absolute inset-0 size-full bg-transparent lg:bg-[#1C1C1C] lg:pt-[5.20833333333vw] flex flex-col"
    >
      <div className="bg-transparent flex lg:bg-[#1C1C1C] wrapper lg:mt-[unset] sm:mt-[30px] mt-[20px]">
        <div className="w-full flex lg:flex-row flex-col flex-wrap items-stretch lg:gap-[2.5vw] sm:gap-[24px] gap-[20px] border-t border-[#4B4B4B] lg:mx-[40px] lg:px-[unset] px-[2.79069767442vw] poppins lg:py-[2.5vw] sm:py-[30px] py-[20px]">
          <span className="text-[#A4A4A4] lg:mt-[0.3125vw] mtext16 hidden lg:block">
            Our services
          </span>
          <div className="flex flex-col lg:gap-y-[unset] sm:gap-y-[15px] gap-y-[10px] justify-start lg:text35 sm:mtext28 mtext22 lg:leading-[3.125vw] tracking-tight w-full lg:w-[41%]">
            {servicesData.slice(0, 3).map((value, index) => (
              <Link
                key={index}
                onClick={toggleMenu}
                href={`/service/${value.slug}`}
                className="block after:hidden lg:after:block afterLineHover"
              >
                {value.title}
              </Link>
            ))}
          </div>
          <span className="lg:w-[1px] lg:min-w-[1px] w-full min-w-full h-[1px] lg:h-[unset] bg-[#4B4B4B]"></span>
          <div className="flex flex-col lg:gap-y-[unset] sm:gap-y-[15px] gap-y-[10px] justify-start lg:text35 sm:mtext28 mtext22 lg:leading-[3.125vw] tracking-tight w-full lg:w-[41%]">
            {servicesData.length > 3 ? (
              servicesData.slice(3, 5).map((value, index) => {
                return (
                  <Link
                    key={index}
                    onClick={toggleMenu}
                    href={`/service/${value.slug}`}
                    className="block after:hidden lg:after:block afterLineHover"
                  >
                    {value.title || "Unnamed Service"} {/* Ensure a fallback */}
                  </Link>
                );
              })
            ) : (
              <p>Loading services...</p>
            )}
          </div>
          {/* <div className="grow-[1] flex flex-wrap sm:flex-nowrap justify-between items-stretch lg:gap-[1.04166666667vw] gap-[16px]">
            {[1, 2].map((c, i) => (
              <Link
                key={i}
                onClick={toggleMenu}
                href={"/service-singlepage"}
                className="w-full group afterLineHoverHandler flex justify-center items-center lg:h-[11.9791666667vw] h-[120px] relative border-[#f8f8f81a] border rounded-[4px] overflow-hidden"
              >
                <div className="absolute inset-0 size-full pointer-events-none">
                  <Image
                    fill
                    alt="bg"
                    src={"/images/header/card1.svg"}
                    className="object-cover"
                  />
                  <span className="absolute inset-0 size-full bg-[#10101066] opacity-[1] transition-all duration-300 group-hover:opacity-0"></span>
                </div>
                <div className="relative z-[2] text-[#A4A4A4] flex flex-col items-center">
                  <span className="font-medium lg:text24 mtext18 text-white">
                    Webflow Enterprise
                  </span>
                  <LinkBtn
                    tag={"div"}
                    smallVarient
                    text={"For big-scale and secure solutions"}
                  />
                </div>
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
