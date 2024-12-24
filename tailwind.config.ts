import type { Config } from "tailwindcss";
import daisyui from "daisyui"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': "#178f78",
        'primary-content': '#eee',
        'secondary': '#074799',
        'secondary-content': '#eee',
        'accent': '#001A6E',
        'accent-content': '#eee',
        'neutral': '#3d4451',
        'neutral-content': '#eee',
        'base-100': '#ffffff',
      },
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [{
      myTheme: {
        "primary": "#178f78",
        'primary-content': '#eee',
        'secondary': '#074799',
        'secondary-content': '#eee',
        'accent': '#001A6E',
        'accent-content': '#eee',
        'neutral': '#3d4451',
        'neutral-content': '#eee',
        'base-100': '#ffffff',
      },
    }, "light"],
  },
} satisfies Config;
