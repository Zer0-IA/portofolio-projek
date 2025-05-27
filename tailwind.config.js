/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        rubber: {
          '0%': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '65%': { transform: 'scale3d(.95, 1.05, 1)' },
          '75%': { transform: 'scale3d(1.05, .95, 1)' },
          '100%': { transform: 'scale3d(1, 1, 1)' },
        },
        twist: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
       
        
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        floating: "float 6s ease-in-out infinite",
        rubber: "rubber 1s ease",
        twist: "twist 0.6s ease-in-out",
        typing: 'typing 3s steps(15, end) forwards',
        blink: 'blink 0.7s step-end infinite',
      },
    },
  },
  plugins: [],
};
