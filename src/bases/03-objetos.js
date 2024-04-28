const persona = {
    nombre: "Cristian",
    apellido: "Duran",
    edad: 35,
    direccion: {
        ciudad: "Cartago",
        barrio: "Guayacanes",
        nomemclatura: "Kra 4 A Norte #22-28"
    }
} 

console.table(persona);

console.log(`nombre: ${persona.nombre}
apellido: ${persona.apellido}
edad: ${persona.edad}
direccion: ${persona.direccion}`);

//clonar un objeto
const persona2 = {...persona};
persona2.nombre = "Peter";
console.log(persona);
console.log(persona2);

