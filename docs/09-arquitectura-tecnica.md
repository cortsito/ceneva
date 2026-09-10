
## objetivo

construir rápido una aplicación mantenible, con contenido estructurado y progreso persistente. la arquitectura debe servir al curso; no se optimiza para escalamiento hipotético.

## propuesta inicial

```text
frontend web
├── interfaz y rutas
├── contenido de lecciones
└── lógica de práctica

backend gestionado
├── autenticación
├── base de datos
└── progreso del usuario

contenido editorial
└── markdown o json versionado en el repositorio
```

## stack

- next.js y typescript para la aplicación web.
- tailwind css para sistema visual rápido y consistente.
- supabase para autenticación y postgresql.
- vercel o github-pages para despliegue.
- markdown con frontmatter para lecciones durante la primera etapa.

## decisiones de datos

- el contenido curricular vive versionado junto al código al inicio.
- las respuestas, progreso y perfil viven en la base de datos.
- cada lección y pregunta usa ids estables para conservar progreso aunque cambie el texto.
- los cálculos de progreso pueden hacerse en cliente al inicio y migrarse a funciones de base de datos solo si hace falta.

## simulador

el simulador se hará desde 0, basándose en el examen simulacro oficial de la página oficial del CENEVAL.

## componentes principales

- `curriculum`: navega áreas, unidades, temas y lecciones.
- `lesson`: muestra bloques de contenido y comprobación.
- `practice`: selecciona preguntas y registra intentos.
- `progress`: calcula estado de temas y pendientes.
- `simulator bridge`: recibe o enlaza errores del simulador.

## límites del mvp

- sin cms externo.
- sin microservicios.
- sin motor de recomendaciones con ia.
- sin sincronización en tiempo real.

estas decisiones reducen costo y permiten enfocar esfuerzo en contenido y experiencia.
