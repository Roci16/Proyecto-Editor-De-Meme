# Observaciones

Ro, Vic, felicitaciones por la entrega de su trabajo. Estoy muy contenta recorriendo su trabajo. Veo que solucionaron muy bien, de manera muy creativa algunos de los desafíos, y que el código no sacrifica legibilidad para alcanzar este objetivo. 

La mayor falla, y el mayor impacto en su nota, es que este TP no cumple con el diseño para los formularios ni es responsive. No se si tuvieron falta de tiempo, o no supieron hacerlo - si es el segundo caso, me escriben y lo vemos juntas? El diseño es sumamente importante en nuestra web, y nunca es opcional: debemos cumplirlo tal como nos lo da el modelo. Acostumbrarse a cumplirlo desde ya es importante ya que para conseguir sus primeros trabajos como desarrolladoras la mayoria de las empresas les dará un modelo a seguir, y deben cumplirlo a rajatabla. Mientras mas experiencia tengan en esto desde ahora, mejor. 

El responsive no es ni un agregado ni algo lindo para tener, es una necesidad imperiosa de todas las webs modernas. La inmensa mayoria de nuestros usuarios accederá a nuestra web desde dispositivos móviles y debemos darle a ellos la misma experiencia que a los demás. 

## Estructura correcta de documento HTML

Cumplido, noto muchas mejoras con respecto a sus respectivos portfolios, aunque aun hay cositas por mejorar que les dejo comentadas. 

## Respeta el diseño dado

No cumplido. Entiendo que el menú era desafiante, pero tomen en cuenta para futuros trabajos, y para el mundo laboral si desean seguir una carrera en esta industria, que el diseño nunca es optativo, ni una sugerencia: debemos seguirlo a rajatabla. Este punto es el que más puntaje les quita de la nota final, ya que si bien su codigo esta fantastico, consideramos este requisito muy importante para prepararlas para las exigencias de la industria. Si tienen dudas de como resolver el form no dejen de escribirme! 

## Respeta el funcionamiento

Cumplido con una excepcion. 

Si agrego algun filtro a la imagen, el div de texto superior desaparece, o se pone transparente, etc. Esto es porque tiene position absolute (que no esta mal en si), y la imagen lo ignora. El parrafo termina **por debajo** de la imagen y por eso la imagen lo tapa. Denle un z-index 1 al texto y este problema se arregla. 

## Responsive funciona correctamente

No cumplido. 

## Buena estructura de proyecto

Falta con urgencia un favicon. 

## Código bien indentado

Cumplido. 

## Comentarios que permiten mejorar la legibilidad del código

Cumplido. 

## Uso correcto de etiquetas semánticas

Cumplido.

## Buenos nombres de clases

Agregan mayusculas a sus nombres de clase en lugar de separar las palabras con-guiones, y usan etiquetas de html como nombres de ids. Salvo eso, noto una marcada mejora con respecto al primer TP. 

## Buenos nombres de funciones y variables

Cumplido. 

## Reutilización de estilos

Cumplido, dejo un par de comentarios en CSS. 

## Funciones pequeñas

Cumplido. 

## Accesibilidad

Marcada mejora con respecto a sus portfolios, pero repiten un error muy grave con los label. Un label ayuda en terminos de accesibilidad para describir un elemento de formulario como un input al lector de pantalla y para aumentar el espacio de cliqueo en dispositivos moviles.  
Para que el lector de pantalla y el navegador puedan saber que un label y un elemento de formulario estan relacionados, el label debe 
- o bien rodear al elemento
- o bien contar con un atributo "for" que haga referencia al **id** del elemento. 
En muchisimas ocasiones esto no se cumple en su trabajo y eso impacta en la accesibilidad. 

## Commits con mensajes adecuados

Cumplido.

# Nota final: 7
