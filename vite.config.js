import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import wyw from "@wyw-in-js/vite";
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    wyw(),
    cssnano(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    cssCodeSplit: true,
    minify: true,
    minifyCSS: true,
    rolldownOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: ({ name }) => {
          if (name && name.endsWith(".css")) {
            return "assets/css/[name]-[hash][extname]";
          }
          if (name && name.endsWith(".css")) {
            return "assets/css/[name]-[hash][extname]";
          }
          if (name && name.endsWith(".png") && name.endsWith(".jpg")) {
            return "assets/images/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") && id.includes("react-dom")) {
              return "react";
            }
            if (id.includes("fela") && id.includes("react-fela")) {
              return "fela";
            }
          }
          return "vendor";
        },
      },
    },

    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          cssnano({
            removeComments: true,
            preset: "default",
          }),
        ],
      },
    },
  },
});
