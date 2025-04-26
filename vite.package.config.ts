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
      formats: ["es", "cjs"],
      fileName: (format) => {
        switch (format) {
          case "es":
            return "index.mjs";
          case "cjs":
            return "index.cjs";
          default:
            return "index.js";
        }
      },
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@mui/material",
        "@mui/material/SvgIcon",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          "@mui/material": "MaterialUI",
          "@mui/material/SvgIcon": "MaterialUISvgIcon",
        },
      },
    },
  },
});
