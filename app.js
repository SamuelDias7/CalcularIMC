let alturaV = 0;

let pesoV = 0;

let alturaX = 0;

let imc = 0;

let contador = 0;

//let imc = 0;

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Calcular IMC';

let subTitulo = document.querySelector('p');
subTitulo.innerHTML = 'de play para inicar calculo:';


function altura(){

    nameButton = document.getElementById('altura').innerHTML;
    document.querySelector('input').removeAttribute('disabled');
    let btn = document.getElementById('altura');
    btn.innerHTML = 'Enviar Altura';
    
    let btn2 = document.getElementById('reiniciar');
    btn2.innerHTML = 'Enviar Peso';

    btn2 = document.getElementById('altura').removeAttribute('disabled');
    btn2 = document.getElementById('reiniciar').removeAttribute('disabled');

    //categorizar();

    alturaV = 0;

    pesoV = 0;
    
    alturaV = document.querySelector('input').value;

    console.log(alturaV)
    console.log(nameButton)

    alturaX = alturaV * alturaV;

    let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Calcular IMC';

    let subTitulo = document.querySelector('p');
    subTitulo.innerHTML = 'Informe a sua altura:';

    //!= bloqueia e vai para o peso
    if(alturaV != 0 && nameButton != 'Refazer'){
        
        subTitulo.innerHTML = 'Informe o seu peso:';

        document.getElementById('altura').setAttribute('disabled',false);
    }

    limparCampo();


}

function peso(){
    pesoV = document.querySelector('input').value;
    limparCampo();
    //document.getElementById('reiniciar').setAttribute('disabled', true);

    
if(pesoV){
    imc = parseFloat(pesoV) / parseFloat(alturaX);

    imc = imc *100;


    subTitulo.innerHTML = 'Seu IMC é de:';
    let campo = document.querySelector('input');
    campo.value = imc;
    categorizar();

    alert('Valor de campo:' + pesoV);
}else{
    alert('O peso não pode ser vazio');
}


}

function limparCampo(){
    let campo = document.querySelector('input');
    campo.value= '';

}

function categorizar(){

    if(imc < 18.5){
        titulo = document.querySelector('h1');
        titulo.innerHTML = 'abaixo do peso';
        
    }else if(imc < 24.9){
        //alert('Peso Normal');

        titulo = document.querySelector('h1');
        titulo.innerHTML = 'Peso Normal';


    }else if(imc < 29.9){
        //alert('Sobrepeso');
        titulo = document.querySelector('h1');
        titulo.innerHTML = 'Sobrepeso';

    }else if(imc < 34.9){
        //alert('Obesidade Grau I');
        titulo = document.querySelector('h1');
        titulo.innerHTML = 'Obesidade Grau I';

    }else if(imc < 39.9){
        //alert('Obesidade Grau II');
        titulo = document.querySelector('h1');
        titulo.innerHTML = 'Obesidade Grau II';

    }else if(imc >=40){
        //alert('Obesidade Móbida');
        titulo = document.querySelector('h1');
        titulo.innerHTML = 'Obesidade Móbida';
    }else{
        titulo = document.querySelector('h1');
        titulo.innerHTML = 'ERRO';

    }

    let btnR = document.getElementById('altura');
    btnR.innerHTML = 'Refazer';
    document.getElementById('altura').removeAttribute('disabled');
    //lturaV = 0;
    //pesoV = 0;
    let campo = document.querySelector('h1');
    campo.value = '';

  
}

function reiniciarGame(){
    
}


