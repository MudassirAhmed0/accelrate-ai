import React from "react";

const DynamicContent = ({ pageData }) => {
  const content = `
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
    <p>Discover <a href="/" target="_blank" rel="noopener noreferrer">the offerings from our AI Voice Agent Services</a></p>

  </div>
`;

  return (
    <section data-aos="fade" className="bg-white py1 poppins">
      <div className="myContainer lg:w-[55%]">
        {/* <div className="border-b border-[#c5c5c5] lg:pb-[1.25vw] pb-[20px] flex flex-wrap lg:gap-x-[2.5vw] gap-[30px] lg:text20 mtext16 text-black capitalize tracking-tight">
          <div className="flex flex-col">
            <span className="font-medium">Industry</span>
            <span className="opacity-[0.7] lg:mt-[0.52083333333vw] mt-[6px]">
              Technology
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium">Year</span>
            <span className="opacity-[0.7] lg:mt-[0.52083333333vw] mt-[6px]">
              2024
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium">Services</span>
            <span className="opacity-[0.7] lg:mt-[0.52083333333vw] mt-[6px]">
              Design Development Automation
            </span>
          </div>
        </div> */}
        {pageData?.content && (
          <div
            dangerouslySetInnerHTML={{ __html: pageData?.content }}
            className="text-black defaultList lg:text20 mtext16 case_details_content flex flex-col lg:gap-y-[1.25vw] gap-y-[20px]"
          ></div>
        )}
      </div>
    </section>
  );
};

export default DynamicContent;
