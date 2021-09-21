const animado=document.getElementById('animado');
const usuario=document.getElementById('input_usuario');
const password=document.getElementById('input_password');
const body = document.querySelector('body');
// ancho y alto de acuerdo a la resolucion de la pantalla
const ancho = window.innerWidth/2;
const alto = window.innerHeight/2;
//variable al mover el mouse
let seguirMouse = true;

body.addEventListener('mousemove',(movimiento)=>{
    if(seguirMouse){
        if(movimiento.clientX < ancho && movimiento.clientY < alto){
            animado.src = "img/mouse/2.png";
        } 
          if(movimiento.clientX < ancho && movimiento.clientY > alto){
            animado.src = "img/mouse/3.png";
        }
         if(movimiento.clientX > ancho && movimiento.clientY < alto){
            animado.src="img/mouse/5.png";
        }
        if(movimiento.clientX > ancho && movimiento.clientY > alto){
            animado.src="img/mouse/4.png";
        }
    }  
 })

 usuario.addEventListener('focus',()=>{
     seguirMouse=false;
 })

 usuario.addEventListener('blur',()=>{
    seguirMouse=true;
})

password.addEventListener('focus',()=>{
    seguirMouse=false;
    let contador=1;
    const cubrir_ojos = setInterval(()=>{
        animado.src='img/password/'+contador+'.png'
        if(contador < 8 ){
            contador++;
        }else{
            clearInterval(cubrir_ojos)
        }
    },60)
})

password.addEventListener('blur',()=>{
    seguirMouse=false;
    let contador=7;
    const cubrir_ojos = setInterval(()=>{
        animado.src='img/password/'+contador+'.png'
        if(contador > 1 ){
            contador--;
        }else{
            clearInterval(cubrir_ojos)
        }
    },60)
})