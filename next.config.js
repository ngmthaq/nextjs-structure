const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
