/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  // images: {
  //   unoptimized: true,
  // },
  // CRÍTICO: basePath debe coincidir con la ruta de Nginx
  // basePath: "/",

  // Asset prefix también debe incluir /cv
  assetPrefix: "/cv",

  // Configurar imágenes
  images: {
    path: "/_next/image",
  },
};

export default nextConfig;
