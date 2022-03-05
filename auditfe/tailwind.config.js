module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#00204E',
        colorPrimaryVariant: "#CDE6FF",
        colorSecondary: "#FFDC01",
        colorSecondaryVariant: "#0068E5",
        colorBlack: "#171717",
        colorWhite: "#ffffff",
        colorGreen: "#60a326",
        colorRed: "#bd1f36",
        colorGrey: "#92A9BD",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
