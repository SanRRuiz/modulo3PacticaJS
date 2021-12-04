

let autos = [{
    marca : "Ford",
    modelo : "Fiesta",
    precio : 150000,
    km : 200,
    color : "Azul",
    cuotas : 12,
    anio : 2019,
    patente : "APL123",
    vendido : false,
    },
    {
    marca : "Toyota",
    modelo : "Corolla",
    precio : 100000,
    km : 0,
    color : "Blanco",
    cuotas : 14,
    anio : 2019,
    patente : "JJK116",
    vendido : false,
    }];
module.exports = autos;

let autos = require('./autos');

const concesionaria = {
   autos: autos,
 
   buscarAuto: function(patente){
      for(let i = 0; i<autos.length; i++){
     if(patente === autos[i].patente){
        return autos[i];
        }
      }
     return null;
    },
    venderAuto: function(patente){
        let auto = this.buscarAuto(patente);
        auto.vendido = true;
    },
    autoParaLaVenta: function(){
        return this.autoParaLaVenta.filter(auto => auto.vendido === false);
    },
    autosNuevos: function(){
        let autos0Km = [];
        let autosDisponiblesDeAutosNuevos = this.autoParaLaVenta() 
        for(let i = 0; i<autosDisponiblesDeAutosNuevos.length; i++){
            if(autosDisponiblesDeAutosNuevos[i].km <= 100){
                autos0Km.push(autosDisponiblesDeAutosNuevos[i]);
            }
        }
        return autos0Km;
    },
    listaDeVentas: function(){
        let listaVendidos = [];
        for(let i = 0; i<autos.length; i++){
            if(autos[i].vendido){
                listaVendidos.push(autos[i].precio)
            }

        }
        return listaVendidos;
    },
    totalDeVentas: function(){
        let listaVendidos = this.listaDeVentas()
        let suma = listaVendidos.reduce(function(acum,num){
            return acum + num;
        })
        return suma;
    },
    puedeComprar: function(auto, persona){
        let precioDeCuotas = auto.precio / auto.cuotas;
        return(persona.capacidadDePagoTotal >= auto.precio &&
        persona.capacidadDePagoEnCuotas >= precioDeCuotas)
    },
    autosQuePuedeComprar: function(persona){
        let listaDeAutos = [];
        let autosAVender = this.autoParaLaVenta()
        for(let i = 0; i<autosAVender.length; i++){
            if(this.puedeComprar(autosAVender[i].persona)){
                listaDeAutos.push(autosAVender[i]);
            }
        }
        return listaDeAutos;
    },
}   

console.log(concesionaria);