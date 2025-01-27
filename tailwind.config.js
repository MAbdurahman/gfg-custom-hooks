/** @type {import('tailwindcss').Config} */
export default {
   content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}'
   ],
   theme: {
      extend: {
         colors: {
            'semantic-a-400': 'hsl(0, 96%, 33%)',
            'semantic-a-300': 'hsl(0, 96%, 38%)',
            'semantic-a-200': 'hsl(0, 96%, 43%)',
            'semantic-a-100': 'hsl(0, 96%, 48%)',
            'semantic-i-400': 'hsl(215, 96%, 33%)',
            'semantic-i-300': 'hsl(215, 96%, 38%)',
            'semantic-i-200': 'hsl(215, 96%, 43%)',
            'semantic-i-100': 'hsl(215, 96%, 48%)',
            'semantic-s-400': 'hsl(100, 96%, 33%)',
            'semantic-s-300': 'hsl(100, 96%, 38%)',
            'semantic-s-200': 'hsl(100, 96%, 43%)',
            'semantic-s-100': 'hsl(100, 96%, 48%)',
            'semantic-w-400': 'hsl(48, 96%, 50%)',
            'semantic-w-300': 'hsl(48, 96%, 55%)',
            'semantic-w-200': 'hsl(48, 96%, 60%)',
            'semantic-w-100': 'hsl(48, 96%, 65%)'
         },
         fontFamily: {
            'body': ['Montserrat', 'sans-serif'],
            'head': ['Lora', 'serif'],
            'mono': ['Noto Sans Mono', 'monospace']
         }
      },
      plugins: []
   }
}