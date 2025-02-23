import type { Config } from "tailwindcss";

const config: Config = {
     content: [
          "./pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./components/**/*.{js,ts,jsx,tsx,mdx}",
          "./app/**/*.{js,ts,jsx,tsx,mdx}",
     ],
     theme: {
          extend: {
               colors: {
                    background: "var(--background)",
                    foreground: "var(--foreground)",
                    nav: "#18222f",
                    page: "#2b3441",
                    cards: "#47566a",
                    "card-hover": "#4f5e74",
                    "default-text": "#f1f3f5",
                    "blue-accent": "#0084d4",
                    "blue-accent-hover": "#009fff",
               },
          },
     },
     plugins: [],
};
export default config;
