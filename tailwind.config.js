// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   daisyui: {
//     themes: [
//       {
//         mytheme: {
        
// "primary": "#0FCFEC",
        
// "secondary": "#D926A9",
        
// "accent": "#1FB2A6",
        
// "neutral": "#191D24",
        
// "base-100": "#2A303C",
        
// "info": "#3ABFF8",
        
// "success": "#36D399",
        
// "warning": "#FBBD23",
        
// "error": "#F87272",
//         },
//       },
//     ],
//   },
//   plugins: [require("daisyui")],

// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes: [
      {
        doctortheme:{
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: "#3A4256" , 
          "base-100": "#FFFFFF",
        }
        ,
       
      } ,  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter",
    ]
  },
  theme: {
    extend: {},
    
  },
  plugins: [require("daisyui")],
}