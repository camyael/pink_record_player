class Musica {
    constructor(artista, cancion) {
        this.artista= artista;
        this.cancion= cancion;
    }
}

let audio 
let indice 

const songs = []
const artista = []
const cancion = []
const disco = []

fetch('../json/listaMusica.json')
.then((response) => response.json())
.then(listaMusica => {
    listaMusica.forEach(musica => {
        songs.push(musica.src)
        artista.push(musica.artista)
        cancion.push(musica.cancion)
        disco.push(musica.imagen)
    });
})

// HISTORIAL DE CANCIONES
const histCanciones = []

// SE CONSULTA AL LOCALSTORAGE
localStorage.getItem("histCanciones") ?? histCanciones = JSON.parse(localStorage.getItem("histCanciones")) : localStorage.setItem("histCanciones", JSON.stringify(histCanciones))


const playBoton = document.getElementsByClassName('play')
const diseñoDisco = document.querySelector('.disco_diseño')
// recorre todos los botones play
for(i of playBoton){
    i.addEventListener('click', function(){
    const nombreCancion = this.getAttribute("id")
        audio = new Audio(`../music/${nombreCancion}.mp3`)
        indice = songs.indexOf(nombreCancion)
        diseño(indice)
        audio.play()
        brazoRotacion()

        const cancionObj = new Musica(`${artista[indice]}`, `${cancion[indice]}`)
        histCanciones.push(cancionObj)
        localStorage.setItem("histCanciones", JSON.stringify(histCanciones)) 
    })
}

function diseño(index) {
    diseñoDisco.style.backgroundImage = `url(../img/${disco[index]}.webp)`
    diseñoDisco.style.backgroundSize = "cover"
    diseñoDisco.style.backgroundPosition = "center"
}

//boton pausa
const pausaBoton = document.getElementsByClassName('pausa')

for(i of pausaBoton){
    i.addEventListener("click", function(){
        audio.pause()
        brazo.classList.remove("brazo-rotacion")
        diseñoDisco.classList.remove("animacion_vinilo")
        diseñoDisco.style.background = "radial-gradient(circle, #FFC2D4 10%,#FF9EBB 40%)"
    })
}

const play_tocadiscos = document.querySelector('.boton_play')
//boton play del tocadiscos
play_tocadiscos && play_tocadiscos.addEventListener('click', ()=>{
    reproducirAleatorio()
    Toastify({
        text: "Reproduciendo en aleatorio",
        duration: 4000,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #f15f79, #b24592)",
        }
      }).showToast();
})

// boton stop del tocadiscos
const stop_tocadiscos = document.querySelector('.boton_stop')
stop_tocadiscos && stop_tocadiscos.addEventListener('click', ()=>{
        audio.pause()
        diseñoDisco.style.background = "radial-gradient(circle, #FFC2D4 10%,#FF9EBB 40%)"
        brazo.classList.remove("brazo-rotacion")
        diseñoDisco.classList.remove("animacion_vinilo")
    })
  
function reproducirAleatorio() {
    const indiceMusica = Math.floor(Math.random() * songs.length)
    const randomCancion = songs[indiceMusica]
    diseñoDisco.style.backgroundImage = `url(../img/${disco[indiceMusica]}.webp)`

    audio = new Audio(`../music/${randomCancion}.mp3`)
    console.log(audio)
    audio.play()
    brazoRotacion()
    diseño(indiceMusica)
}

const brazo = document.querySelector(".brazo")
function brazoRotacion(){
    brazo.classList.add("brazo-rotacion")
    diseñoDisco.classList.add("animacion_vinilo")
}

// historial
const botonHistorial = document.querySelector(".botonHistorial")
const historialLateral = document.querySelector(".historial_lateral")
const botonSalir = document.querySelector(".botonSalir")
const botonEliminar = document.querySelector(".botonEliminar")

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

    botonSalir.addEventListener('click', ()=>{
        historialLateral.classList.remove("mostrar")
    })

    botonEliminar.addEventListener('click', () =>{
        localStorage.clear()
        divHistCanciones.innerHTML= "";
        histCanciones = []
    })
})
