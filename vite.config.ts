/** @format */

import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import { DateTime } from "luxon";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint({ cache: false }), splitVendorChunkPlugin()],
  build: {
    outDir: "./dist",
    rollupOptions: {
      output: {
        entryFileNames: `[name].` + DateTime.now().toUnixInteger() + `.js`,
        chunkFileNames: `[name].` + DateTime.now().toUnixInteger() + `.js`,
        assetFileNames: `[name].` + DateTime.now().toUnixInteger() + `.[ext]`,
      },
    },
  },
});
