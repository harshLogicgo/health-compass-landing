"use client";

import { Images } from "@/data/images";
import React, { useCallback, useRef, useState } from "react";
import { Play } from "lucide-react";
import MailchimpForm from "@/components/MailChimpForm";
import Image from "next/image";

const Banner = ({ id }) => {
  const [isForm, setIsForm] = useState(false);
  const [email, setEmail] = useState("");
  const [isVideo, setIsVideo] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [loading, setLoading] = useState(false);
  const videoRef = useRef(null);

  const handleOpen = useCallback(() => {
    setLoading(true);
    setShowVideo(true);
    setIsVideo(false);
  }, []);

  const handleVideoReady = useCallback(() => {
    setVideoReady(true);
    setLoading(false);
    // For mobile devices, we'll let the user tap to play
    // if (!isMobile()) {
    //   setTimeout(() => {
    //     videoRef.current?.play().catch(error => {
    //       console.error("Video play failed:", error);
    //       setLoading(false);
    //     });
    //   }, 100);
    // }
  }, []);

  const handleVideoEnd = useCallback(() => {
    setIsVideo(true);
    setVideoReady(false);
    setShowVideo(false);
  }, []);

  const handleOpenForm = useCallback(() => {
    setIsForm(true);
  }, []);

  const handleCloseForm = useCallback(() => setIsForm(false), []);

  // Helper function to detect mobile devices
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  const resetForm = useCallback(() => setEmail(""), []);

  return (
    <>
      <section id={id} className="bg-spring-wood">
        <div className="main-container relative pb-[4%] pt-[2%] md:pt-[3%]">
          <div className="grid items-center md:grid-cols-[45%_55%] xl:grid-cols-[40%_60%]">
            <div>
              <h1
                data-aos="fade-up"
                className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold text-black leading-tight mb-4"
              >
                Tired of{" "}
                <span className="text-primary relative">
                  feeling{" "}
                  <img
                    src={Images.other.titlePattern}
                    
                    alt="title pattern"
                    className="absolute left-0 mt-[-4px]"
                  />
                </span>{" "}
                stuck with your health issues?
              </h1>
              <span
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sm block sm:text-md md:text-lg text-davy-gray"
              >
                Join our early access to discover a smarter way to feel better.
              </span>

              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="flex mt-6 mb-4 sm:mb-10 md:mb-0 sm:mt-10 md:mt-12 bg-white shadow-md rounded-md overflow-hidden max-w-[500px]"
              >
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 border !border-none focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-500 placeholder:font-semibold text-sm md:text-md"
                />
                <button
                  onClick={handleOpenForm}
                  type="submit"
                  className="bg-dark-primary hover:bg-light-primary px-7 text-white rounded-md hover:bg-primary-dark transition-colors text-nowrap font-bold text-sm md:text-[15px]"
                >
                  Try it Now
                </button>
              </div>
            </div>

            {/* Video / Image section */}
            <div className="relative md:ps-5">
              <span className="relative block mx-auto banner-content rounded-xl overflow-hidden">
                {isVideo && !showVideo ? (
                  <span onClick={handleOpen} className="cursor-pointer">
                    <img
                      data-aos="zoom-out"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      src={Images.banner}
                      className="mx-auto relative z-[1] w-full h-full"
                      alt="Banner"
                    />
                    <button className="flex items-center gap-2 sm:gap-3 absolute top-0 right-0 z-[1] text-white font-semibold bg-black/10 sm:bg-black/12 backdrop-blur-[64px] px-4 sm:px-4 py-3 sm:py-4 rounded-xl m-4 play-animation">
                      {loading ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Play size={24} />
                          <span className="text-start hidden">
                            <span className="block text-sm sm:text-base">
                              Watch Demo
                            </span>
                            <span className="text-xs sm:text-sm">2 min</span>
                          </span>
                        </>
                      )}
                    </button>
                  </span>
                ) : (
                  <>
                    {!videoReady && (
                      <img
                        style={{ objectFit: "cover", objectPosition: "top" }}
                        src={Images.banner}
                        className="mx-auto z-[1] w-full h-full absolute top-0 left-0"
                        alt="Fallback Banner"
                      />
                    )}
                    <video
                      ref={videoRef}
                      onCanPlay={handleVideoReady}
                      onEnded={handleVideoEnd}
                      autoPlay={true} // Only autoplay on non-mobile
                      playsInline
                      muted={isMobile()}
                      controls // Always show controls for mobile
                      controlsList="nodownload"
                      className={`h-full w-full object-cover transition-opacity duration-300 object-center ${
                        videoReady ? "opacity-100" : "opacity-0"
                      }`}
                      src="/video.mp4"
                    />
                    {loading && (
                      <div className="absolute inset-0 flex items-center justify-center z-[2]">
                        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                  </>
                )}
              </span>

              <img
                src={Images.pattern}
                className="absolute hidden sm:block top-[-70px] z-[0] right-0"
                alt=""
              />
            </div>
            <img
              src={Images.pattern}
              className="absolute hidden xl:block xl:bottom-[0%] left-[50%] translate-x-[-50%] z-[0]"
              alt=""
            />
          </div>
        </div>
      </section>

      <MailchimpForm
        email={email}
        isOpen={isForm}
        onHide={handleCloseForm}
        resetForm={resetForm}
      />
    </>
  );
};

export default Banner;
