module.exports = {
  darkMode: ["selector", '[zaui-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
};
