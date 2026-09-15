
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

un tema se considera dominado cuando la persona completa todas sus lecciones y logra al menos 80% de precisión en una muestra mínima de cinco preguntas. si luego baja de 60% en práctica o simulacro, vuelve a estado «en progreso» y se recomienda repaso.

estas reglas son simples y deben ajustarse con datos reales; no hace falta un modelo complejo para la primera versión.

### aplicación por etapa

la etapa 1 usó un umbral simétrico provisional: un tema piloto solo era `dominado` mientras mantenía al menos 80% de precisión. ese contrato cerró la vertical inicial y no se modifica de forma retroactiva.

la etapa 2 aplica la regla de producto completa. se alcanza `dominado` con todas las lecciones completadas, al menos cinco intentos y 80% o más de precisión. después, se conserva entre 60% y menos de 80%; solo vuelve a `en progreso` por debajo de 60%.

el estado no se persiste como otro dato. se deriva del historial ordenado de intentos: si el tema alcanzó el umbral de entrada en algún punto y su precisión actual no cayó por debajo del umbral de salida, permanece `dominado`.

## repaso

cada respuesta incorrecta crea o conserva una prioridad de repaso. una respuesta correcta posterior para la misma pregunta la retira. el inicio muestra una cantidad manejable, por ejemplo cinco a diez preguntas, en vez de presentar una lista infinita.
