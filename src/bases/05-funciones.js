//Funciones

function saludar(nombre) {
    return `Hola ${nombre}`;
}

//Construccion de funciones recomendada
const saludar2 = function(nombre) {
    return `Hola ${nombre}`;
}

//Funcion con flecha
const saludar3 = (nombre) => {
    return `Hola ${nombre}`;
}

//Funcion flecha simplificada. Se utiliza cuando la funcion solo tiene un return
const saludar4 = (nombre) => `Hola ${nombre}`;

//Simplificada cuando el return es un objeto implicito
const getUser = () => ({
        id: 'ABC123',
        userName: "cdm0710"
    }
);

// saludar2 = 30;

// console.log(saludar("Goku"));
console.log(saludar3);
console.log(saludar3("Goku"));
console.log(saludar4("Vegueta"));
console.log(getUser());


//EJERCICIO
//1. Transformar a una funcion flecha
//2. tiene que retornar un objeto implicito
//3. pruebas

function getUserActivo(nombre) {
    return {
        id: 'ABC567',
        userName: nombre
    }
};

//Solucion
const getUserActivo2 = (nombre) => ({
    id: 'ABC567',
    userName: nombre
})

const userActivo = getUserActivo2("Duran");
console.log(userActivo);
