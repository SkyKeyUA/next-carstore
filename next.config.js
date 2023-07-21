/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    domains: ['cdn.imagin.studio'],
  },
  env: {
    DBCAR_URL: process.env.DBCAR_URL,
    DBCAR_KEY: process.env.DBCAR_KEY,
  },
};

module.exports = nextConfig;
