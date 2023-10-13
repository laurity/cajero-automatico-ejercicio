const depositado = document.getElementById("depositado");
const saldo = document.getElementById("saldo");
const ingresar = document.getElementById("ingresar");
const retirar = document.getElementById("retirar");
const depositar = document.getElementById("depositar");

const saldoInicial = 1000;
let saldoActual = saldoInicial;


retirar.addEventListener('click', () =>{
    const cantidad = parseFloat(ingresar.value);
    if(isNaN(cantidad) || cantidad <= 0 || cantidad > saldoActual){
        depositado.textContent = "Importe no válido";
    }
    else{
        saldoActual-=cantidad;
        actualizar();
        depositado.textContent = `Retirado: ${cantidad}€`
    }
});
depositar.addEventListener('click', () =>{
    const cantidad = parseFloat(ingresar.value);
    if(isNaN(cantidad) && cantidad <=0){
        depositado.textContent = "Importe no válido";
    }
    else{
        saldoActual+=cantidad;
        actualizar();
        depositado.textContent = `Ingresado: ${cantidad}€`
    }

});


const actualizar = () =>{
    saldo.textContent = `Importe: ${saldoActual}€`;
}
