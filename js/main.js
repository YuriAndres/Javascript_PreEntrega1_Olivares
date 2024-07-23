// ################################################################################
// ####### APLICACIÓN PARA CÁLCULO DE SOLUCIONES DE ECUACIONES CUADRÁTICAS ########
// ################################################################################
// ###### ALUMNO: YURI ANDRÉS OLIVARES - ENTREGA 1 - JAVASCRIPT - CODERHOUSE ######
// ################################################################################

/* se crea esta función con el propósito de poder calcular las soluciones de la ecuación cuadrática */
function calcularEcuacionCuadratica(a, b, c) {
    const discriminante = b * b - 4 * a * c;
    let x1, x2, textoExplicacion;

    /* acá se condiciona la solución a valores reales y distintos,
    esto pasa cuando el discriminante es mayor a cero */
    if (discriminante > 0) {
        x1 = ((-b + Math.sqrt(discriminante)) / (2 * a)).toFixed(3);
        x2 = ((-b - Math.sqrt(discriminante)) / (2 * a)).toFixed(3);
        textoExplicacion = 'La ecuación tiene dos soluciones reales y distintas';

    /* si no ocurre lo anterior, entonces se evalúa para cuando el discriminante 
    sea igual a cero, en cuyo caso, las soluciones son iguales y reales */
    } else if (discriminante === 0) {
        x1 = x2 = (-b / (2 * a)).toFixed(3);
        textoExplicacion = 'La ecuación tiene una solución real doble';
    
    /* el último caso se da cuando el discriminante es menor a cero (solución imaginaria),
    lo que entrega por solución dos resultados complejos */
    } else {
        const parteReal = (-b / (2 * a)).toFixed(3);
        const parteImaginaria = (Math.sqrt(-discriminante) / (2 * a)).toFixed(3);
        x1 = `${parteReal} + ${parteImaginaria}i`;
        x2 = `${parteReal} - ${parteImaginaria}i`;
        textoExplicacion = 'La ecuación tiene dos soluciones complejas conjugadas';
    }

    /* agregué un return para devolver y "guardar" el resultado de la operación */
    return { x1, x2, textoExplicacion };
}

/* lo incorporé para evitar que la página se recargue completa */
document.getElementById('formulario-cuadratica').onsubmit = function(evento) {
    evento.preventDefault();

    /* el usuario debe ingresar las 3 constantes de la ecuación cuadrática:
    a: para la parte cuadrada; b: para la parte lineal; c: la constante de la ecuación */
    const a = parseFloat(document.getElementById('valor-a').value);
    const b = parseFloat(document.getElementById('valor-b').value);
    const c = parseFloat(document.getElementById('valor-c').value);

    /* llama a la función con los parámetros entregados por el usuario */
    const resultados = calcularEcuacionCuadratica(a, b, c);

    /* se incorpora para entregar los resultados */
    document.getElementById('resultado-x1').textContent = `Valor de x1: ${resultados.x1}`;
    document.getElementById('resultado-x2').textContent = `Valor de x2: ${resultados.x2}`;
    document.getElementById('explicacion').textContent = resultados.textoExplicacion;
};
