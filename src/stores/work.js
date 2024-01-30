import { defineStore } from "pinia";

export const useWorkStore = defineStore('work', {
    state: () => ({
        works: [
            {
                id: 1,
                name: 'Mongoo',
                date: 'novembre 2023',
                summary: 'Intégration d\'une maquette Illustrator du site Mongoo',
                description: "Il s'agit d'un projet scolaire, réalisé en 1 semaine. Le but était d'intégrer une maquette Illustrator du site Mongoo (qui est un restaurant à La Défense, Paris). J'ai utilisé HTML, Sass et JavaScript pour créer le site. L'objectif était de maîtriser le HTML et le CSS, d'apprendre à utiliser le pré-processeur Sass, et d'apprendre à intégrer efficacement une maquette.",
                image: '/imgs/mongoo.png',
                link: 'https://marquesthomascoding.github.io/Rendu-Integration/mon-projet',
                technos: ['html', 'sass', 'js']
            },
            {
                id: 2,
                name: 'Portfolio v1',
                date: '2023',
                summary: 'Mon premier portfolio',
                description: "Il s'agit de mon premier portfolio, créé en utilisant HTML, Sass et JavaScript. Il est assez simple, mais c'était mon premier grand projet personnel, donc j'en suis fier. Je voulais créer un moyen simple de montrer mes projets.",
                image: '/imgs/portfolio.png',
                link: 'https://marquesthomascoding.github.io/portfolio/',
                technos: ['html', 'sass', 'js']
            },
            {
                id: 3,
                name: 'Hangman Game',
                date: 'janvier 2024',
                summary: 'Un jeu du pendu en Javascript',
                description: "Un de mes premiers projets en JavaScript. Je voulais créer un jeu du pendu, donc je l'ai fait. J'ai utilisé HTML, CSS et JavaScript pour le créer, et mon objectif principal était de me challenger sur le JavaScript natif en essayant de maîtriser ses principaux concepts.",
                image: '/imgs/hangman-game.png',
                link: 'https://marquesthomascoding.github.io/hangman-game/',
                technos: ['html', 'css', 'js']
            },
            {
                id: 4,
                name: 'PokeShop',
                date: 'janvier 2024',
                summary: "Site web fictif d'achat de Pokémon utilisant l'API PokeAPI",
                description: "Dans ce projet, réalisé en 1 semaine pour l'école, je devais créer un site web fictif d'achat de Pokémon en utilisant l'API PokeAPI. J'ai utilisé HTML, CSS et JavaScript pour créer ce site. L'objectif était de maîtriser les bases de la recherche et de l'utilisation d'une API.",
                image: '/imgs/pokeshop.png',
                link: 'https://marquesthomascoding.github.io/ecommerce-pokemon/',
                technos: ['html', 'css', 'js']
            },
            {
                id: 5,
                name: 'Weather App',
                date: 'janvier 2024',
                summary: "Application web météo utilisant l'API WeatherAPI",
                description: "Application web météo utilisant l'API WeatherAPI. Ce projet était mon tout premier projet utilisant les bases de React.js. Sur cette application web, vous pouvez rechercher une ville et obtenir la météo du jour et des 5 prochains jours, en montrant les conditions, la température, l'humidité, etc...",
                image: '/imgs/weather_app.png',
                link: 'https://appweather-react.vercel.app',
                technos: ['html', 'css', 'js', 'react']
            },
            {
                id: 6,
                name: 'Portfolio v2',
                date: '2024',
                summary: 'Mon portfolio actuel',
                description: "Le site web sur lequel vous vous trouvez actuellement. Ceci est mon portfolio actuel, créé en utilisant Vue.js et TailwindCSS. Je voulais créer un portfolio à la fois simple et moderne, reflétant ma personnalité, mais aussi me mettant au défi en utilisant des technologies que j'ai rarement utilisées auparavant.",
                image: '/imgs/portfolio_v2.png',
                link: 'https://marquesthomascoding.github.io/portfolio-v2/',
                technos: ['html', 'tailwind', 'js', 'vue']
            }
        ]
    })
})