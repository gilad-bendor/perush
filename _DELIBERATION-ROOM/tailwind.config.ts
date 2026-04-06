import type { Config } from "tailwindcss";

export default {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["David", "Narkisim", "Times New Roman", "serif"],
      },
      fontSize: {
        perush: ["1rem", { lineHeight: "1.2" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
