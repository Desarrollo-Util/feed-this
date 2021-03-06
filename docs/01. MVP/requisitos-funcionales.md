## Descripci贸n

Sistema de programaci贸n de publicaci贸nes en RRSS(Twitter) que permita a trav茅s de una interfaz web gestionar y programar el contenido de tus cuentas.
<br/>
<br/>

## 馃摃 Definiciones

- Publicaci贸n: Es una pieza de contenido para una red social, que puede contener texto e im谩genes. Puede ser un post o un thread.

- Post: Una publicaci贸n simple.

  - M谩ximo 280 caracteres.
  - Puede contener 1 imagen en formato GIF, JPG o PNG.

- Thread: Es una agrupaci贸n 2 o m谩s posts, que mantiene un orden relativo entre ello.

<br/>
<br/>

## 馃搵 Requisitos funcionales

### Inicio de sesi贸n

- El usuario podr谩 iniciar sesi贸n en la plataforma mediante un nombre de usuario(email) y una contrase帽a.
- El usuario estar谩 previamente registrado en el sistema, y no se podr谩n registrar nuevos usuarios.

### Creaci贸n de publicaciones

- El usuario podr谩 crear publicaciones
- Las publicaciones podr谩n ser publicadas en el momento de su creaci贸n
- Las publicaciones podr谩n ser programadas para su publicaci贸n en una fecha y hora concretas
- La programaci贸n de publicaciones puede realizarse en el momento de su creaci贸n, o con posterioridad
- En caso de que una publicaci贸n no haya sido publicada, ni programada para su publicaci贸n, se marcar谩 como borrador
- El usuario podr谩 crear un n煤mero ilimitado de publicaciones en borrador
- El usuario podr谩 programar un n煤mero ilimitado de publicaciones

### Edici贸n de publicaciones

- El usuario podr谩 editar una publicaci贸n creada, siempre que esta no haya sido publicada.
- El usuario podr谩 eliminar una publicaci贸n creada, siempre que esta no haya sido publicada.

### Listado de publicaciones

- El usuario podr谩 listar las publicaciones creadas, independientemente de su estado
- El usuario podr谩 ordenar las publicaciones creadas por su fecha de publicaci贸n / programaci贸n.
- El usuario podr谩 filtrar el listado de publicaciones en base a su estado (borrador, programado, publicado)

### Redes sociales

- Las publicaciones podr谩n publicarse 煤nicamente en la red social Twitter
- Un usuario s贸lo puede vincular y realizar publicaciones para una 煤nica cuenta de la red social
