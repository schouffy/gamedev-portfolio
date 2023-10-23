
import { defineConfig, loadEnv } from 'vite'
//import vue from '@vitejs/plugin-vue'
import vue from "@vitejs/plugin-vue2";

const path = require("path");

// https://vitejs.dev/config/
export default ({mode}) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  };

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  })
} 