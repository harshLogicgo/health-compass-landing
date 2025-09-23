import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Images } from "@/data/images";
import { footerData, socialData } from "@/data/footerData";

export default function Footer() {
  return (
    <footer className="bg-dark-teal-blue text-white pt-6 pb-4 rounded-t-lg">
      <div className="main-container mx-auto">
        <div className=" ">
          {/* Left Column: Logo, Title, Contact */}
          <div className="">
            <a href="#">
              <img
                src={Images.footerLogo}
                alt="Health Compass Logo"
                width={321}
                height={74}
                className="mb-2 w-full max-w-[250px] md:max-w-[321px]"
              />
            </a>
          </div>

          {/* Right Column: Terms, Privacy, Social */}
          <div className="flex gap-3 flex-col sm:flex-row items-start sm:justify-between mt-8 sm:mt-14">
            <a
              href="mailto:contact@gohealthcompass.com"
              className="text-sm text-alabaster font-normal md:ms-3"
            >
              <b>Contact Us:</b> contact@gohealthcompass.com
            </a>
            <div className="flex flex-row gap-4 mb-1 justify-end">
              <Link
                // target="_blank"
                href="/term-of-use"
                className="text-sm text-alabaster font-normal"
              >
                <b>Terms of Use</b>
              </Link>
              <Link
                // target="_blank"
                href="/privacy-policy"
                className="text-sm text-alabaster font-normal"
              >
                <b>Privacy Policy</b>
              </Link>
            </div>
          </div>
        </div>
        {/* Divider line */}
        <div className="border-t border-white/30 my-4" />

        {/* Bottom sical media icons */}
        <div className="flex items-center mt-4 gap-4 justify-between">
          <span className="text-sm">© {new Date().getFullYear()} Health Compass, LLC All rights reserved.
          </span>
          <div className="flex flex-row gap-3  justify-end items-center">
            {socialData.map((item, index) => {
              const Icon = item.icon;
              const path = item.path;
              return (
                <a
                  key={index}
                  href={path}
                  target="_blank"
                  className="hover:text-teal-400 transition text-gray-200"
                >
                  <Icon size={22} />
                </a>
              );
            })}
            <a
              href='https://tiktok.com/@gohealthcompass'
              target="_blank"
              className="hover:text-teal-400 transition text-gray-200"
            >
              <i className="ri-tiktok-line text-xl"></i>
            </a>
            <a
              href='https://www.youtube.com/@gohealthcompass'
              target="_blank"
              className="hover:text-teal-400 transition text-gray-200"
            >
              <Youtube size={22} />
            </a>
            <a
              href=' https://x.com/GoHealthCompass '
              target="_blank"
              className="hover:text-teal-400 transition text-gray-200"
            >
              <i className="ri-twitter-x-line text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
