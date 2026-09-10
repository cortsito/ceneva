# arquitectura técnica

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

## stack recomendado

- next.js y typescript para la aplicación web.
- tailwind css para sistema visual rápido y consistente.
- supabase para autenticación y postgresql.
- vercel para despliegue.
- markdown con frontmatter para lecciones durante la primera etapa.

el stack puede cambiar si ya existe una base técnica útil del simulador. no conviene reescribir por preferencia tecnológica.

## decisiones de datos

- el contenido curricular vive versionado junto al código al inicio.
- las respuestas, progreso y perfil viven en la base de datos.
- cada lección y pregunta usa ids estables para conservar progreso aunque cambie el texto.
- los cálculos de progreso pueden hacerse en cliente al inicio y migrarse a funciones de base de datos solo si hace falta.

## integración con el simulador

idealmente se comparte el banco de preguntas mediante un paquete o fuente de datos común. si no es viable al inicio, se exporta una versión compatible y se conserva el mismo identificador de pregunta cuando exista.

la integración mínima es un enlace desde el análisis de resultados hacia `área > tema` dentro de ceneva. no requiere unificar aplicaciones ni cuentas en la primera entrega.

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
