//Templete String

const nombre = "Cristian";
const apellido = "Duran";

const nombreCompleto = `${nombre} 
${apellido}
cadenaTexto
${2 + 3}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return "Hola " + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);