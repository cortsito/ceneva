---
id: cd-medidas-de-seguridad-digital-01
area-id: cultura-digital
unit-id: cd-2-1-ciudadania-digital
topic-id: cd-2-1-5-medidas-de-seguridad-digital
title: medidas de seguridad digital
objective: seleccionar medidas de seguridad adecuadas frente a una amenaza digital.
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

# medidas de seguridad digital

## objetivo

seleccionar medidas de seguridad adecuadas según el riesgo detectado.

## explicación

una medida de seguridad es eficaz cuando responde al riesgo concreto y reduce la posibilidad de que se repita. algunas acciones básicas son:

- usar contraseñas largas, únicas y difíciles de adivinar, apoyadas por un gestor de contraseñas cuando sea posible.
- habilitar autenticación en dos factores para requerir una segunda verificación al iniciar sesión.
- actualizar sistema, aplicaciones y antivirus para corregir vulnerabilidades conocidas.
- verificar remitentes, direcciones web y archivos antes de abrirlos o proporcionar datos.
- cerrar sesiones en dispositivos compartidos y revisar los dispositivos con acceso a una cuenta.
- conservar respaldos de información importante para reducir el impacto de una pérdida o ransomware.

en un incidente de acceso no autorizado, la prioridad es recuperar el control de la cuenta: cambiar la contraseña, cerrar sesiones desconocidas y activar una segunda verificación.

## ejemplo resuelto

diego usó una computadora pública para revisar una red social. al día siguiente recibe un aviso de inicio de sesión desde un dispositivo que no reconoce.

1. el aviso indica posible acceso no autorizado a su cuenta.
2. debe cambiar de inmediato la contraseña por una nueva y única.
3. debe cerrar las sesiones que no reconoce y habilitar autenticación en dos factores.

estas acciones impiden que una contraseña antigua sea suficiente para volver a entrar y recuperan el control de la cuenta.

## error frecuente

no basta con borrar la caché de un dispositivo propio o eliminar una aplicación cuando existe un acceso no autorizado. esas acciones no invalidan la contraseña comprometida ni protegen los futuros intentos de inicio de sesión.

## práctica guiada

1. intenta primero: recibes un correo que pide actualizar datos de una cuenta mediante un enlace. ¿qué debes hacer antes de ingresar información?
   respuesta: verificar el remitente y la dirección web; si hay duda, entrar directamente al sitio oficial. no se deben proporcionar datos desde un enlace sospechoso.
2. intenta primero: una computadora se infecta y sus archivos quedan bloqueados. ¿qué medida previa reduce más la pérdida de información?
   respuesta: mantener respaldos actualizados en un lugar separado. un respaldo permite recuperar archivos sin depender del dispositivo afectado.

## comprobación

esta lección tiene cinco reactivos reservados en `question-ids`. al menos una pregunta debe evaluar la respuesta ante un inicio de sesión no reconocido: cambiar la contraseña y habilitar autenticación en dos factores, como el ejemplo oficial de este tema (`docs/guiaoficial.pdf`, página 29). sus enunciados, opciones, respuestas y explicaciones se incorporarán al banco tipado en el paso 4.

## cierre

ya puedes elegir medidas de seguridad según el riesgo. ante una alerta real, prioriza recuperar el control de la cuenta y prevenir un nuevo acceso, en lugar de aplicar acciones que no resuelven la causa.
