import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsConfigPaths from "vite-tsconfig-paths";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [["@swc/plugin-emotion", {}]],
    }),
    tsConfigPaths(),
    mkcert(),
  ],
});
