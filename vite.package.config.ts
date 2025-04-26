import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "MyIconLibrary",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "@mui/material"],
      output: {
        globals: {
          react: "React",
          "@mui/material": "MaterialUI",
        },
      },
    },
  },
});
