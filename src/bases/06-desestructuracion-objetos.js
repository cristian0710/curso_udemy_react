//DESESTRUCTURACION DE OBJETOS || ASIGNACION DESESTRUCTURANTE

const persona = {
    nombre: "Cristian",
    apellido: "Duran",
    edad: 35,
    clave: "cdm0710",
    sexo: "Masculino"
}

// console.log(persona.nombre);
// console.log(persona.apellido);
// console.log(persona.edad);
// console.log(persona.clave);



// const {nombre, clave, edad} = persona;

// console.log(nombre, clave, edad);

const imprimePersona = (user) => {
    const {nombre, clave, edad} = user;
    console.log(nombre, clave, edad);
}

imprimePersona(persona);


const imprimePersona2 = ({nombre, edad, clave, sexo = "masculino"}) => {
    return `${nombre} ${clave} ${edad} ${sexo}`;
}

console.log(imprimePersona2(persona));

const imprimePersona3 = ({nombre, edad, clave, apellido, sexo = "Femenino"}) => {
    return {
        name: nombre,
        pass: clave,
        age: edad,
        lastName: apellido,
        sex: sexo,
        geo: {
            lat: -5421256,
            long: 685952,
            polaridad: {
                norte: "europa",
                sur: "america del sur"
            }
        }
    }
}

// console.log(imprimePersona3(persona));
const avenger = imprimePersona3(persona);

console.log(avenger);

const {name, age, sex, geo:{lat, long, polaridad:{norte, sur}}} = imprimePersona3(persona);
console.log(name, age, sex, lat, long, norte, sur);


const imprimirPersona4 = ({name, lastName, geo:{polaridad:{sur}}}) => {
    return `El nombre es: ${name} y su apellido es: ${lastName} viven en el continente: ${sur}`;
}

console.log(imprimirPersona4(avenger));




