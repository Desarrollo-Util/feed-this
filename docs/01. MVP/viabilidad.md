# Análisis de viabilidad

En este apartado se detallan las restricciones impuestas por sistemas de terceros que afectan al proyecto.

## Limitaciones de la API de Twitter por cuenta de usuario

- No se puede publicar dos tweets seguidos con el mismo contenido
	- ❓ Hay que estudiar si esta restricción se mantiene en el tiempo

- Si se intenta publicar un tweet con exactamente el mismo contenido que otro tweet publicado en un periodo de tiempo, que Twitter define como "reciente", la API nos devuelve un error 403.
	- ❓ No sabemos qué significa "reciente" para Twitter

- Se puede publicar un máximo de 2400 tweets / día, pero también existen limitaciones por cada ciclo de media hora.
	- ❓ Se sobreentiende que esto significa que no se puede publicar más de 50 tweets / media hora

- Un retweet cuenta como tweet para el conteo del máximo de tweets publicados