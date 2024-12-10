module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        "hero-pattern": "url('assets/images/hero.jpg')",
      },
      screens: {
        sm: '393px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        'green': '#a5ff2b'
      }
    },
    fontFamily: {
      syne: ["Syne"],
      yapari: ["Yapari"],
    },
    letterSpacing: {
      tight: "-0.02em",
    },

  },
  plugins: [],
};
