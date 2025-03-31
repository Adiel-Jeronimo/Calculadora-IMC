/* 
    Objetivo: Pegar o numero inserido do input peso e pegar o numero inserido do input altura ao clicar no botão Calcular ele ira pegar e fazer o calculo do IMC e depois exibir o valor do resultado na tela 

        Passo 1: Dar um jeito de pegar o valor que tiver dentro do input peso
        Passo 2: Dar um jeito de pegar o valor que tiver dentro do input altura
        Passo 3: Dar um jeito de pegar o click do botão
        Passo 4: Conseguir clicar no botão de calcular 
        Passo 5: Ao clicar no botão de calcular terá que pegar oque estiver dentro do peso e altura e fazer o calculo do IMC
        Passo 6: Apagar oque estiver no input peso e altura
        Passo 7: Depois de fazer o calculo do IMC terá que exibir o resultado na tela para o usuario
        Passo 8: Exibir para o usuario qual o indice do IMC e se ele esta acima do peso ou não

    Objetivo 2: Validar os inputs para só entrar numero ate 300 se passar disso não pode exibir nada

        Passo 1: Entender como que funcionará a parte de verificação para que o input não receba valores maiores que 300
        Passo 2: Fazer um alerta se o usuario clicar no botão calcular sem colocar os valores abrir um pop-up dizendo que está faltando valores
*/

const btnCalcular = document.querySelector('#btn-calcular');


btnCalcular.addEventListener("click", function (e) {
    e.preventDefault();    

    const peso = document.querySelector('#peso');
    const valorPeso = peso.value;
    const altura = document.querySelector('#altura');
    const valorAltura = altura.value;
    let valorIMC = valorPeso / (valorAltura * valorAltura);

    if (valorIMC >= 0 && valorIMC <= 18.5){
        alert('Abaixo do normal');
    }else if (valorIMC >= 18.5 && valorIMC <= 24.9){
        alert('Normal');
    }else if (valorIMC >= 25.0 && valorIMC <= 29.9){
        alert('Sobrepeso');
    }else if (valorIMC >= 30.0 && valorIMC <= 34.9){
        alert('Obesidade grau I');
    }else if (valorIMC >= 35.0 && valorIMC <= 39.9){
        alert('Obesidade grau II');
    }else if (valorIMC >= 40,0){
        alert('Obesidade grau III')
    }else{
        return;
    }
});