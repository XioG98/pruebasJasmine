# Pruebas - INVESTIGACIÓN JASMINE JS

**Xiomara Garcia Rodriguez:** 
**ADSO:** 

---

## 📁 Estructura del Proyecto

```
calidad/
├── README.md                          # Este archivo
├── jasmine-ejemplo/                   # Ejemplo práctico funcional
│   ├── package.json                   # Configuración del proyecto
│   ├── calculadora.html               # Interfaz web de la calculadora
│   ├── css/
│   │   └── calculadora.css           # Estilos CSS
│   ├── js/
│   │   └── calculadora.js            # JavaScript de la interfaz
│   ├── spec/                          # Carpeta de pruebas
│   │   ├── support/
│   │   │   └── jasmine.json          # Configuración Jasmine
│   │   └── calculadoraSpec.js        # Pruebas de calculadora
│   └── src/                          # Código fuente
│       └── calculadora.js            # Clase calculadora
└── .github/
```

## Guía de Instalación y Uso

### Prerrequisitos
- **Node.js** v14.0.0 o superior
- **npm** v6.0.0 o superior
- **Sistema operativo**: Linux, Windows, o macOS

### Instalación en Linux

```bash
# 1. Clonar o descargar el proyecto
cd jasmine-ejemplo

# 2. Instalar dependencias
npm install

# 3. Ejecutar todas las pruebas
npm test

# 4. Ejecutar pruebas específicas
npm run test:calculadora

# 5. Modo watch (opcional)
npm run test:watch
```

### Verificación de Funcionamiento

El proyecto incluye **25 pruebas** para la clase Calculadora que cubren:
- Operaciones básicas (suma, resta, multiplicación, división)
- Validaciones de entrada y manejo de errores
- Funciones especiales (par/impar, factorial, potencia)

**Salida esperada:**
```
Started
.........................

34 specs, 0 failures
Finished in 0.025 seconds

Randomized with seed 12345
```

## Comandos Útiles

```bash
# Verificar instalación de Node.js
node --version && npm --version

# Instalar Jasmine globalmente (opcional)
npm install -g jasmine

# Inicializar nuevo proyecto Jasmine
npx jasmine init

# Ejecutar una prueba específica
npx jasmine spec/calculadoraSpec.js

# Ver ayuda de Jasmine
npx jasmine --help
```

### Comandos de Verificación Linux
```bash
# Verificar distribución
lsb_release -a

# Verificar estructura del proyecto
tree -I node_modules

# Verificar sintaxis de archivos
node -c src/calculadora.js
node -c src/gestorTareas.js

# Ejecutar con output detallado
npm test 2>&1 | tee test-output.log
```
