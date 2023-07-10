/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ["profile.line-scdn.net", "coffee.alexflipnote.dev"],
  },
};
