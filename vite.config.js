import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default ({mode}) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  };

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: [
        // thanks to https://stackoverflow.com/a/67676242/22296059 :)
        { find: "@", replacement: fileURLToPath(new URL('./src', import.meta.url)) }
      ] 
    },
    css: {
      preprocessorOptions: {
        less: {
          math: "always",
          relativeUrls: true,
          javascriptEnabled: true
        }
      }
    }
  });
} 