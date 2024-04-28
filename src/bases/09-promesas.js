//PROMESAS

import { getHeroeByOwner, getHeroeId } from "./bases/08-imports-exports";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //tarea
//         //import
//         const p1 = getHeroeId(2);
//         const p2 = getHeroeByOwner("DC");
//         resolve(p1, p2);
//     }, 5000);
// });


// promesa.then((heroe) => {
//     console.log(heroe);
// }).catch(err => console.warn(err));


// getHeroeId(4);

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //tarea
            //import
            const p1 = getHeroeId(id);
            // const p2 = getHeroeByOwner("DC");
            console.log(p1);
            if(p1){
                resolve(p1);
            }else{
                reject('El herue no fue encontrado');
            }
        }, 3000);
    });
}


getHeroeByIdAsync(4).then((heroe) => {
    console.log('Herue', heroe);
}).catch((err) => console.warn(err));
