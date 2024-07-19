function saludar() {
    console.log("papapollo pollopapa")
}
saludar();

function mostrarNombre() {
    let nombre = prompt("Ingresa tu nombre");
    return nombre;
}

let nombre = mostrarNombre();
console.log("El nombre ingresado es: " + nombre);
