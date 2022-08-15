class Musica {
    constructor(artista, cancion) {
        this.artista= artista;
        this.cancion= cancion;
    }
}

let audio 
let indice 

// HISTORIAL DE CANCIONES
let histCanciones = []

// SE CONSULTA AL LOCALSTORAGE
// <---------- OPERADOR TERNARIO ---------->
localStorage.getItem("histCanciones") ? histCanciones = JSON.parse(localStorage.getItem("histCanciones")) : localStorage.setItem("histCanciones", JSON.stringify(histCanciones))


// boton play
const playBoton = document.getElementsByClassName('play')

// recorre todo los botones play
for(i of playBoton){
    i.addEventListener('click', function(){
    const nombreCancion = this.getAttribute("id")
        audio = new Audio(`../music/${nombreCancion}.mp3`)
        indice = songs.indexOf(nombreCancion)
        // console.log(indice)
        audio.play()
        brazoRotacion()
        //se guarda en la array y de ahí al localstorage
        const cancionObj = new Musica(`${artista[indice]}`, `${cancion[indice]}`)
        histCanciones.push(cancionObj)
        localStorage.setItem("histCanciones", JSON.stringify(histCanciones))

    })
}

//boton pausa
const pausaBoton = document.getElementsByClassName('pausa')

for(i of pausaBoton){
    i.addEventListener("click", function(){
        audio.pause()
        // remueve la clase y el brazo del tocadiscos vuelve a su lugar
        brazo.classList.remove("brazo-rotacion")
    })
}

//boton play del tocadiscos
const play_tocadiscos = document.querySelector('.boton_play')
// <---------- OPERADOR AND ---------->
play_tocadiscos && play_tocadiscos.addEventListener('click', reproducirAleatorio)

// boton stop del tocadiscos
const stop_tocadiscos = document.querySelector('.boton_stop')
// <---------- OPERADOR AND ---------->
stop_tocadiscos && stop_tocadiscos.addEventListener('click', ()=>{
        audio.pause() 
        brazo.classList.remove("brazo-rotacion")
    })

// cuando se reproduce en aleatorio aleatorio
function reproducirAleatorio() {
    //devuelve un numero al azar
    let indiceMusica = Math.floor(Math.random() * songs.length)
    //devuelve el nombre del indice del array
    let randomCancion = songs[indiceMusica]
    //el audio toma lo de la array 
    audio = new Audio(`../music/${randomCancion}.mp3`)
    console.log(audio)
    audio.play()
    brazoRotacion()
}

// rotacion del brazo del tocadiscos cuando suena la cancion
const brazo = document.querySelector(".brazo")

function brazoRotacion(){brazo.classList.add("brazo-rotacion")}

// boton de historial
const botonHistorial = document.querySelector(".botonHistorial")
const historialLateral = document.querySelector(".historial_lateral")
const botonSalir = document.querySelector(".botonSalir")
// llamado a donde van las canciones
const divHistCanciones = document.querySelector(".historial_lateral_canciones")

botonHistorial.addEventListener('click', ()=>{
    historialLateral.classList.add("mostrar")

    const cancionesGuardadas = JSON.parse(localStorage.getItem("histCanciones"))

    divHistCanciones.innerHTML= "";
    cancionesGuardadas.forEach(historial => {
        divHistCanciones.innerHTML += `
        <div class="plantilla_canciones">
            <div class="iconoMusica">
                <img src="https://img.icons8.com/glyph-neue/64/FFFFFF/headphones.png"/>
            </div>
            <div>
                <p>${historial.cancion}</p>
                <p>${historial.artista}</p>
            </div>
        </div>
        `
    })

    botonSalir.addEventListener('click', ()=>{ historialLateral.classList.remove("mostrar")})
})
