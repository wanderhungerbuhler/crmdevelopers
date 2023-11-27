export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#35C4CD',
        secondary: '#FFFFFF',
        dashboard: '#F0F1F2',
        btnhover: '#2B9DA4',
        gray: {
          100: '#D9D9D9',
          200: '#A1AFCB',
          300: '#323232',
        },
        auxiliary: {
          success: '#15BC87',
          info: '#4C72DC',
          warning: '#FFB728',
          danger: '#F35663',
        },
      },
    },
  },
  plugins: [],
}
