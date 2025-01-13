module.exports = {
  testEnvironment: "jsdom", // Necesario para pruebas relacionadas con el DOM
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Archivo de configuración adicional
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Mapeo para alias definidos en tsconfig.json
  },
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest", // Usa ts-jest para transformar archivos TypeScript
  },
  transformIgnorePatterns: [
    "/node_modules/" // Ignora node_modules por defecto
  ],
  testPathIgnorePatterns: [
    "<rootDir>/.next/", // Ignora la carpeta .next
    "<rootDir>/node_modules/" // Ignora node_modules
  ],
  collectCoverage: true, // Opcional: Activa la recolección de cobertura
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}", // Incluye todos los archivos TypeScript y TSX en src
    "!src/**/*.d.ts", // Excluye archivos de definición de tipos
  ],
};
