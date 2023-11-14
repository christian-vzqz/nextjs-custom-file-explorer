/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push("drivelist");
    }

    return config;
  },
};

module.exports = nextConfig;
