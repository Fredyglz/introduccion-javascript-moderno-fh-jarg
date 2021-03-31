import {getHeroeById} from './temas/08-imp-exp'

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log('2 segundos despues')
//         // Tarea
//         // 1. Importen el
//         const heroe = getHeroeById(2);
//         // console.log(heroe);
//         resolve(heroe)
//         // reject('No se pudo encontrar el heroe');
//     }, 2000);
// });  

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })
// .catch(err => {
//     console.warn(err);
// })

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('2 segundos despues')
            // Tarea
            // 1. Importen el
            const heroe = getHeroeById(id);
            if(heroe)
                resolve(heroe)
            else
                reject('No se pudo encontrar el heroe');
            // console.log(heroe);
            // resolve(heroe)
            // reject('No se pudo encontrar el heroe');
        }, 2000);
    });  

    return promesa
}

getHeroeByIdAsync(4)
    .then((heroe) => console.log('Heroe', heroe))
    .catch((err) => console.warn(err));

getHeroeByIdAsync(4)
    .then(console.log)
    // Recibe como argumento el primer argumento que sea el que recibe el catch
    .catch(console.warn);