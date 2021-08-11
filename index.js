const botonImagen = document.getElementById("botonImagen")
const botonTexto = document.getElementById("botonTexto")
const formularioImagen = document.getElementById("formularioImagen")
const formularioTexto = document.getElementById("formularioTexto")

botonTexto.onclick = () => {
    formularioImagen.style.display = ("none")
    formularioTexto.style.display = ("block")
}
botonImagen.onclick = () => {
    formularioImagen.style.display = ("block")
    formularioTexto.style.display = ("none")
}