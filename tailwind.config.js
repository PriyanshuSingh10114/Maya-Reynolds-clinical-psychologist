/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* =========================
         FONTS (Phase 2)
         ========================= */
      fontFamily: {
        heading: ["var(--font-heading)", "serif"], // Playfair Display
        body: ["var(--font-body)", "sans-serif"], // Inter
        display: ["var(--font-display)", "serif"], // legacy (keep)
        sans: ["var(--font-sans)", "sans-serif"],  // legacy (keep)
      },

      /* =========================
         COLORS (New Theme)
         ========================= */
      colors: {
        primary: "#2F4A3C",   // deep coastal green
        secondary: "#F3EFEA", // soft sand
        accent: "#C07A5A",    // muted clay
        text: "#22312A",
      },

      /* =========================
         ANIMATIONS (unchanged)
         ========================= */
      keyframes: {
        siteTitle: {
          "0%": {
            opacity: "0",
            transform: "translateY(8px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        siteTitle: "siteTitle 0.8s ease forwards",
      },
    },
  },
  plugins: [],
};
