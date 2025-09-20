
// Instancia de la calculadora
const calc = new Calculadora();

// Función para mostrar resultados
function mostrarResultado(elementId, resultado, esError = false) {
    const elemento = document.getElementById(elementId);
    elemento.textContent = resultado;
    elemento.className = `result ${esError ? 'error' : 'success'}`;
}

// Operaciones básicas
function calcular(operacion) {
    try {
        const a = parseFloat(document.getElementById('numA').value);
        const b = parseFloat(document.getElementById('numB').value);
        
        if (isNaN(a) || isNaN(b)) {
            throw new Error('Por favor ingresa números válidos');
        }
        
        let resultado;
        let simbolo;
        
        switch(operacion) {
            case 'sumar':
                resultado = calc.sumar(a, b);
                simbolo = '+';
                break;
            case 'restar':
                resultado = calc.restar(a, b);
                simbolo = '-';
                break;
            case 'multiplicar':
                resultado = calc.multiplicar(a, b);
                simbolo = '×';
                break;
            case 'dividir':
                resultado = calc.dividir(a, b);
                simbolo = '÷';
                break;
            default:
                throw new Error('Operación no válida');
        }
        
        mostrarResultado('resultado-basicas', `${a} ${simbolo} ${b} = ${resultado}`);
        
    } catch (error) {
        mostrarResultado('resultado-basicas', `❌ Error: ${error.message}`, true);
    }
}

// Verificar par/impar
function verificarParImpar() {
    try {
        const num = parseFloat(document.getElementById('numEspecial').value);
        
        if (isNaN(num)) {
            throw new Error('Por favor ingresa un número válido');
        }
        
        const resultado = calc.esParImpar(num);
        const emoji = resultado === 'par' ? '✅' : '🔴';
        mostrarResultado('resultado-especiales', `${emoji} El número ${num} es ${resultado.toUpperCase()}`);
        
    } catch (error) {
        mostrarResultado('resultado-especiales', `❌ Error: ${error.message}`, true);
    }
}

// Calcular factorial
function calcularFactorial() {
    try {
        const num = parseFloat(document.getElementById('numEspecial').value);
        
        if (isNaN(num)) {
            throw new Error('Por favor ingresa un número válido');
        }
        
        const resultado = calc.factorial(num);
        mostrarResultado('resultado-especiales', `${num}! = ${resultado}`);
        
    } catch (error) {
        mostrarResultado('resultado-especiales', `❌ Error: ${error.message}`, true);
    }
}

// Calcular potencia
function calcularPotencia() {
    try {
        const base = parseFloat(document.getElementById('base').value);
        const exp = parseFloat(document.getElementById('exponente').value);
        
        if (isNaN(base) || isNaN(exp)) {
            throw new Error('Por favor ingresa números válidos');
        }
        
        const resultado = calc.potencia(base, exp);
        mostrarResultado('resultado-potencia', `${base}^${exp} = ${resultado}`);
        
    } catch (error) {
        mostrarResultado('resultado-potencia', `❌ Error: ${error.message}`, true);
    }
}

// Limpiar todos los resultados
function limpiarResultados() {
    const resultados = document.querySelectorAll('.result');
    resultados.forEach(resultado => {
        resultado.textContent = 'Resultado aparecerá aquí...';
        resultado.className = 'result neutral';
    });
}

// Función para limpiar todos los campos
function limpiarCampos() {
    document.getElementById('numA').value = '0';
    document.getElementById('numB').value = '0';
    document.getElementById('numEspecial').value = '5';
    document.getElementById('base').value = '2';
    document.getElementById('exponente').value = '3';
    limpiarResultados();
}

// Eventos para Enter en los inputs
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                // Determinar qué botón presionar basado en el input activo
                if (input.id === 'numA' || input.id === 'numB') {
                    calcular('sumar');
                } else if (input.id === 'numEspecial') {
                    verificarParImpar();
                } else if (input.id === 'base' || input.id === 'exponente') {
                    calcularPotencia();
                }
            }
        });
    });
    
    // Mensaje de bienvenida en consola
    console.log('Calculadora cargada exitosamente!');
    console.log('Todas las funciones disponibles y probadas');
});
