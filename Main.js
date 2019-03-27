const Fs = require('fs');
const m = require('./Medias');

class Main {
    constructor() {
        this.media = new m();
    }
    leerArchivo() {
        Fs.readFile('./CasosPrueba.txt', 'utf-8', (err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                let renglones = data.split('\r\n');
                let campos = [];
                renglones.forEach(element => {
                    campos.push(element.split(':'));
                });
                //Splittear y convertir en 
                let numero = this.espacios(campos);
                numero = this.parse(numero);
                let cadena = '000';
                let esperados = [];
                for (let i = 0; i < numero.length; i++) {
                    esperados.push(this.funciones(campos[i][1],numero[i]));
                }
                esperados = this.compararResultados(esperados, campos);
                console.log(esperados);
            }
        })
    }
    
    espacios(campos) {
        let numeros = [];
        campos.forEach(elements => {
            numeros.push(elements[2].split(' '));
        })
        return numeros;
    }
    compararResultados(esperados, campos) {
        try {
            let exito = 'Éxito';
            let falla = 'Falla';
            let booleanos = [];
            for (let i = 0; i < campos.length; i++) {
                if(campos[i][3] == esperados[i]) {
                    booleanos.push(exito.fontcolor('green'));
                }
                else if(campos[i][3] != esperados[i]){
                    booleanos.push(falla.fontcolor('red'));
                }
            }
            return booleanos;
        }
        catch(err) {
            console.log(err);
        }
    }

    funciones(funcion, parametros) {
        try {
            let a = 0;
            if(funcion == 'mediaAritmetica') {
                a = this.media.mediaAritmetica(parametros);
            }
            else if(funcion == 'mediaGeometrica') {
                a = this.media.mediaGeometrica(parametros);
            }
            else if(funcion == 'mediaArmonica') {
                a = this.media.mediaArmonica(parametros);
            }
            else {
                a = 'Método no encontrado';
            }
            return a;
        }
        catch(err) {
            console.log(err);
        }
    }


    parse(numeros) {
        let valoresFinalFinal = [];
        numeros.forEach(element => {
            if(element[0] === 'NULL')
                valoresFinalFinal.push(null);
            else 
                valoresFinalFinal.push(this.convertirNumero(element));
        });
        return valoresFinalFinal;
    }

    convertirNumero(numeros){
        let a = [];
        numeros.forEach(numero => {
            a.push(parseInt(numero,10));
        });
        return a;
    }


}

let main = new Main();
main.leerArchivo();
