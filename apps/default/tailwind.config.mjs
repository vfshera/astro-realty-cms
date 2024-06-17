/** @type {import('tailwindcss/defaultTheme')} */
import dt from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...dt.fontFamily.serif],
        lora: ["Lora Variable", ...dt.fontFamily.serif],
        "bebas-neue": ["Bebas Neue", ...dt.fontFamily.serif],
        inter: ["Inter Variable", ...dt.fontFamily.serif],
        sora: ["Sora Variable", ...dt.fontFamily.serif],
      },
      colors: {
        brand: {
          dark: {
            1: "#1c1e1d",
            2: "#121212",
            3: "#171717",
            4: "#1a1a1a",
            5: "#212121",
          },
          gray: {
            1: "#353535",
            2: "#cacaca",
            3: "#5c5c5c",
            4: "#525252",
          },
          green: {
            1: "#006c2e",
            2: "#c1fdda",
          },
        },
      },
    },
  },
  plugins: [],
};
