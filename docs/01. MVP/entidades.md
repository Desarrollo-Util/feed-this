# Entidades

Pendiente de definir todavía...

## User

| Nombre        		| Tipo          | Required	|
| ---------------------	| ------------- | :---:		|
| id  					| string  		|	✅		|
| email  				| string  		|	✅  		|	
| password  			| string  		|	✅  		|
| twitter_api_key  		| string  		|	✅  		|
| twitter_api_secret  	| string  		|	✅	  	|

<br/>
<br/>

## Publication

| Nombre        		| Tipo          	| Required	|
| ----------------- 	| -----------------	| :---:		|	
| id  					| string  			| ✅		|
| status  				| PublicationStatus | ✅  	|
| createdAt  			| Date  			| ✅  	|
| publishDate  			| Date				| ❌  	|
| posts  				| Post [ ]			| ✅  	|

<br/>
<br/>

## PublicationStatus

Enum
| Valor        | Descripción 						|
| -------------	| ---------------------------------	|
| DRAFT			| Creado, sin fecha de publicación 	|
| SCHEDULED  	| Programado para publicar			|
| PUBLISHED  	| Publicado							|

<br/>
<br/>

## Post

| Nombre        		| Tipo          	| Required	|
| ----------------- 	| -----------------	| :---:		|	
| content  				| string			| ✅  	|
| imageURL				| string  			| ✅  	|