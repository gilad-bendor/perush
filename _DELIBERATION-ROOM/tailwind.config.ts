import type { Config } from "tailwindcss";

export default {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["David", "Narkisim", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
