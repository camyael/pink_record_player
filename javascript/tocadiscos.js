class Musica {
    constructor(artista, cancion) {
        this.artista= artista;
        this.cancion= cancion;
    }
}

let audio 
let indice 

// obtiene los datos json para separarlos en nuevos arrays
const songs = []
const artista = []
const cancion = []
const disco = []

//guardando artistas con su cancion
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
let histCanciones = []

// SE CONSULTA AL LOCALSTORAGE
localStorage.getItem("histCanciones") ? histCanciones = JSON.parse(localStorage.getItem("histCanciones")) : localStorage.setItem("histCanciones", JSON.stringify(histCanciones))

// boton play
const playBoton = document.getElementsByClassName('play')
const diseñoDisco = document.querySelector('.disco_diseño')

// recorre todos los botones play
for(i of playBoton){
    i.addEventListener('click', function(){
    const nombreCancion = this.getAttribute("id")
        audio = new Audio(`../music/${nombreCancion}.mp3`)
        indice = songs.indexOf(nombreCancion)
        audio.play()
        brazoRotacion()
        //se guarda en la array y de ahí al localstorage
        const cancionObj = new Musica(`${artista[indice]}`, `${cancion[indice]}`)
        histCanciones.push(cancionObj)
        localStorage.setItem("histCanciones", JSON.stringify(histCanciones))
        
        diseño(indice)
    })
}

//boton pausa
const pausaBoton = document.getElementsByClassName('pausa')

for(i of pausaBoton){
    i.addEventListener("click", function(){
        audio.pause()
        // remueve la clase y el brazo del tocadiscos vuelve a su lugar
        brazo.classList.remove("brazo-rotacion")
        diseñoDisco.style.background = "radial-gradient(circle, #FFC2D4 10%,#FF9EBB 40%)"
    })
}

//boton play del tocadiscos
const play_tocadiscos = document.querySelector('.boton_play')

play_tocadiscos && play_tocadiscos.addEventListener('click', ()=>{
    reproducirAleatorio()
    // <----- LIBRERIA TOASTIFY----->
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
    })

// funcion para cambiar imagen en el vinilo
function diseño(index) {
    diseñoDisco.style.backgroundImage = `url(../img/${disco[index]}.webp)`
    diseñoDisco.style.backgroundSize = "cover"
    diseñoDisco.style.backgroundPosition = "center"
}
  
// cuando se reproduce en aleatorio aleatorio
function reproducirAleatorio() {
    //devuelve un numero al azar
    let indiceMusica = Math.floor(Math.random() * songs.length)
    //devuelve el nombre del indice del array
    let randomCancion = songs[indiceMusica]
    diseñoDisco.style.backgroundImage = `url(../img/${disco[indiceMusica]}.webp)`
    //el audio toma lo de la array 
    audio = new Audio(`../music/${randomCancion}.mp3`)
    console.log(audio)
    audio.play()
    brazoRotacion()
    diseño(indiceMusica)
}

// rotacion del brazo del tocadiscos cuando suena la cancion
const brazo = document.querySelector(".brazo")

function brazoRotacion(){brazo.classList.add("brazo-rotacion")}

// boton de historial
const botonHistorial = document.querySelector(".botonHistorial")
const historialLateral = document.querySelector(".historial_lateral")
const botonSalir = document.querySelector(".botonSalir")
const botonEliminar = document.querySelector(".botonEliminar")

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

    botonSalir.addEventListener('click', ()=>{
        historialLateral.classList.remove("mostrar")
    })

    botonEliminar.addEventListener('click', () =>{
        localStorage.clear()
        divHistCanciones.innerHTML= "";
        histCanciones = []
    })
})
