const Calculadora = require('../src/calculadora');

describe('Calculadora - Pruebas Completas', function() {
    let calculadora;

    beforeEach(function() {
        calculadora = new Calculadora();
    });

    describe('Operaciones Básicas', function() {
        describe('Suma', function() {
            it('debería sumar dos números correctamente', function() {
                expect(calculadora.sumar(2, 3)).toBe(5);
                expect(calculadora.sumar(-10, 15)).toBe(5);
            });

            it('debería sumar números negativos correctamente', function() {
                expect(calculadora.sumar(-1, -1)).toBe(-2);
                expect(calculadora.sumar(-5, 3)).toBe(-2);
            });

            it('debería sumar con cero correctamente', function() {
                expect(calculadora.sumar(0, 0)).toBe(0);
                expect(calculadora.sumar(5, 0)).toBe(5);
                expect(calculadora.sumar(0, -3)).toBe(-3);
            });

            it('debería manejar números decimales correctamente', function() {
                expect(calculadora.sumar(0.1, 0.2)).toBeCloseTo(0.3);
                expect(calculadora.sumar(1.5, 2.5)).toBe(4);
            });
        });

        describe('Resta', function() {
            it('debería restar dos números positivos correctamente', function() {
                expect(calculadora.restar(5, 3)).toBe(2);
                expect(calculadora.restar(10, 10)).toBe(0);
            });

            it('debería manejar restas que resultan en negativos', function() {
                expect(calculadora.restar(3, 5)).toBe(-2);
                expect(calculadora.restar(0, 3)).toBe(-3);
            });
        });

        describe('Multiplicación', function() {
            it('debería multiplicar números positivos correctamente', function() {
                expect(calculadora.multiplicar(3, 4)).toBe(12);
                expect(calculadora.multiplicar(7, 6)).toBe(42);
            });

            it('debería manejar multiplicación por cero', function() {
                expect(calculadora.multiplicar(5, 0)).toBe(0);
                expect(calculadora.multiplicar(0, 8)).toBe(0);
            });

            it('debería manejar números negativos', function() {
                expect(calculadora.multiplicar(-2, 3)).toBe(-6);
                expect(calculadora.multiplicar(-4, -5)).toBe(20);
            });
        });

        describe('División', function() {
            it('debería dividir números correctamente', function() {
                expect(calculadora.dividir(10, 2)).toBe(5);
                expect(calculadora.dividir(15, 3)).toBe(5);
            });

            it('debería manejar divisiones con decimales', function() {
                expect(calculadora.dividir(7, 2)).toBe(3.5);
                expect(calculadora.dividir(1, 3)).toBeCloseTo(0.333, 2);
            });

            it('debería lanzar error al dividir entre cero', function() {
                expect(function() {
                    calculadora.dividir(5, 0);
                }).toThrowError('No se puede dividir entre cero');
            });
        });
    });

    describe('Validaciones de Entrada', function() {
        it('debería lanzar error con parámetros no numéricos en suma', function() {
            expect(function() {
                calculadora.sumar('a', 2);
            }).toThrowError('Los parámetros deben ser números');

            expect(function() {
                calculadora.sumar(null, 2);
            }).toThrowError('Los parámetros deben ser números');
        });

        it('debería lanzar error con parámetros no numéricos en resta', function() {
            expect(function() {
                calculadora.restar(undefined, 2);
            }).toThrowError('Los parámetros deben ser números');
            
            expect(function() {
                calculadora.restar('texto', 5);
            }).toThrowError('Los parámetros deben ser números');
            
            expect(function() {
                calculadora.restar(true, false);
            }).toThrowError('Los parámetros deben ser números');
        });

        it('debería lanzar error con parámetros no numéricos en multiplicación', function() {
            expect(function() {
                calculadora.multiplicar([], 2);
            }).toThrowError('Los parámetros deben ser números');
            
            expect(function() {
                calculadora.multiplicar('5', 3);
            }).toThrowError('Los parámetros deben ser números');
            
            expect(function() {
                calculadora.multiplicar({valor: 10}, 2);
            }).toThrowError('Los parámetros deben ser números');
        });

        it('debería lanzar error con parámetros no numéricos en división', function() {
            expect(function() {
                calculadora.dividir({}, 2);
            }).toThrowError('Los parámetros deben ser números');
            
            expect(function() {
                calculadora.dividir(new Date(), 5);
            }).toThrowError('Los parámetros deben ser números');
            
            expect(function() {
                calculadora.dividir(10, 'cero');
            }).toThrowError('Los parámetros deben ser números');
        });

        // Pruebas adicionales de validación más exhaustivas
        it('debería manejar valores extremos correctamente', function() {
            // Números muy grandes en suma
            expect(calculadora.sumar(Number.MAX_VALUE, 1)).toBe(Number.MAX_VALUE);
            
            // Números muy pequeños en suma
            expect(calculadora.sumar(Number.MIN_VALUE, 0)).toBe(Number.MIN_VALUE);
            
            // Infinito en operaciones básicas
            expect(calculadora.sumar(Infinity, 1)).toBe(Infinity);
            expect(calculadora.sumar(-Infinity, 1)).toBe(-Infinity);
            expect(calculadora.restar(Infinity, 1)).toBe(Infinity);
            expect(calculadora.restar(-Infinity, 1)).toBe(-Infinity);
            expect(calculadora.multiplicar(Infinity, 2)).toBe(Infinity);
            expect(calculadora.dividir(Infinity, 2)).toBe(Infinity);
        });

        it('debería manejar NaN correctamente en todas las operaciones', function() {
            // NaN debería producir NaN en operaciones matemáticas
            expect(calculadora.sumar(NaN, 5)).toBeNaN();
            expect(calculadora.restar(NaN, 3)).toBeNaN();
            expect(calculadora.multiplicar(NaN, 3)).toBeNaN();
            expect(calculadora.dividir(NaN, 2)).toBeNaN();
        });

        it('debería validar parámetros faltantes en todas las operaciones', function() {
            // Suma
            expect(function() {
                calculadora.sumar();
            }).toThrowError('Los parámetros deben ser números');
            
            expect(function() {
                calculadora.sumar(5);
            }).toThrowError('Los parámetros deben ser números');

            // Resta
            expect(function() {
                calculadora.restar();
            }).toThrowError('Los parámetros deben ser números');
            
            expect(function() {
                calculadora.restar(5);
            }).toThrowError('Los parámetros deben ser números');

            // Multiplicación
            expect(function() {
                calculadora.multiplicar();
            }).toThrowError('Los parámetros deben ser números');
            
            expect(function() {
                calculadora.multiplicar(5);
            }).toThrowError('Los parámetros deben ser números');

            // División
            expect(function() {
                calculadora.dividir();
            }).toThrowError('Los parámetros deben ser números');
            
            expect(function() {
                calculadora.dividir(5);
            }).toThrowError('Los parámetros deben ser números');
        });

        it('debería validar tipos de datos específicos', function() {
            // Strings que parecen números
            expect(function() {
                calculadora.sumar('5', 3);
            }).toThrowError('Los parámetros deben ser números');
            
            // Booleanos
            expect(function() {
                calculadora.sumar(true, 5);
            }).toThrowError('Los parámetros deben ser números');
            
            // Fechas
            expect(function() {
                calculadora.sumar(new Date(), 5);
            }).toThrowError('Los parámetros deben ser números');
        });
    });

    describe('Función Par/Impar', function() {
        it('debería identificar números pares correctamente', function() {
            expect(calculadora.esParImpar(2)).toBe('par');
            expect(calculadora.esParImpar(0)).toBe('par');
            expect(calculadora.esParImpar(-4)).toBe('par');
            expect(calculadora.esParImpar(100)).toBe('par');
        });

        it('debería identificar números impares correctamente', function() {
            expect(calculadora.esParImpar(1)).toBe('impar');
            expect(calculadora.esParImpar(3)).toBe('impar');
            expect(calculadora.esParImpar(-5)).toBe('impar');
            expect(calculadora.esParImpar(99)).toBe('impar');
        });

        it('debería lanzar error con parámetros no numéricos', function() {
            expect(function() {
                calculadora.esParImpar('texto');
            }).toThrowError('El parámetro debe ser un número');
            
            expect(function() {
                calculadora.esParImpar(null);
            }).toThrowError('El parámetro debe ser un número');
            
            expect(function() {
                calculadora.esParImpar(undefined);
            }).toThrowError('El parámetro debe ser un número');
            
            expect(function() {
                calculadora.esParImpar([]);
            }).toThrowError('El parámetro debe ser un número');
            
            expect(function() {
                calculadora.esParImpar({});
            }).toThrowError('El parámetro debe ser un número');
        });

        it('debería manejar casos extremos en par/impar', function() {
            expect(calculadora.esParImpar(0)).toBe('par');
            expect(calculadora.esParImpar(Number.MAX_SAFE_INTEGER)).toBe('impar'); // 9007199254740991 es impar
            expect(calculadora.esParImpar(Number.MIN_SAFE_INTEGER)).toBe('impar'); // -9007199254740991 es impar
        });
    });

    describe('Función Factorial', function() {
        it('debería calcular factoriales correctamente', function() {
            expect(calculadora.factorial(0)).toBe(1);
            expect(calculadora.factorial(1)).toBe(1);
            expect(calculadora.factorial(3)).toBe(6);
            expect(calculadora.factorial(5)).toBe(120);
        });

        it('debería lanzar error con números negativos', function() {
            expect(function() {
                calculadora.factorial(-1);
            }).toThrowError('El parámetro debe ser un número entero no negativo');
        });

        it('debería lanzar error con números decimales', function() {
            expect(function() {
                calculadora.factorial(3.5);
            }).toThrowError('El parámetro debe ser un número entero no negativo');
            
            expect(function() {
                calculadora.factorial(2.1);
            }).toThrowError('El parámetro debe ser un número entero no negativo');
            
            expect(function() {
                calculadora.factorial(-1.5);
            }).toThrowError('El parámetro debe ser un número entero no negativo');
        });

        it('debería lanzar error con parámetros no numéricos en factorial', function() {
            expect(function() {
                calculadora.factorial('5');
            }).toThrowError('El parámetro debe ser un número entero no negativo');
            
            expect(function() {
                calculadora.factorial(null);
            }).toThrowError('El parámetro debe ser un número entero no negativo');
            
            expect(function() {
                calculadora.factorial(undefined);
            }).toThrowError('El parámetro debe ser un número entero no negativo');
            
            expect(function() {
                calculadora.factorial([]);
            }).toThrowError('El parámetro debe ser un número entero no negativo');
        });

        it('debería manejar casos extremos en factorial', function() {
            expect(calculadora.factorial(0)).toBe(1);
            expect(calculadora.factorial(1)).toBe(1);
            // Factorial de números grandes puede causar overflow, pero la función debería manejarlo
            expect(calculadora.factorial(10)).toBe(3628800);
        });
    });

    describe('Función Potencia', function() {
        it('debería calcular potencias correctamente', function() {
            expect(calculadora.potencia(2, 3)).toBe(8);
            expect(calculadora.potencia(5, 2)).toBe(25);
            expect(calculadora.potencia(10, 0)).toBe(1);
        });

        it('debería manejar exponentes negativos', function() {
            expect(calculadora.potencia(2, -2)).toBe(0.25);
            expect(calculadora.potencia(4, -1)).toBe(0.25);
        });

        it('debería lanzar error con parámetros no numéricos', function() {
            expect(function() {
                calculadora.potencia('base', 2);
            }).toThrowError('Ambos parámetros deben ser números');
            
            expect(function() {
                calculadora.potencia(2, 'exponente');
            }).toThrowError('Ambos parámetros deben ser números');
            
            expect(function() {
                calculadora.potencia(null, 2);
            }).toThrowError('Ambos parámetros deben ser números');
            
            expect(function() {
                calculadora.potencia(2, undefined);
            }).toThrowError('Ambos parámetros deben ser números');
            
            expect(function() {
                calculadora.potencia([], {});
            }).toThrowError('Ambos parámetros deben ser números');
        });

        it('debería validar parámetros faltantes en potencia', function() {
            expect(function() {
                calculadora.potencia();
            }).toThrowError('Ambos parámetros deben ser números');
            
            expect(function() {
                calculadora.potencia(5);
            }).toThrowError('Ambos parámetros deben ser números');
        });

        it('debería manejar casos extremos en potencia', function() {
            expect(calculadora.potencia(0, 0)).toBe(1); // 0^0 = 1 por convención matemática
            expect(calculadora.potencia(1, 1000)).toBe(1); // 1 elevado a cualquier potencia es 1
            expect(calculadora.potencia(2, 0)).toBe(1); // Cualquier número elevado a 0 es 1
            expect(calculadora.potencia(-2, 2)).toBe(4); // Número negativo elevado a potencia par
            expect(calculadora.potencia(-2, 3)).toBe(-8); // Número negativo elevado a potencia impar
        });
    });
});
