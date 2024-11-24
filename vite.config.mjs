// ** IMPORTANT v1.2.0 upgrade change **
// You need to include the gadget plugin in your vite config:
//
// import react from "@vitejs/plugin-react-swc";
// import { defineConfig } from "vite";
// import { gadget } from "gadget-server/vite";
//
// export default defineConfig({
//   plugins: [gadget(), react()],
//   clearScreen: false,
// });
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "tailwindcss/base"; @import "tailwindcss/components"; @import "tailwindcss/utilities";`
      }
    }
  }
});

