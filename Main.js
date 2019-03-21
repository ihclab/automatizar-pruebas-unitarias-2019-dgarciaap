const Fs = require('fs');

Fs.readFile('./CasosPrueba.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(data);
        let renglon = data.split('\r\n');
        let campos = [];
        renglon.forEach(element => {
            campos.push(element.split(':'));
        })
        console.log(campos);
    }
})
