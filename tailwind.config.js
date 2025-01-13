module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Incluye todo el contenido dentro de src
    "./components/**/*.{js,ts,jsx,tsx}", // Asegúrate de cubrir también los componentes
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Verde para el tema principal
        secondary: "#FF5722", // Naranja para el tema secundario
        background: "#F5F5F5", // Fondo suave
        foreground: "#212121", // Texto oscuro
        accent: "#2196F3", // Azul para acentos
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // Añade una tipografía moderna
        mono: ["Menlo", "Monaco", "monospace"], // Opción para código o elementos técnicos
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra personalizada para tarjetas
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("@tailwindcss/forms"), // Mejora los estilos de los formularios
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("@tailwindcss/typography"), // Para manejar tipografías
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("@tailwindcss/aspect-ratio"), // Utilidades para proporciones
  ],
};
