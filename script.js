

c1.addEventListener("click",function(){
  alert("hola");
});
c3.addEventListener("click",function(){
    crearPiramide();
  });

  function crearPiramide(){
    let circulo =prompt("selecciona el circulo: c1,c2,c3,c4,c5")
    let piePiramide =prompt("indica la base de la piramide (un numero del 1 al 10");
    let color =prompt("elige el color: rojo, amarillo,verde");
    let elementoSeleccionado = document.getElementById(circulo)
    switch(color){
        case "rojo":
            elementoSeleccionado.style.backgroundColor="red"
            break;
        case "amarillo":
            elementoSeleccionado.style.backgroundColor="yellow"
            break;
        case "verde":
            elementoSeleccionado.style.backgroundColor="green"
            break;
        default:
            alert("no es un color valido")
    }
    let ret ="<div style='text-align: center'>";
    for(let i=0;i<parseInt(piePiramide);i++){
        ret+="*".repeat(i+1)+ "<br>";
    }

   elementoSeleccionado.innerHTML =ret
  }