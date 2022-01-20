module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["'Montserrat',sans-serif"],
      },
      height: {        
        '2s': '120vh',      
      },
      width: {        
        '2s': '200vh',      
      },
      textColor: {
        primary: "#282828",
        secondary: "#ffed4a",
        danger: "#e3342f",
        textSecond:"#777777"
      },
      dropShadow: {
        '3xl': '0 45px 45px rgba(0, 0, 0, 0.55)',
      },
      gridRow: {        
        'span-16': 'span 7 / span 7',      
      },
      colors: {
        // 500 for gradient, 600 for hover
        primary: { DEFAULT: "#282828" },
        //400 to 600 gradient
        sec: { DEFAULT: "#f0f0f0" },
        third: { DEFAULT: "#771011" },
        title: "#595959",
        secondHover: "#b32a00",
        tip_box: "#D4DADE",
        tip_box_outline: "radial-gradient"
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
