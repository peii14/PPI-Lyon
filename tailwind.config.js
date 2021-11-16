module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["'Montserrat',sans-serif"],
      },
      textColor: {
        primary: "#282828",
        secondary: "#ffed4a",
        danger: "#e3342f",
      },
      dropShadow: {
        '3xl': '0 45px 45px rgba(0, 0, 0, 0.55)',
      },
      colors: {
        // 500 for gradient, 600 for hover
        primary: { DEFAULT: "#282828" },
        //400 to 600 gradient
        sec: { DEFAULT: "#f0f0f0" },
        title: "#595959",
        secondHover: "#b32a00",
      },
      backgroundImage: (theme) => ({
        bghero: "url('/images/home/hero1.png')",
      }),
      screens: {
        samsung: "370px",
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
