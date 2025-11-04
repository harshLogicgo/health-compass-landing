"use client";

import { Images } from "@/data/images";
import React, { useCallback, useRef, useState } from "react";
import { X, Play } from "lucide-react";
import MailchimpForm from "@/components/MailChimpForm";
import Image from "next/image";

const Banner = ({ id }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const [email, setEmail] = useState("");
  // ... (Video state and handlers can be removed if not used)
  const [isVideo, setIsVideo] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [loading, setLoading] = useState(false);
  const videoRef = useRef(null);

  const openVideoModal = useCallback(() => setIsVideoModalOpen(true), []);
  const closeVideoModal = useCallback(() => setIsVideoModalOpen(false), []);

  const VideoModal = () => {
    if (!isVideoModalOpen) return null;

    return (
      // Modal Backdrop (Fixed, full screen, dark overlay)
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
        onClick={closeVideoModal} // Close when clicking outside the video
      >
        {/* Modal Content (The Video Container) */}
        <div
          className="relative w-11/12 max-w-6xl aspect-video bg-gray-900 rounded-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          {/* Close Button */}
          <button
            onClick={closeVideoModal}
            className="absolute top-4 right-4 z-50 p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 transition"
            aria-label="Close video player"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Video Player */}
          <video
            src="/video.mp4" // Path to your video file
            controls
            autoPlay
            playsInline // Recommended for mobile
            className="w-full h-full rounded-xl"
            poster="/assets/video-poster.jpg" // Optional: image to display before video loads
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  };

  const handleOpen = useCallback(() => {
    setLoading(true);
    setShowVideo(true);
    setIsVideo(false);
  }, []);

  const handleVideoReady = useCallback(() => {
    setVideoReady(true);
    setLoading(false);
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
  const resetForm = useCallback(() => setEmail(""), []);

  return (
    <>
      <section
        id="hero"
        className="relative flex flex-col justify-center items-center text-center overflow-hidden py-10 md:py-20 px-6"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F7FB 100%)',
        }}
      >
        {/* <div id="logo-container" className="animate-fade-in">
          <img
            src="./hero-image.png"
            alt="Go Health Compass Logo"
            style={{
              width: '100%',
              height: 'auto',
              filter: 'drop-shadow(0 0 12px rgba(0,0,0,0.08))',
              marginBottom: '24px',
            }}
            priority
          />
        </div> */}
        <div className="max-w-[1200px]">
          <h1 className="font-inter text-3xl md:text-[48px] lg:text-[52px] font-bold text-gray-800 !leading-[1.2] m-0">
            Experience the world’s first truth-anchored AI platform for total health clarity.
          </h1>
          <p className="mt-3 text-gray-500 text-sm md:text-base">GoHealth Compass™ brings ethical intelligence, real-time insight, and personalized wellness guidance together in one seamless interface.</p>
        </div>

        <div className="p-12 md:p-18 lg:p-24 w-100 d-block container my-8 md:my-10 rounded-3xl bg-[linear-gradient(165deg,#071628_55%,#6884A0_100%)] shadow-xl hover:shadow-[0_0_50px_rgba(104,132,160,0.8)] transition-all duration-500 ease-in-out">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold">GoHealth Compass™</h2>
          <p className="text-gray-300 my-3 max-w-[500px] mx-auto font-medium text-sm lg:text-base">The most advanced and ethical health platform ever built — guiding you toward clarity and confidence in every decision.</p>
          <span className="block text-gray-200 font-medium text-sm lg:text-base">See why people are calling it <span className="text-primary">“the health platform we’ve always needed.”</span></span>
          <span className="block mt-1 text-gray-200 font-medium text-sm lg:text-base">Discover what’s real for your body — and experience insight like never before.</span>
          <span className="block mt-1 text-gray-200 font-medium text-sm lg:text-base">Truth and clarity in health, guided by ethical AI.</span>
          <span className="font-inter mt-1 text-lg font-bold text-primary tracking-tighter m-0 block mt-3">
            Built on <span className="">OPXEL Core™</span> — the Cornerstone!
          </span>
        </div>




        <p className="max-w-xl text-sm text-[#3C3C3C] mt-1 leading-relaxed font-medium">
          “GoHealth Compass™ — the most advanced and ethical health platform ever built — guiding you toward truth and clarity in every decision.”
        </p>

        <div className="mt-5 flex gap-[18px]">
          <button
            onClick={openVideoModal}
            href="#demo"
            className="px-8 py-3 bg-[#0061FF] text-white text-sm md:text-base rounded-lg font-semibold no-underline transition duration-200 hover:bg-blue-700"
          >
            Watch the Demo
          </button>
          <button
            onClick={handleOpenForm}
            className="px-8 py-3 bg-white text-[#0061FF] border-2 text-sm md:text-base border-[#0061FF] rounded-lg font-semibold no-underline transition duration-200 hover:bg-blue-50"
          >
            Sign Up Now
          </button>
        </div>
      </section>

      <VideoModal />

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