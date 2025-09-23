/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "avatars.mds.yandex.net",
      "www.fortunebuilders.com",
      "i.pinimg.com",
      // add more here
    ],
  },
  output: "export",
};

export default nextConfig;
