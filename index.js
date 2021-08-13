const botonImagen = document.getElementById("botonImagen");
const botonTexto = document.getElementById("botonTexto");
const formularioImagen = document.getElementById("formularioImagen");
const formularioTexto = document.getElementById("formularioTexto");
const modoOscuro = document.querySelector("#modoOscuro");
const navModoOscuro = document.querySelector("nav");
const mainModoOscuro = document.querySelector("main");
const asideModoOscuro = document.querySelector("aside");
const botonesNavOscuro = document.getElementsByClassName("boton-nav");

// Funcion boton texto-imagen
botonTexto.onclick = () => {
	formularioImagen.style.display = "none";
	formularioTexto.style.display = "block";
};

botonImagen.onclick = () => {
	formularioImagen.style.display = "block";
	formularioTexto.style.display = "none";
};
//funcion modo claro, modo oscuro

modoOscuro.onclick = () => {
	console.log("cambiar modo");
	navModoOscuro.classList.remove("nav-modo-claro");
	navModoOscuro.classList.add("nav-modo-oscuro");
	console.log("hola");
	mainModoOscuro.classList.remove("main-modo-claro");
	mainModoOscuro.classList.add("main-modo-oscuro");
	asideModoOscuro.classList.remove("aside-modo-claro");
	asideModoOscuro.classList.add("aside-modo-oscuro");
	botonesNavOscuro.classList.remove("boton-nav");
	botonesNavOscuro.classList.add("botones-modo-oscuro");
};

// Funcion URL
const cambio = () => {
	const inputTexto = document.getElementById("inputTexto").value;
	const imagen = document.getElementById("imagen");

	imagen.removeAttribute("src");
	imagen.setAttribute("src", inputTexto);
};

inputTexto.onchange = cambio;
