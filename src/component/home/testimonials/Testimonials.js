"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import the Navigation module
import { Navigation } from "swiper/modules";
const testimonials = [
  {
    profile: "/images/testimonials/profiles/1.jpeg",
    review: `
      <p>Accelerate-AI team is an incredibly sharp, well-versed technical team. They get business, not just tech. They help with brainstorming the best solutions, offer great advice-feedback. They were super quick to respond and get the job done. Highest recommendation.</p>
    `,
    name: "Daniel Zsolt Rényi, Founder",
    location: "Klear B2B, Hungary",
  },
  {
    profile: "/images/testimonials/profiles/2.jpeg",
    review: `
      <p>Working with team Accelerate-AI has been an absolute pleasure! Their mastery in chatbot development is truly remarkable, delivering solutions that are not only technically sound but also delightfully user-friendly. The team has an incredible knack for turning complex requirements into seamless, intelligent conversations that feel natural and engaging.</p>
      <p>Their ability to implement custom features and integrations sets them apart. Their attention to detail and focus on quality ensure every project is executed flawlessly. Beyond their technical expertise, their collaborative nature and problem-solving mindset make them a valued partner who’s always ready to go above and beyond.</p>
      <p>We’re grateful for the innovation and dedication Accelerate-AI team brought to the table. Their work has made a huge difference, and we look forward to working with them on future projects.</p>
    `,
    name: "Diat Khan, CEO ",
    location: "Remote Office, Australia",
  },
  {
    profile: "/images/testimonials/profiles/3.jpeg",
    review: `
      <p>Exceptional developers and communicators! It is rare to be working with a team as technically competent and equally responsive and reliable. We'll definitely work again with Accelerate-AI.</p>
    `,
    name: "Eva Christine Reder, Founder & COO",
    location: "GrowthMasters, USA",
  },
  {
    profile: "/images/testimonials/profiles/4.webp",
    review: `
      <p>Team Accelerate-AI isn't just great - they are remarkable! They are talented, knowledgeable and fair. They work quickly but thoroughly with outstanding communication and get things done!</p>
    `,
    name: "Shay Rapaport, Founder",
    location: "Lunamix, Israel",
  },
  {
    profile: "/images/testimonials/profiles/5.png",
    review: `
      <p>I had the pleasure of working with Accelerate-AI, and I recommend the team highly! Their team is exceptionally skilled in Zapier and QuickBooks, bringing deep expertise and innovative solutions to every project. Their professionalism and high work ethic are truly remarkable. They consistently deliver top-notch results, always meeting deadlines and exceeding expectations.</p>
      <p>Their ability to automate complex workflows and streamline processes has been a game-changer for our business. Beyond their technical skills, the team members are fantastic communicators and are true problem-solvers, making collaboration seamless and efficient.</p>
      <p>If you're looking for an AI and Automation agency not only for talented people but also highly dependable people, Accelerate-AI is the team you should hire!</p>
    `,
    name: "Ashok Balan, Consultant",
    location: "Medi Trust, India",
  },
  {
    profile: "/images/testimonials/profiles/5.png",
    review: `
      <p>I recently had a fantastic experience working with team Accelerate-AI on an AI automation project. They were communicative throughout the process and asked very good questions to make sure they really understood what I was looking for. They delivered on time and the final product was better than I had originally imagined in my head.</p>
      <p>I’d highly recommend Accelerate-AI and will definitely be reaching out to them again for future projects.</p>
    `,
    name: "Todd Leverette, Founding Partner",
    location: "Apis & Heritage Capital Partners, USA",
  },
];

export default function Testimonials() {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center items-center flex-col py1">
        <h2 data-aos="fade-up" className="text-black">
          Testimonials
        </h2>
        <Swiper
          data-aos="fade"
          modules={[Navigation]}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={"auto"}
          spaceBetween={"20"}
          className="lg:my-[2.5vw] my-[40px] swiper mySwiper !w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide lg:!w-1/2 !w-[85%]"
            >
              <div className="flex justify-center items-center flex-col select-none">
                <div className="flex border rounded text-left text-black border-black hideScroll bg-white justify-between items-start flex-col px-4 md:px-6">
                  <div
                    dangerouslySetInnerHTML={{ __html: testimonial.review }}
                    className="mt-10 text-base leading-normal  lg:h-[220px] sm:h-[280px] h-[550px]  overflow-y-auto"
                  ></div>
                  <div className="flex justify-end pb-6 space-y-11 items-end w-full flex-col h-28">
                    <div className="flex grow-0 w-6">
                      <img src="/images/testimonials/quote.svg" alt="quotes" />
                    </div>
                    <div className="w-full flex justify-start items-center space-x-2">
                      <div className="lg:size-[2.5vw] sm:size-[80px] size-[60px] rounded-full overflow-hidden">
                        <img
                          src={testimonial.profile}
                          alt="avatar"
                          className="object-contain size-full"
                        />
                      </div>
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-lg font-medium leading-none">
                          {testimonial.name}
                        </p>
                        <p className="text-sm leading-none">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div
          data-aos="fade"
          className="flex justify-center items-center space-x-6 w-full"
        >
          <button className="rounded-full p-1.5 flex justify-center items-center bg-black swiper-button-prev w-1.5 h-2.5">
            <img
              className="w-6 h-6 scale-x-[-1]"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-6_next.svg"
              alt="prev"
            />
          </button>
          <button className="rounded-full p-1.5 flex justify-center items-center bg-black swiper-button-next w-1.5 h-2.5">
            <img
              className="w-6 h-6"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-6_next.svg"
              alt="next"
            />
          </button>
        </div>
      </div>

      <style>
        {`
        .swiper-button-next::after,
        .swiper-button-prev::after {
            content: "";
        }

        .swiper-button-next,
        .swiper-button-prev {
            position: relative;
            right: 0;
            height: 30px;
            width: 30px;
        }
            .swiper-button-next, .swiper-button-prev {
  z-index: 10;  
}
  .swiper-button-lock{
  display:block
  }
        `}
      </style>
    </div>
  );
}
