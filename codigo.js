const superObjeto = {
    mascotas : ['perros','gatos','canarios','pez','serpiente'],

    eliminarMascota : function(mascotaPorEliminar){
        if (this.mascotas.includes(mascotaPorEliminar)){
            const indiceArreglo = this.mascotas.indexOf(mascotaPorEliminar);
            const mascotaEliminada = this.mascotas.splice(indiceArreglo, 1);
            return `Eliminaste a ${mascotaEliminada} del arreglo`;     
        }else{
            return `${mascotaPorEliminar} no está en el arreglo`;
        };
    },

    eliminarUltimaMascota : function(mascotaPorEliminar){
            return this.mascotas.pop();
        },

    agregarMascotaAlFinal : function(mascotaPorAgregar){
            return this.mascotas.push(mascotaPorAgregar);  
    },

    contadorDeMascotas : function(){
        const mascotaFiltrada = this.mascotas.filter(mascota => mascota.lastIndexOf('os') !== -1);
        return `En el arreglo hay ${mascotaFiltrada.length} que terminan con 'os'`;
    }

    };


const trabajador = {
    nombre: 'Jhon Smith',
    cargo: 'QA',
    empresa: {
        ubicación: {
            comuna: 'Santiago',
            puesto: 'nº 24',
        },
        datos: {
            nombre: 'ACME',
        },
        clientes: ['Facebook', 'Google'],

    },
    gustos: ['comer', 'ver televisión', 'dormir'],
    hijos: null,

    estadoTrabajador : ({
        nombre,
        cargo,
        empresa: { datos: { nombreEmp } },
        gustos,
        hijos
    }) => `El trabajador (${nombre}) trabaja en (${cargo}) con cargo (${cargo}) y le gusta (${gustos[0]}) y (${(gustos.length - 1)}) más, (${(hijos === null ? 'no tiene hijos' : 'tiene ' + hijos + ' hijo/s')})`,

    estadoTrabajador2 : ({
        nombre,
        cargo,
        empresa: {
            datos: { nombreEmp },
            ubicación: { comuna, puesto },
            clientes
        }
    }) => `El trabajador (${nombre}) va a su trabajo en (${comuna}), es (${cargo}), en el puesto (${puesto}), trabaja con (${clientes[0]}) y (${clientes[1]})`
    
}

