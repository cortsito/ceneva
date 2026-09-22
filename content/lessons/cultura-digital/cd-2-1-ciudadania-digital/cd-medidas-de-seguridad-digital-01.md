---
id: cd-medidas-de-seguridad-digital-01
area-id: cultura-digital
unit-id: cd-2-1-ciudadania-digital
topic-id: cd-2-1-5-medidas-de-seguridad-digital
title: Medidas de seguridad digital
objective: Seleccionar medidas de seguridad adecuadas frente a una amenaza digital.
estimated-minutes: 12
prerequisites:
  - cd-amenazas-de-seguridad-digital-01
question-ids:
  - cd-ms-001
  - cd-ms-002
  - cd-ms-003
  - cd-ms-004
  - cd-ms-005
source:
  guide: docs/guiaoficial.pdf
  page: 12
  code: 2.1.5
---

# Medidas de seguridad digital

## Objetivo

Seleccionar medidas de seguridad adecuadas según el riesgo detectado.

## Explicación

Una medida de seguridad es eficaz cuando responde al riesgo concreto y reduce la posibilidad de que se repita. Algunas acciones básicas son:

- Usar contraseñas largas, únicas y difíciles de adivinar, apoyadas por un gestor de contraseñas cuando sea posible.
- Habilitar autenticación en dos factores para requerir una segunda verificación al iniciar sesión.
- Actualizar sistema, aplicaciones y antivirus para corregir vulnerabilidades conocidas.
- Verificar remitentes, direcciones web y archivos antes de abrirlos o proporcionar datos.
- Cerrar sesiones en dispositivos compartidos y revisar los dispositivos con acceso a una cuenta.
- Conservar respaldos de información importante para reducir el impacto de una pérdida o ransomware.

En un incidente de acceso no autorizado, la prioridad es recuperar el control de la cuenta: cambiar la contraseña, cerrar sesiones desconocidas y activar una segunda verificación.

## Ejemplo resuelto

Diego usó una computadora pública para revisar una red social. Al día siguiente recibe un aviso de inicio de sesión desde un dispositivo que no reconoce.

1. El aviso indica posible acceso no autorizado a su cuenta.
2. Debe cambiar de inmediato la contraseña por una nueva y única.
3. Debe cerrar las sesiones que no reconoce y habilitar autenticación en dos factores.

Estas acciones impiden que una contraseña antigua sea suficiente para volver a entrar y recuperan el control de la cuenta.

## Error frecuente

No basta con borrar la caché de un dispositivo propio o eliminar una aplicación cuando existe un acceso no autorizado. Esas acciones no invalidan la contraseña comprometida ni protegen los futuros intentos de inicio de sesión.

## Práctica guiada

1. Intenta primero: recibes un correo que pide actualizar datos de una cuenta mediante un enlace. ¿Qué debes hacer antes de ingresar información?
   Respuesta: verificar el remitente y la dirección web; si hay duda, entrar directamente al sitio oficial. No se deben proporcionar datos desde un enlace sospechoso.
2. Intenta primero: una computadora se infecta y sus archivos quedan bloqueados. ¿Qué medida previa reduce más la pérdida de información?
   Respuesta: mantener respaldos actualizados en un lugar separado. Un respaldo permite recuperar archivos sin depender del dispositivo afectado.

## Comprobación

Esta lección tiene cinco reactivos reservados en `question-ids`. Al menos una pregunta debe evaluar la respuesta ante un inicio de sesión no reconocido: cambiar la contraseña y habilitar autenticación en dos factores, como el ejemplo oficial de este tema (`docs/guiaoficial.pdf`, página 29). Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/cultura-digital.ts`.

## Cierre

Ya puedes elegir medidas de seguridad según el riesgo. Ante una alerta real, prioriza recuperar el control de la cuenta y prevenir un nuevo acceso, en lugar de aplicar acciones que no resuelven la causa.
