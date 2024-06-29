var elementosDuvida = document.querySelectorAll(".duvida")

elementosDuvida.forEach(function(duvida){
  duvida.addEventListener("click", function(event){
    duvida.classList.toggle("ativa")
  })
})