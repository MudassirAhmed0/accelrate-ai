import React from "react";

const DynamicContent = () => {
  const content = `
        <ul role="list">
          <li><strong>Industry: </strong>CSE Support</li>
          <li><strong>Country: </strong>France</li>
          <li><strong>Company Type: </strong>SaaS Startup</li>
          <li><strong>Tools Used: </strong>Figma, Webflow, custom Javascript code</li>
        </ul>
        <h2>Who is Leeto?</h2>
        <p>
          <a href="https://www.leeto.co/" target="_blank">
            <strong>Leeto</strong>
          </a>
          <strong> supports elected representatives in managing the CSE by creating an all-in-one CSE solution</strong>: an ecosystem of simple, innovative, and human-centric services and modules that meet all the needs of CSEs. Leeto has assisted over 600 clients, including <strong>Amazon</strong>, <strong>LinkedIn</strong>, and <strong>Uber</strong>.
        </p>
        <h2>Project Challenges with Digidop</h2>
        <p>In the absence of a strong market reference, <strong>Leeto aims to establish itself as the leader in CSE support</strong>. To achieve this, Leeto faced several significant challenges before beginning its collaboration with Digidop:</p>
        <ul role="list">
          <li><strong>Repositioning as a Human-Centric Company:</strong> Leeto sought to shift away from the image of a tech startup (SaaS) to emphasize its values and human aspect more strongly.</li>
          <li><strong>Enhancing Online Visibility:</strong> Beyond the repositioning, a key challenge was to increase Leeto's visibility on search engines to facilitate its development and generate more leads.</li>
          <li><strong>Fostering Team Autonomy:</strong> The ability to update the website internally was also essential for Leeto to adapt to market changes and continuously enhance its visibility, even post-launch.</li>
        </ul>
        <h2>Strategy and Solutions</h2>
        <p>To address these challenges, we implemented a multi-step strategy:</p>
        <ul role="list">
          <li><strong>Human-Centric Design:</strong> Based on a completely new branding created by the design agency 
            <a href="https://www.callbruno.com/fr/" target="_blank">Call Bruno</a>, we designed the new website in close collaboration with Leeto to ensure that every aspect of the site reflects their new brand image and objectives.
          </li>
          <li><strong>Scalable CMS:</strong> To empower teams to manage the website autonomously, we developed a scalable CMS on 
            <a href="https://webflow.grsm.io/digi" target="_blank">Webflow</a> that allows Leeto to easily evolve the website and its content without risk.
          </li>
          <li><strong>Component Library:</strong> For more advanced evolution needs, we also developed a library of reusable components that Leeto's teams can use to create new pages independently.</li>
          <li><strong>SEO Strategy:</strong> We designed and integrated all of this into an evolving SEO strategy to strengthen Leeto’s online presence, enabling it to grow and generate more leads.</li>
        </ul>
        <h2>Results</h2>
        <ul role="list">
          <li><strong>Strengthened Brand Image:</strong> The new brand identity, more focused on human values and simplicity, opens Leeto to a new audience while affirming its position as a market leader in CSE support.</li>
          <li><strong>Enhanced Autonomy:</strong> With the scalable CMS, the components library, and team training, Leeto can create new pages and evolve the website independently to keep pace with market developments and strengthen its online presence.</li>
          <li><strong>Increased Visibility:</strong> The evolving SEO strategy aims to establish Leeto as a leader in its market through continuous growth of its online presence and qualified traffic to the site.</li>
        </ul>
        <h2>Want to know more?</h2>
        <p>Discover 
          <a href="https://www.digidop.fr/services">the offerings from our Webflow agency →</a>
        </p>
`;
  return (
    <section data-aos="fade" className="bg-white py1 poppins">
      <div className="myContainer lg:w-[55%]">
        <div className="border-b border-[#c5c5c5] lg:pb-[1.25vw] pb-[20px] flex flex-wrap lg:gap-x-[2.5vw] gap-[30px] lg:text20 mtext16 text-black capitalize tracking-tight">
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
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="text-black defaultList lg:text20 mtext16 case-details_content flex flex-col lg:gap-y-[1.25vw] gap-y-[20px] lg:mt-[2.5vw] mt-[35px]"
        ></div>
      </div>
    </section>
  );
};

export default DynamicContent;
