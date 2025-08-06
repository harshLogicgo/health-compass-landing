"use client";
import React, { useCallback, useEffect, useState } from "react";

const VideoPlayer = ({ isOpen, onHide }) => {
  const handleClose = useCallback(() => onHide(false), [onHide]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={handleClose}
        className={`backdrop videoPlayer flex items-center justify-center ${
          isOpen ? "" : "hidden"
        }`}
      >
        {isOpen && (
          // <iframe
          //   className="video"
          //   src="https://www.youtube.com/embed/4pODVLlQ2-E?si=HG_u20d6VX1jIBqq"
          //   title="YouTube video player"
          //   frameBorder="0"
          //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          //   referrerPolicy="strict-origin-when-cross-origin"
          //   allowFullScreen
          // ></iframe>
          <video
          autoPlay
            controls
            controlsList="nodownload"
            className="video rounded-xl overflow-hidden px-4"
            src="/video.mp4"
            onClick={(e) => e.stopPropagation()}
          ></video>
        )}
      </div>
    </>
  );
};

export default VideoPlayer;
