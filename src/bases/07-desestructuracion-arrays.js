//DESESTRUCTURACION DE ARREGLOS

const personajes = ["Goku", "Vegueta", "Trunks", "Krilin"];

console.log(personajes);

//impresion con un for
const imprimirArray = (person) => {
    const aux = [];
    for(let i=0; i < person.length; i++){
        aux[i] = person[i]
        console.log(aux[i]);
    }
    return aux;
}

imprimirArray(personajes);
console.log(imprimirArray(personajes));

//impresion con un forEach

const imprimirArray2 = (arrayPersonas) => {
    arrayPersonas.forEach(element => {
        console.log(element);
    });
}

imprimirArray2(personajes);

//DESESTRUCTURACION 

const [p1, , , p2] = personajes;

console.log(p1, p2);


const returnaArreglo = () => {
    return ['ABC', 123];
}

const [arr1, arr2] = returnaArreglo();

console.log(arr2, arr1);


//TAREA
const usesState = (valor) => {
    return [valor, () => { console.log('Hola Mundo')}];
}

const arr3 = usesState('Cristian');

const [v1, setSaludo] = arr3;

console.log(v1);
setSaludo();