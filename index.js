const botonImagen = document.getElementById("botonImagen");
const botonTexto = document.getElementById("botonTexto");
const formularioImagen = document.getElementById("formularioImagen");
const formularioTexto = document.getElementById("formularioTexto");
const modoOscuro = document.querySelector("#modoOscuro");
const navModoOscuro = document.querySelector("nav");
const mainModoOscuro = document.querySelector("main");
const asideModoOscuro = document.querySelector("aside");
const botonesNavOscuro = document.getElementsByClassName("boton-nav");
const cajaImagenMeme = document.getElementById("imagen");
const filtroBrillo = document.getElementById("brillo");
const filtroOpacidad = document.getElementById("opacidad");
const filtroContraste = document.getElementById("contraste");
const filtroDesenfoque = document.getElementById("desenfoque");
const filtroEscalaDeGrises = document.getElementById("escala-grises");
const filtroSepia = document.getElementById("sepia");
const filtroHue = document.getElementById("hue");
const filtroSaturado = document.getElementById("saturado");
const filtroNegativo = document.getElementById("negativo");
const reestablecerFiltros = document.getElementById("botonRestablecer");
const colorDeFondo = document.getElementById("selectorColoresFondo");
const cambiarColor = document.getElementById("selectorColor");
const topTextP = document.getElementById("top-text-p");
const bottomTextP = document.getElementById("bottom-text-p");
const textAreaSuperior = document.getElementById("superior");
const textAreaInferior = document.getElementById("inferior");
const colorLetra = document.getElementById("color-letra");
const colorFondo = document.getElementById("color-fondo");
const descargaMeme = document.getElementById("meme-descarga");
const checkboxTransparente = document.getElementById("fondo-transparente");
const cambiarFuente = document.getElementById("selectorFuente");
const tamañoFuente = document.getElementById("tamanioFuente");
const contornoNinguno = document.getElementById("contorno-ninguno")
const contornoClaro = document.getElementById("contorno-claro")
const contornoOscuro = document.getElementById("contorno-oscuro")
const checkboxSuperior = document.getElementById("checkbox-texto-superior")
const checkboxInferior = document.getElementById("checkbox-texto-inferior")

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
    imagen.style.backgroundImage = `url(${inputTexto})`;
};

inputTexto.oninput = cambio;

//Funcion cambiar filtros
const cambioFiltro = () => {
    const brillo = filtroBrillo.value;
    const opacidad = filtroOpacidad.value;
    const contraste = filtroContraste.value;
    const desenfoque = filtroDesenfoque.value;
    const escala = filtroEscalaDeGrises.value;
    const sepia = filtroSepia.value;
    const hue = filtroHue.value;
    const saturado = filtroSaturado.value;
    const negativo = filtroNegativo.value;
    cajaImagenMeme.style.filter = `brightness(${brillo}) opacity(${opacidad}) contrast(${contraste}%) blur(${desenfoque}px) grayscale(${escala}%) sepia(${sepia}%) hue-rotate(${hue}deg) saturate(${saturado}%) invert(${negativo})`;
};
filtroBrillo.onchange = cambioFiltro;
filtroOpacidad.onchange = cambioFiltro;
filtroContraste.onchange = cambioFiltro;
filtroDesenfoque.onchange = cambioFiltro;
filtroEscalaDeGrises.onchange = cambioFiltro;
filtroSepia.onchange = cambioFiltro;
filtroHue.onchange = cambioFiltro;
filtroSaturado.onchange = cambioFiltro;
filtroNegativo.onchange = cambioFiltro;

// Funcion restablacer filtros

reestablecerFiltros.onclick = () => {
    filtroBrillo.value = 1;
    filtroOpacidad.value = 1;
    filtroContraste.value = 100;
    filtroDesenfoque.value = 0;
    filtroEscalaDeGrises.value = 0;
    filtroSepia.value = 0;
    filtroHue.value = 0;
    filtroSaturado.value = 100;
    filtroNegativo.value = 0;
    cajaImagenMeme.style.backgroundColor = "black";
    cajaImagenMeme.style.backgroundBlendMode = "unset";

    cambioFiltro();
    return false;
};

//Funcion selector de color
cambiarColorImagen = (event) => {
    cajaImagenMeme.style.backgroundColor = event.target.value;
};
cambiarColor.onchange = cambiarColorImagen;

//Funcion cambiar color de fondo

cambiarColorDeFondo = (event) => {
    cajaImagenMeme.style.backgroundBlendMode = event.target.value;
};
colorDeFondo.onchange = cambiarColorDeFondo;

// funciones cambiar p
textAreaSuperior.oninput = () => {
    topTextP.textContent = textAreaSuperior.value;
};
textAreaInferior.oninput = () => {
    bottomTextP.textContent = textAreaInferior.value;
};

// funcion color letra

colorLetra.oninput = () => {
    topTextP.style.color = colorLetra.value;
    bottomTextP.style.color = colorLetra.value;
};

// funcion color fondo
colorFondo.oninput = () => {
    topTextP.style.backgroundColor = colorFondo.value;
    bottomTextP.style.backgroundColor = colorFondo.value;
};

//Funcion descargar meme
descargarMeme = () => {
    domtoimage
        .toBlob(document.getElementById("caja-del-meme"))
        .then(function(blob) {
            window.saveAs(blob, "meme-descargado.png");
        });
};

descargaMeme.onclick = descargarMeme;

// Funcion transparencia en texto

const transparente = () => {
    topTextP.classList.toggle("top-transparencia");
    bottomTextP.classList.toggle("bottom-transparencia");

    console.log(topTextP);
    console.log(bottomTextP);
};
checkboxTransparente.addEventListener("click", transparente);

// funcion desaparecer texto superior e inferior
// display none p superior

const textoSuperiorNone = () => {
    topTextP.classList.toggle("top-none")
}

checkboxSuperior.addEventListener("click", textoSuperiorNone)

// display none interior

const textoInferiorNone = () => {
    bottomTextP.classList.toggle("bottom-none")

}

checkboxInferior.addEventListener("click", textoInferiorNone)

//Funcion cambiar fuente de texto

cambiarTipoFuente = (event) => {
    topTextP.style.fontFamily = event.target.value;
    bottomTextP.style.fontFamily = event.target.value;
};
cambiarFuente.onchange = cambiarTipoFuente;

//funcion cambiar tamaño de fuente

cambiarTamaño = (event) => {
    topTextP.style.fontSize = `${event.target.value}px`;
    bottomTextP.style.fontSize = `${event.target.value}px`;
};
tamañoFuente.onclick = cambiarTamaño;

// Funcion contorno
contornoNinguno.onclick = () => {
    topTextP.style.webkitTextStroke = "0px transparent"
    bottomTextP.style.webkitTextStroke = "0px transparent"
    return false
}
contornoClaro.onclick = () => {
    topTextP.style.webkitTextStroke = " 1.5px white"
    bottomTextP.style.webkitTextStroke = "1px white"
    return false
}
contornoOscuro.onclick = () => {
    topTextP.style.webkitTextStroke = " 1.5px black"
    bottomTextP.style.webkitTextStroke = "1px black"
    return false
}