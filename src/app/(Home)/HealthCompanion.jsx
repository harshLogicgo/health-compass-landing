"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import { Images } from "@/data/images";
import MailchimpForm from "@/components/MailChimpForm";

const HealthCompanion = ({ className, id }) => {
  const [isForm, setIsForm] = useState(false);

  const handleOpenForm = useCallback(() => setIsForm(true), []);
  const handleCloseForm = useCallback(() => setIsForm(false), []);
  return (
    <>
      <section
        id={id}
        className={`bg-white  md:pt-10 relative overflow-hidden ${className}`}
      >
        {/* Background patterns - positioning needs refinement */}
        <img
          src={Images.other.healthCompanionRight}
          alt="Pattern Right Top"
          className="hidden object-contain w-[200px] h-[300px] md:block absolute top-0 right-0 opacity-50 z-0"
        />

        <img
          src={Images.other.healthCompanionRight}
          alt="Pattern Left Bottom"
          className="hidden object-contain w-[200px] h-[300px] md:block absolute bottom-0 left-0 opacity-50 z-0 rotate-[180deg]"
        />

        <div className="main-container mx-auto text-center relative z-10">
          <div className="max-w-[850px] mx-auto">
            <h2
              data-aos="fade-up"
              className="text-center text-[32px] md:text-[44px] lg:text-[48px] font-semibold text-black leading-tight mb-4"
            >
              Your{" "}
              <span className="text-primary relative">
                health{" "}
                <img
                  src={Images.other.titlePattern}
                  width={175}
                  height={12}
                  alt="title pattern"
                  className="absolute left-0"
                />
              </span>{" "}
              made simple.
              <span className="relative inline-block text-dark-primary"></span>{" "}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-[13px] md:text-lg text-davy-gray text-center block md:px-10 mb-8 sm:mb-12 line-clamp-3"
            >
              Get easy-to-follow tips, smart supplement suggestions, and daily
              check-ins, powered by AI. A clear path to better health, right in
              your pocket.
            </p>
          </div>

          {/* Main Content Block with light green background */}
          <div className="flex max-w-[500px] md:max-w-full xl:max-w-[90%] gap-10 flex-col md:flex-row items-center bg-[#eaf4f4] rounded-3xl p-6 md:p-4 mx-auto relative z-10">
            {/* Image Section */}
            <div className="w-full">
              <img
                data-aos="zoom-in"
                src={Images.other.healthCompanionCenter} 
                alt="Dashboard Screenshot"
                width={600}
                height={400}
                objectFit="contain"
                className="rounded-md"
              />
            </div>

            {/* Text and Button Section */}
            <div className="w-full text-start md:text-left">
              <h3
                data-aos="fade-up"
                className=" font-medium mb-5 sm:mb-8 text-[#004D49] text-[26px] md:text-[34px] lg:text-[45px] leading-tight"
              >
                Your Best AI Health Companion
              </h3>
              {/* Optional: Add a small description here if needed, based on design */}
              {/* <p className="text-gray-700 mb-6">...</p> */}
              <button
                data-aos="fade-up"
                data-aos-delay="300"
                onClick={handleOpenForm}
                className="bg-dark-primary hover:bg-light-primary text-white px-10 py-3 rounded-full text-sm lg:text-base font-semibold transition-colors"
              >
                Try it Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <MailchimpForm isOpen={isForm} onHide={handleCloseForm} />
    </>
  );
};

export default HealthCompanion;
