/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1A1A1A',          // Dark background
        primaryText: '#FFFFFF',        // White text
        secondaryText: '#B3B3B3',      // Light gray text
        accentColor: '#3498db',        // Accent color, you can change this to your preference
        buttonBackground: '#C69749',   // Button background color
        buttonText: '#282A3A',         // Button text color
        borderColor: '#2C3E50',
      }
    },
  },
  plugins: [],
}

