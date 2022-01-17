// tailwind.config.js
const colors = require('tailwindcss/colors')
const laravelProject = '/home/vagrant/workspace/newgit/abruzzo/';
module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.vue',
        './static/*.html',
        './src/**/*.js',
        laravelProject + 'resources/views/crud-vue-tailwind/**/*.blade.php',
        laravelProject + 'public/crud-vue-tailwind/pages/**/*.html'
    ],
    darkMode: true, // or 'media' or 'class'
    theme: {
        extend: {
            zIndex: {
                "1": "1",
                "-1": "-1",
                "-10": "-10",
                "-20": "-20",
                "60" : "60",
                "70" : "70",
                "10000" : "10000",
            },
            transformOrigin: {
                "0": "0%",
            },
            colors : {
              "green" : colors.green,
            },
            // colors: {
            //     'transparent-black' : 'rgba(0,0,0,.2)',
            //     'orange' : colors.orange,
            //     'info' : '#73e7f7',
            //     'brand' : '#4E8C95',
            //     'green' : colors.green,
            //     'red' : colors.red,
            //     'yellow': colors.yellow,
            //     'gray' : colors.gray
            // },
            fontFamily: {
                'layout' : ['Sriracha'],
                'body' : ['Roboto','sans-serif']
            }
            // height: {
            //     'px-70': '70px',
            // }

        }
    },
    variants: {
        borderRadius : ['responsive','first','last'],
        borderWidth : ['responsive','first','last'],
        extend: {
            backgroundColor: ['odd','even'],
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
