class Medias {

    mediaAritmetica(vals) {
        try {
        let suma = 0;
        vals.forEach(element => {
            suma += element;
            return (suma/vals.length).toFixed(4);
        }); 
        }
        catch(err) {
            throw new Error(err);
        }
    }

    raizEnesima(x, n) {
        try {
        return Math.pow(x,(1/n));
        }
        catch(err) {
            return new Error(err);
        }
    }

    mediaGeometrica(vals) {
        try {
        let mult = 1;
        vals.forEach(element => {
            mult *= element;
            return this.raizEnesima(mult, vals.length).toFixed(4);
        });
        }
        catch(err) {
            throw new Error(err);
        }
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



