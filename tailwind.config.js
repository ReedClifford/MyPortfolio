/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        supersmol: "2px",
      },
      backgroundImage: {
        "picture-bg":
          "linear-gradient(rgba(0,0,0,0.70),rgba(0,0,0,0.70)),URL('./image/mainbg2.jpg')",
        "smol-reso":
        "linear-gradient(rgba(0,0,0,0.70),rgba(0,0,0,0.70)),URL('./image/me.jpg')",
      },
    },
  },
  plugins: [],
};
