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
                //let endTime = new Date(); //ms al comenzar
                    //Splittear por salto de líne y después por :
                    let renglones = data.split('\r\n');
                    let campos = [];
                    renglones.forEach(element => {
                        campos.push(element.split(':'));
                    });
                    //Splittear y convertir en int
                    let numero = this.espacios(campos);
                    numero = this.parse(numero);
                    //Cadena para concatenar resultados de pruebas
                    let cadena = '000';
                    //Ejecutar funciones y comparar con valores esperados
                    let esperados = [];
                    for (let i = 0; i < numero.length; i++) {
                        esperados.push(this.funciones(campos[i][1],numero[i]));
                        //console.log(endTime.getTime().toFixed(4) + 'ms');
                    }
                    let resultados = [];
                    let endTime = new Date();
                    resultados = this.compararResultados(esperados, campos);
                    //Imprimir resultados en consola y hacer txt
                    let stream = Fs.createWriteStream("ResultadosPruebasDiana.txt");
                    stream.once('open', (fd) => {
                        console.group("Pruebas");
                        for (let i = 0; i < resultados.length; i++) {
                            if(resultados[i] == 'Éxito') { //Color verde
                                stream.write(campos[i][0] + ' ' +
                                resultados[i] + ' ' + campos[i][1] + ' Calculado = ' +
                                esperados[i] + ' T.E: ' + endTime.getTime() + 'ms\n');
                                console.log('\x1b[32m' + campos[i][0] + ' ' +
                                 resultados[i] + ' ' + campos[i][1] + ' Calculado = ' +
                                 esperados[i] + ' T.E: ' + endTime.getTime() + 'ms');
                            }  
                            else { //Color rojo
                                stream.write(campos[i][0] + ' ' + resultados[i]
                                + ' ' + campos[i][1] + ' Calculado = ' + esperados[i] + 
                                ' Esperado: ' + campos[i][3] +' T.E: ' + endTime.getTime() + 'ms\n');
                                console.log('\x1b[31m' + campos[i][0] + ' ' + resultados[i]
                                 + ' ' + campos[i][1] + ' Calculado = ' + esperados[i] + 
                                 ' Esperado: ' + campos[i][3] +' T.E: ' + endTime.getTime() + 'ms');
                            }
                        }
                        console.groupEnd();
                        stream.end();
                    });
                        //console.log(esperados);
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
            /*let exito = 'Éxito';
            let falla = 'Falla';*/
            let booleanos = [];
            for (let i = 0; i < campos.length; i++) {
                if(campos[i][3] == esperados[i]) {
                    booleanos.push('Éxito');
                }
                else if(campos[i][3] != esperados[i]){
                    booleanos.push('Falla');
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
