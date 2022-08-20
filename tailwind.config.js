/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'trade-gothic-next, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      display: 'countach, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      dropShadow: {
        'menu': '0 3px 2px rgba(0, 0, 0, 0.3)'
      },
      backgroundImage: {
        'grid-pattern': "url('/images/grid.svg')",
      },
      colors: {
        "primary": {
          "50": "#F5F5FA",
          "100": "#EBEAF5",
          "200": "#D1CFE8",
          "300": "#B4B0D8",
          "400": "#908BC6",
          DEFAULT: "#534D9D",
          "600": "#4D4690",
          "700": "#433E7F",
          "800": "#373267",
          "900": "#242244"
        },
        "secondary": {
          "50": "#FDF1F7",
          "100": "#FCE8F2",
          "200": "#F9C8E0",
          "300": "#F5A8CD",
          "400": "#EF76B0",
          DEFAULT: "#E5217F",
          "600": "#CD1870",
          "700": "#BB1666",
          "800": "#9B1254",
          "900": "#6E0D3C",
        },
        "purple-top": "#3e3882",
        "purple-bottom": "#534d9d",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
