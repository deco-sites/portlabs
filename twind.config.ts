/** @type {import('$fresh/plugins/twind').Options} */

export default {
  important: true,
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1920px",
      },
      colors: {
        primary: "#2FD180",
        "primary-dark": "#003232",
        "primary-light": "#C5FFE9",
        transparent: "transparent",
        // White
        "white-100": "#FFFFFF",

        // Mineral
        // "mineral-40": "#009699",
        "mineral-60": "#007B7D",
        // "mineral-70": "#005F61",
        "mineral-80": "#2E3942",
        // Teal
        "teal-10": "#DEF7F7",
        "teal-30": "#54DEDC",
        "teal-40": "#009699",
        "teal-60": "#007B7D",
        "teal-70": "#005F61",
        // Purple
        "purple-10": "#F7F0FF",
        "purple-40": "#935FD3",
        "purple-60": "#5A3489",
        "purple-70": "#3D235C",
        "purple-80": "#201230",
        // Coral
        "coral-10": "#FFF1F0",
        "coral-30": "#FFACA4",
        "coral-40": "#EC6056",
        "coral-60": "#BC442F",
        "coral-70": "#A2331C",
        // Mustard
        "mustard-10": "#FDF8ED",
        "mustard-30": "#FFC978",
        "mustard-40": "#E9A449",
        "mustard-60": "#935E25",
        "mustard-70": "#663F19",
      },
      fontFamily: {
        sans: ["freight-sans-pro", "sans-serif"],
        serif: ["ff-meta-serif-web-pro", "serif"],
      },
      spacing: {
        15: "3.75rem",
      },
    },
  },
};
