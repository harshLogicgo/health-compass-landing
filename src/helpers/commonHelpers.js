import { Images } from "@/data/images";

export const createMetadata = ({
  title = "Health Compass",
  description = "Health Compass user-friendly web app.",
  img = Images.main,
  siteName = "Health Compass",
  type = "website",
  url = "https://health-compass-landing-page.vercel.app/", // ✅ Updated URL
  ...other
} = {}) => {
  return {
    title: `Health Compass - ${title}`,
    description,
    other,
    metadataBase: "https://health-compass-landing-page.vercel.app/",

    openGraph: {
      title,
      description,
      siteName,
      url,
      type,
      images: img
        ? [{ url: img, width: 1200, height: 630, alt: "Banner Image" }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: img ? [img] : [],
    },
  };
};
