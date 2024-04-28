//IMPORT Y EXPORT DE FUNCIONES

import  heroes, {autos, multiplicar} from "../data/heroes";


heroes.forEach(element => {
    console.log(element.id, element.name, element.owner);
});

autos.forEach(element => {
    console.log(element);
});

console.log(heroes);

// const getHeroeId = (id) => {
//     return heroes.find((element) => {
//         if(element.id === id){
//             return console.log(element.name);
//         }else{
//             return false;
//         }
//     });
// }

// getHeroeId(2);


export const getHeroeId = (id) => {
    return heroes.find((element) => element.id === id );
}

console.log(getHeroeId(2));


// export const getHeroeId = (id) => {
//     return heroes.find((element) => element.id === id ? console.log(element.name) : false);
// }

// getHeroeId(2);


// const getHeroeByOwner = (owner) => {
//     return heroes.find((element) => element.name === owner );
// }

// console.log(getHeroeByOwner("Flash"));


export const getHeroeByOwner = (owner) => {
    return heroes.find((element) => element.owner === owner ? console.log(`id: ${element.id} herue: ${element.name}`) : false );
}

getHeroeByOwner("DC");

const getHeroeByOwner2 = (owner) => {
    return heroes.filter((element) => element.owner === owner ? console.log(`id: ${element.id} herue: ${element.name}`) : false );
}

getHeroeByOwner2("DC");

// console.log(multiplicar);

// multiplicar.forEach(element => {
//     const pares = [];
//     const impares = [];
//     if(element % 2 !== 0){
//         console.log(element);
//     }
// });

const numerosPares = ((numeros) => {
    const pares = [];
    multiplicar.forEach(element => {
        if(element % 2 === 0){
            pares.push(element)
        }
    });
    return pares;
});

const numerosImpares = ((numeros) => {
    const pares = [];
    multiplicar.forEach(element => {
        if(element % 2 !== 0){
            pares.push(element)
        }
    });
    return pares;
});

console.log(numerosPares(multiplicar));
console.log(numerosImpares(multiplicar));

const tablaMultiplicar = (numero) => {
    for (let i = 0; i < multiplicar.length; i++) {
        const element = multiplicar[i];
        console.log(`${numero} * ${element} = ${element * numero}`);
    }
}

tablaMultiplicar(5);






