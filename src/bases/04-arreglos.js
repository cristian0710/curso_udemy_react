//Arreglos

// const arreglo = new Array();

const arreglo = [];

//Agregar datos al arreglo con push
arreglo.push(3);
arreglo.push(6);
arreglo.push(7);
arreglo.push(8);
arreglo.push(9);

let arreglo2 = [arreglo[0], arreglo[1], arreglo[2], arreglo[3], arreglo[4], 5];

//Utilizando el operador express "...[nombre array]"
let arreglo3 = [...arreglo, 150];

//Utilizar funcion map() en los arrays
let arreglo4 = arreglo3.map((numero) => {
    return numero;
});


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);


