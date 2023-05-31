import React from 'react';
import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"

function callPhoneNumber() {
    window.open("tel:0783562292");
  }
  

//export let colors = ["rgb(204 204 255 )", "rgb(166,104,255)"];
export let colors = ["rgb(178, 230, 255 )", "rgb(138,155,206)"];

export const info = {
    firstName: "Nathan Pinard ",
    lastName: "",
    initials: "", 
    position: "",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '✨',
            text: "J'ai 21 ans."
        },
        {
            emoji: '🏠',
            text: "Je réside à Saint - Mandé."
        },
        {
            emoji: "🎓",
            text: "Je suis étudiant en Bachelor développement web (BAC + 3)."
        },

        {
            emoji: "💻",
            text: "Je suis en contrat d'alternance."
        },

        {
            emoji: "📞",
            text: <a href="tel:0783562292" onClick={callPhoneNumber}>07.83.56.22.92</a>
        },

        {
            emoji: "📩",
            text: <a href={'mailto:Nathan.pinard95@gmail.com?subject=Travaillons ensemble sur un projet !'}>nathan.pinard95@gmail.com</a> 
        }

        
    ],
    socials: [

        {
            link: "https://github.com/YOUGBOY95",
            icon: "fa fa-github",
            label: 'github'
        },

        {
            link: "https://codepen.io/YOUNGBOY95",
            icon: "fa fa-codepen",
            label: 'codepen'
        },

        {
            link: "https://stackoverflow.com/users/20169507/nathan",
            icon: "fa fa-stack-overflow",
            label: 'stack-overflow'
        },


        {
            link: "https://www.linkedin.com/in/nathan-pinard-5627651b8/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/Kawwws_",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: "Bonjour ! Je suis Nathan Pinard. Je suis un développeur Front - End basé en région parisienne. J'ai toujours pris du plaisir à imaginer et à réaliser des choses de mes propres mains, et ce, de différentes manières.",
   // "S'efforcer de construire des choses qui font la différence !
    
    skills:
        {
            
            proficientWith: ['HTML5 ', 'CSS3', 'SASS', 'PHP', 'GRAPHQL', 'MYSQL', 'JAVASCRIPT', 'TYPESCRIPT', 'REACT', 'NEXT.JS', 'NODE.JS','TAILWIND' ,'BOOTSTRAP'],
            exposedTo: ['FIGMA', 'CANVA', 'ADOBE PHOTOSHOP', 'ADOBE PREMIÈRE PRO', 'ADOBE ILLUSTRATOR',]
        }
    ,
    hobbies: [
        {
            label: 'LES MANGAS',
            emoji: '📚'
        },
        {
            label: "L'ART",
            emoji: '🎭'
        },
        {
            label: "LES VOYAGES",
            emoji: '🌎'
        },
        {
            label: "LES SNEAKERS",
            emoji: '👟'
        },

        {
            label: "LES JEUX",
            emoji: '🎲'
        },


        {
            label: "LE BASKETS",
            emoji: '🏀'
        },

        {
            label: "LE FOOTBALL AMÉRICAIN",
            emoji: '🏈'
        },

        {
            label: "LA MUSCULATION",
            emoji: '🏆'
        },
        {
            label: 'LE MONTAGE VIDÉO',
            emoji: '🎥'
        },
        
        {
            label: 'LA MUSIQUE',
            emoji: '🎵'
        }

    ],
    portfolio: [ 
        {
            title: "SPACE - INVADERS",
            live: "https://space-invaders-youngboy.netlify.app/",
            source: "https://github.com/YOUGBOY95/Space-invaders/tree/Pinard-Nathan/Space-invaders", 
            image: mock1
        },
        {
            title: "POKÉDEX - APP",
            live: "https://pokedexxapp.netlify.app/",
            source: "https://github.com/YOUGBOY95/PokeApp",
            image: mock2
        },
        {
            title: "JEU DE MÉMOIRE",
            live: "https://youngboy-game.netlify.app/",
            source: "https://github.com/YOUGBOY95/Jeu-de-m-moire",
            image: mock3
        },
        {
            title: "CALCULATRICE",
            live: "https://calculatricetest.netlify.app/",
            source: "https://github.com/YOUGBOY95/Calculatrice-React.JS",
            image: mock4
        },
        {
            title: "MORPION",
            live: "https://morpiongame.netlify.app/",
            source: "https://github.com/YOUGBOY95/Morpion",
            image: mock5
        },

        {
            title: "ECOMAP",
            live: "https://www.figma.com/proto/SELGWIlBrSMJ0Bqe02toWk/Eco---Map?type=design&node-id=281-4983&scaling=scale-down&page-id=89%3A1295&starting-point-node-id=250%3A3263",
            source: "https://www.figma.com/file/SELGWIlBrSMJ0Bqe02toWk/Eco---Map?type=design&node-id=281%3A4983&t=OjyPlSWSUoLPxc2a-1",
            image: mock6
        }
    ]
}