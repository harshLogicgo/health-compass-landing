"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Star, ArrowLeft, ArrowRight, MoveLeft, MoveRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Images } from "@/data/images";

const testimonials = [
  {
    text: "We’ll let our users speak for us — real stories coming soon.",
  },
  {
    text: "Health Compass is new, but already changing lives. Verified testimonials are on their way.",
  },
  {
    text: "ou’ll hear from real people soon. Until then, explore and discover the vision.",
  },
];

export default function TestimonialsSection({ id }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [progressWidth, setProgressWidth] = useState("0%");
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(1); // avoid division by zero

  useEffect(() => {
    if (
      swiperInstance &&
      swiperInstance.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const getProgressWidth = () => {
    if (totalSlides <= 1) return "0%";
    const progress = ((activeIndex + 1) / totalSlides) * 100;
    return `${progress}%`;
  };

  return (
    <section
      id={id}
      className="relative overflow-hidden section-container bg-spring-wood section-p-y"
    >
      <div className="mx-auto main-container">
        {/* Title Row */}
        <div className="flex items-center justify-between mb-2 relative mx-auto">
          <div>
            <h2
              data-aos="fade-up"
              className="text-[32px] md:text-[44px] lg:text-[48px] font-medium mb-2 relative z-10"
            >
              Real <span className="text-dark-primary">Stories</span>, Real
              <span className="relative inline-block ml-1 text-dark-primary">
                Results
                <img
                  src={Images.other.titlePattern}
                  width={175}
                  height={12}
                  alt="title pattern"
                  className="absolute left-0 mt-[-4px]"
                />
              </span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-[#535252] text-[13px] sm:text-base max-w-xl mt-1"
            >
              Trusted by thousands of users—from active seniors to busy
              caregivers—HealthCompass makes wellness tracking simple, smart,
              and personal.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="hidden sm:flex gap-3 items-center"
          >
            <button
              disabled={isBeginning}
              ref={prevRef}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-[#EBE7DF] shadow disabled:opacity-50 transition-colors hover:bg-dark-primary hover:text-white"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              disabled={isEnd}
              ref={nextRef}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-[#EBE7DF] shadow disabled:opacity-50 transition-colors hover:bg-dark-primary hover:text-white"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <div className="relative testimonials-slider h-full mt-8">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={false}
            navigation={false} // <--- IMPORTANT
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
              setActiveIndex(swiper.activeIndex);
              setTotalSlides(
                swiper.slides.length - swiper.params.slidesPerView + 1
              );
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              900: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
              setActiveIndex(swiper.activeIndex);
            }}
            className="pb-8 !overflow-visible select-none"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <SwiperSlide key={index} className="!h-auto flex-shrink-0">
                <div className="testimonial-card h-full flex flex-col bg-white shadow rounded-lg p-6 border border-gray-100">
                  <p className="text-[15px] text-dark-teal-blue font-semibold font-alliance">
                    “{testimonial.text}”
                  </p>
                  {/* <span className="text-dark-teal-blue text-sm mt-auto font-semibold">
                    – {testimonial.name.split(" ")[0]},{" "}
                    {testimonial.age.replace(",", "")}
                  </span> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-start mt-4 px-2 md:px-0">
            <div className="relative w-full h-1 bg-gray-200 rounded-full">
              <div
                className="absolute left-0 top-0 h-1 bg-dark-primary rounded-full transition-all duration-300"
                style={{ width: getProgressWidth() }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
