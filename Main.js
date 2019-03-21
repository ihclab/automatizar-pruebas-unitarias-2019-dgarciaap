const Fs = require('fs');

class Main {
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
            this.parse(numero);
        }
    })
}

    espacios(campos) {
        let numeros = [];
        campos.forEach(elements => {
            numeros.push(elements[2].split(' '));
        })
        //console.log(numeros);
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
        console.log(valoresFinalFinal);
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
