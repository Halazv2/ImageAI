/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
        port: '',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
