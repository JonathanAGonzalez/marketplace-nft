/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        general: 'url("/images/bg.jpg")',
      },
      colors: {
        'primary-purple': '#9d6be5',
      },
    },
  },
  plugins: [],
};
