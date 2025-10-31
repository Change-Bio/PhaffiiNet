import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'media',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'raisin_black': {
          DEFAULT: '#332E3C',
          100: '#0a080c',
          200: '#151117',
          300: '#1f1923',
          400: '#2a222e',
          500: '#332E3C',
          600: '#5d5169',
          700: '#877896',
          800: '#b1a5b9',
          900: '#d8d2dc'
        },
        'hookers_green': {
          DEFAULT: '#426a5a',
          100: '#0d1512',
          200: '#1b2b24',
          300: '#284036',
          400: '#355549',
          500: '#426a5a',
          600: '#5d947e',
          700: '#83b19f',
          800: '#accbbf',
          900: '#d6e5df'
        },
        'white': {
          DEFAULT: '#fdfdff',
          100: '#000066',
          200: '#0000cc',
          300: '#3333ff',
          400: '#9999ff',
          500: '#fdfdff',
          600: '#ffffff',
          700: '#ffffff',
          800: '#ffffff',
          900: '#ffffff'
        },
        'olivine': {
          DEFAULT: '#a2ad59',
          100: '#202311',
          200: '#414622',
          300: '#616933',
          400: '#828b45',
          500: '#a2ad59',
          600: '#b4bd79',
          700: '#c7ce9b',
          800: '#d9debc',
          900: '#ecefde'
        },
        'lion': {
          DEFAULT: '#b49a67',
          100: '#261f13',
          200: '#4b3e25',
          300: '#715e38',
          400: '#967d4a',
          500: '#b49a67',
          600: '#c2ae84',
          700: '#d2c2a3',
          800: '#e1d6c1',
          900: '#f0ebe0'
        }
      },
    },
  },
  plugins: [],
};
export default config;
