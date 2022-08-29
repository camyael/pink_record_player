const nombreUsuario = document.querySelector(".nombre-de-usuario_inputText")
const entrarNombre = document.querySelector(".entrar_nombre")

if(nombreUsuario){
    nombreUsuario.addEventListener('input', function(){
        //con el value se toma el valor del input
        entrarNombre.innerText = `, ${nombreUsuario.value}`

        const enviar = document.querySelector(".nombre-de-usuario_enviar")
        enviar.addEventListener('click', ()=>{
            let bienvenida = document.querySelector('.entrar')
            bienvenida.classList.add("mostrar")
        })
    })
}