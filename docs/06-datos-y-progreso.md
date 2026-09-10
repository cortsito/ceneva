# datos y progreso

## entidades mínimas

```text
usuario
ruta de estudio
área
unidad
tema
lección
pregunta
intento de pregunta
sesión de estudio
simulacro
resultado de simulacro
repaso
```

## relaciones clave

- un tema contiene lecciones y preguntas.
- una pregunta pertenece a un tema principal.
- un intento registra respuesta, fecha, tiempo y si fue correcta.
- un resultado de simulacro agrupa intentos.
- un repaso existe porque un tema o pregunta necesita refuerzo.

## métricas útiles

- precisión por tema y área.
- lecciones completadas.
- temas dominados.
- tiempo de estudio reciente.
- preguntas pendientes de repaso.
- evolución entre simulacros.

## reglas iniciales de dominio

un tema se considera dominado cuando la persona completa su lección y logra al menos 80% de precisión en una muestra mínima de cinco preguntas. si luego baja de 60% en práctica o simulacro, vuelve a estado «en progreso» y se recomienda repaso.

estas reglas son simples y deben ajustarse con datos reales; no hace falta un modelo complejo para la primera versión.

## repaso

cada respuesta incorrecta crea una prioridad de repaso. el inicio muestra una cantidad manejable, por ejemplo cinco a diez preguntas, en vez de presentar una lista infinita.
