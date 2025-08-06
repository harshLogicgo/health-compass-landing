"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState, useRef, useMemo } from "react";
import { Menu, X } from "lucide-react";
import { Images } from "@/data/images";
import { navItems } from "@/data/navItems";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants/route";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollTimeout = useRef(null);

  const { sectionIds, taglines } = useMemo(() => {
    if (isMobile) {
      return {
        sectionIds: [
          "banner",
          "health_companion_mobile",
          "supplement",
          "testimonials",
        ],
        taglines: [
          "Personal Health Assistant on Duty",
          "Personalized Wellness, Simplified",
          "Supplements Simplified For You",
          "Wellness, Insights, and Daily Support",
        ],
      };
    } else {
      return {
        sectionIds: [
          "banner",
          "supplement",
          "health_companion_desktop",
          "testimonials",
        ],
        taglines: [
          "Personal Health Assistant on Duty",
          "Supplements Simplified For You",
          "Personalized Wellness, Simplified",
          "Wellness, Insights, and Daily Support",
        ],
      };
    }
  }, [isMobile]);

  const handleCloseMenu = useCallback(() => setMobileMenuOpen(false), []);
  const handleOpenModal = useCallback(() => {
    setIsModal(true), handleCloseMenu();
  }, []);
  const handleCloseModal = useCallback(() => setIsModal(false), []);

  const isActive = (path) => pathname.includes(path);

  useEffect(() => {
    if(window.scrollY > 40){
      setIsScrolled(true)
    }
    const handleScroll = () => {
      const threshold = window.innerWidth < 768 ? 0 : 20;
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      scrollTimeout.current = setTimeout(() => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        const isDesktop = window.innerWidth >= 768; // Match your md breakpoint

        const sections = sectionIds.map((id) => {
          const el = document.getElementById(id);
          if (!el) return { id, top: Infinity, bottom: -Infinity };

          const rect = el.getBoundingClientRect();
          return {
            id,
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY,
          };
        });

        // Special handling for HealthCompanion - use only the relevant version
        const filteredSections = sections.filter((section) => {
          if (section.id === "health_companion_mobile") return !isDesktop;
          if (section.id === "health_companion_desktop") return isDesktop;
          return true;
        });

        let currentIndex = 0;
        for (let i = 0; i < filteredSections.length; i++) {
          if (
            scrollPosition >= filteredSections[i].top &&
            scrollPosition <= filteredSections[i].bottom
          ) {
            // Map back to original index for taglines
            currentIndex = sectionIds.indexOf(filteredSections[i].id);
            break;
          }
        }

        setActiveIndex(currentIndex);
      }, 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-primary mx-auto px-4">
        <div className="py-1 md:py-2 text-[10px] sm:text-xs text-white flex justify-center items-center font-semibold">
          <p className="text-center">
            <b>25,000+ Supplement Insights</b>
            <span>
              - Explore one of the world's largest AI-powered supplement
              databases — personalized for your needs.
            </span>
          </p>
        </div>
      </div>
      <header
        className={`w-full ${
          isScrolled ? "top-[0px]" : "top-[0px]"
        } sticky bg-transparent z-[50] transition-all`}
      >
        <nav
          className={`relative w-full z-[50] main-container transition-colors duration-300 rounded-b-xl ${
            isScrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
        >
          <div className="relative">
            <div className="py-3 md:py-4">
              <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center relative">
                  <img
                    src={Images.logo3}
                    alt="Health Compass Logo"
                    className="mr-2 w-[250px] md:w-[300px]"
                  />
                  <div className="absolute top-[50%] left-[64px] md:left-[78px] mt-1 md:mt-2">
                    <div className="overflow-hidden relative h-[20px] w-[280px]">
                      <div
                        className="transition-transform duration-500 ease-in-out"
                        style={{
                          transform: `translateY(-${activeIndex * 20}px)`,
                        }}
                      >
                        {taglines.map((tagline, i) => (
                          <div
                            key={i}
                            className="text-primary text-[10px] md:text-xs h-[20px] whitespace-nowrap font-semibold"
                          >
                            {tagline}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
