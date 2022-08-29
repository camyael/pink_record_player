const nombreUsuario = document.querySelector(".nombre-de-usuario_inputText")
const entrarNombre = document.querySelector(".entrar_nombre")

if(nombreUsuario){
    nombreUsuario.addEventListener('input', function(){
        entrarNombre.innerText = `, ${nombreUsuario.value}`
        const enviar = document.querySelector(".nombre-de-usuario_enviar")
        
        enviar.addEventListener('click', ()=>{
            const bienvenida = document.querySelector('.entrar')
            bienvenida.classList.add("mostrar")
        })
    })
}