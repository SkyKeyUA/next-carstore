/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    domains: ['cdn.imagin.studio'],
  },
  typescript: {
	ignoreBuildErrors: true,
  }
  env: {
    DB_KEY: process.env.DB_KEY,
    DB_HOST: process.env.DB_HOST,
    DB_URL: process.env.DB_URL,
    DBCAR_URL: process.env.DBCAR_URL,
    DBCAR_KEY: process.env.DBCAR_KEY,
  },
};

module.exports = nextConfig;
