module.exports = {
    plugins: [
        require('tailwindcss'),
        require('daisyui'),
        require('autoprefixer'),
        require('cssnano')({ preset: 'default', }),
    ],
    }