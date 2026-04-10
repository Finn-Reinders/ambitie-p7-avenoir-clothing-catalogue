/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: false,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
