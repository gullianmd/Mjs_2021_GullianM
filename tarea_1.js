// EJERCICIO 1
function num_par(numero){
    if(numero%2==0){
        return console.log("el número es par");
    }else{
        return console.log("el número es impar");
    }
};
// EJERCICIO 2
function posicion_en_string(letra){
    var palabra = "abcdefghijklmnñopqrstuvwxyz";
    return palabra.indexOf(letra);
};
// EJERCICIO 3
function precio_con_iva(precio){
    return total = (precio*0.19)+precio;
};
// EJERCICIO 4
function nuevo_dado(nombre){
    function fn_interna(){
        console.log (nombre+" ha tirado un dado y ha salido : "+Math.floor(Math.random()*6))
    };
    return fn_interna;
};
// EJERCICIO 5
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
};
Persona.prototype.obtenerUsuario = function (){
    return this.nombre+" "+this.edad;
}
Persona.prototype.guardarLocal = function(){
    localStorage.setItem(this.nombre, this.edad);
}
Persona.prototype.guardarSesion = function(){
    sessionStorage.setItem(this.nombre, this.edad);
}
