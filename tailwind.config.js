module.exports = {
  darkMode: ["selector", '[zaui-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#00a878",
          dark: "#008862",
          deep: "#006045",
          soft: "#eaf8f3",
        },
        gold: {
          DEFAULT: "#c59b27",
          soft: "#fff9e8",
        },
        surface: {
          DEFAULT: "#f7f9f8",
          strong: "#eef4f1",
        },
        text: {
          primary: "#19221e",
          secondary: "#5c6863",
          muted: "#8d9a94",
        },
        border: "#e2eae6",
        danger: "#c0392b",
      },
      borderRadius: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "22px",
      },
      boxShadow: {
        subtle: "0 2px 8px rgba(22, 46, 38, 0.04)",
        card: "0 4px 16px rgba(22, 46, 38, 0.07)",
        float: "0 12px 28px rgba(0, 136, 98, 0.16)",
        nav: "0 -4px 20px rgba(0, 0, 0, 0.06)",
      },
      keyframes: {
        "category-menu-drop": {
          from: { opacity: "0", transform: "translateY(-12px) scaleY(0.96)" },
          to: { opacity: "1", transform: "translateY(0) scaleY(1)" },
        },
        "contact-ripple": {
          "0%": { transform: "scale(0.95)", opacity: "0.8" },
          "50%": { transform: "scale(1.22)", opacity: "0.25" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        "hotline-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 0 6px rgba(231, 76, 60, 0.22), 0 4px 12px rgba(231, 76, 60, 0.4)",
          },
          "50%": {
            boxShadow: "0 0 0 10px rgba(231, 76, 60, 0.35), 0 4px 16px rgba(231, 76, 60, 0.55)",
          },
        },
      },
      animation: {
        "category-menu-drop": "category-menu-drop 190ms ease-out",
        "contact-ripple": "contact-ripple 2.2s infinite ease-out",
        "hotline-pulse": "hotline-pulse 1.8s infinite ease-out",
      },
    },
  },
};
