import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // (optional if using pages router)
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFD700", // your brand yellow
          black: "#000000",  // your brand black
        },
      },
    },
  },
  plugins: [],
}
export default config
