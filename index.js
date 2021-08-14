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
	navModoOscuro.classList.toggle("nav-modo-oscuro");
	mainModoOscuro.classList.toggle("main-modo-oscuro");
	asideModoOscuro.classList.toggle("aside-modo-oscuro");
	// Recorro la colección HTML para hacer toggle de cada uno de los botones
	for (let i = 0; i < botonesNavOscuro.length; i++) {
		botonesNavOscuro[i].classList.toggle("boton-nav-oscuro");
	}

};

// Funcion URL
const cambio = () => {
	const inputTexto = document.getElementById("inputTexto").value;
	const imagen = document.getElementById("imagen");

	imagen.removeAttribute("src");
	imagen.setAttribute("src", inputTexto);
};

inputTexto.onchange = cambio;
