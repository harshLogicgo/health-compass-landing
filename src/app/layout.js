import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./app.css";
import Script from "next/script"; // Imported Script
import { Images } from "@/data/images";
import { createMetadata } from "@/helpers/commonHelpers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AOSInitializer from "@/components/AOSInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const generateMetadata = async () => {
  return createMetadata({
    img: Images.logo2,
    title: "Health Compass: Your Personal Health Companion",
    description:
      "Easily track supplements, get personalized health tips, and connect with doctors. Designed for seniors to manage wellness with AI insights and daily planning.",
  });
};

const GA_MEASUREMENT_ID = "G-YHEZJ540ZY";
const PINTEREST_TAG_ID = "2613682240957"; // Defined Pinterest Tag ID

export default function RootLayout({ children }) {
  // Define script content as strings for cleaner handling
  const metaPixelScript = `
    !function(f,b,e,v,n,t,s){
      if(f.fbq)return;n=f.fbq=function(){
        n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
      };
      if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];
      t=b.createElement(e);t.async=!0;
      t.src=v;
      s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)
    }(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '698547848154391');
    fbq('track', 'PageView');
  `;

  const pinterestBaseScript = `
    !function(e){if(!window.pintrk){window.pintrk=function(){
    window.pintrk.queue.push(Array.prototype.slice.call(arguments))};
    var n=window.pintrk;n.queue=[],n.version="3.0";
    var t=document.createElement("script");t.async=!0,t.src=e;
    var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)}}
    ("https://s.pinimg.com/ct/core.js");
    pintrk('load','${PINTEREST_TAG_ID}');
    pintrk('page');
  `;

  return (
    <html lang="en">
      <head>
        {/*
          NOTE: I'm leaving your GA script tags here as they are already set up 
          to load in the <head> using standard <script> tags.
          For best practice in Next.js, consider moving them to <Script strategy="afterInteractive"> 
          in the <body> like the others below.
        */}
        {/* Google Analytics 4 - Keeping your original implementation */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        ></script>
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* ❌ REMOVED: Old Meta Pixel script and noscript from <head> 
           (They are now handled with next/script and noscript fallback below) */}

        {/* ➡️ Pinterest Tag NOSCRIPT (Best to keep the noscript fallback in <head>) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt="Pinterest NoScript"
            src={`https://ct.pinterest.com/v3/?event=init&tid=${PINTEREST_TAG_ID}&noscript=1`}
          />
        </noscript>

        <link
          href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInitializer />
        <Header />
        {children}
        <Footer />

        {/* --- GLOBAL TRACKING SCRIPTS --- */}

        {/* 1. Meta Pixel SCRIPT - Using next/script with beforeInteractive for high priority */}
        <Script
          id="meta-pixel-base"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: metaPixelScript }}
        />

        {/* 2. Pinterest Tag SCRIPT - Using next/script with beforeInteractive */}
        <Script
          id="pinterest-tag-base"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: pinterestBaseScript }}
        />

        {/* 3. Meta Pixel NOSCRIPT Fallback (Can be placed anywhere in the <body>) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=698547848154391&ev=PageView&noscript=1"
            alt="Meta Pixel NoScript Fallback"
          />
        </noscript>

        <Script
          id="pinterest-tag"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      !function(e){if(!window.pintrk){window.pintrk = function () {
      window.pintrk.queue.push(Array.prototype.slice.call(arguments))};
      var n=window.pintrk;n.queue=[],n.version="3.0";
      var t=document.createElement("script");
      t.async=!0;t.src=e;
      var r=document.getElementsByTagName("script")[0];
      r.parentNode.insertBefore(t,r)}}
      ("https://s.pinimg.com/ct/core.js");

      pintrk('load', '2613682240957');
      pintrk('page');
    `,
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://ct.pinterest.com/v3/?event=init&tid=2613682240957&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
