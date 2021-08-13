const botonImagen = document.getElementById("botonImagen")
const botonTexto = document.getElementById("botonTexto")
const formularioImagen = document.getElementById("formularioImagen")
const formularioTexto = document.getElementById("formularioTexto")

// Funcion boton texto-imagen
botonTexto.onclick = () => {
    formularioImagen.style.display = ("none")
    formularioTexto.style.display = ("block")
}
botonImagen.onclick = () => {
    formularioImagen.style.display = ("block")
    formularioTexto.style.display = ("none")
}

// Funcion URL
const cambio = () => {
    const inputTexto  = document.getElementById("inputTexto").value
    const imagen = document.getElementById ("imagen")

    imagen.removeAttribute("scr")
    imagen.setAttribute("src",inputTexto)

}

inputTexto.onchange = cambio