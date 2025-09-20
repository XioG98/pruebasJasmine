# Instalación y Ejecución en Linux

## Guía Paso a Paso Verificada

### 1. Preparación del Sistema

```bash
# Ubuntu/Debian
sudo apt update
sudo apt upgrade -y

# Instalar Node.js (método recomendado)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verificar instalación
node --version
npm --version
```

### 2. Configuración del Proyecto

```bash
# Navegar al directorio del ejemplo
cd jasmine-ejemplo

# Instalar dependencias
npm install

# Verificar estructura
ls -la
tree -I node_modules
```

### 3. Ejecución de Pruebas

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar con detalle verbose
npm run test:verbose

# Ejecutar pruebas específicas
npm run test:calculadora
npm run test:tareas
```

### 4. Salida Esperada

```
Started
........................................................

56 specs, 0 failures
Finished in 0.089 seconds

Randomized with seed 12345
```

### 5. Comandos de Verificación

```bash
# Verificar sintaxis
node -c src/calculadora.js
node -c spec/calculadoraSpec.js

# Verificar distribución Linux
lsb_release -a
uname -a
node --version && npm --version && npx jasmine –version

# Ver log completo
npm test 2>&1 | tee test-results.log
```
