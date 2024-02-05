/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        general: 'url("/images/bg.jpg")',
        dashboard: 'url("/images/dashboard/bg.jpg")',
      },
      colors: {
        'primary-purple': '#9d6be5',
        'blue-strong': '#10193b',
        'blue-light': '#6a86ff',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
