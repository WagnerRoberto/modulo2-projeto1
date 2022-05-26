 const p2 = document.querySelector('#armadura');
 const img = document.querySelector('#imagem');
 let acaoBotao = document.querySelector('#botaoDeHumor');

 function change(){
    let random = Math.floor(4 * Math.random());
    
    if(random == 0){
        img.src = './assets/image/armadura de prata.png';
        p2.innerHTML = 'Armadura de Prata';
    }else if(random == 1){
        img.src = './assets/image/armadura de ouro.png';
        p2.innerHTML = 'Armadura de Ouro';
    }else if(random == 2){
        img.src = './assets/image/armadura divina.png';
        p2.innerHTML = 'Armadura Divina';
    }else if(random == 3){
        img.src = './assets/image/armadura de bronze.png';
        p2.innerHTML = 'Armadura de Bronze'
    }
}
acaoBotao.addEventListener('click', change );
