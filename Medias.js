class Medias {

    mediaAritmetica(vals) {
        try {
            let suma = 0;
            if(vals === null)
                return 0.0000;
            else
                vals.forEach(element => {
                suma += element;
                }); 
                return (suma/vals.length).toFixed(4);
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
            throw new Error(err);
        }
    }

    mediaGeometrica(vals) {
        try {
            let mult = 1;
            if(vals === null)
                return 0.0000;
            let el = vals.filter(numero => numero === 0)
            if(el.length == vals.length && vals.length > 1)
                    throw new Error('Exception');
            else 
                vals.forEach(element => {
                mult *= element;
                });
                return this.raizEnesima(mult, vals.length).toFixed(4);
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



