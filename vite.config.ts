import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import UnoCss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
    port: 8888,
    open: true,
    https: false,
    proxy: {},
  },
  plugins: [
    react(),
    // https://github.com/unocss/unocss
    // see unocss.config.ts for config
    UnoCss(
      {
        configFile: resolve(__dirname, "src/config/unocss/index.ts"),
      },
    ),
  ],
  resolve: {
    alias: {
      "~/": `${resolve(__dirname, "src")}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
      @import "~/styles/variables.scss";
    `,
        javascriptEnabled: true,
      },
    },
  },
});
