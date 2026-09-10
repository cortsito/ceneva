
## definición de hecho para una feature

una feature está terminada cuando:

- cumple el comportamiento escrito en su criterio de aceptación.
- funciona en móvil y escritorio de forma razonable.
- no rompe lint, tipos ni pruebas existentes.
- tiene pruebas para sus reglas de negocio importantes.
- maneja estados vacíos, carga y error cuando aplican.
- no introduce dependencias o abstracciones innecesarias.
- su documentación se actualiza si cambió una decisión o contrato.

## pirámide de pruebas

### unitarias
prueban funciones puras: calcular estado de tema, seleccionar preguntas, registrar un intento y validar contenido. son prioridad porque son rápidas y estables.

### integración
prueban una interacción dentro de una feature: completar una lección, responder práctica y actualizar progreso local.

### end-to-end
prueban pocos flujos críticos: onboarding, completar una lección y recuperar progreso al recargar. no hace falta probar visualmente cada combinación.

## revisiones obligatorias

- probar teclado para navegación y respuestas.
- confirmar textos, contraste y jerarquía visual.
- revisar comportamiento en pantalla móvil.
- confirmar que la respuesta correcta y su explicación coinciden.
- comprobar que una actualización de contenido no rompe ids o progreso.

## ci inicial

en cada pull request o push principal deben correr:

```text
format check
lint
typecheck
test
build
```

la automatización no sustituye revisión humana, pero evita entregar errores básicos.
