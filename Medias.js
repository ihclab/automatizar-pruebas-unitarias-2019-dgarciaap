class Medias {

    mediaAritmetica(vals) {
        let suma = 0;
        vals.forEach(element => {
            suma += element;
        }); 
        return (suma/vals.length).toFixed(4);
    }

    raizEnesima(x, n) {
        return Math.pow(x,(1/n));
    }

    mediaGeometrica(vals) {
        let mult = 1;
        vals.forEach(element => {
            mult *= element;
        });
        return this.raizEnesima(mult, vals.length).toFixed(4);
    };

    mediaArmonica (vals){
        /*let suma = 0;
        vals.forEach(element => {
            suma += (1/element);
        });
        suma = (vals.length/result);
        return suma;*/
        return "Método no implementado";
    }
}

module.exports = Medias;



