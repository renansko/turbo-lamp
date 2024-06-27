let clickCount = 0

function moveButtonRandomly() {
    let acumulador = 0

    if(acumulador === 1){
        praQuePoPupShow()
    }
    clickCount += 1;
    console.log(clickCount)
    if (clickCount >= 10) {
        praQuePoPupShow()
        clickCount = 0; 
        acumulador = 1
        return;
    }
    

    const button = document.querySelector('.btn-nao');
    const option = document.querySelector('.option');
    const optionRect = option.getBoundingClientRect();

    const maxX = optionRect.width - button.offsetWidth;
    const maxY = optionRect.height - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function praQuePoPupShow() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  function trocarTela() {
    // Oculta o option quando o botão "Sim" é clicado
    var options = document.querySelectorAll('.option');
    var container2 = document.getElementById("container2");

    if(container2.style.display === 'flex' ){
        container2.style.display = 'none';
        options.forEach(function(option) {
            option.style.display = 'flex';
        });  
    }else{
        container2.style.display = 'flex';
        options.forEach(function(option) {
            option.style.display = 'none';
        });
    }
   

}
