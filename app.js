// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

//Esta es mi funcion que suma dos numeros
const sum=(a,b) => {
    return a+b
}

//Solo un registro en cosola para nosotros 
console.log(sum(7,3))

//Exporta la funcion para usarla en otros archivos
module.exports={sum};

const fromDollarToYen = (dolar) =>{
let yen=(dolar*1.07)*156.5
return yen
}
const fromEuroToDollar2 = (euro) =>{
    let dolar=euro/1.07
    return dolar
}
const fromYenToPound = (yen) =>{
    let pound=(yen/156.5)*0.87
    return pound
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }