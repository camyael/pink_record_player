let audio 
// boton play
const playBoton = document.getElementsByClassName('play')

// recorre todo los botones play
for(i of playBoton){
    i.addEventListener('click', function(){
        let cancion = this.getAttribute("id")
        audio = new Audio(`../music/${cancion}.mp3`)
        audio.play()
        brazoRotacion()
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
if(play_tocadiscos){
    play_tocadiscos.addEventListener('click', reproducirAleatorio)
}


const stop_tocadiscos = document.querySelector('.boton_stop')
if(stop_tocadiscos){
    stop_tocadiscos.addEventListener('click', ()=>{
        audio.pause() 
        brazo.classList.remove("brazo-rotacion")
    })
}

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

function brazoRotacion(){
    brazo.classList.add("brazo-rotacion")
}
