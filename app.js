let numeroSecreto = 0;
//siempre que se llame una función debe ser con paréntesis
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento () {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
        if (numeroUsuario === numeroSecreto) {
            asignarTextoElemento('p',`¡Felicidades! Acertaste el número secreto en ${intentos} ${intentos==1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }   else if (numeroUsuario>numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        limpiarCaja();
    intentos++;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Número Secreto');
    asignarTextoElemento('p',`Indica un número de 1 al ${numeroMaximo} `);
    numeroSecreto = generacionNumeroSecreto();
    intentos = 1;
}

function generacionNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generacionNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarjuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();