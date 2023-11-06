import { PluginOption, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

interface ViteConfig {
  plugins: PluginOption[];
  test: {
    globals: boolean;
    environment: string;
    setupFiles: string;
  };
}

const config: ViteConfig = {
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup"
  },
};

export default defineConfig(config);
