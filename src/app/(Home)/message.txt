"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  Star,
  ArrowLeft ,
  ArrowRight ,
  MoveLeft,
  MoveRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Images } from "@/data/images";

const testimonials = [
  {
    id: 1,
    name: "Thomas daniel",
    age: "45, Physician ",
    avatar:
      "https://avatars.mds.yandex.net/i?id=d9b2a0b864f9d65322265c07dd2a56df3870f975-4495103-images-thumbs&n=13",
    rating: 5,
    text: "With years of experience, he has earned a reputation for being reliable, compassionate, and deeply committed to patient care",
  },
  {
    id: 2,
    name: "Alena Alex",
    age: "55, User",
    avatar:
      "https://i.pinimg.com/originals/2e/82/d2/2e82d272e5f49490efd2d733e4322e5a.jpg",
    rating: 5,
    text: "Alena Alex is a 55-year-old user known for her thoughtful insights and positive attitude. She brings a wealth of life experience and a practical perspective to any setting.",
  },
  {
    id: 3,
    age: " 65, Caregiver",
    name: "Thomas Edison",
    avatar:
      "https://www.fortunebuilders.com/wp-content/uploads/2015/02/surviving-the-real-estate-business.jpg",
    rating: 5,
    text: "Thomas Edison is a 65-year-old caregiver with a warm heart and a strong sense of responsibility. His compassionate nature and years of dedication make him a trusted presence in caregiving.",
  },
  {
    id: 1,
    name: "Thomas daniel",
    age: "45, Physician ",
    avatar:
      "https://avatars.mds.yandex.net/i?id=d9b2a0b864f9d65322265c07dd2a56df3870f975-4495103-images-thumbs&n=13",
    rating: 5,
    text: "With years of experience, he has earned a reputation for being reliable, compassionate, and deeply committed to patient care",
  },
  {
    id: 2,
    name: "Alena Alex",
    age: "55, User",
    avatar:
      "https://i.pinimg.com/originals/2e/82/d2/2e82d272e5f49490efd2d733e4322e5a.jpg",
    rating: 5,
    text: "Alena Alex is a 55-year-old user known for her thoughtful insights and positive attitude. She brings a wealth of life experience and a practical perspective to any setting.",
  },
  {
    id: 3,
    age: " 65, Caregiver",
    name: "Thomas Edison",
    avatar:
      "https://www.fortunebuilders.com/wp-content/uploads/2015/02/surviving-the-real-estate-business.jpg",
    rating: 5,
    text: "Thomas Edison is a 65-year-old caregiver with a warm heart and a strong sense of responsibility. His compassionate nature and years of dedication make him a trusted presence in caregiving.",
  },
  {
    id: 4,
    age: " 65, Caregiver",
    name: "Thomas Edison",
    avatar:
      "https://www.fortunebuilders.com/wp-content/uploads/2015/02/surviving-the-real-estate-business.jpg",
    rating: 5,
    text: "Thomas Edison is a 65-year-old caregiver with a warm heart and a strong sense of responsibility. His compassionate nature and years of dedication make him a trusted presence in caregiving.",
  },
  {
    id: 5,
    age: " 65, Caregiver",
    name: "Thomas Edison",
    avatar:
      "https://www.fortunebuilders.com/wp-content/uploads/2015/02/surviving-the-real-estate-business.jpg",
    rating: 5,
    text: "Thomas Edison is a 65-year-old caregiver with a warm heart and a strong sense of responsibility. His compassionate nature and years of dedication make him a trusted presence in caregiving.",
  },
];

export default function TestimonialsSection() {
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
    <section className="relative overflow-hidden section-container px-6 bg-lightBeige py-16">
      <div className="mx-auto max-w-7xl">
        {/* Title Row */}
        <div className="flex items-center justify-between mb-2 px-2 md:px-0 relative mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 relative z-10">
              Real <span className="text-dark-primary">Stories</span>, Real
              <span className="relative inline-block ml-1 text-dark-primary">
                Results
                <Image
                  src={Images.other.titlePattern}
                  width={175}
                  height={12}
                  alt="title pattern"
                  className="absolute left-0  w-full "
                />
              </span>
            </h2>
            <p className="text-[#535252] text-base max-w-xl mt-1">
              Trusted by thousands of users—from active seniors to busy
              caregivers—HealthCompass makes wellness tracking simple, smart,
              and personal.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 items-center">
            <button
              disabled={isBeginning}
              ref={prevRef}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-[#EBE7DF] shadow disabled:opacity-50 transition-colors hover:bg-dark-primary hover:text-white"
            >
              <ArrowLeft  size={18} />
            </button>
            <button
              disabled={isEnd}
              ref={nextRef}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-[#EBE7DF] shadow disabled:opacity-50 transition-colors hover:bg-dark-primary hover:text-white"
            >
              <ArrowRight  size={18} />
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="!h-auto flex-shrink-0">
                <div className="testimonial-card h-full flex flex-col bg-white shadow rounded-lg p-6 border border-gray-100 min-h-[160px]">
                  <p className="text-[15px] text-dark-teal-blue font-semibold mb-4 font-alliance">
                    “{testimonial.text}”
                  </p>
                  <span className="text-dark-teal-blue text-sm mt-auto font-semibold">
                    – {testimonial.name.split(" ")[0]},{" "}
                    {testimonial.age.replace(",", "")}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Swiper Indicator */}
          <div className="flex justify-start mt-4 px-2 md:px-0">
            <div className="relative w-full h-1 bg-gray-200 rounded-full">
              {/* Active indicator (simulate first active for now) */}
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
