import { defineStore } from "pinia";

export const useWorkStore = defineStore('work', {
    state: () => ({
        works: [
            {
                id: 1,
                name: 'Mongoo',
                date: 'november 2023',
                summary: 'Integration of an Illustrator model of the Mongoo website',
                description: 'This was a school project, completed in 1 week. The aim was to integrate an Illustrator model of the Mongoo website (which is a restaurant in La Défense, Paris). I used HTML, Sass and JavaScript to create the site. The aim was to master HTML and CSS, learn how to use the Sass pre-processor, and learn how to efficiently integrate a model.',
                image: '/imgs/mongoo.png',
                link: 'https://marquesthomascoding.github.io/Rendu-Integration/mon-projet',
                technos: ['html', 'sass', 'js']
            },
            {
                id: 2,
                name: 'Hangman Game',
                date: 'january 2024',
                summary: 'A Hangman game in JavaScript',
                description: 'One of my first projects in JavaScript. I wanted to create a Hangman game, so I did it. I used HTML, CSS and JavaScript to create it, and my main goal was to challenge myself on native JavaScript trying to master its main concepts.',
                image: '/imgs/hangman-game.png',
                link: 'https://marquesthomascoding.github.io/hangman-game/',
                technos: ['html', 'css', 'js']
            },
            {
                id: 3,
                name: 'PokeShop',
                date: 'january 2024',
                summary: 'Fictitious Pokémon shopping website using the PokeAPI API',
                description: 'In this project, realised in 1 week for school, I had to create a fictitious Pokémon shopping website using the PokeAPI API. I used HTML, CSS and JavaScript to create this website. The goal was to master the basics of fetching and using an API.',
                image: '/imgs/pokeshop.png',
                link: 'https://marquesthomascoding.github.io/ecommerce-pokemon/',
                technos: ['html', 'css', 'js']
            },
            {
                id: 4,
                name: 'Portfolio v1',
                date: '2023',
                summary: 'My first portfolio',
                description: 'This was my first portfolio, created using HTML, Sass and JavaScript. It is pretty simple, but it was my first big personal project, so I am proud of it. I wanted to create a simple way to show my projects.',
                image: '/imgs/portfolio.png',
                link: 'https://marquesthomascoding.github.io/portfolio/',
                technos: ['html', 'sass', 'js']
            },
            {
                id: 5,
                name: 'Portfolio v2',
                date: '2024',
                summary: 'My current portfolio',
                description: 'The website you are currently on. This is my current portfolio, created using Vue.js and TailwindCSS. I wanted to create a portfolio that is both simple and modern, reflecting my personality, but also challenging myself by using technologies that I rarely used before.',
                image: '/imgs/portfolio_v2.png',
                link: 'https://marquesthomascoding.github.io/portfolio-v2/',
                technos: ['html', 'tailwind', 'js', 'vue']
            },
            {
                id: 6,
                name: 'Weather App',
                date: 'january 2024',
                summary: 'Weather Web App using the WeatherAPI API',
                description: 'Weather Web App using the WeatherAPI API. This project was my very first project using the basics of React.js.\nOn this web app, you can search for a city and get the weather of the day and the next 5 days, showing the condition, temperature, humidity, etc...',
                image: '/imgs/weather_app.png',
                link: 'https://appweather-react.vercel.app',
                technos: ['html', 'css', 'js', 'react']
            }
        ]
    })
})