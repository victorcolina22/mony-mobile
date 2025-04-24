/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'mony-purple': '#7371F6',
        'mony-gray': '#3A3937',
        'mony-white': '#F6F5F8',
        'mony-light-gray': '#ECECEE',
        'mony-light-gray-2': '#EAEBED',
        'mony-red': '#900B09',
      },
    },
  },
  plugins: [],
};
