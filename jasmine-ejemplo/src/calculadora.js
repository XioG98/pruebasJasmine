class Calculadora {
    sumar(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Los parámetros deben ser números');
        }
        return a + b;
    }

    restar(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Los parámetros deben ser números');
        }
        return a - b;
    }

    multiplicar(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Los parámetros deben ser números');
        }
        return a * b;
    }

    dividir(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Los parámetros deben ser números');
        }
        if (b === 0) {
            throw new Error('No se puede dividir entre cero');
        }
        return a / b;
    }

    esParImpar(numero) {
        if (typeof numero !== 'number') {
            throw new Error('El parámetro debe ser un número');
        }
        return numero % 2 === 0 ? 'par' : 'impar';
    }

    factorial(n) {
        if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
            throw new Error('El parámetro debe ser un número entero no negativo');
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * this.factorial(n - 1);
    }

    potencia(base, exponente) {
        if (typeof base !== 'number' || typeof exponente !== 'number') {
            throw new Error('Ambos parámetros deben ser números');
        }
        return Math.pow(base, exponente);
    }
}

// Para Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculadora;
}
