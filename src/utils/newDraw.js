// fonction qui génère un chiffre aléatoire entre min et max
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

let drawNumbers = [];
let drawStars = [];

//fonction qui crée un tirage de numéros aléatoires
const newNumbers = () => {
    drawNumbers = [];
    for(let i = 0 ; drawNumbers.length < 5 ; i++){
        let newInt = getRandomInt(1, 50);
    
        if(!drawNumbers.find( e => e === newInt)){
            drawNumbers.push(newInt);
        }
    }
    return drawNumbers;
}

//fonction qui crée un tirage d'étoiles aléatoires
const newStars = () => {
    drawStars = [];

    for(let i = 0 ; drawStars.length < 2 ; i++){
        let newInt = getRandomInt(1, 13);
    
        if(!drawStars.find( e => e === newInt)){
            drawStars.push(newInt);
        }
    }
    return drawStars;
}

export const newDraw = () => {
    return {
        numbers: newNumbers(),
        stars: newStars(),
    }
}