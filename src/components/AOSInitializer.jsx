"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // whether animation should happen only once
      offset: 80, // Trigger offset (px) from the original trigger point
      anchorPlacement: "top-bottom",
    });
  }, []);

  return null; // no UI rendered
};

export default AOSInitializer;
