import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Habilita el modo estricto de React para detectar posibles problemas
  images: {
    domains: ["example.com"], // Reemplaza con los dominios permitidos para cargar imágenes
  },
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET, // Variables de entorno accesibles desde Next.js
    DATABASE_URL: process.env.DATABASE_URL,
  },
  eslint: {
    dirs: ["src"], // Especifica qué directorios incluir en las verificaciones de ESLint
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // Evita errores relacionados con `fs` en el lado del cliente
        path: false,
      };
    }
    return config;
  },
};

export default nextConfig;
