
## decisión central

ceneva inicia como una aplicación web de next.js. el contenido curricular es estático y versionado; el progreso funciona localmente sin cuenta. supabase se conecta después, sin cambiar la experiencia básica.

## capas

```text
app
├── rutas y composición de pantallas
├── features
│   ├── curriculum
│   ├── lesson
│   ├── practice
│   ├── progress
│   ├── diagnostic
│   └── simulator
├── content
│   ├── curriculum
│   ├── lessons
│   └── questions
├── components
│   └── ui reutilizable
└── lib
    ├── storage
    ├── validation
    └── utilities
```

## responsabilidades

### app
contiene rutas, layouts y composición. no contiene reglas de negocio ni datos del temario.

### features
cada feature contiene sus componentes, tipos, funciones y pruebas. una feature no importa detalles internos de otra; se comunica mediante tipos y funciones públicas.

### content
es la fuente editorial. no conoce componentes ni estado del navegador. contiene markdown para lecciones y json o typescript para metadatos y preguntas.

### components
contiene piezas genéricas: botón, tarjeta, indicador de avance, modal y layout. no debe saber qué es una lección o una pregunta.

### lib
contiene infraestructura compartida. `storage` cambia entre localstorage y supabase sin obligar a reescribir las features.

## rutas iniciales

```text
/
/onboarding
/diagnostico
/ruta
/ruta/[area]
/leccion/[lesson-id]
/practica
/practica/[topic-id]
/simulacro
/progreso
```

no se necesitan rutas privadas en la primera versión. si un usuario inicia sesión después, su progreso local se ofrece para sincronización.

## patrón de estado

- el contenido es inmutable y se carga desde el repositorio.
- el progreso es estado de usuario y se persiste mediante un `progress repository`.
- los componentes leen estado mediante hooks de feature.
- las reglas de dominio viven en funciones puras y probables de probar.

ejemplo: `calculate-topic-status(attempts, lesson-completed)` devuelve el estado de un tema; no debe estar escrito dentro de una pantalla.

## regla de crecimiento

crear una feature nueva solo cuando una pantalla tenga una responsabilidad distinta. no extraer abstractions para casos que todavía no existen.
