// LLAMADO DE ELEMENTOS DEL DOM
const playBoton = document.getElementsByClassName('play')

let audio 

for(i of playBoton){
    i.addEventListener('click', function(){
        let cancion = this.getAttribute("id")
        audio = new Audio(`../music/${cancion}.mp3`)
        audio.play()
    })
}