/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1180px",
        "2xl": "1280px",
      },
    },

    extend: {

      colors: {

        primary: "#AF0D5A",
        secondary: "#4F46E5",
        accent: "#06B6D4",

        dark: "#111827",
        light: "#F9FAFB",

        borderLight: "#E5E7EB",

      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      boxShadow: {
        navbar: "0 2px 15px rgba(0,0,0,0.08)",
        card: "0 10px 25px rgba(0,0,0,0.08)",
        hover: "0 15px 35px rgba(0,0,0,0.12)",
      },

      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },

      spacing: {
        section: "120px",
      },

      transitionDuration: {
        400: "400ms",
      },

      backgroundImage: {
        heroGradient:
          "linear-gradient(to right, #AF0D5A, #4F46E5)",
      },
    },
  },

  plugins: [],
};