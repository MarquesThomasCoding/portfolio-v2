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
                github: 'https://github.com/marquesthomascoding/Rendu-Integration',
                technos: ['html', 'sass', 'js']
            },
            {
                id: 2,
                name: 'ACHAKA CONSEILS',
                date: 'octobre à décembre 2023',
                summary: 'Site professionnel de conseil en propriété industrielle',
                description: "Projet scolaire réalisé en 3 mois au sein d'une équipe de 11 personnes pour un client réel, lors de la Bourse aux Projets du 1er semestre 2023-2024. L'objectif : nous former à la gestion d'un projet concret et d'un client avec de vrais besoins.",
                image: '/imgs/achaka.png',
                link: 'https://10.achakaconseils.com',
                technos: ['html', 'sass', 'js', 'wordpress']
            },
            {
                id: 3,
                name: 'Portfolio v1',
                date: '2023',
                summary: 'Mon premier portfolio',
                description: "Il s'agit de mon premier portfolio, créé en utilisant HTML, Sass et JavaScript. Il est assez simple, mais c'était mon premier grand projet personnel, donc j'en suis fier. Je voulais créer un moyen simple de montrer mes projets.",
                image: '/imgs/portfolio.png',
                link: 'https://marques-thomas-v1.vercel.app',
                github: 'https://github.com/marquesthomascoding/portfolio',
                technos: ['html', 'sass', 'js']
            },
            {
                id: 4,
                name: 'Hangman Game',
                date: 'janvier 2024',
                summary: 'Un jeu du pendu en Javascript',
                description: "Un de mes premiers projets en JavaScript. Je voulais créer un jeu du pendu, donc je l'ai fait. J'ai utilisé HTML, CSS et JavaScript pour le créer, et mon objectif principal était de me challenger sur le JavaScript natif en essayant de maîtriser ses principaux concepts.",
                image: '/imgs/hangman-game.png',
                link: 'https://marquesthomascoding.github.io/hangman-game/',
                github: 'https://github.com/marquesthomascoding/hangman-game',
                technos: ['html', 'css', 'js']
            },
            {
                id: 5,
                name: 'PokeShop',
                date: 'janvier 2024',
                summary: "Site web fictif d'achat de Pokémon utilisant l'API PokeAPI",
                description: "Dans ce projet, réalisé en 1 semaine pour l'école, je devais créer un site web fictif d'achat de Pokémon en utilisant l'API PokeAPI. J'ai utilisé HTML, CSS et JavaScript pour créer ce site. L'objectif était de maîtriser les bases de la recherche et de l'utilisation d'une API.",
                image: '/imgs/pokeshop.png',
                link: 'https://marquesthomascoding.github.io/ecommerce-pokemon/',
                github: 'https://github.com/marquesthomascoding/ecommerce-pokemon',
                technos: ['html', 'css', 'js']
            },
            {
                id: 6,
                name: 'Weather App',
                date: 'janvier 2024',
                summary: "Application web météo utilisant l'API WeatherAPI",
                description: "Application web météo utilisant l'API WeatherAPI. Ce projet était mon tout premier projet utilisant les bases de React.js. Sur cette application web, vous pouvez rechercher une ville et obtenir la météo du jour et des 3 prochains jours, en montrant les conditions, la température, l'humidité, etc...",
                image: '/imgs/weather_app.png',
                link: 'https://appweather-react.vercel.app',
                github: 'https://github.com/marquesthomascoding/weather-app-react',
                technos: ['html', 'css', 'js', 'react']
            },
            {
                id: 7,
                name: 'Lyyda',
                date: 'mai 2024',
                summary: "Plateforme de gestion d'évènements",
                description: "Application web de gestion d'évènements. L'objectif était de créer une application web permettant de gérer des évènements, de les ajouter, de les modifier, de les supprimer, etc... J'ai utilisé React.js pour ce projet, et j'ai appris à gérer les états, les props, les composants, etc... J'ai également utilisé Firebase pour la base de données et l'authentification, et Shadcn/UI pour les composants. J'ai également utilisé TailwindCSS pour le style.",
                image: '/imgs/lyyda.png',
                link: 'https://lyyda.vercel.app/',
                github: 'https://github.com/marquesthomascoding/lyyda',
                technos: ['html', 'tailwind', 'js', 'react', 'firebase']
            },
            {
                id: 8,
                name: '1, 2, 3, Statue !',
                date: 'mai 2024',
                summary: 'Jeu de statue en ligne',
                description: "Jeu de statue inspiré du jeu originel de l'application 'Coco pense et Coco bouge'. Ce projet constitue un test technique réalisé pour l'entreprise auteure de l'application. Le projet est conçu en HTML, CSS et Javascript. Il reprend l'idée du jeu '1, 2, 3, soleil', en utilisant l'audio pour signifier une phase de mouvement. Ce jeu est conçu pour les enfants, afin de les motivé à bouger et à s'amuser.",
                image: '/imgs/123statue.png',
                link: 'https://dynseo-test-technique-marquesthomas.vercel.app',
                github: 'https://github.com/MarquesThomasCoding/DYNSEO_test_technique',
                technos: ['html', 'sass', 'js']
            },
            {
                id: 9,
                name: 'Portfolio v2',
                date: '2024',
                summary: 'Mon portfolio actuel',
                description: "Le site web sur lequel vous vous trouvez actuellement. Ceci est mon portfolio actuel, créé en utilisant Vue.js et TailwindCSS. Je voulais créer un portfolio à la fois simple et moderne, reflétant ma personnalité, mais aussi me mettant au défi en utilisant des technologies que j'ai rarement utilisées auparavant.",
                image: '/imgs/portfolio_v2.png',
                link: 'https://thomasmarques.fr',
                github: 'https://github.com/marquesthomascoding/portfolio-v2',
                technos: ['html', 'tailwind', 'js', 'vue']
            }
        ]
    })
})