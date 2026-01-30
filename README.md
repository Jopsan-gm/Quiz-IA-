# - Quiz de Desarrollo IA

Aplicación web para practicar preguntas de desarrollo para cualquier materia.

## Características

- **20 preguntas de desarrollo** basadas en el temario del examen
- **Navegación secuencial** entre preguntas
- **Campo de texto** para escribir respuestas
- **Verificación de respuestas** con respuestas correctas
- **Guardado automático** del progreso en el navegador
- **Navegación directa** a cualquier pregunta
- **Barra de progreso** visual
- **Diseño responsive** para móviles y tablets

## Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar en modo desarrollo:**
```bash
npm run dev
```

3. **Abrir en el navegador:**
```
http://localhost:3000
```

## Uso

1. **Ver pregunta:** Se muestra una pregunta a la vez
2. **Escribir respuesta:** Usar el campo de texto para desarrollar tu respuesta
3. **Verificar:** Hacer clic en "Ver respuesta correcta" para comparar
4. **Navegar:** Usar botones "Anterior" y "Siguiente" o la cuadrícula lateral
5. **Guardar:** Las respuestas se guardan automáticamente
6. **Progreso:** Seguimiento visual del avance en la barra lateral

## Estructura del Proyecto

```
src/
├── components/quiz/     # Componentes de la interfaz
├── hooks/              # Lógica de negocio
├── types/              # Definiciones de tipos
├── data/               # Datos de preguntas
├── pages/              # Páginas principales
└── styles/             # Estilos CSS
```

## Tecnologías

- React 18 + TypeScript
- Vite para desarrollo
- CSS Grid y Flexbox
- LocalStorage para persistencia

