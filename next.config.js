/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "https://image.tmdb.org/",
      "https://api.themoviedb.org/",
      "pinnacle.works",
    ],
  },
};

module.exports = nextConfig;
