import { defineStore } from "pinia";

export const useWorkStore = defineStore('work', {
    state: () => ({
        works: [
            {
                id: 1,
                name: 'Mongoo',
                date: 'november 2023',
                description: 'Integration of an Illustrator model of the Mongoo website',
                image: '/src/assets/imgs/mongoo.png',
                link: 'https://marquesthomascoding.github.io/Rendu-Integration/mon-projet'
            },
            {
                id: 2,
                name: 'Hangman Game',
                date: 'january 2024',
                description: 'A Hangman game in JavaScript',
                image: '/src/assets/imgs/hangman-game.png',
                link: 'https://marquesthomascoding.github.io/hangman-game/'
            },
            {
                id: 3,
                name: 'PokeShop',
                date: 'january 2024',
                description: 'Creation of a fictitious Pokémon ECommerce site using the PokeAPI API',
                image: '/src/assets/imgs/pokeshop.png',
                link: 'https://marquesthomascoding.github.io/ecommerce-pokemon/'
            },
            {
                id: 4,
                name: 'Portfolio v1',
                date: '2023',
                description: 'My first portfolio',
                image: '/src/assets/imgs/portfolio.png',
                link: 'https://marquesthomascoding.github.io/portfolio/'
            },
            {
                id: 5,
                name: 'Portfolio v2',
                date: '2024',
                description: 'My current portfolio',
                image: 'https://via.placeholder.com/150',
                link: 'https://marquesthomascoding.github.io/portfolio-v2/'
            }
        ]
    })
})