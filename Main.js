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
            })
            //console.log(campos);
            // if()
            let numero = this.espacios(campos);
            numero = this.parse(numero);
            //console.log(numero);
            let esperados = [];
            for (let i = 0; i < campos.length; i++) {
                /*if(i == 2) {
                    esperados[i] = this.funciones(campos[i][1], numero[i])
                }*/
                esperados[i] = this.funciones(campos[i][1], numero[i]);
            }
            //esperados = this.compararResultados(esperados, campos);
            console.log(esperados);
        }
    })
}

    compararResultados(esperados, campos) {
        try {
            let booleanos = [];
            for (let i = 0; i < campos.length; i++) {
                if(campos[i][3] == esperados[i]) {
                    booleanos.push(true);
                }
                else if(campos[i][3] != esperados[i]){
                    booleanos.push(false);
                }
                return booleanos;
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    funciones(funcion, parametros) {
        try {
            let m = 0;
            if(funcion == 'mediaAritmetica') {
                console.log(parametros);
                m = this.media.mediaAritmetica(parametros);
            }
            else if(funcion == 'mediaGeometrica') {
                console.log(parametros);
                m = this.media.mediaGeometrica(parametros);
            }
            return m;
        }
        catch(err) {
            console.log(err);
        }
    }

    espacios(campos) {
        let numeros = [];
        campos.forEach(elements => {
            numeros.push(elements[2].split(' '));
        })
        return numeros;
    }

    parse(numeros) {
        let valoresFinalFinal = [];

        for (let i = 0; i < numeros.length; i++) {
            // console.log(numeros[i]);
            // parametros[i].forEach(element => {
            // })
            valoresFinalFinal.push(this.convertirNumero(numeros[i]));
        }
        //console.log(valoresFinalFinal);
        return valoresFinalFinal;
    }

    convertirNumero(numeros){
        let a = [];
        numeros.forEach(numero => {
            if(numero == 'NULL') {
                a.push(null);
            }
            else {
                a.push(parseInt(numero,10));
            }
        });
        return a;
    }


}

let main = new Main();
main.leerArchivo();
