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
            let esperados = [];
            for (let i = 0; i < campos.length; i++) {
                esperados[i] = this.funciones(campos[i][1], numero[i]);                
            }
            esperados = this.compararResultados(esperados, campos);
            console.log(esperados);
        }
    })
}

    compararResultados(esperados, campos) {
        let booleanos = [];
        for (let i = 0; i < campos.length; i++) {
            if(isNaN(campos[i][3])) {
                booleanos.push(null);
            }
            else if(campos[i][3] == esperados[i]) {
                booleanos.push(true);
            }
            else if(campos[i][3] != esperados[i]){
                booleanos.push(false);
            }
        }
        return booleanos;
    }

    funciones(funcion, parametros) {
        let m = 0;
        if(funcion == 'mediaAritmetica') {
            m = this.media.mediaAritmetica(parametros);
            //console.log(parametros);
        }
        else if(funcion == 'mediaGeometrica') {
            m = this.media.mediaGeometrica(parametros);
        }
        return m;
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
            a.push(parseInt(numero,10));
        });
        return a;
    }


}

let main = new Main();
main.leerArchivo();
