import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008080', // Teal (Navigation, Buttons)
        accent: '#DAA520', // Gold (Pricing, Highlights)
        background: '#F8F9FA', // Soft White (Main Background)
        cta: '#FF8C00', // Dark Orange (Call-to-Action)
        text: '#222222', // Dark Gray (Text & Readability)
      },
    },
  },
  plugins: [],
};

export default config;
