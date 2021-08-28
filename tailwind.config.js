module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {

    fontFamily: {
      sans: ["poppins"],
      serif: ["meriweather"],
    },
    extend: {
      colors: {
        "my-purple": "#3A53E0",
        "my-red": "#FA5959",
        "my-blue": "#242A45",
        "my-grey": "#9194a2",
        "my-white": "#f7f7f7",
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
