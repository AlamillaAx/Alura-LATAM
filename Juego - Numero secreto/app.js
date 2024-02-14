let numeroSecreto  = 0;
let numeroIntentos = 0;
let listaNumeroGenerado = [];
console.log(numeroSecreto);
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    return;
}

function verificarIntento() {
    let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto == numeroDelUsuario){
        asignarTextoElemento('p', `Acertaste el número en ${numeroIntentos} ${(numeroIntentos==1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if (numeroDelUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        numeroIntentos++
        limpiarCaja();
    }

    return
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroGenerado);
    // Si ya se sortearon todos los numeros
    if (listaNumeroGenerado.length==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        //Si el numero generado esta en la lista
        if (listaNumeroGenerado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroGenerado.push(numeroGenerado);
            return numeroGenerado;
    }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
    return;
}

function reiniciarJuego(){
    //Limpiar la caja
    //Indicar mensaje de numeros
    //Generar numero aleatorio
    // Desabilitar boton reinicio
    //Inicializar el numero de intentos
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();

