/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "it.egovaleo.com",
      },
      {
        protocol:'https',
        hostname: "fuzzymath.com"
      },
      {
        protocol:'https',
        hostname: "blog.postman.com"
      },
      {
        protocol:'https',
        hostname: "atyantik.com"
      },
      {
        protocol:'https',
        hostname: "devacademy.it"
      },
      {
        protocol:'https',
        hostname: "accessibilityspark.com"
      },
      {
        protocol:'https',
        hostname: "t4.ftcdn.net"
      },
      
    ],
  },       
};

export default nextConfig;
