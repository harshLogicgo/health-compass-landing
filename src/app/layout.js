import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./app.css";
import Script from "next/script";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
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

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
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
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=698547848154391&ev=PageView&noscript=1"
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

        {/* 📌 Meta Pixel Script */}
        {/* <Script id="facebook-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s) {
            if(f.fbq)return;
            n=f.fbq=function(){n.callMethod ?
              n.callMethod.apply(n,arguments) : n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
          }(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '698547848154391');
          fbq('track', 'PageView');
        `}
        </Script> */}

        {/* 📌 noscript fallback for non-JS users */}
        {/* <noscript
          dangerouslySetInnerHTML={{
            __html: `
      <img
        height="1"
        width="1"
        style="display:none"
        src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
      />
    `,
          }}
        /> */}
      </body>
    </html>
  );
}
