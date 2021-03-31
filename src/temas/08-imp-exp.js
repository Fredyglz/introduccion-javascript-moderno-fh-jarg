// import {heroes} from './data/heroes';
import heroes, {owners} from '../data/heroes'
// console.log(heroes)
// console.log(owners)

// Find regres ale primer elemento que cumpla la condición
export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}

// console.log(getHeroeById(4));

// Filter regresa todos los elementos que cumplan la condición
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
// console.log(getHeroesByOwner('Marvel'))
// console.log(getHeroesByOwner('DC'))