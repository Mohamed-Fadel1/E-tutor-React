/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary :"#ffcf3a",
        secondary :"#0063ff"
      },
      container :{
        center : true,
        padding : {
          DEFAULT : "1rem",
          md:"3rem",
          sm :"2rem",
          lg :"4rem",
          xl :"5rem",
          "2xl":"6rem"

        }
      }
    },
  },
  plugins: [],
}

