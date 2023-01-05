
 const quadradoAzul = document.querySelector('.azul');

 const btnTrocaCor = document.getElementById('btn-troca-cor');
    
 function trocarCor() {
    quadradoAzul.classList.remove("azul");
    quadradoAzul.classList.add("amarelo");
  }

  btnTrocaCor.addEventListener("click", trocarCor);